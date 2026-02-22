import { defineCollection, z } from 'astro:content';

const formationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    institution: z.string(),
    logo: z.string(), // chemin vers le logo
    website: z.string().url().optional(),
    year: z.number().optional(),
    description: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = {
  'formations': formationsCollection,
};
