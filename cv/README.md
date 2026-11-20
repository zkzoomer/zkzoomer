# CV generator

Edit [content.toml](content.toml) to update the CV. Each role, degree, or project has its own entry with a title, location, subtitle, dates, and bullets. Optional fields can be omitted. Keep edits in the content file and layout changes in [layout.css](layout.css).

## Regenerate the PDF

From the repository root, with Python 3.11 or newer and WeasyPrint's native libraries installed, run the following. [WeasyPrint installation guide](https://doc.courtbouillon.org/weasyprint/v69.0/first_steps.html#installation)

```sh
python3 -m venv .venv
.venv/bin/python -m pip install -r cv/requirements.txt
.venv/bin/python -m cv --font-dir /path/to/calibri-fonts
```

The font directory needs `calibri.ttf`, `calibrib.ttf`, and `calibrii.ttf` from Windows or Office. If Fontconfig already finds all three installed faces, omit `--font-dir`. The generator embeds Calibri in the resulting PDF. [Microsoft Calibri font information](https://learn.microsoft.com/en-us/typography/font-list/calibri)

The default command updates `public/Sergio_Martinez_CV.pdf`, which is the file served by the website. To preview a different draft, pass `--content path/to/draft.toml --output /tmp/draft.pdf`. The content supports Markdown-style links and bold text inside fields, for example `[Link⤴](https://example.com)` and `**Tools:** Git, Linux`.

## Use from Python

```python
from cv import load_cv, render_pdf

data = load_cv()
data["additional"]["skills"][0] = "Rust, Python, TypeScript, Solidity"
render_pdf(data, "/tmp/cv.pdf", font_dir="/path/to/calibri-fonts")
```

## Verify text extraction

```sh
pdftotext -raw public/Sergio_Martinez_CV.pdf -
```

The PDF includes tagged headings, lists, links, and selectable text. Each position's location and dates appear with that position. The bottom section reads through Languages, Regulatory Awareness, and Tools before Technical Skills.
