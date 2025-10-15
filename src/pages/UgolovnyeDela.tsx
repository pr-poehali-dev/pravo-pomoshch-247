import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Helmet } from 'react-helmet';

export default function UgolovnyeDela() {
  return (
    <>
      <Helmet>
        <title>Адвокат по уголовным делам в Москве — Защита 24/7 | ПравоПомощь</title>
        <meta name="description" content="Опытный адвокат по уголовным делам в Москве. Защита на следствии и в суде, помощь при задержании 24/7. Бесплатная консультация. Звоните +7 (977) 098-58-07" />
        <link rel="canonical" href="https://pravo-pomoshch-247.poehali.dev/ugolovnye-dela/" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-primary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
                  Адвокат по уголовным делам
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  Профессиональная защита на всех стадиях уголовного процесса в Москве
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="destructive" onClick={() => window.open('https://t.me/migracia_bot', '_blank')}>
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Бесплатная консультация
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="tel:+79770985807">
                      <Icon name="Phone" size={20} className="mr-2" />
                      +7 (977) 098-58-07
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
                Услуги адвоката по уголовным делам
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {services.map((service, index) => (
                  <div key={index} className="p-6 bg-card border rounded-xl hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={service.icon} size={24} className="text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
                Почему выбирают нас
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

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
                  Как мы работаем
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
                Нужна срочная помощь адвоката?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Работаем круглосуточно. Выезжаем к задержанному в любое время суток
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="tel:+79770985807">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Позвонить сейчас
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

const services = [
  {
    icon: 'Shield',
    title: 'Защита при задержании',
    description: 'Срочный выезд к задержанному. Контроль соблюдения прав на всех этапах'
  },
  {
    icon: 'FileText',
    title: 'Защита на следствии',
    description: 'Участие в допросах, очных ставках, следственных действиях'
  },
  {
    icon: 'Scale',
    title: 'Представительство в суде',
    description: 'Защита интересов в судах всех инстанций по уголовным делам'
  },
  {
    icon: 'Users',
    title: 'Защита потерпевших',
    description: 'Представление интересов потерпевших и гражданских истцов'
  },
  {
    icon: 'FileCheck',
    title: 'Обжалование приговоров',
    description: 'Апелляция и кассация по уголовным делам'
  },
  {
    icon: 'UserCheck',
    title: 'Условно-досрочное освобождение',
    description: 'Помощь в получении УДО и замене наказания'
  }
];

const benefits = [
  {
    icon: 'Clock',
    title: '24/7',
    description: 'Работаем круглосуточно без выходных'
  },
  {
    icon: 'Award',
    title: '15+ лет опыта',
    description: 'Успешная практика в уголовных делах'
  },
  {
    icon: 'CheckCircle',
    title: '200+ дел',
    description: 'Выигранных дел и оправдательных приговоров'
  },
  {
    icon: 'MapPin',
    title: 'По всей Москве',
    description: 'Выезжаем в любой район города'
  }
];

const steps = [
  {
    title: 'Обращение',
    description: 'Свяжитесь с нами любым удобным способом — звонок, Telegram, WhatsApp. Первичная консультация бесплатно'
  },
  {
    title: 'Анализ ситуации',
    description: 'Изучаем материалы дела, оцениваем перспективы, разрабатываем стратегию защиты'
  },
  {
    title: 'Заключение договора',
    description: 'Обсуждаем условия сотрудничества, фиксируем стоимость услуг, подписываем договор'
  },
  {
    title: 'Активная защита',
    description: 'Участвуем во всех следственных действиях, представляем интересы в суде, обжалуем незаконные решения'
  }
];

const faqItems = [
  {
    question: 'Как быстро адвокат может приехать к задержанному?',
    answer: 'При срочном вызове выезжаем в течение 1-2 часов в любую точку Москвы. В ночное время — в пределах 2-3 часов. Работаем круглосуточно без выходных.'
  },
  {
    question: 'Сколько стоят услуги адвоката по уголовному делу?',
    answer: 'Стоимость зависит от сложности дела и стадии процесса. Защита при задержании — от 30 000 ₽, на следствии — от 50 000 ₽, в суде — от 80 000 ₽. Точную цену рассчитываем после анализа ситуации.'
  },
  {
    question: 'Можете ли вы гарантировать оправдательный приговор?',
    answer: 'Нет, ни один адвокат не может гарантировать конкретный исход дела — это зависит от суда. Мы гарантируем профессиональную защиту, использование всех законных способов для достижения наилучшего результата.'
  },
  {
    question: 'На каких стадиях нужен адвокат?',
    answer: 'Адвокат необходим с момента задержания или вызова на допрос. Чем раньше подключится защитник, тем больше шансов на благоприятный исход. Особенно важно не давать показания без адвоката.'
  },
  {
    question: 'Что входит в стоимость услуг?',
    answer: 'Консультации, изучение материалов дела, подготовка процессуальных документов (жалобы, ходатайства), участие во всех следственных действиях и судебных заседаниях, обжалование незаконных решений.'
  },
  {
    question: 'Как часто вы будете давать обратную связь?',
    answer: 'После каждого следственного действия или судебного заседания. Вы всегда можете связаться с адвокатом по телефону или в мессенджере для получения информации о ходе дела.'
  },
  {
    question: 'Можно ли добиться прекращения уголовного дела?',
    answer: 'Да, это возможно при наличии оснований: отсутствие события или состава преступления, примирение с потерпевшим, истечение сроков давности, амнистия. Оцениваем перспективы после изучения материалов.'
  },
  {
    question: 'Что делать, если задержали родственника?',
    answer: 'Срочно вызывайте адвоката. До его приезда близкий не обязан давать показания. Адвокат проконтролирует соблюдение прав, поможет избежать ошибок при общении со следователем.'
  },
  {
    question: 'Какие документы нужны для начала работы?',
    answer: 'Для первичной консультации — паспорт и описание ситуации. Если есть процессуальные документы (протоколы, постановления) — предоставьте их. Договор заключаем после анализа дела.'
  },
  {
    question: 'Работаете ли вы с делами в регионах?',
    answer: 'Да, выезжаем в города Московской области. Для регионов возможна удаленная консультация и координация с местными адвокатами из нашей сети.'
  },
  {
    question: 'Можно ли изменить меру пресечения с ареста на домашний арест?',
    answer: 'Возможно при наличии оснований: тяжелая болезнь, несовершеннолетние дети, беременность и др. Подаем ходатайство в суд с приложением подтверждающих документов. Решение принимает суд.'
  },
  {
    question: 'Сколько длится уголовное дело?',
    answer: 'Зависит от тяжести преступления и загруженности следствия. Предварительное следствие — 2-6 месяцев (может продлеваться), суд первой инстанции — 1-4 месяца. Сложные дела могут длиться год и более.'
  }
];