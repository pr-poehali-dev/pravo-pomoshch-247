import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const federalDistricts = [
  'Центральный федеральный округ',
  'Северо-Западный федеральный округ', 
  'Южный федеральный округ',
  'Северо-Кавказский федеральный округ',
  'Приволжский федеральный округ',
  'Уральский федеральный округ',
  'Сибирский федеральный округ',
  'Дальневосточный федеральный округ'
];

interface ConsultationFormProps {
  onSubmit?: (data: { name: string; phone: string; region: string; problem: string }) => void;
  selectedService?: string;
}

export default function ConsultationForm({ onSubmit, selectedService }: ConsultationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    region: '',
    problem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.region || !formData.problem) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Сохраняем заявку локально
      const request = {
        id: Date.now().toString(),
        name: formData.name,
        phone: formData.phone,
        region: formData.region,
        problem: formData.problem,
        service: selectedService || 'Не указано',
        timestamp: new Date().toLocaleString('ru-RU'),
        status: 'new' as const
      };

      // Получаем существующие заявки
      const existingRequests = JSON.parse(localStorage.getItem('consultation_requests') || '[]');
      existingRequests.unshift(request);
      localStorage.setItem('consultation_requests', JSON.stringify(existingRequests));

      // Попытка отправить в Telegram (если подписка активна)
      try {
        const response = await fetch('https://functions.poehali.dev/3b756019-a0e6-409f-bda7-6fa3f524026f', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            region: formData.region,
            problem: formData.problem,
            service: selectedService || 'Не указано'
          })
        });
        
        // Если успешно отправлено, отмечаем заявку
        if (response.ok) {
          request.status = 'in_progress';
          localStorage.setItem('consultation_requests', JSON.stringify(existingRequests));
        }
      } catch (telegramError) {
        console.log('Telegram недоступен, заявка сохранена локально');
      }

      setSubmitted(true);
      onSubmit?.(formData);
      
      // Сброс формы через 3 секунды
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          region: '',
          problem: ''
        });
        setSubmitted(false);
      }, 3000);

    } catch (error) {
      console.error('Ошибка сохранения заявки:', error);
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

  const isFormValid = formData.name && formData.phone && formData.region && formData.problem;

  if (submitted) {
    return (
      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-5 md:p-6 border border-slate-200/50">
        <div className="text-center">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
            <Icon name="CheckCircle" className="text-green-600" size={28} />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
            Заявка отправлена!
          </h3>
          <p className="text-sm md:text-base text-slate-600">
            Мы получили вашу заявку и свяжемся с вами в ближайшее время.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-5 md:p-6 border border-slate-200/50">
      <div className="text-center mb-5 md:mb-6">
        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
          Заказать консультацию
        </h3>
        {selectedService && (
          <p className="text-primary font-medium mb-2 text-sm md:text-base">
            Услуга: {selectedService}
          </p>
        )}
        <p className="text-slate-600 text-xs md:text-sm">
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

        {/* Регион */}
        <div className="space-y-2">
          <Label htmlFor="region" className="text-slate-900 font-medium">
            Регион
          </Label>
          <Select value={formData.region} onValueChange={(value) => handleInputChange('region', value)}>
            <SelectTrigger className="bg-white/90 border-slate-300 focus:border-primary">
              <SelectValue placeholder="Выберите федеральный округ" />
            </SelectTrigger>
            <SelectContent>
              {federalDistricts.map((district) => (
                <SelectItem key={district} value={district}>
                  {district}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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