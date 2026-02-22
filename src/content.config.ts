import { defineCollection, z } from 'astro:content';

const formationsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    details: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'formations': formationsCollection,
};
