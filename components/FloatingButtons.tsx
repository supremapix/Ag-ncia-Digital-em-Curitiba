import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

export const FloatingButtons: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Left Side: Contact Actions */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
        <a
          href="https://wa.me/5541987001004"
          target="_blank"
          rel="noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
          title="Fale no WhatsApp"
        >
          <MessageCircle size={28} />
        </a>
        <a
          href="tel:41987001004"
          className="bg-brand-primary hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
          title="Ligar Agora"
        >
          <Phone size={28} />
        </a>
      </div>

      {/* Right Side: Scroll to Top */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110 flex items-center justify-center animate-fade-in"
          title="Voltar ao topo"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
};