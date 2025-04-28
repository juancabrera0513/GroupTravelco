import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../i18n";

export default function HeroSection() {
  const { language } = useContext(LanguageContext);
  const t = translations.hero[language];

  return (
    <section className="relative h-screen overflow-hidden">
      <video
        className="absolute w-full h-full object-cover"
        src="/videos/puertaGlobal.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">{t.heading}</h1>
        <p className="text-xl mb-6 animate-fadeIn delay-100">{t.subheading}</p>
        <a
          href="#contacto"
          className="bg-accent hover:bg-primary text-white px-6 py-3 rounded-lg text-lg font-bold transition duration-300 animate-fadeIn delay-200"
        >
          {t.cta}
        </a>
      </div>
    </section>
  );
}
