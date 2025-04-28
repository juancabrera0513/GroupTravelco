import React from "react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/1TU_NUMERO_DE_WHATSAPP" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 z-50"
      title="Chat en WhatsApp"
    >
      {/* Puedes usar un ícono real si prefieres */}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79V12A9 9 0 105.21 5.21l1.41 1.41A7 7 0 1119 12c0 .34-.03.68-.07 1.01l1.58 1.58c.2-.5.33-1.03.41-1.58l-.01-.22z" />
      </svg>
    </a>
  );
}
