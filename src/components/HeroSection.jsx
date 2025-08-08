import React from "react";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      id="home"
    >
      <video
        className="absolute w-full h-full object-cover"
        src="/videos/hero.webm" 
        autoPlay
        loop
        muted
        playsInline
        poster="/hero-fallback.jpg"
      />
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full w-full px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg animate-fadeIn">
          Explore. Connect. Repeat.
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white font-medium animate-fadeIn delay-100">
          Fully planned, all-inclusive group getaways to Mexico and the Caribbean—<br />
          made simple, meaningful, and unforgettable.
        </p>
        <a
          href="#contact"
          className="bg-accent hover:bg-primary text-primary hover:text-white px-8 py-4 rounded-lg text-lg font-bold transition duration-300 animate-fadeIn delay-200 shadow-lg"
          style={{ background: "#2b2973", color: "#F2BE22" }}
        >
          Get Your Free Trip Consultation
        </a>
        <span className="mt-6 block text-white/80 text-base font-medium">
          Proudly based in St. Louis, MO · Serving all the Midwest
        </span>
      </div>
    </section>
  );
}
