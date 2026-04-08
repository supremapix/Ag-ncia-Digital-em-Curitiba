
import React, { useMemo, useEffect } from 'react';
import { ExternalLink, TrendingUp, BarChart, CheckCircle, Smartphone, Globe, Shield, Zap } from 'lucide-react';
import { LeadForm } from '../components/LeadForm';

interface Project {
  url: string;
  title: string;
  category: string;
  growth: string;
  tags: string[];
}

const baseProjects: Project[] = [
  { url: "https://www.bcrefrigeracaosc.com.br", title: "BC Refrigeração", category: "Climatização", growth: "1900%", tags: ["SEO", "Performance"] },
  { url: "https://barbeariabarbercue.shop", title: "Barber Cue", category: "Barbearia Premium", growth: "850%", tags: ["Design", "Local"] },
  { url: "https://www.servicosadp.shop", title: "Serviços ADP", category: "Manutenção Express", growth: "1200%", tags: ["Ads", "Conversão"] },
  { url: "https://www.jcclimatizar.pro", title: "JC Climatizar", category: "Ar Condicionado", growth: "700%", tags: ["SEO", "Mobile"] },
  { url: "https://www.lavanderiainovata.com.br", title: "Lavanderia Inovata", category: "Serviços Têxteis", growth: "550%", tags: ["Design", "UX"] },
  { url: "https://www.burgerfilms.com.br", title: "Burger Films", category: "Produtora de Vídeo", growth: "450%", tags: ["Branding", "Video"] },
  { url: "https://www.ehssaude.com.br", title: "EHS Saúde", category: "Saúde e Segurança", growth: "380%", tags: ["Institucional", "SEO"] },
  { url: "https://www.bsescapamentos.com.br/", title: "BS Escapamentos", category: "Serviços Automotivos", growth: "680%", tags: ["Local", "Ads"] },
  { url: "https://www.impactorecuperacoes.com.br", title: "Impacto Recuperações", category: "Recuperação de Crédito", growth: "540%", tags: ["B2B", "Performance"] },
  { url: "https://suncellbrasil.com.br/", title: "Suncell Brasil", category: "Energia Solar", growth: "920%", tags: ["Sustentabilidade", "SEO"] },
  { url: "https://autosocorro.aloanuncio.com.br/", title: "Auto Socorro", category: "Guincho 24h", growth: "1150%", tags: ["Emergência", "Ads"] },
  { url: "https://www.celularescuritibashopcell.com.br", title: "Shop Cell", category: "Assistência Técnica", growth: "470%", tags: ["E-commerce", "Local"] },
  { url: "https://www.divasespacodabeleza.com.br", title: "Divas Beleza", category: "Salão de Beleza", growth: "390%", tags: ["Estética", "Design"] },
  { url: "https://www.barbeiro.curitiba.br/", title: "Barbeiro Curitiba", category: "Beleza e Estética", growth: "590%", tags: ["SEO Local", "UX"] },
  { url: "https://www.alweletromotores.com.br", title: "ALW Eletromotores", category: "Motores Elétricos", growth: "510%", tags: ["Indústria", "B2B"] },
  { url: "https://www.sultoldos.app.br", title: "Sul Toldos", category: "Coberturas e Toldos", growth: "630%", tags: ["Arquitetura", "SEO"] },
  { url: "https://www.araujocalhas.com.br", title: "Araújo Calhas", category: "Calhas e Rufos", growth: "740%", tags: ["Construção", "Ads"] },
  { url: "https://www.pvsdecore.com.br", title: "PVS Decore", category: "Decoração de Interiores", growth: "420%", tags: ["Design", "Premium"] },
  { url: "https://www.attivadigital.com.br", title: "Attiva Digital", category: "Marketing Digital", growth: "880%", tags: ["Agência", "Performance"] },
  { url: "https://www.omegarevestimentos.com.br", title: "Omega Revestimentos", category: "Revestimentos", growth: "560%", tags: ["Acabamentos", "SEO"] },
  { url: "https://www.gouveiacuritiba.com.br/", title: "Gouveia Imóveis", category: "Imobiliária", growth: "340%", tags: ["Imóveis", "Local"] },
  { url: "https://www.engenhariadopaver.com.br/", title: "Engenharia do Paver", category: "Construção Civil", growth: "620%", tags: ["Infraestrutura", "B2B"] },
  { url: "https://www.mundodoscalheiros.com.br/", title: "Mundo dos Calheiros", category: "Indústria e Serviços", growth: "410%", tags: ["Indústria", "SEO"] },
  { url: "https://www.atuarios.com.br/", title: "Atuários Independentes", category: "Consultoria", growth: "305%", tags: ["Finanças", "Corporate"] },
  { url: "https://www.kydrywall.com.br/", title: "KY Drywall", category: "Gesso e Drywall", growth: "610%", tags: ["Construção", "Design"] },
  { url: "https://www.rvmpersianaspr.com.br/", title: "RVM Persianas PR", category: "Decoração", growth: "820%", tags: ["Local", "Ads"] },
  { url: "https://www.rvmpersianas.com.br/", title: "RVM Persianas", category: "Decoração Premium", growth: "950%", tags: ["E-commerce", "SEO"] },
  { url: "https://www.vidracarianatal.com.br", title: "Vidraçaria Natal", category: "Vidraçaria", growth: "430%", tags: ["Local", "Serviços"] },
  { url: "https://www.ecoservy.com.br", title: "Ecoservy", category: "Soluções Ambientais", growth: "315%", tags: ["B2B", "Sustentabilidade"] },
  { url: "https://servicos.araujocalhas.com.br/", title: "Araújo Calhas Express", category: "Calhas e Rufos", growth: "1250%", tags: ["Ads", "Performance"] },
  { url: "https://calha.aloanuncio.com.br", title: "Calha Alô Anúncio", category: "Serviços 24h", growth: "1400%", tags: ["Emergência", "Ads"] },
  { url: "https://rvmpersianas.app.br", title: "RVM Persianas App", category: "Decoração", growth: "780%", tags: ["App", "Mobile"] },
  { url: "https://servicoshidraulicosadp.app.br/", title: "ADP Hidráulica", category: "Manutenção 24h", growth: "940%", tags: ["Emergência", "Ads"] },
  { url: "https://www.cicarelli.adv.br/", title: "Cicarelli Advogados", category: "Jurídico", growth: "330%", tags: ["Direito", "Corporate"] },
  { url: "https://rvmpersianas.com.br/santa-catarina/blumenau.html", title: "RVM Blumenau", category: "SEO Local", growth: "1100%", tags: ["SEO", "Local"] },
  { url: "https://pousadaviladitalia.com.br", title: "Pousada Vila d'Italia", category: "Turismo e Hotelaria", growth: "480%", tags: ["Turismo", "Booking"] },
  { url: "https://sc.omegarevestimentos.com.br/", title: "Omega Revestimentos SC", category: "Acabamentos", growth: "520%", tags: ["Regional", "SEO"] },
  { url: "https://eurocalhas.supremasite.com.br/", title: "Euro Calhas", category: "Serviços Express", growth: "890%", tags: ["Express", "Ads"] },
  { url: "https://encanadorpalladium24h.supremamidia.com", title: "Encanador Palladium", category: "Emergência 24h", growth: "1450%", tags: ["Local", "24h"] },
  { url: "https://encanadores24h.desentopeadp.com.br", title: "Encanadores 24h", category: "Desentupidora", growth: "1600%", tags: ["Performance", "Ads"] },
  { url: "https://desentopeadp.com.br", title: "Desentope ADP", category: "Desentupidora", growth: "1750%", tags: ["Líder", "SEO"] },
  { url: "https://fotometal.com.br", title: "Fotometal", category: "Indústria Gráfica", growth: "320%", tags: ["Indústria", "B2B"] },
  { url: "https://www.moraesacrilicos.com.br", title: "Moraes Acrílicos", category: "Produtos Personalizados", growth: "405%", tags: ["E-commerce", "Design"] },
];

import { TypewriterText } from '../src/components/TypewriterText';
import { PERSUASIVE_PHRASES } from '../src/constants/phrases';

export const Portfolio: React.FC = () => {
  useEffect(() => {
    document.title = "Portfólio de Sites Profissionais | Suprema Site Express";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Confira nosso portfólio com milhares de sites criados em todo o Brasil. Projetos de alta performance, SEO local e conversão garantida para sua empresa.");
    }
  }, []);

  const renderProjectCard = (project: any, index: number) => (
    <div 
      key={`${project.title}-${index}`}
      className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="h-48 md:h-56 relative overflow-hidden bg-gray-900">
        {/* Real Screenshot using WordPress mshots */}
        <img 
          src={`https://s.wordpress.com/mshots/v1/${encodeURIComponent(project.url)}?w=800`}
          alt={project.title}
          className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-60"></div>
        
        {/* Hover Link - Premium Overlay */}
        <a 
          href={project.url} 
          target="_blank" 
          rel="noreferrer"
          className="absolute inset-0 z-20 flex items-center justify-center bg-brand-dark/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <span className="bg-white text-brand-dark font-black px-6 py-3 rounded-xl text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
            Visitar Website <ExternalLink size={16} />
          </span>
        </a>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary font-black">
            {project.title.charAt(0)}
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-black text-brand-dark truncate leading-none mb-1">
              {project.title}
            </h3>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{project.category}</span>
          </div>
        </div>

        <div className="bg-brand-light border-l-4 border-brand-accent p-3 mb-4 rounded-r-xl">
          <div className="flex items-center gap-2 text-brand-dark font-bold text-xs">
            <TrendingUp size={14} className="text-brand-accent" />
            <span>Crescimento de <span className="text-brand-primary text-sm">{project.growth}</span></span>
          </div>
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((tag: string, i: number) => (
            <span key={i} className="text-[9px] font-black uppercase tracking-wider bg-gray-50 text-gray-400 border border-gray-100 px-2 py-1 rounded-lg">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block px-4 py-2 bg-brand-primary/20 border border-brand-primary/30 rounded-full text-brand-primary text-xs font-black uppercase tracking-[0.3em] mb-6">
            Portfólio de Alta Performance
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
            Portfólio de Sites Profissionais e <br />
            <span className="text-brand-accent italic">Cases de Sucesso</span>
          </h1>
          <div className="min-h-[60px] mb-10">
            <TypewriterText 
              phrases={PERSUASIVE_PHRASES}
              className="text-xl text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed"
              speed={40}
              delay={3000}
            />
          </div>
        </div>
      </section>

      {/* Stats Highlight Section */}
      <section className="bg-brand-primary py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
              <span className="block text-4xl md:text-6xl font-black text-white tracking-tighter mb-2">+3.800</span>
              <span className="text-brand-accent font-bold uppercase tracking-widest text-xs">Sites feitos em nossa jornada</span>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
              <span className="block text-4xl md:text-6xl font-black text-white tracking-tighter mb-2">+1.100</span>
              <span className="text-brand-accent font-bold uppercase tracking-widest text-xs">Sites entregues este ano</span>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
              <span className="block text-4xl md:text-6xl font-black text-white tracking-tighter mb-2">100%</span>
              <span className="text-brand-accent font-bold uppercase tracking-widest text-xs">Foco em Performance e ROI</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-24 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-4 tracking-tighter">
                Alguns de nossos <span className="text-brand-primary">Projetos Ativos</span>
              </h2>
              <p className="text-gray-600 font-medium">
                Explore nossa seleção completa de cases de sucesso. Projetos desenvolvidos com foco total em conversão, velocidade e posicionamento no Google.
              </p>
            </div>
            <div className="bg-white px-6 py-3 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold text-gray-900">Exibindo {baseProjects.length} Cases de Sucesso</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {baseProjects.map((project, index) => (
              <div key={index} className="h-full">
                {renderProjectCard(project, index)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Globe className="text-blue-500" />, title: "Alcance Nacional", desc: "Sites otimizados para qualquer cidade do Brasil." },
              { icon: <Shield className="text-green-500" />, title: "Segurança Total", desc: "Hospedagem premium com SSL e proteção DDoS." },
              { icon: <Zap className="text-yellow-500" />, title: "Velocidade Luz", desc: "Carregamento instantâneo em qualquer conexão." },
              { icon: <TrendingUp className="text-purple-500" />, title: "Foco em ROI", desc: "Design planejado para converter cliques em dinheiro." },
            ].map((f, i) => (
              <div key={i} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-brand-primary/30 transition-colors">
                <div className="mb-6">{f.icon}</div>
                <h3 className="text-xl font-black text-brand-dark mb-3">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/10 blur-[120px] rounded-full"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-white rounded-[4rem] p-10 md:p-20 flex flex-col lg:flex-row items-center gap-16 shadow-2xl">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-black text-brand-dark mb-8 tracking-tighter leading-tight">
                SEU SITE PODE SER O <br />
                <span className="text-brand-primary">PRÓXIMO CASE</span> DE SUCESSO.
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
                Não deixe sua empresa invisível. Junte-se aos milhares de empreendedores que já transformaram seus negócios com a Suprema Mídia.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://wa.me/5541987001004" 
                  className="bg-brand-accent hover:bg-yellow-500 text-brand-dark font-black py-5 px-10 rounded-2xl text-xl shadow-xl transition-all transform hover:-translate-y-1"
                >
                  Falar com Especialista
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

