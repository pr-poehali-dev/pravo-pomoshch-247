import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-16 bg-white/85 backdrop-blur-sm">
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6">
            О нас
          </h2>
          <p className="text-xl text-slate-700 mb-8">
            Мы — не «элитная коллегия». Мы — юристы, которые работают здесь и сейчас.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2015</div>
              <div className="text-sm text-slate-600">Год основания</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1200+</div>
              <div className="text-sm text-slate-600">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-slate-600">Работаем круглосуточно</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">7+</div>
              <div className="text-sm text-slate-600">Лет опыта</div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/95 backdrop-blur-sm border-slate-200/50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-slate-900">Иван Смирнов</h3>
                <p className="text-sm text-slate-600 mb-2">Адвокат</p>
                <p className="text-xs text-slate-500">
                  Выезжал по 147 срочным вызовам
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm border-slate-200/50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-slate-900">Марина Козлова</h3>
                <p className="text-sm text-slate-600 mb-2">Юрист по миграции</p>
                <p className="text-xs text-slate-500">
                  Помогла 312 клиентам оформить ВНЖ
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm border-slate-200/50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2 text-slate-900">Петр Иванов</h3>
                <p className="text-sm text-slate-600 mb-2">Юрист по пенсиям</p>
                <p className="text-xs text-slate-500">
                  Помог вернуть 23 млн рублей пенсий
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}