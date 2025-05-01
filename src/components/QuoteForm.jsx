import React, { useRef, useContext, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { LanguageContext } from "../context/LanguageContext";

export default function QuoteForm() {
  const form = useRef();
  const { language } = useContext(LanguageContext);
  const [activeTab, setActiveTab] = useState("hotel");
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [nights, setNights] = useState("");

  useEffect(() => {
    if (arrivalDate && departureDate) {
      const arrival = new Date(arrivalDate);
      const departure = new Date(departureDate);
      const diffTime = departure - arrival;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setNights(diffDays >= 0 ? diffDays : "");
    }
  }, [arrivalDate, departureDate]);

  const labels = {
    es: {
      title: "Cotiza tu Viaje con Nosotros",
      tabs: ["Hotel", "Tour", "Paquete"],
      destination: "Destino, hotel o punto de interés",
      arrival: "Fecha de llegada",
      nights: "Cantidad de noches",
      departure: "Fecha de salida",
      rooms: "Habitaciones",
      adults: "Adultos",
      children: "Niños",
      country: "País de residencia",
      notes: "Notas adicionales",
      activities: "Actividades o lugares que deseas incluir",
      duration: "Duración del tour (días)",
      includeFlight: "¿Deseas incluir vuelos?",
      includeHotel: "¿Deseas incluir hotel?",
      includeInsurance: "¿Deseas incluir seguro de viaje?",
      button: "Enviar Solicitud",
    },
    en: {
      title: "Get a Quote for Your Trip",
      tabs: ["Hotel", "Tour", "Package"],
      destination: "Destination, hotel, or point of interest",
      arrival: "Arrival date",
      nights: "Number of nights",
      departure: "Departure date",
      rooms: "Rooms",
      adults: "Adults",
      children: "Children",
      country: "Country of residence",
      notes: "Additional notes",
      activities: "Activities or places you want to include",
      duration: "Tour duration (days)",
      includeFlight: "Do you want to include flights?",
      includeHotel: "Do you want to include a hotel?",
      includeInsurance: "Do you want to include travel insurance?",
      button: "Submit Request",
    },
    fr: {
      title: "Demandez un Devis pour Votre Voyage",
      tabs: ["Hôtel", "Tour", "Forfait"],
      destination: "Destination, hôtel ou point d'intérêt",
      arrival: "Date d'arrivée",
      nights: "Nombre de nuits",
      departure: "Date de départ",
      rooms: "Chambres",
      adults: "Adultes",
      children: "Enfants",
      country: "Pays de résidence",
      notes: "Remarques supplémentaires",
      activities: "Activités ou lieux à inclure",
      duration: "Durée du tour (jours)",
      includeFlight: "Souhaitez-vous inclure des vols ?",
      includeHotel: "Souhaitez-vous inclure un hôtel ?",
      includeInsurance: "Souhaitez-vous inclure une assurance voyage ?",
      button: "Envoyer la Demande",
    },
  };

  const t = labels[language];
  const sheetURL = "https://sheet.best/api/sheets/TU_ID_AQUI";

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const formObject = Object.fromEntries(formData.entries());

    formObject.incluir_vuelo = formData.get("incluir_vuelo") ? "Sí" : "No";
    formObject.incluir_hotel = formData.get("incluir_hotel") ? "Sí" : "No";
    formObject.incluir_seguro = formData.get("incluir_seguro") ? "Sí" : "No";

    formObject.fecha = new Date().toLocaleDateString();
    formObject.tipo = activeTab;
    formObject.noches = nights;

    emailjs
      .send("tu_service_id", "tu_template_id", formObject, "tu_public_key")
      .then(() => console.log("Correo enviado correctamente"))
      .catch(() => alert("Error al enviar el email."));

    fetch(sheetURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formObject),
    })
      .then(() => {
        alert("Cotización enviada con éxito.");
        form.current.reset();
        setArrivalDate("");
        setDepartureDate("");
        setNights("");
      })
      .catch(() => alert("Error al guardar en Google Sheets."));
  };

  return (
    <section id="contacto" className="py-20 px-4 bg-gray-100" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-8 text-center">{t.title}</h2>

      <div className="flex justify-center gap-4 mb-10">
        {["hotel", "tour", "paquete"].map((key, index) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-5 py-2 rounded-full font-semibold transition ${
              activeTab === key
                ? "bg-primary text-white"
                : "bg-white text-primary border border-primary"
            }`}
          >
            {t.tabs[index]}
          </button>
        ))}
      </div>

      <form ref={form} onSubmit={sendEmail} className="max-w-3xl mx-auto grid gap-6">
        <input type="text" name="destino" placeholder={t.destination} className="p-4 rounded-lg border border-gray-300" required />

        {activeTab === "hotel" && (
          <>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="date"
                name="llegada"
                className="p-4 rounded-lg border border-gray-300"
                required
                onChange={(e) => setArrivalDate(e.target.value)}
              />
              <input
                type="text"
                name="noches"
                value={nights}
                placeholder={t.nights}
                className="p-4 rounded-lg border border-gray-100 bg-gray-200"
                readOnly
              />
            </div>
            <input
              type="date"
              name="salida"
              className="p-4 rounded-lg border border-gray-300"
              required
              onChange={(e) => setDepartureDate(e.target.value)}
              min={arrivalDate}
            />
            <div className="grid md:grid-cols-2 gap-4">
              <input type="number" name="habitaciones" placeholder={t.rooms} className="p-4 rounded-lg border border-gray-300" min="1" required />
              <input type="text" name="pais" placeholder={t.country} className="p-4 rounded-lg border border-gray-300" required />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="number" name="adultos" placeholder={t.adults} className="p-4 rounded-lg border border-gray-300" min="1" required />
              <input type="number" name="ninos" placeholder={t.children} className="p-4 rounded-lg border border-gray-300" min="0" />
            </div>
          </>
        )}

        {activeTab === "tour" && (
          <>
            <input type="text" name="actividades" placeholder={t.activities} className="p-4 rounded-lg border border-gray-300" />
            <input type="number" name="duracion" placeholder={t.duration} className="p-4 rounded-lg border border-gray-300" min="1" required />
            <input type="text" name="pais" placeholder={t.country} className="p-4 rounded-lg border border-gray-300" required />
            <div className="grid md:grid-cols-2 gap-4">
              <input type="number" name="adultos" placeholder={t.adults} className="p-4 rounded-lg border border-gray-300" min="1" required />
              <input type="number" name="ninos" placeholder={t.children} className="p-4 rounded-lg border border-gray-300" min="0" />
            </div>
          </>
        )}

        {activeTab === "paquete" && (
          <>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="date" name="llegada" className="p-4 rounded-lg border border-gray-300" required />
              <input type="date" name="salida" className="p-4 rounded-lg border border-gray-300" required />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" name="incluir_vuelo" className="accent-primary" />
                {t.includeFlight}
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" name="incluir_hotel" className="accent-primary" />
                {t.includeHotel}
              </label>
            </div>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="incluir_seguro" className="accent-primary" />
              {t.includeInsurance}
            </label>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="number" name="adultos" placeholder={t.adults} className="p-4 rounded-lg border border-gray-300" min="1" required />
              <input type="number" name="ninos" placeholder={t.children} className="p-4 rounded-lg border border-gray-300" min="0" />
            </div>
            <input type="text" name="pais" placeholder={t.country} className="p-4 rounded-lg border border-gray-300" required />
          </>
        )}

        <textarea name="notas" placeholder={t.notes} className="p-4 rounded-lg border border-gray-300" rows="4"></textarea>
        <button type="submit" className="bg-primary hover:bg-accent text-white py-3 rounded-lg text-lg transition duration-300">
          {t.button}
        </button>
      </form>
    </section>
  );
}
