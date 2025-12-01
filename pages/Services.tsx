import React from 'react';
import { VideoPlayer } from '../components/VideoPlayer';
import { Accordion } from '../components/Accordion';
import { LeadForm } from '../components/LeadForm';

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
          <p className="text-center text-gray-600 mt-4 italic">Veja como nossa metodologia funciona na prática.</p>
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

        {/* FAQ Section */}
        <div className="mt-20 flex flex-col lg:flex-row gap-12">
           <div className="lg:w-2/3">
             <h2 className="text-3xl font-bold text-brand-dark mb-6">Perguntas Frequentes</h2>
             <Accordion items={faqItems} />
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