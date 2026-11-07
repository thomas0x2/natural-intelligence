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

## Art and layout

The site is set in Schibsted Grotesk and IBM Plex Mono on paper (#F2F2EE) and ink (#0B0B0B). All art is **plates**: small programs, a rule, a seed and a loop, drawn in dots on black. The plate index lives in `src/data/plates.json` and the images in `public/art/plates/`. New plates get the next number and a one-line rule.

How markdown becomes the catalog layout (see `src/lib/rehype-catalog.mjs`):

- Each `##` is a section. A `##` that contains `###` entries is a numbered catalog section; one without entries (Purpose, Letters) is a text section.
- Text between the `##` and the first `###` is the section's short intro.
- An image in that intro becomes a full-width lead plate. Its title is the caption: `"PLATE 23 · Chip die. The rule."`
- Each `###` is a card. An image straight after the heading is the card's plate; its title is the label: `"Plate 16 · Brain slice"`.
- The `> **Access** · ...` line sits at the bottom of the card.

```markdown
### Name of the thing

![Alt text describing the plate](/art/plates/16-brain-slice.jpg "Plate 16 · Brain slice")

What it is, why it matters, its limits.

> **Access** · [example.org](https://example.org) · Open source (MIT) · Free · Runs on a laptop
```

- Every image gets alt text that describes it for someone who cannot see it.
- Aim for three entries per section so the three-column grid fills.
- The edition cover is a plate too: set `cover`, `coverAlt` and `coverCredit` ("PLATE 07 · Physarum. The rule.") in the frontmatter.

## Names and terms

- "Open source" for software under an OSI-approved license. "Open weights" for models under a license that allows use and modification. "Weights-available" otherwise.
- Write out an acronym on first use in each edition.
