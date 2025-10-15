import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Helmet } from 'react-helmet';

export default function OnlineKonsultaciya() {
  return (
    <>
      <Helmet>
        <title>Юридическая консультация онлайн — Бесплатно 24/7 | ПравоПомощь</title>
        <meta name="description" content="Бесплатная юридическая консультация онлайн круглосуточно. Ответим в Telegram, WhatsApp за 30 минут. Консультация адвоката онлайн по любым вопросам. +7 (977) 098-58-07" />
        <link rel="canonical" href="https://pravo-pomoshch-247.poehali.dev/online-konsultaciya/" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-primary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
                  Юридическая консультация онлайн
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  Получите профессиональную юридическую помощь не выходя из дома. Работаем 24/7
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="destructive" onClick={() => window.open('https://t.me/migracia_bot', '_blank')}>
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Написать в Telegram
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="tel:+79770985807">
                      <Icon name="Phone" size={20} className="mr-2" />
                      Позвонить
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
                Способы онлайн-консультации
              </h2>
              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {methods.map((method, index) => (
                  <div key={index} className="p-6 bg-card border rounded-xl hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={method.icon} size={24} className="text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-3">{method.title}</h3>
                    <p className="text-muted-foreground mb-4">{method.description}</p>
                    <p className="text-sm text-primary font-semibold">{method.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
                Преимущества онлайн-консультации
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center p-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={benefit.icon} size={28} className="text-white" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
                По каким вопросам консультируем
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {topics.map((topic, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border hover:shadow-md transition-shadow">
                    <Icon name="CheckCircle" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">{topic.title}</h3>
                      <p className="text-sm text-muted-foreground">{topic.examples}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
                  Как получить консультацию
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

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto bg-card border rounded-2xl p-8">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-6">
                  Стоимость онлайн-консультации
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div>
                      <h3 className="font-semibold mb-1">Первичная консультация</h3>
                      <p className="text-sm text-muted-foreground">Краткий анализ ситуации и рекомендации</p>
                    </div>
                    <p className="text-2xl font-bold text-primary">Бесплатно</p>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div>
                      <h3 className="font-semibold mb-1">Развернутая консультация</h3>
                      <p className="text-sm text-muted-foreground">С изучением документов и письменным заключением</p>
                    </div>
                    <p className="text-2xl font-bold text-primary">От 3 000 ₽</p>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div>
                      <h3 className="font-semibold mb-1">Полное сопровождение онлайн</h3>
                      <p className="text-sm text-muted-foreground">Ведение дела с подготовкой всех документов</p>
                    </div>
                    <p className="text-2xl font-bold text-primary">Договорная</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
                Часто задаваемые вопросы
              </h2>
              <div className="max-w-4xl mx-auto space-y-4">
                {faqItems.map((item, index) => (
                  <details key={index} className="group bg-card border rounded-xl overflow-hidden">
                    <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-muted/50 transition-colors">
                      <h3 className="font-semibold pr-4">{item.question}</h3>
                      <Icon name="ChevronDown" size={20} className="text-muted-foreground group-open:rotate-180 transition-transform flex-shrink-0" />
                    </summary>
                    <div className="px-5 pb-5 pt-2 text-muted-foreground border-t">
                      <p>{item.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-primary text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Получите ответ на ваш вопрос прямо сейчас
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Работаем круглосуточно. Ответим в течение 30 минут
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" onClick={() => window.open('https://t.me/migracia_bot', '_blank')}>
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Telegram
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90" asChild>
                  <a href="tel:+79770985807">
                    <Icon name="Phone" size={20} className="mr-2" />
                    +7 (977) 098-58-07
                  </a>
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

const methods = [
  {
    icon: 'MessageCircle',
    title: 'Telegram / WhatsApp',
    description: 'Напишите в мессенджер и получите ответ в переписке',
    time: 'Ответ в течение 30 минут'
  },
  {
    icon: 'Phone',
    title: 'Телефон',
    description: 'Позвоните и получите устную консультацию',
    time: 'Сразу после звонка'
  },
  {
    icon: 'Mail',
    title: 'Email',
    description: 'Отправьте вопрос на почту с документами',
    time: 'Ответ в течение 2 часов'
  }
];

const benefits = [
  {
    icon: 'Clock',
    title: '24/7',
    description: 'Консультируем круглосуточно без выходных'
  },
  {
    icon: 'Home',
    title: 'Из дома',
    description: 'Не нужно ехать в офис — общайтесь откуда удобно'
  },
  {
    icon: 'Zap',
    title: 'Быстро',
    description: 'Получите ответ в течение 30 минут'
  },
  {
    icon: 'DollarSign',
    title: 'Бесплатно',
    description: 'Первая консультация не требует оплаты'
  }
];

const topics = [
  {
    title: 'Уголовное право',
    examples: 'Задержание, обыск, допрос, следствие, суд'
  },
  {
    title: 'Гражданские споры',
    examples: 'Договоры, долги, наследство, недвижимость'
  },
  {
    title: 'Семейное право',
    examples: 'Развод, алименты, раздел имущества'
  },
  {
    title: 'Трудовое право',
    examples: 'Увольнение, зарплата, трудовой договор'
  },
  {
    title: 'Миграционное право',
    examples: 'РВП, ВНЖ, гражданство, депортация'
  },
  {
    title: 'Пенсионное право',
    examples: 'Перерасчет, индексация, льготы'
  }
];

const steps = [
  {
    title: 'Выберите способ связи',
    description: 'Напишите в Telegram, WhatsApp или позвоните по телефону. Выберите удобный для вас мессенджер'
  },
  {
    title: 'Опишите ситуацию',
    description: 'Расскажите о вашей проблеме. Если есть документы — отправьте их в чат или на email'
  },
  {
    title: 'Получите консультацию',
    description: 'Юрист проанализирует ситуацию и даст рекомендации в течение 30 минут'
  },
  {
    title: 'Решите, что делать дальше',
    description: 'Можете действовать самостоятельно или заказать полное юридическое сопровождение'
  }
];

const faqItems = [
  {
    question: 'Действительно ли онлайн-консультация бесплатна?',
    answer: 'Да, первичная консультация в Telegram, WhatsApp или по телефону полностью бесплатна. Вы получите анализ ситуации и рекомендации без оплаты.'
  },
  {
    question: 'Как быстро я получу ответ онлайн?',
    answer: 'В рабочее время (9:00-21:00) отвечаем в течение 30 минут. Ночью — в течение 1-2 часов. Срочные вопросы по уголовным делам обрабатываем приоритетно.'
  },
  {
    question: 'Могу ли я прислать документы для анализа?',
    answer: 'Да, можете отправить фото или скан документов в мессенджер или на email. Это поможет дать более точную консультацию и оценить перспективы дела.'
  },
  {
    question: 'Насколько подробной будет онлайн-консультация?',
    answer: 'Вы получите анализ ситуации с точки зрения закона, оценку рисков, конкретный план действий. Для сложных дел можем предоставить письменное заключение за отдельную плату.'
  },
  {
    question: 'Можно ли решить мою проблему полностью онлайн?',
    answer: 'Многие вопросы решаются удаленно: консультации, подготовка документов, досудебное урегулирование. Для суда и следственных действий потребуется личное участие адвоката.'
  },
  {
    question: 'Безопасно ли отправлять документы онлайн?',
    answer: 'Да, мы используем защищенные каналы связи (Telegram с шифрованием). Вся информация защищена адвокатской тайной и не передается третьим лицам.'
  },
  {
    question: 'Что делать, если мне нужна очная встреча?',
    answer: 'После онлайн-консультации можно записаться на очную встречу в офисе. Стоимость — от 3000 ₽. Согласуем удобное время для вас.'
  },
  {
    question: 'Могу ли я получить консультацию ночью?',
    answer: 'Да, мы работаем круглосуточно. Ночью время ответа может быть до 2 часов. Для срочных ситуаций (задержание) — выезжаем и консультируем немедленно.'
  },
  {
    question: 'Смогу ли я связаться с тем же юристом повторно?',
    answer: 'Да, после первой консультации вы получите прямой контакт вашего юриста. Можете обращаться к нему с дополнительными вопросами по мере развития ситуации.'
  },
  {
    question: 'Что если мой вопрос очень сложный?',
    answer: 'Сначала проведем первичный анализ онлайн. Если вопрос требует глубокого изучения документов — предложим развернутую консультацию (от 5000 ₽) или очную встречу.'
  },
  {
    question: 'Консультируете ли вы по делам в других городах?',
    answer: 'Да, онлайн-консультации доступны для клиентов из любого региона России. Для ведения дела в регионе можем подключить партнеров из нашей сети.'
  },
  {
    question: 'Можно ли получить консультацию на английском языке?',
    answer: 'Да, у нас есть юристы, владеющие английским языком. Укажите это при обращении, и мы подключим англоязычного специалиста.'
  }
];