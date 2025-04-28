import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { FaUserTie, FaDollarSign, FaHeadset } from "react-icons/fa";

export default function BenefitsSection() {
  const { language } = useContext(LanguageContext);

  const benefits = {
    es: [
      { icon: <FaUserTie />, title: "Atención Personalizada", description: "Te acompañamos paso a paso en todo el proceso." },
      { icon: <FaDollarSign />, title: "Precios Competitivos", description: "Ofrecemos tarifas justas y accesibles para todos los servicios." },
      { icon: <FaHeadset />, title: "Soporte 24/7", description: "Estamos disponibles cuando más nos necesites." },
    ],
    en: [
      { icon: <FaUserTie />, title: "Personalized Attention", description: "We guide you step-by-step through the entire process." },
      { icon: <FaDollarSign />, title: "Competitive Prices", description: "We offer fair and accessible pricing for all services." },
      { icon: <FaHeadset />, title: "24/7 Support", description: "We're available whenever you need us." },
    ],
    fr: [
      { icon: <FaUserTie />, title: "Attention Personnalisée", description: "Nous vous accompagnons étape par étape dans tout le processus." },
      { icon: <FaDollarSign />, title: "Prix Compétitifs", description: "Nous proposons des tarifs justes et accessibles pour tous les services." },
      { icon: <FaHeadset />, title: "Assistance 24/7", description: "Nous sommes disponibles chaque fois que vous avez besoin de nous." },
    ],
  };

  return (
    <section className="py-20 px-8 bg-white" data-aos="fade-up">
      <h2 className="text-4xl font-bold mb-12 text-center text-primary">
        {language === "es" ? "¿Por qué elegir Puerta Global?" : language === "en" ? "Why Choose Puerta Global?" : "Pourquoi Choisir Puerta Global?"}
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {benefits[language].map((benefit, index) => (
          <div
            key={index}
            className="group bg-gray-100 p-8 shadow-md rounded-2xl text-center hover:bg-primary hover:text-white transition duration-300"
            data-aos="zoom-in"
            data-aos-delay={`${index * 150}`}
          >
            <div className="flex justify-center mb-4 text-5xl group-hover:text-white text-primary">
              {benefit.icon}
            </div>
            <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
            <p className="text-gray-600 group-hover:text-gray-100">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
