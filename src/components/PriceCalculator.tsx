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
    basePrice: 15000,
    timeframe: '2-3 недели',
    description: 'РВП, ВНЖ, патенты, гражданство'
  },
  {
    id: 'pension',
    name: 'Перерасчёт пенсии',
    basePrice: 10000,
    timeframe: '1-2 недели',
    description: 'Анализ по чек-листу ПФР'
  },
  {
    id: 'lawyer',
    name: 'Услуги адвоката',
    basePrice: 5000,
    timeframe: 'немедленно',
    description: 'Экстренный выезд, защита в суде'
  }
];

const additionalServices: AdditionalService[] = [
  {
    id: 'urgent',
    name: 'Срочное рассмотрение',
    price: 10000,
    description: 'Сокращение сроков в 2 раза'
  },
  {
    id: 'documents',
    name: 'Подготовка документов',
    price: 5000,
    description: 'Сбор и оформление документов'
  },
  {
    id: 'representation',
    name: 'Представительство в суде',
    price: 15000,
    description: 'Участие юриста в судебных заседаниях'
  },
  {
    id: 'consultation',
    name: 'Дополнительные консультации',
    price: 3000,
    description: '3 консультации в течение месяца'
  }
];

const complexityMultipliers = {
  simple: { name: 'Простое дело', multiplier: 1 },
  medium: { name: 'Средней сложности', multiplier: 1.5 },
  complex: { name: 'Сложное дело', multiplier: 2 }
};

export default function PriceCalculator() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const [complexity, setComplexity] = useState<keyof typeof complexityMultipliers>('simple');
  const [selectedAdditional, setSelectedAdditional] = useState<string[]>([]);

  const calculateTotal = () => {
    if (!selectedService) return 0;

    const service = services.find(s => s.id === selectedService);
    if (!service) return 0;

    let total = service.basePrice * complexityMultipliers[complexity].multiplier;

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
    setComplexity('simple');
    setSelectedAdditional([]);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg" className="fixed bottom-6 left-6 z-40 shadow-lg">
          <Icon name="Calculator" size={20} className="mr-2" />
          Калькулятор стоимости
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Icon name="Calculator" size={24} className="text-primary" />
            <span>Калькулятор стоимости услуг</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
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
              {/* Complexity */}
              <div>
                <label className="text-sm font-medium mb-3 block">Сложность дела</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {Object.entries(complexityMultipliers).map(([key, value]) => (
                    <Card 
                      key={key}
                      className={`cursor-pointer transition-all ${
                        complexity === key ? 'ring-2 ring-primary bg-primary/5' : 'hover:bg-gray-50'
                      }`}
                      onClick={() => setComplexity(key as keyof typeof complexityMultipliers)}
                    >
                      <CardContent className="p-4 text-center">
                        <h4 className="font-medium">{value.name}</h4>
                        <Badge variant="secondary" className="mt-2">
                          x{value.multiplier}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

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
                  
                  <div className="flex justify-between">
                    <span>Сложность дела ({complexityMultipliers[complexity].name})</span>
                    <span>x{complexityMultipliers[complexity].multiplier}</span>
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
                    {selectedAdditional.includes('urgent') && ' (сокращено в 2 раза)'}
                  </div>
                </CardContent>
              </Card>

              {/* Actions */}
              <div className="flex space-x-3">
                <Button className="flex-1">
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
        </div>
      </DialogContent>
    </Dialog>
  );
}