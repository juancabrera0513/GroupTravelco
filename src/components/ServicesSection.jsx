import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../i18n";
import { FaPassport, FaPlaneDeparture, FaShieldAlt } from "react-icons/fa";

export default function ServicesSection() {
  const { language } = useContext(LanguageContext);
  const t = translations.services[language];

  const icons = [
    <FaPassport className="text-5xl text-primary mb-4 group-hover:translate-y-[-5px] transition-transform duration-300" />,
    <FaPlaneDeparture className="text-5xl text-primary mb-4 group-hover:translate-y-[-5px] transition-transform duration-300" />,
    <FaShieldAlt className="text-5xl text-primary mb-4 group-hover:translate-y-[-5px] transition-transform duration-300" />,
  ];

  return (
    <section id="services" className="py-20 px-8 bg-gray-50" data-aos="fade-up">
      <h2 className="text-4xl font-bold mb-12 text-center text-primary animate-fadeIn">
        {t.title}
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {t.list.map((service, index) => (
          <div
            key={index}
            className="group bg-white p-10 shadow-lg rounded-2xl transform transition hover:scale-105 hover:shadow-2xl"
            data-aos="zoom-in"
            data-aos-delay={`${index * 150}`}
          >
            <div className="flex justify-center mb-4">
              {icons[index]}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary text-center">{service.title}</h3>
            <p className="text-gray-600 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
