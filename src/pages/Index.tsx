import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import HowItWorks from '@/components/HowItWorks';
import EmergencySection from '@/components/EmergencySection';
import Testimonials from '@/components/Testimonials';

import BlogPreview from '@/components/BlogPreview';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';


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

      <HowItWorks />
      <EmergencySection />
      <Testimonials />

      <BlogPreview />
      <AboutSection />
      <Footer />
      

    </div>
  );
}