import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-20 relative overflow-hidden" role="banner">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-blue-50 to-cyan-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(32,98,162,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(42,183,121,0.08),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-6 md:mb-8">
            <span className="inline-flex items-center bg-destructive text-destructive-foreground px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg animate-pulse">
              <Icon name="Clock" size={14} className="mr-1.5 md:mr-2" />
              24/7
            </span>
            <span className="inline-flex items-center bg-secondary text-secondary-foreground px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg">
              <Icon name="Shield" size={14} className="mr-1.5 md:mr-2" />
              Гарантия
            </span>
            <span className="inline-flex items-center bg-primary text-primary-foreground px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg">
              <Icon name="Award" size={14} className="mr-1.5 md:mr-2" />
              7+ лет
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-4 md:mb-6 leading-tight px-2" itemProp="headline">
            Вас задержали? Грозят депортацией?<br className="hidden sm:block" />
            <span className="text-destructive drop-shadow-lg">Не платят пенсию?</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/80 mb-8 md:mb-10 font-medium max-w-3xl mx-auto px-2">
            ПравоПомощь 24/7 — юрист ответит за 30 минут, даже ночью. Решаем самые сложные дела с гарантией.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-10 md:mb-12 px-4">
            <Button 
              size="lg" 
              className="text-base md:text-lg px-6 md:px-10 py-5 md:py-7 shadow-2xl hover:shadow-primary/50 active:scale-95 md:hover:scale-105 transition-all duration-300 bg-primary hover:bg-primary/90 w-full sm:w-auto" 
              onClick={() => window.open('https://t.me/migracia_bot', '_blank')}
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Получить помощь
            </Button>
            <Button 
              variant="destructive" 
              size="lg" 
              className="text-base md:text-lg px-6 md:px-10 py-5 md:py-7 shadow-2xl hover:shadow-destructive/50 active:scale-95 md:hover:scale-105 transition-all duration-300 w-full sm:w-auto" 
              onClick={() => window.open('https://t.me/migracia_bot', '_blank')}
            >
              <Icon name="AlertTriangle" size={20} className="mr-2" />
              Срочный вызов
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto px-4">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-border">
              <div className="flex items-center justify-center mb-1 md:mb-2">
                <Icon name="Users" size={20} className="text-primary mr-2" />
                <span className="text-2xl md:text-3xl font-bold text-foreground">1200+</span>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground font-medium">довольных клиентов</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-border">
              <div className="flex items-center justify-center mb-1 md:mb-2">
                <Icon name="CheckCircle" size={20} className="text-secondary mr-2" />
                <span className="text-2xl md:text-3xl font-bold text-foreground">98%</span>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground font-medium">выигранных дел</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-border">
              <div className="flex items-center justify-center mb-1 md:mb-2">
                <Icon name="Zap" size={20} className="text-destructive mr-2" />
                <span className="text-2xl md:text-3xl font-bold text-foreground">30 мин</span>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground font-medium">время ответа</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}