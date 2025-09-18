import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <Icon name="Scale" className="text-primary" size={28} />
          <span className="font-heading text-xl font-bold text-primary">ПравоПомощь 24/7</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          {location.pathname === '/' ? (
            <>
              <a href="#services" className="text-sm hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-sm hover:text-primary transition-colors">О нас</a>
              <Link to="/blog" className="text-sm hover:text-primary transition-colors">Блог</Link>
              <a href="#contacts" className="text-sm hover:text-primary transition-colors">Контакты</a>
            </>
          ) : (
            <>
              <Link to="/" className="text-sm hover:text-primary transition-colors">Главная</Link>
              <Link to="/blog" className="text-sm hover:text-primary transition-colors">Блог</Link>
            </>
          )}
          <Button variant="destructive" size="sm" onClick={() => window.open('https://t.me/migracia_bot', '_blank')}>
            <Icon name="Phone" size={16} className="mr-2" />
            Срочно
          </Button>
        </div>
      </div>
    </header>
  );
}