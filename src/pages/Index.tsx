import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Scale" className="text-primary" size={28} />
            <span className="font-heading text-xl font-bold text-primary">ПравоПомощь 24/7</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-sm hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="text-sm hover:text-primary transition-colors">О нас</a>
            <a href="#blog" className="text-sm hover:text-primary transition-colors">Блог</a>
            <a href="#contacts" className="text-sm hover:text-primary transition-colors">Контакты</a>
            <Button variant="destructive" size="sm">
              <Icon name="Phone" size={16} className="mr-2" />
              Срочно
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Вас задержали? Грозят депортацией? <br />
              <span className="text-destructive">Не платят пенсию?</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              ПравоПомощь 24/7 — юрист ответит за 30 минут, даже ночью.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Получить помощь сейчас
              </Button>
              <Button variant="destructive" size="lg" className="text-lg px-8 py-6">
                <Icon name="AlertTriangle" size={20} className="mr-2" />
                Вызвать адвоката срочно
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Icon name="Clock" size={16} className="mr-1" />
                24/7
              </div>
              <div className="flex items-center">
                <Icon name="Users" size={16} className="mr-1" />
                1200+ клиентов
              </div>
              <div className="flex items-center">
                <Icon name="Award" size={16} className="mr-1" />
                Опыт 7+ лет
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* How it Works */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              Как это работает
            </h2>
            <p className="text-muted-foreground">3 простых шага к решению вашей проблемы</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Написать нам</h3>
              <p className="text-muted-foreground">
                Опишите свою ситуацию в форме или напишите в чат
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Получить оценку</h3>
              <p className="text-muted-foreground">
                За 30 минут получите план действий и стоимость
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Решить проблему</h3>
              <p className="text-muted-foreground">
                Юрист ведёт дело до полного решения вопроса
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-16 bg-destructive text-white">
        <div className="container mx-auto px-4 text-center">
          <Icon name="AlertTriangle" size={48} className="mx-auto mb-4" />
          <h2 className="font-heading text-3xl font-bold mb-4">Срочно? Нажмите сюда</h2>
          <p className="text-xl mb-8 opacity-90">
            Задержали, грозят депортацией или нужна помощь прямо сейчас?
          </p>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white text-destructive hover:bg-gray-50">
            <Icon name="Phone" size={20} className="mr-2" />
            Вызвать адвоката срочно
          </Button>
        </div>
      </section>

      {/* Testimonials */}
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

      {/* Contact Form */}
      <section id="contacts" className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl font-bold text-primary mb-4">
                Опишите свою ситуацию
              </h2>
              <p className="text-muted-foreground">
                Получите план действий и стоимость за 30 минут
              </p>
            </div>
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Иван Иванов"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Телефон</label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Опишите вашу ситуацию</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Расскажите подробно о вашей проблеме..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Icon name="Send" size={20} className="mr-2" />
                    Получить консультацию
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
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
            <Button variant="outline">
              Все статьи <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold text-primary mb-6">
              О нас
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Мы — не «элитная коллегия». Мы — юристы, которые работают здесь и сейчас.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2015</div>
                <div className="text-sm text-muted-foreground">Год основания</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1200+</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Работаем круглосуточно</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">7+</div>
                <div className="text-sm text-muted-foreground">Лет опыта</div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Иван Смирнов</h3>
                  <p className="text-sm text-muted-foreground mb-2">Адвокат</p>
                  <p className="text-xs text-muted-foreground">
                    Выезжал по 147 срочным вызовам
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Марина Козлова</h3>
                  <p className="text-sm text-muted-foreground mb-2">Юрист по миграции</p>
                  <p className="text-xs text-muted-foreground">
                    Помогла 312 клиентам оформить ВНЖ
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Петр Иванов</h3>
                  <p className="text-sm text-muted-foreground mb-2">Юрист по пенсиям</p>
                  <p className="text-xs text-muted-foreground">
                    Помог вернуть 23 млн рублей пенсий
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Scale" className="text-white" size={24} />
                <span className="font-heading text-lg font-bold">ПравоПомощь 24/7</span>
              </div>
              <p className="text-sm opacity-80 mb-4">
                Когда срочно, мы уже рядом. Даже в 3 часа ночи.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Арбитражные дела</li>
                <li>Миграция и документы</li>
                <li>Перерасчёт пенсии</li>
                <li>Услуги адвоката</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm opacity-80">
                <p>Екатеринбург, ул. Ленина, 56</p>
                <p>+7 (343) XXX-XX-XX</p>
                <p>info@pravopomoshch24.ru</p>
                <p>Telegram: @PravoPomoshch24</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <div className="space-y-2 text-sm opacity-80">
                <p>Бот: 24/7</p>
                <p>Юристы: круглосуточно по вызову</p>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-white/20" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
            <p>&copy; 2024 ПравоПомощь 24/7. Все права защищены.</p>
            <a href="#privacy" className="hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}