import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function CallToActionSection() {
  const { language } = useContext(LanguageContext);

  const content = {
    es: {
      title: "¡No esperes más!",
      description: "Agenda hoy mismo tu consulta gratuita y da el primer paso hacia tu futuro internacional.",
      button: "Agendar Consulta",
    },
    en: {
      title: "Don't Wait Any Longer!",
      description: "Schedule your free consultation today and take the first step towards your international future.",
      button: "Schedule Consultation",
    },
    fr: {
      title: "N'attendez Plus!",
      description: "Planifiez votre consultation gratuite dès aujourd'hui et faites le premier pas vers votre avenir international.",
      button: "Planifier une Consultation",
    },
  };

  const t = content[language];

  return (
    <section className="py-20 px-8 bg-primary text-white text-center" data-aos="fade-up">
      <h2 className="text-4xl font-bold mb-6">{t.title}</h2>
      <p className="max-w-3xl mx-auto text-lg mb-8">{t.description}</p>
      <a
        href="#contacto"
        className="inline-block bg-accent hover:bg-white hover:text-accent text-primary font-bold py-3 px-6 rounded-lg transition duration-300"
      >
        {t.button}
      </a>
    </section>
  );
}
