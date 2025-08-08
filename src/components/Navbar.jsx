import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
    { label: "FAQ", to: "/faq" },
  ];

  return (
    <header className="bg-[#2b2973] fixed w-full z-30 shadow-lg">
      <nav
        className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3"
        aria-label="Main Navigation"
      >
        {/* Logo image */}
        <Link
          to="/"
          className="flex items-center"
          aria-label="Go to home"
        >
          <img
            src="/images/logo.png"
            alt="Group Travel Co Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, idx) =>
            item.to ? (
              <Link
                key={idx}
                to={item.to}
                className={`hover:text-[#F2BE22] font-medium transition ${
                  location.pathname === item.to
                    ? "text-[#F2BE22]"
                    : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={idx}
                href={item.href}
                className="text-white font-medium hover:text-[#F2BE22] transition"
              >
                {item.label}
              </a>
            )
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl"
          aria-label="Open navigation menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#2b2973] border-t border-white/10 px-4 pb-4">
          <div className="flex flex-col gap-4 mt-4">
            {navItems.map((item, idx) =>
              item.to ? (
                <Link
                  key={idx}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="text-white hover:text-[#F2BE22] font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={idx}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white hover:text-[#F2BE22] font-medium"
                >
                  {item.label}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
