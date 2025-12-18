import React from 'react';
import { ExternalLink, TrendingUp, BarChart, CheckCircle, Smartphone } from 'lucide-react';
import { LeadForm } from '../components/LeadForm';

const projects = [
  { url: "https://www.barbeiro.curitiba.br/", title: "Barbeiro Curitiba", category: "Beleza e Estética" },
  { url: "https://www.gouveiacuritiba.com.br/", title: "Gouveia Imóveis", category: "Imobiliária" },
  { url: "https://www.engenhariadopaver.com.br/", title: "Engenharia do Paver", category: "Construção Civil" },
  { url: "https://www.mundodoscalheiros.com.br/", title: "Mundo dos Calheiros", category: "Indústria e Serviços" },
  { url: "https://www.atuarios.com.br/", title: "Atuários Independentes", category: "Consultoria" },
  { url: "https://rvmpersianas.app.br", title: "RVM Persianas App", category: "Decoração" },
  { url: "https://servicoshidraulicosadp.app.br/", title: "ADP Hidráulica", category: "Manutenção 24h" },
  { url: "https://www.cicarelli.adv.br/", title: "Cicarelli Advogados", category: "Jurídico" },
  { url: "https://rvmpersianas.com.br/santa-catarina/blumenau.html", title: "RVM Blumenau", category: "SEO Local" },
  { url: "https://burgerfilms.com.br/", title: "Burger Films", category: "Produtora de Vídeo" },
  { url: "https://pousadaviladitalia.com.br", title: "Pousada Vila d'Italia", category: "Turismo e Hotelaria" },
  { url: "https://sc.omegarevestimentos.com.br/", title: "Omega Revestimentos", category: "Acabamentos" },
  { url: "https://eurocalhas.supremasite.com.br/", title: "Euro Calhas", category: "Serviços Express" },
  { url: "https://encanadorpalladium24h.supremamidia.com", title: "Encanador Palladium", category: "Emergência 24h" },
  { url: "https://encanadores24h.desentopeadp.com.br", title: "Encanadores 24h", category: "Desentupidora" },
  { url: "https://desentopeadp.com.br", title: "Desentope ADP", category: "Desentupidora" },
  { url: "https://assistencia.lojabyltech.com.br", title: "Byltech Assistência", category: "Tecnologia" },
  { url: "https://www.byltech.com.br", title: "Byltech Loja", category: "E-commerce" },
  { url: "https://www.jetron.com.br", title: "Jetron", category: "Indústria Tecnológica" },
  { url: "https://fotometal.com.br", title: "Fotometal", category: "Indústria Gráfica" },
  { url: "https://www.moraesacrilicos.com.br", title: "Moraes Acrílicos", category: "Produtos Personalizados" },
  { url: "https://ateliebeleza.app.br", title: "Ateliê Beleza", category: "Beleza e Estética" },
  { url: "https://www.ehssaude.com.br", title: "EHS Saúde", category: "Saúde e Bem-estar" },
  { url: "https://www.acquateccalhas.com.br", title: "Acquatec Calhas", category: "Construção Civil" },
  { url: "https://www.jcclimatizar.pro/", title: "JC Climatizar", category: "Climatização" },
  { url: "https://www.adpservicos.app.br", title: "ADP Serviços", category: "Serviços Gerais" },
  { url: "https://www.3avia.social.br", title: "3ª Via Social", category: "Social Media" },
  { url: "https://bcrefrigeracaosc.com.br", title: "BC Refrigeração SC", category: "Refrigeração" },
  { url: "https://www.desentopeadp.com.br", title: "Desentope ADP Principal", category: "Desentupidora" },
  { url: "https://omegarevestimentos.com.br", title: "Omega Revestimentos PR", category: "Acabamentos" },
  { url: "https://www.alumimec.com.br", title: "Alumimec", category: "Esquadrias" },
  { url: "https://www.eletronicadosgames.com.br/", title: "Eletrônica dos Games", category: "Games e Tecnologia" },
  { url: "https://bio.supremamidia.com.br/", title: "Suprema Mídia Bio", category: "Link Bio" },
  { url: "https://lp.carpluscwb.com.br", title: "Car Plus CWB", category: "Automotivo" },
  { url: "https://royalcleanlavanderia.top", title: "Royal Clean Lavanderia", category: "Lavanderia" },
  { url: "https://www.decellyss.com.br", title: "Decellyss", category: "Beleza e Estética" },
  { url: "https://barbeariabarbercue.shop/", title: "Barbearia Barbercue", category: "Barbearia" },
  { url: "https://divasdamicro.app.br", title: "Divas da Micro", category: "Micropigmentação" },
];

export const Portfolio: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-brand-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Nossos Casos de <span className="text-brand-accent">Sucesso</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Confira empresas reais que transformaram sua presença digital. 
            Nossos clientes experimentam um aumento médio de <strong className="text-green-400">300% na visibilidade do Google</strong> ao ano.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <a 
              key={idx} 
              href={project.url} 
              target="_blank" 
              rel="noreferrer"
              className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:border-brand-primary transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="h-48 relative overflow-hidden flex items-center justify-center bg-gray-800">
                {/* Simulated Screenshot/Preview Area */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-dark to-gray-800 opacity-90 group-hover:scale-105 transition-transform duration-500"></div>
                <div className="relative z-10 text-center p-4">
                   <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm group-hover:bg-brand-accent transition-colors">
                      <span className="text-2xl font-bold text-white group-hover:text-brand-dark">{project.title.charAt(0)}</span>
                   </div>
                   <span className="text-xs font-bold text-white/80 uppercase tracking-widest">{project.category}</span>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-brand-primary/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                   <span className="text-white font-bold flex items-center gap-2 border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-brand-primary transition-colors">
                     Visitar Site <ExternalLink size={16} />
                   </span>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors">
                  {project.title}
                </h3>
                
                <div className="mb-4">
                   <p className="text-gray-600 text-sm leading-relaxed border-l-4 border-green-500 pl-3">
                     <strong>Projeto Realizado:</strong> Otimização SEO avançada e aumento de visibilidade no Google em <span className="text-green-600 font-bold">300% ao ano</span>.
                   </p>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100 text-xs text-gray-500 flex flex-wrap gap-2">
                  <span className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded">
                    <TrendingUp size={12} /> Crescimento
                  </span>
                  <span className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded">
                    <CheckCircle size={12} /> SEO
                  </span>
                  <span className="flex items-center gap-1 bg-purple-50 text-purple-700 px-2 py-1 rounded">
                    <Smartphone size={12} /> Mobile
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="bg-brand-light py-16">
        <div className="container mx-auto px-4">
           <div className="flex flex-col lg:flex-row items-center gap-12 bg-white p-8 md:p-12 rounded-2xl shadow-xl border-t-4 border-brand-accent">
             <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-brand-dark mb-4">Quer entrar para essa lista de sucesso?</h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Seu site pode estar no ar em <strong>menos de 48 horas</strong>. Não perca mais clientes para a concorrência.
                  Solicite agora e ganhe a otimização inicial para o Google.
                </p>
                <a 
                  href="https://wa.me/5541987001004" 
                  className="bg-brand-accent hover:bg-yellow-500 text-brand-dark font-bold py-4 px-8 rounded-lg text-lg inline-flex items-center gap-2 shadow-lg transition-transform hover:-translate-y-1"
                >
                  <BarChart size={24} />
                  Aumentar Minha Visibilidade
                </a>
             </div>
             <div className="lg:w-1/2 w-full">
               <LeadForm />
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};