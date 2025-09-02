import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
  timeframe: string;
  description: string;
}

interface AdditionalService {
  id: string;
  name: string;
  price: number;
  description: string;
}

const services: ServiceOption[] = [
  {
    id: 'arbitration',
    name: 'Арбитражные дела',
    basePrice: 25000,
    timeframe: '2-4 недели',
    description: 'Споры, банкротство, защита бизнеса'
  },
  {
    id: 'migration',
    name: 'Миграция и документы',
    basePrice: 1500,
    timeframe: 'от 1 дня',
    description: 'РВП, ВНЖ, патенты, гражданство'
  },
  {
    id: 'pension',
    name: 'Перерасчёт пенсии',
    basePrice: 19900,
    timeframe: '1-2 недели',
    description: 'Анализ по чек-листу ПФР'
  },
  {
    id: 'lawyer',
    name: 'Услуги адвоката',
    basePrice: 20000,
    timeframe: 'немедленно',
    description: 'Экстренный выезд, защита в суде'
  }
];

const additionalServices: AdditionalService[] = [
  {
    id: 'rvp_full',
    name: 'Полное сопровождение РВП',
    price: 8400,
    description: 'План действий и сопровождение (до 9 900 ₽)'
  },
  {
    id: 'vnj_consultation',
    name: 'Консультация по ВНЖ',
    price: 1500,
    description: 'Оценка шансов и план действий (3 000 ₽)'
  },
  {
    id: 'vnj_full',
    name: 'Полное сопровождение ВНЖ',
    price: 18500,
    description: 'От консультации до получения документа (20 000 ₽)'
  },
  {
    id: 'citizenship_analysis',
    name: 'Анализ перспектив гражданства',
    price: 1500,
    description: 'Оценка возможностей и сроков (3 000 ₽)'
  },
  {
    id: 'citizenship_full',
    name: 'Полное сопровождение гражданства',
    price: 28490,
    description: 'От подготовки до паспорта РФ (29 990 ₽)'
  },
  {
    id: 'emergency_lawyer',
    name: 'Экстренная помощь адвоката',
    price: 18500,
    description: 'Выезд при задержании / защита (20 000 ₽)'
  }
];



interface PriceCalculatorProps {
  triggerButton?: React.ReactNode;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function PriceCalculator({ triggerButton, isOpen, onOpenChange }: PriceCalculatorProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const [selectedAdditional, setSelectedAdditional] = useState<string[]>([]);

  const dialogOpen = isOpen !== undefined ? isOpen : internalIsOpen;
  const setDialogOpen = onOpenChange !== undefined ? onOpenChange : setInternalIsOpen;

  const calculateTotal = () => {
    if (!selectedService) return 0;

    const service = services.find(s => s.id === selectedService);
    if (!service) return 0;

    let total = service.basePrice;

    selectedAdditional.forEach(addId => {
      const additional = additionalServices.find(a => a.id === addId);
      if (additional) {
        total += additional.price;
      }
    });

    return Math.round(total);
  };

  const getSelectedService = () => {
    return services.find(s => s.id === selectedService);
  };

  const handleAdditionalServiceToggle = (serviceId: string) => {
    setSelectedAdditional(prev => 
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const resetCalculator = () => {
    setSelectedService('');
    setSelectedAdditional([]);
  };

  const renderCalculatorContent = () => {
    return (
      <>
        {/* Service Selection */}
        <div>
          <label className="text-sm font-medium mb-3 block">Выберите услугу</label>
          <Select value={selectedService} onValueChange={setSelectedService}>
            <SelectTrigger>
              <SelectValue placeholder="Выберите тип юридической услуги" />
            </SelectTrigger>
            <SelectContent>
              {services.map(service => (
                <SelectItem key={service.id} value={service.id}>
                  <div className="flex flex-col">
                    <span className="font-medium">{service.name}</span>
                    <span className="text-xs text-muted-foreground">
                      от {service.basePrice.toLocaleString()} ₽ · {service.timeframe}
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {selectedService && (
          <>

            {/* Additional Services */}
            <div>
              <label className="text-sm font-medium mb-3 block">Дополнительные услуги</label>
              <div className="space-y-3">
                {additionalServices.map(service => (
                  <div key={service.id} className="flex items-start space-x-3">
                    <Checkbox
                      id={service.id}
                      checked={selectedAdditional.includes(service.id)}
                      onCheckedChange={() => handleAdditionalServiceToggle(service.id)}
                    />
                    <div className="flex-1">
                      <label htmlFor={service.id} className="text-sm font-medium cursor-pointer">
                        {service.name}
                      </label>
                      <p className="text-xs text-muted-foreground">
                        {service.description}
                      </p>
                      <Badge variant="outline" className="mt-1">
                        +{service.price.toLocaleString()} ₽
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Breakdown */}
            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle className="text-lg">Расчёт стоимости</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Базовая стоимость ({getSelectedService()?.name})</span>
                  <span>{getSelectedService()?.basePrice.toLocaleString()} ₽</span>
                </div>

                {selectedAdditional.length > 0 && (
                  <div className="border-t pt-2">
                    <h4 className="font-medium text-sm mb-2">Дополнительные услуги:</h4>
                    {selectedAdditional.map(addId => {
                      const service = additionalServices.find(a => a.id === addId);
                      if (!service) return null;
                      return (
                        <div key={addId} className="flex justify-between text-sm">
                          <span>{service.name}</span>
                          <span>+{service.price.toLocaleString()} ₽</span>
                        </div>
                      );
                    })}
                  </div>
                )}

                <div className="border-t pt-3 flex justify-between items-center text-lg font-semibold">
                  <span>Итоговая стоимость:</span>
                  <span className="text-primary">{calculateTotal().toLocaleString()} ₽</span>
                </div>

                <div className="text-xs text-muted-foreground">
                  Срок выполнения: {getSelectedService()?.timeframe}
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex space-x-3">
              <Button className="flex-1" onClick={() => window.open('https://t.me/ZokonAndy_bot', '_blank')}>
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Заказать услугу
              </Button>
              <Button variant="outline" onClick={resetCalculator}>
                <Icon name="RotateCcw" size={16} className="mr-2" />
                Сбросить
              </Button>
            </div>
          </>
        )}
      </>
    );
  };

  // If no trigger button provided, render as embedded component
  if (!triggerButton) {
    return (
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center space-x-2 text-2xl">
              <Icon name="Calculator" size={28} className="text-primary" />
              <span>Калькулятор стоимости услуг</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {renderCalculatorContent()}
          </CardContent>
        </Card>
      </div>
    );
  }

  // Render as dialog
  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        {triggerButton}
      </DialogTrigger>
      
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Icon name="Calculator" size={24} className="text-primary" />
            <span>Калькулятор стоимости услуг</span>
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          {renderCalculatorContent()}
        </div>
      </DialogContent>
    </Dialog>
  );
}