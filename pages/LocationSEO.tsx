
import React, { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getNameFromSlug, getRegionFromSlug, scCities, cities, neighborhoods, slugify } from '../data/locations';
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
    document.title = `Criação de Sites em ${locationName}, ${region} | Suprema Site Express`;
    
    const schemaMarkup = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `Suprema Mídia - Criação de Sites em ${locationName}`,
      "description": `Especialistas em criação de sites rápidos e SEO local em ${locationName}, ${region}.`,
      "url": `https://www.supremasite.com.br/site-em/${slug}`,
      "telephone": "+5541987001004",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": locationName,
        "addressRegion": region,
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": region === "PR" ? "-25.4284" : "-27.5954",
        "longitude": region === "PR" ? "-49.2733" : "-48.5480"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaMarkup);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [locationName, slug, region]);

  const generateContent = (title: string, index: number) => {
    const texts = [
      `A visibilidade digital em ${locationName} é crucial para o sucesso de qualquer negócio no estado de ${region}. Com o aumento da concorrência, estar na primeira página do Google não é apenas uma vantagem, é uma necessidade para empresas de ${locationName}. Nossa equipe utiliza inteligência de dados para mapear o comportamento de busca dos consumidores de ${locationName}, criando sites que convertem cliques em faturamento real.`,
      `O SEO Local para ${locationName} foca em palavras-chave geolocalizadas. Quando alguém em ${locationName} busca por seu serviço, sua empresa precisa ser a primeira opção. Nós dominamos as técnicas que colocam marcas de ${locationName} no topo do Google Maps, garantindo fluxo constante de leads qualificados de toda a região de ${region}.`,
      `Performance técnica é o que nos diferencia em ${locationName}. Usamos tecnologia React e infraestrutura Cloud para garantir que o morador de ${locationName} acesse seu site em milissegundos. No mercado de ${region}, cada segundo de espera é um cliente perdido. Nossos sites em ${locationName} são otimizados para Core Web Vitals, garantindo prioridade nos algoritmos modernos do Google.`,
      `O suporte próximo é um valor fundamental para nossos clientes em ${locationName}. Atuamos com transparência e relatórios de ROI. Empresas em ${locationName} que iniciaram conosco viram um salto de visibilidade de até 1900% ao ano, consolidando-se como líderes de mercado em seus nichos em ${region}.`
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
            SEO Estratégico em {locationName} / {region}
          </span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
            DOMINE O GOOGLE EM <br/>
            <span className="text-brand-accent uppercase">{locationName}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-16 font-medium">
            Sua empresa no topo das buscas em <strong>{locationName}</strong>. Sites rápidos, otimizados e focados em gerar orçamentos reais em todo o <strong>{region === 'PR' ? 'Paraná' : 'Santa Catarina'}</strong>.
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
                 <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-8 leading-tight">Por que empresas em {locationName} escolhem a Suprema?</h2>
                 <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                   Clique em cada tópico para descobrir como nossa engenharia de performance pode transformar a realidade digital da sua marca em <strong>{locationName}</strong> e em todo o estado de <strong>{region}</strong>.
                 </p>
                 <div className="space-y-6">
                    <div className="flex items-center gap-4 text-brand-dark font-black"><CheckCircle className="text-green-500" size={24}/> Sites otimizados para a realidade de {locationName}</div>
                    <div className="flex items-center gap-4 text-brand-dark font-black"><CheckCircle className="text-green-500" size={24}/> Foco total na jornada de compra regional</div>
                    <div className="flex items-center gap-4 text-brand-dark font-black"><CheckCircle className="text-green-500" size={24}/> Otimização para Google Maps Local {region}</div>
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
                 <h2 className="text-3xl md:text-5xl font-black mb-8 leading-none">Solicite um Diagnóstico para {locationName}</h2>
                 <p className="text-gray-400 text-xl mb-10 leading-relaxed">
                   Nossa equipe está pronta para analisar seu mercado em {locationName} e propor a melhor estratégia de crescimento digital em {region}.
                 </p>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                       <span className="block text-brand-accent text-3xl font-black mb-1">+1900%</span>
                       <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Growth em {region}</span>
                    </div>
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                       <span className="block text-brand-primary text-3xl font-black mb-1">48h</span>
                       <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Entrega Express</span>
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
