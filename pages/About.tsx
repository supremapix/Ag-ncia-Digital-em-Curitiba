import React from 'react';
import { VideoPlayer } from '../components/VideoPlayer';
import { Accordion } from '../components/Accordion';
import { CheckCircle, Award, Users, Clock, Target, Shield, Zap, Heart } from 'lucide-react';
import { LeadForm } from '../components/LeadForm';

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

        {/* Texto 1 - Nossa História */}
        <div className="max-w-5xl mx-auto bg-slate-50 p-12 rounded-2xl shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-brand-dark mb-6">Nossa História e Missão</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Desde 2012, a <strong>OSKAFI WEB SITES LTDA ME</strong> (nome fantasia <strong>Suprema Site</strong>) vem revolucionando a presença digital de empresas em <strong>Curitiba</strong>, <strong>Araucária</strong>, <strong>São José dos Pinhais</strong>, <strong>Colombo</strong> e toda região metropolitana do Paraná.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nossa missão sempre foi clara: democratizar o acesso a sites profissionais de alta qualidade, permitindo que pequenas e médias empresas tenham a mesma presença online de grandes corporações. Acreditamos que todo negócio, independente do tamanho, merece uma vitrine digital que realmente funciona e gera resultados.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Com sede estratégica na <strong>Av. Sete de Setembro, 2775 - Rebouças</strong>, no coração de Curitiba, atendemos clientes de todos os bairros (Batel, Centro, Água Verde, CIC, Portão, Boqueirão, Santa Felicidade, Pinheirinho, Bacacheri, Cajuru, Xaxim, Bigorrilho, Ecoville, Juvevê, Cristo Rei) e cidades vizinhas (Fazenda Rio Grande, Almirante Tamandaré, Campo Largo, Pinhais, Piraquara, Quatro Barras).
          </p>
          <p className="text-gray-700 leading-relaxed">
            Somos uma empresa 100% legalizada (CNPJ 15.083.543/0001-97), emitimos nota fiscal e seguimos todas as normas legais e tributárias. Trabalhamos com transparência, compromisso e foco total em resultados para nossos clientes.
          </p>
        </div>

        {/* Texto 2 - Diferenciais */}
        <div className="max-w-5xl mx-auto bg-white p-12 rounded-2xl shadow-lg mb-16 border border-gray-100">
          <h2 className="text-3xl font-bold text-brand-dark mb-8">Por Que Escolher a Suprema Site?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-blue-50 p-3 rounded-lg">
                <Zap className="text-brand-primary" size={32} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-brand-dark mb-2">Velocidade Express</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Sites institucionais e landing pages prontos em 6 a 48 horas. Lojas virtuais em 7 a 15 dias. Somos especialistas em entregas rápidas sem comprometer qualidade.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-green-50 p-3 rounded-lg">
                <Target className="text-green-600" size={32} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-brand-dark mb-2">SEO de Verdade</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Otimização para Google, Bing, Yahoo e mais de 300 buscadores. Nossos clientes aparecem nas primeiras posições para buscas relevantes em suas regiões.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-yellow-50 p-3 rounded-lg">
                <Award className="text-yellow-600" size={32} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-brand-dark mb-2">Experiência Comprovada</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Mais de 10 anos no mercado, centenas de projetos entregues, clientes satisfeitos em diversos segmentos. Nossa experiência garante seu sucesso.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-purple-50 p-3 rounded-lg">
                <Shield className="text-purple-600" size={32} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-brand-dark mb-2">Segurança Total</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Todos os sites incluem certificado SSL, proteção contra ataques, backups automáticos e conformidade com LGPD. Seus dados e de seus clientes sempre protegidos.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-lg">
                <Heart className="text-red-600" size={32} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-brand-dark mb-2">Atendimento Humanizado</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Equipe local em Curitiba, atendimento personalizado via WhatsApp, e-mail e telefone. Falamos sua língua e entendemos seu negócio.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-orange-50 p-3 rounded-lg">
                <CheckCircle className="text-orange-600" size={32} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-brand-dark mb-2">Site é Seu</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Diferente de plataformas de aluguel, desenvolvemos e entregamos o site completo para você. Sem mensalidades abusivas, você é dono do seu projeto.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Texto 3 - Nossos Valores */}
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-brand-dark to-gray-800 text-white p-12 rounded-2xl shadow-2xl mb-16">
          <h2 className="text-3xl font-bold mb-6">Nossos Valores e Compromissos</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2 text-brand-accent">Transparência</h3>
              <p className="text-gray-300 leading-relaxed">Todos os nossos orçamentos são claros e detalhados. Sem letras miúdas, sem taxas escondidas. Você sabe exatamente o que está contratando e quanto vai pagar.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-brand-accent">Compromisso com Resultados</h3>
              <p className="text-gray-300 leading-relaxed">Não vendemos apenas sites, vendemos soluções que geram vendas, leads e crescimento real para seu negócio. Seu sucesso é nosso sucesso.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-brand-accent">Inovação Constante</h3>
              <p className="text-gray-300 leading-relaxed">Acompanhamos as últimas tendências e tecnologias do mercado digital. Seus projetos sempre com o que há de mais moderno em desenvolvimento web, SEO e marketing digital.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-brand-accent">Suporte Confiável</h3>
              <p className="text-gray-300 leading-relaxed">Não abandonamos você após a entrega. Estamos sempre disponíveis para suporte, dúvidas, ajustes e melhorias. Construímos parcerias de longo prazo.</p>
            </div>
          </div>
        </div>

        {/* Texto 4 - Como Trabalhamos */}
        <div className="max-w-5xl mx-auto bg-slate-50 p-12 rounded-2xl shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-brand-dark mb-6">Nosso Processo de Trabalho</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-brand-primary text-white font-bold w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">1</div>
              <div>
                <h3 className="font-bold text-lg text-brand-dark mb-2">Análise e Planejamento</h3>
                <p className="text-gray-700 leading-relaxed">Entendemos profundamente seu negócio, público-alvo, concorrência e objetivos. Definimos estratégias personalizadas para seu projeto.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-brand-primary text-white font-bold w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">2</div>
              <div>
                <h3 className="font-bold text-lg text-brand-dark mb-2">Design e Estrutura</h3>
                <p className="text-gray-700 leading-relaxed">Criamos layouts modernos, intuitivos e alinhados com sua identidade visual. Estruturamos a navegação pensando na experiência do usuário.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-brand-primary text-white font-bold w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">3</div>
              <div>
                <h3 className="font-bold text-lg text-brand-dark mb-2">Desenvolvimento e Otimização</h3>
                <p className="text-gray-700 leading-relaxed">Desenvolvemos com código limpo e otimizado. Implementamos SEO técnico desde o início. Garantimos velocidade e segurança máximas.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-brand-primary text-white font-bold w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">4</div>
              <div>
                <h3 className="font-bold text-lg text-brand-dark mb-2">Testes e Entrega</h3>
                <p className="text-gray-700 leading-relaxed">Testamos em todos os dispositivos e navegadores. Corrigimos qualquer detalhe. Entregamos o projeto 100% funcional com treinamento completo.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-brand-primary text-white font-bold w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">5</div>
              <div>
                <h3 className="font-bold text-lg text-brand-dark mb-2">Suporte Contínuo</h3>
                <p className="text-gray-700 leading-relaxed">Acompanhamos os resultados, oferecemos suporte técnico e estamos disponíveis para evoluções futuras. Sua parceria não termina na entrega.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ e CTA */}
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-brand-dark mb-8">Perguntas Frequentes sobre a Suprema Site</h2>
            <Accordion items={[
              ...faqItems,
              {
                question: "Quais segmentos de mercado vocês atendem?",
                answer: "Atendemos todos os segmentos: advogados, médicos, dentistas, clínicas, restaurantes, bares, academias, salões de beleza, construtoras, arquitetos, engenheiros, contadores, imobiliárias, lojas de roupas, e-commerce, indústrias, prestadores de serviços em geral, ONGs e muito mais. Nossa experiência multissetorial garante expertise para qualquer tipo de negócio."
              },
              {
                question: "Vocês fazem manutenção de sites já existentes?",
                answer: "Sim! Oferecemos serviços de manutenção, atualização, migração, otimização de SEO e melhorias em sites já existentes, independente de quem desenvolveu. Analisamos seu site atual e propomos as melhores soluções para modernização e performance."
              },
              {
                question: "Como posso agendar uma reunião presencial?",
                answer: "Nossa sede fica na Av. Sete de Setembro, 2775 - 9º andar, Rebouças, Curitiba/PR. Entre em contato pelo WhatsApp (41) 98700-1004 ou e-mail supremamidiabatel@gmail.com para agendar uma reunião presencial. Também atendemos 100% online para sua comodidade."
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