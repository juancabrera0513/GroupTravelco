import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const visaTexts = {
  usa: {
    flag: "🇺🇸",
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
    flag: "🇨🇦",
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
    flag: "🇪🇺",
    title: "Schengen Visa (Europe)",
    desc: "Let us help you apply for your Schengen visa for tourism or business with personalized support.",
    list: [
      "Help choosing the right consulate",
      "Appointment at visa center (e.g. BLS, VFS)",
      "Travel insurance and reservation check",
      "Invitation or accommodation support",
    ],
  },
};

export default function VisaDetails() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link to="/" className="flex items-center text-[#2b2973] mb-8 hover:underline">
          <FaArrowLeft className="mr-2" />
          Back to Home
        </Link>

        {/* Main Title */}
        <h1 className="text-4xl font-bold text-[#2b2973] mb-12 text-center">
          Visa Assistance
        </h1>

        {/* Visa Types */}
        {Object.keys(visaTexts).map((key, index) => (
          <div
            key={key}
            className="mb-16 bg-gray-50 p-6 rounded-xl shadow-md"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <h2 className="text-2xl font-bold text-[#2b2973] mb-4 flex items-center gap-2">
              <span>{visaTexts[key].flag}</span>
              {visaTexts[key].title}
            </h2>
            <p className="text-gray-700 mb-4">{visaTexts[key].desc}</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              {visaTexts[key].list.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-[#2b2973] text-white px-6 py-3 rounded-lg hover:bg-accent transition"
          >
            Request Your Consultation Now
          </a>
        </div>
      </div>
    </section>
  );
}
