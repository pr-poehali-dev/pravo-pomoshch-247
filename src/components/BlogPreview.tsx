import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function BlogPreview() {
  return (
    <section id="blog" className="relative py-16 bg-white/90 backdrop-blur-sm">
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">
            Полезные статьи
          </h2>
          <p className="text-slate-700">Полезно. Понятно. Без воды.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow bg-white/95 backdrop-blur-sm border-slate-200/50">
            <CardHeader>
              <Badge className="w-fit mb-2">Миграция</Badge>
              <CardTitle className="text-lg text-slate-900">
                Что делать, если просрочил патент на 5 дней?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-4">
                Пошаговая инструкция по восстановлению статуса без депортации...
              </p>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>15 августа 2024</span>
                <span>Юрист Марина К.</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow bg-white/95 backdrop-blur-sm border-slate-200/50">
            <CardHeader>
              <Badge className="w-fit mb-2">Пенсии</Badge>
              <CardTitle className="text-lg text-slate-900">
                Как пересчитать пенсию: 7 пунктов которые часто игнорируют
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-4">
                Проверьте по нашему чек-листу — возможно, вам недоплачивают...
              </p>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>12 августа 2024</span>
                <span>Юрист Петр И.</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow bg-white/95 backdrop-blur-sm border-slate-200/50">
            <CardHeader>
              <Badge className="w-fit mb-2">Защита прав</Badge>
              <CardTitle className="text-lg text-slate-900">
                Что делать если вас задержали — 5 прав которые нужно знать
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-4">
                Знание своих прав поможет избежать нарушений со стороны полиции...
              </p>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>10 августа 2024</span>
                <span>Адвокат Иван С.</span>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" onClick={() => window.location.href = '/blog'}>
            Все статьи <Icon name="ArrowRight" size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}