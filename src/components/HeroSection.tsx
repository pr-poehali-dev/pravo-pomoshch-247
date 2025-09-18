import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 relative" role="banner">
      <div className="absolute inset-0 bg-white/85 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight drop-shadow-lg" itemProp="headline">
            Вас задержали? Грозят депортацией? <br />
            <span className="text-destructive">Не платят пенсию?</span>
          </h1>
          <p className="text-xl text-gray-800 mb-8 font-semibold drop-shadow">
            ПравоПомощь 24/7 — юрист ответит за 30 минут, даже ночью.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6" onClick={() => window.open('https://t.me/migracia_bot', '_blank')}>
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Получить помощь сейчас
            </Button>
            <Button variant="destructive" size="lg" className="text-lg px-8 py-6" onClick={() => window.open('https://t.me/migracia_bot', '_blank')}>
              <Icon name="AlertTriangle" size={20} className="mr-2" />
              Вызвать адвоката срочно
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Icon name="Clock" size={16} className="mr-1" />
              24/7
            </div>
            <div className="flex items-center">
              <Icon name="Users" size={16} className="mr-1" />
              1200+ клиентов
            </div>
            <div className="flex items-center">
              <Icon name="Award" size={16} className="mr-1" />
              Опыт 7+ лет
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}