
import React, { useMemo } from 'react';
import { Star } from 'lucide-react';
import { cities, scCities, rsCities } from '../data/locations';

export const ReviewsTicker: React.FC = () => {
  const reviews = useMemo(() => {
    const locs = [...cities, ...scCities, ...rsCities];
    const names = ["Ricardo", "Amanda", "Bruno", "Carlos", "Débora", "Eduardo", "Fernanda", "Gabriel", "Helena", "Igor", "Juliana", "Kleber", "Letícia", "Marcos"];
    const comments = [
      "Site sensacional, entrega rápida!",
      "SEO em [LOC] realmente funciona.",
      "Melhor agência de Curitiba.",
      "Vendas subiram 300% com o novo site.",
      "Design moderno e focado em conversão.",
      "Suporte via WhatsApp impecável."
    ];

    return Array.from({ length: 150 }).map((_, i) => {
      const loc = locs[i % locs.length];
      const name = names[i % names.length];
      const comment = comments[i % comments.length].replace(/\[LOC\]/g, loc);
      const rating = (Math.random() * (4.9 - 4.5) + 4.5).toFixed(1);
      return {
        name: `${name} ${String.fromCharCode(65 + (i % 26))}.`,
        loc,
        comment,
        rating,
        initial: name.charAt(0)
      };
    });
  }, []);

  const track1 = reviews.slice(0, 50);
  const track2 = reviews.slice(50, 100);
  const track3 = reviews.slice(100, 150);

  const renderTrack = (revs: any[], speed: string, reverse = false) => (
    <div className="flex-1 min-w-[320px] overflow-hidden relative pause-on-hover">
      <div 
        className={`flex flex-col gap-6 gpu-accelerated ${reverse ? 'animate-marquee-v-rev' : 'animate-marquee-v'}`}
        style={{ animationDuration: speed }}
      >
        {[...revs, ...revs].map((rev, i) => (
          <div key={i} className="w-full bg-white/5 border border-white/10 p-6 rounded-[2rem] backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white font-black text-sm">
                {rev.initial}
              </div>
              <div className="flex-1">
                <h4 className="text-white font-bold text-xs">{rev.name}</h4>
                <p className="text-[9px] text-gray-500 uppercase font-black tracking-widest">{rev.loc}</p>
              </div>
              <div className="flex text-brand-accent gap-0.5 items-center">
                <Star size={10} fill="currentColor" />
                <span className="text-white text-xs font-black">{rev.rating}</span>
              </div>
            </div>
            <p className="text-gray-400 text-xs italic leading-relaxed italic">"{rev.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-brand-dark overflow-hidden relative">
      <div className="container mx-auto px-4 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase">PROVA <span className="text-brand-accent">SOCIAL</span></h2>
          <div className="flex items-center gap-3">
            <div className="flex text-brand-accent">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
            </div>
            <span className="text-white font-black text-xl">4.8/5.0</span>
          </div>
        </div>
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png" alt="Google" className="h-6 grayscale opacity-30" />
      </div>

      <div className="container mx-auto px-4 h-[600px] relative location-mask flex gap-8">
        {renderTrack(track1, '120s')}
        {renderTrack(track2, '150s', true)}
        {renderTrack(track3, '130s')}
      </div>
    </section>
  );
};
