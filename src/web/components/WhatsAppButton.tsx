import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Atraso sutil para permitir a renderização inicial e focar no conteúdo principal primeiro
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[9900] flex items-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Tooltip Persuasivo (Oculto em telas muito pequenas para focar no botão) */}
      <div className="whatsapp-tooltip hide-mobile">
        <span className="whatsapp-tooltip-text">Agendar avaliação</span>
      </div>

      <a
        href="https://wa.me/5541985234394?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20no%20COI."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-btn"
        aria-label="Falar conosco no WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}
