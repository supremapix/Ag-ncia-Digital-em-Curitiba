import React from 'react';

/**
 * Banner fixo da Suprema Mídia (250x250) com telefone e Pix.
 * Exibido em todas as páginas do site, com link para o WhatsApp.
 */
export const SupremaBanner: React.FC = () => {
  return (
    <aside
      aria-label="Banner Suprema Mídia"
      className="fixed bottom-24 right-4 z-40 hidden md:block"
    >
      <a
        href="https://wa.me/5541992721004?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20um%20or%C3%A7amento."
        target="_blank"
        rel="noopener noreferrer"
        className="block w-[250px] rounded-2xl overflow-hidden shadow-2xl shadow-brand-dark/30 border-2 border-amber-400/60 hover:scale-105 hover:border-amber-400 transition-all duration-300 group"
        title="Suprema Mídia - Criação de Sites em Curitiba"
      >
        <img
          src="/banner/suprema-250x250.png"
          alt="Suprema Mídia - Crie seu site profissional. WhatsApp (41) 99272-1004. Pix supremapix@gmail.com"
          width={250}
          height={250}
          loading="lazy"
          className="w-[250px] h-[250px] object-cover"
        />
        <span className="sr-only">Suprema Mídia - WhatsApp (41) 99272-1004</span>
      </a>
    </aside>
  );
};

export default SupremaBanner;
