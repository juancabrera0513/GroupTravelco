import React from "react";
import { FaUserTie, FaDollarSign, FaHeadset } from "react-icons/fa";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <FaUserTie />,
      title: "Group Travel Experts",
      description:
        "Professional planning for group, family, or corporate travel.",
    },
    {
      icon: <FaDollarSign />,
      title: "Exclusive Group Rates",
      description:
        "Special negotiated rates and custom options to maximize your budget.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Personalized Support",
      description:
        "Dedicated assistance before, during, and after your trip—stress-free!",
    },
  ];

  return (
    <section className="py-20 px-8 bg-white" data-aos="fade-up">
      <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: "#2b2973" }}>
        Why Choose Group Travel Co?
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="group bg-gray-100 p-8 shadow-md rounded-2xl text-center transition duration-300 hover:bg-[#2b2973] hover:text-white cursor-pointer hover:shadow-2xl"
            data-aos="zoom-in"
            data-aos-delay={`${index * 150}`}
          >
            <div className="flex justify-center mb-4">
              <span className="text-5xl transition-colors duration-200 text-[#2b2973] group-hover:text-white">
                {benefit.icon}
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-2 transition-colors duration-200 text-[#2b2973] group-hover:text-white">
              {benefit.title}
            </h3>
            <p className="text-gray-700 transition-colors duration-200 group-hover:text-gray-100">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
