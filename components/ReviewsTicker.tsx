
import React, { useMemo } from 'react';
import { Star, CheckCircle2, MapPin } from 'lucide-react';
import { cities, scCities, rsCities } from '../data/locations';

export const ReviewsTicker: React.FC = () => {
  const reviews = useMemo(() => {
    const locs = [...cities, ...scCities, ...rsCities];
    const names = ["Ricardo", "Amanda", "Bruno", "Carlos", "Débora", "Eduardo", "Fernanda", "Gabriel", "Helena", "Igor", "Juliana", "Kleber", "Letícia", "Marcos"];
    const comments = [
      "Site sensacional, entrega rápida e suporte nota 10!",
      "O SEO em [LOC] realmente funciona, estamos no topo.",
      "Melhor agência de Curitiba, recomendo a todos.",
      "Nossas vendas subiram 300% com o novo site otimizado.",
      "Design moderno, rápido e focado em conversão real.",
      "Suporte via WhatsApp impecável e muito atencioso."
    ];

    return Array.from({ length: 150 }).map((_, i) => {
      const loc = locs[i % locs.length];
      const name = names[i % names.length];
      const comment = comments[i % comments.length].replace(/\[LOC\]/g, loc);
      const rating = 5;
      const date = ["há 2 dias", "há 1 semana", "há 1 mês", "há 3 meses", "há 2 semanas"][i % 5];
      
      return {
        name: `${name} ${String.fromCharCode(65 + (i % 26))}.`,
        loc,
        comment,
        rating,
        date,
        initial: name.charAt(0),
        isLocalGuide: i % 3 === 0
      };
    });
  }, []);

  const track1 = reviews.slice(0, 50);
  const track2 = reviews.slice(50, 100);
  const track3 = reviews.slice(100, 150);

  const renderTrack = (revs: any[], speed: string, reverse = false) => (
    <div className="flex-1 min-w-[300px] md:min-w-[350px] overflow-hidden relative pause-on-hover">
      <div 
        className={`flex flex-col gap-6 gpu-accelerated ${reverse ? 'animate-marquee-v-rev' : 'animate-marquee-v'}`}
        style={{ animationDuration: speed }}
      >
        {[...revs, ...revs].map((rev, i) => (
          <div key={i} className="w-full bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-sm overflow-hidden shrink-0">
                {rev.initial}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <h4 className="text-gray-900 font-bold text-sm truncate">{rev.name}</h4>
                  <CheckCircle2 size={12} className="text-blue-500 fill-blue-500/10 shrink-0" />
                </div>
                <div className="flex items-center gap-1 text-[10px] text-gray-500 font-medium">
                  {rev.isLocalGuide && <span className="text-orange-600 font-bold">Local Guide</span>}
                  {rev.isLocalGuide && <span>•</span>}
                  <span>{rev.date}</span>
                </div>
              </div>
              <img 
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                alt="Google" 
                className="h-3 opacity-40 grayscale shrink-0" 
              />
            </div>
            
            <div className="flex text-[#fbbc04] gap-0.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>

            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              {rev.comment}
            </p>

            <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
              <MapPin size={10} />
              {rev.loc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="container mx-auto px-4 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                alt="Google" 
                className="h-8" 
              />
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">Avaliações no Google</h3>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-4xl md:text-5xl font-black text-gray-900">4.8</div>
              <div>
                <div className="flex text-[#fbbc04] mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <span className="text-gray-500 font-bold text-sm">399 comentários</span>
              </div>
            </div>
          </div>
          <a 
            href="https://wa.me/5541987001004"
            className="bg-brand-primary hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2"
          >
            Ver Todas no Google Maps
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 h-[700px] relative location-mask flex gap-6 md:gap-8">
        {renderTrack(track1, '100s')}
        <div className="hidden md:block flex-1">
          {renderTrack(track2, '130s', true)}
        </div>
        <div className="hidden lg:block flex-1">
          {renderTrack(track3, '115s')}
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

