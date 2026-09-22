import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** One line, plain language: what it is and who it is for. */
      summary: z.string(),
      /** Shown as the running subtitle on the case study. */
      role: z.string(),
      stack: z.array(z.string()),
      /** Free text so "2025" and "Spring 2025 — ongoing" both work. */
      period: z.string(),
      status: z.enum(['shipped', 'in progress', 'archived', 'prototype']),
      repo: z.string().url().optional(),
      live: z.string().url().optional(),
      /** Lower sorts first on the index. */
      order: z.number().default(99),
      /** Concrete figures shown on the case study header. Specifics convert. */
      metrics: z.array(z.object({ value: z.string(), label: z.string() })).optional(),
      /** Lead image on the home page; optional so text-only studies still publish. */
      cover: image().optional(),
      coverAlt: z.string().optional(),
      /** True once the case study is written; until then the index row links out. */
      caseStudy: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

const notes = defineCollection({
  loader: glob({ base: './src/content/notes', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, notes };
