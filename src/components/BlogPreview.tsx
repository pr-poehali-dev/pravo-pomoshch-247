import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function BlogPreview() {
  return (
    <section id="blog" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-primary mb-4">
            Полезные статьи
          </h2>
          <p className="text-muted-foreground">Полезно. Понятно. Без воды.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Badge className="w-fit mb-2">Миграция</Badge>
              <CardTitle className="text-lg">
                Что делать, если просрочил патент на 5 дней?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Пошаговая инструкция по восстановлению статуса без депортации...
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>15 августа 2024</span>
                <span>Юрист Марина К.</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Badge className="w-fit mb-2">Пенсии</Badge>
              <CardTitle className="text-lg">
                Как пересчитать пенсию: 7 пунктов которые часто игнорируют
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Проверьте по нашему чек-листу — возможно, вам недоплачивают...
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>12 августа 2024</span>
                <span>Юрист Петр И.</span>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Badge className="w-fit mb-2">Защита прав</Badge>
              <CardTitle className="text-lg">
                Что делать если вас задержали — 5 прав которые нужно знать
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Знание своих прав поможет избежать нарушений со стороны полиции...
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
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