export default function TelegramWidget() {
  return (
    <a
      href="https://t.me/cryptolesatm_bot"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-24 z-50 flex items-center justify-center w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      style={{ backgroundColor: '#29A8E0' }}
      title="Написать в Telegram"
    >
      <svg width="30" height="30" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z"/>
      </svg>
    </a>
  );
}
