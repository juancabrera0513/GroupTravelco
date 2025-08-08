import React from "react";

export default function AboutSection() {
  return (
    <section
      className="py-20 px-8 bg-gray-100"
      id="about"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/images/travelAgent.jpg"
            alt="Group Travel Expert"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>

        {/* Text */}
        <div className="text-lg text-gray-800 leading-relaxed">
          <h2 className="text-3xl font-bold mb-6 text-[#2b2973]">
            Meet Your Group Travel Experts
          </h2>
          <p>
            <b>Group Travel Co</b> is your trusted team for group adventures,
            special celebrations, and custom journeys across the globe.
          </p>
          <br />
          <p>
            With over a decade of experience, we specialize in planning
            stress-free, unforgettable trips—whether you’re traveling with
            family, friends, or organizing a corporate group.
          </p>
          <br />
          <p>
            From all-inclusive getaways to Mexico and the Caribbean to
            personalized travel experiences worldwide, we handle every
            detail—so you can focus on what matters most.
          </p>
          <br />
          <p className="italic">
            Based in St. Louis, MO (63123), serving travelers across the Midwest
            and beyond.
          </p>
          <span className="font-semibold block mt-4">
            Explore. Connect. Repeat.
          </span>
        </div>
      </div>
    </section>
  );
}
