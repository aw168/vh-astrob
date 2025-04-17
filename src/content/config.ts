import { defineCollection, z } from 'astro:content';

// 博客集合的模式定义
const blogCollection = defineCollection({
  schema: z.object({
    id: z.string(),
    title: z.string(),
    date: z.date(),
    categories: z.string().optional(),
    cover: z.string().optional(),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
    top: z.boolean().optional(),
    hide: z.boolean().optional(),
  }),
});

// 导出集合配置
export const collections = {
  'blog': blogCollection,
}; 
