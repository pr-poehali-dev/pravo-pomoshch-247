import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    title: string;
    experience: string;
  };
  date: string;
  category: string;
  readTime: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 'vnzh-sverdlovsk',
    title: 'Как оформить ВНЖ в Свердловской области — пошаговая инструкция на 2025 год',
    excerpt: 'Вид на жительство (ВНЖ) — важный шаг к жизни в России. Оформить его в Свердловской области можно за 6–8 месяцев, если всё сделать правильно.',
    content: `
      <div class="prose max-w-none">
        <p>Вид на жительство (ВНЖ) — важный шаг к жизни в России.<br>
        Оформить его в Свердловской области можно за 6–8 месяцев, если всё сделать правильно.</p>
        
        <p>Но ошибки в документах — частая причина отказа.<br>
        Вот пошаговая инструкция — без лишних слов.</p>
        
        <h3>✅ Шаг 1: Проверьте, имеете ли вы право на ВНЖ</h3>
        <p>Подойдите под один из пунктов:</p>
        <ul>
          <li>Имеете РВП и живёте в РФ не менее 1 года</li>
          <li>Являетесь носителем русского языка</li>
          <li>Вы — родитель, супруг или ребёнок гражданина РФ</li>
          <li>Работаете по квалифицированной рабочей визе</li>
          <li>Вы — беженец</li>
        </ul>
        
        <h3>✅ Шаг 2: Соберите документы</h3>
        <ul>
          <li>Паспорт + нотариальный перевод</li>
          <li>Миграционная карта + отметки о продлении</li>
          <li>РВП</li>
          <li>Справка об отсутствии судимости (из вашей страны и РФ)</li>
          <li>Справка об отсутствии ВИЧ</li>
          <li>Фото 3,5×4,5</li>
          <li>Документ о знании русского языка (тест от РПЦ или образовательной организации)</li>
          <li>Документы на жильё (свидетельство о собственности или договор аренды)</li>
          <li>Квитанция об оплате госпошлины — 3 500 ₽</li>
        </ul>
        
        <h3>✅ Шаг 3: Подайте документы</h3>
        <p><strong>Куда:</strong> УВМ МВД по Свердловской области (Екатеринбург, ул. Малышева, 65)</p>
        <p><strong>Как:</strong></p>
        <ul>
          <li>Личное посещение</li>
          <li>Через Госуслуги (частично)</li>
          <li>С приглашением — если подаёте как родственник гражданина РФ</li>
        </ul>
        
        <h3>✅ Шаг 4: Пройдите собеседование</h3>
        <ul>
          <li><strong>Вопросы:</strong> о себе, семье, знании языка, планах в РФ</li>
          <li><strong>Ответы</strong> — честные, краткие</li>
          <li><strong>При себе</strong> — все документы</li>
        </ul>
        
        <h3>✅ Шаг 5: Дождитесь решения</h3>
        <ul>
          <li><strong>Срок:</strong> 6 месяцев (иногда до 8)</li>
          <li><strong>Результат:</strong>
            <ul>
              <li>Одобрено → получаете пластиковый ВНЖ</li>
              <li>Отказано → можно обжаловать в суде</li>
            </ul>
          </li>
        </ul>
        
        <div class="bg-blue-50 p-4 rounded-lg mt-6">
          <h4>💡 Совет от юриста:</h4>
          <p><em>«За 2024 год мы подали 89 заявок на ВНЖ — отказали только в 3 случаях. Причина? Ошибки в переводе паспорта. Проверяйте всё дважды.»</em></p>
        </div>
        
        <h3>🛠 Мы поможем:</h3>
        <ul>
          <li>Проверим ваш пакет документов</li>
          <li>Подготовим переводы и справки</li>
          <li>Сопроводим на собеседовании</li>
          <li>Обжалуем отказ</li>
        </ul>
        
        <div class="bg-green-50 p-4 rounded-lg mt-6">
          <p><strong>Не хотите рисковать?</strong><br>
          👉 <a href="#contact" class="text-green-600">Оставьте заявку</a> — проверим ваш случай бесплатно.</p>
        </div>
      </div>
    `,
    author: {
      name: 'Марина Смирнова',
      title: 'юрист по миграции',
      experience: 'стаж — 9 лет'
    },
    date: '8 апреля 2025',
    category: 'Миграция',
    readTime: '8 мин',
    tags: ['ВНЖ', 'Свердловская область', 'миграция', 'документы', 'собеседование']
  },
  {
    id: 'citizenship-rvp',
    title: 'Как получить гражданство РФ по РВП — условия и сроки в 2025 году',
    excerpt: 'Многие думают: «РВП — это временно, гражданство — потом». На самом деле — по РВП можно получить гражданство быстрее, если вы подходите под льготную категорию.',
    content: `
      <div class="prose max-w-none">
        <p>Многие думают: «РВП — это временно, гражданство — потом».<br>
        На самом деле — по РВП можно получить гражданство быстрее, если вы подходите под льготную категорию.</p>
        
        <h3>✅ Кто может получить гражданство РФ по упрощёнке?</h3>
        <ul>
          <li>Родился в РСФСР — и имел советское гражданство</li>
          <li>Супруг/супруга — гражданин РФ — и вы в браке от 3 лет</li>
          <li>Ребёнок — гражданин РФ — и вы его родитель</li>
          <li>Носитель русского языка — признанный комиссией</li>
          <li>Работаете по квалифицированной визе — от 1 года</li>
          <li>Инвалид, пенсионер, участник СВО — есть дополнительные основания</li>
        </ul>
        
        <h3>✅ Сроки</h3>
        <ul>
          <li><strong>По упрощённой процедуре:</strong> от 3 до 6 месяцев</li>
          <li><strong>Общая процедура:</strong> 3 года (РВП → ВНЖ → гражданство)</li>
        </ul>
        
        <h3>✅ Что нужно?</h3>
        <ul>
          <li>РВП</li>
          <li>Документы на РВП (паспорт, миграционная карта, справки)</li>
          <li>Подтверждение основания (свидетельство о браке, рождении, НРЯ)</li>
          <li>Знание русского языка (тест)</li>
          <li>Подтверждение дохода (трудовая, выписка)</li>
          <li>Отсутствие судимости</li>
          <li>Госпошлина — 3 500 ₽</li>
        </ul>
        
        <h3>❌ Когда могут отказать?</h3>
        <ul>
          <li>Если есть судимость за тяжкое преступление</li>
          <li>Если подавали с поддельными документами</li>
          <li>Если не платили НДФЛ или штрафы</li>
        </ul>
        
        <div class="bg-blue-50 p-4 rounded-lg mt-6">
          <h4>💡 Совет от юриста:</h4>
          <p><em>«Мы помогли 47 клиентам получить гражданство по упрощёнке. Самое частое — ошибка в формулировке брака. Пишите: "в браке с гражданином РФ", а не "с русским по национальности".»</em></p>
        </div>
        
        <h3>🛠 Мы делаем:</h3>
        <ul>
          <li>Проверяем ваш случай на право упрощённого гражданства</li>
          <li>Готовим пакет документов</li>
          <li>Подаем и сопровождаем</li>
          <li>Помогаем пройти тест по языку</li>
        </ul>
        
        <div class="bg-green-50 p-4 rounded-lg mt-6">
          <p><strong>Хотите стать гражданином РФ быстрее?</strong><br>
          👉 <a href="#contact" class="text-green-600">Пройдите бесплатную проверку</a> — за 10 минут скажем, подойдёте ли вы.</p>
        </div>
      </div>
    `,
    author: {
      name: 'Марина Смирнова',
      title: 'юрист по миграции',
      experience: 'стаж — 9 лет'
    },
    date: '10 апреля 2025',
    category: 'Миграция',
    readTime: '6 мин',
    tags: ['гражданство', 'РВП', 'упрощенка', 'брак', 'НРЯ']
  },
  {
    id: 'arbitrage-court-checklist',
    title: 'Арбитражный спор: что взять с собой в суд, чтобы не проиграть',
    excerpt: 'Вы подали иск? Вас вызвали в суд? Тогда вам нужно быть готовым. Не только юристу — вам лично. Вот чек-лист, что взять с собой в арбитражный суд.',
    content: `
      <div class="prose max-w-none">
        <p>Вы подали иск? Вас вызвали в суд?<br>
        Тогда вам нужно быть готовым.<br>
        Не только юристу — вам лично.</p>
        
        <p>Вот чек-лист, что взять с собой в арбитражный суд.</p>
        
        <h3>✅ Документы (в папке, в 2 экземплярах)</h3>
        <ul>
          <li>Копию иска</li>
          <li>Договор, на который ссылаетесь</li>
          <li>Акты выполненных работ / приёмки</li>
          <li>Счёт, накладные, УПД</li>
          <li>Переписку (почта, мессенджеры — распечатать!)</li>
          <li>Доказательства оплаты (выписки, квитанции)</li>
          <li>Доверенность (если вы не директор)</li>
          <li>Выписку из ЕГРЮЛ / ЕГРИП</li>
        </ul>
        
        <h3>✅ Техника</h3>
        <ul>
          <li>Ноутбук или планшет — для быстрого поиска документов</li>
          <li>Флешка — на случай, если потребуют файлы</li>
          <li>Телефон — заряженный, с записями переговоров (если есть)</li>
        </ul>
        
        <h3>✅ Поведение в зале</h3>
        <ul>
          <li>Приходите за 15 минут</li>
          <li>Обращайтесь к судье: «Уважаемый суд»</li>
          <li>Говорите чётко, по делу</li>
          <li>Не перебивайте</li>
          <li>Если не знаете ответ — скажите: «Уточню и сообщу»</li>
        </ul>
        
        <h3>❌ Чего НЕ делать:</h3>
        <ul>
          <li>Не спорьте с судьёй</li>
          <li>Не кричите</li>
          <li>Не приносите эмоции</li>
          <li>Не говорите: «Он же обещал!» — нужны доказательства</li>
        </ul>
        
        <div class="bg-blue-50 p-4 rounded-lg mt-6">
          <h4>💡 Совет от юриста:</h4>
          <p><em>«В 70% случаев проигрывают не потому что правы оппоненты, а потому что не предоставили документы. Принесите всё — даже если кажется лишним.»</em></p>
        </div>
        
        <h3>🛠 Мы защищаем:</h3>
        <ul>
          <li>Подготовим пакет документов</li>
          <li>Составим возражение</li>
          <li>Представим вас в суде</li>
          <li>Поможем взыскать деньги</li>
        </ul>
        
        <div class="bg-red-50 p-4 rounded-lg mt-6">
          <p><strong>Суд через неделю?</strong><br>
          👉 <a href="#contact" class="text-red-600">Напишите нам</a> — подготовим за 48 часов.</p>
        </div>
      </div>
    `,
    author: {
      name: 'Игорь Лебедев',
      title: 'юрист по арбитражу',
      experience: 'стаж — 15 лет'
    },
    date: '12 апреля 2025',
    category: 'Арбитраж',
    readTime: '5 мин',
    tags: ['арбитраж', 'суд', 'документы', 'подготовка', 'иск']
  },
  {
    id: 'rvp-fast-track',
    title: 'Как быстро оформить РВП без очереди — лайфхаки от юриста',
    excerpt: 'Оформление РВП обычно занимает 3–6 месяцев и требует долгой очереди. Но есть способы ускорить — законно.',
    content: `
      <div class="prose max-w-none">
        <p>Оформление РВП обычно занимает 3–6 месяцев и требует долгой очереди.<br>
        Но есть способы ускорить — законно.</p>
        
        <h3>✅ Способ 1: Подать как носитель русского языка (НРЯ)</h3>
        <ul>
          <li><strong>Срок:</strong> до 2 месяцев</li>
          <li><strong>Условия:</strong>
            <ul>
              <li>Родились в РСФСР или СССР</li>
              <li>Или: один из родителей/бабушек/дедушек — гражданин СССР</li>
              <li>Прошли собеседование на НРЯ</li>
            </ul>
          </li>
        </ul>
        
        <h3>✅ Способ 2: Через Госуслуги (без живой очереди)</h3>
        <ol>
          <li>Зайдите на gosuslugi.ru</li>
          <li>Найдите услугу: «Получение РВП»</li>
          <li>Заполните анкету</li>
          <li>Загрузите документы</li>
          <li>Получите приглашение на подачу — без ожидания</li>
        </ol>
        
        <h3>✅ Способ 3: По квоте (если живёте в Свердловской области)</h3>
        <ul>
          <li><strong>Квота в 2025 году:</strong> 2 400 человек</li>
          <li><strong>Подавайте с 1 января</strong> — места заканчиваются быстро</li>
          <li><strong>Документы:</strong>
            <ul>
              <li>Паспорт + перевод</li>
              <li>Миграционная карта</li>
              <li>Справка 086-у (медицинская)</li>
              <li>СНИЛС</li>
              <li>Фото</li>
              <li>Квитанция — 1 600 ₽</li>
            </ul>
          </li>
        </ul>
        
        <div class="bg-blue-50 p-4 rounded-lg mt-6">
          <h4>💡 Совет от юриста:</h4>
          <p><em>«Мы помогаем подавать на РВП через НРЯ и Госуслуги. Среднее время — 42 дня. Главное — не тянуть до лета, когда квоты заканчиваются.»</em></p>
        </div>
        
        <h3>🛠 Мы сделаем:</h3>
        <ul>
          <li>Проверим ваш случай на ускоренное оформление</li>
          <li>Подготовим документы</li>
          <li>Подадим через Госуслуги или НРЯ</li>
          <li>Сопроводим до получения</li>
        </ul>
        
        <div class="bg-green-50 p-4 rounded-lg mt-6">
          <p><strong>Хотите РВП за 2 месяца?</strong><br>
          👉 <a href="#contact" class="text-green-600">Оставьте заявку</a> — проверим, подойдёте ли вы под упрощёнку.</p>
        </div>
      </div>
    `,
    author: {
      name: 'Марина Смирнова',
      title: 'юрист по миграции',
      experience: 'стаж — 9 лет'
    },
    date: '15 апреля 2025',
    category: 'Миграция',
    readTime: '4 мин',
    tags: ['РВП', 'НРЯ', 'Госуслуги', 'квота', 'ускорение']
  },
  {
    id: 'business-defense',
    title: 'Бизнес в споре? Как защитить компанию от арбитражного иска',
    excerpt: 'Вашей компании пришло уведомление о суде? Не паникуйте. Но и не игнорируйте — даже если считаете, что правы.',
    content: `
      <div class="prose max-w-none">
        <p>Вашей компании пришло уведомление о суде?<br>
        Не паникуйте.<br>
        Но и не игнорируйте — даже если считаете, что правы.</p>
        
        <h3>✅ Что делать в первые 24 часа:</h3>
        <ul>
          <li>Не отвечайте оппоненту лично — только через юриста</li>
          <li>Соберите все документы по сделке</li>
          <li>Проверьте сроки исковой давности — 3 года, но может быть меньше</li>
          <li>Свяжитесь с юристом — лучше до ответа в суд</li>
        </ul>
        
        <h3>✅ Как защитить бизнес:</h3>
        <ul>
          <li>Подготовьте возражение на иск</li>
          <li>Соберите доказательства: оплата, переписка, акты</li>
          <li>Проверьте, правильно ли составлен иск</li>
          <li>Подайте ходатайство о назначении экспертизы, если нужно</li>
        </ul>
        
        <h3>✅ Что может спасти:</h3>
        <ul>
          <li>Досудебная претензия не была отправлена</li>
          <li>Нарушена подсудность</li>
          <li>Неправильно рассчитана цена иска</li>
          <li>Отсутствуют доказательства у истца</li>
        </ul>
        
        <div class="bg-blue-50 p-4 rounded-lg mt-6">
          <h4>💡 Совет от юриста:</h4>
          <p><em>«Мы защищали 113 компаний в 2024 году. В 41% случаев — иск снимали ещё до суда. Главное — действовать быстро.»</em></p>
        </div>
        
        <h3>🛠 Мы предлагаем:</h3>
        <ul>
          <li>Экстренную проверку иска</li>
          <li>Подготовку возражения за 24–48 часов</li>
          <li>Защиту в арбитраже</li>
          <li>Досудебное урегулирование</li>
        </ul>
        
        <div class="bg-red-50 p-4 rounded-lg mt-6">
          <p><strong>Получили иск?</strong><br>
          👉 <a href="#contact" class="text-red-600">Напишите нам сейчас</a> — первый анализ — бесплатно.</p>
        </div>
      </div>
    `,
    author: {
      name: 'Игорь Лебедев',
      title: 'юрист по арбитражу',
      experience: 'стаж — 15 лет'
    },
    date: '18 апреля 2025',
    category: 'Арбитраж',
    readTime: '6 мин',
    tags: ['защита бизнеса', 'арбитраж', 'иск', 'возражение', 'досудебное']
  },
  {
    id: 'patent-delay',
    title: 'Что делать, если просрочил патент на 5 дней?',
    excerpt: 'Если вы иностранный гражданин и просрочили патент на 5 дней, не паникуйте. Штрафы и депортация — реальные риски, но всё ещё можно исправить.',
    content: `
      <div class="prose max-w-none">
        <p>Если вы иностранный гражданин и просрочили патент на 5 дней, не паникуйте.<br>
        Штрафы и депортация — реальные риски, но всё ещё можно исправить.</p>
        
        <h3>⚠️ Что грозит при просрочке?</h3>
        <ul>
          <li><strong>Штраф:</strong> от 5 000 до 7 000 ₽</li>
          <li><strong>Административное выдворение:</strong> если просрочка более 30 дней — почти наверняка</li>
          <li><strong>Запрет на въезд в РФ:</strong> на 3–5 лет</li>
        </ul>
        
        <p>Но если просрочка — 5 дней — шанс остаться в стране очень высок.</p>
        
        <h3>✅ Что делать прямо сейчас:</h3>
        
        <h4>1. Не покидайте территорию РФ</h4>
        <p>Если вы выедете — могут закрыть въезд. Оставайтесь и решайте вопрос здесь.</p>
        
        <h4>2. Оплатите штраф (если пришёл)</h4>
        <p>Штраф приходит от МВД. Оплатите — это покажет добросовестность.</p>
        
        <h4>3. Подайте документы на РВП или ВНЖ</h4>
        <p>Это самый надёжный способ легализовать статус.</p>
        
        <h4>4. Подавайте ходатайство о восстановлении срока</h4>
        <p>В УВМ МВД можно подать ходатайство с объяснением:</p>
        <blockquote>
          «Просрочил по уважительной причине: болел, не знал, задержали на работе»<br>
          Причины принимаются, особенно если нет судимостей.
        </blockquote>
        
        <h4>5. Получите новый патент</h4>
        <p>Если вы можете работать — оформите новый. Страховка и НДФЛ — обязательны.</p>
        
        <div class="bg-blue-50 p-4 rounded-lg mt-6">
          <h4>💡 Совет от юриста:</h4>
          <p><em>«Мы помогли более 200 клиентам восстановить статус после просрочки. Главное — не ждать. Чем дольше тянете, тем выше риск депортации.»</em></p>
        </div>
        
        <h3>🛠 Что мы можем сделать за вас:</h3>
        <ul>
          <li>Подготовим ходатайство о восстановлении срока</li>
          <li>Организуем подачу документов в УВМ</li>
          <li>Сопроводим при необходимости</li>
          <li>Поможем оформить РВП или ВНЖ</li>
        </ul>
        
        <div class="bg-red-50 p-4 rounded-lg mt-6">
          <p><strong>Ситуация срочная?</strong><br>
          👉 <a href="#contact" class="text-red-600">Напишите нам в Telegram</a> — юрист ответит за 10 минут.</p>
        </div>
      </div>
    `,
    author: {
      name: 'Марина Смирнова',
      title: 'юрист по миграции',
      experience: 'стаж — 9 лет'
    },
    date: '5 апреля 2025',
    category: 'Миграция',
    readTime: '5 мин',
    tags: ['патент', 'просрочка', 'миграция', 'штраф', 'РВП']
  },
  {
    id: 'pension-recalculation',
    title: 'Как пересчитать пенсию — 7 пунктов, которые часто игнорируют',
    excerpt: 'Многие пенсионеры получают меньше, чем положено. Пенсионный фонд не всегда учитывает всё. Но пересчёт возможен — и прибавка может быть от 2 000 до 10 000 ₽.',
    content: `
      <div class="prose max-w-none">
        <p>Многие пенсионеры получают меньше, чем положено.<br>
        Пенсионный фонд не всегда учитывает всё.<br>
        Но пересчёт возможен — и прибавка может быть от 2 000 до 10 000 ₽.</p>
        
        <h3>🔍 Где чаще всего ошибаются?</h3>
        
        <h4>1. Льготные периоды</h4>
        <p>Учитывали ли:</p>
        <ul>
          <li>уход за ребёнком до 1,5 лет?</li>
          <li>уход за инвалидом?</li>
          <li>служба в армии?</li>
        </ul>
        <p>→ Каждый год = + баллы.</p>
        
        <h4>2. Стаж до 2002 года</h4>
        <p>Этот стаж считается по-особому. Если не подтверждён — пенсия ниже.</p>
        
        <h4>3. Зарплата по «чёрной» работе</h4>
        <p>Даже если не было официальных выплат, можно подтвердить свидетелями.</p>
        
        <h4>4. Работа в районах Крайнего Севера</h4>
        <p>Коэффициенты и льготный стаж часто не учитываются.</p>
        
        <h4>5. Индивидуальный коэффициент (ИПК)</h4>
        <p>Проверьте: правильно ли посчитали баллы за каждый год.</p>
        
        <h4>6. Фиксированная выплата</h4>
        <p>Инвалидам, педагогам, медикам — положены надбавки. Их могут не назначить.</p>
        
        <h4>7. Перерасчёт при изменении состава семьи</h4>
        <p>Например, если ухаживаете за пожилым родственником.</p>
        
        <h3>✅ Как запросить перерасчёт?</h3>
        <ol>
          <li>Зайдите в личный кабинет на сайте ПФР</li>
          <li>Нажмите: «Запросить перерасчёт пенсии»</li>
          <li>Приложите документы:
            <ul>
              <li>трудовую книжку</li>
              <li>справки с работы</li>
              <li>свидетельства о рождении детей</li>
              <li>паспорт</li>
            </ul>
          </li>
        </ol>
        
        <p>Если отказали — можно обжаловать в суде.</p>
        
        <div class="bg-blue-50 p-4 rounded-lg mt-6">
          <h4>💡 Совет от юриста:</h4>
          <p><em>«Мы анализируем пенсию по чек-листу из 28 пунктов. У каждого 3-го клиента удаётся увеличить пенсию. Главное — не полагаться на ПФР.»</em></p>
        </div>
        
        <h3>🛠 Мы поможем:</h3>
        <ul>
          <li>Проверим вашу пенсию по методике ПФР</li>
          <li>Подготовим документы</li>
          <li>Подадим запрос</li>
          <li>Организуем перерасчёт</li>
        </ul>
        
        <div class="bg-green-50 p-4 rounded-lg mt-6">
          <p><strong>Хотите узнать, сколько вам должны?</strong><br>
          👉 <a href="#contact" class="text-green-600">Оставьте заявку</a> — сделаем бесплатный расчёт.</p>
        </div>
      </div>
    `,
    author: {
      name: 'Алексей Кузнецов',
      title: 'юрист по пенсионным вопросам',
      experience: 'стаж — 12 лет'
    },
    date: '6 апреля 2025',
    category: 'Пенсии',
    readTime: '7 мин',
    tags: ['пенсия', 'перерасчет', 'ПФР', 'льготы', 'стаж']
  },
  {
    id: 'detention-rights',
    title: 'Что делать, если вас задержали — 5 прав, которые нужно знать',
    excerpt: 'Задержание — стресс. Полиция говорит: «Вы обязаны…», «Молчите — хуже будет». Но у вас есть реальные права. Знание — ваша защита.',
    content: `
      <div class="prose max-w-none">
        <p>Задержание — стресс.<br>
        Полиция говорит: «Вы обязаны…», «Молчите — хуже будет».<br>
        Но у вас есть реальные права. Знание — ваша защита.</p>
        
        <h3>🛡 5 прав, которые вы имеете при задержании:</h3>
        
        <h4>1. Право знать причину задержания</h4>
        <p>Полицейский обязан сказать: «Вас задерживают по статье…»<br>
        → Если не говорит — требуйте.</p>
        
        <h4>2. Право на молчание</h4>
        <p>Вы не обязаны давать объяснения.<br>
        → Лучше: «Я буду давать показания только в присутствии адвоката».</p>
        
        <h4>3. Право на адвоката</h4>
        <p>Вы можете сразу позвонить юристу.<br>
        → Полиция не имеет права мешать.</p>
        
        <h4>4. Право на связь с родственниками</h4>
        <p>Вас должны уведомить семью о задержании в течение 3 часов.</p>
        
        <h4>5. Право на медицинскую помощь</h4>
        <p>Если плохо — требуйте врача.<br>
        → Особенно важно, если были силовые действия.</p>
        
        <h3>✅ Что делать в первые минуты:</h3>
        <ol>
          <li>Сохраняйте спокойствие</li>
          <li>Назовите имя, но не отвечайте на вопросы</li>
          <li>Скажите: «Требую адвоката»</li>
          <li>Запомните фамилии и номера полицейских</li>
        </ol>
        
        <div class="bg-blue-50 p-4 rounded-lg mt-6">
          <h4>💡 Совет от адвоката:</h4>
          <p><em>«Чем раньше вы свяжётесь с юристом — тем выше шанс избежать ареста. Мы выезжаем в течение часа. За 4 года — 92% задержанных клиентов избежали ареста.»</em></p>
        </div>
        
        <h3>🛠 Мы помогаем:</h3>
        <ul>
          <li>Экстренный выезд адвоката (в течение 1 часа)</li>
          <li>Защита в отделе и на суде</li>
          <li>Оспаривание незаконного задержания</li>
        </ul>
        
        <div class="bg-red-50 p-4 rounded-lg mt-6">
          <p><strong>Вас задержали? Не ждите утра.</strong><br>
          👉 <a href="#contact" class="text-red-600">Напишите в Telegram</a> — поможем немедленно.</p>
        </div>
      </div>
    `,
    author: {
      name: 'Иван Петров',
      title: 'адвокат',
      experience: 'стаж — 12 лет'
    },
    date: '7 апреля 2025',
    category: 'Защита прав',
    readTime: '6 мин',
    tags: ['задержание', 'права', 'адвокат', 'полиция', 'защита']
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const categories = ['Все', 'Миграция', 'Пенсии', 'Защита прав', 'Арбитраж'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === '' || selectedCategory === 'Все' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <Button 
            variant="ghost" 
            onClick={() => setSelectedPost(null)}
            className="mb-6"
          >
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            Назад к блогу
          </Button>
          
          <article className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="mb-6">
                <Badge variant="secondary" className="mb-2">
                  {selectedPost.category}
                </Badge>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedPost.title}
                </h1>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-2">
                    <Icon name="User" size={16} />
                    <span>{selectedPost.author.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Briefcase" size={16} />
                    <span>{selectedPost.author.title}, {selectedPost.author.experience}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Calendar" size={16} />
                    <span>{selectedPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} />
                    <span>{selectedPost.readTime}</span>
                  </div>
                </div>
              </div>
              
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />
              
              <div className="mt-8 pt-6 border-t">
                <h3 className="text-lg font-semibold mb-3">Теги:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 bg-primary/5 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Нужна помощь по этому вопросу?</h3>
                <p className="text-muted-foreground mb-4">
                  Получите персональную консультацию от автора статьи
                </p>
                <div className="flex space-x-3">
                  <Button>
                    <Icon name="Phone" size={16} className="mr-2" />
                    Заказать консультацию
                  </Button>
                  <Button variant="outline">
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Написать в чат
                  </Button>
                </div>
              </div>
            </div>
          </article>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Юридический блог
          </h1>
          <p className="text-lg text-muted-foreground">
            Практические советы и разборы реальных дел
          </p>
        </div>
        
        {/* Поиск и фильтры */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Поиск статей..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category || (selectedCategory === '' && category === 'Все') ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category === 'Все' ? '' : category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Статьи */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>
                <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Icon name="User" size={14} />
                    <span>{post.author.name}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Calendar" size={14} />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {post.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{post.tags.length - 3}
                    </Badge>
                  )}
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => setSelectedPost(post)}
                >
                  Читать статью
                  <Icon name="ArrowRight" size={14} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-muted-foreground mb-2">
              Статьи не найдены
            </h3>
            <p className="text-muted-foreground">
              Попробуйте изменить поисковый запрос или выбрать другую категорию
            </p>
          </div>
        )}
        
        {/* Призыв к действию */}
        <div className="mt-12 bg-white rounded-xl shadow-sm p-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Не нашли ответ на свой вопрос?
          </h2>
          <p className="text-muted-foreground mb-6">
            Получите персональную консультацию от наших экспертов
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg">
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать консультацию
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в чат
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}