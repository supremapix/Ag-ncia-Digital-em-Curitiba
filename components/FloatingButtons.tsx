
import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp, Mail } from 'lucide-react';

export const FloatingButtons: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const checkScroll = () => setShowTopBtn(window.scrollY > 400);
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {/* Botões de Ação Direta */}
      <div className="fixed bottom-8 left-8 z-50 flex flex-col gap-4">
        <a
          href="https://wa.me/5541987001004"
          target="_blank"
          rel="noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-2xl shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all hover:scale-110 active:scale-95 flex items-center justify-center group"
          title="WhatsApp Suprema"
        >
          <MessageCircle size={32} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold pl-0 group-hover:pl-3 text-sm">WhatsApp</span>
        </a>
        <a
          href="tel:41987001004"
          className="bg-brand-primary text-white p-4 rounded-2xl shadow-[0_10px_30px_rgba(37,99,235,0.4)] transition-all hover:scale-110 active:scale-95 flex items-center justify-center group"
          title="Ligar Agora"
        >
          <Phone size={32} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold pl-0 group-hover:pl-3 text-sm">Ligar</span>
        </a>
        <a
          href="mailto:supremamidiabatel@gmail.com"
          className="bg-brand-dark text-white p-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all hover:scale-110 active:scale-95 flex items-center justify-center group border border-white/10"
          title="Enviar E-mail"
        >
          <Mail size={32} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold pl-0 group-hover:pl-3 text-sm">E-mail</span>
        </a>
      </div>

      {/* Scroll Top */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-brand-accent text-brand-dark p-4 rounded-2xl shadow-2xl transition-all hover:scale-110 active:scale-90 animate-fade-in flex items-center justify-center"
        >
          <ArrowUp size={32} strokeWidth={3} />
        </button>
      )}
    </>
  );
};
