import React from "react";
import { FaPassport, FaPlaneDeparture, FaGlobeAmericas } from "react-icons/fa";

export default function ServicesSection() {
  const items = [
    {
      title: "Services",
      icon: FaPassport,
      desc: (
        <>
          From all-inclusive group getaways to fully customized individual travel planning, we handle every detail.
          <br />
          Whether you're organizing a school trip, corporate retreat, celebration vacation, or a solo escape—we make travel easy, exciting, and completely stress-free.
        </>
      ),
    },
    {
      title: "Expertise",
      icon: FaPlaneDeparture,
      desc: (
        <>
          With over 10 years of experience and a Certified Travel Advisor (CTA) designation, we specialize in curated travel planning that’s as seamless as it is memorable.
          <br />
          We bring deep industry knowledge, destination insight, and personal service to every itinerary.
        </>
      ),
    },
    {
      title: "Destinations",
      icon: FaGlobeAmericas,
      desc: (
        <>
          Our travel sweet spot? <b>Mexico and the Caribbean</b>.
          <br />
          From Cancun and Cabo to the Dominican Republic and Jamaica, we create trips that combine stunning beaches, cultural richness, and all-inclusive ease.
          <br />
          <span className="block mt-2">Want something different? We plan global getaways too!</span>
        </>
      ),
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-8 bg-gray-50 scroll-mt-20"
      data-aos="fade-up"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="services-heading"
          className="text-4xl font-bold mb-4 text-center text-[#2b2973] animate-fadeIn"
        >
          What We Do, What We Know, and Where We’ll Take You
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-center text-gray-700 text-lg animate-fadeIn delay-100">
          Explore our group travel services, travel planning expertise, and top destinations like Mexico and the Caribbean—designed for unforgettable experiences.
        </p>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {items.map(({ title, icon: Icon, desc }, idx) => (
            <article
              key={idx}
              className="group flex flex-col h-full bg-white rounded-2xl border border-gray-200 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              data-aos="zoom-in"
              data-aos-delay={`${idx * 150}`}
            >
              <div className="p-10 flex-1 flex flex-col items-center text-center">
                {/* Icon badge */}
                <div className="w-16 h-16 rounded-full bg-[#2b2973]/10 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                  <Icon className="text-3xl text-[#2b2973]" />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-[#2b2973]">
                  {title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>

              {/* Color accent bottom bar */}
              <div className="h-1 bg-gradient-to-r from-[#2b2973] via-[#2b2973] to-[#F2BE22] rounded-b-2xl" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
