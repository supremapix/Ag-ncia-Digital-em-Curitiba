import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, ShieldCheck, Zap, Globe, CheckCircle2 } from 'lucide-react';
import { cities, slugify } from '../data/locations';
import { SEOHead } from '../src/components/SEOHead';
import { SUPREMA_MEDIA } from '../src/constants/media';

export const PillarParana: React.FC = () => {
  const featuredPr = [
    'Curitiba', 'Londrina', 'Maringá', 'Cascavel', 'Foz do Iguaçu', 
    'Ponta Grossa', 'São José dos Pinhais', 'Colombo', 'Pinhais', 'Araucária', 
    'Paranaguá', 'Toledo', 'Campo Largo', 'Apucarana', 'Guarapuava', 'Umuarama'
  ];

  const pillarSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Criação de Sites e SEO Local no Estado do Paraná',
    'provider': {
      '@type': 'Organization',
      'name': 'Suprema Site Express',
      'url': 'https://www.supremasite.com.br/'
    },
    'areaServed': {
      '@type': 'State',
      'name': 'Paraná'
    },
    'description': 'Líder em criação de sites profissionais, landing pages e e-commerce com entrega em 48h para todas as cidades do Estado do Paraná.',
    'url': 'https://www.supremasite.com.br/sites-em-parana/'
  };

  return (
    <div className="bg-brand-dark min-h-screen text-white pt-28 pb-20">
      <SEOHead 
        title="Criação de Sites no Paraná (PR) | Todas as Cidades em 48h"
        description="Agência especializada em criação de sites profissionais, lojas virtuais e SEO local para todas as cidades do Paraná. Entrega rápida em 48h com suporte humanizado."
        canonicalUrl="https://www.supremasite.com.br/sites-em-parana/"
        schema={pillarSchema}
      />

      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link to="/" className="hover:text-brand-primary">Home</Link>
          <span>/</span>
          <span className="text-white font-medium">Criação de Sites no Paraná</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="inline-block px-4 py-1.5 bg-brand-primary/20 border border-brand-primary/40 text-brand-primary font-black text-xs uppercase tracking-widest rounded-full mb-4">
              Cobertura Estadual Paraná (PR)
            </span>
            <h1 className="text-3xl md:text-5xl font-black leading-tight text-white mb-6">
              Criação de Sites Profissionais no <span className="text-brand-accent">Paraná</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              A Suprema Sites Express atende todas as 399 cidades do Paraná com sites ultra-rápidos desenvolvidos em React, otimização de SEO Local para Google Meu Negócio e garantia de entrega em até 48 horas.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://wa.me/5541992721004?text=Olá,%20quero%20um%20site%20profissional%20no%20Paraná"
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
              src={SUPREMA_MEDIA.services.seoLocal.url} 
              alt={SUPREMA_MEDIA.services.seoLocal.alt}
              loading="lazy"
              className="w-full h-80 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs uppercase font-bold text-brand-accent tracking-widest">Sede Principal em Curitiba</span>
              <p className="text-white font-bold text-lg">Atendimento presencial e online para todo o Estado do Paraná</p>
            </div>
          </div>
        </div>

        {/* Destaques do Paraná */}
        <div className="mb-16 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
          <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
            <Zap className="text-brand-accent" /> Principais Polos do Paraná Atendidos
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {featuredPr.map((city) => (
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

        {/* Lista Completa das Cidades do PR */}
        <div className="mb-16">
          <h2 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
            <Globe className="text-brand-primary" /> Todas as Cidades do Paraná ({cities.length})
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            Clique na sua cidade abaixo para ver os detalhes do nosso serviço de criação de sites, SEO Local e soluções web sob medida:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {cities.map((city) => (
              <Link
                key={city}
                to={`/site-em/${slugify(city)}`}
                className="text-xs text-gray-400 hover:text-brand-accent hover:bg-white/5 px-3 py-2 rounded transition-colors truncate"
                title={`Criação de Sites em ${city} - PR`}
              >
                • {city}
              </Link>
            ))}
          </div>
        </div>

        {/* FAQ com HTML Details Summary */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-black text-white mb-6">Perguntas Frequentes sobre Criação de Sites no Paraná</h2>
          <div className="space-y-4">
            <details className="bg-brand-dark/60 p-5 rounded-xl border border-white/5 group">
              <summary className="font-bold text-lg cursor-pointer text-white flex justify-between items-center">
                Qual o prazo de entrega de um site para empresas do Paraná?
              </summary>
              <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                Entregamos sites institucionais prontos e funcionais em até 48 horas após o envio das informações da empresa.
              </p>
            </details>

            <details className="bg-brand-dark/60 p-5 rounded-xl border border-white/5 group">
              <summary className="font-bold text-lg cursor-pointer text-white flex justify-between items-center">
                O site inclui otimização de SEO Local para o Google Meu Negócio no PR?
              </summary>
              <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                Sim! Todos os projetos incluem otimização completa de palavras-chave regionais para garantir visibilidade no Google Maps e nas buscas orgânicas da sua cidade.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};
