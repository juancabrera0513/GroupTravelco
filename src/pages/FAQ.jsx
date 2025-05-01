import React, { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { Link } from "react-router-dom";

const faqData = {
  es: {
    title: "Preguntas Frecuentes",
    tabs: ["Visas", "Reservas", "Seguros de Viaje"],
    cta: "¿Tienes otra pregunta? Contáctanos aquí",
    sections: {
      visas: [
        { q: "¿Qué incluye el servicio de asesoría de visa?", a: "Te apoyamos en cada etapa: formulario, perfil consular, revisión de documentos, preparación para la entrevista y seguimiento." },
        { q: "¿Cómo sé si califico para una visa?", a: "Durante la consulta evaluamos tu perfil, historial, documentos y objetivos para darte una recomendación honesta y personalizada." },
        { q: "¿Qué pasa si mi visa fue rechazada anteriormente?", a: "Revisamos el motivo del rechazo, analizamos tu documentación anterior y te ayudamos a reforzar una nueva solicitud." },
        { q: "¿Cuánto cuesta el proceso completo de visa?", a: "Nuestra asesoría tiene un precio fijo, pero los pagos consulares y servicios externos como biométricos o traducciones se pagan por separado." },
        { q: "¿Puedo solicitar una visa si no tengo empleo actualmente?", a: "Es posible, pero dependerá de tu situación económica, vínculos familiares, historial de viajes y propósito declarado." },
        { q: "¿Cuánto tarda en salir una visa?", a: "Varía según el país y la temporada. Te ayudamos a programar todo lo antes posible y a monitorear el estatus de tu cita." },
        { q: "¿Puedo hacer todo el proceso desde otro país?", a: "Sí, siempre que puedas asistir al consulado correspondiente al país donde te encuentras legalmente." },
      ],
      reservas: [
        { q: "¿Puedo reservar un vuelo o hotel sin tarjeta de crédito?", a: "En algunos casos sí, pero dependerá del proveedor. Nosotros te ayudamos a encontrar opciones que se adapten a tu situación." },
        { q: "¿Puedo pagar mi reserva en efectivo o por transferencia?", a: "Sí. Si deseas que nosotros gestionemos la reserva, podemos ofrecer métodos alternativos como transferencia local o pagos digitales." },
        { q: "¿Qué pasa si quiero cambiar o cancelar mi reserva?", a: "Te informamos previamente las condiciones de cada reserva. Si necesitas cambiarla, te ayudamos a gestionarlo según las políticas del proveedor." },
        { q: "¿La reserva incluye traslados al aeropuerto o desayunos?", a: "Depende del hotel o paquete. Te ayudamos a seleccionar las opciones con esos servicios incluidos si los necesitas." },
        { q: "¿Pueden buscar vuelos con equipaje incluido o escalas cortas?", a: "Sí, personalizamos la búsqueda para adaptarla a tus preferencias: maletas, horarios, escalas, aerolíneas, etc." },
        { q: "¿La reserva sirve para presentar como prueba en la solicitud de visa?", a: "Sí, podemos ayudarte a generar reservas válidas para ese propósito sin necesidad de pago anticipado completo (en muchos casos)." },
      ],
      seguros: [
        { q: "¿Es obligatorio tener seguro de viaje para obtener una visa?", a: "En muchos países sí, especialmente en Europa (zona Schengen). Te ayudamos a conseguir el seguro adecuado para tu solicitud." },
        { q: "¿Qué cubre un seguro de viaje?", a: "Coberturas médicas, accidentes, cancelación del viaje, pérdida de equipaje, asistencia legal o médica en el extranjero, entre otros." },
        { q: "¿Puedo contratar el seguro sin tener la visa aprobada aún?", a: "Sí, incluso hay seguros que permiten reembolso si tu visa es rechazada. Nosotros te orientamos sobre las mejores opciones." },
        { q: "¿El seguro incluye cobertura por COVID-19?", a: "Sí, la mayoría de los planes actuales lo incluyen. Siempre validamos esa cobertura antes de emitir tu póliza." },
        { q: "¿Cuánto cuesta el seguro de viaje?", a: "El costo depende del destino, duración del viaje y tu edad. Te cotizamos varias opciones para que elijas la más conveniente." },
      ],
    },
  },
  en: {
    title: "Frequently Asked Questions",
    tabs: ["Visas", "Bookings", "Travel Insurance"],
    cta: "Have another question? Contact us here",
    sections: {
      visas: [
        { q: "What does the visa assistance service include?", a: "We support you in every step: form filling, consular profile, document review, interview preparation, and follow-up." },
        { q: "How do I know if I qualify for a visa?", a: "During the consultation, we evaluate your profile, history, documents, and goals to give you an honest and personalized recommendation." },
        { q: "What if my visa was previously denied?", a: "We review the reason for denial, analyze your past documentation, and help you strengthen a new application." },
        { q: "How much does the full visa process cost?", a: "Our assistance has a fixed price, but consular fees and external services like biometrics or translations are paid separately." },
        { q: "Can I apply for a visa if I'm currently unemployed?", a: "It’s possible, but it depends on your financial situation, family ties, travel history, and declared purpose." },
        { q: "How long does it take to get a visa?", a: "It varies by country and season. We help you schedule everything quickly and track your appointment status." },
        { q: "Can I do the whole process from abroad?", a: "Yes, as long as you can attend the consulate in the country where you legally reside." },
      ],
      reservas: [
        { q: "Can I book a flight or hotel without a credit card?", a: "In some cases yes, depending on the provider. We help you find options that suit your situation." },
        { q: "Can I pay for my booking in cash or by transfer?", a: "Yes. If we manage the booking, we offer alternatives like local bank transfer or digital payments." },
        { q: "What if I want to change or cancel my booking?", a: "We inform you of the conditions before booking. If changes are needed, we help manage them with the provider." },
        { q: "Does the booking include airport transfers or breakfast?", a: "It depends on the hotel or package. We help you choose options that include those services if needed." },
        { q: "Can you find flights with luggage included or short layovers?", a: "Yes, we personalize the search based on your preferences: baggage, schedules, stops, airlines, etc." },
        { q: "Is the booking valid for visa applications?", a: "Yes, we can help you generate valid reservations for visa applications without full prepayment (in many cases)." },
      ],
      seguros: [
        { q: "Is travel insurance required to get a visa?", a: "In many countries yes, especially Europe (Schengen area). We help you get the right insurance for your visa application." },
        { q: "What does travel insurance cover?", a: "Medical care, accidents, trip cancellation, lost luggage, legal and medical assistance abroad, among others." },
        { q: "Can I get insurance even if I don’t have the visa yet?", a: "Yes. Some plans offer a refund if your visa is denied. We help you choose the best option." },
        { q: "Does the insurance cover COVID-19?", a: "Yes, most plans now include it. We always check that coverage before issuing your policy." },
        { q: "How much does travel insurance cost?", a: "Cost depends on destination, trip length, and age. We give you multiple quotes to find the best fit." },
      ],
    },
  },
  fr: {
    title: "Questions Fréquentes",
    tabs: ["Visas", "Réservations", "Assurance Voyage"],
    cta: "Vous avez une autre question ? Contactez-nous ici",
    sections: {
      visas: [
        { q: "Que comprend le service d'assistance visa ?", a: "Nous vous accompagnons à chaque étape : formulaire, profil consulaire, vérification des documents, préparation à l'entretien et suivi." },
        { q: "Comment savoir si je suis admissible à un visa ?", a: "Lors de la consultation, nous évaluons votre profil, vos antécédents, vos documents et votre objectif pour vous donner une recommandation personnalisée." },
        { q: "Et si mon visa a déjà été refusé ?", a: "Nous analysons les raisons du refus précédent et vous aidons à renforcer votre nouvelle demande." },
        { q: "Quel est le coût total du processus de visa ?", a: "Notre assistance a un prix fixe, mais les frais consulaires et services externes (biométrie, traductions) sont payés séparément." },
        { q: "Puis-je demander un visa sans emploi actuel ?", a: "C’est possible, mais cela dépendra de votre situation financière, de vos attaches, de votre historique de voyage et de l’objectif déclaré." },
        { q: "Combien de temps faut-il pour obtenir un visa ?", a: "Cela varie selon le pays et la saison. Nous vous aidons à planifier rapidement et à suivre le statut de votre rendez-vous." },
        { q: "Puis-je faire toute la procédure depuis l'étranger ?", a: "Oui, tant que vous pouvez vous présenter au consulat compétent dans le pays où vous résidez légalement." },
      ],
      reservas: [
        { q: "Puis-je réserver un vol ou un hôtel sans carte bancaire ?", a: "Dans certains cas, oui, selon le fournisseur. Nous vous aidons à trouver des options adaptées à votre situation." },
        { q: "Puis-je payer ma réservation en espèces ou par virement ?", a: "Oui. Si nous gérons la réservation, nous pouvons proposer des options comme le virement local ou le paiement numérique." },
        { q: "Que se passe-t-il si je veux modifier ou annuler ma réservation ?", a: "Nous vous informons des conditions avant la réservation. En cas de modification, nous vous aidons selon la politique du prestataire." },
        { q: "La réservation comprend-elle les transferts ou le petit-déjeuner ?", a: "Cela dépend de l’hôtel ou du forfait. Nous vous aidons à choisir des options incluant ces services si besoin." },
        { q: "Pouvez-vous trouver des vols avec bagages inclus ou des escales courtes ?", a: "Oui, nous adaptons la recherche selon vos préférences : bagages, horaires, escales, compagnies, etc." },
        { q: "La réservation est-elle valable pour une demande de visa ?", a: "Oui, nous pouvons vous fournir des réservations valables à des fins de demande de visa, souvent sans paiement complet anticipé." },
      ],
      seguros: [
        { q: "L'assurance voyage est-elle obligatoire pour obtenir un visa ?", a: "Dans de nombreux pays, oui – surtout en Europe (espace Schengen). Nous vous aidons à choisir une assurance conforme." },
        { q: "Que couvre une assurance voyage ?", a: "Soins médicaux, accidents, annulation de voyage, perte de bagages, assistance légale ou médicale à l'étranger, etc." },
        { q: "Puis-je souscrire une assurance sans avoir encore le visa ?", a: "Oui. Certaines assurances permettent un remboursement si le visa est refusé. Nous vous guidons vers la meilleure option." },
        { q: "L'assurance couvre-t-elle le COVID-19 ?", a: "Oui, la plupart des polices actuelles le couvrent. Nous vérifions toujours cette couverture avant d’émettre votre police." },
        { q: "Combien coûte une assurance voyage ?", a: "Le prix dépend de la destination, de la durée et de l'âge. Nous vous proposons plusieurs devis adaptés à votre profil." },
      ],
    },
  },
};

export default function FAQPage() {
  const { language } = useContext(LanguageContext);
  const t = faqData[language];
  const [tab, setTab] = useState("visas");

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-primary text-center mb-12">{t.title}</h1>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {Object.keys(t.sections).map((key, index) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                tab === key
                  ? "bg-primary text-white"
                  : "bg-white text-primary border border-primary"
              }`}
            >
              {t.tabs[index]}
            </button>
          ))}
        </div>

        {/* Questions */}
        <div className="space-y-6">
          {t.sections[tab].map((item, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-primary mb-2">{item.q}</h3>
              <p className="text-gray-700 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
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
