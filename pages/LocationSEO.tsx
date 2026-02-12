
import React, { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getNameFromSlug, cities, neighborhoods, slugify } from '../data/locations';
import { LeadForm } from '../components/LeadForm';
import { VideoPlayer } from '../components/VideoPlayer';
import { 
  CheckCircle, MapPin, Globe, Rocket, Shield, Clock, TrendingUp, Layout, 
  Smartphone, Search, Zap, Award, Target, MousePointer, BarChart, Server,
  Lock, Headphones, Briefcase, Share2, Eye, Cpu
} from 'lucide-react';

export const LocationSEO: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const locationName = useMemo(() => getNameFromSlug(slug || ''), [slug]);
  const isCity = cities.includes(locationName);

  useEffect(() => {
    document.title = `Criação de Sites Profissionais em ${locationName} | Suprema Site`;
    // Update Meta Tags
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', `A melhor agência de criação de sites em ${locationName}. Sites otimizados para Google com crescimento de até 1900% ao ano. Atendimento express em 48h.`);
    }
    // Canonical URL
    let linkCanonical = document.querySelector("link[rel='canonical']");
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', `https://www.supremasite.com.br/site-em/${slug}`);
  }, [locationName, slug]);

  // Função para gerar blocos de texto longos para SEO (simulando 300+ palavras cada)
  const generateLongText = (title: string, index: number) => {
    const baseContent = [
      `Em ${locationName}, a concorrência no mercado digital tem crescido exponencialmente. Ter um site que apenas existe não é suficiente; é necessário uma plataforma de vendas que converta visitantes em clientes reais. Nossa equipe foca em engenharia de conversão, garantindo que cada clique em ${locationName} resulte em uma oportunidade de negócio. Atuamos com as tecnologias mais modernas do mercado para entregar sites que carregam em menos de 2 segundos.`,
      `O SEO local para ${locationName} é o pilar do nosso sucesso. Quando um usuário busca por serviços em ${locationName}, sua empresa precisa estar nas três primeiras posições do Google Maps. Nós otimizamos seu perfil comercial e integramos o site com palavras-chave geolocalizadas que trazem tráfego qualificado de toda a região de Curitiba. Esse processo gera um ROI imediato e sustentável ao longo dos anos.`,
      `Nossa infraestrutura de hospedagem em Curitiba atende perfeitamente à demanda de ${locationName}. Com servidores SSD e CDN global, garantimos que seu site em ${locationName} nunca fique fora do ar. Além disso, incluímos certificado SSL gratuito para todas as páginas, transmitindo segurança e profissionalismo para seus clientes que acessam o site de casa ou do trabalho em ${locationName}.`,
      `A experiência mobile em ${locationName} é nossa prioridade "First Class". Sabemos que 92% das buscas por serviços locais em ${locationName} ocorrem via smartphones. Por isso, todos os nossos layouts são testados em diversos dispositivos para garantir que o morador de ${locationName} tenha uma navegação fluida, intuitiva e rápida, facilitando o contato direto via WhatsApp.`,
      `O suporte técnico para empresas de ${locationName} é humanizado e rápido. Diferente de plataformas de aluguel de sites, na Suprema Site você fala com especialistas que conhecem a realidade comercial de ${locationName} e de Curitiba. Estamos prontos para realizar atualizações, tirar dúvidas e otimizar suas campanhas de tráfego pago para dominar o mercado local.`
    ];
    // Replicando para chegar aos 22 blocos com variações contextuais
    return baseContent[index % baseContent.length] + " " + baseContent[(index + 1) % baseContent.length] + " O diferencial de " + locationName + " é o seu público exigente, que valoriza empresas locais com presença digital sólida. Nosso compromisso é entregar essa autoridade através de um design exclusivo e textos persuasivos.";
  };

  const topics = [
    { icon: <Target />, title: `Estratégia Dominante em ${locationName}` },
    { icon: <Search />, title: `SEO Local Avançado em ${locationName}` },
    { icon: <Smartphone />, title: `Mobile-First para ${locationName}` },
    { icon: <Zap />, title: `Velocidade Máxima em ${locationName}` },
    { icon: <BarChart />, title: `Crescimento de 1900% em ${locationName}` },
    { icon: <Rocket />, title: `Lançamento Express 48h em ${locationName}` },
    { icon: <Shield />, title: `Segurança SSL para ${locationName}` },
    { icon: <Globe />, title: `Presença Global partindo de ${locationName}` },
    { icon: <Layout />, title: `UX Design Focado em ${locationName}` },
    { icon: <Clock />, title: `Suporte 24h para ${locationName}` },
    { icon: <TrendingUp />, title: `ROI Comprovado em ${locationName}` },
    { icon: <Award />, title: `Qualidade Suprema em ${locationName}` },
    { icon: <MousePointer />, title: `Taxa de Conversão em ${locationName}` },
    { icon: <Server />, title: `Cloud Hosting para ${locationName}` },
    { icon: <Lock />, title: `Proteção de Dados em ${locationName}` },
    { icon: <Headphones />, title: `Consultoria Grátis em ${locationName}` },
    { icon: <Briefcase />, title: `Marketing para Bairros de ${locationName}` },
    { icon: <Share2 />, title: `Social Integrado em ${locationName}` },
    { icon: <Eye />, title: `Visibilidade Maps em ${locationName}` },
    { icon: <Cpu />, title: `Tecnologia React em ${locationName}` },
    { icon: <CheckCircle />, title: `Satisfação em ${locationName}` },
    { icon: <Zap />, title: `Performance em ${locationName}` }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-brand-dark text-white py-24 lg:py-40">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center animate-slide-up">
          <span className="text-brand-accent font-black tracking-widest uppercase text-xs mb-4 inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full">
            Especialista em {isCity ? 'Cidades' : 'Bairros'}
          </span>
          <h1 className="text-4xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
            SITES EM <span className="text-brand-primary uppercase">{locationName}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-medium mb-12">
            Otimização SEO Local em <strong>{locationName}</strong> com foco em resultados reais. Alcance o topo do Google e aumente seu faturamento em até <strong>1900% ao ano</strong>.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://wa.me/5541987001004" className="shimmer-btn text-brand-dark font-black px-12 py-5 rounded-2xl text-xl shadow-2xl hover:scale-105 transition-transform">
              Quero Vender Mais em {locationName}
            </a>
          </div>
        </div>
      </section>

      {/* Grid de Conteúdo Massivo */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
          {topics.map((topic, i) => (
            <article key={i} className="flex flex-col gap-6 p-10 bg-gray-50 rounded-[3rem] border border-gray-100 hover:border-brand-primary/20 transition-all group animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flex items-center gap-4">
                <div className="bg-brand-dark text-white p-4 rounded-2xl group-hover:bg-brand-primary transition-colors">
                  {React.cloneElement(topic.icon as React.ReactElement, { size: 32 })}
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-brand-dark group-hover:text-brand-primary transition-colors">
                  {topic.title}
                </h2>
              </div>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p className="leading-relaxed text-justify first-letter:text-5xl first-letter:font-black first-letter:text-brand-primary first-letter:mr-3 first-letter:float-left">
                  {generateLongText(topic.title, i)}
                </p>
                <div className="mt-6 flex items-center gap-2 text-brand-primary font-bold uppercase text-xs tracking-widest">
                  <TrendingUp size={16}/> Impacto Regional em {locationName}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Seção de Vídeo e Conversão */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="container mx-auto px-4">
           <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2">
                 <h2 className="text-4xl md:text-6xl font-black mb-8 leading-none">Domine o Mercado em {locationName}</h2>
                 <p className="text-gray-400 text-xl mb-10 leading-relaxed">
                   Assista ao vídeo e entenda como nossa metodologia de criação de sites rápidos e SEO avançado coloca empresas de {locationName} na frente da concorrência em tempo recorde.
                 </p>
                 <VideoPlayer />
              </div>
              <div className="lg:w-1/2 w-full">
                 <LeadForm locationName={locationName} />
              </div>
           </div>
        </div>
      </section>

      {/* Outras Localidades */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl font-black text-brand-dark mb-12">Atendimento em toda Curitiba e Região</h2>
           <div className="flex flex-wrap justify-center gap-3">
              {[...cities, ...neighborhoods].slice(0, 40).map((loc, idx) => (
                <Link 
                  key={idx} 
                  to={`/site-em/${slugify(loc)}`}
                  className="px-4 py-2 bg-gray-50 hover:bg-brand-primary hover:text-white border border-gray-200 rounded-full text-xs font-bold transition-all"
                >
                  {loc}
                </Link>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};
