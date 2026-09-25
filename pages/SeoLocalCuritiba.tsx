import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, CheckCircle2, ArrowRight, Navigation, Building, Star, Search, ShieldCheck } from 'lucide-react';
import { SEOHead } from '../src/components/SEOHead';
import { LeadForm } from '../components/LeadForm';

export const SeoLocalCuritiba: React.FC = () => {
  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'SEO Local e Otimização para Google Maps e Google Meu Negócio em Curitiba',
    'serviceType': 'SEO Local, Otimização de Google Maps, Google Meu Negócio',
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
    'description': 'A Suprema Sites Express otimiza perfis do Google Meu Negócio e desenvolve SEO Local para empresas nos bairros e regiões de Curitiba.',
    'url': 'https://www.supremasite.com.br/seo-local-curitiba'
  };

  useEffect(() => {
    document.title = "SEO Local & Google Maps em Curitiba | Google Meu Negócio | Suprema";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Especialistas em SEO Local e Google Maps em Curitiba. Otimização do Google Meu Negócio, presença nos bairros e atração de clientes locais.");
    }
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <SEOHead 
        title="SEO Local & Google Maps em Curitiba | Google Meu Negócio | Suprema"
        description="Especialistas em SEO Local e Google Maps em Curitiba. Otimização do Google Meu Negócio, presença nos bairros e atração de clientes locais."
        canonicalUrl="https://www.supremasite.com.br/seo-local-curitiba"
        schema={localSchema}
      />

      <section className="bg-brand-dark text-white pt-28 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-brand-primary">Home</Link>
            <span>/</span>
            <Link to="/servicos" className="hover:text-brand-primary">Serviços</Link>
            <span>/</span>
            <span className="text-white font-medium">SEO Local Curitiba</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-500/20 border border-red-500/40 text-red-400 font-black text-xs uppercase tracking-widest rounded-full mb-4">
                <MapPin size={14} /> Dominância Regional no Google Maps
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                SEO Local & <span className="text-red-400">Google Maps</span> em Curitiba
              </h1>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 font-medium">
                A <strong>Suprema Sites Express (Suprema Mídia)</strong> é referência em SEO Local e otimização do Google Meu Negócio em Curitiba. Atendemos estabelecimentos comerciais, prestadores de serviços, médicos, advogados e escritórios nos 75 bairros oficiais de Curitiba.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="https://wa.me/5541992721004?text=Olá,%20quero%20otimizar%20minha%20empresa%20no%20Google%20Maps%20em%20Curitiba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white font-black px-8 py-4 rounded-xl shadow-lg shadow-red-600/30 flex items-center gap-2 text-base transition-all"
                >
                  Otimizar Meu Google Maps no WhatsApp <ArrowRight size={20} />
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
            <span className="text-red-600 font-black uppercase text-xs tracking-widest mb-2 block">
              Estratégia Hiperlocal
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-brand-dark mb-6 tracking-tight">
              Como Funciona o SEO Local e Google Meu Negócio em Curitiba
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
              A Suprema Sites Express desenvolve sites e soluções de SEO em Curitiba, integrando SEO técnico, SEO Local, Google Maps, dados estruturados, GEO/AIO e inteligência artificial.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
              Para aparecer nos resultados de mapa do Google (Pack de 3 do Google Maps), alinhamos dados NAP (Nome, Endereço, Telefone) consistentes, marcação geolocalizada no site e otimização do perfil empresarial no Google Meu Negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h3 className="text-lg font-black text-brand-dark mb-4">
            Explorar Soluções Específicas em Curitiba:
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
            <Link to="/seo-local-curitiba" className="px-4 py-2 bg-red-600 text-white text-xs font-bold rounded-lg">
              SEO Local & Google Maps Curitiba
            </Link>
            <Link to="/site-em/curitiba" className="px-4 py-2 bg-gray-100 text-gray-800 hover:bg-brand-primary hover:text-white text-xs font-bold rounded-lg transition-colors">
              Criação de Sites Curitiba
            </Link>
            <Link to="/bairros-curitiba" className="px-4 py-2 bg-gray-100 text-gray-800 hover:bg-brand-primary hover:text-white text-xs font-bold rounded-lg transition-colors">
              Bairros de Curitiba (IPPUC)
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
