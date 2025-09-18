import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function EmergencySection() {
  return (
    <section className="relative py-16 bg-red-600/90 backdrop-blur-sm text-white">
      <div className="relative z-10 container mx-auto px-4 text-center">
        <Icon name="AlertTriangle" size={48} className="mx-auto mb-4 text-white drop-shadow-md" />
        <h2 className="font-heading text-3xl font-bold mb-4 text-white drop-shadow-md">Срочно? Нажмите сюда</h2>
        <p className="text-xl mb-8 text-white/95 drop-shadow-sm">
          Задержали, грозят депортацией или нужна помощь прямо сейчас?
        </p>
        <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white text-red-600 hover:bg-gray-50 border-2 border-white font-semibold shadow-lg" onClick={() => window.open('https://t.me/migracia_bot', '_blank')}>
          <Icon name="Phone" size={20} className="mr-2" />
          Вызвать адвоката срочно
        </Button>
      </div>
    </section>
  );
}