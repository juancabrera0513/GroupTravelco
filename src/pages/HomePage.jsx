import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import BenefitsSection from "../components/BenefitsSection";
import CallToActionSection from "../components/CallToActionSection";
import QuoteForm from "../components/QuoteForm";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BenefitsSection />
      <CallToActionSection />
      <QuoteForm />
    </>
  );
}
