import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { LanguageContext } from "../context/LanguageContext";

const visaTexts = {
  es: {
    title: "Asesoría de Visas",
    back: "Volver al inicio",
    cta: "Solicita tu asesoría ahora",
    usa: {
      title: "Visa para Estados Unidos",
      desc: "Te guiamos paso a paso en el proceso de solicitud de la visa de no inmigrante para turismo (B2) o negocios (B1).",
      list: [
        "Asistencia para llenar el formulario DS-160",
        "Creación de perfil en el portal del consulado",
        "Preparación para la entrevista consular",
        "Consejos personalizados según tu situación",
      ],
    },
    canada: {
      title: "Visa para Canadá",
      desc: "Ofrecemos apoyo completo en la solicitud de la visa de visitante para Canadá (TRV).",
      list: [
        "Registro en el portal IRCC",
        "Revisión de documentos financieros y personales",
        "Redacción de carta de propósito",
        "Preparación para biométricos si aplica",
      ],
    },
    schengen: {
      title: "Visa Schengen (Europa)",
      desc: "Te ayudamos a solicitar tu visa Schengen para turismo o negocios con asesoría personalizada.",
      list: [
        "Elección del país consular adecuado",
        "Cita en el centro de visado (Ej: BLS, VFS)",
        "Revisión de seguro de viaje y reservas",
        "Carta de invitación o alojamiento (si aplica)",
      ],
    },
  },

  en: {
    title: "Visa Assistance",
    back: "Back to Home",
    cta: "Request Your Consultation Now",
    usa: {
      title: "United States Visa",
      desc: "We guide you step by step through the process of applying for the B1/B2 non-immigrant visa (tourism or business).",
      list: [
        "DS-160 form assistance",
        "Consulate profile creation",
        "Interview preparation",
        "Tailored advice based on your case",
      ],
    },
    canada: {
      title: "Canada Visa",
      desc: "We offer full support with your application for the Canadian Temporary Resident Visa (TRV).",
      list: [
        "IRCC portal registration",
        "Review of personal and financial documents",
        "Purpose letter guidance",
        "Biometrics prep if needed",
      ],
    },
    schengen: {
      title: "Schengen Visa (Europe)",
      desc: "Let us help you apply for your Schengen visa for tourism or business with personalized support.",
      list: [
        "Help choosing the right consulate",
        "Appointment at visa center (e.g. BLS, VFS)",
        "Travel insurance and reservation check",
        "Invitation or accommodation support",
      ],
    },
  },

  fr: {
    title: "Assistance pour les Visas",
    back: "Retour à l’accueil",
    cta: "Demandez votre consultation",
    usa: {
      title: "Visa pour les États-Unis",
      desc: "Nous vous accompagnons dans la demande de visa B1/B2 pour tourisme ou affaires.",
      list: [
        "Aide pour remplir le formulaire DS-160",
        "Création de profil sur le portail du consulat",
        "Préparation à l’entretien",
        "Conseils personnalisés selon votre profil",
      ],
    },
    canada: {
      title: "Visa pour le Canada",
      desc: "Nous vous assistons pour obtenir un visa de résident temporaire canadien (TRV).",
      list: [
        "Inscription au portail IRCC",
        "Vérification de vos documents",
        "Lettre de motivation personnalisée",
        "Préparation aux données biométriques",
      ],
    },
    schengen: {
      title: "Visa Schengen (Europe)",
      desc: "Nous vous aidons à obtenir votre visa Schengen avec un accompagnement sur mesure.",
      list: [
        "Choix du pays consulaire",
        "Rendez-vous au centre (BLS, VFS, etc.)",
        "Assurance et réservations validées",
        "Lettre d'invitation ou hébergement",
      ],
    },
  },
};

export default function VisaDetails() {
  const { language } = useContext(LanguageContext);
  const t = visaTexts[language];

  const flags = {
    usa: "🇺🇸",
    canada: "🇨🇦",
    schengen: "🇪🇺",
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Botón Volver */}
        <Link to="/" className="flex items-center text-primary mb-8 hover:underline">
          <FaArrowLeft className="mr-2" />
          {t.back}
        </Link>

        {/* Título Principal */}
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">
          {t.title}
        </h1>

        {/* Secciones por tipo de visa */}
        {["usa", "canada", "schengen"].map((key, index) => (
          <div
            key={key}
            className="mb-16 bg-gray-50 p-6 rounded-xl shadow-md"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
              <span>{flags[key]}</span>
              {t[key].title}
            </h2>
            <p className="text-gray-700 mb-4">{t[key].desc}</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              {t[key].list.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* CTA Final */}
        <div className="text-center mt-12">
          <Link
            to="/#contacto"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-accent transition"
          >
            {t.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
