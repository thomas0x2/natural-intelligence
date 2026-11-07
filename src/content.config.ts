import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One folder per edition: editions/<number>-<slug>/index.md
const editions = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './editions', generateId: ({ entry }) => entry.split('/')[0] }),
  schema: z.object({
    title: z.string(),
    number: z.number().int().nonnegative(),
    date: z.coerce.date(),
    summary: z.string(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    coverCredit: z.string().optional(),
    topics: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// The brain: the catalog's own knowledge base. Only docs marked public are shown on the site.
const brain = defineCollection({
  loader: glob({ pattern: '*.md', base: './brain' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().default(100),
    public: z.boolean().default(false),
  }),
});

export const collections = { editions, brain };
