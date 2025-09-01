import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import HowItWorks from '@/components/HowItWorks';
import EmergencySection from '@/components/EmergencySection';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import BlogPreview from '@/components/BlogPreview';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import PriceCalculator from '@/components/PriceCalculator';
import { useSEO } from '@/hooks/useSEO';

export default function Index() {
  useSEO({
    title: 'ПравоПомощь 24/7 — Юридическая помощь круглосуточно | Адвокат, миграция, пенсии',
    description: 'ПравоПомощь 24/7 — круглосуточная юридическая помощь. Защита в суде, миграционное право, перерасчет пенсий, помощь при задержании. Консультация за 30 минут!',
    keywords: 'юрист круглосуточно, адвокат срочно, миграционное право, перерасчет пенсии, защита в суде, помощь при задержании, юридическая консультация',
    ogTitle: 'ПравоПомощь 24/7 — Круглосуточная юридическая помощь',
    ogDescription: 'Профессиональная юридическая помощь 24/7. Защита в суде, миграционное право, перерасчет пенсий. Ответим за 30 минут!',
    canonical: 'https://pravo-pomoshch-247.poehali.dev/'
  });
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/img/2dc9386d-61c6-47ec-9c99-e5b9c1571909.jpg')",
          backgroundAttachment: 'fixed'
        }}
      />
      
      <Header />
      <HeroSection />
      <ServicesSection />
      <section id="calculator" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary mb-4">
            Рассчитайте стоимость услуг
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Воспользуйтесь калькулятором для предварительного расчёта
          </p>
          <PriceCalculator />
        </div>
      </section>
      <HowItWorks />
      <EmergencySection />
      <Testimonials />
      <ContactForm />
      <BlogPreview />
      <AboutSection />
      <Footer />
      
      {/* Floating Components */}
      <ChatBot />
    </div>
  );
}