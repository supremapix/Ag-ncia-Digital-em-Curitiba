
import React from 'react';
import { Link } from 'react-router-dom';
import { cities, neighborhoods, slugify } from '../data/locations';
import { MapPin, Globe, Rocket } from 'lucide-react';

export const LocationTicker: React.FC = () => {
  const cityItems = cities.map(c => ({ name: c, type: 'city' }));
  const neighborhoodItems = neighborhoods.map(n => ({ name: n, type: 'neighborhood' }));

  // Triplicar para o efeito infinito real sem pulos
  const cityDisplayList = [...cityItems, ...cityItems, ...cityItems];
  const neighborhoodDisplayList = [...neighborhoodItems, ...neighborhoodItems, ...neighborhoodItems];

  return (
    <div className="bg-[#050a14] py-20 overflow-hidden relative border-y border-white/5">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Lado Esquerdo: Info */}
        <div className="lg:w-1/3 text-center lg:text-left z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full mb-6">
             <Rocket size={14} className="text-brand-primary" />
             <span className="text-[10px] text-brand-primary font-black uppercase tracking-widest">Atendimento Express</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tighter">
            Onde Estamos em <span className="text-brand-accent">Curitiba & RMC</span>
          </h3>
          <p className="text-gray-500 text-lg mb-8 font-medium">
            Nossa equipe domina o SEO em cada bairro e cidade da região, garantindo que seu negócio seja encontrado por quem está perto.
          </p>
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-white/5 p-6 rounded-3xl border border-white/10 text-center group hover:bg-white/10 transition-all">
                <span className="block text-brand-accent text-3xl font-black mb-1">29</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">Cidades RMC</span>
             </div>
             <div className="bg-white/5 p-6 rounded-3xl border border-white/10 text-center group hover:bg-white/10 transition-all">
                <span className="block text-brand-primary text-3xl font-black mb-1">115+</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">Bairros</span>
             </div>
          </div>
        </div>

        {/* Lado Direito: Esteira Vertical */}
        <div className="lg:w-2/3 h-[500px] relative location-mask w-full">
          <div className="absolute inset-0 flex gap-6">
            
            {/* Coluna 1: Cidades (30s) */}
            <div className="flex-1 overflow-hidden relative">
               <div className="animate-marquee-vertical flex flex-col gap-4" style={{ animationDuration: '30s' }}>
                  {cityDisplayList.map((loc, i) => (
                    <Link 
                      key={i} 
                      to={`/site-em-${slugify(loc.name)}`}
                      className="bg-white/5 hover:bg-brand-primary p-5 rounded-2xl border border-white/5 text-gray-400 hover:text-white transition-all duration-300 flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <Globe size={18} className="text-brand-primary group-hover:text-white" />
                        <span className="font-black text-sm uppercase tracking-wider">{loc.name}</span>
                      </div>
                      <MapPin size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
               </div>
            </div>

            {/* Coluna 2: Bairros (45s - Diferente para efeito premium) */}
            <div className="flex-1 overflow-hidden relative">
               <div className="animate-marquee-vertical flex flex-col gap-4" style={{ animationDirection: 'reverse', animationDuration: '45s' }}>
                  {neighborhoodDisplayList.map((loc, i) => (
                    <Link 
                      key={i} 
                      to={`/site-em-${slugify(loc.name)}`}
                      className="bg-white/5 hover:bg-brand-accent p-5 rounded-2xl border border-white/5 text-gray-400 hover:text-brand-dark transition-all duration-300 flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <MapPin size={16} className="text-brand-accent group-hover:text-brand-dark" />
                        <span className="font-bold text-[11px] uppercase tracking-tighter truncate">{loc.name}</span>
                      </div>
                    </Link>
                  ))}
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
