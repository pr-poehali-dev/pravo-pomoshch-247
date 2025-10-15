import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(32,98,162,0.1),transparent_60%)]"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-flex items-center bg-primary/10 text-primary px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
              <Icon name="Users" size={14} className="mr-1.5 md:mr-2" />
              Наша команда
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 px-2">
              О нас
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 mb-3 md:mb-4 font-medium px-4">
              Мы — не «элитная коллегия». Мы — юристы, которые работают здесь и сейчас.
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              Помогаем реальным людям решать реальные проблемы быстро и эффективно. Работаем с 2015 года.
            </p>
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-10 md:mb-16">
            <div className="bg-gradient-to-br from-card to-primary/5 rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-lg border border-border active:shadow-md md:hover:shadow-xl transition-all md:hover:-translate-y-1">
              <div className="flex items-center justify-center mb-2 md:mb-3">
                <Icon name="Calendar" size={20} className="text-primary mr-1 md:mr-2" />
              </div>
              <div className="text-2xl md:text-4xl font-bold text-primary mb-1 md:mb-2">2015</div>
              <div className="text-xs md:text-sm text-muted-foreground font-medium">Год основания</div>
            </div>
            
            <div className="bg-gradient-to-br from-card to-secondary/5 rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-lg border border-border active:shadow-md md:hover:shadow-xl transition-all md:hover:-translate-y-1">
              <div className="flex items-center justify-center mb-2 md:mb-3">
                <Icon name="Users" size={20} className="text-secondary mr-1 md:mr-2" />
              </div>
              <div className="text-2xl md:text-4xl font-bold text-secondary mb-1 md:mb-2">1200+</div>
              <div className="text-xs md:text-sm text-muted-foreground font-medium">Клиентов</div>
            </div>
            
            <div className="bg-gradient-to-br from-card to-destructive/5 rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-lg border border-border active:shadow-md md:hover:shadow-xl transition-all md:hover:-translate-y-1">
              <div className="flex items-center justify-center mb-2 md:mb-3">
                <Icon name="Clock" size={20} className="text-destructive mr-1 md:mr-2" />
              </div>
              <div className="text-2xl md:text-4xl font-bold text-destructive mb-1 md:mb-2">24/7</div>
              <div className="text-xs md:text-sm text-muted-foreground font-medium">Круглосуточно</div>
            </div>
            
            <div className="bg-gradient-to-br from-card to-primary/5 rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-lg border border-border active:shadow-md md:hover:shadow-xl transition-all md:hover:-translate-y-1">
              <div className="flex items-center justify-center mb-2 md:mb-3">
                <Icon name="Award" size={20} className="text-primary mr-1 md:mr-2" />
              </div>
              <div className="text-2xl md:text-4xl font-bold text-primary mb-1 md:mb-2">7+</div>
              <div className="text-xs md:text-sm text-muted-foreground font-medium">Лет опыта</div>
            </div>
          </div>

          {/* Команда */}
          <div className="mb-8 md:mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-center text-foreground mb-6 md:mb-8 px-4">Эксперты, которые помогут вам</h3>
            <div className="grid md:grid-cols-3 gap-4 md:gap-8">
              <Card className="bg-gradient-to-br from-card to-blue-50/50 border-2 border-border active:border-primary/50 md:hover:border-primary/50 shadow-xl active:shadow-lg md:hover:shadow-2xl transition-all md:hover:-translate-y-2 group">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary to-primary/70 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Icon name="Scale" size={32} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-lg md:text-xl mb-2 text-foreground">Иван Смирнов</h3>
                  <p className="text-xs md:text-sm text-primary font-semibold mb-3">Адвокат</p>
                  <div className="bg-primary/10 rounded-xl p-3 md:p-4">
                    <p className="text-xs md:text-sm text-foreground/80 font-medium">
                      Выезжал по 147 срочным вызовам
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-card to-green-50/50 border-2 border-border active:border-secondary/50 md:hover:border-secondary/50 shadow-xl active:shadow-lg md:hover:shadow-2xl transition-all md:hover:-translate-y-2 group">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-secondary to-secondary/70 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Icon name="FileText" size={32} className="text-secondary-foreground" />
                  </div>
                  <h3 className="font-bold text-lg md:text-xl mb-2 text-foreground">Марина Козлова</h3>
                  <p className="text-xs md:text-sm text-secondary font-semibold mb-3">Юрист по миграции</p>
                  <div className="bg-secondary/10 rounded-xl p-3 md:p-4">
                    <p className="text-xs md:text-sm text-foreground/80 font-medium">
                      Помогла 312 клиентам оформить ВНЖ
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-card to-cyan-50/50 border-2 border-border active:border-primary/50 md:hover:border-primary/50 shadow-xl active:shadow-lg md:hover:shadow-2xl transition-all md:hover:-translate-y-2 group">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary to-primary/70 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Icon name="Calculator" size={32} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-lg md:text-xl mb-2 text-foreground">Петр Иванов</h3>
                  <p className="text-xs md:text-sm text-primary font-semibold mb-3">Юрист по пенсиям</p>
                  <div className="bg-primary/10 rounded-xl p-3 md:p-4">
                    <p className="text-xs md:text-sm text-foreground/80 font-medium">
                      Помог вернуть 23 млн рублей пенсий
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Гарантии */}
          <div className="bg-gradient-to-br from-card via-card to-secondary/5 rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-2xl border-2 border-border">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-6 md:mb-8 px-2">Наши гарантии</h3>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex items-start space-x-3 md:space-x-4 bg-secondary/10 rounded-xl p-4 md:p-6 border border-secondary/20">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-secondary to-secondary/70 rounded-xl flex items-center justify-center">
                    <Icon name="ShieldCheck" size={20} className="text-secondary-foreground" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-base md:text-lg text-foreground mb-1 md:mb-2">Работаем до результата</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">Не останавливаемся, пока не добьемся положительного решения вашего вопроса</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 md:space-x-4 bg-primary/10 rounded-xl p-4 md:p-6 border border-primary/20">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center">
                    <Icon name="Lock" size={20} className="text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-base md:text-lg text-foreground mb-1 md:mb-2">Полная конфиденциальность</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">Адвокатская тайна защищена законом. Ваши данные в безопасности</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 md:space-x-4 bg-secondary/10 rounded-xl p-4 md:p-6 border border-secondary/20">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-secondary to-secondary/70 rounded-xl flex items-center justify-center">
                    <Icon name="FileCheck" size={20} className="text-secondary-foreground" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-base md:text-lg text-foreground mb-1 md:mb-2">Прозрачные условия</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">Фиксированная цена в договоре. Никаких скрытых платежей</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 md:space-x-4 bg-primary/10 rounded-xl p-4 md:p-6 border border-primary/20">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center">
                    <Icon name="Headphones" size={20} className="text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-base md:text-lg text-foreground mb-1 md:mb-2">Поддержка 24/7</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">Юрист ответит в любое время дня и ночи. Экстренная помощь за 30 минут</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}