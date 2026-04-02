
import React, { useMemo } from 'react';
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
  { url: "https://autosocorro.aloanuncio.com", title: "Auto Socorro", category: "Guincho 24h", growth: "1150%", tags: ["Emergência", "Ads"] },
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

export const Portfolio: React.FC = () => {
  const track1 = useMemo(() => [...baseProjects].sort(() => Math.random() - 0.5), []);
  const track2 = useMemo(() => [...baseProjects].sort(() => Math.random() - 0.5), []);
  const track3 = useMemo(() => [...baseProjects].sort(() => Math.random() - 0.5), []);

  const renderProjectCard = (project: any, index: number) => (
    <div 
      key={`${project.title}-${index}`}
      className="group relative bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
    >
      <div className="h-32 md:h-48 relative overflow-hidden bg-gray-900">
        {/* Real Screenshot using WordPress mshots */}
        <img 
          src={`https://s.wordpress.com/mshots/v1/${encodeURIComponent(project.url)}?w=600`}
          alt={project.title}
          className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80"></div>
        
        <div className="absolute bottom-3 md:bottom-4 left-4 md:left-6 right-4 md:right-6">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-brand-accent transition-colors">
              <span className="text-sm md:text-lg font-black text-white group-hover:text-brand-dark">{project.title.charAt(0)}</span>
            </div>
            <div className="min-w-0">
              <h3 className="text-xs md:text-sm font-black text-white truncate leading-none mb-1">
                {project.title}
              </h3>
              <span className="text-[8px] md:text-[9px] font-black text-white/60 uppercase tracking-[0.15em] md:tracking-[0.2em]">{project.category}</span>
            </div>
          </div>
        </div>
        
        {/* Hover Link - Touch friendly */}
        <a 
          href={project.url} 
          target="_blank" 
          rel="noreferrer"
          className="absolute inset-0 z-20 flex items-center justify-center bg-brand-primary/90 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
        >
          <span className="bg-white text-brand-primary font-black px-4 md:px-6 py-2 rounded-full text-xs md:text-base flex items-center gap-2 transform translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
            Ver Projeto <ExternalLink size={14} />
          </span>
        </a>
      </div>

      <div className="p-4 md:p-6 flex-grow flex flex-col">
        <div className="bg-green-50 border-l-4 border-green-500 p-2 md:p-3 mb-3 md:mb-4 rounded-r-lg">
          <p className="text-[9px] md:text-[11px] text-green-800 font-bold leading-tight">
            Crescimento de <span className="text-green-600 text-xs md:text-sm">{project.growth}</span> ao ano no Google.
          </p>
        </div>

        <div className="mt-auto flex flex-wrap gap-1 md:gap-1.5">
          {project.tags.slice(0, 2).map((tag: string, i: number) => (
            <span key={i} className="text-[8px] md:text-[9px] font-black uppercase tracking-wider bg-gray-100 text-gray-500 px-1.5 md:px-2 py-0.5 md:py-1 rounded-md">
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
            MILHARES DE SITES <br />
            <span className="text-brand-accent italic">QUE VENDEM</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
            Nossa fábrica de resultados não para. Explore uma pequena amostra dos projetos que dominam o Google em todo o Brasil.
          </p>
        </div>
      </section>

      {/* Infinite Wall Section */}
      <section className="py-12 md:py-20 bg-gray-50 overflow-hidden relative">
        <div className="container mx-auto px-4 h-[600px] md:h-[1000px] flex flex-row gap-4 md:gap-10 location-mask pause-on-hover">
          {/* Column 1 - Primary on Mobile */}
          <div className="flex-1 flex flex-col gap-4 md:gap-8 animate-v will-change-transform" style={{ '--duration': '4s' } as any}>
            {[...track1, ...track1].map((p, i) => (
              <div key={`t1-${i}`} className="w-full">{renderProjectCard(p, i)}</div>
            ))}
          </div>
          
          {/* Column 2 - Visible from md up */}
          <div className="hidden md:flex flex-1 flex flex-col gap-4 md:gap-8 animate-v will-change-transform" style={{ '--duration': '6s' } as any}>
            {[...track2, ...track2].map((p, i) => (
              <div key={`t2-${i}`} className="w-full">{renderProjectCard(p, i)}</div>
            ))}
          </div>

          {/* Column 3 - Visible from lg up */}
          <div className="hidden lg:flex flex-1 flex flex-col gap-4 md:gap-8 animate-v will-change-transform" style={{ '--duration': '5s' } as any}>
            {[...track3, ...track3].map((p, i) => (
              <div key={`t3-${i}`} className="w-full">{renderProjectCard(p, i)}</div>
            ))}
          </div>
        </div>

        {/* Floating Stats Overlay - Optimized for Mobile */}
        <div className="absolute bottom-10 md:bottom-20 left-1/2 -translate-x-1/2 z-30 w-full max-w-4xl px-4">
          <div className="bg-brand-dark/95 backdrop-blur-2xl border border-white/10 p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] shadow-2xl flex flex-row justify-around md:justify-center gap-4 md:gap-12 text-center">
            <div className="flex-1 md:flex-none">
              <span className="block text-2xl md:text-4xl font-black text-brand-accent tracking-tighter">1.1k+</span>
              <span className="text-[8px] md:text-[10px] text-gray-500 font-bold uppercase tracking-widest">Sites</span>
            </div>
            <div className="w-px h-8 md:h-12 bg-white/10"></div>
            <div className="flex-1 md:flex-none">
              <span className="block text-2xl md:text-4xl font-black text-white tracking-tighter">1900%</span>
              <span className="text-[8px] md:text-[10px] text-gray-500 font-bold uppercase tracking-widest">ROI Max</span>
            </div>
            <div className="w-px h-8 md:h-12 bg-white/10"></div>
            <div className="flex-1 md:flex-none">
              <span className="block text-2xl md:text-4xl font-black text-brand-primary tracking-tighter">48H</span>
              <span className="text-[8px] md:text-[10px] text-gray-500 font-bold uppercase tracking-widest">Entrega</span>
            </div>
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

