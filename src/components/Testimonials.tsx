import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Testimonials() {
  return (
    <section className="relative py-12 md:py-20 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(32,98,162,0.05),transparent_50%)]"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center bg-secondary/10 text-secondary px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
            <Icon name="Quote" size={14} className="mr-1.5 md:mr-2" />
            Отзывы наших клиентов
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 px-2">
            Реальные истории успеха
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Более 1200 довольных клиентов доверили нам свои дела и получили результат
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          <Card className="bg-gradient-to-br from-yellow-50/80 to-orange-50/50 backdrop-blur-sm border-2 border-yellow-200/50 shadow-xl active:shadow-lg md:hover:shadow-2xl transition-all duration-300 md:hover:-translate-y-1">
            <CardContent className="p-5 md:p-8">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mr-3 md:mr-4 shadow-lg flex-shrink-0">
                  <span className="font-bold text-xl md:text-2xl text-primary-foreground">А</span>
                </div>
                <div>
                  <h4 className="font-bold text-base md:text-lg text-foreground">Анна Петрова</h4>
                  <p className="text-xs md:text-sm text-muted-foreground font-medium">Получение ВНЖ</p>
                </div>
              </div>
              <div className="relative">
                <Icon name="Quote" size={24} className="text-yellow-300/40 absolute -top-1 md:-top-2 -left-1 md:-left-2" />
                <p className="text-sm md:text-base text-foreground/90 leading-relaxed pl-4 md:pl-6 mb-3 md:mb-4">
                  Отказали в ВНЖ дважды. Обратилась в ПравоПомощь — помогли обжаловать решение. 
                  Через месяц получила положительное решение!
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="text-xs md:text-sm text-muted-foreground font-medium">5.0</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50/80 to-emerald-50/50 backdrop-blur-sm border-2 border-green-200/50 shadow-xl active:shadow-lg md:hover:shadow-2xl transition-all duration-300 md:hover:-translate-y-1">
            <CardContent className="p-5 md:p-8">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-secondary to-secondary/70 rounded-full flex items-center justify-center mr-3 md:mr-4 shadow-lg flex-shrink-0">
                  <span className="font-bold text-xl md:text-2xl text-secondary-foreground">И</span>
                </div>
                <div>
                  <h4 className="font-bold text-base md:text-lg text-foreground">Иван Смирнов</h4>
                  <p className="text-xs md:text-sm text-muted-foreground font-medium">Арбитражный спор</p>
                </div>
              </div>
              <div className="relative">
                <Icon name="Quote" size={24} className="text-green-300/40 absolute -top-1 md:-top-2 -left-1 md:-left-2" />
                <p className="text-sm md:text-base text-foreground/90 leading-relaxed pl-4 md:pl-6 mb-3 md:mb-4">
                  Партнёр не платил по договору 3 месяца. Юристы помогли взыскать 
                  800 тысяч рублей через арбитраж. Профессионально!
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="text-xs md:text-sm text-muted-foreground font-medium">5.0</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50/80 to-cyan-50/50 backdrop-blur-sm border-2 border-blue-200/50 shadow-xl active:shadow-lg md:hover:shadow-2xl transition-all duration-300 md:hover:-translate-y-1">
            <CardContent className="p-5 md:p-8">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mr-3 md:mr-4 shadow-lg flex-shrink-0">
                  <span className="font-bold text-xl md:text-2xl text-primary-foreground">М</span>
                </div>
                <div>
                  <h4 className="font-bold text-base md:text-lg text-foreground">Мария Козлова</h4>
                  <p className="text-xs md:text-sm text-muted-foreground font-medium">Перерасчёт пенсии</p>
                </div>
              </div>
              <div className="relative">
                <Icon name="Quote" size={24} className="text-blue-300/40 absolute -top-1 md:-top-2 -left-1 md:-left-2" />
                <p className="text-sm md:text-base text-foreground/90 leading-relaxed pl-4 md:pl-6 mb-3 md:mb-4">
                  Пенсию недоплачивали 5 лет. После перерасчёта доплатили 47 тысяч 
                  и увеличили ежемесячную выплату на 3200 рублей.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="text-xs md:text-sm text-muted-foreground font-medium">5.0</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8 md:mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center bg-white/80 backdrop-blur-sm px-5 md:px-6 py-4 rounded-2xl shadow-lg border border-border gap-4 sm:gap-0">
            <div className="flex items-center">
              <Icon name="TrendingUp" size={20} className="text-secondary mr-2 md:mr-3" />
              <div className="text-left">
                <p className="text-xs md:text-sm text-muted-foreground">Средний рейтинг</p>
                <p className="text-xl md:text-2xl font-bold text-foreground">4.9 / 5.0</p>
              </div>
            </div>
            <div className="w-full sm:w-px h-px sm:h-12 bg-border sm:mx-6"></div>
            <div className="flex items-center">
              <div className="text-left">
                <p className="text-xs md:text-sm text-muted-foreground">Всего отзывов</p>
                <p className="text-xl md:text-2xl font-bold text-foreground">1200+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}