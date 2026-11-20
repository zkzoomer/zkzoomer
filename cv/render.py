import re
import shutil
import subprocess
import tomllib
from collections.abc import Iterable, Mapping
from html import escape
from pathlib import Path
from stat import S_IMODE
from tempfile import NamedTemporaryFile
from urllib.parse import urlsplit


DIRECTORY = Path(__file__).resolve().parent
DEFAULT_CONTENT = DIRECTORY / "content.toml"
DEFAULT_OUTPUT = DIRECTORY.parent / "public" / "Sergio_Martinez_CV.pdf"

INLINE_MARKUP = re.compile(r"\[([^\]\n]+)\]\(([^()\s]+)\)|\*\*([^*\n]+)\*\*")
FACES = (
    ("calibri.ttf", "Regular", 400, "normal", 0),
    ("calibrib.ttf", "Bold", 700, "normal", 1),
    ("calibrii.ttf", "Italic", 400, "italic", 2),
)


def load_cv(path: str | Path = DEFAULT_CONTENT) -> dict:
    """Read the CV content as an editable mapping."""
    with Path(path).open("rb") as file:
        return tomllib.load(file)


def inline(text: str) -> str:
    """Render the source's links and bold spans, escaping literal text."""
    parts = []
    end = 0
    for match in INLINE_MARKUP.finditer(text):
        parts.append(escape(text[end:match.start()]))
        label, url, bold = match.groups()
        if url is None:
            parts.append(f"<strong>{escape(bold)}</strong>")
        else:
            if urlsplit(url).scheme not in {"https", "http", "mailto"}:
                raise ValueError(f"Unsupported CV link: {url}")
            if label.startswith("**") and label.endswith("**"):
                label_html = f"<strong>{escape(label[2:-2])}</strong>"
            elif label.endswith("⤴"):
                label_html = f'{escape(label[:-1])}<span class="link-arrow"></span>'
            else:
                label_html = escape(label)
            parts.append(f'<a href="{escape(url)}">{label_html}</a>')
        end = match.end()
    parts.append(escape(text[end:]))
    return "".join(parts)


def bullet_list(items: Iterable[str]) -> str:
    return "<ul>" + "".join(f"<li>{inline(item)}</li>" for item in items) + "</ul>"


def entry_html(entry: Mapping) -> str:
    title = inline(entry["title"])
    if detail := entry.get("title_detail"):
        title += f' <span class="title-detail">{inline(detail)}</span>'
    location = entry.get("location")
    subtitle = entry.get("subtitle")
    dates = entry.get("dates")
    top_meta = location or (dates if not subtitle else None)
    top = f'<span class="meta">{inline(top_meta)}</span>' if top_meta else ""
    second = ""
    if subtitle or (location and dates):
        date = f'<span class="meta">{inline(dates)}</span>' if dates else ""
        second = f'<p class="pair subtitle"><span>{inline(subtitle or "")}</span>{date}</p>'
    bullets = bullet_list(entry["bullets"]) if entry.get("bullets") else ""
    return (
        '<div class="entry"><div class="entry-heading">'
        f'<div class="pair"><h3>{title}</h3>{top}</div>{second}'
        f"</div>{bullets}</div>"
    )


def section_html(section: Mapping) -> str:
    entries = "".join(entry_html(entry) for entry in section["entries"])
    css_class = ' class="compact"' if section.get("compact") else ""
    return f'<section{css_class}><h2>{escape(section["heading"])}</h2><hr>{entries}</section>'


def additional_html(additional: Mapping) -> str:
    notes = "".join(f"<p>{inline(note)}</p>" for note in additional["notes"])
    return f"""
        <section class="additional-info">
          <h2>{escape(additional["heading"])}</h2>
          <hr>
          <div class="additional">
            <div>
              <h3>{escape(additional["languages_heading"])}</h3>
              {bullet_list(additional["languages"])}
              {notes}
            </div>
            <div>
              <h3>{escape(additional["skills_heading"])}</h3>
              {bullet_list(additional["skills"])}
            </div>
          </div>
        </section>
    """


def calibri_css(font_dir: Path | None) -> str:
    from fontTools.ttLib import TTFont, TTLibError

    if font_dir is not None:
        files = {path.name.lower(): path for path in font_dir.iterdir() if path.is_file()}
    else:
        files = {}
    fontconfig = shutil.which("fc-match") if font_dir is None else None
    rules = []
    for filename, style, weight, slant, style_bits in FACES:
        path = files.get(filename)
        if fontconfig:
            match = subprocess.run(
                [fontconfig, "-f", "%{file}", f"Calibri:style={style}"],
                check=True, capture_output=True, text=True,
            ).stdout
            path = Path(match) if match else None
        missing = f"Calibri {style} is required. Supply {filename} using --font-dir."
        if path is None:
            raise ValueError(missing)
        try:
            with TTFont(path) as font:
                if (
                    font["name"].getBestFamilyName() != "Calibri"
                    or font["head"].macStyle & 3 != style_bits
                ):
                    raise ValueError(missing)
                if font["OS/2"].fsType & (0x0002 | 0x0100 | 0x0200):
                    raise ValueError(f"{path.name} does not allow the required PDF font subsetting.")
        except TTLibError as error:
            raise ValueError(missing) from error
        rules.append(
            f'@font-face {{ font-family: Calibri; src: url("{path.resolve().as_uri()}"); '
            f"font-style: {slant}; font-weight: {weight}; }}"
        )
    return "\n".join(rules)


def render_pdf(
    data: Mapping,
    output: str | Path = DEFAULT_OUTPUT,
    *,
    font_dir: str | Path | None = None,
) -> Path:
    """Write a tagged PDF with embedded Calibri and return its output path."""
    from weasyprint import CSS, HTML
    from weasyprint.text.fonts import FontConfiguration

    fonts = FontConfiguration()
    font_rules = calibri_css(Path(font_dir) if font_dir is not None else None)
    sections = "".join(section_html(section) for section in data["sections"])
    additional = additional_html(data["additional"]) if data.get("additional") else ""
    name = escape(data["name"])
    document = HTML(string=f"""
        <!doctype html>
        <html lang="en">
          <head><meta charset="utf-8"><title>{name} – CV</title></head>
          <body>
            <header>
              <h1>{name}</h1>
              <p class="contact">{inline(data["contact"])}</p>
            </header>
            <p class="summary">{inline(data["summary"])}</p>
            {sections}
            {additional}
          </body>
        </html>
    """)
    pdf = document.write_pdf(
        stylesheets=[
            CSS(string=font_rules, font_config=fonts),
            CSS(filename=DIRECTORY / "layout.css", font_config=fonts),
        ],
        font_config=fonts,
        pdf_tags=True,
    )
    output = Path(output)
    # Render first and replace the website asset only after the full file is written.
    with NamedTemporaryFile(dir=output.parent, suffix=".pdf", delete=False) as temporary:
        temporary_path = Path(temporary.name)
        try:
            temporary.write(pdf)
            temporary.close()
            if output.exists():
                temporary_path.chmod(S_IMODE(output.stat().st_mode))
            temporary_path.replace(output)
        finally:
            temporary_path.unlink(missing_ok=True)
    return output
