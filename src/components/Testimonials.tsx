import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Testimonials() {
  return (
    <section className="relative py-16 bg-white/90 backdrop-blur-sm">
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-slate-700">Реальные люди, реальные результаты</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white/95 backdrop-blur-sm border-slate-200/50">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="font-semibold text-primary">А</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Анна Петрова</h4>
                  <p className="text-sm text-slate-600">Получение ВНЖ</p>
                </div>
              </div>
              <p className="text-sm text-slate-700">
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

          <Card className="bg-white/95 backdrop-blur-sm border-slate-200/50">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="font-semibold text-primary">И</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Иван Смирнов</h4>
                  <p className="text-sm text-slate-600">Арбитражный спор</p>
                </div>
              </div>
              <p className="text-sm text-slate-700">
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

          <Card className="bg-white/95 backdrop-blur-sm border-slate-200/50">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="font-semibold text-primary">М</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Мария Козлова</h4>
                  <p className="text-sm text-slate-600">Перерасчёт пенсии</p>
                </div>
              </div>
              <p className="text-sm text-slate-700">
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