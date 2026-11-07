# Natural Intelligence Catalog

Access to tools and ideas for minds, natural and artificial. A catalog in the spirit of the Whole Earth Catalog, for the late 2020s: AI, intelligence, neuroscience and hardware design. Open things first.

This repository is the whole catalog: its **brain** (what it believes, what it covers, where it looks) and every **edition**. It builds into a static website, an RSS feed and an email-ready copy of each issue.

## Layout

```
brain/                  The catalog's knowledge base. Plain markdown.
  vision.md             Why the catalog exists and who it is for.        (shown on the site)
  principles.md         Editorial ideals: functionalism, open source...  (shown on the site)
  topics.md             The sections of the catalog.                     (shown on the site)
  style.md              Voice, the catalog entry format, art rules.      (internal)
  sources.md            Where we look for material.                      (internal)
  backlog.md            Ideas and candidate entries.                     (internal)
editions/
  000-access-to-minds/
    index.md            One edition. Frontmatter + markdown.
public/art/plates/      The plates: generated art, one rule each (index in src/data/plates.json).
src/                    The Astro site (layouts, pages, styles).
scripts/                Helpers: start a new edition, render SVG art to PNG.
```

A brain doc appears on the website only when its frontmatter says `public: true`.

## Working on the catalog

Requires Node 22.23 or newer.

```sh
npm install
npm run dev                       # live preview at http://localhost:4321/natural-intelligence/
npm run new -- "Edition title"    # start the next edition as a draft
npm run build                     # build the site into dist/
```

Drafts (`draft: true`) show in `npm run dev` but are left out of the built site, the RSS feed and email.

### Writing an edition

1. `npm run new -- "Title"` creates `editions/<NNN>-<slug>/index.md`.
2. Write entries following [`brain/style.md`](brain/style.md). Each catalog entry ends with an **Access** line.
3. Pick plates for the cover and each entry (see `/plates/` and `brain/style.md`). For new SVG art, `npm run cover -- path/to/art.svg` makes the PNG email clients need (requires Playwright).
4. Set `draft: false` and merge to `main`. The site deploys itself.
5. Move any backlog items you used into the "Used" list in `brain/backlog.md`.

## Publishing

- **Website.** Every push to `main` builds and deploys to GitHub Pages through `.github/workflows/deploy.yml`. One-time setup: in the repository's Settings → Pages, set Source to "GitHub Actions". The site is then at https://thomas0x2.github.io/natural-intelligence/. For a custom domain, set the `SITE` and `BASE` environment variables in the workflow (for example `SITE=https://example.org`, `BASE=/`).
- **RSS.** `/rss.xml` carries the full text of every edition.
- **Email.** Each edition also builds to `/email/<id>.html`, a self-contained page with inline styles and absolute links that can be pasted into any newsletter tool. Alternatively point a tool with RSS-to-email (Buttondown, or self-hosted listmonk) at the feed. Put the signup link in `SUBSCRIBE_URL` in `src/site.ts`.

## License

Code is MIT (see `LICENSE`). Text and art are CC BY 4.0 unless an item says otherwise.
