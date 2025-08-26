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

export default function Index() {
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
      <ContactForm />
      <BlogPreview />
      <AboutSection />
      <Footer />
      
      {/* Floating Components */}
      <ChatBot />
      <PriceCalculator />
    </div>
  );
}