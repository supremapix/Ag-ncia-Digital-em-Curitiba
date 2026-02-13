
import React, { useState, useMemo } from 'react';
import { HelpCircle, ChevronLeft, ChevronRight, X, MessageSquare, Zap, Target, Search, MousePointer } from 'lucide-react';
import { cities, scCities, rsCities, neighborhoods } from '../data/locations';

export const FAQAccordionTicker: React.FC = () => {
  const [selectedFAQIndex, setSelectedFAQIndex] = useState<number | null>(null);

  // Gerador dinâmico de FAQs para atingir as 1100+ questões
  const allFAQs = useMemo(() => {
    const locs = [...cities, ...scCities, ...rsCities, ...neighborhoods];
    const templates = [
      { q: "Como criar um site profissional em [LOC]?", a: "Para criar um site em [LOC], a Suprema Mídia oferece engenharia de performance em React, garantindo carregamento em menos de 1 segundo e SEO local agressivo para dominar o mercado regional." },
      { q: "Qual o preço de um site em [LOC]?", a: "O investimento varia conforme a complexidade, mas em [LOC] nossos projetos começam com foco em ROI imediato. Entregamos sites institucionais e landing pages com o melhor custo-benefício do mercado sulista." },
      { q: "Como ganhar visibilidade no Google em [LOC]?", a: "A visibilidade em [LOC] é obtida através de SEO Semântico e Google Meu Negócio. Nós otimizamos cada tag e conteúdo para que sua empresa apareça no topo das buscas geolocalizadas em [LOC]." },
      { q: "Quanto tempo demora para fazer um site em [LOC]?", a: "Nossa entrega expressa para [LOC] é de 48 horas para projetos iniciais. Usamos uma estrutura pré-otimizada que acelera o lançamento sem perder a qualidade técnica." },
      { q: "Como abrir um negócio na internet em [LOC]?", a: "O primeiro passo para o sucesso digital em [LOC] é uma Landing Page vendedora. Aliamos tráfego pago (Google Ads) com um site de alta conversão desenhado especificamente para o público de [LOC]." }
    ];

    const results = [];
    for (let i = 0; i < locs.length; i++) {
      const loc = locs[i];
      const template = templates[i % templates.length];
      results.push({
        question: template.q.replace(/\[LOC\]/g, loc),
        answer: template.a.replace(/\[LOC\]/g, loc),
        loc: loc
      });
    }
    return results;
  }, []);

  const closeModal = () => setSelectedFAQIndex(null);
  const nextFAQ = () => setSelectedFAQIndex(prev => (prev !== null && prev < allFAQs.length - 1 ? prev + 1 : 0));
  const prevFAQ = () => setSelectedFAQIndex(prev => (prev !== null && prev > 0 ? prev - 1 : allFAQs.length - 1));

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative border-y border-gray-100">
      <div className="container mx-auto px-4 mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-brand-dark mb-6 tracking-tighter uppercase">
          FAQ <span className="text-brand-primary">DINÂMICO</span> 1.100+
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg">
          Dúvidas sobre criação de sites, lojas virtuais e visibilidade digital em todas as cidades da região sul. Clique para ler.
        </p>
      </div>

      <div className="h-[600px] relative location-mask">
        <div className="absolute inset-0 flex flex-wrap justify-center gap-4 animate-marquee-vertical pause-on-hover" style={{ animationDuration: '300s' }}>
          {allFAQs.slice(0, 300).map((faq, i) => (
            <button
              key={i}
              onClick={() => setSelectedFAQIndex(i)}
              className="w-[280px] h-[160px] bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-primary hover:-translate-y-1 transition-all text-left flex flex-col justify-between group"
            >
              <div className="flex justify-between items-start">
                <div className="p-2 bg-brand-primary/5 rounded-xl group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  <HelpCircle size={20} className="text-brand-primary group-hover:text-white" />
                </div>
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-300 group-hover:text-brand-accent">{faq.loc}</span>
              </div>
              <h4 className="font-bold text-brand-dark text-sm leading-tight group-hover:text-brand-primary transition-colors">
                {faq.question}
              </h4>
            </button>
          ))}
        </div>
      </div>

      {/* Modal FAQ */}
      {selectedFAQIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-dark/90 backdrop-blur-md">
          <div className="bg-white w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl relative animate-slide-up">
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full hover:bg-brand-primary hover:text-white transition-all z-10"
            >
              <X size={24} />
            </button>
            
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-brand-primary/10 p-3 rounded-2xl">
                   <MessageSquare className="text-brand-primary" size={24} />
                </div>
                <span className="text-xs font-black text-gray-400 uppercase tracking-[0.3em]">Central de Conhecimento</span>
              </div>

              <h3 className="text-2xl md:text-4xl font-black text-brand-dark mb-8 leading-tight">
                {allFAQs[selectedFAQIndex].question}
              </h3>

              <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 mb-10 text-gray-600 leading-relaxed text-lg italic">
                "{allFAQs[selectedFAQIndex].answer}"
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex gap-2">
                  <button onClick={prevFAQ} className="p-4 bg-gray-100 rounded-2xl hover:bg-brand-primary hover:text-white transition-all">
                    <ChevronLeft size={24} />
                  </button>
                  <button onClick={nextFAQ} className="p-4 bg-gray-100 rounded-2xl hover:bg-brand-primary hover:text-white transition-all">
                    <ChevronRight size={24} />
                  </button>
                </div>
                <a 
                  href="https://wa.me/5541987001004" 
                  className="bg-brand-primary text-white font-black px-8 py-4 rounded-2xl hover:bg-brand-dark transition-all flex items-center gap-2"
                >
                  Dúvida Personalizada <ChevronRight size={18} />
                </a>
              </div>
            </div>
            
            <div className="bg-brand-dark p-4 text-center text-[10px] text-gray-500 font-bold uppercase tracking-widest">
              Pergunta {selectedFAQIndex + 1} de {allFAQs.length} | Suprema Mídia Performance
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
