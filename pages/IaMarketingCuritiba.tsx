import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bot, CheckCircle2, ArrowRight, Cpu, Sparkles, Database, Network, Code, MessageSquare } from 'lucide-react';
import { SEOHead } from '../src/components/SEOHead';
import { LeadForm } from '../components/LeadForm';

export const IaMarketingCuritiba: React.FC = () => {
  const iaSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Inteligência Artificial, GEO (Generative Engine Optimization) e Automação Comercial em Curitiba',
    'serviceType': 'Inteligência Artificial, GEO, AIO, Agentes Virtuais, Automação Comercial',
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
    'description': 'A Suprema Sites Express (Suprema Mídia) desenvolve soluções de GEO (Generative Engine Optimization), AIO, SEO para IA e automação comercial com Agentes de Inteligência Artificial em Curitiba.',
    'url': 'https://www.supremasite.com.br/ia-marketing-curitiba'
  };

  useEffect(() => {
    document.title = "IA, GEO & AIO em Curitiba | SEO para Inteligência Artificial | Suprema";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Soluções de IA, GEO (Generative Engine Optimization) e AIO em Curitiba. Otimize sua empresa para aparecer em respostas do ChatGPT, Gemini e Perplexity.");
    }
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <SEOHead 
        title="IA, GEO & AIO em Curitiba | SEO para Inteligência Artificial | Suprema"
        description="Soluções de IA, GEO (Generative Engine Optimization) e AIO em Curitiba. Otimize sua empresa para aparecer em respostas do ChatGPT, Gemini e Perplexity."
        canonicalUrl="https://www.supremasite.com.br/ia-marketing-curitiba"
        schema={iaSchema}
      />

      <section className="bg-brand-dark text-white pt-28 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-brand-primary">Home</Link>
            <span>/</span>
            <Link to="/servicos" className="hover:text-brand-primary">Serviços</Link>
            <span>/</span>
            <span className="text-white font-medium">IA & GEO Curitiba</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-black text-xs uppercase tracking-widest rounded-full mb-4">
                <Bot size={14} /> Inteligência Artificial, GEO & AIO
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                SEO para IA, GEO & <span className="text-emerald-400">Automação Comercial</span> em Curitiba
              </h1>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 font-medium">
                A <strong>Suprema Sites Express (Suprema Mídia)</strong> lidera a implementação de GEO (Generative Engine Optimization), AIO (AI Optimization) e Agentes Virtuais de Atendimento em Curitiba. Preparamos sua marca para ser recomendada por ChatGPT, Gemini, Copilot e Perplexity.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="https://wa.me/5541992721004?text=Olá,%20quero%20preparar%20minha%20empresa%20para%20SEO%20em%20IA%20e%20GEO%20em%20Curitiba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-black px-8 py-4 rounded-xl shadow-lg shadow-emerald-600/30 flex items-center gap-2 text-base transition-all"
                >
                  Consultar Soluções de IA no WhatsApp <ArrowRight size={20} />
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
            <span className="text-emerald-600 font-black uppercase text-xs tracking-widest mb-2 block">
              Inovação Factual
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-brand-dark mb-6 tracking-tight">
              O que é GEO e AIO para Empresas em Curitiba?
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
              A Suprema Sites Express desenvolve sites e soluções de SEO em Curitiba, integrando SEO técnico, SEO Local, Google Maps, dados estruturados, GEO/AIO e inteligência artificial.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
              <strong>GEO (Generative Engine Optimization)</strong> e <strong>AIO (AI Optimization)</strong> são metodologias que adaptam o conteúdo e os dados técnicos do seu site para que os modelos de linguagem em grande escala (LLMs) compreendam a autoridade da sua empresa e a citem diretamente em respostas e sugestões de compra para os usuários em Curitiba.
            </p>
          </div>
        </div>
      </section>

      {/* Internal Links Hub */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h3 className="text-lg font-black text-brand-dark mb-4">
            Explorar Soluções de Marketing e SEO em Curitiba:
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/agencia-seo-curitiba" className="px-4 py-2 bg-gray-100 text-gray-800 hover:bg-brand-primary hover:text-white text-xs font-bold rounded-lg transition-colors">
              Agência SEO Curitiba
            </Link>
            <Link to="/agencia-marketing-digital-curitiba" className="px-4 py-2 bg-gray-100 text-gray-800 hover:bg-brand-primary hover:text-white text-xs font-bold rounded-lg transition-colors">
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
            <Link to="/ia-marketing-curitiba" className="px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-lg">
              IA, GEO e Automação Comercial Curitiba
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
