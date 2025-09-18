import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import ConsultationForm from '../ConsultationForm';
import { BlogPost } from './BlogPostData';

interface BlogPostViewProps {
  post: BlogPost;
  onBack: () => void;
}

export default function BlogPostView({ post, onBack }: BlogPostViewProps) {
  const [showConsultationDialog, setShowConsultationDialog] = useState(false);

  const handleConsultationSubmit = (data: { name: string; phone: string; region: string; problem: string }) => {
    console.log('Заявка на консультацию из блога:', data);
    // Закрываем диалог после копирования
    setTimeout(() => {
      setShowConsultationDialog(false);
    }, 2500);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-6"
        >
          <Icon name="ArrowLeft" size={16} className="mr-2" />
          Назад к блогу
        </Button>
        
        <article className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-2">
                {post.category}
              </Badge>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center space-x-2">
                  <Icon name="User" size={16} />
                  <span>{post.author.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Briefcase" size={16} />
                  <span>{post.author.title}, {post.author.experience}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Calendar" size={16} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
            
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="mt-8 pt-6 border-t">
              <h3 className="text-lg font-semibold mb-3">Теги:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="mt-8 bg-primary/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Нужна помощь по этому вопросу?</h3>
              <p className="text-muted-foreground mb-4">
                Получите персональную консультацию от автора статьи
              </p>
              <div className="flex space-x-3">
                <Dialog open={showConsultationDialog} onOpenChange={setShowConsultationDialog}>
                  <DialogTrigger asChild>
                    <Button>
                      <Icon name="Phone" size={16} className="mr-2" />
                      Заказать консультацию
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-center">Консультация юриста</DialogTitle>
                      <DialogDescription className="text-center">
                        Заполните форму для получения консультации по теме статьи
                      </DialogDescription>
                    </DialogHeader>
                    <ConsultationForm 
                      onSubmit={handleConsultationSubmit} 
                      selectedService={`Консультация по статье: ${post.title}`}
                    />
                  </DialogContent>
                </Dialog>
                <Button 
                  variant="outline" 
                  onClick={() => window.open('https://t.me/migracia_bot', '_blank')}
                >
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Написать в чат
                </Button>
              </div>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
}