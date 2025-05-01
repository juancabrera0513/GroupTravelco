import React, { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { language, switchLanguage } = useContext(LanguageContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = {
    es: ["Inicio", "Sobre Nosotros", "Servicios", "Contacto", "Preguntas"],
    en: ["Home", "About", "Services", "Contact", "FAQ"],
    fr: ["Accueil", "À Propos", "Services", "Contact", "FAQ"],
  };

  const sections = ["home", "about", "services", "contacto", "faq"];

  const flags = {
    es: "🇪🇸",
    en: "🇺🇸",
    fr: "🇫🇷",
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-20 top-0">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">Puerta Global</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems[language].map((item, idx) =>
            sections[idx] === "faq" ? (
              <Link
                key={idx}
                to="/faq"
                className="text-gray-700 hover:text-primary font-medium transition"
              >
                {item}
              </Link>
            ) : (
              <a
                key={idx}
                href={`#${sections[idx]}`}
                className="text-gray-700 hover:text-primary font-medium transition"
              >
                {item}
              </a>
            )
          )}

          {/* Language Buttons with Flags */}
          <div className="flex gap-2 ml-4">
            {Object.keys(flags).map((lang) => (
              <button
                key={lang}
                onClick={() => switchLanguage(lang)}
                className={`text-xl transition hover:scale-110 ${
                  language === lang ? "opacity-100" : "opacity-50"
                }`}
                aria-label={`Switch to ${lang}`}
              >
                {flags[lang]}
              </button>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4">
          <div className="flex flex-col gap-4 mt-4">
            {navItems[language].map((item, idx) =>
              sections[idx] === "faq" ? (
                <Link
                  key={idx}
                  to="/faq"
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 hover:text-primary"
                >
                  {item}
                </Link>
              ) : (
                <a
                  key={idx}
                  href={`#${sections[idx]}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 hover:text-primary"
                >
                  {item}
                </a>
              )
            )}
          </div>
          <div className="flex gap-4 mt-4">
            {Object.keys(flags).map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  switchLanguage(lang);
                  setMenuOpen(false);
                }}
                className={`text-2xl ${language === lang ? "opacity-100" : "opacity-50"}`}
              >
                {flags[lang]}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
