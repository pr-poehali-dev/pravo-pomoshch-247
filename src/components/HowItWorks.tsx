export default function HowItWorks() {
  return (
    <section className="relative py-16 bg-white/85 backdrop-blur-sm">
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">
            Как это работает
          </h2>
          <p className="text-slate-700">3 простых шага к решению вашей проблемы</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2 text-slate-900">Написать нам</h3>
            <p className="text-slate-700">
              Опишите свою ситуацию в форме или напишите в чат
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2 text-slate-900">Получить оценку</h3>
            <p className="text-slate-700">
              За 30 минут получите план действий и стоимость
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2 text-slate-900">Решить проблему</h3>
            <p className="text-slate-700">
              Юрист ведёт дело до полного решения вопроса
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}