import { defineCollection, z } from 'astro:content';

const teamCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    role: z.object({
      en: z.string(),
      fr: z.string().optional(),
    }),
    image: z.string().optional(),
    bio: z.string(),
    bioFr: z.string().optional(),
    order: z.number(),
    linkedin: z.string().optional(),
  }),
});

export const collections = {
  team: teamCollection,
};
