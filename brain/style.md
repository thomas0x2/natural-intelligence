---
title: Style guide
summary: Voice, the catalog entry format, and how to handle art.
order: 4
public: false
---

## Voice

Plain, direct and first-hand. Write like a knowledgeable friend recommending something they have actually used. Prefer short sentences and concrete detail over adjectives. No marketing language, no breathless predictions.

- Say what the thing is, then why it matters, then its limits.
- Quote the source when its own words are better than ours.
- Use "we" for the catalog's view and name the reviewer when it is one person's experience.

## Catalog entry format

Every entry follows this shape in markdown:

```markdown
### Name of the thing

Two to five short paragraphs. What it is, what it lets you do, what it is like to use, what to watch out for.

> **Access** · [example.org](https://example.org) · Open source (MIT) · Free · Runs on a laptop
```

The Access line always has, in order: link, license (or "Closed"), cost, and what you need to use it.

## Art

- Art for an edition lives in `public/art/<edition number>/`, and is referenced in markdown as `/art/<number>/<file>`.
- Every image gets alt text that describes it for someone who cannot see it.
- Every image gets a credit and license in its caption. Prefer work that is CC-licensed or made for the catalog.
- Prefer SVG for diagrams and generative pieces. Keep photos under about 500 KB each so emails stay light.
- A *plate* is a full-width image. Write it as:

```markdown
<figure class="plate">
  <img src="/art/000/cover.svg" alt="Description of the image" />
  <figcaption>Title. Artist, year. License.</figcaption>
</figure>
```

## Names and terms

- "Open source" for software under an OSI-approved license. "Open weights" for models under a license that allows use and modification. "Weights-available" otherwise.
- Write out an acronym on first use in each edition.
