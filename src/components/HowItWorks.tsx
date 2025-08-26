export default function HowItWorks() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-primary mb-4">
            Как это работает
          </h2>
          <p className="text-muted-foreground">3 простых шага к решению вашей проблемы</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">Написать нам</h3>
            <p className="text-muted-foreground">
              Опишите свою ситуацию в форме или напишите в чат
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">Получить оценку</h3>
            <p className="text-muted-foreground">
              За 30 минут получите план действий и стоимость
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">Решить проблему</h3>
            <p className="text-muted-foreground">
              Юрист ведёт дело до полного решения вопроса
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}