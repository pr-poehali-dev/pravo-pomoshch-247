import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { BlogPost } from './BlogPostData';

interface BlogPostListProps {
  posts: BlogPost[];
  searchQuery: string;
  selectedCategory: string;
  categories: string[];
  filteredPosts: BlogPost[];
  onSearchChange: (query: string) => void;
  onCategoryChange: (category: string) => void;
  onPostSelect: (post: BlogPost) => void;
}

export default function BlogPostList({
  filteredPosts,
  searchQuery,
  selectedCategory,
  categories,
  onSearchChange,
  onCategoryChange,
  onPostSelect
}: BlogPostListProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Юридический блог
          </h1>
          <p className="text-lg text-muted-foreground">
            Практические советы и разборы реальных дел
          </p>
        </div>
        
        {/* Поиск и фильтры */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Поиск статей..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category || (selectedCategory === '' && category === 'Все') ? "default" : "outline"}
                  size="sm"
                  onClick={() => onCategoryChange(category === 'Все' ? '' : category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Статьи */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>
                <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Icon name="User" size={14} />
                    <span>{post.author.name}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Calendar" size={14} />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {post.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{post.tags.length - 3}
                    </Badge>
                  )}
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => onPostSelect(post)}
                >
                  Читать статью
                  <Icon name="ArrowRight" size={14} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-muted-foreground mb-2">
              Статьи не найдены
            </h3>
            <p className="text-muted-foreground">
              Попробуйте изменить поисковый запрос или выбрать другую категорию
            </p>
          </div>
        )}
        
        {/* Призыв к действию */}
        <div className="mt-12 bg-white rounded-xl shadow-sm p-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Не нашли ответ на свой вопрос?
          </h2>
          <p className="text-muted-foreground mb-6">
            Получите персональную консультацию от наших экспертов
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать консультацию
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.open('https://t.me/migracia_bot', '_blank')}>
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в чат
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}