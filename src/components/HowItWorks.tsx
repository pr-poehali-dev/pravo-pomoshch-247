import Icon from '@/components/ui/icon';

export default function HowItWorks() {
  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center bg-primary/10 text-primary px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
            <Icon name="Lightbulb" size={14} className="mr-1.5 md:mr-2" />
            Простой процесс
          </div>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4 px-2">
            Как это работает
          </h2>
          <p className="text-sm md:text-base text-muted-foreground px-4">3 простых шага к решению вашей проблемы</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center bg-gradient-to-br from-card to-primary/5 rounded-2xl p-6 md:p-8 shadow-lg border border-border hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-primary/70 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-bold mx-auto mb-3 md:mb-4 shadow-lg">
              1
            </div>
            <h3 className="font-heading text-lg md:text-xl font-bold mb-2 md:mb-3 text-foreground">Написать нам</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Опишите свою ситуацию в форме или напишите в <a href="https://t.me/migracia_bot" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Телеграм</a>
            </p>
          </div>
          <div className="text-center bg-gradient-to-br from-card to-secondary/5 rounded-2xl p-6 md:p-8 shadow-lg border border-border hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-secondary to-secondary/70 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-bold mx-auto mb-3 md:mb-4 shadow-lg">
              2
            </div>
            <h3 className="font-heading text-lg md:text-xl font-bold mb-2 md:mb-3 text-foreground">Получить оценку</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              За 30 минут получите план действий и стоимость
            </p>
          </div>
          <div className="text-center bg-gradient-to-br from-card to-primary/5 rounded-2xl p-6 md:p-8 shadow-lg border border-border hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-primary/70 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-bold mx-auto mb-3 md:mb-4 shadow-lg">
              3
            </div>
            <h3 className="font-heading text-lg md:text-xl font-bold mb-2 md:mb-3 text-foreground">Решить проблему</h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Юрист ведёт дело до полного решения вопроса
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}