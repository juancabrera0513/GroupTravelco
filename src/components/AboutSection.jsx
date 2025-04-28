import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../i18n";

export default function AboutSection() {
  const { language } = useContext(LanguageContext);
  const t = translations.about[language];

  return (
<section className="py-20 px-8 text-center bg-gray-100" id="about" data-aos="fade-up">
<h2 className="text-3xl font-bold mb-6">{t.title}</h2>
      <p className="max-w-3xl mx-auto text-lg">{t.description}</p>
    </section>
  );
}
