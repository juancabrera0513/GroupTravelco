import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import FAQPage from "./pages/FAQ";

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BenefitsSection />
      <CallToActionSection />
      <QuoteForm />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
        </main>
      </Router>
    </LanguageProvider>
  );
}

export default App;
