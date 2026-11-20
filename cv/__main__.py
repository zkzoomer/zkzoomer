"""Regenerate the CV with python -m cv."""

import argparse
from pathlib import Path

from . import DEFAULT_CONTENT, DEFAULT_OUTPUT, load_cv, render_pdf


def main() -> None:
    parser = argparse.ArgumentParser(description="Render the CV as a tagged PDF using Calibri.")
    parser.add_argument("--content", type=Path, default=DEFAULT_CONTENT, help="TOML source file")
    parser.add_argument("--output", type=Path, default=DEFAULT_OUTPUT, help="destination PDF")
    parser.add_argument("--font-dir", type=Path, help="directory containing Calibri TTF files")
    args = parser.parse_args()
    try:
        render_pdf(load_cv(args.content), args.output, font_dir=args.font_dir)
    except (OSError, KeyError, TypeError, ValueError) as error:
        parser.exit(1, f"cv: {error}\n")
    print(f"Wrote {args.output}")


if __name__ == "__main__":
    main()
