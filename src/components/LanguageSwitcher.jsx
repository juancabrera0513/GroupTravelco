import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, switchLanguage } = useContext(LanguageContext);

  return (
    <div className="flex justify-end max-w-6xl mx-auto mt-4">
      <button
        onClick={() => switchLanguage("es")}
        className={`px-4 py-2 mx-1 rounded-full font-bold ${language === "es" ? "bg-primary text-white" : "bg-white text-primary border border-primary"}`}
      >
        Español
      </button>
      <button
        onClick={() => switchLanguage("en")}
        className={`px-4 py-2 mx-1 rounded-full font-bold ${language === "en" ? "bg-primary text-white" : "bg-white text-primary border border-primary"}`}
      >
        English
      </button>
      <button
        onClick={() => switchLanguage("fr")}
        className={`px-4 py-2 mx-1 rounded-full font-bold ${language === "fr" ? "bg-primary text-white" : "bg-white text-primary border border-primary"}`}
      >
        Français
      </button>
    </div>
  );
}
