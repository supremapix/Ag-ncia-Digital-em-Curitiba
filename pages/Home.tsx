import React from 'react';
import { CheckCircle, Rocket, BarChart, Smartphone, Globe, Shield, MapPin, ChevronRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cities, neighborhoods, slugify } from '../data/locations';
import { LeadForm } from '../components/LeadForm';
import { VideoPlayer } from '../components/VideoPlayer';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-brand-dark text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
             <div className="lg:w-3/5 text-center lg:text-left">
                <span className="text-brand-accent font-bold tracking-widest uppercase mb-4 inline-block">Suprema Sites Express</span>
                <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
                  Criação de Sites <span className="text-brand-primary">Profissionais</span> em Curitiba e Região
                </h1>
                <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                  Transforme visitantes em clientes com um site rápido, moderno e otimizado para o Google. Sites Expresso prontos em 6h a 48h.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a 
                    href="https://wa.me/5541987001004" 
                    className="bg-brand-accent hover:bg-yellow-500 text-brand-dark font-bold py-4 px-8 rounded-lg text-lg transition-transform hover:-translate-y-1 shadow-lg shadow-yellow-500/20"
                  >
                    Solicitar Orçamento
                  </a>
                  <Link 
                    to="/portfolio" 
                    className="bg-transparent border-2 border-white hover:bg-white hover:text-brand-dark text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
                  >
                    Ver Portfólio
                  </Link>
                </div>
             </div>
             <div className="lg:w-2/5 w-full">
                <LeadForm />
             </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-4">Veja a Suprema Mídia em Ação</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Confira no vídeo abaixo como nossa metodologia exclusiva de criação de sites aumenta sua visibilidade e atrai mais clientes.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <VideoPlayer />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-brand-primary font-bold tracking-wider uppercase text-sm">Por que nos escolher?</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mt-2">Diferenciais que geram resultados</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Rocket size={40} />, title: 'Alta Performance', desc: 'Sites extremamente rápidos que carregam em segundos, essenciais para não perder clientes.' },
              { icon: <Smartphone size={40} />, title: '100% Responsivo', desc: 'Seu site perfeito em celulares, tablets e computadores. A experiência do usuário em primeiro lugar.' },
              { icon: <BarChart size={40} />, title: 'Otimizado para SEO', desc: 'Estrutura preparada para o Google. Apareça quando seus clientes procurarem por você.' },
              { icon: <Globe size={40} />, title: 'Domínio e Hospedagem', desc: 'Auxiliamos em todo o processo técnico. Você foca no seu negócio, nós cuidamos da tecnologia.' },
              { icon: <Shield size={40} />, title: 'Segurança Total', desc: 'Certificado SSL incluso e proteção contra ataques. Dados da sua empresa e clientes protegidos.' },
              { icon: <CheckCircle size={40} />, title: 'Suporte Humanizado', desc: 'Equipe local em Curitiba pronta para atender. Fale com pessoas reais, não robôs.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-xl border border-slate-100 hover:shadow-xl transition-shadow group">
                <div className="text-brand-primary mb-4 group-hover:text-brand-accent transition-colors">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-brand-dark">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Locations Grid */}
      <section className="py-16 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Atendemos Curitiba e Toda Região Metropolitana</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A Suprema Sites Express leva soluções digitais para o seu bairro e cidade. Encontre sua localidade abaixo e veja nossas condições especiais.
            </p>
          </div>

          {/* Cidades */}
          <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
             <h3 className="text-xl font-bold text-brand-primary mb-6 flex items-center gap-2">
               <MapPin size={24} />
               Cidades da Região Metropolitana
             </h3>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
               {cities.map((city) => (
                 <Link 
                   key={city} 
                   to={`/site-em-${slugify(city)}`}
                   className="flex items-center gap-2 text-gray-600 hover:text-brand-primary transition-colors text-sm hover:underline"
                 >
                   <ChevronRight size={14} className="text-brand-accent" />
                   Criação de sites em {city}
                 </Link>
               ))}
             </div>
          </div>

          {/* Bairros */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
             <h3 className="text-xl font-bold text-brand-primary mb-6 flex items-center gap-2">
               <MapPin size={24} />
               Bairros de Curitiba
             </h3>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
               {neighborhoods.map((bairro) => (
                 <Link 
                   key={bairro} 
                   to={`/site-em-${slugify(bairro)}`}
                   className="flex items-center gap-2 text-gray-600 hover:text-brand-primary transition-colors text-sm hover:underline"
                 >
                   <ChevronRight size={14} className="text-brand-accent" />
                   Sites no {bairro}
                 </Link>
               ))}
             </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para digitalizar seu negócio?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Solicite um orçamento sem compromisso e descubra como podemos alavancar suas vendas através da internet.
          </p>
          <a 
            href="https://wa.me/5541987001004" 
            className="inline-flex items-center gap-2 bg-white text-brand-primary font-bold py-4 px-10 rounded-full text-lg hover:bg-brand-accent hover:text-white transition-all shadow-lg"
          >
            <Smartphone size={24} />
            Falar com Especialista
          </a>
        </div>
      </section>
    </div>
  );
};