import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ConsultationRequest {
  id: string;
  name: string;
  phone: string;
  region: string;
  problem: string;
  service?: string;
  timestamp: string;
  status: 'new' | 'in_progress' | 'completed';
}

export default function AdminPanel() {
  const [requests, setRequests] = useState<ConsultationRequest[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Загружаем заявки из localStorage
    const savedRequests = localStorage.getItem('consultation_requests');
    if (savedRequests) {
      setRequests(JSON.parse(savedRequests));
    }

    // Проверяем URL для показа админки
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('admin') === 'true') {
      setIsVisible(true);
    }
  }, []);

  const updateRequestStatus = (id: string, status: ConsultationRequest['status']) => {
    const updatedRequests = requests.map(req => 
      req.id === id ? { ...req, status } : req
    );
    setRequests(updatedRequests);
    localStorage.setItem('consultation_requests', JSON.stringify(updatedRequests));
  };

  const clearAllRequests = () => {
    setRequests([]);
    localStorage.removeItem('consultation_requests');
  };

  const copyToTelegram = (request: ConsultationRequest) => {
    const message = `🆘 НОВАЯ ЗАЯВКА НА КОНСУЛЬТАЦИЮ

👤 Имя: ${request.name}
📞 Телефон: ${request.phone}
🗺️ Регион: ${request.region}
🎯 Услуга: ${request.service || 'Не указано'}
❓ Проблема: ${request.problem}

📅 Время: ${request.timestamp}`;

    navigator.clipboard.writeText(message);
    alert('Заявка скопирована! Отправьте в Telegram @zakazandy_bot');
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold">Админ-панель заявок</h2>
          <div className="flex gap-2">
            <Button variant="outline" onClick={clearAllRequests}>
              <Icon name="Trash2" size={16} className="mr-2" />
              Очистить все
            </Button>
            <Button variant="ghost" onClick={() => setIsVisible(false)}>
              <Icon name="X" size={16} />
            </Button>
          </div>
        </div>

        <div className="p-6">
          {requests.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Icon name="Inbox" size={48} className="mx-auto mb-4 opacity-50" />
              <p>Заявок пока нет</p>
            </div>
          ) : (
            <div className="space-y-4">
              {requests.map((request) => (
                <Card key={request.id} className={`border-l-4 ${
                  request.status === 'new' ? 'border-l-red-500' :
                  request.status === 'in_progress' ? 'border-l-yellow-500' :
                  'border-l-green-500'
                }`}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{request.name}</CardTitle>
                      <div className="flex gap-2">
                        <select 
                          value={request.status} 
                          onChange={(e) => updateRequestStatus(request.id, e.target.value as ConsultationRequest['status'])}
                          className="text-sm border rounded px-2 py-1"
                        >
                          <option value="new">Новая</option>
                          <option value="in_progress">В работе</option>
                          <option value="completed">Выполнена</option>
                        </select>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => copyToTelegram(request)}
                        >
                          <Icon name="Copy" size={14} className="mr-1" />
                          Копировать
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong>📞 Телефон:</strong> {request.phone}
                      </div>
                      <div>
                        <strong>🗺️ Регион:</strong> {request.region}
                      </div>
                      <div className="md:col-span-2">
                        <strong>🎯 Услуга:</strong> {request.service || 'Не указано'}
                      </div>
                      <div className="md:col-span-2">
                        <strong>❓ Проблема:</strong> {request.problem}
                      </div>
                      <div className="md:col-span-2 text-gray-500">
                        <strong>📅 Время:</strong> {request.timestamp}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}