import { blogPostsGroup1 } from './data/BlogPostsGroup1';
import { blogPostsGroup2 } from './data/BlogPostsGroup2';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    title: string;
    experience: string;
  };
  date: string;
  category: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  ...blogPostsGroup1,
  ...blogPostsGroup2
];