import React from 'react';
import { VideoPlayer } from '../components/VideoPlayer';
import { Accordion } from '../components/Accordion';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';

export const About: React.FC = () => {
  const faqItems = [
    {
      question: "Onde a Suprema Site está localizada?",
      answer: "Nossa sede fica na Av. Sete de Setembro, 2775, no coração do bairro Rebouças em Curitiba/PR. No entanto, atendemos clientes de todo o Brasil através de nossos canais digitais."
    },
    {
      question: "Há quanto tempo vocês estão no mercado?",
      answer: "A OSKAFI WEB SITES LTDA ME atua há mais de 10 anos no mercado digital, consolidando-se como uma das principais referências em criação de sites rápidos e SEO no Paraná."
    },
    {
      question: "Vocês emitem Nota Fiscal?",
      answer: "Sim, somos uma empresa 100% legalizada (CNPJ 15.083.543/0001-97) e emitimos Nota Fiscal para todos os serviços prestados, garantindo segurança e transparência para sua empresa."
    }
  ];

  return (
    <div className="bg-white">
      <div className="bg-brand-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Sobre a Suprema Site</h1>
          <p className="text-xl text-gray-300">Mais de uma década transformando negócios através da tecnologia.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
           <div className="lg:w-1/2 prose max-w-none text-gray-700">
              <h2 className="text-3xl font-bold text-brand-dark mb-6">Quem Somos</h2>
              <p className="mb-4">
                A <strong>OSKAFI WEB SITES LTDA ME</strong>, atuando sob o nome fantasia Suprema Site, é uma agência digital consolidada em Curitiba, Paraná.
                Nossa missão é democratizar o acesso a sites de alta qualidade, permitindo que pequenas e médias empresas tenham a mesma presença digital de grandes corporações.
              </p>
              <p className="mb-4">
                Com mais de uma década de experiência, nos especializamos em criar soluções web que realmente funcionam. Não vendemos apenas sites; vendemos ferramentas de crescimento para o seu negócio.
                Entendemos que cada cliente é único, e por isso nossa abordagem é consultiva, focada em resolver os problemas reais de vendas e visibilidade.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                   <Award className="text-brand-primary mb-2" size={32} />
                   <h3 className="font-bold text-brand-dark">Excelência</h3>
                   <p className="text-sm">Compromisso com a qualidade técnica.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                   <Clock className="text-brand-primary mb-2" size={32} />
                   <h3 className="font-bold text-brand-dark">Agilidade</h3>
                   <p className="text-sm">Entregas em tempo recorde.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                   <Users className="text-brand-primary mb-2" size={32} />
                   <h3 className="font-bold text-brand-dark">Parceria</h3>
                   <p className="text-sm">Crescemos junto com você.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                   <CheckCircle className="text-brand-primary mb-2" size={32} />
                   <h3 className="font-bold text-brand-dark">Resultados</h3>
                   <p className="text-sm">Foco total em vendas.</p>
                </div>
              </div>
           </div>
           <div className="lg:w-1/2 w-full">
              <VideoPlayer />
           </div>
        </div>

        <div className="max-w-3xl mx-auto mt-20">
           <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center">Dúvidas Institucionais</h2>
           <Accordion items={faqItems} />
        </div>
      </div>
    </div>
  );
};