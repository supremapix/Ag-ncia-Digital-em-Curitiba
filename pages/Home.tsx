
import React, { useEffect } from 'react';
import { CheckCircle, BarChart, Smartphone, Globe, Zap, ArrowRight, Shield, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LeadForm } from '../components/LeadForm';
import { VideoPlayer } from '../components/VideoPlayer';
import { LocationTicker } from '../components/LocationTicker';
import { FAQAccordionTicker } from '../components/FAQAccordionTicker';
import { StaticFAQ } from '../components/StaticFAQ';
import { ReviewsTicker } from '../components/ReviewsTicker';

import { TypewriterText } from '../src/components/TypewriterText';
import { PERSUASIVE_PHRASES } from '../src/constants/phrases';

export const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Criação de Sites Profissionais em 48h | Suprema Site";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Especialistas em criação de sites profissionais, lojas virtuais e landing pages. Entrega em 48h com SEO local para empresas em todo Brasil. Peça seu orçamento!");
    }
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-brand-dark text-white py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
             <div className="lg:w-3/5 text-center lg:text-left animate-slide-up">
                <span className="text-brand-accent font-black tracking-[0.3em] uppercase mb-6 inline-block px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs">
                  Suprema Mídia & Performance
                </span>
                <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-[0.9] tracking-tighter">
                  Criação de Sites Profissionais e Rápidos | <span className="text-brand-primary">Suprema Site</span>
                </h1>
                <div className="min-h-[100px] md:min-h-[80px] mb-10">
                  <TypewriterText 
                    phrases={PERSUASIVE_PHRASES}
                    className="text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
                    speed={40}
                    delay={3000}
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                  <a 
                    href="https://wa.me/5541987001004" 
                    className="shimmer-btn text-brand-dark font-black py-5 px-12 rounded-2xl text-xl transition-all transform hover:scale-105 shadow-2xl"
                  >
                    Começar Meu Projeto Agora
                  </a>
                  <Link 
                    to="/portfolio" 
                    className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold py-5 px-12 rounded-2xl text-xl transition-all flex items-center justify-center gap-2"
                  >
                    Portfólio <ArrowRight size={20}/>
                  </Link>
                </div>
             </div>
             <div className="lg:w-2/5 w-full animate-fade-in delay-300">
                <LeadForm />
             </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {[
               { val: "15.000+", label: "Leads Gerados" },
               { val: "10+ ANOS", label: "De Mercado" },
               { val: "1.100+", label: "Cidades no Sul" },
               { val: "48h", label: "Entrega Expressa" },
             ].map((stat, i) => (
               <div key={i} className="text-center">
                  <span className="block text-3xl md:text-5xl font-black text-brand-dark tracking-tighter">{stat.val}</span>
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{stat.label}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-brand-dark mb-4 tracking-tighter">Soluções em Desenvolvimento Web para Pequenas e Médias Empresas</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Tecnologia de ponta para elevar o patamar digital do seu negócio.</p>
           </div>
           <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-2xl transition-all group">
                 <div className="mb-8 text-brand-primary"><Globe size={40} /></div>
                 <h3 className="text-2xl font-black text-brand-dark mb-4">Sites Institucionais e Corporativos de Alta Performance</h3>
                 <p className="text-gray-600 mb-6">Sua empresa com uma vitrine digital profissional e autoridade imediata.</p>
                 <div className="space-y-3">
                    <h4 className="text-sm font-bold text-brand-dark flex items-center gap-2"><CheckCircle size={16} className="text-brand-primary"/> Design Responsivo Otimizado para Dispositivos Móveis</h4>
                    <h4 className="text-sm font-bold text-brand-dark flex items-center gap-2"><CheckCircle size={16} className="text-brand-primary"/> Integração Estratégica com WhatsApp e Redes Sociais</h4>
                 </div>
              </div>
              <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-2xl transition-all group">
                 <div className="mb-8 text-brand-accent"><Shield size={40} /></div>
                 <h3 className="text-2xl font-black text-brand-dark mb-4">Lojas Virtuais e E-commerce para Vendas Online</h3>
                 <p className="text-gray-600 mb-6">Venda seus produtos 24h por dia com uma plataforma robusta e segura.</p>
                 <div className="space-y-3">
                    <h4 className="text-sm font-bold text-brand-dark flex items-center gap-2"><CheckCircle size={16} className="text-brand-primary"/> Sistemas de Pagamento Seguros e Checkout Simplificado</h4>
                    <h4 className="text-sm font-bold text-brand-dark flex items-center gap-2"><CheckCircle size={16} className="text-brand-primary"/> Gestão de Produtos e Estoque de Fácil Operação</h4>
                 </div>
              </div>
              <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-2xl transition-all group">
                 <div className="mb-8 text-purple-600"><TrendingUp size={40} /></div>
                 <h3 className="text-2xl font-black text-brand-dark mb-4">Landing Pages de Alta Conversão para Campanhas de Tráfego</h3>
                 <p className="text-gray-600 mb-6">Páginas focadas em um único objetivo: transformar visitantes em clientes.</p>
                 <div className="space-y-3">
                    <h4 className="text-sm font-bold text-brand-dark flex items-center gap-2"><CheckCircle size={16} className="text-brand-primary"/> Foco Total em Geração de Leads e Vendas Diretas</h4>
                    <h4 className="text-sm font-bold text-brand-dark flex items-center gap-2"><CheckCircle size={16} className="text-brand-primary"/> Copywriting Persuasivo e Gatilhos Mentais de Venda</h4>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-24 bg-brand-dark text-white overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">Por que a Suprema Site Express é a Melhor Escolha para seu Negócio?</h2>
           </div>
           <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                 <div className="w-20 h-20 bg-brand-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Zap size={40} className="text-brand-primary" />
                 </div>
                 <h3 className="text-2xl font-black mb-4">Entrega Recorde: Seu Site Profissional Pronto em até 48 Horas</h3>
                 <h4 className="text-gray-400 font-medium">Metodologia Ágil de Desenvolvimento Sem Burocracia</h4>
              </div>
              <div className="text-center">
                 <div className="w-20 h-20 bg-brand-accent/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Smartphone size={40} className="text-brand-accent" />
                 </div>
                 <h3 className="text-2xl font-black mb-4">Tecnologia de Ponta com React e Performance Máxima</h3>
                 <h4 className="text-gray-400 font-medium">Carregamento Instantâneo e Excelência em Core Web Vitals</h4>
              </div>
              <div className="text-center">
                 <div className="w-20 h-20 bg-purple-600/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <BarChart size={40} className="text-purple-400" />
                 </div>
                 <h3 className="text-2xl font-black mb-4">SEO Local Estratégico para Dominar as Buscas na sua Região</h3>
                 <h4 className="text-gray-400 font-medium">Otimização Completa para Google Meu Negócio e Mapas</h4>
              </div>
           </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 pt-24 text-center">
           <h2 className="text-4xl md:text-6xl font-black text-brand-dark mb-4 tracking-tighter">Resultados que Falam por Nós: Prova Social e Casos de Sucesso</h2>
           <h3 className="text-xl text-gray-500 font-medium mb-12">Depoimentos de Empreendedores que Transformaram sua Presença Digital</h3>
           <h5 className="text-brand-primary font-black uppercase tracking-widest text-sm mb-8">O que dizem nossos parceiros em Curitiba e Região Sul</h5>
        </div>
        <ReviewsTicker />
      </section>

      {/* Portfolio Highlight Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
           <h3 className="text-4xl font-black text-brand-dark mb-12">Portfólio de Projetos Recentes e Histórias de Crescimento</h3>
           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                 <h6 className="text-xl font-black text-brand-dark mb-2">Case: Expansão Digital para Clínicas e Consultórios</h6>
                 <p className="text-gray-500 text-sm">Aumento de 300% nos agendamentos via site.</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                 <h6 className="text-xl font-black text-brand-dark mb-2">Case: Digitalização de Serviços de Advocacia e Consultoria</h6>
                 <p className="text-gray-500 text-sm">Autoridade local consolidada em menos de 30 dias.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Geographic Coverage Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-4xl md:text-6xl font-black text-brand-dark mb-8 tracking-tighter">Presença Nacional: Atendimento Especializado em Todo o Brasil</h2>
           <h3 className="text-2xl font-black text-gray-600 mb-12">Criação de Sites no Paraná, Santa Catarina e Rio Grande do Sul</h3>
           <div className="flex flex-wrap justify-center gap-8 mb-12">
              <h5 className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100 text-brand-dark font-bold">Destaque: Sites Profissionais em Curitiba, Londrina e Maringá</h5>
              <h5 className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100 text-brand-dark font-bold">Destaque: Presença Digital em Florianópolis, Joinville e Blumenau</h5>
              <h5 className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100 text-brand-dark font-bold">Destaque: Desenvolvimento Web em Porto Alegre e Caxias do Sul</h5>
           </div>
        </div>
        <LocationTicker />
      </section>

      {/* FAQ Section */}
      <StaticFAQ />
      <FAQAccordionTicker />

      {/* Final CTA Section */}
      <section className="py-24 bg-brand-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
           <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter">Comece sua Transformação Digital com a Suprema Site Express</h2>
           <h3 className="text-2xl md:text-3xl font-bold mb-12 opacity-90">Solicite um Orçamento Personalizado e Gratuito Agora Mesmo</h3>
           <div className="flex flex-col items-center gap-6">
              <a 
                href="https://wa.me/5541987001004" 
                className="bg-white text-brand-primary font-black py-6 px-16 rounded-[2rem] text-2xl hover:scale-105 transition-all shadow-2xl"
              >
                Falar com Especialista
              </a>
              <h6 className="text-sm font-black uppercase tracking-[0.2em] opacity-70">Atendimento via WhatsApp disponível para consultoria imediata</h6>
           </div>
        </div>
      </section>
    </div>
  );
};
