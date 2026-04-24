// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { defineCollection } from "astro:content";
// Import Zod
import { z } from "astro/zod";
// Define a `loader` and `schema` for each collection
const blogsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      author: z.string(),
      date: z.date(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      isFeatured: z.boolean().optional().default(false),
    }),
});
// Export a single `collections` object to register your collection(s)
export const collections = { blog: blogsCollection };
