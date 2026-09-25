import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';

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
      {/* Floating Action WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {showTopBtn && (
          <button
            onClick={scrollToTop}
            className="bg-slate-900/90 text-white p-3 rounded-full shadow-lg backdrop-blur-md border border-white/10 hover:bg-slate-800 transition-all active:scale-95"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={20} />
          </button>
        )}

        <a
          href="https://wa.me/5541992721004"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white px-4 py-3 rounded-full shadow-xl shadow-emerald-950/20 hover:bg-[#20bd5a] transition-all hover:scale-105 active:scale-95 flex items-center gap-2.5 font-bold text-xs tracking-wide"
          title="Falar no WhatsApp"
        >
          <MessageCircle size={22} fill="currentColor" className="text-white" />
          <span className="whitespace-nowrap">WhatsApp</span>
        </a>
      </div>
    </>
  );
};
