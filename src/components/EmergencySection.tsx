import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function EmergencySection() {
  return (
    <section className="py-16 bg-destructive text-white">
      <div className="container mx-auto px-4 text-center">
        <Icon name="AlertTriangle" size={48} className="mx-auto mb-4" />
        <h2 className="font-heading text-3xl font-bold mb-4">Срочно? Нажмите сюда</h2>
        <p className="text-xl mb-8 opacity-90">
          Задержали, грозят депортацией или нужна помощь прямо сейчас?
        </p>
        <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white text-destructive hover:bg-gray-50">
          <Icon name="Phone" size={20} className="mr-2" />
          Вызвать адвоката срочно
        </Button>
      </div>
    </section>
  );
}