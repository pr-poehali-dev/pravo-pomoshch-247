import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px]">
          <Card className="shadow-xl h-full flex flex-col">
            <CardHeader className="bg-primary text-white rounded-t-lg flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Icon name="Scale" size={20} />
                  <div>
                    <CardTitle className="text-lg">ПравоПомощь 24/7</CardTitle>
                    <p className="text-xs opacity-90">Онлайн консультация</p>
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
            
            <CardContent className="p-0 flex-1">
              <iframe 
                allow="microphone;autoplay" 
                className="w-full h-full"
                src="https://functions.pro-talk.ru/api/v1.0/chatgpt_widget_dialog_api?record_id=rec5N8BlqWJn5thnz&promt_id=31201&lang=ru&fullscreen=0&voice=1&file=1&circle=1"
                title="Онлайн консультант"
              ></iframe>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}