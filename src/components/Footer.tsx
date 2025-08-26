import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="relative bg-slate-900/90 backdrop-blur-sm text-white py-12">
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Scale" className="text-white drop-shadow-sm" size={24} />
              <span className="font-heading text-lg font-bold text-white drop-shadow-sm">ПравоПомощь 24/7</span>
            </div>
            <p className="text-sm text-white/90 mb-4 drop-shadow-sm">
              Когда срочно, мы уже рядом. Даже в 3 часа ночи.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white drop-shadow-sm">Услуги</h4>
            <ul className="space-y-2 text-sm text-white/90 drop-shadow-sm">
              <li>Арбитражные дела</li>
              <li>Миграция и документы</li>
              <li>Перерасчёт пенсии</li>
              <li>Услуги адвоката</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white drop-shadow-sm">Контакты</h4>
            <div className="space-y-2 text-sm text-white/90 drop-shadow-sm">
              <p>Екатеринбург, ул. Ленина, 56</p>
              <p>+7 (343) XXX-XX-XX</p>
              <p>info@pravopomoshch24.ru</p>
              <p>Telegram: @PravoPomoshch24</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white drop-shadow-sm">Режим работы</h4>
            <div className="space-y-2 text-sm text-white/90 drop-shadow-sm">
              <p>Бот: 24/7</p>
              <p>Юристы: круглосуточно по вызову</p>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-white/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/90 drop-shadow-sm">
          <p>&copy; 2024 ПравоПомощь 24/7. Все права защищены.</p>
          <a href="#privacy" className="hover:text-white transition-colors drop-shadow-sm">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}