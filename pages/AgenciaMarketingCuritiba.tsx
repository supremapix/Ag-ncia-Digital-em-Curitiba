import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, CheckCircle2, ArrowRight, Globe, TrendingUp, Zap, BarChart3, Users, Building2 } from 'lucide-react';
import { SEOHead } from '../src/components/SEOHead';
import { LeadForm } from '../components/LeadForm';

export const AgenciaMarketingCuritiba: React.FC = () => {
  const mktSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Agência de Marketing Digital e Performance em Curitiba',
    'serviceType': 'Marketing Digital, Agência de Performance, Presença Digital',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'Suprema Sites Express',
      'alternateName': 'Suprema Mídia',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Av. Sete de Setembro, 2775',
        'addressLocality': 'Curitiba',
        'addressRegion': 'PR',
        'postalCode': '80230-010',
        'addressCountry': 'BR'
      },
      'telephone': '+5541992721004',
      'url': 'https://www.supremasite.com.br/'
    },
    'areaServed': {
      '@type': 'City',
      'name': 'Curitiba'
    },
    'description': 'A Suprema Sites Express (Suprema Mídia) atua como agência de marketing digital e tecnologia em Curitiba, integrando criação de sites, SEO, tráfego pago e automação.',
    'url': 'https://www.supremasite.com.br/agencia-marketing-digital-curitiba'
  };

  useEffect(() => {
    document.title = "Agência de Marketing Digital em Curitiba | Performance & SEO | Suprema";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Agência de marketing digital em Curitiba. Estratégias integradas de SEO, tráfego pago, desenvolvimento de sites e inteligência artificial para empresas.");
    }
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <SEOHead 
        title="Agência de Marketing Digital em Curitiba | Performance & SEO | Suprema"
        description="Agência de marketing digital em Curitiba. Estratégias integradas de SEO, tráfego pago, desenvolvimento de sites e inteligência artificial para empresas."
        canonicalUrl="https://www.supremasite.com.br/agencia-marketing-digital-curitiba"
        schema={mktSchema}
      />

      <section className="bg-brand-dark text-white pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="auto"
            className="w-full h-full object-cover opacity-45 filter saturate-110"
          >
            <source src="https://img.supremasite.com.br/seo-omar.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#070b14] via-[#070b14]/85 to-[#070b14]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-[#070b14]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-brand-primary">Home</Link>
            <span>/</span>
            <Link to="/servicos" className="hover:text-brand-primary">Serviços</Link>
            <span>/</span>
            <span className="text-white font-medium">Agência de Marketing Digital Curitiba</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-primary/20 border border-brand-primary/40 text-brand-primary font-black text-xs uppercase tracking-widest rounded-full mb-4">
                <Sparkles size={14} /> Agência de Marketing Digital & Tecnologia
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                Agência de Marketing Digital em <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-300">Curitiba</span>
              </h1>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 font-medium">
                A <strong>Suprema Sites Express (Suprema Mídia)</strong> é uma agência de marketing digital em Curitiba focada na integração de engenharia de software, SEO de alta performance, tráfego pago em Google Ads e automação comercial para alavancar negócios.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="https://wa.me/5541992721004?text=Olá,%20quero%20conhecer%20as%20soluções%20da%20agência%20de%20marketing%20digital%20em%20Curitiba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-primary hover:bg-blue-600 text-white font-black px-8 py-4 rounded-xl shadow-lg shadow-brand-primary/30 flex items-center gap-2 text-base transition-all"
                >
                  Falar com Nossos Especialistas no WhatsApp <ArrowRight size={20} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Block */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm">
            <span className="text-brand-primary font-black uppercase text-xs tracking-widest mb-2 block">
              Estratégia Integrada
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-brand-dark mb-6 tracking-tight">
              SEO, Marketing Digital e Tecnologia em Curitiba
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
              A Suprema Sites Express desenvolve sites e soluções de SEO em Curitiba, integrando SEO técnico, SEO Local, Google Maps, dados estruturados, GEO/AIO e inteligência artificial.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
              Ao escolher uma <strong>empresa de marketing digital em Curitiba</strong>, negócios locais necessitam de resultados reais e mensuráveis. Unimos a criação de ativos proprietários (sites e landing pages) a estratégias ativas de atração de clientes via buscas e mídias pagas.
            </p>
          </div>
        </div>
      </section>

      {/* Internal Links Hub */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h3 className="text-lg font-black text-brand-dark mb-4">
            Explorar Soluções Específicas em Curitiba:
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/agencia-seo-curitiba" className="px-4 py-2 bg-gray-100 text-gray-800 hover:bg-brand-primary hover:text-white text-xs font-bold rounded-lg transition-colors">
              Agência SEO Curitiba
            </Link>
            <Link to="/agencia-marketing-digital-curitiba" className="px-4 py-2 bg-brand-primary text-white text-xs font-bold rounded-lg">
              Agência Marketing Digital Curitiba
            </Link>
            <Link to="/google-ads-curitiba" className="px-4 py-2 bg-gray-100 text-gray-800 hover:bg-brand-primary hover:text-white text-xs font-bold rounded-lg transition-colors">
              Google Ads & Tráfego Pago Curitiba
            </Link>
            <Link to="/seo-local-curitiba" className="px-4 py-2 bg-gray-100 text-gray-800 hover:bg-brand-primary hover:text-white text-xs font-bold rounded-lg transition-colors">
              SEO Local & Google Maps Curitiba
            </Link>
            <Link to="/site-em/curitiba" className="px-4 py-2 bg-gray-100 text-gray-800 hover:bg-brand-primary hover:text-white text-xs font-bold rounded-lg transition-colors">
              Criação de Sites Curitiba
            </Link>
            <Link to="/ia-marketing-curitiba" className="px-4 py-2 bg-gray-100 text-gray-800 hover:bg-brand-primary hover:text-white text-xs font-bold rounded-lg transition-colors">
              IA, GEO e Automação Comercial Curitiba
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
