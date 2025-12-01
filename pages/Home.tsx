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
        <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
             <div className="lg:w-3/5 text-center lg:text-left">
                <span className="text-brand-accent font-bold tracking-widest uppercase mb-4 inline-block animate-pulse">Suprema Sites Express</span>
                <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
                  Criação de Sites <span className="text-brand-primary">Profissionais</span> em Curitiba e Região
                </h1>
                <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                  Sites entregues em <strong>6h a 48h</strong>. Transforme visitantes em clientes com um site rápido, moderno e que aumenta sua visibilidade em até <strong>300%</strong>.
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
      <section className="py-16 bg-gray-900 text-white border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Veja a Suprema Mídia em Ação</h2>
            <p className="text-gray-400">Entenda por que somos a escolha número 1 em criação de sites rápidos em Curitiba.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <VideoPlayer />
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Escolha o Modelo Ideal</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Compare nossos planos e veja qual se encaixa melhor na necessidade do seu negócio hoje.</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full max-w-5xl mx-auto border-collapse bg-white shadow-xl rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="p-4 md:p-6 text-left w-1/3">Recursos</th>
                  <th className="p-4 md:p-6 text-center w-1/3 border-l border-gray-700 bg-gray-800">
                    <span className="block text-sm text-gray-400 font-normal uppercase tracking-wider">Básico</span>
                    <span className="block text-xl font-bold mt-1">Landing Page Express</span>
                  </th>
                  <th className="p-4 md:p-6 text-center w-1/3 border-l border-gray-700 relative">
                    <span className="absolute top-0 right-0 bg-brand-accent text-brand-dark text-[10px] font-bold px-2 py-1 uppercase">Mais Vendido</span>
                    <span className="block text-sm text-brand-accent font-normal uppercase tracking-wider">Completo</span>
                    <span className="block text-xl font-bold mt-1">Institucional Premium</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { feature: "Prazo de Entrega", basic: "6h a 24h", premium: "24h a 48h", highlight: true },
                  { feature: "Páginas Inclusas", basic: "1 Página (One Page)", premium: "Até 5 Páginas", highlight: false },
                  { feature: "Otimização SEO Local", basic: "Básica", premium: "Avançada + Google Meu Negócio", highlight: false },
                  { feature: "Responsivo (Mobile)", basic: true, premium: true, highlight: false },
                  { feature: "Botão WhatsApp Flutuante", basic: true, premium: true, highlight: false },
                  { feature: "Hospedagem Premium", basic: "Inclusa 1 ano", premium: "Inclusa 1 ano", highlight: false },
                  { feature: "Certificado SSL (Segurança)", basic: true, premium: true, highlight: false },
                  { feature: "Integração Redes Sociais", basic: true, premium: true, highlight: false },
                  { feature: "Painel Gerenciável", basic: false, premium: true, highlight: false },
                  { feature: "Blog para Conteúdo", basic: false, premium: true, highlight: false },
                  { feature: "Formulário de Leads", basic: true, premium: true, highlight: false },
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 text-gray-700 font-medium">{row.feature}</td>
                    <td className="p-4 text-center border-l border-gray-200">
                      {typeof row.basic === 'boolean' ? 
                        (row.basic ? <CheckCircle className="inline text-green-500" size={20}/> : <X className="inline text-gray-300" size={20}/>) : 
                        <span className={row.highlight ? "font-bold text-brand-primary" : "text-gray-600"}>{row.basic}</span>
                      }
                    </td>
                    <td className="p-4 text-center border-l border-gray-200 bg-blue-50/30">
                       {typeof row.premium === 'boolean' ? 
                        (row.premium ? <CheckCircle className="inline text-green-500" size={20}/> : <X className="inline text-gray-300" size={20}/>) : 
                        <span className={row.highlight ? "font-bold text-brand-primary" : "text-gray-800"}>{row.premium}</span>
                      }
                    </td>
                  </tr>
                ))}
                <tr className="bg-gray-50">
                  <td className="p-4"></td>
                  <td className="p-6 text-center border-l border-gray-200">
                    <a href="https://wa.me/5541987001004" className="inline-block bg-white border-2 border-brand-primary text-brand-primary font-bold py-2 px-6 rounded-full hover:bg-brand-primary hover:text-white transition-colors">
                      Orçar Básico
                    </a>
                  </td>
                  <td className="p-6 text-center border-l border-gray-200 bg-blue-50/30">
                    <a href="https://wa.me/5541987001004" className="inline-block bg-brand-accent text-brand-dark font-bold py-2 px-6 rounded-full hover:bg-yellow-500 transition-colors shadow-lg">
                      Orçar Premium
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-brand-light">
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
              <div key={idx} className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-shadow group">
                <div className="text-brand-primary mb-4 group-hover:text-brand-accent transition-colors">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-brand-dark">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Locations Grid (Optimized for Mobile) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Atendemos Curitiba e Toda Região Metropolitana</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A Suprema Sites Express leva soluções digitais para o seu bairro e cidade. Selecione sua localidade abaixo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Cidades - Scrollable Box */}
            <div className="bg-gray-50 rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-[400px]">
               <div className="bg-brand-primary/5 p-6 border-b border-gray-100">
                 <h3 className="text-xl font-bold text-brand-primary flex items-center gap-2">
                   <Globe size={24} />
                   Cidades da Região
                 </h3>
                 <p className="text-xs text-gray-500 mt-1">Role para ver todas as cidades</p>
               </div>
               
               <div className="flex-1 overflow-y-auto p-6 custom-scrollbar bg-gray-50/50">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                   {cities.map((city) => (
                     <Link 
                       key={city} 
                       to={`/site-em-${slugify(city)}`}
                       className="group flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-100 hover:border-brand-primary hover:shadow-md transition-all"
                     >
                       <div className="bg-blue-50 text-brand-primary p-1.5 rounded-full group-hover:bg-brand-primary group-hover:text-white transition-colors">
                          <ChevronRight size={14} />
                       </div>
                       <span className="text-gray-700 font-medium text-sm group-hover:text-brand-dark">{city}</span>
                     </Link>
                   ))}
                 </div>
               </div>
            </div>

            {/* Bairros - Scrollable Box */}
            <div className="bg-gray-50 rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-[400px]">
               <div className="bg-brand-primary/5 p-6 border-b border-gray-100">
                 <h3 className="text-xl font-bold text-brand-primary flex items-center gap-2">
                   <MapPin size={24} />
                   Bairros de Curitiba
                 </h3>
                 <p className="text-xs text-gray-500 mt-1">Role para ver todos os bairros</p>
               </div>
               
               <div className="flex-1 overflow-y-auto p-6 custom-scrollbar bg-gray-50/50">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                   {neighborhoods.map((bairro) => (
                     <Link 
                       key={bairro} 
                       to={`/site-em-${slugify(bairro)}`}
                       className="group flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-100 hover:border-brand-primary hover:shadow-md transition-all"
                     >
                       <div className="bg-blue-50 text-brand-primary p-1.5 rounded-full group-hover:bg-brand-primary group-hover:text-white transition-colors">
                          <Search size={14} />
                       </div>
                       <span className="text-gray-700 font-medium text-sm group-hover:text-brand-dark">{bairro}</span>
                     </Link>
                   ))}
                 </div>
               </div>
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