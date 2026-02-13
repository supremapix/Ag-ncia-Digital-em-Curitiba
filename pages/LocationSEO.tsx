
import React, { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getNameFromSlug, getRegionFromSlug, rsCities, scCities, cities, neighborhoods, slugify } from '../data/locations';
import { LeadForm } from '../components/LeadForm';
import { VideoPlayer } from '../components/VideoPlayer';
import { Accordion } from '../components/Accordion';
import { 
  CheckCircle, MapPin, Globe, Rocket, Shield, Clock, TrendingUp, Layout, 
  Smartphone, Search, Zap, Award, Target, MousePointer, BarChart, Server,
  Lock, Headphones, Briefcase, Share2, Eye, Cpu
} from 'lucide-react';

export const LocationSEO: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const locationName = useMemo(() => getNameFromSlug(slug || ''), [slug]);
  const region = useMemo(() => getRegionFromSlug(slug || ''), [slug]);

  useEffect(() => {
    const regionFullName = region === 'PR' ? 'Paraná' : (region === 'SC' ? 'Santa Catarina' : 'Rio Grande do Sul');
    document.title = `Criação de Sites em ${locationName}, ${region} | Suprema Site Express`;
    
    // Coordenadas baseadas no estado para o Google Maps Schema
    const coords = {
      "PR": { lat: "-25.4284", lng: "-49.2733" },
      "SC": { lat: "-27.5954", lng: "-48.5480" },
      "RS": { lat: "-30.0346", lng: "-51.2177" }
    };

    const schemaMarkup = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": `Suprema Mídia - Criação de Sites em ${locationName}`,
      "alternateName": "Suprema Site Express",
      "description": `Especialistas em criação de sites profissionais, landing pages e SEO local em ${locationName}, ${region}. Projetos entregues em 48h com foco em resultados reais.`,
      "url": `https://www.supremasite.com.br/site-em/${slug}`,
      "logo": "https://www.supremasite.com.br/logo.png",
      "image": "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80",
      "telephone": "+5541987001004",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": locationName,
        "addressRegion": region,
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": coords[region as keyof typeof coords]?.lat || "-25.4284",
        "longitude": coords[region as keyof typeof coords]?.lng || "-49.2733"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      "areaServed": {
        "@type": "City",
        "name": locationName,
        "sameAs": `https://pt.wikipedia.org/wiki/${locationName.replace(/\s+/g, '_')}`
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Serviços de Desenvolvimento Web",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Criação de Sites Institucionais",
              "description": "Sites rápidos e otimizados entregues em até 48 horas."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO Local Avançado",
              "description": "Otimização para busca orgânica e Google Maps para dominar a região."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Landing Pages de Alta Conversão",
              "description": "Páginas focadas em vendas para campanhas de Google Ads e Redes Sociais."
            }
          }
        ]
      }
    };

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
  }, [locationName, slug, region]);

  const generateContent = (title: string, index: number) => {
    const regionName = region === 'PR' ? 'Paraná' : (region === 'SC' ? 'Santa Catarina' : 'Rio Grande do Sul');
    const texts = [
      `A visibilidade digital em ${locationName} é crucial para o sucesso de qualquer negócio no estado do ${regionName}. No mercado gaúcho e sulista, estar na primeira página do Google é um diferencial competitivo decisivo para empresas de ${locationName}. Nossa equipe utiliza inteligência de dados para mapear o comportamento de busca dos consumidores de ${locationName}, criando sites que convertem cliques em faturamento real.`,
      `O SEO Local para ${locationName} foca em palavras-chave geolocalizadas. Quando alguém em ${locationName} ou em qualquer cidade do ${regionName} busca por seu serviço, sua empresa precisa ser a primeira opção. Nós dominamos as técnicas que colocam marcas de ${locationName} no topo do Google Maps, garantindo fluxo constante de leads qualificados.`,
      `Performance técnica é o que nos diferencia em ${locationName}. Usamos tecnologia React e infraestrutura Cloud para garantir que o morador de ${locationName} acesse seu site em milissegundos. No mercado altamente profissional do ${regionName}, cada segundo de espera é um cliente perdido. Nossos sites em ${locationName} são otimizados para Core Web Vitals.`,
      `O suporte próximo é um valor fundamental para nossos clientes em ${locationName}. Atuamos com transparência e relatórios de ROI em todo o ${regionName}. Empresas em ${locationName} que iniciaram conosco viram um salto de visibilidade de até 1900% ao ano, consolidando-se como referências regionais.`
    ];
    return texts[index % texts.length] + " " + texts[(index + 1) % texts.length];
  };

  const topics = [
    { title: `Oportunidade Digital em ${locationName}`, icon: <Target className="text-brand-accent"/> },
    { title: `SEO Local Dominante para ${locationName}`, icon: <Search className="text-brand-primary"/> },
    { title: `Performance Web em ${locationName}`, icon: <Zap className="text-brand-accent"/> },
    { title: `Hospedagem de Elite em ${locationName}`, icon: <Server className="text-brand-primary"/> },
    { title: `Mobile-First em ${locationName}`, icon: <Smartphone className="text-brand-accent"/> },
    { title: `Crescimento de Visibilidade em ${locationName}`, icon: <TrendingUp className="text-brand-primary"/> },
    { title: `Segurança de Dados em ${locationName}`, icon: <Shield className="text-brand-accent"/> },
    { title: `Consultoria em ${locationName}`, icon: <Headphones className="text-brand-primary"/> },
    { title: `Engenharia de Conversão em ${locationName}`, icon: <MousePointer className="text-brand-accent"/> },
    { title: `Marketing Geográfico em ${locationName}`, icon: <Globe className="text-brand-primary"/> },
    { title: `Inovação Tecnológica em ${locationName}`, icon: <Cpu className="text-brand-accent"/> },
    { title: `Presença no Maps em ${locationName}`, icon: <MapPin className="text-brand-primary"/> }
  ];

  const accordionItems = topics.map((t, i) => ({
    question: t.title,
    answer: generateContent(t.title, i)
  }));

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-brand-dark text-white py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/10 opacity-30 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 text-center animate-slide-up">
          <span className="bg-brand-primary text-white font-black text-[10px] uppercase tracking-[0.4em] px-5 py-2 rounded-full border border-white/20 mb-8 inline-block">
            Estratégia Local: {locationName} / {region}
          </span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
            DOMINE O GOOGLE EM <br/>
            <span className="text-brand-accent uppercase">{locationName}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-16 font-medium">
            Sua empresa no topo das buscas em <strong>{locationName}</strong>. Sites rápidos, otimizados e focados em gerar orçamentos reais em todo o <strong>{region === 'PR' ? 'Paraná' : (region === 'SC' ? 'Santa Catarina' : 'Rio Grande do Sul')}</strong>.
          </p>
          <a href="https://wa.me/5541987001004" className="shimmer-btn text-brand-dark font-black px-12 py-6 rounded-2xl text-xl shadow-2xl hover:scale-105 transition-transform inline-block">
            Atendimento Express em {locationName}
          </a>
        </div>
      </section>

      {/* Accordion Content Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
           <div className="flex flex-col lg:flex-row gap-20">
              <div className="lg:w-1/2">
                 <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-8 leading-tight">Por que empresas de {locationName} escolhem a Suprema?</h2>
                 <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                   Nossa engenharia de performance é desenhada para a realidade competitiva de <strong>{locationName}</strong> e de todo o <strong>{region}</strong>.
                 </p>
                 <div className="space-y-6">
                    <div className="flex items-center gap-4 text-brand-dark font-black"><CheckCircle className="text-green-500" size={24}/> Sites otimizados para buscas em {locationName}</div>
                    <div className="flex items-center gap-4 text-brand-dark font-black"><CheckCircle className="text-green-500" size={24}/> Foco em conversão regional no {region}</div>
                    <div className="flex items-center gap-4 text-brand-dark font-black"><CheckCircle className="text-green-500" size={24}/> Otimização especializada para Google Maps {region}</div>
                 </div>
                 <div className="mt-12 hidden lg:block">
                   <VideoPlayer />
                 </div>
              </div>
              <div className="lg:w-1/2">
                 <Accordion items={accordionItems} />
              </div>
           </div>
        </div>
      </section>

      {/* Conversão */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="container mx-auto px-4">
           <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                 <h2 className="text-3xl md:text-5xl font-black mb-8 leading-none">Cresça em {locationName}</h2>
                 <p className="text-gray-400 text-xl mb-10 leading-relaxed">
                   Análise gratuita de mercado para sua empresa em {locationName}. Atendimento prioritário para o estado de {region}.
                 </p>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                       <span className="block text-brand-accent text-3xl font-black mb-1">+1900%</span>
                       <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Growth Local</span>
                    </div>
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                       <span className="block text-brand-primary text-3xl font-black mb-1">48h</span>
                       <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Tempo de Entrega</span>
                    </div>
                 </div>
              </div>
              <div className="lg:w-1/2 w-full">
                 <LeadForm locationName={locationName} />
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};
