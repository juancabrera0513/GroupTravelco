import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../i18n";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const { language } = useContext(LanguageContext);
  const t = translations.footer[language];

  const links = {
    es: ["Inicio", "Servicios", "Contacto", "Preguntas"],
    en: ["Home", "Services", "Contact", "FAQ"],
    fr: ["Accueil", "Services", "Contact", "FAQ"],
  };

  const sections = ["#home", "#services", "#contacto", "/faq"];

  return (
    <footer className="bg-primary text-white py-10 px-6 text-center" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        {/* Enlaces */}
        <div className="mb-6 flex justify-center flex-wrap gap-6 text-sm font-medium">
          {links[language].map((label, idx) =>
            sections[idx].startsWith("#") ? (
              <a key={idx} href={sections[idx]} className="hover:underline">
                {label}
              </a>
            ) : (
              <Link key={idx} to={sections[idx]} className="hover:underline">
                {label}
              </Link>
            )
          )}
        </div>

        {/* Redes sociales */}
        <div className="flex justify-center gap-6 mb-6 text-xl" data-aos="zoom-in">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-125 hover:text-white"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-125 hover:text-white"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/18095551234"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-125 hover:text-white"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm opacity-80">{t}</p>
      </div>
    </footer>
  );
}
