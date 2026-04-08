
import React, { useEffect } from 'react';

export const Privacy: React.FC = () => {
  useEffect(() => {
    document.title = "Política de Privacidade | Suprema Site Express";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Leia nossa política de privacidade e saiba como protegemos seus dados na Suprema Site Express.");
    }
  }, []);

  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-black text-brand-dark mb-12 tracking-tighter">Política de Privacidade</h1>
        
        <div className="prose prose-lg text-gray-600">
          <p className="mb-6">
            A Suprema Mídia valoriza a sua privacidade. Esta política descreve como coletamos, usamos e protegemos suas informações ao utilizar nosso site.
          </p>
          
          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4">1. Coleta de Dados</h2>
          <p className="mb-6">
            Coletamos informações que você nos fornece voluntariamente através de nossos formulários de contato, como nome, e-mail e telefone. Também coletamos dados de navegação anônimos para melhorar a experiência do usuário através de cookies e ferramentas de análise.
          </p>
          
          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4">2. Uso das Informações</h2>
          <p className="mb-6">
            As informações coletadas são utilizadas exclusivamente para:
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Responder a solicitações de orçamento e contato.</li>
              <li>Melhorar nossos serviços e a performance do site.</li>
              <li>Enviar comunicações relacionadas aos seus projetos, quando aplicável.</li>
            </ul>
          </p>
          
          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4">3. Proteção de Dados</h2>
          <p className="mb-6">
            Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração ou destruição.
          </p>
          
          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4">4. Seus Direitos</h2>
          <p className="mb-6">
            Você tem o direito de solicitar o acesso, correção ou exclusão de seus dados pessoais a qualquer momento através de nossos canais de contato.
          </p>
          
          <p className="mt-12 text-sm text-gray-400">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>
      </div>
    </div>
  );
};
