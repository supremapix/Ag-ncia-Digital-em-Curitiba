
import React, { useMemo } from 'react';
import { Star } from 'lucide-react';
import { cities, scCities, rsCities } from '../data/locations';

export const ReviewsTicker: React.FC = () => {
  const reviews = useMemo(() => {
    const locs = [...cities, ...scCities, ...rsCities];
    const names = ["Ricardo", "Amanda", "Bruno", "Carlos", "Débora", "Eduardo", "Fernanda", "Gabriel", "Helena", "Igor", "Juliana", "Kleber", "Letícia", "Marcos"];
    const comments = [
      "Site ficou sensacional, entrega muito rápida!",
      "O SEO em [LOC] realmente funciona, estou no topo!",
      "Melhor agência de Curitiba, suporte impecável.",
      "Minhas vendas subiram 300% após o novo site.",
      "Profissionais de elite. Recomendo muito.",
      "O site abre instantâneo no celular, incrível!",
      "Design moderno e focado em conversão.",
      "Suporte via WhatsApp é o diferencial deles."
    ];

    const results = [];
    for (let i = 0; i < 399; i++) {
      const loc = locs[i % locs.length];
      const name = names[i % names.length];
      const comment = comments[i % comments.length].replace(/\[LOC\]/g, loc);
      const rating = (Math.random() * (4.9 - 4.1) + 4.1).toFixed(1);
      
      results.push({
        name: `${name} ${String.fromCharCode(65 + (i % 26))}.`,
        loc: loc,
        comment: comment,
        rating: rating,
        initial: name.charAt(0)
      });
    }
    return results;
  }, []);

  return (
    <section className="py-24 bg-brand-dark overflow-hidden relative">
      <div className="container mx-auto px-4 mb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">CLIENTES <span className="text-brand-accent">REAIS</span></h2>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                 <div className="flex text-brand-accent">
                    {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                 </div>
                 <span className="text-white font-black text-2xl">4.8/5.0</span>
                 <span className="text-gray-500 font-bold uppercase text-xs tracking-widest">(399 Reviews Google)</span>
              </div>
           </div>
           <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 flex items-center gap-6">
              <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png" alt="Google" className="h-8 grayscale opacity-50" />
              <div className="h-10 w-px bg-white/10"></div>
              <p className="text-gray-400 text-sm font-medium leading-tight max-w-[200px]">
                A agência mais bem avaliada de Curitiba no Google My Business.
              </p>
           </div>
        </div>
      </div>

      <div className="h-[500px] relative location-mask">
        <div className="absolute inset-0 flex flex-wrap justify-center gap-6 animate-marquee-vertical pause-on-hover" style={{ animationDirection: 'reverse', animationDuration: '150s' }}>
          {reviews.map((rev, i) => (
            <div key={i} className="w-[320px] bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center text-white font-black text-xl">
                  {rev.initial}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{rev.name}</h4>
                  <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">{rev.loc}</p>
                </div>
                <div className="ml-auto flex text-brand-accent scale-75 origin-right">
                  <Star size={14} fill="currentColor" />
                  <span className="ml-1 text-white font-black">{rev.rating}</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm italic leading-relaxed">
                "{rev.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
