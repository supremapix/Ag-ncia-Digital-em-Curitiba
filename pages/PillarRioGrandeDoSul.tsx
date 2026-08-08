import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Globe } from 'lucide-react';
import { rsCities, slugify } from '../data/locations';
import { SEOHead } from '../src/components/SEOHead';
import { SUPREMA_MEDIA } from '../src/constants/media';

export const PillarRioGrandeDoSul: React.FC = () => {
  const featuredRs = [
    'Porto Alegre', 'Caxias do Sul', 'Pelotas', 'Canoas', 'Santa Maria', 
    'Gravataí', 'Viamão', 'Novo Hamburgo', 'São Leopoldo', 'Rio Grande', 
    'Alvorada', 'Passo Fundo', 'Sapucaia do Sul', 'Uruguaiana', 'Santa Cruz do Sul', 'Bento Gonçalves'
  ];

  const pillarSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Criação de Sites e SEO Local no Rio Grande do Sul',
    'provider': {
      '@type': 'Organization',
      'name': 'Suprema Site Express',
      'url': 'https://www.supremasite.com.br/'
    },
    'areaServed': {
      '@type': 'State',
      'name': 'Rio Grande do Sul'
    },
    'description': 'Líder em criação de sites profissionais, landing pages e e-commerce com foco em SEO local no Rio Grande do Sul.',
    'url': 'https://www.supremasite.com.br/sites-em-rio-grande-do-sul/'
  };

  return (
    <div className="bg-brand-dark min-h-screen text-white pt-28 pb-20">
      <SEOHead 
        title="Criação de Sites no Rio Grande do Sul (RS) | Entrega 48h"
        description="Agência especializada em criação de sites profissionais, lojas virtuais e SEO local para Porto Alegre, Caxias do Sul e todo o Rio Grande do Sul."
        canonicalUrl="https://www.supremasite.com.br/sites-em-rio-grande-do-sul/"
        schema={pillarSchema}
      />

      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link to="/" className="hover:text-brand-primary">Home</Link>
          <span>/</span>
          <span className="text-white font-medium">Criação de Sites no Rio Grande do Sul</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="inline-block px-4 py-1.5 bg-brand-primary/20 border border-brand-primary/40 text-brand-primary font-black text-xs uppercase tracking-widest rounded-full mb-4">
              Cobertura Rio Grande do Sul (RS)
            </span>
            <h1 className="text-3xl md:text-5xl font-black leading-tight text-white mb-6">
              Criação de Sites Profissionais no <span className="text-brand-accent">Rio Grande do Sul</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              A Suprema Sites Express é a escolha ideal para negócios gaúchos que precisam de sites modernos em React, lojas virtuais e SEO Local agressivo com entrega garantida em 48 horas.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://wa.me/5541987001004?text=Olá,%20quero%20um%20site%20profissional%20no%20Rio%20Grande%20do%20Sul"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-primary hover:bg-blue-600 text-white font-black px-8 py-4 rounded-xl shadow-lg shadow-brand-primary/30 flex items-center gap-2 text-base transition-all"
              >
                Solicitar Orçamento no WhatsApp <ArrowRight size={20} />
              </a>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src={SUPREMA_MEDIA.services.ecommerce.url} 
              alt={SUPREMA_MEDIA.services.ecommerce.alt}
              loading="lazy"
              className="w-full h-80 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs uppercase font-bold text-brand-accent tracking-widest">Atendimento para Todo o RS</span>
              <p className="text-white font-bold text-lg">Presença digital sólida e veloz para Porto Alegre, Serra Gaúcha e Região Metropolitana</p>
            </div>
          </div>
        </div>

        {/* Destaques RS */}
        <div className="mb-16 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
          <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
            <Zap className="text-brand-accent" /> Principais Polos do Rio Grande do Sul
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {featuredRs.map((city) => (
              <Link
                key={city}
                to={`/site-em/${slugify(city)}`}
                className="bg-brand-dark/80 hover:bg-brand-primary p-4 rounded-xl border border-white/5 hover:border-brand-primary text-gray-200 hover:text-white transition-all flex items-center justify-between group"
              >
                <span className="font-bold text-sm">{city}</span>
                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>

        {/* Lista Cidades RS */}
        <div className="mb-16">
          <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
            <Globe className="text-brand-primary" /> Cidades do Rio Grande do Sul ({rsCities.length})
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {rsCities.map((city) => (
              <Link
                key={city}
                to={`/site-em/${slugify(city)}`}
                className="text-xs text-gray-400 hover:text-brand-accent hover:bg-white/5 px-3 py-2 rounded transition-colors truncate"
                title={`Criação de Sites em ${city} - RS`}
              >
                • {city}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
