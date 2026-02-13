
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cities, scCities, rsCities, neighborhoods, slugify } from '../data/locations';
import { MapPin, Globe, Landmark, Search, ChevronRight } from 'lucide-react';

export const Sitemap: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filterList = (list: string[]) => 
    list.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase())).sort();

  const sections = [
    { title: "Paraná - Bairros de Curitiba", items: neighborhoods, icon: <MapPin className="text-brand-accent" />, color: "border-brand-accent/20" },
    { title: "Paraná - Cidades do Interior", items: cities, icon: <Globe className="text-brand-primary" />, color: "border-brand-primary/20" },
    { title: "Santa Catarina", items: scCities, icon: <Landmark className="text-brand-accent" />, color: "border-brand-accent/20" },
    { title: "Rio Grande do Sul", items: rsCities, icon: <Globe className="text-brand-primary" />, color: "border-brand-primary/20" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <section className="bg-brand-dark text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase">Mapa do Site</h1>
          <p className="text-gray-400 text-xl max-w-2xl font-medium">
            Explore nossa presença digital completa em toda a Região Sul. São mais de 1.100 localidades atendidas pela Suprema Mídia.
          </p>
        </div>
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
           <Globe size={600} />
        </div>
      </section>

      {/* Search Bar */}
      <div className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-4 max-w-2xl">
          <Search className="text-brand-primary" size={24} />
          <input 
            type="text" 
            placeholder="Buscar cidade ou bairro..." 
            className="w-full bg-transparent outline-none text-brand-dark font-bold text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Lists */}
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 gap-12">
          {sections.map((section, idx) => {
            const filteredItems = filterList(section.items);
            if (filteredItems.length === 0) return null;

            return (
              <div key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-200">
                  {section.icon}
                  <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tight">{section.title}</h2>
                  <span className="ml-auto bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs font-black">
                    {filteredItems.length} localidades
                  </span>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                  {filteredItems.map((item, i) => (
                    <Link 
                      key={i} 
                      to={`/site-em/${slugify(item)}`}
                      className="group flex items-center justify-between p-3 bg-white border border-gray-100 rounded-xl hover:border-brand-primary hover:shadow-md transition-all"
                    >
                      <span className="text-[11px] font-bold text-gray-500 group-hover:text-brand-primary uppercase truncate">
                        {item}
                      </span>
                      <ChevronRight size={14} className="text-gray-300 group-hover:text-brand-primary transform group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
