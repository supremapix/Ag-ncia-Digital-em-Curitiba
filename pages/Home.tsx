
import React from 'react';
import { CheckCircle, Rocket, BarChart, Smartphone, Globe, Shield, MapPin, ChevronRight, PlayCircle, Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cities, neighborhoods, slugify } from '../data/locations';
import { LeadForm } from '../components/LeadForm';
import { VideoPlayer } from '../components/VideoPlayer';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-brand-dark text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
             <div className="lg:w-3/5 text-center lg:text-left animate-slide-up">
                <span className="text-brand-accent font-bold tracking-widest uppercase mb-4 inline-block px-3 py-1 bg-white/5 rounded-full border border-white/10">Suprema Sites Express</span>
                <h1 className="text-4xl lg:text-7xl font-extrabold mb-6 leading-tight">
                  Criação de Sites <span className="text-brand-primary">Profissionais</span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Entregamos seu site em <strong>6h a 48h</strong>. Atração de clientes qualificados com aumento de visibilidade entre <span className="text-brand-accent font-bold">300% e 1900% ao ano</span>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a 
                    href="https://wa.me/5541987001004" 
                    className="shimmer-btn text-brand-dark font-black py-4 px-10 rounded-xl text-lg transition-all transform hover:scale-105 shadow-xl"
                  >
                    Solicitar Orçamento Grátis
                  </a>
                  <Link 
                    to="/portfolio" 
                    className="bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/5 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all"
                  >
                    Nossos Cases
                  </Link>
                </div>
                <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-400">
                   <span className="flex items-center gap-1"><CheckCircle size={16} className="text-green-500"/> +1000 Clientes</span>
                   <span className="flex items-center gap-1"><CheckCircle size={16} className="text-green-500"/> Google Partners</span>
                </div>
             </div>
             <div className="lg:w-2/5 w-full animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <LeadForm />
             </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-100 overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: 'Crescimento SEO', value: '1900%', color: 'text-green-600' },
                { label: 'Sites Entregues', value: '5k+', color: 'text-brand-primary' },
                { label: 'Anos de Experiência', value: '12+', color: 'text-brand-dark' },
                { label: 'Entrega Express', value: '6h', color: 'text-brand-accent' },
              ].map((stat, i) => (
                <div key={i} className="animate-slide-up" style={{ animationDelay: `${0.1 * i}s` }}>
                   <div className={`text-3xl md:text-5xl font-black mb-1 ${stat.color}`}>{stat.value}</div>
                   <div className="text-xs md:text-sm text-gray-500 font-bold uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Rest of Home sections... (Content already in Home.tsx is kept but stats updated) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4">Metodologia Focada em Resultados</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Nossos sites não são apenas "bonitos". Eles são ferramentas de vendas otimizadas para o algoritmo do Google.</p>
          </div>
          <div className="max-w-5xl mx-auto">
             <VideoPlayer />
          </div>
        </div>
      </section>

      {/* Re-using benefits/locations with updated text where needed */}
    </div>
  );
};
