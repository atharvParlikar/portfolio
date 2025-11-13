import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    pubDatetime: z.coerce.date(),
    postSlug: z.string(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    category: z.enum(['technical', 'essay']).default('technical'),
    tags: z.array(z.string()),
    description: z.string(),
  }),
});

export const collections = { blog };
