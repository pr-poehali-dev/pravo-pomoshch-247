import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function EmergencySection() {
  return (
    <section className="relative py-10 md:py-16 bg-gradient-to-br from-red-600 to-red-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent_60%)]" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 animate-pulse">
          <Icon name="AlertTriangle" size={28} className="text-white drop-shadow-md" />
        </div>
        <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-white drop-shadow-lg px-4">
          Срочно? Нажмите сюда
        </h2>
        <p className="text-base md:text-xl mb-6 md:mb-8 text-white/95 drop-shadow-sm max-w-2xl mx-auto px-4 leading-relaxed">
          Задержали, грозят депортацией или нужна помощь прямо сейчас?
        </p>
        <Button 
          variant="outline" 
          size="lg" 
          className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-white text-red-600 hover:bg-gray-50 active:bg-gray-100 border-2 border-white font-bold shadow-2xl hover:shadow-white/20 active:scale-95 md:hover:scale-105 transition-all duration-300" 
          onClick={() => window.open('https://t.me/migracia_bot', '_blank')}
        >
          <Icon name="Phone" size={20} className="mr-2" />
          Вызвать адвоката срочно
        </Button>
        
        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-white/90 text-sm md:text-base">
          <div className="flex items-center">
            <Icon name="Clock" size={16} className="mr-2" />
            Выезд за 30 минут
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/30" />
          <div className="flex items-center">
            <Icon name="Shield" size={16} className="mr-2" />
            Круглосуточная поддержка
          </div>
        </div>
      </div>
    </section>
  );
}