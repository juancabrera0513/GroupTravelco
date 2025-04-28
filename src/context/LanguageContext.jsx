import React, { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("es");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("puertaGlobalLanguage");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      const browserLanguage = navigator.language.startsWith("en")
        ? "en"
        : navigator.language.startsWith("fr")
        ? "fr"
        : "es";
      setLanguage(browserLanguage);
      localStorage.setItem("puertaGlobalLanguage", browserLanguage);
    }
  }, []);

  const switchLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("puertaGlobalLanguage", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
