import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { getNameFromSlug, cities, slugify } from '../data/locations';
import { Accordion } from '../components/Accordion';
import { LeadForm } from '../components/LeadForm';
import { VideoPlayer } from '../components/VideoPlayer';
import { CheckCircle, MapPin, Globe, Rocket, Shield, PenTool, Clock, TrendingUp, Layout, Smartphone, Users, Zap, Search, Lock, Award, DollarSign, Heart, MousePointer, Share2, Briefcase, ChevronRight, BarChart } from 'lucide-react';

export const LocationSEO: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const locationName = getNameFromSlug(slug || '');
  const currentPath = location.pathname;

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
      linkCanonical.setAttribute('href', `https://www.supremasite.com.br${currentPath}`);
    } else {
       const link = document.createElement('link');
       link.rel = 'canonical';
       link.href = `https://www.supremasite.com.br${currentPath}`;
       document.head.appendChild(link);
    }
  }, [locationName, slug, currentPath]);

  // Schema Markup for Local Business specific to this location
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `Suprema Sites Express - ${locationName}`,
    "image": "https://www.supremasite.com.br/logo.png",
    "url": `https://www.supremasite.com.br${currentPath}`,
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
      question: `1. Quanto custa criar um site profissional?`,
      answer: `O investimento em um site profissional varia conforme a complexidade do projeto. Sites institucionais básicos começam a partir de R$ 1.500, enquanto lojas virtuais e projetos personalizados podem custar entre R$ 3.000 e R$ 15.000. O valor depende de funcionalidades, design customizado, integrações e recursos especiais. Na Suprema Site, oferecemos orçamentos transparentes e adaptados à realidade do seu negócio em ${locationName}.`
    },
    {
      question: `2. Qual a diferença entre site institucional e loja virtual?`,
      answer: `O site institucional apresenta sua empresa, serviços e informações de contato, sendo ideal para gerar leads e credibilidade. Já a loja virtual permite vendas online diretas, com carrinho de compras, pagamento integrado e gestão de produtos. Empresas em ${locationName} podem começar com um site institucional e evoluir para e-commerce conforme o negócio cresce.`
    },
    {
      question: `3. Em quanto tempo um site fica pronto?`,
      answer: `O prazo médio para desenvolvimento de um site profissional é de 15 a 45 dias úteis. Sites institucionais simples podem ficar prontos em 2-3 semanas, enquanto projetos complexos com funcionalidades personalizadas podem levar 6-8 semanas. O prazo depende do fornecimento de conteúdo, aprovações e complexidade técnica.`
    },
    {
      question: `4. Vale a pena ter um site ou só redes sociais?`,
      answer: `Ter um site próprio é fundamental! Enquanto redes sociais são ótimas para engajamento, o site é o único canal que você controla 100%. Clientes buscam empresas no Google, e um site profissional transmite credibilidade, melhora o SEO e permite vendas ou captação de leads sem depender de algoritmos de terceiros. Para negócios em ${locationName}, o site é a base digital essencial.`
    },
    {
      question: `5. O que um site profissional precisa ter?`,
      answer: `Todo site profissional precisa de: design responsivo (funcionar em celulares), velocidade de carregamento, SSL (segurança), SEO otimizado, informações claras sobre a empresa, formulários de contato ou WhatsApp integrado, fotos profissionais e textos bem escritos. Também é essencial ter Google Analytics para medir resultados.`
    },
    {
      question: `6. Site pronto ou site personalizado: qual escolher?`,
      answer: `Sites prontos (templates) são mais baratos e rápidos, mas limitados em personalização e exclusividade. Sites personalizados são únicos, adaptados à sua marca e necessidades, permitindo qualquer funcionalidade desejada. Para empresas que querem se destacar em ${locationName}, recomendamos o site personalizado para melhor retorno sobre investimento.`
    },
    {
      question: `7. Como criar um site que apareça no Google?`,
      answer: `Para aparecer no Google, o site precisa de: SEO técnico (títulos, meta descriptions, URLs amigáveis), conteúdo relevante com palavras-chave, velocidade de carregamento, versão mobile, SSL, links internos e externos, Google My Business configurado e conteúdo atualizado regularmente. Na Suprema Site, todos os sites são desenvolvidos com otimização SEO desde o início.`
    },
    {
      question: `8. O que é SEO e por que é importante para sites?`,
      answer: `SEO (Search Engine Optimization) é o conjunto de técnicas para melhorar o posicionamento do site nos resultados do Google. É importante porque 75% dos usuários não passam da primeira página de busca. Com SEO bem feito, seu site atrai visitantes qualificados gratuitamente, aumentando vendas e leads sem depender de anúncios pagos.`
    },
    {
      question: `9. Meu site vai funcionar no celular?`,
      answer: `Sim! Todo site profissional desenvolvido pela Suprema Site é responsivo, ou seja, se adapta automaticamente a smartphones, tablets e computadores. Mais de 70% dos acessos à internet vêm de celulares, então essa funcionalidade é obrigatória e já incluída em todos os nossos projetos.`
    },
    {
      question: `10. Site em WordPress é seguro?`,
      answer: `Sim, WordPress é seguro quando bem configurado! É a plataforma mais usada no mundo (43% dos sites). A segurança depende de: manter sistema atualizado, usar plugins confiáveis, ter SSL, backup automático, senhas fortes e hospedagem de qualidade. Nossos sites WordPress incluem todas essas proteções desde o início.`
    },
    {
      question: `11. Qual a melhor plataforma para criar um site?`,
      answer: `Depende do objetivo! WordPress é ideal para sites institucionais e blogs (flexível e SEO-friendly). Shopify e WooCommerce são ótimos para e-commerce. Para sites personalizados com funcionalidades específicas, desenvolvimento em React/Next.js pode ser melhor. Analisamos seu negócio em ${locationName} para recomendar a melhor solução.`
    },
    {
      question: `12. Site precisa de manutenção mensal?`,
      answer: `Sim, recomendamos manutenção mensal para: atualizar sistema e plugins (segurança), fazer backup, monitorar velocidade, corrigir eventuais bugs, atualizar conteúdo e otimizar SEO. A manutenção previne problemas graves e mantém o site funcionando perfeitamente. Oferecemos planos a partir de R$ 150/mês.`
    },
    {
      question: `13. O que é hospedagem de site e domínio?`,
      answer: `Domínio é o endereço do seu site (exemplo: suaempresa.com.br). Hospedagem é o servidor onde os arquivos do site ficam armazenados. É como um imóvel: o domínio é o endereço e a hospedagem é o terreno. Ambos têm custo anual, geralmente entre R$ 40 (domínio) e R$ 300-800 (hospedagem de qualidade) por ano.`
    },
    {
      question: `14. Como deixar meu site rápido?`,
      answer: `Para ter um site rápido: use hospedagem de qualidade, otimize imagens (compressão e formatos modernos), minimize código CSS/JS, use cache, escolha temas leves, evite excesso de plugins e use CDN. Sites rápidos têm melhor SEO, menor taxa de rejeição e mais conversões. Todos os nossos projetos são otimizados para velocidade máxima.`
    },
    {
      question: `15. Site ajuda a vender mais?`,
      answer: `Sim! Um site profissional aumenta vendas porque: gera credibilidade (90% dos consumidores pesquisam online antes de comprar), funciona 24/7 captando leads, melhora posicionamento no Google, facilita que clientes encontrem você e permite mostrar produtos/serviços com detalhes. Clientes em ${locationName} relatam aumento médio de 40% em contatos após lançar site profissional.`
    },
    {
      question: `16. Como gerar leads com um site?`,
      answer: `Para gerar leads, o site precisa de: formulários estratégicos, call-to-actions claros, ofertas de conteúdo (e-books, consultorias gratuitas), botão de WhatsApp visível, páginas de captura, chat online, SEO para atrair tráfego qualificado e integração com e-mail marketing. Criamos estratégias de conversão personalizadas para cada negócio.`
    },
    {
      question: `17. Qual a importância do design para um site?`,
      answer: `O design é crucial! 94% da primeira impressão de um site vem do design. Um layout profissional transmite confiança, facilita navegação, guia o visitante para ações desejadas e reforça a identidade da marca. Design ruim afasta clientes em segundos. Investimos em designs modernos, limpos e focados em conversão.`
    },
    {
      question: `18. O que é UX e UI em criação de sites?`,
      answer: `UX (User Experience) é a experiência do usuário: como ele navega e interage com o site. UI (User Interface) é a interface visual: cores, botões, tipografia. UX garante que o site seja fácil e intuitivo. UI garante que seja bonito e agradável. Ambos trabalham juntos para criar sites que convertem e encantam visitantes.`
    },
    {
      question: `19. Como integrar WhatsApp no site?`,
      answer: `A integração do WhatsApp é feita com um botão flutuante ou fixo que abre conversa direta com seu número comercial. Pode incluir mensagem pré-definida e estar visível em todas as páginas. É a forma mais eficaz de contato, pois 98% dos brasileiros usam WhatsApp. Incluímos essa integração em todos os sites sem custo adicional.`
    },
    {
      question: `20. Site com formulário ou botão direto?`,
      answer: `O ideal é ter ambos! Formulários capturam informações completas e organizam leads. Botões diretos (WhatsApp, telefone) facilitam contato imediato para clientes com urgência. A estratégia depende do seu modelo de negócio. Recomendamos testar e medir qual gera mais conversões para seu público em ${locationName}.`
    },
    {
      question: `21. Como criar um site para empresa local?`,
      answer: `Sites para empresas locais precisam de: SEO local otimizado (nome da cidade/bairro), Google My Business integrado, endereço e telefone visíveis, depoimentos de clientes locais, fotos da região, mapa incorporado e conteúdo sobre a área de atuação. Isso ajuda a aparecer em buscas como "serviço em ${locationName}".`
    },
    {
      question: `22. Site precisa ter blog?`,
      answer: `Sim, ter um blog é altamente recomendado! Blogs melhoram SEO (conteúdo novo atrai Google), educam clientes, estabelecem autoridade, geram tráfego orgânico e aumentam tempo no site. Posts sobre dúvidas comuns, tendências e dicas posicionam sua empresa como referência. Criamos estratégias de conteúdo para blogs eficientes.`
    },
    {
      question: `23. Como proteger um site contra ataques?`,
      answer: `Para proteger seu site: use SSL (HTTPS), mantenha sistema e plugins atualizados, instale firewall, faça backup diário automático, use senhas fortes, limite tentativas de login, escolha hospedagem segura e monitore atividades suspeitas. Implementamos todas essas proteções e oferecemos monitoramento constante nos planos de manutenção.`
    },
    {
      question: `24. Qual a diferença entre site barato e site profissional?`,
      answer: `Sites baratos geralmente usam templates genéricos, têm design básico, SEO fraco, código não otimizado, suporte limitado e podem ter problemas de segurança. Sites profissionais têm design único, código limpo, SEO estratégico, velocidade otimizada, segurança reforçada e suporte contínuo. O profissional é um investimento com retorno, não apenas um custo.`
    },
    {
      question: `25. Como atualizar conteúdo do site sozinho?`,
      answer: `Com WordPress ou CMS similar, você pode atualizar textos, imagens, publicar posts de blog e editar páginas através de um painel administrativo intuitivo, sem conhecimento técnico. Oferecemos treinamento completo para sua equipe operar o site autonomamente. Para alterações de design ou funcionalidades, nossa equipe está sempre disponível.`
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
              <div className="mb-6">
                <img src={`https://picsum.photos/800/400?random=${slug.length}`} alt={`Paisagem urbana representando ${locationName}`} className="w-full h-auto rounded-xl shadow-md object-cover" />
              </div>
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
                
                <div className="flex flex-col md:flex-row gap-6 my-8">
                  <div className="bg-blue-50 p-6 rounded-lg flex-1 border border-blue-100">
                    <h3 className="text-xl font-bold text-brand-dark mb-3">Sites Institucionais</h3>
                    <p className="text-sm">O cartão de visitas digital com superpoderes para profissionais de {locationName}. Transmita autoridade imediata 24h por dia.</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg flex-1 border border-green-100">
                    <h3 className="text-xl font-bold text-brand-dark mb-3">Lojas Virtuais</h3>
                    <p className="text-sm">Expanda suas vendas além de {locationName}. Pagamentos via Pix e Cartão, cálculo de frete e gestão de estoque completa.</p>
                  </div>
                </div>

                <p>
                  Quer expandir suas vendas para além das fronteiras de {locationName}? Nossas lojas virtuais são robustas e seguras. Integramos os principais meios de pagamento do mercado (Pix, Cartão de Crédito, Boleto) e sistemas de cálculo automático de frete (Correios, Transportadoras). O painel de gestão é intuitivo, permitindo que você mesmo cadastre produtos, controle o estoque e gerencie pedidos, sem depender de programadores para cada pequena alteração.
                </p>

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
              <div className="mb-6">
                <img src={`https://picsum.photos/800/400?random=${slug.length + 1}`} alt="Equipe trabalhando em projeto web" className="w-full h-auto rounded-xl shadow-md object-cover" />
              </div>
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

            {/* FAQ Accordion - 25 Perguntas e Respostas */}
            <div className="mt-16 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-brand-dark p-6">
                <h2 className="text-2xl font-bold text-white text-center">25 Perguntas e Respostas sobre Criação de Sites em {locationName}</h2>
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
                         to={`/cidades/${slugify(city)}`}
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