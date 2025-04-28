import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import BenefitsSection from "./components/BenefitsSection";
import CallToActionSection from "./components/CallToActionSection";
import QuoteForm from "./components/QuoteForm";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <LanguageProvider>
      <div className="font-sans">
        <Navbar />
        <main className="pt-20">
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <BenefitsSection /> {/* 👈 Nueva sección */}
          <CallToActionSection /> {/* 👈 Nuevo llamado a acción */}
          <QuoteForm />
          <Footer />
          <WhatsAppButton />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
