import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Globe } from 'lucide-react';
import { scCities, slugify } from '../data/locations';
import { SEOHead } from '../src/components/SEOHead';
import { SUPREMA_MEDIA } from '../src/constants/media';

export const PillarSantaCatarina: React.FC = () => {
  const featuredSc = [
    'Florianópolis', 'Joinville', 'Blumenau', 'Balneário Camboriú', 'Itajaí', 
    'Chapecó', 'Criciúma', 'Jaraguá do Sul', 'Lages', 'Palhoça', 'Brusque', 
    'Tubarao', 'São José', 'Navegantes', 'Itapema', 'Camboriú'
  ];

  const pillarSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Criação de Sites e SEO Local no Estado de Santa Catarina',
    'provider': {
      '@type': 'Organization',
      'name': 'Suprema Site Express',
      'url': 'https://www.supremasite.com.br/'
    },
    'areaServed': {
      '@type': 'State',
      'name': 'Santa Catarina'
    },
    'description': 'Líder em criação de sites profissionais, landing pages e e-commerce para empresas e negócios em Santa Catarina.',
    'url': 'https://www.supremasite.com.br/sites-em-santa-catarina/'
  };

  return (
    <div className="bg-brand-dark min-h-screen text-white pt-28 pb-20">
      <SEOHead 
        title="Criação de Sites em Santa Catarina (SC) | Entrega em 48h"
        description="Agência especializada em criação de sites profissionais, e-commerce e SEO local para todas as cidades de Santa Catarina. Sites em React com máxima performance."
        canonicalUrl="https://www.supremasite.com.br/sites-em-santa-catarina/"
        schema={pillarSchema}
      />

      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link to="/" className="hover:text-brand-primary">Home</Link>
          <span>/</span>
          <span className="text-white font-medium">Criação de Sites em Santa Catarina</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="inline-block px-4 py-1.5 bg-brand-accent/20 border border-brand-accent/40 text-brand-accent font-black text-xs uppercase tracking-widest rounded-full mb-4">
              Cobertura Santa Catarina (SC)
            </span>
            <h1 className="text-3xl md:text-5xl font-black leading-tight text-white mb-6">
              Criação de Sites Profissionais em <span className="text-brand-accent">Santa Catarina</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              A Suprema Sites Express impulsiona o mercado catarinense com sites de altíssima conversão, lojas virtuais e landing pages de alta velocidade entregues em 48h para empresas de SC.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://wa.me/5541992721004?text=Olá,%20quero%20um%20site%20profissional%20em%20Santa%20Catarina"
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
              src={SUPREMA_MEDIA.services.design2025.url} 
              alt={SUPREMA_MEDIA.services.design2025.alt}
              loading="lazy"
              className="w-full h-80 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs uppercase font-bold text-brand-accent tracking-widest">Atendimento Digital Ágil</span>
              <p className="text-white font-bold text-lg">Soluções digitais completas para Florianópolis, Joinville, Blumenau e todo o litoral catarinense</p>
            </div>
          </div>
        </div>

        {/* Destaques SC */}
        <div className="mb-16 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
          <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
            <Zap className="text-brand-accent" /> Principais Cidades de Santa Catarina
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {featuredSc.map((city) => (
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

        {/* Lista Cidades SC */}
        <div className="mb-16">
          <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
            <Globe className="text-brand-primary" /> Cidades de Santa Catarina ({scCities.length})
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {scCities.map((city) => (
              <Link
                key={city}
                to={`/site-em/${slugify(city)}`}
                className="text-xs text-gray-400 hover:text-brand-accent hover:bg-white/5 px-3 py-2 rounded transition-colors truncate"
                title={`Criação de Sites em ${city} - SC`}
              >
                • {city}
              </Link>
            ))}
          </div>
        </div>

        {/* FAQ Details */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-black text-white mb-6">Dúvidas Frequentes sobre Criação de Sites em SC</h2>
          <div className="space-y-4">
            <details className="bg-brand-dark/60 p-5 rounded-xl border border-white/5 group">
              <summary className="font-bold text-lg cursor-pointer text-white flex justify-between items-center">
                Vocês atende empresas de Balneário Camboriú e Florianópolis?
              </summary>
              <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                Atendemos diariamente empresas, comércios, imobiliárias e prestadores de serviços de todo o litoral e interior de Santa Catarina com total suporte digital e WhatsApp.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};
