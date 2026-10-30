import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { vnDate } from './lib/blog-core.mjs';

/** A date in the frontmatter; a bare `2026-10-31` is midnight in Vietnam (see `vnDate`). */
const date = z.union([z.date(), z.string()]).transform((v, ctx) => {
  try {
    return vnDate(v);
  } catch {
    ctx.addIssue({ code: 'custom', message: 'expected 2026-10-31 or 2026-10-31T07:00:00+07:00' });
    return z.NEVER;
  }
});

/**
 * Posts: `src/content/blog/<lang>/<slug>.md`. Translations of one post share
 * the slug; the app and the notifications use it as the post id. How to write
 * one: README.md, "Viết bài".
 */
const blog = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      /** Shown in lists, search results, social cards and as the push notification body. */
      summary: z.string().min(1).max(200),
      date,
      updated: date.optional(),
      /** About 1200×630, inside the repo next to the post. */
      cover: image(),
      coverAlt: z.string().min(1),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      /** Set to false to publish without a push notification. */
      notify: z.boolean().default(true),
      /** A go_router path in the app, e.g. `/calendar`; the app shows "Mở tính năng". */
      appRoute: z.string().regex(/^\/[^\s]*$/).optional(),
      sources: z
        .array(
          z.object({
            title: z.string().min(1),
            /** Leave out for a book, or a page whose address was not kept. */
            url: z.url({ protocol: /^https?$/ }).optional(),
            /** Language of the title, when it differs from the post's; guessed if left out. */
            lang: z.string().optional(),
          }),
        )
        .default([]),
    }),
});

export const collections = { blog };
