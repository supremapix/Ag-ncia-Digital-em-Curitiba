
import React from 'react';
import { Link } from 'react-router-dom';
import { cities, scCities, rsCities, neighborhoods, slugify } from '../data/locations';
import { MapPin, Globe, Rocket, Landmark } from 'lucide-react';

export const LocationTicker: React.FC = () => {
  const neighborhoodItems = [...neighborhoods, ...neighborhoods].map(n => ({ name: n, type: 'neighborhood' }));
  const prCitiesItems = [...cities, ...cities].map(c => ({ name: c, type: 'pr' }));
  const scCitiesItems = [...scCities, ...scCities].map(c => ({ name: c, type: 'sc' }));
  const rsCitiesItems = [...rsCities, ...rsCities].map(c => ({ name: c, type: 'rs' }));

  return (
    <div className="bg-[#050a14] py-24 overflow-hidden relative border-y border-white/5">
      <div className="container mx-auto px-4 flex flex-col xl:flex-row gap-16 items-center">
        
        <div className="xl:w-1/4 text-center xl:text-left z-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 border border-brand-primary/20 rounded-full mb-8">
             <Rocket size={16} className="text-brand-primary" />
             <span className="text-xs text-brand-primary font-black uppercase tracking-widest">Líder no Sul</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tighter">
            Domínio em <br/><span className="text-brand-accent">PR, SC & RS</span>
          </h3>
          <p className="text-gray-500 text-lg mb-10 font-medium">
            Atendimento estratégico nos 3 estados do Sul. Passe o mouse para pausar a rolagem.
          </p>
          <div className="space-y-4">
             <div className="bg-white/5 p-6 rounded-3xl border border-white/10 flex justify-between items-center">
                <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">Abrangência</span>
                <span className="text-brand-accent text-xl font-black">Região Sul</span>
             </div>
             <div className="bg-white/5 p-6 rounded-3xl border border-white/10 flex justify-between items-center">
                <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">Localidades</span>
                <span className="text-brand-primary text-xl font-black">1.100+</span>
             </div>
          </div>
        </div>

        <div className="xl:w-3/4 h-[700px] relative location-mask w-full">
          <div className="absolute inset-0 flex gap-4 md:gap-6">
            
            {/* PR & Bairros */}
            <div className="flex-1 overflow-hidden relative">
               <div className="text-[8px] font-black text-gray-700 mb-6 uppercase tracking-[0.3em] text-center">PR & Bairros</div>
               <div className="animate-marquee-vertical-slow pause-on-hover flex flex-col gap-3" style={{ animationDuration: '120s' }}>
                  {neighborhoodItems.map((loc, i) => (
                    <Link key={i} to={`/site-em/${slugify(loc.name)}`} className="bg-white/5 hover:bg-brand-primary p-3 rounded-xl border border-white/5 text-gray-500 hover:text-white transition-all flex items-center gap-2">
                      <MapPin size={10} className="text-brand-accent" />
                      <span className="font-bold text-[9px] uppercase tracking-tighter truncate">{loc.name}</span>
                    </Link>
                  ))}
               </div>
            </div>

            {/* Interior PR */}
            <div className="flex-1 overflow-hidden relative hidden md:block">
               <div className="text-[8px] font-black text-gray-700 mb-6 uppercase tracking-[0.3em] text-center">Paraná</div>
               <div className="animate-marquee-vertical-slow pause-on-hover flex flex-col gap-3" style={{ animationDirection: 'reverse', animationDuration: '180s' }}>
                  {prCitiesItems.map((loc, i) => (
                    <Link key={i} to={`/site-em/${slugify(loc.name)}`} className="bg-white/5 hover:bg-brand-primary p-3 rounded-xl border border-white/5 text-gray-500 hover:text-white transition-all flex items-center gap-2">
                      <Globe size={10} className="text-brand-primary" />
                      <span className="font-black text-[9px] uppercase tracking-wide truncate">{loc.name}</span>
                    </Link>
                  ))}
               </div>
            </div>

            {/* Santa Catarina */}
            <div className="flex-1 overflow-hidden relative">
               <div className="text-[8px] font-black text-gray-700 mb-6 uppercase tracking-[0.3em] text-center">Santa Catarina</div>
               <div className="animate-marquee-vertical-slow pause-on-hover flex flex-col gap-3" style={{ animationDuration: '220s' }}>
                  {scCitiesItems.map((loc, i) => (
                    <Link key={i} to={`/site-em/${slugify(loc.name)}`} className="bg-white/5 hover:bg-brand-accent p-3 rounded-xl border border-white/5 text-gray-500 hover:text-brand-dark transition-all flex items-center gap-2">
                      <Landmark size={10} className="text-brand-accent" />
                      <span className="font-bold text-[9px] uppercase tracking-widest truncate">{loc.name}</span>
                    </Link>
                  ))}
               </div>
            </div>

            {/* Rio Grande do Sul */}
            <div className="flex-1 overflow-hidden relative">
               <div className="text-[8px] font-black text-gray-700 mb-6 uppercase tracking-[0.3em] text-center">Rio Grande do Sul</div>
               <div className="animate-marquee-vertical-slow pause-on-hover flex flex-col gap-3" style={{ animationDirection: 'reverse', animationDuration: '260s' }}>
                  {rsCitiesItems.map((loc, i) => (
                    <Link key={i} to={`/site-em/${slugify(loc.name)}`} className="bg-white/5 hover:bg-brand-primary p-3 rounded-xl border border-white/5 text-gray-500 hover:text-white transition-all flex items-center gap-2">
                      <Globe size={10} className="text-brand-primary" />
                      <span className="font-black text-[9px] uppercase tracking-wide truncate">{loc.name}</span>
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
