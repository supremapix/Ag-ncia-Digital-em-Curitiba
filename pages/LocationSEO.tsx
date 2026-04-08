import React, { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getNameFromSlug, getRegionFromSlug } from '../data/locations';
import { cityData } from '../data/cityData';
import { LeadForm } from '../components/LeadForm';
import { 
  Layout, Smartphone, Search, Zap, Target, Clock, Headphones, TrendingUp, ChevronRight, Star
} from 'lucide-react';

export const LocationSEO: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const locationName = useMemo(() => getNameFromSlug(slug || ''), [slug]);
  const region = useMemo(() => getRegionFromSlug(slug || ''), [slug]);
  
  const richData = useMemo(() => {
    if (!slug) return null;
    return cityData[slug] || null;
  }, [slug]);

  useEffect(() => {
    const stateName = richData?.state || (region === 'PR' ? 'Paraná' : (region === 'SC' ? 'Santa Catarina' : 'Rio Grande do Sul'));
    const stateSigla = richData?.stateSigla || region;
    
    // 1. Title Tag & Meta Description
    document.title = richData 
      ? `Criação de Sites em ${locationName} — Suprema Site Express | ${stateName}`
      : `Criação de Sites em ${locationName}, ${stateSigla} | Suprema Site Express`;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      const bairros = richData?.neighborhoods.slice(0, 3).join(', ') || 'principais bairros';
      const regiao = richData?.region || 'região';
      const descContent = richData 
        ? `Sites profissionais para empresas em ${locationName}. Entrega em 48h, SEO local para ${bairros} e toda a ${regiao}. Fale agora!`
        : `Especialistas em Criação de Sites Profissionais em ${locationName}. Aumente sua visibilidade no Google em até 1900% com SEO Local e entrega em 48h.`;
      metaDesc.setAttribute('content', descContent);
      
      // Update OG and Twitter descriptions
      document.querySelector('meta[property="og:description"]')?.setAttribute('content', descContent);
      document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', descContent);
    }

    // Update OG and Twitter Titles
    const ogTitle = `Criação de Sites em ${locationName} — Suprema Site Express`;
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', ogTitle);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', ogTitle);
    
    // Update OG and Twitter URLs
    const pageUrl = `https://www.supremasite.com.br/site-em/${slug}`;
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', pageUrl);
    document.querySelector('meta[name="twitter:url"]')?.setAttribute('content', pageUrl);
    
    // 2. Schema.org (JSON-LD)
    const schemaMarkup = [
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": `Suprema Site Express - ${locationName}`,
        "description": `Criação de sites profissionais, e-commerce e SEO local em ${locationName}, ${stateSigla}. Projetos de alta performance entregues em 48h.`,
        "url": `https://www.supremasite.com.br/site-em/${slug}`,
        "telephone": "+5541987001004",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": locationName,
          "addressRegion": stateSigla,
          "addressCountry": "BR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "-25.4284", 
          "longitude": "-49.2733"
        },
        "areaServed": {
          "@type": "City",
          "name": locationName
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.supremasite.com.br/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Cidades",
            "item": "https://www.supremasite.com.br/mapa-do-site"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": locationName,
            "item": `https://www.supremasite.com.br/site-em/${slug}`
          }
        ]
      }
    ];

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaMarkup);
    document.head.appendChild(script);

    return () => {
      const scripts = document.head.getElementsByTagName('script');
      for (let i = 0; i < scripts.length; i++) {
        if (scripts[i].type === 'application/ld+json' && scripts[i].text.includes(locationName)) {
          document.head.removeChild(scripts[i]);
        }
      }
    };
  }, [locationName, slug, region, richData]);

  const defaultFaqs = [
    { question: `Quanto tempo leva para criar um site em ${locationName}?`, answer: "Na Suprema Site Express, entregamos sites profissionais em até 48 horas úteis após o envio de todo o conteúdo." },
    { question: `O site já vem otimizado para o Google em ${locationName}?`, answer: `Sim, todos os nossos projetos incluem SEO Local básico focado em ${locationName} e região para garantir que seus clientes te encontrem.` },
    { question: `Vocês atendem empresas de que tamanho em ${locationName}?`, answer: `Atendemos desde profissionais liberais e MEIs até médias empresas que buscam expansão digital em ${locationName}.` },
    { question: `O site é responsivo para celulares?`, answer: `Com certeza. Mais de 70% das buscas em ${locationName} são via mobile, por isso nossos sites são 100% otimizados para smartphones.` },
    { question: `Como funciona o suporte pós-entrega?`, answer: `Oferecemos suporte prioritário via WhatsApp para todas as empresas de ${locationName}, garantindo que seu site esteja sempre online e seguro.` }
  ];

  const faqs = richData?.faqs || defaultFaqs;

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-brand-dark text-white py-24 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/10 opacity-30 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 text-center animate-slide-up">
          <span className="bg-brand-primary text-white font-black text-[10px] uppercase tracking-[0.4em] px-5 py-2 rounded-full border border-white/20 mb-8 inline-block">
            Estratégia Local: {locationName} / {richData?.stateSigla || region}
          </span>
          <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
            Criação de Sites Profissionais em <br/>
            <span className="text-brand-accent uppercase">{locationName}, {richData?.stateSigla || region}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12 font-medium">
            Sites profissionais para empresas em <strong>{locationName}</strong>. Entrega em 48h, SEO local para {richData?.neighborhoods.slice(0, 3).join(', ') || 'principais bairros'} e toda a {richData?.region || 'região'}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/5541987001004" className="shimmer-btn text-brand-dark font-black px-10 py-5 rounded-xl text-lg shadow-2xl hover:scale-105 transition-transform">
              Solicitar Orçamento em {locationName}
            </a>
            <Link to="/portfolio" className="bg-white/10 hover:bg-white/20 text-white font-bold px-10 py-5 rounded-xl text-lg border border-white/20 transition-all">
              Ver Portfólio
            </Link>
          </div>
        </div>
      </section>

      {/* Contexto da Cidade */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-8">
              Por que ter um site profissional em {locationName} faz diferença?
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed">
              {richData?.context || `A visibilidade digital em ${locationName} é crucial para o sucesso de qualquer negócio. No mercado altamente competitivo de hoje, estar na primeira página do Google é um diferencial decisivo. Nossa equipe utiliza inteligência de dados para mapear o comportamento de busca dos consumidores de ${locationName}, criando sites que convertem cliques em faturamento real.`}
            </p>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-16 text-center">
            Nossos Serviços para Empresas em {locationName}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: `Sites Profissionais para ${locationName}`, desc: "Desenvolvimento de sites institucionais rápidos e otimizados.", icon: <Layout /> },
              { title: `Lojas Virtuais para ${richData?.strongSegment || 'Comércio Local'}`, desc: "E-commerce completo para vender seus produtos em todo o Brasil.", icon: <Smartphone /> },
              { title: `SEO Local em ${locationName} e Região ${richData?.region || ''}`, desc: "Domine o Google Maps e as buscas locais na sua região.", icon: <Search /> },
              { title: `Landing Pages para Negócios em ${locationName}`, desc: "Páginas de alta conversão para suas campanhas de anúncios.", icon: <Target /> }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                  {React.cloneElement(service.icon as React.ReactElement, { size: 28 })}
                </div>
                <h3 className="text-xl font-black text-brand-dark mb-4">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bairros */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-8">
            Bairros e Regiões de {locationName} que Atendemos
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
            Nossa agência atende empresas em todos os bairros de <strong>{locationName}</strong>, incluindo {richData?.neighborhoods.join(', ') || 'toda a região metropolitana'}. Se você busca criação de sites em {locationName}, estamos prontos para te atender.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {(richData?.neighborhoods || []).map((bairro, idx) => (
              <span key={idx} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-bold">
                {bairro}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-16 text-center">
            Por que a Suprema Site Express é a melhor escolha em {locationName}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: "Entrega Express em 48h", desc: "Sabemos que tempo é dinheiro. Por isso, entregamos seu site profissional em tempo recorde sem abrir mão da qualidade.", icon: <Clock /> },
              { title: "Tecnologia de Ponta (React)", desc: "Utilizamos as mesmas tecnologias de gigantes como Facebook e Netflix para garantir que seu site seja o mais rápido de sua região.", icon: <Zap /> },
              { title: "Foco Total em SEO Local", desc: "Não criamos apenas sites bonitos. Criamos ferramentas de vendas que aparecem no topo do Google para quem busca em sua cidade.", icon: <TrendingUp /> },
              { title: "Suporte Prioritário", desc: "Atendimento humanizado e ágil via WhatsApp. Você nunca fica na mão quando precisa de uma alteração ou ajuste.", icon: <Headphones /> }
            ].map((diff, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-primary text-white rounded-2xl flex items-center justify-center shadow-lg shadow-brand-primary/20">
                  {React.cloneElement(diff.icon as React.ReactElement, { size: 32 })}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-brand-dark mb-3">{diff.title}</h3>
                  <p className="text-gray-500 text-lg leading-relaxed">{diff.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black mb-16 text-center">
            Depoimentos de Clientes em {locationName} e Região
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Carlos M.", city: locationName, text: "O site ficou pronto muito rápido e já estamos recebendo orçamentos pelo WhatsApp. Recomendo!" },
              { name: "Ana P.", city: locationName, text: "Excelente atendimento. O SEO local realmente funciona, minha loja agora aparece no topo do Google Maps." },
              { name: "Ricardo S.", city: locationName, text: "A melhor agência que já contratei. O site é muito rápido e o design é impecável. Valeu cada centavo." }
            ].map((rev, idx) => (
              <div key={idx} className="bg-white/5 p-8 rounded-3xl border border-white/10 relative">
                <div className="flex text-brand-accent mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 italic mb-6">"{rev.text}"</p>
                <div className="font-bold">
                  <span className="block text-white">{rev.name}</span>
                  <span className="text-brand-primary text-sm">{rev.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-12 text-center">
            Perguntas Frequentes sobre Criação de Sites em {locationName}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-100 rounded-2xl p-6 hover:border-brand-primary/30 transition-colors">
                <h3 className="text-xl font-black text-brand-dark mb-3 flex items-center gap-3">
                  <ChevronRight className="text-brand-primary" size={20} /> {faq.question}
                </h3>
                <p className="text-gray-500 leading-relaxed pl-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-brand-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            Comece seu Site em {locationName} Hoje
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Não perca mais tempo. Sua empresa em <strong>{locationName}</strong> merece um site de alta performance. Fale com nossos especialistas agora!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://wa.me/5541987001004" className="bg-brand-dark text-white font-black px-12 py-6 rounded-2xl text-xl shadow-2xl hover:scale-105 transition-transform">
              Chamar no WhatsApp
            </a>
            <Link to="/contato" className="bg-white text-brand-primary font-black px-12 py-6 rounded-2xl text-xl shadow-2xl hover:scale-105 transition-transform">
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
