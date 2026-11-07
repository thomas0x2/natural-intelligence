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
mkdirSync(`public/art/${nnn}`, { recursive: true });
const today = new Date().toISOString().slice(0, 10);
writeFileSync(`${dir}/index.md`, `---
title: ${JSON.stringify(title)}
number: ${number}
date: ${today}
summary: One or two sentences on what this edition is about.
cover: /art/${nnn}/cover.png
coverAlt: Describe the cover image for someone who cannot see it.
coverCredit: "Title. Artist, year. License."
topics: []
draft: true
---

## Purpose

A short opening note for this edition.

## Understanding Minds

### Name of the thing

What it is, what it lets you do, what it is like to use, what to watch out for.

> **Access** · [example.org](https://example.org) · License · Cost · What you need to run it

## Letters

`);
console.log(`Created ${dir}/index.md and public/art/${nnn}/. Put the cover at public/art/${nnn}/cover.png.`);
