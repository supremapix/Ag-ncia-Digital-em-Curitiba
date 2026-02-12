
import React from 'react';
import { CheckCircle, BarChart, Smartphone, Globe, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LeadForm } from '../components/LeadForm';
import { VideoPlayer } from '../components/VideoPlayer';
import { LocationTicker } from '../components/LocationTicker';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-brand-dark text-white py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
             <div className="lg:w-3/5 text-center lg:text-left animate-slide-up">
                <span className="text-brand-accent font-black tracking-[0.3em] uppercase mb-6 inline-block px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs">
                  Suprema Mídia & Performance
                </span>
                <h1 className="text-5xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
                  SITES QUE <span className="text-brand-primary">DOMINAM</span> O GOOGLE
                </h1>
                <p className="text-xl lg:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                  Atração de clientes qualificados em Curitiba e RMC. Visibilidade aumentada em até <span className="text-white font-black underline decoration-brand-accent">1900% ao ano</span>.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                  <a 
                    href="https://wa.me/5541987001004" 
                    className="shimmer-btn text-brand-dark font-black py-5 px-12 rounded-2xl text-xl transition-all transform hover:scale-105 shadow-2xl"
                  >
                    Começar Meu Projeto Agora
                  </a>
                  <Link 
                    to="/portfolio" 
                    className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold py-5 px-12 rounded-2xl text-xl transition-all flex items-center justify-center gap-2"
                  >
                    Portfólio <ArrowRight size={20}/>
                  </Link>
                </div>
             </div>
             <div className="lg:w-2/5 w-full animate-fade-in delay-300">
                <LeadForm />
             </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
           <div className="grid md:grid-cols-3 gap-10">
              {[
                { icon: <Zap className="text-brand-accent" />, title: "Entrega em 48h", desc: "Seu site pronto para vender em tempo recorde absoluto." },
                { icon: <BarChart className="text-brand-primary" />, title: "SEO Local Dominante", desc: "Apareça nos primeiros resultados do Google Maps e buscas locais." },
                { icon: <Smartphone className="text-purple-600" />, title: "Mobile First", desc: "Experiência perfeita em smartphones de qualquer geração." },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-2xl hover:shadow-brand-primary/5 transition-all group">
                   <div className="mb-8 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                   <h3 className="text-2xl font-black text-brand-dark mb-4">{item.title}</h3>
                   <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Infinite Ticker for SEO Locations */}
      <LocationTicker />

      {/* Method Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="lg:w-1/2">
                 <VideoPlayer />
              </div>
              <div className="lg:w-1/2">
                 <h2 className="text-4xl md:text-6xl font-black text-brand-dark mb-8 tracking-tighter">O Método Suprema para Resultados Reais</h2>
                 <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                   Nossa engenharia web foca em 3 pilares: **Velocidade de Carregamento**, **SEO Semântico** e **Copywriting de Conversão**. Não é apenas um site, é o seu melhor ativo de vendas.
                 </p>
                 <ul className="space-y-4">
                    <li className="flex items-center gap-4 text-brand-dark font-bold"><CheckCircle className="text-brand-primary"/> Rankeamento Orgânico Acelerado</li>
                    <li className="flex items-center gap-4 text-brand-dark font-bold"><CheckCircle className="text-brand-primary"/> Integração Total com WhatsApp Business</li>
                    <li className="flex items-center gap-4 text-brand-dark font-bold"><CheckCircle className="text-brand-primary"/> Google My Business Otimizado</li>
                 </ul>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};
