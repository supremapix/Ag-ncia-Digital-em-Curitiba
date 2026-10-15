import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall } from 'lucide-react';
import { LeadForm } from '../components/LeadForm';
import { StaticFAQ } from '../components/StaticFAQ';
import { TypewriterText } from '../src/components/TypewriterText';
import { blogPosts } from '../data/blogData';
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
      
      {/* HERO SECTION - Editorial & Confident */}
      <section className="relative bg-brand-dark text-white min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="https://img.supremasite.com.br/omar-seo.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-cobalt font-display text-sm font-bold uppercase tracking-widest mb-4 filete">SUPREMA · ESTÚDIO DIGITAL EM CURITIBA</div>
              <h1 className="leading-[0.98] mb-8">
                <span className="text-[22px] md:text-[28px] block mb-2 font-sans font-normal">Criação de sites.</span>
                <span className="text-[48px] md:text-[88px] font-black block">SUA MARCA NÃO NASCEU PARA SER MAIS UMA.</span>
              </h1>
              <p className="text-xl text-warm-white/80 mb-10 max-w-2xl leading-relaxed">
                Sites profissionais, sistemas web inteligentes e estratégias de SEO, GEO e AIO. Construímos a base digital para sua marca se tornar autoridade.
              </p>
              <div className="flex gap-4">
                <a href="https://wa.me/5541992721004" className="bg-cobalt text-white px-8 py-4 rounded-sm hover:bg-blue-700 transition font-sans font-bold">Vamos falar do seu projeto</a>
                <a href="#portfolio" className="border border-warm-white/20 text-warm-white px-8 py-4 rounded-sm hover:bg-warm-white/10 transition font-sans font-bold">Conheça nossos projetos</a>
              </div>
            </div>
            <div className="bg-white p-8 rounded-sm">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* STATS HIGHLIGHT */}
      <section className="bg-white py-12 border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center tabular-nums">
            <div><span className="block text-4xl font-extrabold text-slate-900">+3.800</span><span className="text-xs text-slate-500 uppercase">Projetos</span></div>
            <div><span className="block text-4xl font-extrabold text-cobalt">48h</span><span className="text-xs text-slate-500 uppercase">Entrega</span></div>
            <div><span className="block text-4xl font-extrabold text-slate-900">1.100+</span><span className="text-xs text-slate-500 uppercase">Cidades</span></div>
            <div><span className="block text-4xl font-extrabold text-slate-900">5.0 ★</span><span className="text-xs text-slate-500 uppercase">Google</span></div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION - Real Case Study */}
      <section id="portfolio" className="py-20 bg-warm-white">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl mb-12 filete">Projetos Selecionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 cut-corner border border-slate-200">
              <img src={blogPosts[5].image} alt={blogPosts[5].title} className="w-full h-80 object-cover mb-6" />
              <h3 className="font-display text-3xl mb-3">{blogPosts[5].title}</h3>
              <p className="text-slate-600 mb-6 text-sm">{blogPosts[5].excerpt}</p>
              <Link to="/portfolio" className="text-cobalt font-bold border-b border-cobalt">Ver estudo de caso</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl mb-12 filete">O que fazemos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Sites Profissionais", desc: "Design autoral, React/Vite, SEO técnico impecável." },
              { title: "Lojas Virtuais", desc: "Checkout otimizado, alta conversão, gestão fácil." },
              { title: "Sistemas & Apps", desc: "ERP/CRM sob medida, zero taxas por usuário." },
              { title: "SEO, GEO & AIO", desc: "Dominância no Google, ChatGPT, Gemini." }
            ].map((s, i) => (
              <div key={i} className="border border-white/10 p-8 rounded-sm">
                <h3 className="font-display text-2xl mb-4">{s.title}</h3>
                <p className="text-warm-white/70 mb-4">{s.desc}</p>
                <Link to="/servicos" className="text-cobalt font-bold">Saiba mais</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 bg-warm-white">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl mb-12 filete">Nosso Processo</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {["Estratégia", "Interface UI/UX", "Programação", "Lançamento"].map((step, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-4xl font-display text-cobalt font-black">0{i+1}</span>
                <p className="font-bold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StaticFAQ />

      {/* FINAL CTA */}
      <section className="py-24 bg-brand-dark text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-5xl font-black mb-8">Pronto para Iniciar?</h2>
          <a href="https://wa.me/5541992721004" className="bg-cobalt text-white px-10 py-5 rounded-sm font-bold text-lg hover:bg-blue-700">Falar com nossa equipe</a>
        </div>
      </section>


    </div>
  );
};
