import React, { useRef, useContext } from "react";
import emailjs from "emailjs-com";
import { LanguageContext } from "../context/LanguageContext";
import translations from "../i18n";

export default function QuoteForm() {
  const form = useRef();
  const { language } = useContext(LanguageContext);
  const t = translations.quote[language];

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "tu_service_id",
      "tu_template_id",
      form.current,
      "tu_public_key"
    ).then(
      (result) => {
        console.log(result.text);
        alert("¡Solicitud enviada con éxito!");
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
        alert("Hubo un error al enviar el mensaje.");
      }
    );
  };

  return (
<section id="contacto" className="py-20 px-8 bg-gray-100" data-aos="fade-up">
<h2 className="text-3xl font-bold mb-12 text-center">{t.title}</h2>
      <form ref={form} onSubmit={sendEmail} className="max-w-2xl mx-auto grid gap-6">
        <input type="text" name="nombre" placeholder={t.placeholders.name} className="p-4 rounded-lg border border-gray-300" required />
        <input type="email" name="email" placeholder={t.placeholders.email} className="p-4 rounded-lg border border-gray-300" required />
        <input type="text" name="destino" placeholder={t.placeholders.destination} className="p-4 rounded-lg border border-gray-300" required />
        <input type="date" name="fecha" placeholder={t.placeholders.date} className="p-4 rounded-lg border border-gray-300" required />
        <input type="number" name="pasajeros" placeholder={t.placeholders.passengers} className="p-4 rounded-lg border border-gray-300" required />
        <textarea name="mensaje" placeholder={t.placeholders.notes} className="p-4 rounded-lg border border-gray-300"></textarea>
        <button type="submit" className="bg-primary hover:bg-accent text-white py-3 rounded-lg text-lg transition duration-300">
          {t.button}
        </button>
      </form>
    </section>
  );
}
