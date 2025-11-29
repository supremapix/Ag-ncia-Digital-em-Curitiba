import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getNameFromSlug, cities, slugify } from '../data/locations';
import { Accordion } from '../components/Accordion';
import { LeadForm } from '../components/LeadForm';
import { VideoPlayer } from '../components/VideoPlayer';
import { CheckCircle, MapPin, Globe, Rocket, Shield, PenTool, Clock, TrendingUp, Layout, Smartphone, Users, Zap, Search, Lock, Award, DollarSign, Heart, MousePointer, Share2, Briefcase, ChevronRight, BarChart } from 'lucide-react';

export const LocationSEO: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const locationName = getNameFromSlug(slug || '');

  useEffect(() => {
    // Dynamic SEO Title & Meta
    document.title = `Criação de Sites em ${locationName} | Suprema Sites Express - Entrega em 48h`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', `Agência de Criação de Sites Profissionais em ${locationName}. Sites Expresso prontos em 48h, Lojas Virtuais e SEO Local. Aumente sua visibilidade no Google em 300%. Orçamento via WhatsApp.`);
    }
    // Canonical URL update
    let linkCanonical = document.querySelector("link[rel='canonical']");
    if (linkCanonical) {
      linkCanonical.setAttribute('href', `https://www.supremasite.com.br/site-em-${slug}`);
    } else {
       const link = document.createElement('link');
       link.rel = 'canonical';
       link.href = `https://www.supremasite.com.br/site-em-${slug}`;
       document.head.appendChild(link);
    }
  }, [locationName, slug]);

  // Schema Markup for Local Business specific to this location
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `Suprema Sites Express - ${locationName}`,
    "image": "https://www.supremasite.com.br/logo.png",
    "url": `https://www.supremasite.com.br/site-em-${slug}`,
    "telephone": "+5541987001004",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "addressCountry": "BR"
    },
    "description": `Especialistas em criação de sites e marketing digital atendendo ${locationName}.`,
    "areaServed": {
      "@type": "Place",
      "name": locationName
    },
    "priceRange": "$$"
  };

  const benefits = [
    { title: "Entrega Recorde 48h", desc: `Seu site no ar em tempo recorde para ${locationName}.`, icon: <Clock size={24} className="text-brand-accent" /> },
    { title: "Visibilidade 300%", desc: "Estratégias validadas para triplicar acessos.", icon: <TrendingUp size={24} className="text-green-500" /> },
    { title: "SEO Local Dominante", desc: `Rankeamento focado em buscas de ${locationName}.`, icon: <MapPin size={24} className="text-red-500" /> },
    { title: "Design Premium", desc: "Layouts modernos que passam autoridade.", icon: <Layout size={24} className="text-blue-500" /> },
    { title: "Mobile First", desc: "Perfeito em celulares de todos os modelos.", icon: <Smartphone size={24} className="text-purple-500" /> },
    { title: "Vendas 24h", desc: "Sua loja ou serviço disponível dia e noite.", icon: <Clock size={24} className="text-orange-500" /> },
    { title: "Leads Qualificados", desc: "Atraia clientes de ${locationName} prontos para comprar.", icon: <Users size={24} className="text-indigo-500" /> },
    { title: "WhatsApp Integrado", desc: "Botão flutuante para contato imediato.", icon: <Share2 size={24} className="text-green-600" /> },
    { title: "Ultra Velocidade", desc: "Sites leves que carregam instantaneamente.", icon: <Zap size={24} className="text-yellow-500" /> },
    { title: "Google Meu Negócio", desc: "Otimização completa do seu perfil local.", icon: <Globe size={24} className="text-blue-400" /> },
    { title: "Certificado SSL", desc: "Segurança total para você e seus clientes.", icon: <Lock size={24} className="text-gray-600" /> },
    { title: "Autoridade Local", desc: `Torne-se a referência número 1 em ${locationName}.`, icon: <Award size={24} className="text-brand-primary" /> },
    { title: "Investimento Justo", desc: "Melhor ROI (Retorno) da região.", icon: <DollarSign size={24} className="text-green-700" /> },
    { title: "Suporte Curitibano", desc: "Equipe local, sem robôs, atendimento humano.", icon: <Heart size={24} className="text-red-600" /> },
    { title: "Copywriting Persuasivo", desc: "Textos que convencem o visitante a comprar.", icon: <PenTool size={24} className="text-gray-800" /> },
    { title: "Painel Intuitivo", desc: "Você mesmo pode atualizar se desejar.", icon: <MousePointer size={24} className="text-gray-700" /> },
    { title: "Uptime 99.9%", desc: "Seu site sempre online e estável.", icon: <Zap size={24} className="text-blue-600" /> },
    { title: "Base para Tráfego", desc: "Essencial para Google Ads e Face Ads.", icon: <Search size={24} className="text-purple-600" /> },
    { title: "Analytics Incluso", desc: "Saiba exatamente quem visita seu site.", icon: <Search size={24} className="text-indigo-600" /> },
    { title: "Tecnologia de Ponta", desc: "Desenvolvido em React e tecnologias modernas.", icon: <Briefcase size={24} className="text-brand-dark" /> },
  ];

  const faqItems = [
    {
      question: `Quanto custa criar um site profissional em ${locationName}?`,
      answer: `O valor do investimento para empresas em ${locationName} varia de acordo com a complexidade do projeto (Site Institucional, Loja Virtual, Landing Page). A Suprema Sites Express possui planos flexíveis e acessíveis, focados no melhor custo-benefício da região. Nosso foco é entregar uma ferramenta que se pague rapidamente através de novos clientes. Entre em contato via WhatsApp para um orçamento personalizado e sem compromisso.`
    },
    {
      question: `Vocês atendem presencialmente empresas de ${locationName}?`,
      answer: `Nossa base principal está localizada no bairro Rebouças, em Curitiba, mas nossa estrutura de atendimento abrange ${locationName} de forma completa. Realizamos reuniões via vídeo chamada com compartilhamento de tela para agilizar o processo, mas também estamos disponíveis para reuniões presenciais dependendo do escopo do projeto. A distância não é barreira; a tecnologia nos aproxima.`
    },
    {
      question: `Qual o prazo real de entrega para um site em ${locationName}?`,
      answer: `Somos conhecidos como "Suprema Sites Express" por um motivo. Para sites institucionais e landing pages, nosso prazo médio de entrega é de 6h a 48h úteis após o recebimento de todo o material (textos, logos e fotos). Sabemos que em ${locationName} o mercado é dinâmico e você não pode esperar semanas para colocar sua ideia no ar.`
    },
    {
      question: `O site ajuda minha empresa de ${locationName} a aparecer no Google?`,
      answer: `Com certeza. Todos os nossos projetos são desenvolvidos com a mentalidade "SEO First". Isso significa que a estrutura do código, os títulos, as meta tags e a velocidade de carregamento são otimizados para que o Google "ame" seu site. Nosso objetivo é aumentar sua visibilidade em até 300% nas buscas locais feitas por pessoas em ${locationName}.`
    },
    {
      question: `Como funciona o suporte para clientes de ${locationName}?`,
      answer: `Oferecemos suporte técnico contínuo e humanizado. Se houver qualquer problema técnico com a hospedagem ou funcionamento do site, nossa equipe resolve rapidamente. Para clientes de ${locationName}, disponibilizamos canais diretos via WhatsApp e telefone. Você nunca ficará na mão.`
    }
  ];

  return (
    <div className="bg-white">
      {/* Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Section */}
      <section className="bg-brand-dark text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-3/5">
              <span className="inline-block bg-brand-accent text-brand-dark font-bold px-3 py-1 rounded text-sm mb-4 uppercase tracking-wider animate-pulse">
                Atendimento Prioritário em {locationName}
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Criação de Sites em <span className="text-brand-primary block mt-2">{locationName}</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Sua empresa merece ser líder em <strong>{locationName}</strong>. Desenvolvemos sites de alta performance, prontos em 48h, focados em converter visitantes em vendas reais.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/5541987001004" className="bg-brand-accent hover:bg-yellow-500 text-brand-dark font-bold py-3 px-8 rounded-lg transition-all shadow-lg text-lg transform hover:-translate-y-1">
                  Solicitar Orçamento Agora
                </a>
                <a href="#video-section" className="border border-white hover:bg-white hover:text-brand-dark text-white font-bold py-3 px-8 rounded-lg transition-all flex items-center gap-2">
                  Ver Vídeo Explicativo <ChevronRight size={16} />
                </a>
              </div>
            </div>
            <div className="lg:w-2/5 w-full">
               <LeadForm locationName={locationName} />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section with Anchor */}
      <section id="video-section" className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
           <div className="max-w-4xl mx-auto -mt-20 relative z-20">
             <VideoPlayer />
           </div>
           <div className="text-center mt-8 max-w-3xl mx-auto">
             <p className="text-gray-600 text-lg">
               Assista ao vídeo acima e entenda por que a <strong>Suprema Sites Express</strong> é a agência que mais cresce na preferência de empresários em {locationName} e região.
             </p>
           </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div id="conteudo" className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Main Text Content - The 4 Massive Blocks */}
          <div className="lg:w-2/3 space-y-16">
            
            {/* Block 1: O Cenário Digital em {locationName} */}
            <article className="prose max-w-none">
              <h2 className="text-3xl font-bold text-brand-dark mb-6 flex items-center gap-3 border-b pb-4 border-gray-200">
                <MapPin className="text-brand-primary" size={32} />
                O Crescimento Digital e as Oportunidades em {locationName}
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4 text-justify">
                <p>
                  A região de <strong>{locationName}</strong> vive um momento único de transformação digital e econômica. Nos últimos anos, observamos uma mudança drástica no comportamento do consumidor local. Se antes a decisão de compra começava ao caminhar pelas ruas comerciais de {locationName}, hoje ela começa invariavelmente na tela de um smartphone. Dados recentes apontam que mais de 85% das buscas por serviços e produtos locais são iniciadas no Google. Isso significa que, para o empresário de {locationName}, não estar presente digitalmente não é mais uma opção, é um risco vital para a sobrevivência do negócio.
                </p>
                <p>
                  Este cenário cria um divisor de águas: de um lado, empresas tradicionais que ainda dependem exclusivamente da indicação "boca a boca" ou de fachadas físicas; de outro, empreendedores visionários de {locationName} que estão capturando a maior fatia do mercado simplesmente por estarem visíveis quando o cliente precisa. A internet democratizou o acesso ao cliente. Uma pequena empresa local bem posicionada no Google pode competir de igual para igual com grandes redes, desde que tenha um site profissional, rápido e persuasivo.
                </p>
                <p>
                  Além disso, a localização estratégica de {locationName} favorece o crescimento de serviços de entrega e atendimento a domicílio. Ter um site que funcione como um "hub" centralizador — apresentando seus produtos, validando sua autoridade através de depoimentos e facilitando o contato via WhatsApp — é a chave para desbloquear esse potencial. A Suprema Sites Express entende profundamente essa dinâmica local. Não criamos apenas páginas; criamos ativos digitais que valorizam a sua marca e a conectam diretamente com o público qualificado que mora e trabalha em {locationName}.
                </p>
                <p>
                   Ignorar essa realidade é deixar dinheiro na mesa. Seus concorrentes em {locationName} provavelmente já estão se movimentando. A boa notícia é que ainda há muito espaço para crescer e dominar o nicho local, desde que você aja com rapidez e profissionalismo. É aqui que nossa expertise entra para transformar sua presença digital em uma máquina de vendas.
                </p>
              </div>
            </article>

            {/* Block 2: Soluções Completas */}
            <article className="prose max-w-none">
              <h2 className="text-3xl font-bold text-brand-dark mb-6 flex items-center gap-3 border-b pb-4 border-gray-200">
                <Briefcase className="text-brand-primary" size={32} />
                Soluções Web de Alta Performance para {locationName}
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4 text-justify">
                <p>
                  Para atender a demanda sofisticada e diversificada de {locationName}, a Suprema Sites Express desenvolveu um portfólio de soluções que cobre todas as etapas da jornada digital. Entendemos que cada negócio tem uma necessidade específica, e por isso não acreditamos em "receitas de bolo" prontas. Nossos projetos são modulares e escaláveis.
                </p>
                
                <h3 className="text-xl font-bold text-brand-dark mt-4">Sites Institucionais Express</h3>
                <p>
                  Ideal para profissionais liberais, prestadores de serviços e pequenas empresas de {locationName}. O site institucional é o seu cartão de visitas digital, mas com superpoderes. Ele trabalha 24 horas por dia, 7 dias por semana, explicando quem você é, o que você faz e por que o cliente deve escolher você. Desenvolvemos estruturas que transmitem autoridade imediata, com galerias de fotos, seções de "Sobre Nós" humanizadas e integração total com mapas e redes sociais.
                </p>

                <h3 className="text-xl font-bold text-brand-dark mt-4">Lojas Virtuais (E-commerce)</h3>
                <p>
                  Quer expandir suas vendas para além das fronteiras de {locationName}? Nossas lojas virtuais são robustas e seguras. Integramos os principais meios de pagamento do mercado (Pix, Cartão de Crédito, Boleto) e sistemas de cálculo automático de frete (Correios, Transportadoras). O painel de gestão é intuitivo, permitindo que você mesmo cadastre produtos, controle o estoque e gerencie pedidos, sem depender de programadores para cada pequena alteração.
                </p>

                <h3 className="text-xl font-bold text-brand-dark mt-4">Landing Pages de Alta Conversão</h3>
                <p>
                  Se o seu objetivo é vender um produto específico ou captar leads (contatos) para sua equipe comercial em {locationName}, a Landing Page é a ferramenta perfeita. Focada em uma única ação, ela elimina distrações e guia o visitante através de uma narrativa persuasiva (copywriting) até o botão de compra ou cadastro. É a estrutura fundamental para quem investe em Tráfego Pago (Google Ads ou Facebook Ads), garantindo que o dinheiro investido em anúncios traga o máximo retorno possível (ROI).
                </p>
              </div>
            </article>

             {/* Block 3: Por que a Suprema */}
             <article className="prose max-w-none">
              <h2 className="text-3xl font-bold text-brand-dark mb-6 flex items-center gap-3 border-b pb-4 border-gray-200">
                <Rocket className="text-brand-primary" size={32} />
                Por que a Suprema é a Escolha Certa em {locationName}?
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4 text-justify">
                <p>
                  O mercado de criação de sites está cheio de promessas vazias e amadorismo. Em {locationName}, muitos empresários já tiveram experiências frustrantes com "sobrinhos" que somem no meio do projeto ou agências que demoram meses para entregar um site básico. A Suprema Sites Express nasceu para combater exatamente isso. Nossa filosofia é baseada em três pilares inegociáveis que nos tornaram referência na região.
                </p>
                <p>
                  <strong>1. Velocidade Extrema (Método Express):</strong> Tempo é o ativo mais valioso de qualquer negócio em {locationName}. Nossa metodologia ágil permite que, uma vez recebido todo o material (textos e imagens), seu site esteja no ar entre 6h e 48h úteis. Não sacrificamos a qualidade pela velocidade; usamos tecnologia de ponta e processos otimizados para entregar excelência em tempo recorde. Enquanto seu concorrente ainda está pedindo orçamento, você já está vendendo.
                </p>
                <p>
                  <strong>2. Tecnologia de Verdade (SEO First):</strong> Não usamos construtores de sites lentos e ultrapassados que o Google penaliza. Nossos sites são desenvolvidos com códigos limpos e modernos (React, Next.js), garantindo pontuações altíssimas no Google PageSpeed. Isso significa que seu site carrega instantaneamente no celular do cliente de {locationName}, mesmo no 3G/4G. Além disso, toda a estrutura de títulos (H1, H2), meta-tags e descrições é otimizada nativamente para os termos de busca da sua região.
                </p>
                <p>
                  <strong>3. Foco em Conversão e Vendas:</strong> Um site bonito que não vende é apenas um quadro na parede. Nós aplicamos técnicas avançadas de Neuromarketing e Copywriting em cada página. Estudamos o público de {locationName} para saber quais gatilhos mentais funcionam melhor. O posicionamento dos botões, as cores de contraste, os formulários de contato — tudo é desenhado cientificamente para transformar o visitante curioso em um cliente pagante.
                </p>
              </div>
            </article>

            {/* Block 4: Benefícios e Visibilidade */}
            <article className="prose max-w-none">
              <h2 className="text-3xl font-bold text-brand-dark mb-6 flex items-center gap-3 border-b pb-4 border-gray-200">
                <BarChart className="text-brand-primary" size={32} />
                Maximize sua Visibilidade e Domine o Mercado
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4 text-justify">
                <p>
                  O impacto de um site bem feito vai muito além da estética. Nossos clientes em {locationName} e região relatam transformações reais em seus faturamentos. O dado que mais nos orgulha é o <strong>aumento médio de 300% na visibilidade online</strong> no primeiro ano de operação do novo site. Mas o que isso significa na prática para sua empresa?
                </p>
                <p>
                  Significa aparecer quando importa. Quando alguém em {locationName} procura por "melhor [seu serviço]", sua marca está lá. Significa construir um ativo digital que se valoriza com o tempo. Diferente de um panfleto que vai para o lixo ou um post de rede social que desaparece em 24 horas, seu site é um terreno próprio na internet que ganha autoridade a cada dia. Ele trabalha para você enquanto você dorme, educando clientes e captando pedidos de orçamento.
                </p>
                <p>
                  Além da criação do site, oferecemos um ecossistema de suporte. Ajudamos na configuração do seu perfil no <strong>Google Meu Negócio</strong>, fundamental para aparecer nos mapas de {locationName}. Garantimos a segurança dos dados dos seus clientes com Certificados SSL (o cadeado verde) inclusos. E oferecemos hospedagem em servidores de alta performance, garantindo que seu site nunca saia do ar nos momentos de pico.
                </p>
                
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-2xl shadow-xl my-8 relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-brand-accent mb-4">🚀 Oferta Especial para {locationName}</h3>
                    <p className="mb-6 text-gray-300">
                      Estamos selecionando empresas parceiras em {locationName} para construir cases de sucesso. Fechando seu projeto esta semana, você garante um pacote exclusivo de aceleração digital:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                      <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg">
                        <CheckCircle className="text-green-400" size={20}/> 
                        <span className="font-semibold">Domínio Grátis (1º ano)</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg">
                        <CheckCircle className="text-green-400" size={20}/> 
                        <span className="font-semibold">Hospedagem Premium</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg">
                        <CheckCircle className="text-green-400" size={20}/> 
                        <span className="font-semibold">Botão WhatsApp Flutuante</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg">
                        <CheckCircle className="text-green-400" size={20}/> 
                        <span className="font-semibold">Otimização SEO Local</span>
                      </div>
                    </div>
                    <a href="https://wa.me/5541987001004" className="inline-block w-full text-center bg-brand-accent hover:bg-yellow-500 text-brand-dark font-bold py-4 rounded-lg transition-colors shadow-lg text-lg">
                      Quero Garantir Minha Oferta
                    </a>
                  </div>
                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-brand-primary opacity-20 rounded-full blur-3xl"></div>
                </div>

                <p className="font-bold text-lg text-center mt-6 text-brand-dark">
                  Não deixe o futuro da sua empresa em {locationName} para depois. A internet não espera, e seus concorrentes também não.
                </p>
              </div>
            </article>

            {/* 20 Reasons Grid */}
            <div className="mt-12">
               <h3 className="text-2xl font-bold text-brand-dark mb-8 text-center uppercase tracking-wide border-t border-gray-200 pt-8">
                20 Motivos para Contratar a Suprema em {locationName}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                 {benefits.map((benefit, idx) => (
                   <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-brand-accent transition-all hover:shadow-md group">
                     <div className="shrink-0 mt-1 transition-transform group-hover:scale-110">{benefit.icon}</div>
                     <div>
                       <h4 className="font-bold text-brand-dark text-sm group-hover:text-brand-primary transition-colors">{benefit.title}</h4>
                       <p className="text-xs text-gray-600 leading-snug">{benefit.desc}</p>
                     </div>
                   </div>
                 ))}
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="mt-16 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-brand-dark p-6">
                <h2 className="text-2xl font-bold text-white text-center">Dúvidas Frequentes sobre Sites em {locationName}</h2>
              </div>
              <div className="p-6">
                <Accordion items={faqItems} />
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-8">
              {/* Mini Contact Card */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <h3 className="font-bold text-xl mb-4 text-brand-dark flex items-center gap-2">
                  <Clock className="text-brand-accent" />
                  Atendimento Imediato
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Nossa equipe está online agora para atender dúvidas de {locationName}.
                </p>
                <div className="flex flex-col gap-3">
                  <a href="https://wa.me/5541987001004" className="bg-green-600 text-white py-4 px-4 rounded-lg text-center font-bold hover:bg-green-700 transition flex items-center justify-center gap-2 shadow-md">
                    <Share2 size={20} />
                    WhatsApp (41) 98700-1004
                  </a>
                  <a href="tel:41987001004" className="bg-brand-primary text-white py-4 px-4 rounded-lg text-center font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2 shadow-md">
                    <Smartphone size={20} />
                    Ligar Agora
                  </a>
                </div>
              </div>

              {/* Other Locations Links */}
              <div className="bg-gray-50 rounded-xl border border-gray-200 max-h-[600px] overflow-hidden flex flex-col">
                 <div className="p-6 pb-2 border-b border-gray-200 bg-gray-50 sticky top-0 z-10">
                    <h3 className="font-bold text-lg text-brand-dark flex items-center gap-2">
                      <Globe size={20} className="text-brand-primary" />
                      Cidades Vizinhas
                    </h3>
                 </div>
                 <div className="overflow-y-auto p-4 custom-scrollbar">
                   <div className="flex flex-col gap-2">
                     {cities.map(city => (
                       <Link 
                         key={city} 
                         to={`/site-em-${slugify(city)}`}
                         className={`text-sm px-3 py-2 rounded transition-colors flex justify-between items-center group ${locationName === city ? 'bg-brand-primary text-white font-bold' : 'bg-white hover:bg-gray-200 text-gray-700'}`}
                       >
                         {city}
                         <ChevronRight size={14} className={`opacity-0 group-hover:opacity-100 transition-opacity ${locationName === city ? 'text-white' : 'text-gray-400'}`} />
                       </Link>
                     ))}
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Strip */}
      <section className="bg-gradient-to-r from-brand-accent to-yellow-400 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">
            Sua empresa em {locationName} merece o melhor
          </h2>
          <p className="text-brand-dark mb-8 text-xl max-w-2xl mx-auto font-medium">
            Não perca mais vendas para a concorrência. Transforme sua presença digital hoje mesmo com quem entende do assunto.
          </p>
          <a 
             href="https://wa.me/5541987001004" 
             className="inline-flex items-center gap-3 bg-brand-dark text-white font-bold py-5 px-12 rounded-full text-lg hover:bg-gray-800 transition-all hover:-translate-y-1 shadow-2xl"
           >
             <Rocket size={24} />
             Solicitar Proposta para {locationName}
           </a>
        </div>
      </section>
    </div>
  );
};