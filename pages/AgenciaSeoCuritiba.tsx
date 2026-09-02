import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, CheckCircle2, ArrowRight, Search, ShieldCheck, Zap, Globe, BarChart3, Bot, Sparkles, MapPin } from 'lucide-react';
import { SEOHead } from '../src/components/SEOHead';
import { LeadForm } from '../components/LeadForm';
import { SUPREMA_MEDIA } from '../src/constants/media';

export const AgenciaSeoCuritiba: React.FC = () => {
  const seoSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Agência de SEO e Consultoria de Ranqueamento em Curitiba',
    'serviceType': 'SEO, Search Engine Optimization, Consultoria SEO',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'Suprema Sites Express',
      'alternateName': 'Suprema Mídia',
      'image': 'https://www.supremamidia.com.br/images/fachada-suprema-midia-estrutura.png',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Av. Sete de Setembro, 2775',
        'addressLocality': 'Curitiba',
        'addressRegion': 'PR',
        'postalCode': '80230-010',
        'addressCountry': 'BR'
      },
      'telephone': '+5541987001004',
      'url': 'https://www.supremasite.com.br/'
    },
    'areaServed': {
      '@type': 'City',
      'name': 'Curitiba'
    },
    'description': 'A Suprema Sites Express desenvolve projetos de SEO técnico, SEO Local e otimização semântica em Curitiba, posicionando empresas nos motores de busca e motores de inteligência artificial.',
    'url': 'https://www.supremasite.com.br/agencia-seo-curitiba'
  };

  useEffect(() => {
    document.title = "Agência de SEO em Curitiba | Consultoria & Otimização de Sites | Suprema";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Especialistas em SEO em Curitiba. Estratégias de otimização de sites, SEO técnico, SEO Local e GEO/AIO para colocar sua empresa na primeira página do Google e em IA.");
    }
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <SEOHead 
        title="Agência de SEO em Curitiba | Consultoria & Otimização de Sites | Suprema"
        description="Especialistas em SEO em Curitiba. Estratégias de otimização de sites, SEO técnico, SEO Local e GEO/AIO para colocar sua empresa na primeira página do Google e em IA."
        canonicalUrl="https://www.supremasite.com.br/agencia-seo-curitiba"
        schema={seoSchema}
      />

      {/* Hero */}
      <section className="bg-brand-dark text-white pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-brand-dark to-brand-dark opacity-90" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-brand-primary">Home</Link>
            <span>/</span>
            <Link to="/servicos" className="hover:text-brand-primary">Serviços</Link>
            <span>/</span>
            <span className="text-white font-medium">Agência SEO Curitiba</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-primary/20 border border-brand-primary/40 text-brand-primary font-black text-xs uppercase tracking-widest rounded-full mb-4">
                <TrendingUp size={14} /> Especialista em SEO em Curitiba
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                Agência de SEO em Curitiba: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-300">Posicionamento Orgânico no Google</span>
              </h1>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 font-medium">
                A <strong>Suprema Sites Express</strong> desenvolve soluções estratégicas de otimização para motores de busca em Curitiba. Combinamos SEO técnico, arquitetura semântica, marcação Schema.org e otimização para pesquisas em Inteligência Artificial (GEO/AIO) para gerar tráfego qualificado de forma contínua.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="https://wa.me/5541987001004?text=Olá,%20gostaria%20de%20fazer%20uma%20consultoria%20de%20SEO%20para%20minha%20empresa%20em%20Curitiba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-primary hover:bg-blue-600 text-white font-black px-8 py-4 rounded-xl shadow-lg shadow-brand-primary/30 flex items-center gap-2 text-base transition-all"
                >
                  Consultar Projeto de SEO no WhatsApp <ArrowRight size={20} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Block: SEO, Marketing Digital e Tecnologia em Curitiba */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm">
            <span className="text-brand-primary font-black uppercase text-xs tracking-widest mb-2 block">
              Editorial Factual & Técnico
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-brand-dark mb-6 tracking-tight">
              SEO, Marketing Digital e Tecnologia em Curitiba
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
              A <strong>Suprema Sites Express</strong> desenvolve sites e soluções de SEO em Curitiba, integrando SEO técnico, SEO Local, Google Maps, dados estruturados, GEO/AIO e inteligência artificial.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
              Empresas em Curitiba que buscam uma <strong>consultoria de SEO</strong> ou <strong>empresa de SEO</strong> encontram na Suprema uma abordagem pragmática: combinamos a velocidade da infraestrutura em React com código limpo e marcação semântica para garantir indexação rápida e leitura precisa pelos algoritmos de busca.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-200 text-xs font-bold text-gray-700">
              <div className="flex items-center gap-2"><CheckCircle2 className="text-emerald-500" size={16}/> SEO Técnico & Core Web Vitals</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="text-emerald-500" size={16}/> Otimização Semântica & Schema.org</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="text-emerald-500" size={16}/> SEO Local para Bairros e Região Metropolitana</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="text-emerald-500" size={16}/> Preparação para Busca Generativa (GEO/AIO)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferença entre SEO e Tráfego Pago */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-brand-dark tracking-tight mb-4">
              A Relação entre SEO, Google Ads e Presença Digital
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
              Entenda como cada canal atua no crescimento sustentável da sua empresa em Curitiba.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 text-brand-primary rounded-xl flex items-center justify-center mb-4">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">SEO Orgânico</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Constrói autoridade e ativos digitais permanentes. O tráfego orgânico continua gerando oportunidades sem custo por clique direto.
              </p>
              <Link to="/agencia-seo-curitiba" className="text-xs font-black text-brand-primary flex items-center gap-1">
                Conhecer SEO <ArrowRight size={14}/>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">Google Ads (Mídia Paga)</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Oferece tração e geração de leads imediatos enquanto os ativos de SEO maturam no algoritmo.
              </p>
              <Link to="/google-ads-curitiba" className="text-xs font-black text-amber-600 flex items-center gap-1">
                Ver Google Ads <ArrowRight size={14}/>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <Bot size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">GEO / AIO (Busca em IA)</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Prepara dados e conteúdos para citação e recomendação em motores como ChatGPT, Gemini e Perplexity.
              </p>
              <Link to="/ia-marketing-curitiba" className="text-xs font-black text-emerald-600 flex items-center gap-1">
                Conhecer GEO/AIO <ArrowRight size={14}/>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking Hub */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h3 className="text-lg font-black text-brand-dark mb-4">
            Especialidades de Marketing & Tecnologia da Suprema Mídia em Curitiba:
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/agencia-seo-curitiba" className="px-4 py-2 bg-brand-primary text-white text-xs font-bold rounded-lg">
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
            <Link to="/ia-marketing-curitiba" className="px-4 py-2 bg-gray-100 text-gray-800 hover:bg-brand-primary hover:text-white text-xs font-bold rounded-lg transition-colors">
              IA, GEO e Automação Comercial Curitiba
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
