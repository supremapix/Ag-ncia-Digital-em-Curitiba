import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { neighborhoods, slugify } from '../data/locations';
import { SEOHead } from '../src/components/SEOHead';
import { SUPREMA_MEDIA } from '../src/constants/media';

export const PillarBairrosCuritiba: React.FC = () => {
  const official75 = neighborhoods.slice(0, 75);
  const unofficial = neighborhoods.slice(75);

  const pillarSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Criação de Sites e SEO Local nos Bairros de Curitiba',
    'provider': {
      '@type': 'Organization',
      'name': 'Suprema Site Express',
      'url': 'https://www.supremasite.com.br/'
    },
    'areaServed': {
      '@type': 'City',
      'name': 'Curitiba'
    },
    'description': 'Criação de sites profissionais e SEO Local para empresas, consultórios e lojas nos 75 bairros oficiais do IPPUC e principais regiões de Curitiba.',
    'url': 'https://www.supremasite.com.br/bairros-curitiba/'
  };

  return (
    <div className="bg-brand-dark min-h-screen text-white pt-28 pb-20">
      <SEOHead 
        title="Criação de Sites nos Bairros de Curitiba (IPPUC) | 48h"
        description="Agência especializada em criação de sites profissionais e SEO Local nos 75 bairros oficiais de Curitiba e regiões metropolitana. Sede no Batel com entrega em 48h."
        canonicalUrl="https://www.supremasite.com.br/bairros-curitiba/"
        schema={pillarSchema}
      />

      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link to="/" className="hover:text-brand-primary">Home</Link>
          <span>/</span>
          <span className="text-white font-medium">Bairros de Curitiba</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="inline-block px-4 py-1.5 bg-brand-primary/20 border border-brand-primary/40 text-brand-primary font-black text-xs uppercase tracking-widest rounded-full mb-4">
              Domínio Total em Curitiba
            </span>
            <h1 className="text-3xl md:text-5xl font-black leading-tight text-white mb-6">
              Criação de Sites nos Bairros de <span className="text-brand-accent">Curitiba</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              A Suprema Sites Express é a agência número #1 com sede no Batel / Rebouças em Curitiba. Atendemos todos os 75 bairros oficiais reconhecidos pelo IPPUC e regiões populares com SEO Local cirúrgico.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://wa.me/5541992721004?text=Olá,%20quero%20um%20site%20para%20meu%20bairro%20em%20Curitiba"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-primary hover:bg-blue-600 text-white font-black px-8 py-4 rounded-xl shadow-lg shadow-brand-primary/30 flex items-center gap-2 text-base transition-all"
              >
                Falar com Especialista em Curitiba <ArrowRight size={20} />
              </a>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src={SUPREMA_MEDIA.office.sedeNova.url} 
              alt={SUPREMA_MEDIA.office.sedeNova.alt}
              loading="lazy"
              className="w-full h-80 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs uppercase font-bold text-brand-accent tracking-widest">Sede Própria na Av. Sete de Setembro, 2775</span>
              <p className="text-white font-bold text-lg">Batel / Rebouças, Curitiba - PR</p>
            </div>
          </div>
        </div>

        {/* 75 Bairros Oficiais IPPUC */}
        <div className="mb-16 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
          <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
            <MapPin className="text-brand-accent" /> 75 Bairros Oficiais de Curitiba (IPPUC)
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            Cada página de bairro possui estratégias customizadas de SEO semântico, mapas interativos, copywriting focado no comércio local e chamada direta para WhatsApp:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {official75.map((bairro) => (
              <Link
                key={bairro}
                to={`/site-em/${slugify(bairro)}`}
                className="bg-brand-dark/80 hover:bg-brand-primary p-3 rounded-lg border border-white/5 text-gray-200 hover:text-white transition-all text-sm font-semibold flex items-center justify-between group"
              >
                <span className="truncate">{bairro}</span>
                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 shrink-0 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>

        {/* Vilas e Regiões Populares */}
        {unofficial.length > 0 && (
          <div className="mb-16 bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
              <Zap className="text-brand-primary" /> Vilas e Regiões Populares de Curitiba
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {unofficial.map((bairro) => (
                <Link
                  key={bairro}
                  to={`/site-em/${slugify(bairro)}`}
                  className="text-xs text-gray-400 hover:text-brand-accent hover:bg-white/5 px-3 py-2 rounded transition-colors truncate"
                  title={`Criação de Sites no bairro ${bairro} em Curitiba`}
                >
                  • {bairro}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
