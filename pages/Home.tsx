import React, { useEffect } from 'react';
import { 
  Globe, ShoppingCart, Smartphone, Cpu, Bot, TrendingUp, CheckCircle, 
  Zap, ArrowRight, ShieldCheck, Sparkles, Clock, Star, Users, MapPin, 
  Layers, Lock, Phone, MessageSquare, BarChart3, ChevronRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { LeadForm } from '../components/LeadForm';
import { LocationTicker } from '../components/LocationTicker';
import { FAQAccordionTicker } from '../components/FAQAccordionTicker';
import { StaticFAQ } from '../components/StaticFAQ';
import { ReviewsTicker } from '../components/ReviewsTicker';

import { TypewriterText } from '../src/components/TypewriterText';
import { PERSUASIVE_PHRASES } from '../src/constants/phrases';

export const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Suprema Sites Express | Criação de Sites, Sistemas Web, Apps e IA";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Especialistas em Criação de Sites Profissionais, Lojas Virtuais, Sistemas Web (ERP/CRM), Aplicativos Android/iOS, Agentes de IA e SEO em todo o Brasil. Entrega expressa em 48h!");
    }

    // Organization & LocalBusiness Schema
    const entitySchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": "https://www.supremasite.com.br/#organization",
          "name": "Suprema Sites Express",
          "alternateName": "Suprema Mídia",
          "url": "https://www.supremasite.com.br/",
          "telephone": "+5541987001004",
          "email": "supremamidiabatel@gmail.com",
          "priceRange": "$$",
          "image": "https://www.supremamidia.com.br/images/fachada-suprema-midia-estrutura.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Sete de Setembro, 2775 - Batel",
            "addressLocality": "Curitiba",
            "addressRegion": "PR",
            "postalCode": "80230-010",
            "addressCountry": "BR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -25.4382,
            "longitude": -49.2731
          },
          "areaServed": [
            { "@type": "City", "name": "Curitiba" },
            { "@type": "State", "name": "Paraná" },
            { "@type": "Country", "name": "Brasil" }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Serviços Digitais e Tecnologia em Curitiba",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Agência SEO Curitiba" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Agência de Marketing Digital Curitiba" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads & Tráfego Pago Curitiba" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Local & Google Maps Curitiba" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Criação de Sites Profissionais em Curitiba" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Inteligência Artificial, GEO & Automação Curitiba" } }
            ]
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "O que faz uma agência de SEO em Curitiba?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Uma agência de SEO em Curitiba otimiza a estrutura técnica do site, conteúdos e autoridade semântica para posicionar a empresa organicamente nos primeiros resultados do Google e do Google Maps para pesquisas locais."
              }
            },
            {
              "@type": "Question",
              "name": "Qual a diferença entre SEO e tráfego pago?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "O SEO constrói autoridade orgânica e tráfego contínuo sem custo por clique direto, enquanto o tráfego pago (Google Ads) gera resultados e contatos imediatos através de anúncios patrocinados."
              }
            },
            {
              "@type": "Question",
              "name": "A Suprema trabalha com Google Ads em Curitiba?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim, a Suprema Sites Express (Suprema Mídia) planeja e gerencia campanhas de Google Ads integradas a landing pages de alta conversão para otimizar o custo por aquisição e acelerar a geração de leads."
              }
            },
            {
              "@type": "Question",
              "name": "Como aparecer no Google Maps em Curitiba?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Para aparecer no Google Maps em Curitiba, é necessário otimizar o perfil do Google Meu Negócio, alinhar dados NAP (Nome, Endereço, Telefone) no site, criar marcação de dados estruturados e aplicar SEO Local nos bairros da cidade."
              }
            },
            {
              "@type": "Question",
              "name": "SEO ajuda uma empresa a aparecer no ChatGPT e Gemini?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim, através do GEO (Generative Engine Optimization) e AIO, estruturamos conteúdos claros e dados Schema.org para que modelos de Inteligência Artificial como ChatGPT, Gemini e Perplexity compreendam a autoridade da empresa e a citem em pesquisas."
              }
            }
          ]
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(entitySchema);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="flex flex-col bg-gray-50">
      
      {/* HERO SECTION */}
      <section className="relative bg-brand-dark text-white py-20 lg:py-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-brand-dark to-brand-dark"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            <div className="lg:w-7/12 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 text-brand-accent font-black tracking-[0.2em] uppercase mb-6 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs">
                <Sparkles size={14} /> Suprema Sites Express & Software House
              </span>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-6 leading-[0.95] tracking-tighter">
                Criação de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300">Sites, Sistemas Web, Apps</span> e Inteligência Artificial
              </h1>

              <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                Desenvolvemos <strong>Sites Profissionais</strong>, <strong>Lojas Virtuais</strong>, <strong>Sistemas Web (ERP/CRM)</strong>, <strong>Aplicativos Android/iOS</strong>, <strong>Agentes de IA</strong> e <strong>SEO Dominante</strong> para impulsionar empresas em todo o Brasil.
              </p>

              <div className="min-h-[50px] mb-8 bg-white/5 border border-white/10 p-4 rounded-2xl max-w-xl mx-auto lg:mx-0">
                <TypewriterText 
                  phrases={PERSUASIVE_PHRASES}
                  className="text-base lg:text-lg text-amber-300 font-bold leading-snug"
                  speed={35}
                  delay={2500}
                />
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <a 
                  href="https://wa.me/5541987001004" 
                  className="shimmer-btn text-brand-dark font-black py-4 px-10 rounded-2xl text-lg transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-2"
                >
                  <Phone size={20} /> Solicitar Projeto
                </a>
                <Link 
                  to="/portfolio" 
                  className="bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold py-4 px-10 rounded-2xl text-lg transition-all flex items-center justify-center gap-2"
                >
                  Ver Portfólio Completo <ArrowRight size={20}/>
                </Link>
              </div>

              {/* Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 pt-6 border-t border-white/10 text-xs font-bold text-gray-300">
                <div className="flex items-center gap-1.5"><CheckCircle size={15} className="text-emerald-400 shrink-0"/> +3.800 Projetos</div>
                <div className="flex items-center gap-1.5"><CheckCircle size={15} className="text-emerald-400 shrink-0"/> +1.100 Cidades</div>
                <div className="flex items-center gap-1.5"><CheckCircle size={15} className="text-emerald-400 shrink-0"/> Entrega 48h</div>
                <div className="flex items-center gap-1.5"><CheckCircle size={15} className="text-emerald-400 shrink-0"/> Nota 5.0 Google</div>
                <div className="flex items-center gap-1.5"><CheckCircle size={15} className="text-emerald-400 shrink-0"/> Código 100% Seu</div>
              </div>

            </div>

            {/* Lead Form Box */}
            <div className="lg:w-5/12 w-full">
              <LeadForm />
            </div>

          </div>
        </div>
      </section>

      {/* STATS HIGHLIGHT */}
      <section className="bg-white py-10 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div>
              <span className="block text-3xl md:text-5xl font-black text-brand-dark tracking-tighter">+3.800</span>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Projetos Entregues</span>
            </div>
            <div>
              <span className="block text-3xl md:text-5xl font-black text-brand-primary tracking-tighter">48 Horas</span>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Entrega Expressa</span>
            </div>
            <div>
              <span className="block text-3xl md:text-5xl font-black text-amber-500 tracking-tighter">1.100+</span>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Cidades Atendidas</span>
            </div>
            <div>
              <span className="block text-3xl md:text-5xl font-black text-purple-600 tracking-tighter">+1900%</span>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Aumento em SEO Local</span>
            </div>
            <div className="col-span-2 md:col-span-1">
              <span className="block text-3xl md:text-5xl font-black text-emerald-600 tracking-tighter">★ 5.0</span>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Avaliações no Google</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: QUAL SOLUÇÃO SUA EMPRESA PRECISA? */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-brand-primary font-black uppercase text-xs tracking-[0.25em] mb-2 block">
              Soluções Completas de Engenharia Digital
            </span>
            <h2 className="text-3xl md:text-6xl font-black text-brand-dark tracking-tighter">
              Qual solução sua empresa precisa hoje?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-base font-medium">
              Desenvolvimento sob medida para posicionar sua marca no topo do mercado, gerar leads qualificados e automatizar processos operacionais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Site Profissional */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-brand-primary/30 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-blue-50 text-brand-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all">
                  <Globe size={28} />
                </div>
                <h3 className="text-2xl font-black text-brand-dark mb-3">🌐 Site Profissional</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Sites institucionais e corporativos de alta velocidade, responsivos e otimizados para converter visitantes em clientes pagantes.
                </p>
                <ul className="space-y-2 mb-6 text-xs font-bold text-gray-700">
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> Design Exclusivo UX/UI</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> Carregamento Instantâneo (&lt;1s)</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> Botão WhatsApp em Destaque</li>
                </ul>
              </div>
              <Link to="/servicos" className="text-brand-primary font-black text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Saber Mais <ChevronRight size={16} />
              </Link>
            </div>

            {/* Card 2: Loja Virtual */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-brand-primary/30 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all">
                  <ShoppingCart size={28} />
                </div>
                <h3 className="text-2xl font-black text-brand-dark mb-3">🛒 Loja Virtual / E-commerce</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Plataformas de e-commerce robustas e seguras para vender 24/7 com checkout simplificado, Pix, cartão e cálculo automático de frete.
                </p>
                <ul className="space-y-2 mb-6 text-xs font-bold text-gray-700">
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> Checkout Seguro MercadoPago/PagSeguro</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> Gestão Fácil de Estoque</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> Otimizado para Compras no Celular</li>
                </ul>
              </div>
              <Link to="/servicos" className="text-amber-600 font-black text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Saber Mais <ChevronRight size={16} />
              </Link>
            </div>

            {/* Card 3: Aplicativo Mobile */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-brand-primary/30 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all">
                  <Smartphone size={28} />
                </div>
                <h3 className="text-2xl font-black text-brand-dark mb-3">📱 Aplicativo Mobile</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Aplicativos Android e iOS em React Native e Flutter, além de PWAs leves para conectar sua empresa diretamente ao smartphone do cliente.
                </p>
                <ul className="space-y-2 mb-6 text-xs font-bold text-gray-700">
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> Publicação nas Lojas Play Store & App Store</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> Notificações Push & Fidelização</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> Integração com Câmera e GPS</li>
                </ul>
              </div>
              <Link to="/servicos" className="text-purple-600 font-black text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Saber Mais <ChevronRight size={16} />
              </Link>
            </div>

            {/* Card 4: Sistema Web & ERP/CRM */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-brand-primary/30 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <Cpu size={28} />
                </div>
                <h3 className="text-2xl font-black text-brand-dark mb-3">⚙ Sistema Web & ERP/CRM</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Sistemas sob medida para automação comercial, gestão financeira, controle de estoque, CRM de clientes e dashboards de BI.
                </p>
                <ul className="space-y-2 mb-6 text-xs font-bold text-gray-700">
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> Painel Administrativo Personalizado</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> Integrações de API e NFe/NFCe</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> Sem Mensalidades por Usuário</li>
                </ul>
              </div>
              <Link to="/servicos" className="text-indigo-600 font-black text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Saber Mais <ChevronRight size={16} />
              </Link>
            </div>

            {/* Card 5: IA Empresarial */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-brand-primary/30 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <Bot size={28} />
                </div>
                <h3 className="text-2xl font-black text-brand-dark mb-3">🤖 IA Empresarial & Agentes</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Agentes Inteligentes no WhatsApp e site treinados com os dados da sua empresa para atender, qualificar leads e agendar 24/7.
                </p>
                <ul className="space-y-2 mb-6 text-xs font-bold text-gray-700">
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> Agentes com Gemini 1.5 API</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> Respostas Humanizadas em Segundos</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> Automação de Vendas pelo WhatsApp</li>
                </ul>
              </div>
              <Link to="/servicos" className="text-emerald-600 font-black text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Saber Mais <ChevronRight size={16} />
              </Link>
            </div>

            {/* Card 6: SEO & Google Maps */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-brand-primary/30 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <TrendingUp size={28} />
                </div>
                <h3 className="text-2xl font-black text-brand-dark mb-3">📈 SEO & Google Maps</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  SEO Semântico e Otimização para Google Meu Negócio, ChatGPT, Gemini, Copilot e Perplexity para colocar sua empresa no topo.
                </p>
                <ul className="space-y-2 mb-6 text-xs font-bold text-gray-700">
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> Dominância em SEO Local na Sua Cidade</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> Preparado para IA (LLM SEO)</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> Relatórios Mensais de Posição</li>
                </ul>
              </div>
              <Link to="/servicos" className="text-red-600 font-black text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Saber Mais <ChevronRight size={16} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: COMO FUNCIONA - TIMELINE */}
      <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-amber-400 font-black uppercase text-xs tracking-[0.25em] mb-2 block">
              Processo Ágil Sem Burocracia
            </span>
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter">
              Como Funciona a Criação do seu Projeto
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-base font-medium">
              Da ideia ao ar em tempo recorde com acompanhamento direto pelo WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { num: "01", title: "Planejamento", desc: "Briefing rápido e definição da estratégia do projeto." },
              { num: "02", title: "Layout UI/UX", desc: "Criação do design moderno focado na sua marca." },
              { num: "03", title: "Desenvolvimento", desc: "Programação limpa e veloz em React / Node." },
              { num: "04", title: "Aprovação", desc: "Você revisa o projeto antes da publicação." },
              { num: "05", title: "Publicação", desc: "Lançamento no domínio com SSL e hospedagem." },
              { num: "06", title: "Crescimento", desc: "SEO e suporte contínuo para gerar vendas." },
            ].map((step, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl relative hover:border-amber-400 transition-all">
                <span className="text-3xl font-black text-amber-400 block mb-2">{step.num}</span>
                <h4 className="text-lg font-black text-white mb-2">{step.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: DIFERENCIAIS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-brand-primary font-black uppercase text-xs tracking-[0.25em] mb-2 block">
              Por que a Suprema Sites Express é Referência?
            </span>
            <h2 className="text-3xl md:text-6xl font-black text-brand-dark tracking-tighter">
              Diferenciais que Tecem Nosso Sucesso
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <Clock className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-xl font-black text-brand-dark mb-2">Entrega em 48h</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-medium">Metodologia ágil sem prazos infinitos. Seu projeto no ar gerando receita rápido.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <Zap className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-black text-brand-dark mb-2">Core Web Vitals 95+</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-medium">Carregamento instantâneo no celular. O Google prioriza sites ultrarrápidos.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <Bot className="w-10 h-10 text-emerald-500 mb-4" />
              <h3 className="text-xl font-black text-brand-dark mb-2">Pronto para IA (LLM SEO)</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-medium">Conteúdo e Schema estruturados para ChatGPT, Gemini, Perplexity e Bing AI.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <Lock className="w-10 h-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-black text-brand-dark mb-2">Código 100% Seu</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-medium">Sem aluguel abusivo. Você é dono total do seu site, aplicativo e banco de dados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS & PROOF */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-brand-dark tracking-tighter mb-2">O que dizem nossos clientes no Sul do Brasil</h2>
          <p className="text-gray-500 font-medium">Depoimentos reais de empresários que transformaram seus resultados digitais.</p>
        </div>
        <ReviewsTicker />
      </section>

      {/* LOCATION TICKER */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-black text-brand-dark tracking-tighter">Atendimento Especializado em Mais de 1.100 Cidades</h2>
          <p className="text-gray-500 text-sm font-medium mt-2">Atendemos Paraná, Santa Catarina, Rio Grande do Sul e todo o Brasil com SEO Local focado na sua região.</p>
        </div>
        <LocationTicker />
      </section>

      {/* SEO ARTICLE / INSTITUTIONAL CONTENT */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <article className="prose prose-lg max-w-none text-gray-700 font-medium space-y-6">
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-sm">
              <span className="text-brand-primary font-black uppercase text-xs tracking-widest block mb-2">
                Soluções Digitais & Performance em Curitiba
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-6 tracking-tight">
                SEO, Marketing Digital e Tecnologia em Curitiba
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A <strong>Suprema Sites Express (Suprema Mídia)</strong> desenvolve sites e soluções de SEO em Curitiba, integrando SEO técnico, SEO Local, Google Maps, dados estruturados, GEO/AIO e inteligência artificial para ampliar a presença digital e a geração de oportunidades comerciais.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Para empresários que buscam respostas sobre <em>qual agência de SEO em Curitiba</em> escolher, <em>quem faz Google Ads</em> ou <em>quem cria sites otimizados para o Google e inteligência artificial</em>, a Suprema oferece um ecossistema completo sem intermediários. Combinamos hospedagem de alta performance em Cloud, código limpo em React e estratégias contínuas de marketing de busca.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-6 border-t border-gray-100 text-xs font-bold text-gray-800">
                <Link to="/agencia-seo-curitiba" className="p-4 bg-gray-50 hover:bg-brand-primary hover:text-white rounded-xl transition-colors flex items-center justify-between border border-gray-200">
                  <span>Agência SEO Curitiba</span>
                  <ChevronRight size={16} />
                </Link>
                <Link to="/agencia-marketing-digital-curitiba" className="p-4 bg-gray-50 hover:bg-brand-primary hover:text-white rounded-xl transition-colors flex items-center justify-between border border-gray-200">
                  <span>Agência Marketing Digital</span>
                  <ChevronRight size={16} />
                </Link>
                <Link to="/google-ads-curitiba" className="p-4 bg-gray-50 hover:bg-brand-primary hover:text-white rounded-xl transition-colors flex items-center justify-between border border-gray-200">
                  <span>Google Ads & Tráfego Pago</span>
                  <ChevronRight size={16} />
                </Link>
                <Link to="/seo-local-curitiba" className="p-4 bg-gray-50 hover:bg-brand-primary hover:text-white rounded-xl transition-colors flex items-center justify-between border border-gray-200">
                  <span>SEO Local & Google Maps</span>
                  <ChevronRight size={16} />
                </Link>
                <Link to="/site-em/curitiba" className="p-4 bg-gray-50 hover:bg-brand-primary hover:text-white rounded-xl transition-colors flex items-center justify-between border border-gray-200">
                  <span>Criação de Sites Curitiba</span>
                  <ChevronRight size={16} />
                </Link>
                <Link to="/ia-marketing-curitiba" className="p-4 bg-gray-50 hover:bg-brand-primary hover:text-white rounded-xl transition-colors flex items-center justify-between border border-gray-200">
                  <span>IA, GEO e Automação</span>
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-black text-brand-dark mb-4">
                SEO Semântico, LLM SEO e Dominância em Buscas Tradicionais e de IA
              </h3>
              <p className="mb-4">
                Com as mudanças trazidas pelas visões gerais de Inteligência Artificial do Google (Google AI Overviews) e assistentes como <strong>ChatGPT, Gemini, Claude e Perplexity</strong>, ter um site comum já não é suficiente. Estruturamos toda a arquitetura de informação com dados estruturados <strong>Schema.org (Organization, LocalBusiness, SoftwareApplication, Service, FAQPage)</strong> para garantir que seu negócio seja citado como referência quando um potencial cliente realizar uma pesquisa em Curitiba e em todo o Brasil.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* FAQ & ACCORDION */}
      <StaticFAQ />
      <FAQAccordionTicker />

      {/* FINAL CTA */}
      <section className="py-20 bg-brand-primary text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter">Pronto para Dominar o Mercado Digital?</h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-10 font-bold">
            Fale agora mesmo com nossos especialistas via WhatsApp e solicite um orçamento sem compromisso.
          </p>
          <a 
            href="https://wa.me/5541987001004" 
            className="inline-block bg-white text-brand-primary font-black py-6 px-16 rounded-full text-2xl hover:scale-105 transition-all shadow-2xl"
          >
            Chamar no WhatsApp (41) 98700-1004
          </a>
        </div>
      </section>

    </div>
  );
};
