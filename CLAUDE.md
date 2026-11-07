# Notes for AI assistants working on this repo

- Read `brain/vision.md`, `brain/principles.md` and `brain/style.md` before writing or reviewing any edition content. They are the editorial rules.
- New edition: `npm run new -- "Title"`. Follow the catalog entry format in `brain/style.md`; every entry ends with an Access line (link · license · cost · requirements).
- Art is plates in `public/art/plates/` (index in `src/data/plates.json`), referenced with root paths (`/art/plates/16-brain-slice.jpg`); the base path is added at build time. Email needs PNG/JPG, not SVG. Layout rules for editions are in `brain/style.md` under "Art and layout".
- After changing `src/lib/rehype-catalog.mjs`, delete `.astro/` and `node_modules/.astro/` before building: Astro caches rendered markdown and will not re-run the plugin on unchanged files.
- Verify facts and licenses against primary sources before listing an item. Mark closed or weights-available items as such.
- Run `npm run build` before committing; it validates every edition's frontmatter.
