import React from 'react';

export const Services: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-brand-dark mb-4">Nossos Serviços</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Soluções completas para sua presença digital. Do design ao código, do SEO ao suporte contínuo.
          </p>
        </div>

        <div className="space-y-16">
          {/* Service 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12">
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
                <li className="flex items-center gap-2 text-gray-700">✓ Integração com redes sociais</li>
              </ul>
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
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
                <li className="flex items-center gap-2 text-gray-700">✓ Relatórios de vendas detalhados</li>
              </ul>
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col md:flex-row items-center gap-12">
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
                <li className="flex items-center gap-2 text-gray-700">✓ Aumento da autoridade do domínio</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};