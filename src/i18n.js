import { FaUserTie, FaDollarSign, FaHeadset } from "react-icons/fa";

const translations = {
  hero: {
    es: {
      heading: "Puerta Global",
      subheading: "Tu puerta hacia nuevas oportunidades",
      cta: "Agenda tu Consulta Gratuita",
    },
    en: {
      heading: "Puerta Global",
      subheading: "Your gateway to new opportunities",
      cta: "Schedule Your Free Consultation",
    },
    fr: {
      heading: "Puerta Global",
      subheading: "Votre porte vers de nouvelles opportunités",
      cta: "Planifiez votre consultation gratuite",
    },
  },

  about: {
    es: {
      title: "Sobre Nosotros",
      description:
        "En Puerta Global, ayudamos a las personas a cumplir sus sueños de viajar y establecerse en el extranjero. Asesoría de visas y servicios de viaje personalizados.",
    },
    en: {
      title: "About Us",
      description:
        "At Puerta Global, we help people achieve their dreams of traveling and settling abroad. We provide visa assistance and personalized travel services.",
    },
    fr: {
      title: "À Propos de Nous",
      description:
        "Chez Puerta Global, nous aidons les gens à réaliser leurs rêves de voyager et de s'installer à l'étranger. Nous offrons des services personnalisés d'assistance visa et de voyage.",
    },
  },

  services: {
    es: {
      title: "Nuestros Servicios",
      moreLink: "Ver más →",
      list: [
        {
          title: "Asesoría de Visas",
          description: "Te acompañamos en todo el proceso de solicitud de visa para turismo, estudio o trabajo.",
          link: "/visas",
        },
        {
          title: "Reservaciones de Viaje",
          description: "Reserva vuelos y hoteles al mejor precio para tu viaje soñado.",
        },
        {
          title: "Seguro de Viaje",
          description: "Protege tu aventura con nuestros seguros de viaje confiables y asequibles.",
        },
      ],
    },
    en: {
      title: "Our Services",
      moreLink: "Learn more →",
      list: [
        {
          title: "Visa Assistance",
          description: "We guide you through the entire visa application process for tourism, study, or work.",
          link: "/visas",
        },
        {
          title: "Travel Bookings",
          description: "Book flights and hotels at the best prices for your dream trip.",
        },
        {
          title: "Travel Insurance",
          description: "Protect your journey with our reliable and affordable travel insurance options.",
        },
      ],
    },
    fr: {
      title: "Nos Services",
      moreLink: "En savoir plus →",
      list: [
        {
          title: "Assistance Visa",
          description: "Nous vous guidons à travers l'ensemble du processus de demande de visa pour le tourisme, les études ou le travail.",
          link: "/visas",
        },
        {
          title: "Réservations de Voyage",
          description: "Réservez des vols et des hôtels aux meilleurs prix pour votre voyage de rêve.",
        },
        {
          title: "Assurance Voyage",
          description: "Protégez votre voyage avec nos assurances voyage fiables et abordables.",
        },
      ],
    },
  },

  quote: {
    es: {
      title: "Cotiza tu Viaje con Nosotros",
      placeholders: {
        name: "Nombre Completo",
        email: "Correo Electrónico",
        destination: "Destino Deseado",
        date: "Fecha de Salida",
        passengers: "Número de Pasajeros",
        notes: "Notas Adicionales",
      },
      button: "Enviar Solicitud",
    },
    en: {
      title: "Get a Quote for Your Trip",
      placeholders: {
        name: "Full Name",
        email: "Email",
        destination: "Desired Destination",
        date: "Departure Date",
        passengers: "Number of Passengers",
        notes: "Additional Notes",
      },
      button: "Submit Request",
    },
    fr: {
      title: "Demandez un Devis pour Votre Voyage",
      placeholders: {
        name: "Nom Complet",
        email: "E-mail",
        destination: "Destination Souhaitée",
        date: "Date de Départ",
        passengers: "Nombre de Passagers",
        notes: "Notes Supplémentaires",
      },
      button: "Envoyer la Demande",
    },
  },

  footer: {
    es: "© 2025 Puerta Global. Todos los derechos reservados.",
    en: "© 2025 Puerta Global. All rights reserved.",
    fr: "© 2025 Puerta Global. Tous droits réservés.",
  },

  benefits: {
    es: {
      title: "¿Por qué elegir Puerta Global?",
      items: [
        { icon: <FaUserTie />, title: "Atención Personalizada", description: "Te acompañamos paso a paso en todo el proceso." },
        { icon: <FaDollarSign />, title: "Precios Competitivos", description: "Ofrecemos tarifas justas y accesibles para todos los servicios." },
        { icon: <FaHeadset />, title: "Soporte 24/7", description: "Estamos disponibles cuando más nos necesites." },
      ],
    },
    en: {
      title: "Why Choose Puerta Global?",
      items: [
        { icon: <FaUserTie />, title: "Personalized Attention", description: "We guide you step-by-step through the entire process." },
        { icon: <FaDollarSign />, title: "Competitive Prices", description: "We offer fair and accessible pricing for all services." },
        { icon: <FaHeadset />, title: "24/7 Support", description: "We're available whenever you need us." },
      ],
    },
    fr: {
      title: "Pourquoi Choisir Puerta Global?",
      items: [
        { icon: <FaUserTie />, title: "Attention Personnalisée", description: "Nous vous accompagnons étape par étape dans tout le processus." },
        { icon: <FaDollarSign />, title: "Prix Compétitifs", description: "Nous proposons des tarifs justes et accessibles pour tous les services." },
        { icon: <FaHeadset />, title: "Assistance 24/7", description: "Nous sommes disponibles chaque fois que vous avez besoin de nous." },
      ],
    },
  },
};

export default translations;
