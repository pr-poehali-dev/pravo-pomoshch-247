import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Здравствуйте! Я помогу вам получить быструю юридическую консультацию. Опишите вашу ситуацию, и я подскажу какая помощь вам нужна.',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const botResponses = [
    {
      keywords: ['депортация', 'задержали', 'миграция', 'внж', 'рвп', 'патент'],
      response: 'Понимаю, это серьезная ситуация с миграционным правом. Наши юристы специализируются на таких делах. Мы поможем с восстановлением документов, обжалованием отказов и защитой от депортации. Стоимость от 15 000 ₽, срок от 2 недель.'
    },
    {
      keywords: ['пенсия', 'пфр', 'перерасчет', 'доплата'],
      response: 'Вопросы с пенсией решаем быстро! Наши юристы проверят все расчеты ПФР и помогут получить доплату, если она положена. В среднем клиенты получают от 30 000 ₽ доплаты. Стоимость услуг от 10 000 ₽.'
    },
    {
      keywords: ['арбитраж', 'долг', 'договор', 'бизнес', 'партнер'],
      response: 'Арбитражные споры - наша специализация. Поможем взыскать долги, защитить бизнес и разрешить корпоративные споры. Работаем на результат. Стоимость от 25 000 ₽, срок от 2 недель.'
    },
    {
      keywords: ['срочно', 'адвокат', 'суд', 'полиция'],
      response: '🚨 Экстренная ситуация! Наш адвокат может выехать к вам прямо сейчас. Работаем 24/7, даже в выходные и праздники. Стоимость экстренного выезда от 5 000 ₽.'
    }
  ];

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      let botResponse = 'Спасибо за обращение! Для более подробной консультации рекомендую заполнить форму на сайте или связаться с нашими юристами по телефону. Мы обязательно поможем!';

      // Find matching response based on keywords
      const lowerMessage = inputMessage.toLowerCase();
      for (const response of botResponses) {
        if (response.keywords.some(keyword => lowerMessage.includes(keyword))) {
          botResponse = response.response;
          break;
        }
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setIsOpen(true)}
            size="lg"
            className="rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          >
            <Icon name="MessageCircle" size={28} />
          </Button>
          <div className="absolute -top-2 -right-2">
            <Badge variant="destructive" className="rounded-full px-2 py-1 text-xs animate-bounce">
              24/7
            </Badge>
          </div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]">
          <Card className="shadow-xl">
            <CardHeader className="bg-primary text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Icon name="Scale" size={20} />
                  <div>
                    <CardTitle className="text-lg">ПравоПомощь 24/7</CardTitle>
                    <p className="text-xs opacity-90">Юридическая помощь онлайн</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 p-2"
                >
                  <Icon name="X" size={16} />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="p-0">
              {/* Messages */}
              <div className="h-80 overflow-y-auto p-4 space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg text-sm ${
                        message.isBot
                          ? 'bg-gray-100 text-gray-800'
                          : 'bg-primary text-white'
                      }`}
                    >
                      {message.text}
                      <div className={`text-xs mt-1 opacity-60`}>
                        {message.timestamp.toLocaleTimeString('ru-RU', {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 p-3 rounded-lg text-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Опишите вашу ситуацию..."
                    className="flex-1"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    disabled={!inputMessage.trim() || isTyping}
                  >
                    <Icon name="Send" size={16} />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs"
                    onClick={() => setInputMessage('Проблемы с миграцией')}
                  >
                    Миграция
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs"
                    onClick={() => setInputMessage('Перерасчет пенсии')}
                  >
                    Пенсии
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs"
                    onClick={() => setInputMessage('Арбитражный спор')}
                  >
                    Арбитраж
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}