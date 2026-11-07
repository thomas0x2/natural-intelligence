// Start a new edition: npm run new -- "Title of the edition"
// Creates editions/<NNN>-<slug>/index.md (as a draft) and public/art/<NNN>/.
import { readdirSync, mkdirSync, writeFileSync, existsSync } from 'node:fs';

const title = process.argv.slice(2).join(' ').trim();
if (!title) { console.error('Usage: npm run new -- "Title of the edition"'); process.exit(1); }

const nums = readdirSync('editions').map((d) => parseInt(d, 10)).filter((n) => !Number.isNaN(n));
const number = nums.length ? Math.max(...nums) + 1 : 0;
const nnn = String(number).padStart(3, '0');
const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const dir = `editions/${nnn}-${slug}`;
if (existsSync(dir)) { console.error(`${dir} already exists`); process.exit(1); }

mkdirSync(dir, { recursive: true });

const today = new Date().toISOString().slice(0, 10);
writeFileSync(`${dir}/index.md`, `---
title: ${JSON.stringify(title)}
number: ${number}
date: ${today}
summary: One or two sentences on what this edition is about.
cover: /art/plates/07-physarum.jpg
coverAlt: Describe the cover image for someone who cannot see it.
coverCredit: "PLATE NN · Title. The rule that made it."
topics: []
draft: true
---

## Purpose

A short opening note for this edition.

## Understanding Minds

Optional: one sentence introducing the section.

### Name of the thing

![Describe the plate](/art/plates/16-brain-slice.jpg "Plate 16 · Brain slice")

What it is, what it lets you do, what it is like to use, what to watch out for.

> **Access** · [example.org](https://example.org) · License · Cost · What you need to run it

## Letters

`);
console.log(`Created ${dir}/index.md. Pick plates from /plates/ for the cover and entries.`);
