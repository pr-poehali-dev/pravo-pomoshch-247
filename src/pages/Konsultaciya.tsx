import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Helmet } from 'react-helmet';

export default function Konsultaciya() {
  return (
    <>
      <Helmet>
        <title>Консультация юриста онлайн и очно — Бесплатно 24/7 | ПравоПомощь</title>
        <meta name="description" content="Консультация юриста круглосуточно. Бесплатная первичная консультация онлайн или по телефону. Ответим за 30 минут. +7 (977) 098-58-07" />
        <link rel="canonical" href="https://pravo-pomoshch-247.poehali.dev/konsultaciya/" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-primary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
                  Консультация юриста
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  Получите квалифицированную юридическую консультацию круглосуточно. Первая консультация — бесплатно!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="destructive" onClick={() => window.open('https://t.me/migracia_bot', '_blank')}>
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Задать вопрос в Telegram
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="tel:+79770985807">
                      <Icon name="Phone" size={20} className="mr-2" />
                      Позвонить сейчас
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
                Форматы консультаций
              </h2>
              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {formats.map((format, index) => (
                  <div key={index} className="p-6 bg-card border rounded-xl hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={format.icon} size={24} className="text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-3">{format.title}</h3>
                    <p className="text-muted-foreground mb-4">{format.description}</p>
                    <p className="text-primary font-semibold">{format.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
                По каким вопросам консультируем
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {topics.map((topic, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg">
                    <Icon name="CheckCircle" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">{topic.title}</h3>
                      <p className="text-sm text-muted-foreground">{topic.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
                  Как проходит консультация
                </h2>
                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <div key={index} className="flex gap-4 items-start p-6 bg-card border rounded-xl">
                      <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
                Преимущества наших консультаций
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={benefit.icon} size={28} className="text-white" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-primary text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Нужна консультация прямо сейчас?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Ответим на ваш вопрос в течение 30 минут. Работаем 24/7 без выходных
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

const formats = [
  {
    icon: 'Phone',
    title: 'Телефон',
    description: 'Позвоните нам и получите ответ на ваш вопрос прямо сейчас',
    price: 'Первая консультация бесплатно'
  },
  {
    icon: 'MessageCircle',
    title: 'Онлайн',
    description: 'Задайте вопрос в Telegram, WhatsApp или на email',
    price: 'Бесплатно'
  },
  {
    icon: 'Users',
    title: 'Очно',
    description: 'Приезжайте в офис для детального разбора вашей ситуации',
    price: 'От 3000 ₽'
  }
];

const topics = [
  {
    title: 'Уголовные дела',
    description: 'Защита прав подозреваемых, обвиняемых, потерпевших'
  },
  {
    title: 'Гражданские споры',
    description: 'Договоры, долги, наследство, собственность'
  },
  {
    title: 'Миграционное право',
    description: 'РВП, ВНЖ, гражданство, депортация'
  },
  {
    title: 'Семейное право',
    description: 'Развод, раздел имущества, алименты'
  },
  {
    title: 'Трудовое право',
    description: 'Увольнение, зарплата, споры с работодателем'
  },
  {
    title: 'Пенсионное право',
    description: 'Перерасчет пенсий, льготы, выплаты'
  }
];

const steps = [
  {
    title: 'Обращение',
    description: 'Свяжитесь с нами по телефону, через Telegram или WhatsApp. Выберите удобный формат консультации'
  },
  {
    title: 'Описание ситуации',
    description: 'Расскажите о вашей проблеме, предоставьте имеющиеся документы для анализа'
  },
  {
    title: 'Юридический анализ',
    description: 'Наш юрист изучает вашу ситуацию, анализирует применимое законодательство'
  },
  {
    title: 'Рекомендации',
    description: 'Получите четкий план действий, оценку перспектив и варианты решения проблемы'
  }
];

const benefits = [
  {
    icon: 'Clock',
    title: '24/7',
    description: 'Консультируем круглосуточно, даже в выходные'
  },
  {
    icon: 'Zap',
    title: 'Быстро',
    description: 'Ответим на вопрос в течение 30 минут'
  },
  {
    icon: 'Shield',
    title: 'Конфиденциально',
    description: 'Гарантируем полную адвокатскую тайну'
  },
  {
    icon: 'Award',
    title: 'Опыт',
    description: 'Более 15 лет практики в юриспруденции'
  }
];
