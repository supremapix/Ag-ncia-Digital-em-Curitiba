
import React from 'react';
import { Link } from 'react-router-dom';
import { cities, neighborhoods, slugify } from '../data/locations';
import { MapPin, Globe, Rocket, Landmark } from 'lucide-react';

export const LocationTicker: React.FC = () => {
  const cityItems = cities.map(c => ({ name: c, type: 'city' }));
  const neighborhoodItems = neighborhoods.map(n => ({ name: n, type: 'neighborhood' }));
  
  // Dividir cidades entre RMC e PR Geral (Simplificado para o ticker)
  const rmcCities = ["Curitiba", "Araucária", "Colombo", "Pinhais", "São José dos Pinhais", "Piraquara", "Campo Largo", "Fazenda Rio Grande"];
  const paranaCities = cities.filter(c => !rmcCities.includes(c));

  const listNeighborhoods = [...neighborhoodItems, ...neighborhoodItems, ...neighborhoodItems];
  const listRMCCities = [...cityItems.filter(c => rmcCities.includes(c.name)), ...cityItems.filter(c => rmcCities.includes(c.name))];
  const listParana = [...paranaCities, ...paranaCities].map(c => ({ name: c, type: 'pr' }));

  return (
    <div className="bg-[#050a14] py-24 overflow-hidden relative border-y border-white/5">
      <div className="container mx-auto px-4 flex flex-col xl:flex-row gap-16 items-center">
        
        <div className="xl:w-1/4 text-center xl:text-left z-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 border border-brand-primary/20 rounded-full mb-8">
             <Rocket size={16} className="text-brand-primary" />
             <span className="text-xs text-brand-primary font-black uppercase tracking-widest">Domínio Regional</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tighter">
            Atendimento em todo o <span className="text-brand-accent">Paraná</span>
          </h3>
          <p className="text-gray-500 text-lg mb-10 font-medium">
            Velocidade e SEO local para cada cidade e bairro. Passe o mouse para pausar e escolher sua região.
          </p>
          <div className="space-y-4">
             <div className="bg-white/5 p-6 rounded-3xl border border-white/10 flex justify-between items-center group hover:bg-white/10 transition-all">
                <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">Estado</span>
                <span className="text-brand-accent text-2xl font-black">Paraná</span>
             </div>
             <div className="bg-white/5 p-6 rounded-3xl border border-white/10 flex justify-between items-center group hover:bg-white/10 transition-all">
                <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">Cidades</span>
                <span className="text-brand-primary text-2xl font-black">399</span>
             </div>
          </div>
        </div>

        <div className="xl:w-3/4 h-[600px] relative location-mask w-full">
          <div className="absolute inset-0 flex gap-6">
            
            {/* Curitiba Neighborhoods */}
            <div className="flex-1 overflow-hidden relative">
               <div className="text-[10px] font-black text-gray-600 mb-4 uppercase tracking-[0.3em] text-center">Bairros Curitiba</div>
               <div className="animate-marquee-vertical-slow pause-on-hover flex flex-col gap-4">
                  {listNeighborhoods.map((loc, i) => (
                    <Link key={i} to={`/site-em/${slugify(loc.name)}`} className="bg-white/5 hover:bg-brand-primary p-4 rounded-2xl border border-white/5 text-gray-400 hover:text-white transition-all flex items-center gap-3">
                      <MapPin size={16} className="text-brand-accent group-hover:text-white" />
                      <span className="font-bold text-[11px] uppercase tracking-tighter truncate">{loc.name}</span>
                    </Link>
                  ))}
               </div>
            </div>

            {/* RMC Cities */}
            <div className="flex-1 overflow-hidden relative">
               <div className="text-[10px] font-black text-gray-600 mb-4 uppercase tracking-[0.3em] text-center">RMC & Metrópole</div>
               <div className="animate-marquee-vertical-slow pause-on-hover flex flex-col gap-4" style={{ animationDirection: 'reverse', animationDuration: '60s' }}>
                  {listRMCCities.map((loc, i) => (
                    <Link key={i} to={`/site-em/${slugify(loc.name)}`} className="bg-white/5 hover:bg-brand-primary p-4 rounded-2xl border border-white/5 text-gray-400 hover:text-white transition-all flex items-center gap-3">
                      <Globe size={16} className="text-brand-primary group-hover:text-white" />
                      <span className="font-black text-xs uppercase tracking-wide truncate">{loc.name}</span>
                    </Link>
                  ))}
               </div>
            </div>

            {/* Paraná State Cities */}
            <div className="flex-1 overflow-hidden relative hidden md:block">
               <div className="text-[10px] font-black text-gray-600 mb-4 uppercase tracking-[0.3em] text-center">Cidades Paraná</div>
               <div className="animate-marquee-vertical-slow pause-on-hover flex flex-col gap-4" style={{ animationDuration: '180s' }}>
                  {listParana.map((loc, i) => (
                    <Link key={i} to={`/site-em/${slugify(loc.name)}`} className="bg-white/5 hover:bg-brand-accent p-4 rounded-2xl border border-white/5 text-gray-400 hover:text-brand-dark transition-all flex items-center gap-3">
                      <Landmark size={14} className="text-gray-500 group-hover:text-brand-dark" />
                      <span className="font-bold text-[10px] uppercase tracking-widest truncate">{loc.name}</span>
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
