import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Testimonials() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(32,98,162,0.05),transparent_50%)]"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Icon name="Quote" size={16} className="mr-2" />
            Отзывы наших клиентов
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Реальные истории успеха
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Более 1200 довольных клиентов доверили нам свои дела и получили результат
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          <Card className="bg-gradient-to-br from-yellow-50/80 to-orange-50/50 backdrop-blur-sm border-2 border-yellow-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="font-bold text-2xl text-primary-foreground">А</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground">Анна Петрова</h4>
                  <p className="text-sm text-muted-foreground font-medium">Получение ВНЖ</p>
                </div>
              </div>
              <div className="relative">
                <Icon name="Quote" size={32} className="text-yellow-300/40 absolute -top-2 -left-2" />
                <p className="text-base text-foreground/90 leading-relaxed pl-6 mb-4">
                  Отказали в ВНЖ дважды. Обратилась в ПравоПомощь — помогли обжаловать решение. 
                  Через месяц получила положительное решение!
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={18} fill="currentColor" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground font-medium">5.0</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50/80 to-emerald-50/50 backdrop-blur-sm border-2 border-green-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/70 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="font-bold text-2xl text-secondary-foreground">И</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground">Иван Смирнов</h4>
                  <p className="text-sm text-muted-foreground font-medium">Арбитражный спор</p>
                </div>
              </div>
              <div className="relative">
                <Icon name="Quote" size={32} className="text-green-300/40 absolute -top-2 -left-2" />
                <p className="text-base text-foreground/90 leading-relaxed pl-6 mb-4">
                  Партнёр не платил по договору 3 месяца. Юристы помогли взыскать 
                  800 тысяч рублей через арбитраж. Профессионально!
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={18} fill="currentColor" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground font-medium">5.0</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50/80 to-cyan-50/50 backdrop-blur-sm border-2 border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="font-bold text-2xl text-primary-foreground">М</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-foreground">Мария Козлова</h4>
                  <p className="text-sm text-muted-foreground font-medium">Перерасчёт пенсии</p>
                </div>
              </div>
              <div className="relative">
                <Icon name="Quote" size={32} className="text-blue-300/40 absolute -top-2 -left-2" />
                <p className="text-base text-foreground/90 leading-relaxed pl-6 mb-4">
                  Пенсию недоплачивали 5 лет. После перерасчёта доплатили 47 тысяч 
                  и увеличили ежемесячную выплату на 3200 рублей.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={18} fill="currentColor" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground font-medium">5.0</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border border-border">
            <Icon name="TrendingUp" size={24} className="text-secondary mr-3" />
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Средний рейтинг</p>
              <p className="text-2xl font-bold text-foreground">4.9 / 5.0</p>
            </div>
            <div className="w-px h-12 bg-border mx-6"></div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Всего отзывов</p>
              <p className="text-2xl font-bold text-foreground">1200+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}