import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Scale" className="text-primary" size={28} />
          <span className="font-heading text-xl font-bold text-primary">ПравоПомощь 24/7</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-sm hover:text-primary transition-colors">Услуги</a>
          <a href="#about" className="text-sm hover:text-primary transition-colors">О нас</a>
          <a href="#blog" className="text-sm hover:text-primary transition-colors">Блог</a>
          <a href="#contacts" className="text-sm hover:text-primary transition-colors">Контакты</a>
          <Button variant="destructive" size="sm">
            <Icon name="Phone" size={16} className="mr-2" />
            Срочно
          </Button>
        </div>
      </div>
    </header>
  );
}