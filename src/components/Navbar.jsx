import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function Navbar() {
  const { language, switchLanguage } = useContext(LanguageContext);

  const navItems = {
    es: ["Inicio", "Sobre Nosotros", "Servicios", "Contacto"],
    en: ["Home", "About", "Services", "Contact"],
    fr: ["Accueil", "À Propos", "Services", "Contact"],
  };

  const sections = ["home", "about", "services", "contacto"];

  return (
    <header className="bg-white shadow-md fixed w-full z-20 top-0">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">
          Puerta Global
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          {navItems[language].map((item, idx) => (
            <a
              key={idx}
              href={`#${sections[idx]}`}
              className="text-gray-700 hover:text-primary font-medium transition"
            >
              {item}
            </a>
          ))}
          {/* Language Buttons */}
          <div className="flex gap-2 ml-6">
            <button
              onClick={() => switchLanguage("es")}
              className={`text-sm font-bold ${language === "es" ? "text-primary" : "text-gray-700"}`}
            >
              ES
            </button>
            <button
              onClick={() => switchLanguage("en")}
              className={`text-sm font-bold ${language === "en" ? "text-primary" : "text-gray-700"}`}
            >
              EN
            </button>
            <button
              onClick={() => switchLanguage("fr")}
              className={`text-sm font-bold ${language === "fr" ? "text-primary" : "text-gray-700"}`}
            >
              FR
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
