import React from 'react';
import { VideoPlayer } from '../components/VideoPlayer';
import { Accordion } from '../components/Accordion';
import { LeadForm } from '../components/LeadForm';
import { Rocket, ShoppingCart, TrendingUp, Target } from 'lucide-react';

export const Services: React.FC = () => {
  const faqItems = [
    {
      question: "O site será meu ou pagarei aluguel?",
      answer: "O site é 100% seu. Diferente de plataformas de aluguel, nós desenvolvemos o projeto e entregamos a você. Após o pagamento único (ou parcelado), você não paga mensalidades para nós, apenas a renovação anual de domínio e hospedagem, que são custos padrão da internet."
    },
    {
      question: "Qual o prazo de entrega dos serviços?",
      answer: "Para sites institucionais e Landing Pages no modelo Express, entregamos entre 6h e 48h úteis após o recebimento do material. Para Lojas Virtuais e projetos complexos, o prazo médio é de 7 a 15 dias."
    },
    {
      question: "Como funciona a otimização SEO?",
      answer: "Implementamos SEO técnico em todas as páginas: meta-tags, sitemaps, otimização de imagens e velocidade de carregamento. Isso prepara seu site para ser indexado corretamente pelo Google e aparecer nas buscas locais."
    },
    {
      question: "Consigo atualizar o site sozinho?",
      answer: "Sim! Entregamos sites com painéis administrativos intuitivos (WordPress ou React com CMS headless, dependendo do projeto) para que você possa alterar textos, fotos e produtos sem precisar de um programador."
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="bg-brand-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Nossos Serviços Digitais</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Soluções completas para levar sua empresa do anonimato à liderança de mercado.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        
        {/* Video Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <VideoPlayer />
          <p className="text-center text-gray-600 mt-6 italic text-lg">Conheça nossos serviços digitais que transformam empresas de Curitiba, Araucária, São José dos Pinhais e toda região em referências online. Com SEO para Google, Bing, Yahoo e mais de 300 buscadores.</p>
          <div className="text-center mt-6">
            <a href="https://wa.me/5541987001004" className="inline-flex items-center gap-2 bg-brand-primary hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all shadow-lg">
              Solicitar Proposta Personalizada
            </a>
          </div>
        </div>

        <div className="space-y-16">
          {/* Service 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-full md:w-1/2">
              <img src="https://picsum.photos/600/400?random=1" alt="Criação de Sites" className="rounded-xl shadow-lg w-full" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-brand-dark mb-4">Criação de Sites Institucionais</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Desenvolvemos sites institucionais sob medida para apresentar sua empresa, serviços e valores. Focamos em layout moderno, 
                navegação intuitiva e carregamento rápido para garantir a melhor impressão aos seus visitantes.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-gray-700">✓ Painel gerenciável fácil de usar</li>
                <li className="flex items-center gap-2 text-gray-700">✓ Design exclusivo e profissional</li>
                <li className="flex items-center gap-2 text-gray-700">✓ Integração com WhatsApp e Redes Sociais</li>
              </ul>
              <a href="https://wa.me/5541987001004" className="text-brand-primary font-bold hover:underline">Solicitar Orçamento &rarr;</a>
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-full md:w-1/2">
              <img src="https://picsum.photos/600/400?random=2" alt="Lojas Virtuais" className="rounded-xl shadow-lg w-full" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-brand-dark mb-4">Lojas Virtuais (E-commerce)</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Venda seus produtos para todo o Brasil 24 horas por dia. Criamos lojas virtuais seguras, integradas com meios de pagamento (Pix, Cartão) 
                e cálculo de frete automático.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-gray-700">✓ Gestão de estoque e pedidos</li>
                <li className="flex items-center gap-2 text-gray-700">✓ Checkout transparente e seguro</li>
                <li className="flex items-center gap-2 text-gray-700">✓ Integração com Correios e Transportadoras</li>
              </ul>
              <a href="https://wa.me/5541987001004" className="text-brand-primary font-bold hover:underline">Criar minha Loja &rarr;</a>
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col md:flex-row items-center gap-12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-full md:w-1/2">
              <img src="https://picsum.photos/600/400?random=3" alt="SEO Local" className="rounded-xl shadow-lg w-full" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-brand-dark mb-4">Otimização SEO e Google Meu Negócio</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Não adianta ter um site bonito se ninguém o encontra. Nossas estratégias de SEO colocam sua empresa nas primeiras posições do Google 
                para buscas relevantes em Curitiba e região.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-gray-700">✓ Otimização de palavras-chave locais</li>
                <li className="flex items-center gap-2 text-gray-700">✓ Configuração do Google Meu Negócio</li>
                <li className="flex items-center gap-2 text-gray-700">✓ Estratégia de Conteúdo e Blog</li>
              </ul>
              <a href="https://wa.me/5541987001004" className="text-brand-primary font-bold hover:underline">Aparecer no Google &rarr;</a>
            </div>
          </div>
        </div>

        {/* Texto 1 - Sites Institucionais Detalhado */}
        <div className="max-w-5xl mx-auto bg-white p-12 rounded-2xl shadow-lg border border-gray-100 mb-16">
          <div className="flex items-start gap-6 mb-6">
            <div className="bg-brand-primary/10 p-4 rounded-xl">
              <Rocket className="text-brand-primary" size={48} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-4">Sites Institucionais: Sua Vitrine Digital</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Um <strong>site institucional profissional</strong> é o cartão de visitas digital da sua empresa. Atendemos negócios de todos os portes em <strong>Curitiba</strong> (Batel, Centro, Água Verde, CIC, Portão, Boqueirão, Bacacheri, Cajuru, Xaxim) e região metropolitana (<strong>Araucária</strong>, <strong>São José dos Pinhais</strong>, <strong>Colombo</strong>, <strong>Pinhais</strong>).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Desenvolvemos sites institucionais com design moderno e exclusivo, navegação intuitiva, carregamento ultrarrápido (menos de 3 segundos), 100% responsivo para mobile, tablet e desktop, integração com WhatsApp Business, formulários de contato inteligentes, galeria de fotos e vídeos profissional, mapa de localização integrado e SEO otimizado desde o primeiro dia.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Cada projeto inclui painel administrativo para você atualizar textos, imagens e conteúdos sem precisar de programador. Certificado SSL de segurança incluso. Ideal para empresas que querem transmitir credibilidade e profissionalismo online.
              </p>
            </div>
          </div>
        </div>

        {/* Texto 2 - E-commerce Detalhado */}
        <div className="max-w-5xl mx-auto bg-white p-12 rounded-2xl shadow-lg border border-gray-100 mb-16">
          <div className="flex items-start gap-6 mb-6">
            <div className="bg-green-50 p-4 rounded-xl">
              <ShoppingCart className="text-green-600" size={48} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-4">Lojas Virtuais: Venda Online 24/7</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Transforme seu negócio com uma <strong>loja virtual completa e profissional</strong>. Desenvolvemos e-commerces para empresas de <strong>Santa Felicidade</strong>, <strong>Pinheirinho</strong>, <strong>Portão</strong>, <strong>Fazenda Rio Grande</strong>, <strong>Almirante Tamandaré</strong> e todas as regiões de Curitiba e cidades vizinhas.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sua loja virtual inclui: painel administrativo completo e intuitivo, cadastro ilimitado de produtos com fotos, descrições e variações (tamanho, cor), integração com gateways de pagamento (Mercado Pago, PagSeguro, Pix, cartões), cálculo automático de frete (Correios, Jadlog, transportadoras), controle de estoque em tempo real, sistema de cupons e descontos promocionais, área exclusiva para clientes, e-mail marketing automático de carrinho abandonado, relatórios de vendas detalhados e certificado SSL de segurança.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Otimização SEO para e-commerce incluída: suas páginas de produtos aparecem no Google, Bing e Yahoo quando clientes procuram. Aumente seu faturamento vendendo para todo o Brasil, 24 horas por dia, todos os dias do ano.
              </p>
            </div>
          </div>
        </div>

        {/* Texto 3 - SEO Completo */}
        <div className="max-w-5xl mx-auto bg-white p-12 rounded-2xl shadow-lg border border-gray-100 mb-16">
          <div className="flex items-start gap-6 mb-6">
            <div className="bg-yellow-50 p-4 rounded-xl">
              <TrendingUp className="text-yellow-600" size={48} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-4">SEO Completo: Domine Google, Bing e Yahoo</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Não basta ter um site, é preciso <strong>ser encontrado</strong>! Nossa otimização SEO profissional coloca sua empresa nas primeiras posições do <strong>Google</strong>, <strong>Bing</strong>, <strong>Yahoo</strong> e mais de <strong>300 buscadores internacionais</strong>. Atendemos empresas do <strong>Ecoville</strong>, <strong>Bigorrilho</strong>, <strong>Rebouças</strong>, <strong>Juvevê</strong>, <strong>Cristo Rei</strong> e toda Curitiba.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nosso trabalho de SEO inclui: auditoria técnica completa do site, pesquisa profunda de palavras-chave estratégicas e rentáveis, otimização de títulos, meta-descriptions e headings, criação de conteúdo otimizado, linkagem interna inteligente, velocidade de carregamento otimizada, configuração de sitemap XML e robots.txt, integração com Google Search Console e Bing Webmaster Tools, implementação de schema markup (dados estruturados), otimização de imagens e SEO local para Google Meu Negócio.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Com nosso trabalho, você ranqueia para buscas como "sua empresa + sua cidade", "seu serviço + seu bairro", conquistando clientes que realmente procuram o que você oferece. Aumento médio de 300% na visibilidade online em 12 meses.
              </p>
            </div>
          </div>
        </div>

        {/* Texto 4 - Landing Pages Detalhado */}
        <div className="max-w-5xl mx-auto bg-white p-12 rounded-2xl shadow-lg border border-gray-100 mb-16">
          <div className="flex items-start gap-6 mb-6">
            <div className="bg-purple-50 p-4 rounded-xl">
              <Target className="text-purple-600" size={48} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-4">Landing Pages: Máxima Conversão</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Landing pages de alta conversão</strong> desenvolvidas para transformar visitantes em leads e vendas. Perfeitas para empresas do <strong>Alto da XV</strong>, <strong>Água Verde</strong>, <strong>Batel</strong>, <strong>Campo Largo</strong>, <strong>Piraquara</strong> e toda região que investem em marketing digital.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cada landing page é construída estrategicamente com: copywriting persuasivo focado em vendas, headline impactante que prende a atenção, benefícios claros e objetivos do produto/serviço, provas sociais (depoimentos, cases de sucesso), formulários otimizados para captura de leads, botões de call-to-action (CTA) estrategicamente posicionados, design responsivo perfeito em todos os dispositivos, carregamento ultrarrápido, integração com ferramentas de automação (RD Station, HubSpot, ActiveCampaign) e pixels de rastreamento (Facebook, Google Ads).
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ideais para: lançamento de produtos, campanhas de Google Ads e Facebook Ads, captura de e-mails, vendas de infoprodutos, geração de leads qualificados e eventos. Páginas prontas em 6 a 48 horas, otimizadas para SEO e prontas para receber tráfego pago ou orgânico.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 flex flex-col lg:flex-row gap-12">
           <div className="lg:w-2/3">
             <h2 className="text-3xl font-bold text-brand-dark mb-6">Perguntas Frequentes sobre Nossos Serviços</h2>
             <Accordion items={[
               ...faqItems,
               {
                 question: "Vocês trabalham com WordPress ou desenvolvimento customizado?",
                 answer: "Trabalhamos com ambos! Para projetos que precisam de flexibilidade e facilidade de atualização, usamos WordPress com temas premium personalizados. Para projetos que exigem alta performance e recursos específicos, desenvolvemos sites customizados com React, Next.js e tecnologias modernas. Sempre recomendamos a melhor solução para cada caso."
               },
               {
                 question: "O site funcionará bem em celulares e tablets?",
                 answer: "Sim! Todos os nossos sites são desenvolvidos com design responsivo, ou seja, se adaptam perfeitamente a qualquer tamanho de tela (smartphones, tablets, notebooks, desktops). Mais de 70% dos acessos atualmente vem de dispositivos móveis, por isso priorizamos a experiência mobile em todos os projetos."
               },
               {
                 question: "Como funciona o suporte após a entrega do site?",
                 answer: "Oferecemos 30 dias de suporte gratuito após a entrega para ajustes e dúvidas. Após esse período, você pode contratar planos de manutenção mensal que incluem: atualizações de segurança, backup automático, suporte técnico prioritário, alterações de conteúdo e monitoramento de desempenho. Também oferecemos atendimento avulso por demanda."
               }
             ]} />
           </div>
           <div className="lg:w-1/3">
             <div className="sticky top-24">
                <LeadForm />
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};