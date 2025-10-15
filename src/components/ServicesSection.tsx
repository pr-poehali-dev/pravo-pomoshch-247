import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import ConsultationForm from './ConsultationForm';


interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price: string;
  duration: string;
  urgent: boolean;
  details: {
    fullDescription: string;
    services: string[];
    advantages: string[];
    documents: string[];
    process: string[];
    guarantees: string[];
    examples: string[];
  };
}

const services: Service[] = [
  {
    id: 'arbitrage',
    title: 'Арбитражные дела',
    description: 'Споры, банкротство, защита бизнеса',
    icon: 'Gavel',
    price: 'от 25 000 ₽',
    duration: 'от 2 недель',
    urgent: false,
    details: {
      fullDescription: 'Комплексная защита ваших бизнес-интересов в арбитражных судах. Мы специализируемся на сложных корпоративных спорах и имеем успешный опыт ведения дел на сумму свыше 500 миллионов рублей.',
      services: [
        'Взыскание задолженности с юридических лиц',
        'Корпоративные споры между участниками ООО',
        'Банкротство должников и защита от банкротства',
        'Споры по государственным и муниципальным контрактам',
        'Защита от налоговых доначислений',
        'Оспаривание решений государственных органов',
        'Споры по договорам поставки и оказания услуг',
        'Интеллектуальная собственность и недобросовестная конкуренция'
      ],
      advantages: [
        'Успешность дел — 87% выигранных споров',
        'Средняя сумма взысканного долга — 2,5 млн рублей',
        'Работа с делами от 100 тысяч до 500+ миллионов',
        'Собственная служба принудительного исполнения',
        'Возможность работы по результату (успех-фи)'
      ],
      documents: [
        'Учредительные документы',
        'Договоры и дополнительные соглашения',
        'Финансовые документы и справки',
        'Переписка с контрагентами',
        'Документы о выполненных работах/поставленных товарах'
      ],
      process: [
        'Анализ документов и правовых перспектив (1-2 дня)',
        'Подготовка искового заявления или отзыва (5-7 дней)',
        'Подача документов в суд (1-2 дня)',
        'Участие в судебных заседаниях (2-6 месяцев)',
        'Получение исполнительного листа (1-2 недели)',
        'Принудительное взыскание долга (2-12 месяцев)'
      ],
      guarantees: [
        'Письменная гарантия качества услуг',
        'Возврат аванса при отказе от ведения дела',
        'Страхование профессиональной ответственности',
        'Конфиденциальность информации'
      ],
      examples: [
        'Взыскали 15 млн рублей с застройщика для управляющей компании',
        'Защитили бизнес от банкротства, реструктурировав долги на 40 млн',
        'Выиграли спор с ФНС по доначислению НДС на 8 млн рублей'
      ]
    }
  },
  {
    id: 'migration',
    title: 'Миграция и документы',
    description: 'РВП, ВНЖ, патенты, гражданство',
    icon: 'FileText',
    price: 'от 1 500 ₽',
    duration: 'от 1 дня',
    urgent: false,
    details: {
      fullDescription: 'Полное сопровождение миграционных вопросов для граждан СНГ и дальнего зарубежья в Свердловской области. Помогаем легализовать пребывание в России, получить документы и защищаем от депортации 24/7.',
      services: [
        '🟢 РВП: Консультация "Что делать приехав в РФ?" — 1 500 ₽',
        '🟢 РВП: Пошаговый план "Патент за 5 дней" — 4 900 ₽', 
        '🟢 РВП: "Патент просрочен? Спасение" — 7 900 ₽',
        '🟢 РВП: План действий — 9 900 ₽',
        '🔵 ВНЖ: Консультация — 3 000 ₽',
        '🔵 ВНЖ: Подготовка документов — 9 900 ₽',
        '🔵 ВНЖ: Полное сопровождение — 20 000 ₽',
        '🟡 Гражданство: Анализ перспектив — 3 000 ₽',
        '🟡 Гражданство: Подготовка к экзаменам — 9 900 ₽',
        '🟡 Гражданство: Полное сопровождение — 29 990 ₽',
        '🔴 Срочная помощь: Вызов адвоката при задержании — 20 000 ₽',
        '🔴 Срочная помощь: Проверка задержанного — 20 000 ₽',
        '🔴 Срочная помощь: Защита от депортации — 20 000 ₽'
      ],
      advantages: [
        'Специализация по России',
        'РВП за 4-6 месяцев, ВНЖ за 4-6 месяцев',
        'Экстренная помощь адвоката 24/7',
        'Выезд адвоката в течение 30 минут'
      ],


      guarantees: [
        'Адвокатская помощь при задержании',
        'Адвокатская тайна и конфиденциальность'
      ],
      examples: [
        'РВП гражданину Узбекистана за 4 месяца в Екатеринбурге',
        'Защитили от депортации семью из Таджикистана',
        'ВНЖ предпринимателю из Армении за 5 месяцев',
        'Гражданство РФ программисту из Казахстана за 10 месяцев'
      ]
    }
  },
  {
    id: 'pension',
    title: 'Перерасчёт пенсии',
    description: 'Анализ по чек-листу ПФР. Прибавка реальна.',
    icon: 'Calculator',
    price: '19 900 ₽',
    duration: 'от 1 недели',
    urgent: false,
    details: {
      fullDescription: 'Профессиональный аудит пенсионных прав с использованием внутренних методик ПФР. Находим незачтенные периоды стажа и добиваемся доплат за прошлые периоды.',
      services: [
        'Полный аудит трудового стажа',
        'Перерасчет страховой и накопительной пенсии',
        'Учет льготных периодов и северных надбавок',
        'Получение справок из архивов предприятий',
        'Подтверждение стажа в советский период',
        'Досрочное назначение пенсии',
        'Перерасчет пенсии по потере кормильца',
        'Социальные доплаты и компенсации'
      ],
      advantages: [
        'Средняя прибавка к пенсии — 3 200 рублей в месяц',
        'Максимальная доплата за прошлые периоды — 280 000 рублей',
        '76% клиентов получают доплату',
        'Работаем со всеми регионами России'
      ],
      documents: [
        'Паспорт и СНИЛС',
        'Трудовая книжка или справки о работе',
        'Военный билет (для мужчин)',
        'Справки об учебе и повышении квалификации',
        'Документы о рождении и воспитании детей'
      ],
      process: [
        'Получение выписки из лицевого счета ПФР (3 дня)',
        'Анализ стажа и выявление нарушений (2-3 дня)',
        'Сбор недостающих документов (1-4 недели)',
        'Подача заявления в ПФР на перерасчет (1 день)',
        'Рассмотрение заявления ПФР (1 месяц)',
        'Получение доплаты за прошлые периоды (1-2 недели)'
      ],
      guarantees: [
        'Ведение дела до положительного результата',
        'Письменная гарантия на 2 года',
        'Подача жалобы при отказе',
        'Профессиональное сопровождение'
      ],
      examples: [
        'Доплата 180 000 рублей пенсионерке из Екатеринбурга',
        'Прибавка 4 500 рублей в месяц учителю из Новосибирска',
        'Досрочная пенсия машинисту крана на 2 года раньше срока'
      ]
    }
  },
  {
    id: 'lawyer',
    title: 'Услуги адвоката',
    description: 'Экстренный выезд, защита в суде',
    icon: 'Shield',
    price: 'от 20 000 ₽',
    duration: 'немедленно',
    urgent: true,
    details: {
      fullDescription: 'Круглосуточная адвокатская помощь при задержании, обысках, допросах. Защищаем права граждан в уголовном, административном и гражданском процессе.',
      services: [
        'Экстренный выезд к задержанному (24/7)',
        'Защита при допросах в полиции и СК',
        'Сопровождение обысков и выемок',
        'Представительство в судах всех инстанций',
        'Обжалование постановлений ГИБДД и КоАП',
        'Освобождение под залог и домашний арест',
        'Защита в уголовных делах любой сложности',
        'Консультации родственников задержанного'
      ],
      advantages: [
        'Выезд в течение 30 минут в Екатеринбурге',
        '92% дел заканчиваются условными сроками',
        'Работаем во всех судах России',
        '15 лет опыта в уголовном праве',
        'Конфиденциальность и адвокатская тайна'
      ],
      documents: [
        'Паспорт задержанного',
        'Документы по уголовному/административному делу',
        'Медицинские справки (при необходимости)',
        'Справки с места работы',
        'Характеристики и рекомендации'
      ],
      process: [
        'Звонок на горячую линию (сразу)',
        'Выезд адвоката к задержанному (30-60 минут)',
        'Первое свидание и консультация (в день обращения)',
        'Ознакомление с материалами дела (2-5 дней)',
        'Подготовка позиции защиты (3-7 дней)',
        'Представительство в суде (весь период дела)'
      ],
      guarantees: [
        'Круглосуточная консультация при задержании',
        'Адвокатская тайна и конфиденциальность',
        'Страхование профессиональной ответственности',
        'Фиксированная стоимость услуг в договоре'
      ],
      examples: [
        'Освобожден из-под стражи предприниматель по делу о мошенничестве',
        'Условный срок вместо 5 лет реального по экономическому преступлению',
        'Прекращение дела о взятке в особо крупном размере'
      ]
    }
  }
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showConsultationDialog, setShowConsultationDialog] = useState(false);

  const handleConsultationSubmit = (data: { name: string; phone: string; region: string; problem: string }) => {
    console.log('Заявка на консультацию:', data);
    // Закрываем диалог после копирования
    setTimeout(() => {
      setShowConsultationDialog(false);
    }, 2500);
  };

  return (
    <section id="services" className="py-12 md:py-20 relative overflow-hidden" role="main" itemScope itemType="https://schema.org/Service">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(42,183,121,0.08),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
            <Icon name="Briefcase" size={14} className="mr-1.5 md:mr-2" />
            Наши услуги
          </div>
          <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 px-2">
            Что решаем — и как быстро
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Профессиональная помощь по всем направлениям права с гарантией результата
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service) => (
            <Card key={service.id} className="relative overflow-hidden bg-card hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 hover:border-primary/50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"></div>
              
              <CardHeader className="text-center relative z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg">
                  <Icon 
                    name={service.icon as any} 
                    size={28} 
                    className="text-primary-foreground" 
                  />
                </div>
                <CardTitle className="text-lg md:text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6 leading-relaxed min-h-[40px]">
                  {service.description}
                </p>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Badge 
                    variant={service.urgent ? "destructive" : "secondary"} 
                    className="px-3 py-1 text-xs font-semibold"
                  >
                    <Icon name="Clock" size={12} className="mr-1" />
                    {service.duration}
                  </Badge>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-3 md:p-4 mb-3 md:mb-4">
                  <p className="text-xs md:text-sm text-muted-foreground mb-1">от</p>
                  <p className="font-bold text-xl md:text-2xl text-primary">{service.price}</p>
                </div>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => setSelectedService(service)}
                    >
                      Подробнее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto mx-2 md:mx-4">
                    <DialogHeader>
                      <DialogTitle className="flex items-center space-x-2 text-xl">
                        <Icon name={service.icon as any} size={24} className="text-primary" />
                        <span>{service.title}</span>
                      </DialogTitle>
                      <DialogDescription className="text-base">
                        {service.details.fullDescription}
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      {/* Услуги */}
                      <div>
                        <h4 className="font-semibold text-base md:text-lg mb-3 flex items-center">
                          <Icon name="CheckCircle" size={18} className="text-green-600 mr-2" />
                          Что входит в услугу
                        </h4>
                        <ul className="space-y-2">
                          {service.details.services.map((item, index) => (
                            <li key={index} className="flex items-start space-x-2 text-sm">
                              <Icon name="Check" size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Преимущества */}
                      <div>
                        <h4 className="font-semibold text-base md:text-lg mb-3 flex items-center">
                          <Icon name="Star" size={18} className="text-yellow-600 mr-2" />
                          Наши преимущества
                        </h4>
                        <ul className="space-y-2">
                          {service.details.advantages.map((item, index) => (
                            <li key={index} className="flex items-start space-x-2 text-sm">
                              <Icon name="Star" size={14} className="text-yellow-600 mt-0.5 flex-shrink-0" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      

                    </div>
                    
                    {/* Гарантии */}
                    <div className="mt-6">
                      <h4 className="font-semibold text-base md:text-lg mb-3 flex items-center">
                        <Icon name="Shield" size={18} className="text-green-600 mr-2" />
                        Наши гарантии
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.details.guarantees.map((item, index) => (
                          <div key={index} className="flex items-start space-x-2 text-sm bg-green-50 p-3 rounded-lg">
                            <Icon name="ShieldCheck" size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Примеры */}
                    <div className="mt-6">
                      <h4 className="font-semibold text-base md:text-lg mb-3 flex items-center">
                        <Icon name="TrendingUp" size={18} className="text-orange-600 mr-2" />
                        Реальные результаты
                      </h4>
                      <div className="space-y-3">
                        {service.details.examples.map((item, index) => (
                          <div key={index} className="bg-orange-50 p-3 md:p-4 rounded-lg text-sm">
                            <Icon name="Quote" size={14} className="text-orange-600 mb-2" />
                            <span className="leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Кнопка действий */}
                    <div className="mt-8 flex justify-center">
                      <Dialog open={showConsultationDialog} onOpenChange={setShowConsultationDialog}>
                        <DialogTrigger asChild>
                          <Button className="w-full sm:w-auto px-8">
                            <Icon name="Phone" size={16} className="mr-2" />
                            Заказать консультацию
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle className="text-center">Консультация юриста</DialogTitle>
                            <DialogDescription className="text-center">
                              Заполните форму для получения консультации
                            </DialogDescription>
                          </DialogHeader>
                          <ConsultationForm 
                            onSubmit={handleConsultationSubmit} 
                            selectedService={selectedService?.title}
                          />
                        </DialogContent>
                      </Dialog>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Дополнительная информация */}
        <div className="mt-10 md:mt-16">
          <div className="bg-gradient-to-br from-card via-card to-primary/5 p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-2xl border-2 border-border">
            <div className="grid md:grid-cols-3 gap-6 md:gap-10">
              <div className="text-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <Icon name="Zap" size={28} className="text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg md:text-xl mb-2 md:mb-3 text-foreground">Быстрый старт</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Консультация и план действий в день обращения. Начинаем работу сразу.</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-secondary to-secondary/70 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <Icon name="ShieldCheck" size={28} className="text-secondary-foreground" />
                </div>
                <h3 className="font-bold text-lg md:text-xl mb-2 md:mb-3 text-foreground">Гарантии результата</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Возврат средств при невыполнении обязательств. Работаем до победы.</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <Icon name="Award" size={28} className="text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg md:text-xl mb-2 md:mb-3 text-foreground">Команда экспертов</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">15+ лет опыта, 1200+ решенных дел. Профессионалы своего дела.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}