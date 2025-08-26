import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-primary mb-4">
            Что решаем — и как быстро
          </h2>
          <p className="text-muted-foreground">Выберите, с чем вам нужна помощь</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Icon name="Gavel" size={32} className="text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">Арбитражные дела</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Споры, банкротство, защита бизнеса
              </p>
              <Badge variant="secondary" className="mb-2">от 2 недель</Badge>
              <p className="font-semibold">от 25 000 ₽</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Icon name="FileText" size={32} className="text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">Миграция и документы</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                РВП, ВНЖ, патенты, гражданство
              </p>
              <Badge variant="secondary" className="mb-2">от 2 недель</Badge>
              <p className="font-semibold">от 15 000 ₽</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Icon name="Calculator" size={32} className="text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">Перерасчёт пенсии</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Анализ по чек-листу ПФР. Прибавка реальна.
              </p>
              <Badge variant="secondary" className="mb-2">от 1 недели</Badge>
              <p className="font-semibold">от 10 000 ₽</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <Icon name="Shield" size={32} className="text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">Услуги адвоката</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Экстренный выезд, защита в суде
              </p>
              <Badge variant="destructive" className="mb-2">немедленно</Badge>
              <p className="font-semibold">от 5 000 ₽</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}