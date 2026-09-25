import React, { useEffect } from 'react';
import { 
  Globe, ShoppingCart, Smartphone, Cpu, Bot, TrendingUp, Check, 
  Zap, ArrowRight, Clock, Lock, ChevronRight, PhoneCall, Play 
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
          "telephone": "+5541992721004",
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
    <div className="flex flex-col bg-[#f8fafc]">
      
      {/* HERO SECTION - Elegant Cinema Background Video */}
      <section className="relative bg-[#070b14] text-white py-20 lg:py-28 border-b border-white/10 overflow-hidden min-h-[85vh] flex items-center">
        
        {/* Background Video 01 (Omar SEO 01) with High Visibility Gradient Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="auto"
            className="w-full h-full object-cover opacity-50 scale-105 filter saturate-110 contrast-105 transition-opacity duration-700"
          >
            <source src="https://img.supremasite.com.br/omar-seo.mp4" type="video/mp4" />
          </video>
          {/* Subtle dual gradient overlay for 100% text readability + high video prominence */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070b14] via-[#070b14]/75 to-[#070b14]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-[#070b14]/60" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            <div className="lg:w-7/12 text-center lg:text-left">
              {/* Clean Kicker Metadata */}
              <div className="flex items-center gap-2 justify-center lg:justify-start text-xs font-bold uppercase tracking-[0.2em] text-brand-primary mb-5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>01</span>
                <span>·</span>
                <span>Engenharia Digital & SEO em Curitiba</span>
              </div>

              <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl mb-6 leading-[1.02] tracking-tight text-white max-w-3xl drop-shadow-md">
                Criação de Sites, Sistemas Web e SEO Dominante
              </h1>

              <p className="text-base lg:text-lg text-slate-200 mb-8 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Desenvolvemos <strong>Sites Profissionais</strong>, <strong>Lojas Virtuais</strong>, <strong>Sistemas Web (ERP/CRM)</strong>, <strong>Aplicativos Native</strong> e <strong>Estratégia SEO</strong> para empresas que buscam alta performance e geração real de clientes.
              </p>

              {/* Technical Typewriter Bar */}
              <div className="mb-8 bg-black/40 border border-white/15 p-4 rounded-xl max-w-xl mx-auto lg:mx-0 backdrop-blur-md shadow-2xl">
                <TypewriterText 
                  phrases={PERSUASIVE_PHRASES}
                  className="text-sm lg:text-base text-amber-400 font-semibold leading-snug"
                  speed={35}
                  delay={2500}
                />
              </div>

              {/* Single Focal Primary CTA + Secondary Link */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <a 
                  href="https://wa.me/5541992721004" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-primary hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-xl text-sm transition-all shadow-xl shadow-blue-900/40 flex items-center justify-center gap-2 active:scale-95"
                >
                  <PhoneCall size={18} />
                  <span>Solicitar Orçamento no WhatsApp</span>
                </a>
                <Link 
                  to="/portfolio" 
                  className="border border-white/25 hover:border-white/50 bg-black/30 backdrop-blur-sm text-slate-200 hover:text-white font-semibold py-4 px-8 rounded-xl text-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Ver Prova de Impacto</span>
                  <ArrowRight size={16}/>
                </Link>
              </div>

              {/* Clean Proof Bar with Unboxed Separators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 pt-6 border-t border-white/15 text-xs font-semibold text-slate-300 tabular-nums">
                <span>+3.800 Projetos</span>
                <span>·</span>
                <span>Entrega em 48h</span>
                <span>·</span>
                <span>100% Código Próprio</span>
                <span>·</span>
                <span>Nota 5.0 no Google</span>
              </div>

            </div>

            {/* Lead Form Box */}
            <div className="lg:w-5/12 w-full">
              <LeadForm />
            </div>

          </div>
        </div>
      </section>

      {/* STATS HIGHLIGHT - Tabular Numerals & High Contrast */}
      <section className="bg-white py-12 border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center tabular-nums">
            <div className="border-r border-slate-100 last:border-r-0 pr-4">
              <span className="block text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">+3.800</span>
              <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1 block">Projetos Entregues</span>
            </div>
            <div className="border-r border-slate-100 last:border-r-0 pr-4">
              <span className="block text-3xl md:text-4xl font-extrabold text-brand-primary tracking-tight">48 Horas</span>
              <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1 block">Prazo de Entrega</span>
            </div>
            <div className="border-r border-slate-100 last:border-r-0 pr-4">
              <span className="block text-3xl md:text-4xl font-extrabold text-amber-600 tracking-tight">1.100+</span>
              <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1 block">Cidades Atendidas</span>
            </div>
            <div className="border-r border-slate-100 last:border-r-0 pr-4">
              <span className="block text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">+1900%</span>
              <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1 block">Crescimento SEO Local</span>
            </div>
            <div className="col-span-2 md:col-span-1">
              <span className="block text-3xl md:text-4xl font-extrabold text-emerald-600 tracking-tight">5.0 ★</span>
              <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1 block">Avaliações Google</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: CAPABILITIES & SERVICES - Bento Grid Structure */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-primary mb-3">
              <span>02</span>
              <span>·</span>
              <span>Engenharia & Soluções Digitais</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Especialidades e Projetos sob Medida
            </h2>
            <p className="text-slate-600 mt-4 text-base font-normal leading-relaxed">
              Estruturas digitais desenvolvidas com foco absoluto em conversão, velocidade de carregamento e autoridade técnica nos buscadores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Site Profissional */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 hover:border-brand-primary/50 transition-all group flex flex-col justify-between shadow-sm hover:shadow-md">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-4">01. Web Engineering</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Site Profissional Institucional</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Desenvolvimento em React + Tailwind com foco em autoridade corporativa, UX refinada e carregamento sub-segundo.
                </p>
                <div className="space-y-2 mb-8 text-xs font-medium text-slate-700 border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2"><Check size={14} className="text-brand-primary shrink-0"/> Design UX/UI Exclusivo</div>
                  <div className="flex items-center gap-2"><Check size={14} className="text-brand-primary shrink-0"/> Desempenho Core Web Vitals 95+</div>
                  <div className="flex items-center gap-2"><Check size={14} className="text-brand-primary shrink-0"/> Captura de Leads Integrada</div>
                </div>
              </div>
              <Link to="/servicos" className="text-brand-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                <span>Ver detalhes da solução</span>
                <ChevronRight size={14} />
              </Link>
            </div>

            {/* Card 2: Loja Virtual */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 hover:border-brand-primary/50 transition-all group flex flex-col justify-between shadow-sm hover:shadow-md">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-4">02. E-Commerce Platform</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Loja Virtual de Alta Conversão</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Plataformas de vendas diretas com checkout otimizado, gestão de estoque intuitiva e integrações de pagamento via Pix e Cartão.
                </p>
                <div className="space-y-2 mb-8 text-xs font-medium text-slate-700 border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2"><Check size={14} className="text-brand-primary shrink-0"/> Checkout Transparente Sem Fricção</div>
                  <div className="flex items-center gap-2"><Check size={14} className="text-brand-primary shrink-0"/> Cálculo Automático de Frete</div>
                  <div className="flex items-center gap-2"><Check size={14} className="text-brand-primary shrink-0"/> Layout Responsivo Mobile-First</div>
                </div>
              </div>
              <Link to="/servicos" className="text-brand-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                <span>Ver detalhes da solução</span>
                <ChevronRight size={14} />
              </Link>
            </div>

            {/* Card 3: Aplicativo Mobile */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 hover:border-brand-primary/50 transition-all group flex flex-col justify-between shadow-sm hover:shadow-md">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-4">03. Mobile Apps</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Aplicativo Android & iOS</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Soluções mobile nativas em React Native e PWAs leves para conectar sua empresa diretamente ao cotidiano dos seus clientes.
                </p>
                <div className="space-y-2 mb-8 text-xs font-medium text-slate-700 border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2"><Check size={14} className="text-brand-primary shrink-0"/> Publicação nas Lojas Oficiais</div>
                  <div className="flex items-center gap-2"><Check size={14} className="text-brand-primary shrink-0"/> Notificações Push & Engajamento</div>
                  <div className="flex items-center gap-2"><Check size={14} className="text-brand-primary shrink-0"/> Integrações via REST API</div>
                </div>
              </div>
              <Link to="/servicos" className="text-brand-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                <span>Ver detalhes da solução</span>
                <ChevronRight size={14} />
              </Link>
            </div>

            {/* Card 4: Sistema Web & ERP/CRM */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 hover:border-brand-primary/50 transition-all group flex flex-col justify-between shadow-sm hover:shadow-md">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-4">04. Custom Systems</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Sistema Web (ERP / CRM)</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Sistemas corporativos sob medida para automação de processos, gestão de vendas, relatórios e dashboards em tempo real.
                </p>
                <div className="space-y-2 mb-8 text-xs font-medium text-slate-700 border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2"><Check size={14} className="text-brand-primary shrink-0"/> Painel Administrativo Personalizado</div>
                  <div className="flex items-center gap-2"><Check size={14} className="text-brand-primary shrink-0"/> Integrações NFe & Gateways</div>
                  <div className="flex items-center gap-2"><Check size={14} className="text-brand-primary shrink-0"/> Sem Mensalidades por Usuário</div>
                </div>
              </div>
              <Link to="/servicos" className="text-brand-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                <span>Ver detalhes da solução</span>
                <ChevronRight size={14} />
              </Link>
            </div>

            {/* Card 5: IA Empresarial */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 hover:border-brand-primary/50 transition-all group flex flex-col justify-between shadow-sm hover:shadow-md">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-4">05. AI Agents</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Agentes de Inteligência Artificial</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Agentes virtuais treinados com o conhecimento da sua empresa para qualificar leads e realizar agendamentos 24/7 via WhatsApp.
                </p>
                <div className="space-y-2 mb-8 text-xs font-medium text-slate-700 border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2"><Check size={14} className="text-brand-primary shrink-0"/> Respostas Contextuais em Segundos</div>
                  <div className="flex items-center gap-2"><Check size={14} className="text-brand-primary shrink-0"/> Qualificação Automática de Vendas</div>
                  <div className="flex items-center gap-2"><Check size={14} className="text-brand-primary shrink-0"/> Integração com CRM Existente</div>
                </div>
              </div>
              <Link to="/servicos" className="text-brand-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                <span>Ver detalhes da solução</span>
                <ChevronRight size={14} />
              </Link>
            </div>

            {/* Card 6: SEO & Google Maps */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 hover:border-brand-primary/50 transition-all group flex flex-col justify-between shadow-sm hover:shadow-md">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-4">06. Search Visibility</span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">SEO Técnico & Google Maps</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Otimização semântica e GEO/AIO para colocar sua empresa no topo do Google Maps, ChatGPT e buscadores modernos.
                </p>
                <div className="space-y-2 mb-8 text-xs font-medium text-slate-700 border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2"><Check size={14} className="text-brand-primary shrink-0"/> Dominância em Pesquisas Locais</div>
                  <div className="flex items-center gap-2"><Check size={14} className="text-brand-primary shrink-0"/> Marcação de Dados Estruturados Schema</div>
                  <div className="flex items-center gap-2"><Check size={14} className="text-brand-primary shrink-0"/> Otimização para IA (GEO/AIO)</div>
                </div>
              </div>
              <Link to="/servicos" className="text-brand-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                <span>Ver detalhes da solução</span>
                <ChevronRight size={14} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: EXECUTION TIMELINE - Background Video 02 (Omar SEO 02) */}
      <section className="py-24 bg-[#070b14] text-white relative overflow-hidden">
        
        {/* Background Video 02 (Omar SEO 02) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="auto"
            className="w-full h-full object-cover opacity-45 scale-105 filter saturate-110 contrast-105"
          >
            <source src="https://img.supremasite.com.br/seo-omar.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#070b14] via-[#070b14]/85 to-[#070b14]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-[#070b14]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-3">
              <span>03</span>
              <span>·</span>
              <span>Metodologia Ágil & Execução</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight drop-shadow">
              Etapas do Desenvolvimento
            </h2>
            <p className="text-slate-300 mt-4 text-base font-normal">
              Processo de entrega transparente com acompanhamento direto do projeto e visibilidade técnica total.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { num: "01", title: "Estratégia", desc: "Alinhamento de objetivos e arquitetura das telas." },
              { num: "02", title: "Interface UI/UX", desc: "Criação de layout exclusivo e de alta legibilidade." },
              { num: "03", title: "Programação", desc: "Desenvolvimento do código limpo em React." },
              { num: "04", title: "Validação", desc: "Revisão detalhada antes da publicação oficial." },
              { num: "05", title: "Lançamento", desc: "Publicação no servidor com SSL e SEO inicial." },
              { num: "06", title: "Evolução", desc: "Acompanhamento contínuo e estratégia de busca." },
            ].map((step, idx) => (
              <div key={idx} className="bg-black/50 border border-white/15 p-6 rounded-xl hover:border-amber-400/60 transition-all backdrop-blur-md shadow-xl">
                <span className="text-2xl font-extrabold text-amber-400 block mb-3 tabular-nums">{step.num}</span>
                <h4 className="text-base font-bold text-white mb-2">{step.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: DIFFERENTIALS */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-primary mb-3">
              <span>04</span>
              <span>·</span>
              <span>Pilares da Agência</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Diferenciais da Suprema
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200/80">
              <Clock className="w-8 h-8 text-amber-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Entrega Expressa em 48h</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">Processos otimizados para colocar sua estrutura digital no ar sem prazos longos.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200/80">
              <Zap className="w-8 h-8 text-brand-primary mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Core Web Vitals 95+</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">Velocidade extrema de carregamento priorizada pelos algoritmos do Google.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200/80">
              <Bot className="w-8 h-8 text-emerald-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Estrutura Pronta para IA</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">Dados estruturados Schema.org para citabilidade em ChatGPT, Gemini e Perplexity.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200/80">
              <Lock className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Propriedade Integral</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">Código e banco de dados pertencem a você, sem dependências de plataformas fechadas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS & PROOF */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center mb-10">
          <h2 className="font-display text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">Depoimentos de Empresários Atendidos</h2>
          <p className="text-slate-500 font-normal text-sm">Avaliações consolidadas sobre nossos projetos e consultorias.</p>
        </div>
        <ReviewsTicker />
      </section>

      {/* LOCATION TICKER */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center mb-8">
          <h2 className="font-display text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Atendimento Regional em Mais de 1.100 Cidades</h2>
          <p className="text-slate-500 text-sm font-normal mt-2">Cobertura em todo o Paraná, Santa Catarina e Rio Grande do Sul.</p>
        </div>
        <LocationTicker />
      </section>

      {/* SEO ARTICLE / INSTITUTIONAL CONTENT */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <article className="space-y-8">
            <div className="bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-3">
                Presença Digital e Tecnologia
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
                SEO, Marketing Digital e Tecnologia em Curitiba
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-sm font-normal">
                A <strong>Suprema Sites Express (Suprema Mídia)</strong> desenvolve sites e soluções de SEO em Curitiba, integrando SEO técnico, SEO Local, Google Maps, dados estruturados, GEO/AIO e inteligência artificial para ampliar a presença digital e a geração de oportunidades comerciais.
              </p>
              <p className="text-slate-700 leading-relaxed mb-6 text-sm font-normal">
                Para empresários que buscam respostas sobre <em>qual agência de SEO em Curitiba</em> escolher, <em>quem faz Google Ads</em> ou <em>quem cria sites otimizados para o Google e inteligência artificial</em>, a Suprema oferece um ecossistema completo sem intermediários. Combinamos hospedagem de alta performance em Cloud, código limpo em React e estratégias contínuas de marketing de busca.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-6 border-t border-slate-100 text-xs font-bold text-slate-800">
                <Link to="/agencia-seo-curitiba" className="p-3.5 bg-slate-50 hover:bg-brand-primary hover:text-white rounded-lg transition-colors flex items-center justify-between border border-slate-200">
                  <span>Agência SEO Curitiba</span>
                  <ChevronRight size={14} />
                </Link>
                <Link to="/agencia-marketing-digital-curitiba" className="p-3.5 bg-slate-50 hover:bg-brand-primary hover:text-white rounded-lg transition-colors flex items-center justify-between border border-slate-200">
                  <span>Agência Marketing Digital</span>
                  <ChevronRight size={14} />
                </Link>
                <Link to="/google-ads-curitiba" className="p-3.5 bg-slate-50 hover:bg-brand-primary hover:text-white rounded-lg transition-colors flex items-center justify-between border border-slate-200">
                  <span>Google Ads & Tráfego Pago</span>
                  <ChevronRight size={14} />
                </Link>
                <Link to="/seo-local-curitiba" className="p-3.5 bg-slate-50 hover:bg-brand-primary hover:text-white rounded-lg transition-colors flex items-center justify-between border border-slate-200">
                  <span>SEO Local & Google Maps</span>
                  <ChevronRight size={14} />
                </Link>
                <Link to="/site-em/curitiba" className="p-3.5 bg-slate-50 hover:bg-brand-primary hover:text-white rounded-lg transition-colors flex items-center justify-between border border-slate-200">
                  <span>Criação de Sites Curitiba</span>
                  <ChevronRight size={14} />
                </Link>
                <Link to="/ia-marketing-curitiba" className="p-3.5 bg-slate-50 hover:bg-brand-primary hover:text-white rounded-lg transition-colors flex items-center justify-between border border-slate-200">
                  <span>IA, GEO e Automação</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-display text-xl font-bold text-slate-900 mb-4">
                SEO Semântico, LLM SEO e Visibilidade de Marca
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-normal">
                Com as atualizações de inteligência artificial do Google e assistentes como <strong>ChatGPT, Gemini, Claude e Perplexity</strong>, estruturamos a arquitetura de informação com dados Schema.org para garantir que seu negócio seja citado como autoridade em Curitiba e em todo o Brasil.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* FAQ & ACCORDION */}
      <StaticFAQ />
      <FAQAccordionTicker />

      {/* FINAL CTA - High-Visibility Video Section */}
      <section className="py-24 bg-[#070b14] text-white text-center relative border-t border-white/10 overflow-hidden">
        
        {/* Background Video (Omar SEO 02) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="auto"
            className="w-full h-full object-cover opacity-50 scale-105 filter saturate-110"
          >
            <source src="https://img.supremasite.com.br/seo-omar.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/75 to-[#070b14]/70" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-6 tracking-tight drop-shadow">Pronto para Iniciar o seu Projeto?</h2>
          <p className="text-base md:text-lg text-slate-200 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
            Fale diretamente com nossa equipe técnica via WhatsApp e receba um direcionamento focado nas necessidades da sua empresa.
          </p>
          <a 
            href="https://wa.me/5541992721004" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-xl text-base transition-all shadow-2xl shadow-blue-900/50 active:scale-95"
          >
            <PhoneCall size={18} />
            <span>Chamar no WhatsApp (41) 99272-1004</span>
          </a>
        </div>
      </section>

    </div>
  );
};
