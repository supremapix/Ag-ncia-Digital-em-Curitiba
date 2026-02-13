
import React, { useState, useMemo } from 'react';
import { HelpCircle, ChevronLeft, ChevronRight, X, MessageSquare } from 'lucide-react';
import { cities, scCities, rsCities, neighborhoods } from '../data/locations';

export const FAQAccordionTicker: React.FC = () => {
  const [selectedFAQIndex, setSelectedFAQIndex] = useState<number | null>(null);

  const allFAQs = useMemo(() => {
    const locs = [...cities, ...scCities, ...rsCities, ...neighborhoods];
    const templates = [
      { q: "Como criar um site em [LOC]?", a: "Para criar seu site em [LOC], a Suprema Mídia utiliza React de alta performance, garantindo carregamento ultrarrápido e SEO local para dominar as buscas." },
      { q: "Quanto custa um site em [LOC]?", a: "Em [LOC], nossos projetos são focados em ROI. Oferecemos sites institucionais e e-commerces com parcelamento facilitado e foco em vendas." },
      { q: "Como ser o #1 no Google em [LOC]?", a: "Nós otimizamos seu Google Meu Negócio e aplicamos SEO Semântico para que sua empresa de [LOC] apareça no topo." },
      { q: "Site em 48h em [LOC] é possível?", a: "Sim! Para clientes de [LOC], temos uma linha de produção expressa que entrega sites profissionais com otimização completa em apenas 2 dias." }
    ];

    return locs.map((loc, i) => {
      const template = templates[i % templates.length];
      return {
        question: template.q.replace(/\[LOC\]/g, loc),
        answer: template.a.replace(/\[LOC\]/g, loc),
        loc: loc
      };
    });
  }, []);

  // Divide as faixas para não sobrecarregar uma única animação
  const track1 = allFAQs.slice(0, 40);
  const track2 = allFAQs.slice(40, 80);
  const track3 = allFAQs.slice(80, 120);

  const closeModal = () => setSelectedFAQIndex(null);

  const renderTrack = (faqs: any[], speed: string, reverse = false) => (
    <div className="flex-1 min-w-[300px] overflow-hidden relative pause-on-hover">
      <div 
        className={`flex flex-col gap-4 gpu-accelerated ${reverse ? 'animate-marquee-v-rev' : 'animate-marquee-v'}`}
        style={{ animationDuration: speed }}
      >
        {[...faqs, ...faqs].map((faq, i) => (
          <button
            key={i}
            onClick={() => setSelectedFAQIndex(allFAQs.indexOf(faq))}
            className="w-full bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-primary transition-all text-left flex flex-col gap-3 group"
          >
            <div className="flex justify-between items-center">
              <HelpCircle size={18} className="text-brand-primary group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">{faq.loc}</span>
            </div>
            <h4 className="font-bold text-brand-dark text-sm leading-tight group-hover:text-brand-primary">
              {faq.question}
            </h4>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="container mx-auto px-4 mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-brand-dark mb-4 tracking-tighter uppercase">FAQ <span className="text-brand-primary">DINÂMICO</span></h2>
        <p className="text-gray-500 font-medium">As principais dúvidas sobre sites e visibilidade no sul do Brasil.</p>
      </div>

      <div className="container mx-auto px-4 h-[700px] relative location-mask flex gap-6">
        {renderTrack(track1, '80s')}
        {renderTrack(track2, '110s', true)}
        {renderTrack(track3, '95s')}
      </div>

      {selectedFAQIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-dark/95 backdrop-blur-md">
          <div className="bg-white w-full max-w-2xl rounded-[3rem] overflow-hidden shadow-2xl relative animate-slide-up">
            <button onClick={closeModal} className="absolute top-8 right-8 p-3 bg-gray-100 rounded-full hover:bg-brand-primary hover:text-white transition-all">
              <X size={24} />
            </button>
            <div className="p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-brand-primary/10 p-3 rounded-2xl"><MessageSquare className="text-brand-primary" /></div>
                <span className="text-xs font-black text-gray-400 uppercase tracking-widest">{allFAQs[selectedFAQIndex].loc}</span>
              </div>
              <h3 className="text-3xl font-black text-brand-dark mb-8 leading-tight">{allFAQs[selectedFAQIndex].question}</h3>
              <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 text-gray-600 text-lg italic leading-relaxed">
                "{allFAQs[selectedFAQIndex].answer}"
              </div>
              <a href="https://wa.me/5541987001004" className="mt-8 w-full bg-brand-primary text-white font-black py-5 rounded-2xl hover:bg-brand-dark transition-all text-center block">
                Falar com Consultor no WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
