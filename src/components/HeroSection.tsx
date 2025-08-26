import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-primary/5 to-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            Вас задержали? Грозят депортацией? <br />
            <span className="text-destructive">Не платят пенсию?</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            ПравоПомощь 24/7 — юрист ответит за 30 минут, даже ночью.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Получить помощь сейчас
            </Button>
            <Button variant="destructive" size="lg" className="text-lg px-8 py-6">
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