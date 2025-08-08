import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const links = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
    { label: "FAQ", to: "/faq" },
  ];

  return (
    <footer className="bg-primary text-white py-10 px-6 text-center" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        {/* Nav Links */}
        <div className="mb-6 flex justify-center flex-wrap gap-6 text-sm font-medium">
          {links.map((item, idx) =>
            item.to ? (
              <Link key={idx} to={item.to} className="hover:underline">
                {item.label}
              </Link>
            ) : (
              <a key={idx} href={item.href} className="hover:underline">
                {item.label}
              </a>
            )
          )}
        </div>

        {/* Social */}
        <div className="flex justify-center gap-6 mb-6 text-xl" data-aos="zoom-in">
          <a
            href="https://www.facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-125 hover:text-accent"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-125 hover:text-accent"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/13195551234" // Pon tu número real aquí
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-125 hover:text-accent"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Local SEO and Copyright */}
        <p className="text-sm opacity-80">
          Serving the St. Louis, MO 63123 area & all the Midwest · &copy; {new Date().getFullYear()} Group Travel Co
        </p>
      </div>
    </footer>
  );
}
