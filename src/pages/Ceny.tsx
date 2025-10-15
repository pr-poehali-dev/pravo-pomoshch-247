import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Helmet } from 'react-helmet';

export default function Ceny() {
  return (
    <>
      <Helmet>
        <title>Цены на услуги адвоката в Москве — Прозрачные тарифы | ПравоПомощь 24/7</title>
        <meta name="description" content="Стоимость услуг адвоката и юриста в Москве. Фиксированные цены, прозрачные условия. Первая консультация бесплатно. +7 (977) 098-58-07" />
        <link rel="canonical" href="https://pravo-pomoshch-247.poehali.dev/ceny/" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-primary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
                  Цены на услуги адвоката
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  Прозрачные тарифы без скрытых платежей. Первая консультация — бесплатно
                </p>
                <Button size="lg" variant="destructive" onClick={() => window.open('https://t.me/migracia_bot', '_blank')}>
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Получить расчет стоимости
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
                Консультации
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Первичная консультация по любому вопросу абсолютно бесплатна
              </p>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {consultationPrices.map((item, index) => (
                  <div key={index} className="p-6 bg-card border rounded-xl hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={item.icon} size={24} className="text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-3xl font-bold text-primary mb-3">{item.price}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
                Уголовные дела
              </h2>
              <div className="max-w-4xl mx-auto space-y-4">
                {criminalPrices.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-5 bg-card border rounded-xl hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3 flex-1">
                      <Icon name="CheckCircle" size={20} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">{item.service}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <div className="text-right ml-4">
                      <p className="font-bold text-primary whitespace-nowrap">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
                Гражданские и семейные дела
              </h2>
              <div className="max-w-4xl mx-auto space-y-4">
                {civilPrices.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-5 bg-card border rounded-xl hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3 flex-1">
                      <Icon name="CheckCircle" size={20} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">{item.service}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <div className="text-right ml-4">
                      <p className="font-bold text-primary whitespace-nowrap">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
                Миграционное право
              </h2>
              <div className="max-w-4xl mx-auto space-y-4">
                {migrationPrices.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-5 bg-card border rounded-xl hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3 flex-1">
                      <Icon name="CheckCircle" size={20} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">{item.service}</h3>
                        {item.description && <p className="text-sm text-muted-foreground">{item.description}</p>}
                      </div>
                    </div>
                    <div className="text-right ml-4">
                      <p className="font-bold text-primary whitespace-nowrap">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
                Что входит в стоимость
              </h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {included.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={18} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-primary text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Нужен точный расчет стоимости?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Позвоните нам или напишите — рассчитаем стоимость под вашу ситуацию
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="tel:+79770985807">
                    <Icon name="Phone" size={20} className="mr-2" />
                    +7 (977) 098-58-07
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90" onClick={() => window.open('https://t.me/migracia_bot', '_blank')}>
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать в Telegram
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

const consultationPrices = [
  {
    icon: 'Phone',
    title: 'Телефон / Онлайн',
    price: 'Бесплатно',
    description: 'Первичная консультация по любому вопросу'
  },
  {
    icon: 'Users',
    title: 'Очная встреча',
    price: 'От 3 000 ₽',
    description: 'Детальный разбор ситуации в офисе'
  },
  {
    icon: 'FileText',
    title: 'С изучением документов',
    price: 'От 5 000 ₽',
    description: 'Анализ документов и письменное заключение'
  }
];

const criminalPrices = [
  {
    service: 'Защита при задержании',
    description: 'Срочный выезд, участие в допросах, контроль процедур',
    price: 'От 30 000 ₽'
  },
  {
    service: 'Защита на следствии',
    description: 'Сопровождение на всех этапах расследования',
    price: 'От 50 000 ₽'
  },
  {
    service: 'Защита в суде первой инстанции',
    description: 'Представительство интересов, выступления, ходатайства',
    price: 'От 80 000 ₽'
  },
  {
    service: 'Апелляция / Кассация',
    description: 'Обжалование приговора в вышестоящих инстанциях',
    price: 'От 60 000 ₽'
  },
  {
    service: 'Защита потерпевшего',
    description: 'Представление интересов потерпевшей стороны',
    price: 'От 40 000 ₽'
  }
];

const civilPrices = [
  {
    service: 'Составление искового заявления',
    description: 'Подготовка документов для суда',
    price: 'От 10 000 ₽'
  },
  {
    service: 'Представительство в суде',
    description: 'Одно судебное заседание',
    price: 'От 15 000 ₽'
  },
  {
    service: 'Ведение дела под ключ',
    description: 'Полное сопровождение от подачи иска до исполнения решения',
    price: 'От 50 000 ₽'
  },
  {
    service: 'Раздел имущества при разводе',
    description: 'Консультация, документы, суд',
    price: 'От 40 000 ₽'
  },
  {
    service: 'Алименты / Лишение родительских прав',
    description: 'Полное сопровождение дела',
    price: 'От 35 000 ₽'
  }
];

const migrationPrices = [
  {
    service: 'Получение РВП',
    description: 'Подготовка документов, подача, сопровождение',
    price: 'От 25 000 ₽'
  },
  {
    service: 'Получение ВНЖ',
    description: 'Полное юридическое сопровождение',
    price: 'От 35 000 ₽'
  },
  {
    service: 'Получение гражданства РФ',
    description: null,
    price: 'От 50 000 ₽'
  },
  {
    service: 'Обжалование отказа в миграционных услугах',
    description: null,
    price: 'От 30 000 ₽'
  },
  {
    service: 'Защита от депортации',
    description: 'Срочное сопровождение',
    price: 'От 40 000 ₽'
  }
];

const included = [
  {
    title: 'Первая консультация',
    description: 'Бесплатный анализ ситуации и план действий'
  },
  {
    title: 'Подготовка документов',
    description: 'Все необходимые заявления, жалобы, ходатайства'
  },
  {
    title: 'Представительство',
    description: 'Участие во всех заседаниях и процедурах'
  },
  {
    title: 'Контроль процесса',
    description: 'Регулярная связь и отчеты о ходе дела'
  }
];
