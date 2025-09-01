import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
  onSubmit?: (data: { name: string; phone: string; region: string }) => void;
}

interface ConsultationData {
  name: string;
  phone: string;
  region: string;
}

export default function ConsultationForm({ onSubmit }: ConsultationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    region: ''
  });
  const [copied, setCopied] = useState(false);

  const formatConsultationData = (data: ConsultationData): string => {
    const currentDate = new Date().toLocaleString('ru-RU', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    return `📋 ЗАЯВКА НА ЮРИДИЧЕСКУЮ КОНСУЛЬТАЦИЮ

🗓 Дата подачи: ${currentDate}

👤 Клиент: ${data.name}
📞 Телефон: ${data.phone}  
🗺 Регион: ${data.region}

📝 Статус: Новая заявка
⏰ Требует обработки: Да

---
Заявка создана через сайт юридических услуг`;
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
      return true;
    } catch (err) {
      console.error('Ошибка копирования:', err);
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.region) {
      return;
    }

    // Форматируем и копируем заявку
    const formattedData = formatConsultationData(formData);
    copyToClipboard(formattedData);

    onSubmit?.(formData);
    
    // Сброс формы
    setFormData({
      name: '',
      phone: '',
      region: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const isFormValid = formData.name && formData.phone && formData.region;

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 border border-slate-200/50">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Заказать консультацию
        </h3>
        <p className="text-slate-600 text-sm">
          Оставьте заявку и получите бесплатную консультацию юриста
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
            Федеральный округ
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

        {/* Кнопка отправки */}
        <Button 
          type="submit" 
          className="w-full mt-6"
          disabled={!isFormValid}
        >
          <Icon name={copied ? "Check" : "Copy"} size={16} className="mr-2" />
          {copied ? "Заявка скопирована!" : "Скопировать заявку"}
        </Button>

        {/* Уведомление */}
        {copied && (
          <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg text-center">
            <div className="flex items-center justify-center space-x-2 text-green-700">
              <Icon name="CheckCircle" size={16} />
              <span className="text-sm font-medium">
                Заявка скопирована в буфер обмена
              </span>
            </div>
            <p className="text-xs text-green-600 mt-1">
              Вставьте данные в вашу CRM систему
            </p>
          </div>
        )}

        {/* Дополнительная информация */}
        <p className="text-xs text-slate-500 text-center mt-4">
          При нажатии кнопки заявка будет скопирована в буфер обмена
        </p>
      </form>
    </div>
  );
}