import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../i18n";

export default function Footer() {
  const { language } = useContext(LanguageContext);
  const t = translations.footer[language];

  return (
<footer className="bg-primary text-white py-6 text-center" data-aos="fade-up">
<p>{t}</p>
    </footer>
  );
}
