import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-10 md:py-12">
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-3 md:mb-4">
              <Icon name="Scale" className="text-white drop-shadow-sm" size={20} />
              <span className="font-heading text-base md:text-lg font-bold text-white drop-shadow-sm">ПравоПомощь 24/7</span>
            </div>
            <p className="text-sm text-white/90 mb-4 drop-shadow-sm leading-relaxed">
              Когда срочно, мы уже рядом. Даже в 3 часа ночи.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-white drop-shadow-sm text-base">Услуги</h4>
            <ul className="space-y-2 text-sm text-white/90 drop-shadow-sm">
              <li><a href="#services" className="hover:text-white transition-colors block py-1">Арбитражные дела</a></li>
              <li><a href="#services" className="hover:text-white transition-colors block py-1">Миграция и документы</a></li>
              <li><a href="#services" className="hover:text-white transition-colors block py-1">Перерасчёт пенсии</a></li>
              <li><a href="#services" className="hover:text-white transition-colors block py-1">Услуги адвоката</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-white drop-shadow-sm text-base">Режим работы</h4>
            <div className="space-y-2 text-sm text-white/90 drop-shadow-sm">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-white/80" />
                <p>Круглосуточно</p>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} className="text-white/80" />
                <p>24/7 на связи</p>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-6 md:my-8 bg-white/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-white/90 drop-shadow-sm">
          <p className="text-center md:text-left">&copy; 2024 ПравоПомощь 24/7. Все права защищены.</p>
          <a href="#privacy" className="hover:text-white transition-colors drop-shadow-sm">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}