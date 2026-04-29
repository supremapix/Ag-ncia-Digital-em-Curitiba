
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
    document.title = "Criação de Sites Profissionais e Lojas de Vendas | Suprema Site";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Especialistas em criação de sites profissionais, agência de desenvolvimento de sites e lojas virtuais. Desenvolvemos seu site em 48h com foco em vendas em todo o Brasil!");
    }

    // FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quem faz site profissional com entrega rápida no Brasil?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Suprema Site Express é especialista em criação de sites profissionais com entrega em até 48 horas. Atendemos todo o Brasil com foco em performance e resultados."
          }
        },
        {
          "@type": "Question",
          "name": "Quais são as melhores empresas que criam sites de vendas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Empresas como a Suprema Site Express se destacam por criar sites de vendas (e-commerce) otimizados para conversão, integrando meios de pagamento e SEO avançado."
          }
        },
        {
          "@type": "Question",
          "name": "Como encontrar uma agência de desenvolvimento de sites confiável?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Para escolher uma agência de desenvolvimento de sites, verifique o portfólio, tempo de mercado e depoimentos de clientes. A Suprema Site tem mais de 10 anos de experiência e milhares de projetos entregues."
          }
        },
        {
          "@type": "Question",
          "name": "Qual o valor de um site para empresas pequenas e médias?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O valor de um site para empresas varia conforme a complexidade, mas oferecemos soluções escaláveis que cabem no orçamento de PMEs que buscam crescimento digital."
          }
        },
        {
          "@type": "Question",
          "name": "Qual a vantagem de contratar um desenvolvedor de sites especialista?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contratar um desenvolvedor de sites especialista garante que seu projeto siga as melhores práticas de SEO, velocidade (Core Web Vitals) e segurança, garantindo maior ROI."
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
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
                  Especialistas em Criação de <span className="text-brand-primary">Sites Profissionais</span> e Lojas de Venda Online
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
              <h2 className="text-4xl md:text-6xl font-black text-brand-dark mb-4 tracking-tighter">Agência de Desenvolvimento de Sites Focada em Resultados Reais</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Tecnologia de ponta e especialistas em site para empresas que buscam liderança digital.</p>
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

      {/* SEO Content Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="prose prose-lg max-w-none text-gray-600">
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-8 tracking-tighter text-center">
              A Melhor Agência de Desenvolvimento de Sites para Sua Empresa
            </h2>
            <p className="mb-6 leading-relaxed">
              No cenário digital altamente competitivo de hoje, encontrar <strong>quem faz site profissional</strong> com qualidade e estratégia é o primeiro passo para o sucesso de qualquer negócio. A Suprema Site não é apenas mais uma entre as centenas de <strong>empresas que criam sites de vendas</strong> no mercado; somos um parceiro estratégico focado em performance, conversão e resultados reais. Nosso trabalho como uma <strong>agência de desenvolvimento de sites</strong> de elite é garantir que sua marca seja encontrada por quem realmente quer comprar seus produtos ou serviços, transformando cliques em faturamento.
            </p>
            <p className="mb-6 leading-relaxed">
              Ter um <strong>site para empresas</strong> que transmita autoridade é fundamental. O consumidor moderno é exigente e realiza pesquisas profundas antes de fechar qualquer negócio. Se sua empresa não possui uma presença digital sólida, você está entregando clientes de bandeja para a concorrência. Quando nos tornamos o seu <strong>desenvolvedor de sites</strong>, injetamos tecnologia de ponta para que sua marca se destaque. Nossos <strong>sites profissionais</strong> são construídos para serem rápidos, seguros e, acima de tudo, persuasivos.
            </p>
            
            <h3 className="text-2xl font-black text-brand-dark mb-4 uppercase tracking-tight">
              Desenvolvemos seu site com Foco em SEO e Experiência do Usuário (UX)
            </h3>
            <p className="mb-6 leading-relaxed">
              Acreditamos que a estética deve caminhar junto com a inteligência de dados. Quando <strong>desenvolvemos seu site</strong>, cada linha de código é otimizada para os algoritmos de busca do Google. Utilizamos a tecnologia React e Vite, as mesmas pilhas tecnológicas usadas por gigantes do Vale do Silício, para garantir que seus <strong>sites profissionais</strong> carreguem em milissegundos. Mais do que um design bonito, um <strong>site para empresas</strong> de sucesso precisa ser funcional em todos os dispositivos. Como seu <strong>desenvolvedor de sites</strong> parceiro, implementamos as melhores práticas de UX (User Experience) para guiar o visitante de forma intuitiva até o fechamento do negócio.
            </p>
            <p className="mb-6 leading-relaxed">
              O diferencial de trabalhar com uma <strong>agência de desenvolvimento de sites</strong> como a Suprema é o nosso compromisso com o SEO Local. Se você quer que sua empresa seja a primeira opção em sua região, nossa estratégia de Ranqueamento Semântico é imbatível. Nós entendemos o que o seu cliente busca e como ele busca em Curitiba e em todo o Brasil. Isso nos coloca à frente de outras <strong>empresas que criam sites de vendas</strong>, que muitas vezes entregam apenas o visual e esquecem o que realmente traz o tráfego qualificado.
            </p>

            <h3 className="text-2xl font-black text-brand-dark mb-4 uppercase tracking-tight">
              Up Sites: Elevando o Patamar da sua Presença Digital e Performance
            </h3>
            <p className="mb-6 leading-relaxed">
              O conceito de <strong>up sites</strong> no mercado atual vai muito além de apenas atualizar um layout antigo. Trata-se de uma modernização sistêmica e tecnológica completa da sua vitrine digital. Atuamos como um <strong>desenvolvedor de sites</strong> que possui visão de negócios, entendendo que cada segundo de atraso no carregamento custa dinheiro para sua empresa. Se você precisa de <strong>sites profissionais</strong> que passem credibilidade imediata e convertam leads frios em clientes quentes, nosso processo de design premium é a solução que você buscava. 
            </p>
            <p className="mb-6 leading-relaxed">
              Enquanto muitas <strong>empresas que criam sites de vendas</strong> focam apenas em volume, nós focamos em qualidade e escalabilidade. Entendemos que um <strong>site para empresas</strong> deve estar pronto para crescer junto com o negócio. Por isso, quando <strong>desenvolvemos seu site</strong>, pensamos na integração futura com CRMs, sistemas de automação de marketing e ferramentas de análise de dados. Este é o verdadeiro poder dos <strong>up sites</strong>: tecnologia que trabalha para você.
            </p>

            <h3 className="text-2xl font-black text-brand-dark mb-4 uppercase tracking-tight">
              Por que escolher a Suprema como quem faz site profissional para você?
            </h3>
            <p className="mb-6 leading-relaxed">
              Escolher a Suprema significa optar por transparência, agilidade e resultados comprovados por milhares de clientes. Enquanto a maioria das <strong>agências de desenvolvimento de sites</strong> tradicionais demoram meses para entregar um projeto básico, nós <strong>desenvolvemos seu site</strong> completo em apenas 48 horas úteis, sem abrir mão da qualidade. Somos referência como uma das principais <strong>empresas que criam sites de vendas</strong> no Sul do Brasil, estendendo nossa expertise tecnológica para empresas de todos os portes em todo o território nacional.
            </p>
            <p className="mb-6 leading-relaxed">
              Se você está procurando <strong>quem faz site profissional</strong> com um suporte humano e atendimento personalizado via WhatsApp, sua busca termina aqui. Como seu <strong>desenvolvedor de sites</strong> de confiança, não apenas entregamos um projeto e desaparecemos. Oferecemos uma parceria de longo prazo através de consultorias em presença digital para garantir que seu <strong>site para empresas</strong> continue gerando lucros contínuos. No mercado dinâmico de <strong>up sites</strong>, a evolução nunca para, e ter especialistas ao seu lado é a única forma de manter sua empresa no topo do Google e da mente dos seus consumidores. Através de <strong>sites profissionais</strong> de alta performance, nós construímos pontes entre marcas visionárias e seus clientes ideais.
            </p>

            <div className="bg-brand-dark text-white p-10 rounded-[2.5rem] mt-12 text-center border border-white/10 shadow-2xl">
              <h4 className="text-2xl font-black mb-6">Pronto para ter um dos melhores sites profissionais do mercado?</h4>
              <p className="mb-8 text-gray-400">Fale agora com nossa equipe e descubra por que somos a agência de desenvolvimento de sites preferida por centenas de empresários no Brasil.</p>
              <a 
                href="https://wa.me/5541987001004" 
                className="inline-block bg-brand-primary text-white font-black py-4 px-10 rounded-2xl hover:scale-105 transition-all"
              >
                Solicitar Meu Orçamento Grátis
              </a>
            </div>
          </div>
        </div>
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
