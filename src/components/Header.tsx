import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b shadow-sm">
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link to="/" className="flex items-center space-x-2 md:space-x-3 hover:opacity-80 transition-opacity">
            <img 
              src="https://cdn.poehali.dev/files/bbf08e25-285a-43c3-98e8-fcef73863f2e.png" 
              alt="ПравоПомощь 24/7 Logo"
              className="h-10 w-10 md:h-12 md:w-12 object-contain"
            />
            <span className="font-heading text-base md:text-xl font-bold text-primary">ПравоПомощь 24/7</span>
          </Link>
          <a 
            href="tel:+79770985807" 
            className="hidden lg:flex items-center space-x-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
          >
            <Icon name="Phone" size={16} className="text-primary" />
            <span>+7 (977) 098-58-07</span>
          </a>
        </div>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          {location.pathname === '/' ? (
            <>
              <a href="#services" className="text-sm hover:text-primary transition-colors font-medium">Услуги</a>
              <a href="#about" className="text-sm hover:text-primary transition-colors font-medium">О нас</a>
              <Link to="/blog" className="text-sm hover:text-primary transition-colors font-medium">Блог</Link>
              <a href="#contacts" className="text-sm hover:text-primary transition-colors font-medium">Контакты</a>
            </>
          ) : (
            <>
              <Link to="/" className="text-sm hover:text-primary transition-colors font-medium">Главная</Link>
              <Link to="/blog" className="text-sm hover:text-primary transition-colors font-medium">Блог</Link>
            </>
          )}
          <Button variant="destructive" size="sm" onClick={() => window.open('https://t.me/migracia_bot', '_blank')}>
            <Icon name="Phone" size={16} className="mr-2" />
            Срочно
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <Icon name="X" size={24} className="text-primary" />
            ) : (
              <Icon name="Menu" size={24} className="text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white/98 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {location.pathname === '/' ? (
              <>
                <a 
                  href="#services" 
                  className="block py-2 text-base hover:text-primary transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Услуги
                </a>
                <a 
                  href="#about" 
                  className="block py-2 text-base hover:text-primary transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  О нас
                </a>
                <Link 
                  to="/blog" 
                  className="block py-2 text-base hover:text-primary transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Блог
                </Link>
                <a 
                  href="#contacts" 
                  className="block py-2 text-base hover:text-primary transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Контакты
                </a>
              </>
            ) : (
              <>
                <Link 
                  to="/" 
                  className="block py-2 text-base hover:text-primary transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Главная
                </Link>
                <Link 
                  to="/blog" 
                  className="block py-2 text-base hover:text-primary transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Блог
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}