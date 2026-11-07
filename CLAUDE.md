# Notes for AI assistants working on this repo

- Read `brain/vision.md`, `brain/principles.md` and `brain/style.md` before writing or reviewing any edition content. They are the editorial rules.
- New edition: `npm run new -- "Title"`. Follow the catalog entry format in `brain/style.md`; every entry ends with an Access line (link · license · cost · requirements).
- Art goes in `public/art/<NNN>/` and is referenced with root paths (`/art/<NNN>/file.png`); the base path is added at build time. Email needs PNG/JPG, not SVG.
- Verify facts and licenses against primary sources before listing an item. Mark closed or weights-available items as such.
- Run `npm run build` before committing; it validates every edition's frontmatter.
