import { useState } from 'react';
import { blogPosts } from '@/components/blog/BlogPostData';
import BlogPostList from '@/components/blog/BlogPostList';
import BlogPostView from '@/components/blog/BlogPostView';
import type { BlogPost } from '@/components/blog/BlogPostData';
import { useSEO } from '@/hooks/useSEO';

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const categories = ['Все', 'Миграция', 'Пенсии', 'Защита прав', 'Арбитраж'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === '' || selectedCategory === 'Все' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleBackToList = () => {
    setSelectedPost(null);
  };

  const handlePostSelect = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  // SEO для списка блога
  useSEO({
    title: selectedPost ? 
      `${selectedPost.title} — ПравоПомощь 24/7` : 
      'Блог — ПравоПомощь 24/7 | Юридические советы и консультации',
    description: selectedPost ?
      selectedPost.excerpt :
      'Читайте полезные статьи о юриспруденции, миграционном праве, пенсионных вопросах и защите прав. Экспертные советы от профессиональных юристов.',
    keywords: selectedPost ?
      selectedPost.tags.join(', ') :
      'юридический блог, советы юриста, миграционное право статьи, пенсионные вопросы, защита прав граждан',
    canonical: selectedPost ?
      `https://pravo-pomoshch-247.poehali.dev/blog/${selectedPost.id}` :
      'https://pravo-pomoshch-247.poehali.dev/blog'
  });

  if (selectedPost) {
    return (
      <BlogPostView 
        post={selectedPost} 
        onBack={handleBackToList}
      />
    );
  }

  return (
    <BlogPostList
      posts={blogPosts}
      searchQuery={searchQuery}
      selectedCategory={selectedCategory}
      categories={categories}
      filteredPosts={filteredPosts}
      onSearchChange={handleSearchChange}
      onCategoryChange={handleCategoryChange}
      onPostSelect={handlePostSelect}
    />
  );
}