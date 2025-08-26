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
    <div className="min-h-screen">
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