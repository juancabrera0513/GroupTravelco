import React, { useState } from "react";

const faqSections = {
  bookings: [
    {
      q: "Can I book a trip without paying in full upfront?",
      a: "Yes, many of our packages allow deposits with final payment due later. We’ll explain payment options before booking."
    },
    {
      q: "Do you offer group discounts?",
      a: "Yes, group rates are available for flights, hotels, and tours. The bigger the group, the bigger the savings."
    },
    {
      q: "Can you arrange travel from different U.S. cities for the same group?",
      a: "Absolutely. We can coordinate flights and arrival times for travelers departing from multiple cities."
    },
    {
      q: "Do you work with all-inclusive resorts?",
      a: "Yes, we specialize in all-inclusive packages in Mexico and the Caribbean, including food, drinks, and entertainment."
    },
    {
      q: "Can you book last-minute trips?",
      a: "Yes, depending on availability. Contact us as soon as possible so we can secure the best rates."
    },
  ],
  insurance: [
    {
      q: "Should I get travel insurance for my trip?",
      a: "We highly recommend it. Travel insurance can protect you against trip cancellations, medical emergencies, and lost luggage."
    },
    {
      q: "Does travel insurance cover pre-existing conditions?",
      a: "Some plans do if purchased within a certain time frame after booking. We’ll help you choose the right coverage."
    },
    {
      q: "Is travel insurance required for cruises?",
      a: "While not mandatory, many cruise lines strongly recommend it, and it can save you thousands in case of emergencies."
    },
    {
      q: "Does travel insurance cover weather-related cancellations?",
      a: "Yes, most plans include coverage for severe weather events that impact your trip."
    },
    {
      q: "How much does travel insurance cost?",
      a: "Usually between 4% and 10% of your total trip cost, depending on coverage and your age."
    },
  ],
};

const tabLabels = [
  { key: "bookings", label: "Bookings" },
  { key: "insurance", label: "Travel Insurance" },
];

export default function FAQPage() {
  const [tab, setTab] = useState("bookings");

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#2b2973] text-center mb-12">
          Frequently Asked Questions
        </h1>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {tabLabels.map((item) => (
            <button
              key={item.key}
              onClick={() => setTab(item.key)}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                tab === item.key
                  ? "bg-[#2b2973] text-white"
                  : "bg-white text-[#2b2973] border border-[#2b2973]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Questions */}
        <div className="space-y-6">
          {faqSections[tab].map((item, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-[#2b2973] mb-2">
                {item.q}
              </h3>
              <p className="text-gray-700 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-[#2b2973] text-white px-6 py-3 rounded-lg hover:bg-accent transition"
          >
            Have another question? Contact us here
          </a>
        </div>
      </div>
    </section>
  );
}
