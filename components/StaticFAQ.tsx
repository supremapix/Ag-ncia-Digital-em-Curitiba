import React, { useState } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';

const faqs = [
  {
    category: "Preço e Prazo",
    questions: [
      { q: "Quanto custa criar um site profissional?", a: "O custo para criar um site profissional na Suprema Site Express varia conforme a complexidade do projeto, mas oferecemos soluções competitivas que garantem alto retorno sobre o investimento. Nossos orçamentos são personalizados para atender desde landing pages de alta conversão até portais corporativos complexos. Ao investir conosco, você garante um site veloz, otimizado para SEO e focado em transformar visitantes em clientes reais para o seu negócio." },
      { q: "Em quanto tempo fica pronto meu site?", a: "O prazo de entrega para um site institucional na Suprema Site Express é de apenas 48 horas após o recebimento das informações básicas. Desenvolvemos um fluxo de trabalho ágil e tecnológico que nos permite entregar projetos profissionais em tempo recorde, sem comprometer a qualidade técnica ou o design. É a solução ideal para empresas que precisam de presença digital imediata, profissional e de alta performance." },
      { q: "Tem mensalidade depois que o site fica pronto?", a: "Não cobramos mensalidades obrigatórias pela criação do site, apenas os custos padrão de hospedagem e manutenção técnica para manter seu projeto online e seguro. Na Suprema Site Express, o site é de sua propriedade. Oferecemos planos de suporte opcionais para atualizações constantes e otimização de SEO, garantindo que sua empresa continue competitiva no Google sem taxas abusivas ou contratos de fidelidade desnecessários." },
      { q: "Qual o prazo de entrega de uma loja virtual?", a: "O prazo médio para a entrega de uma loja virtual completa é de 7 a 15 dias úteis, dependendo da quantidade de produtos e integrações necessárias. Diferente de um site institucional, o e-commerce exige configurações rigorosas de meios de pagamento, cálculo de frete e segurança de dados. Na Suprema Site Express, priorizamos a agilidade para que você comece a vender online o mais rápido possível." },
      { q: "Vocês fazem site parcelado?", a: "Sim, oferecemos opções de pagamento facilitadas e parcelamento para a criação do seu site profissional. Entendemos que o investimento em presença digital é fundamental para o crescimento de pequenas e médias empresas, por isso buscamos flexibilizar as condições comerciais. Aceitamos cartões de crédito e outras formas de pagamento, permitindo que você profissionalize sua empresa com um fluxo de caixa saudável e planejado." }
    ]
  },
  {
    category: "Processo",
    questions: [
      { q: "Como funciona o processo de criação de site?", a: "O processo de criação na Suprema Site Express é dividido em quatro etapas rápidas: Briefing, Design, Desenvolvimento e Lançamento. Primeiro, entendemos suas necessidades e objetivos. Em seguida, criamos o layout focado em conversão. Após sua aprovação, nossa equipe técnica implementa o código em React para máxima velocidade. Por fim, realizamos os testes de SEO e colocamos seu novo site profissional no ar em 48 horas." },
      { q: "Preciso ter texto e fotos prontos para começar?", a: "Não é obrigatório ter todo o conteúdo pronto para iniciar o projeto, pois nossa equipe pode auxiliar na curadoria e estruturação das informações. Caso você não possua fotos profissionais, utilizamos bancos de imagens de alta qualidade que se adaptam ao seu nicho de mercado. Além disso, estruturamos os textos focando em técnicas de copywriting para garantir que seu site seja persuasivo e atraia novos clientes." },
      { q: "Posso acompanhar o andamento do meu site?", a: "Sim, você pode acompanhar todas as etapas do desenvolvimento do seu site através de nossos canais de atendimento direto, como o WhatsApp. Prezamos pela transparência total e mantemos você informado sobre o progresso do design e da implementação técnica. Nossa metodologia ágil permite que você visualize prévias do projeto, garantindo que o resultado final esteja perfeitamente alinhado com as expectativas e identidade da sua marca." },
      { q: "O que acontece se eu não gostar do resultado?", a: "Garantimos a satisfação dos nossos clientes através de uma etapa de revisão dedicada antes do lançamento oficial. Se algo não estiver do seu agrado, realizamos os ajustes necessários no design ou na estrutura para que o site reflita exatamente o que você imaginou. Na Suprema Site Express, nosso objetivo é entregar uma ferramenta de vendas que você tenha orgulho de compartilhar com seus clientes e parceiros." },
      { q: "Vocês criam o conteúdo do site também?", a: "Sim, oferecemos suporte na criação de conteúdo estratégico focado em SEO e conversão para o seu site. Nossa equipe utiliza técnicas avançadas de redação publicitária para destacar seus diferenciais competitivos e convencer o visitante a entrar em contato. Criamos textos claros, diretos e otimizados para os motores de busca, garantindo que sua empresa transmita autoridade e profissionalismo desde o primeiro parágrafo lido pelo usuário." }
    ]
  },
  {
    category: "Técnico/SEO",
    questions: [
      { q: "O site vai aparecer no Google?", a: "Sim, todos os sites desenvolvidos pela Suprema Site Express são entregues com otimização de SEO base para indexação imediata no Google. Implementamos dados estruturados, mapas do site e configurações de velocidade que facilitam a leitura pelos robôs de busca. Além disso, focamos em SEO Local para que sua empresa apareça com destaque para clientes que buscam pelos seus serviços na sua região e no Google Maps." },
      { q: "O site funciona no celular?", a: "Sim, criamos sites 100% responsivos que se adaptam perfeitamente a qualquer tamanho de tela, incluindo smartphones, tablets e desktops. Utilizamos a filosofia Mobile-First, garantindo que a experiência do usuário no celular seja rápida e intuitiva. Como a maioria das buscas no Brasil é feita via dispositivos móveis, ter um site responsivo é essencial para não perder vendas e manter um bom ranqueamento nos motores de busca." },
      { q: "Qual tecnologia vocês usam para criar sites?", a: "Utilizamos as tecnologias mais modernas do mercado, como React, Vite e Tailwind CSS, para garantir sites ultra-rápidos e seguros. Diferente de plataformas comuns, nosso código é limpo e otimizado para performance, o que resulta em melhores notas no Google Core Web Vitals. Essa stack tecnológica permite que seu site seja uma Single Page Application (SPA) fluida, proporcionando uma experiência de navegação superior e profissional." },
      { q: "O site tem certificado de segurança (HTTPS)?", a: "Sim, todos os nossos projetos incluem a instalação e configuração do certificado de segurança SSL (HTTPS). O cadeado verde na barra de endereços é fundamental para proteger os dados dos seus visitantes e transmitir confiança. Além disso, o Google prioriza sites seguros em seus resultados de busca. Na Suprema Site Express, a segurança da sua presença digital e a privacidade dos seus clientes são prioridades inegociáveis." },
      { q: "Posso editar o site depois que estiver pronto?", a: "Sim, entregamos seu site com uma estrutura que permite edições simples de textos e imagens de forma autônoma. Caso prefira, também oferecemos planos de manutenção onde nossa equipe cuida de todas as atualizações para você. Nosso objetivo é que você tenha total liberdade sobre sua ferramenta de trabalho, garantindo que o site possa evoluir junto com o crescimento e as novas necessidades da sua empresa." }
    ]
  },
  {
    category: "Cobertura Geográfica",
    questions: [
      { q: "Vocês atendem fora de Curitiba?", a: "Sim, a Suprema Site Express atende empresas em todo o território nacional, apesar de nossa sede ser em Curitiba. Graças à nossa metodologia de atendimento digital, conseguimos desenvolver projetos de alta qualidade para clientes em qualquer estado do Brasil. Utilizamos reuniões online e ferramentas de colaboração que garantem a mesma eficiência e proximidade de um atendimento presencial, eliminando barreiras geográficas para profissionalizar seu negócio." },
      { q: "Fazem sites para cidades pequenas?", a: "Sim, atendemos empresas de todos os portes em cidades de qualquer tamanho. O SEO Local é, inclusive, uma das estratégias mais poderosas para pequenas cidades, pois permite que você domine as buscas regionais e se torne a principal referência na sua localidade. Na Suprema Site Express, adaptamos a estratégia de visibilidade do seu site para o tamanho do seu mercado, garantindo que seus clientes locais te encontrem facilmente." },
      { q: "Tem alguma reunião presencial ou é tudo online?", a: "Realizamos a maior parte do nosso atendimento de forma online para garantir a agilidade da entrega em 48 horas, mas estamos disponíveis para reuniões presenciais em nossa sede em Curitiba sob agendamento. O modelo digital nos permite reduzir custos e acelerar processos, beneficiando o cliente com prazos menores e preços mais competitivos. Utilizamos WhatsApp, chamadas de vídeo e e-mail para manter uma comunicação fluida e eficiente durante todo o projeto." },
      { q: "Atendem todo o Brasil?", a: "Sim, atendemos todos os 27 estados do Brasil. Já desenvolvemos projetos para empresas de norte a sul, adaptando a linguagem e a estratégia de SEO para as particularidades de cada região. Independentemente de onde sua empresa esteja localizada, a Suprema Site Express possui a expertise necessária para criar um site profissional que conecte sua marca ao seu público-alvo nacional ou regional com máxima eficácia técnica." },
      { q: "Qual o WhatsApp para falar com um especialista?", a: "Você pode falar diretamente com um especialista da Suprema Site Express através do WhatsApp pelo número +55 (41) 98700-1004. Estamos prontos para tirar todas as suas dúvidas, enviar orçamentos personalizados e iniciar o projeto do seu novo site profissional imediatamente. Nosso atendimento é humanizado, ágil e focado em encontrar a melhor solução digital para o crescimento real da sua empresa no mercado brasileiro." }
    ]
  }
];

export const StaticFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-4 tracking-tighter">
            Dúvidas Frequentes
          </h2>
          <p className="text-gray-500 text-lg">
            Tudo o que você precisa saber para profissionalizar sua empresa na internet.
          </p>
        </div>

        <div className="space-y-12">
          {faqs.map((cat, catIdx) => (
            <div key={catIdx}>
              <h3 className="text-xl font-black text-brand-primary mb-6 uppercase tracking-widest border-l-4 border-brand-primary pl-4">
                {cat.category}
              </h3>
              <div className="space-y-4">
                {cat.questions.map((faq, qIdx) => {
                  const id = `${catIdx}-${qIdx}`;
                  const isOpen = openIndex === id;
                  return (
                    <div 
                      key={id} 
                      className={`border rounded-2xl transition-all duration-300 ${isOpen ? 'border-brand-primary bg-gray-50 shadow-lg' : 'border-gray-100 bg-white hover:border-gray-300'}`}
                    >
                      <button 
                        onClick={() => toggle(id)}
                        className="w-full px-6 py-5 flex justify-between items-center text-left"
                      >
                        <span className={`font-bold text-lg ${isOpen ? 'text-brand-primary' : 'text-brand-dark'}`}>
                          {faq.q}
                        </span>
                        {isOpen ? <Minus className="text-brand-primary" /> : <Plus className="text-gray-400" />}
                      </button>
                      <div 
                        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                      >
                        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                          {faq.a}
                          <div className="mt-4 pt-4 border-t border-gray-200 flex items-center gap-2 text-brand-primary font-bold text-sm">
                            <MessageCircle size={16} />
                            <a href="https://wa.me/5541987001004" className="hover:underline">
                              Ainda com dúvida? Fale no WhatsApp
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
