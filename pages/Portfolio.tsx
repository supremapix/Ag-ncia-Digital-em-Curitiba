import React from 'react';
import { ExternalLink, TrendingUp, BarChart, CheckCircle, Smartphone } from 'lucide-react';
import { LeadForm } from '../components/LeadForm';
import { VideoPlayer } from '../components/VideoPlayer';
import { Accordion } from '../components/Accordion';

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
  { url: "https://jetron.com.br", title: "Jetron", category: "Indústria Tecnológica" },
  { url: "https://fotometal.com.br", title: "Fotometal", category: "Indústria Gráfica" },
  { url: "https://www.moraesacrilicos.com.br", title: "Moraes Acrílicos", category: "Produtos Personalizados" },
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

      {/* Vídeo */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-4">Veja Nossos Projetos em Ação</h2>
            <p className="text-gray-300 text-center mb-8 text-lg">Conheça a metodologia que transforma sites em máquinas de vendas para empresas de Curitiba, Araucária, São José dos Pinhais e toda região metropolitana.</p>
            <VideoPlayer />
            <div className="text-center mt-8">
              <a href="https://wa.me/5541987001004" className="inline-flex items-center gap-2 bg-brand-accent hover:bg-yellow-500 text-brand-dark font-bold py-4 px-10 rounded-full text-lg transition-all shadow-lg">
                Criar Meu Projeto Agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Texto 1 - Resultados Comprovados */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Resultados de SEO Curitiba" className="rounded-xl shadow-2xl" />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-6">Resultados Reais, Clientes Satisfeitos</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cada projeto do nosso portfólio representa uma <strong>história de sucesso real</strong>. Empresas de <strong>Curitiba</strong>, <strong>Araucária</strong>, <strong>São José dos Pinhais</strong>, <strong>Colombo</strong>, <strong>Pinhais</strong> e região metropolitana que confiaram na Suprema Site e hoje colhem os frutos de uma presença digital profissional.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nossos clientes experimentam um <strong>aumento médio de 300% na visibilidade do Google</strong> em 12 meses. Isso significa mais acessos, mais leads qualificados e, consequentemente, mais vendas. Trabalhamos com SEO para <strong>Google</strong>, <strong>Bing</strong>, <strong>Yahoo</strong> e mais de 300 buscadores internacionais.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Desde sites institucionais simples até lojas virtuais complexas, cada projeto recebe o mesmo nível de dedicação, qualidade técnica e foco em resultados. Veja acima alguns dos nossos trabalhos nos mais diversos segmentos: beleza, imobiliária, construção civil, jurídico, decoração, manutenção, tecnologia, hotelaria e muito mais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Texto 2 - Metodologia */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-6">Nossa Metodologia de Sucesso</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  O que diferencia nossos projetos é a <strong>metodologia exclusiva</strong> que desenvolvemos ao longo de mais de 10 anos de experiência. Não fazemos sites genéricos; criamos soluções digitais estratégicas e personalizadas para empresas do <strong>Batel</strong>, <strong>Centro</strong>, <strong>Água Verde</strong>, <strong>CIC</strong>, <strong>Portão</strong>, <strong>Boqueirão</strong> e todos os bairros de Curitiba.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cada projeto passa por: análise profunda do mercado e concorrência, pesquisa de palavras-chave rentáveis, planejamento de arquitetura da informação, design focado em conversão, desenvolvimento com código otimizado, testes rigorosos em múltiplos dispositivos, implementação de SEO técnico avançado e treinamento completo para o cliente.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Nossos sites não são bonitos apenas esteticamente, são <strong>máquinas de conversão</strong> projetadas para transformar visitantes em clientes. Por isso nossos clientes conseguem resultados tão expressivos e duradouros.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Metodologia de Criação de Sites" className="rounded-xl shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Texto 3 - Segmentos Atendidos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Diversos Segmentos Atendidos" className="rounded-xl shadow-2xl" />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-6">Experiência em Todos os Segmentos</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nossa expertise multissetorial nos permite atender com excelência <strong>qualquer tipo de negócio</strong>. Já desenvolvemos projetos para: escritórios de advocacia, clínicas médicas e odontológicas, salões de beleza e barbearias, imobiliárias, construtoras e engenheiros, restaurantes e bares, academias e personal trainers, lojas de roupas e acessórios, prestadores de serviços (encanadores, eletricistas, chaveiros), indústrias, consultórios de psicologia, pet shops, pousadas e hotéis, escolas e cursos, e muito mais.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Atendemos empresas de todos os portes em <strong>Santa Felicidade</strong>, <strong>Pinheirinho</strong>, <strong>Bacacheri</strong>, <strong>Cajuru</strong>, <strong>Xaxim</strong>, <strong>Bigorrilho</strong>, <strong>Rebouças</strong>, <strong>Ecoville</strong>, <strong>Fazenda Rio Grande</strong>, <strong>Almirante Tamandaré</strong>, <strong>Campo Largo</strong>, <strong>Piraquara</strong> e toda região.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Independente do seu segmento, temos know-how para criar a solução digital perfeita para seu negócio. Cada mercado tem suas particularidades, e nossa experiência garante que seu projeto tenha todas as funcionalidades e estratégias necessárias para se destacar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Texto 4 - Depoimentos e Garantias */}
      <section className="py-16 bg-gradient-to-br from-brand-dark to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">O Que Nossos Clientes Dizem</h2>
            <p className="text-gray-300 leading-relaxed mb-12 text-lg">
              A satisfação dos nossos clientes é nossa maior recompensa. Empresas que nos escolheram não apenas ficaram satisfeitas com a qualidade técnica dos sites, mas principalmente com o <strong>aumento real de vendas e visibilidade</strong> que experimentaram.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                <div className="text-brand-accent text-5xl font-bold mb-2">300%</div>
                <p className="text-gray-300">Aumento médio de visibilidade no Google em 12 meses</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                <div className="text-brand-accent text-5xl font-bold mb-2">48h</div>
                <p className="text-gray-300">Prazo médio de entrega para sites Express</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                <div className="text-brand-accent text-5xl font-bold mb-2">+10</div>
                <p className="text-gray-300">Anos de experiência e centenas de projetos entregues</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-8">
              Garantimos qualidade técnica, cumprimento de prazos, suporte humanizado e, principalmente, resultados reais. Não fazemos promessas vazias: fazemos sites que realmente <strong>vendem</strong> e <strong>geram leads</strong> para seu negócio em Curitiba e região.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-dark text-center mb-12">Dúvidas sobre Nossos Projetos</h2>
            <Accordion items={[
              {
                question: "Posso ver os sites antes de contratar?",
                answer: "Sim! Todos os sites listados acima estão no ar e podem ser visitados. Clique em cada projeto para ver o trabalho completo. Também podemos agendar uma reunião para apresentar outros cases específicos do seu segmento."
              },
              {
                question: "Quanto custa um site igual aos do portfólio?",
                answer: "Os valores variam conforme complexidade, número de páginas e funcionalidades. Sites institucionais Express começam a partir de R$ 997. Lojas virtuais a partir de R$ 2.997. Entre em contato para um orçamento personalizado sem compromisso."
              },
              {
                question: "Vocês fazem manutenção dos sites após entrega?",
                answer: "Sim! Oferecemos 30 dias de suporte gratuito e planos de manutenção mensal a partir de R$ 97. A manutenção inclui atualizações, backups, suporte técnico e alterações de conteúdo."
              },
              {
                question: "Meu site também vai aparecer no Google como esses?",
                answer: "Sim! Todos os nossos sites são otimizados para SEO desde o desenvolvimento. Com nossa metodologia, você terá as mesmas chances de ranquear bem no Google, Bing, Yahoo e outros buscadores. O tempo de posicionamento varia conforme concorrência da palavra-chave."
              },
              {
                question: "Posso solicitar mudanças durante o desenvolvimento?",
                answer: "Sim! Trabalhamos de forma colaborativa e transparente. Você acompanha o desenvolvimento e pode solicitar ajustes. Nosso objetivo é entregar exatamente o que você precisa para seu negócio ter sucesso online."
              },
              {
                question: "Vocês trabalham com redesign de sites antigos?",
                answer: "Sim! Se você já tem um site desatualizado, lento ou que não gera resultados, podemos fazer um redesign completo modernizando visual, melhorando performance e implementando SEO avançado. Muitos dos sites do nosso portfólio foram redesigns de sucesso."
              }
            ]} />
          </div>
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
                  Solicite agora e ganhe a otimização inicial para o Google, Bing e Yahoo.
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