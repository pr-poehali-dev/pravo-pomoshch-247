import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface ConsultationFormProps {
  onSubmit?: (data: { name: string; phone: string; problem: string }) => void;
}

export default function ConsultationForm({ onSubmit }: ConsultationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    problem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.problem) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/0ed69754-ef73-458f-bb9a-71fe91d061f8', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          problem: formData.problem
        })
      });

      if (response.ok) {
        setSubmitted(true);
        onSubmit?.(formData);
        
        // Сброс формы через 3 секунды
        setTimeout(() => {
          setFormData({
            name: '',
            phone: '',
            problem: ''
          });
          setSubmitted(false);
        }, 3000);
      } else {
        console.error('Ошибка отправки заявки');
      }
    } catch (error) {
      console.error('Ошибка отправки заявки:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const isFormValid = formData.name && formData.phone && formData.problem;

  if (submitted) {
    return (
      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 border border-slate-200/50">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="CheckCircle" className="text-green-600" size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Заявка отправлена!
          </h3>
          <p className="text-slate-600">
            Мы получили вашу заявку и свяжемся с вами в ближайшее время.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 border border-slate-200/50">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Заказать консультацию
        </h3>
        <p className="text-slate-600 text-sm">
          Оставьте заявку и получите консультацию юриста
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Имя */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-slate-900 font-medium">
            Имя
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Введите ваше имя"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="bg-white/90 border-slate-300 focus:border-primary"
            required
          />
        </div>

        {/* Телефон */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-slate-900 font-medium">
            Телефон
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+7 (___) ___-__-__"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="bg-white/90 border-slate-300 focus:border-primary"
            required
          />
        </div>

        {/* Описание проблемы */}
        <div className="space-y-2">
          <Label htmlFor="problem" className="text-slate-900 font-medium">
            Опишите вашу проблему
          </Label>
          <Textarea
            id="problem"
            placeholder="Расскажите кратко о вашей ситуации..."
            value={formData.problem}
            onChange={(e) => handleInputChange('problem', e.target.value)}
            className="bg-white/90 border-slate-300 focus:border-primary min-h-[100px]"
            required
          />
        </div>

        {/* Кнопка отправки */}
        <Button 
          type="submit" 
          className="w-full mt-6"
          disabled={!isFormValid || isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
              Отправляем...
            </>
          ) : (
            <>
              <Icon name="Send" size={16} className="mr-2" />
              Заказать консультацию
            </>
          )}
        </Button>

        {/* Дополнительная информация */}
        <p className="text-xs text-slate-500 text-center mt-4">
          Нажимая кнопку, вы соглашаетесь на обработку персональных данных
        </p>
      </form>
    </div>
  );
}