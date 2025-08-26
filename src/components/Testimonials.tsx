import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-primary mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-muted-foreground">Реальные люди, реальные результаты</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="font-semibold text-primary">А</span>
                </div>
                <div>
                  <h4 className="font-semibold">Анна Петрова</h4>
                  <p className="text-sm text-muted-foreground">Получение ВНЖ</p>
                </div>
              </div>
              <p className="text-sm">
                "Отказали в ВНЖ дважды. Обратилась в ПравоПомощь — помогли обжаловать решение. 
                Через месяц получила положительное решение!"
              </p>
              <div className="flex text-yellow-400 mt-3">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={16} fill="currentColor" />
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="font-semibold text-primary">И</span>
                </div>
                <div>
                  <h4 className="font-semibold">Иван Смирнов</h4>
                  <p className="text-sm text-muted-foreground">Арбитражный спор</p>
                </div>
              </div>
              <p className="text-sm">
                "Партнёр не платил по договору 3 месяца. Юристы помогли взыскать 
                800 тысяч рублей через арбитраж. Профессионально!"
              </p>
              <div className="flex text-yellow-400 mt-3">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={16} fill="currentColor" />
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="font-semibold text-primary">М</span>
                </div>
                <div>
                  <h4 className="font-semibold">Мария Козлова</h4>
                  <p className="text-sm text-muted-foreground">Перерасчёт пенсии</p>
                </div>
              </div>
              <p className="text-sm">
                "Пенсию недоплачивали 5 лет. После перерасчёта доплатили 47 тысяч 
                и увеличили ежемесячную выплату на 3200 рублей."
              </p>
              <div className="flex text-yellow-400 mt-3">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={16} fill="currentColor" />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}