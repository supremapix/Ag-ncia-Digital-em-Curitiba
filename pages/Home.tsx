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
            <p className="text-gray-400 max-w-2xl mx-auto">Descubra como nossos sites profissionais ajudam empresas de Curitiba, Araucária, São José dos Pinhais, Pinhais e toda região metropolitana a conquistarem as primeiras posições no Google, Bing e Yahoo. Com otimização para mais de 300 buscadores, seu negócio alcança visibilidade máxima online.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <VideoPlayer />
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://wa.me/5541987001004"
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-yellow-500 text-brand-dark font-bold py-4 px-10 rounded-full text-lg transition-all shadow-lg"
            >
              Quero Meu Site Agora
            </a>
          </div>
        </div>
      </section>

      {/* Texto 1 - Criação de Sites */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Criação de Sites Profissionais em Curitiba" className="rounded-xl shadow-2xl" />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-6">Criação de Sites que Vendem 24 Horas por Dia</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sua empresa precisa estar online para competir no mercado atual. Na <strong>Suprema Sites Express</strong>, criamos sites profissionais para empresas de <strong>Curitiba</strong>, <strong>Batel</strong>, <strong>Água Verde</strong>, <strong>Boqueirão</strong>, <strong>Centro</strong> e toda região metropolitana incluindo <strong>Colombo</strong>, <strong>Almirante Tamandaré</strong> e <strong>Campo Largo</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nossos sites são desenvolvidos com as mais modernas tecnologias, garantindo velocidade de carregamento em menos de 3 segundos, design responsivo perfeito em todos os dispositivos e estrutura otimizada para SEO desde o primeiro dia.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Diferente de construtores de sites genéricos, cada projeto recebe atenção personalizada, com textos persuasivos, imagens profissionais e integração completa com WhatsApp, redes sociais e Google Meu Negócio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Texto 2 - Lojas Virtuais */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-6">Lojas Virtuais Completas: Venda para Todo o Brasil</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sua <strong>loja virtual profissional</strong> pronta para vender! Desenvolvemos e-commerces completos para empresas do <strong>CIC</strong>, <strong>Portão</strong>, <strong>Santa Felicidade</strong>, <strong>Pinheirinho</strong> e todas as regiões de Curitiba e cidades vizinhas como <strong>Fazenda Rio Grande</strong> e <strong>Piraquara</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nossas lojas incluem: painel administrativo intuitivo, integração com gateways de pagamento (Pix, cartões de crédito e débito), cálculo automático de frete pelos Correios e transportadoras, controle de estoque em tempo real, sistema de cupons de desconto e relatórios detalhados de vendas.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Aumente seu faturamento vendendo 24 horas por dia, 7 dias por semana. Seus clientes compram quando quiserem, de onde estiverem, e você gerencia tudo de forma simples e profissional.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Lojas Virtuais E-commerce Curitiba" className="rounded-xl shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Texto 3 - SEO e Rankeamento */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800" alt="SEO Google Bing Yahoo Curitiba" className="rounded-xl shadow-2xl" />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-6">Ranqueamento no Google, Bing e Yahoo: Mais de 300 Buscadores</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  De nada adianta ter um site bonito se seus clientes não conseguem encontrá-lo. Nossa <strong>otimização SEO avançada</strong> coloca sua empresa nas primeiras posições dos principais buscadores: <strong>Google</strong>, <strong>Bing</strong>, <strong>Yahoo</strong> e mais de 300 plataformas de busca.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Trabalhamos com SEO local para bairros como <strong>Bacacheri</strong>, <strong>Cajuru</strong>, <strong>Xaxim</strong>, <strong>Bigorrilho</strong>, <strong>Rebouças</strong> e cidades da região metropolitana. Quando alguém busca pelo seu serviço ou produto, sua empresa aparece!
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Inclui: pesquisa de palavras-chave estratégicas, otimização de títulos e descrições, criação de sitemaps XML, configuração do Google Search Console, linkagem interna inteligente, velocidade de carregamento otimizada e muito mais. Nossos clientes experimentam aumento médio de 300% na visibilidade online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Texto 4 - Landing Pages */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-6">Landing Pages de Alta Conversão</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Landing Pages profissionais</strong> desenvolvidas para converter visitantes em clientes. Ideais para campanhas de marketing digital, lançamentos de produtos, captura de leads e eventos. Atendemos empresas do <strong>Ecoville</strong>, <strong>Alto da XV</strong>, <strong>Juvevê</strong>, <strong>Cristo Rei</strong> e toda Curitiba.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cada landing page é construída com copywriting persuasivo, design focado em ação, formulários otimizados, botões de call-to-action estrategicamente posicionados e integração com ferramentas de automação de marketing.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Perfeitas para tráfego pago (Google Ads, Facebook Ads, Instagram Ads) e campanhas orgânicas. Maximizamos sua taxa de conversão e reduzimos seu custo de aquisição de clientes. Páginas prontas em 6 a 48 horas!
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Landing Pages Curitiba Alta Conversão" className="rounded-xl shadow-2xl" />
              </div>
            </div>
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

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark text-center mb-4">Dúvidas Frequentes sobre Criação de Sites</h2>
            <p className="text-gray-600 text-center mb-12 text-lg">Respondemos as principais perguntas sobre nossos serviços</p>
            <Accordion items={[
              {
                question: "Quanto tempo leva para criar um site profissional?",
                answer: "Sites institucionais e landing pages no modelo Express ficam prontos entre 6 e 48 horas úteis após o envio do material (textos, imagens, logotipo). Para lojas virtuais e projetos personalizados, o prazo médio é de 7 a 15 dias úteis. Trabalhamos com agilidade sem comprometer a qualidade."
              },
              {
                question: "Como funciona a otimização para Google, Bing e Yahoo?",
                answer: "Implementamos SEO técnico completo: meta-tags otimizadas, estrutura semântica HTML5, sitemap XML, robots.txt configurado, velocidade de carregamento otimizada, responsividade mobile, URLs amigáveis e integração com Google Search Console e Bing Webmaster Tools. Isso permite que seu site seja indexado e ranqueado nos principais buscadores, incluindo mais de 300 plataformas de busca globais."
              },
              {
                question: "O que está incluído na criação de lojas virtuais?",
                answer: "Nossas lojas virtuais incluem: painel administrativo completo, cadastro ilimitado de produtos, integração com meios de pagamento (Pix, cartões), cálculo automático de frete (Correios e transportadoras), sistema de cupons de desconto, controle de estoque, área de clientes, certificado SSL de segurança, painel de relatórios e suporte técnico. Tudo pronto para você começar a vender imediatamente."
              },
              {
                question: "Vocês atendem em quais regiões?",
                answer: "Atendemos toda Curitiba (Batel, Centro, Água Verde, Boqueirão, CIC, Portão, Santa Felicidade, Pinheirinho e todos os bairros) e região metropolitana (Araucária, São José dos Pinhais, Colombo, Pinhais, Fazenda Rio Grande, Almirante Tamandaré, Campo Largo, Piraquara e todas as cidades vizinhas). Também atendemos clientes de todo o Brasil através de atendimento 100% online."
              },
              {
                question: "Como funciona o ranqueamento em mais de 300 buscadores?",
                answer: "Além do Google, Bing e Yahoo, existem centenas de buscadores especializados e regionais ao redor do mundo. Nosso trabalho de SEO técnico e estruturação correta do código faz com que seu site seja automaticamente indexado por esses buscadores secundários, aumentando exponencialmente sua visibilidade online e chances de ser encontrado por potenciais clientes."
              },
              {
                question: "Landing pages convertem mais que sites normais?",
                answer: "Sim! Landing pages são páginas focadas em uma única ação (venda, cadastro, contato), sem distrações. Com copywriting persuasivo, design orientado à conversão e CTAs estratégicos, as taxas de conversão podem ser de 3 a 10 vezes maiores que páginas tradicionais. São ideais para campanhas de Google Ads, Facebook Ads e lançamentos de produtos."
              }
            ]} />
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