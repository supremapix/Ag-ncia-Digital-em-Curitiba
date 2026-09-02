import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Zap, CheckCircle2, ArrowRight, BarChart3, Target, MousePointerClick, ShieldCheck, TrendingUp } from 'lucide-react';
import { SEOHead } from '../src/components/SEOHead';
import { LeadForm } from '../components/LeadForm';

export const GoogleAdsCuritiba: React.FC = () => {
  const adsSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Gestão de Google Ads e Tráfego Pago em Curitiba',
    'serviceType': 'Google Ads, Tráfego Pago, Gestão de Mídia Paga',
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
      'telephone': '+5541987001004',
      'url': 'https://www.supremasite.com.br/'
    },
    'areaServed': {
      '@type': 'City',
      'name': 'Curitiba'
    },
    'description': 'A Suprema Sites Express gerencia campanhas de Google Ads e tráfego pago para empresas em Curitiba, integrando anúncios patrocinados com landing pages e SEO.',
    'url': 'https://www.supremasite.com.br/google-ads-curitiba'
  };

  useEffect(() => {
    document.title = "Google Ads & Tráfego Pago em Curitiba | Agência de Mídia | Suprema";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Gestão profissional de Google Ads e tráfego pago em Curitiba. Campanhas otimizadas na Rede de Pesquisa, Google Maps e Remarketing com foco em ROI.");
    }
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <SEOHead 
        title="Google Ads & Tráfego Pago em Curitiba | Agência de Mídia | Suprema"
        description="Gestão profissional de Google Ads e tráfego pago em Curitiba. Campanhas otimizadas na Rede de Pesquisa, Google Maps e Remarketing com foco em ROI."
        canonicalUrl="https://www.supremasite.com.br/google-ads-curitiba"
        schema={adsSchema}
      />

      <section className="bg-brand-dark text-white pt-28 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-brand-primary">Home</Link>
            <span>/</span>
            <Link to="/servicos" className="hover:text-brand-primary">Serviços</Link>
            <span>/</span>
            <span className="text-white font-medium">Google Ads Curitiba</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/20 border border-amber-500/40 text-amber-400 font-black text-xs uppercase tracking-widest rounded-full mb-4">
                <Zap size={14} /> Mídia Paga & Performance
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                Gestão de <span className="text-amber-400">Google Ads & Tráfego Pago</span> em Curitiba
              </h1>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 font-medium">
                A <strong>Suprema Sites Express (Suprema Mídia)</strong> estrutura e gerencia campanhas de tráfego pago e Google Ads em Curitiba. Conectamos anúncios na Rede de Pesquisa e Google Maps a landing pages de alta conversão para gerar contatos qualificados.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="https://wa.me/5541987001004?text=Olá,%20quero%20anunciar%20minha%20empresa%20no%20Google%20Ads%20em%20Curitiba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-500 hover:bg-amber-600 text-brand-dark font-black px-8 py-4 rounded-xl shadow-lg shadow-amber-500/30 flex items-center gap-2 text-base transition-all"
                >
                  Orçar Campanhas no WhatsApp <ArrowRight size={20} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Distinction between SEO & Google Ads */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm">
            <span className="text-amber-600 font-black uppercase text-xs tracking-widest mb-2 block">
              Diferenciação Factual
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-brand-dark mb-6 tracking-tight">
              A Diferença entre Google Ads e SEO Orgânico em Curitiba
            </h2>
            <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
              <p>
                <strong>Google Ads (Mídia Paga):</strong> Entrega resultados e leads imediatos assim que o orçamento é ativado. É ideal para lançamentos, promoções sazonais e validação rápida de ofertas.
              </p>
              <p>
                <strong>SEO (Presença Orgânica):</strong> Constrói autoridade de longo prazo no Google e em assistentes de IA (GEO/AIO), garantindo tráfego contínuo sem custo direto por clique.
              </p>
              <p>
                A Suprema Sites Express desenvolve a estrutura técnica completa (sites, landing pages e rastreamento de conversões) para maximizar o retorno tanto em Google Ads quanto em SEO.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Links Hub */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h3 className="text-lg font-black text-brand-dark mb-4">
            Serviços Relacionados em Curitiba:
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/agencia-seo-curitiba" className="px-4 py-2 bg-gray-100 text-gray-800 hover:bg-brand-primary hover:text-white text-xs font-bold rounded-lg transition-colors">
              Agência SEO Curitiba
            </Link>
            <Link to="/agencia-marketing-digital-curitiba" className="px-4 py-2 bg-gray-100 text-gray-800 hover:bg-brand-primary hover:text-white text-xs font-bold rounded-lg transition-colors">
              Agência Marketing Digital Curitiba
            </Link>
            <Link to="/google-ads-curitiba" className="px-4 py-2 bg-amber-500 text-brand-dark text-xs font-black rounded-lg">
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
