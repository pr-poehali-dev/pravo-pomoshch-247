import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.message) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Сохраняем заявку локально
      const request = {
        id: Date.now().toString(),
        name: formData.name,
        phone: formData.phone,
        region: 'Не указан',
        problem: formData.message,
        service: 'Общая консультация',
        timestamp: new Date().toLocaleString('ru-RU'),
        status: 'new' as const
      };

      const existingRequests = JSON.parse(localStorage.getItem('consultation_requests') || '[]');
      existingRequests.unshift(request);
      localStorage.setItem('consultation_requests', JSON.stringify(existingRequests));

      setSubmitted(true);
      
      // Сброс формы через 3 секунды
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          message: ''
        });
        setSubmitted(false);
      }, 3000);

    } catch (error) {
      console.error('Ошибка сохранения заявки:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacts" className="relative py-16 bg-white/85 backdrop-blur-sm">
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">
              Опишите свою ситуацию
            </h2>
            <p className="text-slate-700">
              Получите план действий и стоимость за 30 минут
            </p>
          </div>
          <Card className="bg-white/95 backdrop-blur-sm border-slate-200/50 shadow-lg">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block text-slate-900">Ваше имя</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Иван Иванов"
                      className="bg-white/90"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block text-slate-900">Телефон</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+7 (999) 123-45-67"
                      className="bg-white/90"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block text-slate-900">Опишите вашу ситуацию</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Расскажите подробно о вашей проблеме..."
                    rows={4}
                    className="bg-white/90"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full" 
                  disabled={!formData.name || !formData.phone || !formData.message || isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                      Отправляем...
                    </>
                  ) : submitted ? (
                    <>
                      <Icon name="CheckCircle" size={20} className="mr-2" />
                      Заявка отправлена!
                    </>
                  ) : (
                    <>
                      <Icon name="Send" size={20} className="mr-2" />
                      Получить консультацию
                    </>
                  )}
                </Button>
                <p className="text-xs text-slate-600 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}