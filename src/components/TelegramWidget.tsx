import { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const API_URL = 'https://functions.poehali.dev/d5e08afb-6949-4e0b-8018-be8e24e83784';

function getSessionId() {
  let id = sessionStorage.getItem('tg_session');
  if (!id) {
    id = Math.random().toString(36).slice(2, 10);
    sessionStorage.setItem('tg_session', id);
  }
  return id;
}

interface Message {
  id: string;
  text: string;
  from: 'user' | 'bot';
}

export default function TelegramWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 'welcome', text: 'Здравствуйте! Напишите ваш вопрос, и наш специалист ответит вам.', from: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [offset, setOffset] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sessionId = getSessionId();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (!isOpen) {
      if (pollRef.current) clearInterval(pollRef.current);
      return;
    }
    const poll = async () => {
      try {
        const res = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'poll', offset })
        });
        const data = await res.json();
        if (data.messages?.length) {
          setMessages(prev => [
            ...prev,
            ...data.messages.map((m: { id: number; text: string }) => ({
              id: String(m.id),
              text: m.text,
              from: 'bot' as const
            }))
          ]);
          setOffset(data.offset);
        } else {
          setOffset(data.offset ?? offset);
        }
      } catch (_e) { /* network error — ignore */ }
    };
    pollRef.current = setInterval(poll, 4000);
    return () => { if (pollRef.current) clearInterval(pollRef.current); };
  }, [isOpen, offset]);

  const send = async () => {
    const text = input.trim();
    if (!text || sending) return;
    setInput('');
    setSending(true);
    setMessages(prev => [...prev, { id: Date.now().toString(), text, from: 'user' }]);
    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'send', text, session_id: sessionId })
      });
    } catch (_e) { /* network error — ignore */ }
    setSending(false);
  };

  return (
    <>
      {/* Окно чата — на мобилке на весь экран, на десктопе — всплывашка */}
      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-28 sm:right-6 z-50 flex flex-col sm:w-80 sm:rounded-2xl bg-white shadow-2xl overflow-hidden border border-gray-200"
          style={{ height: undefined }}
        >
          {/* Шапка */}
          <div className="flex items-center justify-between px-4 py-3 flex-shrink-0" style={{ backgroundColor: '#29A8E0' }}>
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z"/>
              </svg>
              <div>
                <p className="text-white text-sm font-semibold">Telegram-консультант</p>
                <p className="text-white text-xs opacity-80">Онлайн</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white opacity-80 hover:opacity-100 p-1">
              <Icon name="X" size={20} />
            </button>
          </div>

          {/* Сообщения */}
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2 bg-gray-50">
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                    msg.from === 'user'
                      ? 'text-white rounded-br-sm'
                      : 'bg-white text-gray-800 rounded-bl-sm shadow-sm'
                  }`}
                  style={msg.from === 'user' ? { backgroundColor: '#29A8E0' } : {}}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Ввод */}
          <div className="flex items-center gap-2 px-3 py-3 border-t border-gray-200 bg-white flex-shrink-0">
            <input
              className="flex-1 text-sm border border-gray-200 rounded-full px-4 py-2 outline-none focus:border-blue-400"
              placeholder="Написать сообщение..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              disabled={sending}
            />
            <button
              onClick={send}
              disabled={!input.trim() || sending}
              className="w-10 h-10 rounded-full flex items-center justify-center text-white disabled:opacity-40 transition flex-shrink-0"
              style={{ backgroundColor: '#29A8E0' }}
            >
              <Icon name="Send" size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Кнопка */}
      <div
        className="fixed z-50"
        style={{ bottom: '1.5rem', right: '6rem' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered && !isOpen && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-800 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap shadow-lg pointer-events-none hidden sm:block">
            Написать консультанту
            <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800" />
          </div>
        )}
        <button
          onClick={() => setIsOpen(o => !o)}
          className="flex items-center justify-center w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          style={{ backgroundColor: '#29A8E0' }}
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z"/>
          </svg>
        </button>
        <span className="block text-center text-xs font-medium text-gray-600 mt-1">Telegram</span>
      </div>
    </>
  );
}