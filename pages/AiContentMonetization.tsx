import React from 'react';
import { Link } from 'react-router-dom';
import { usePageMetadata } from '../components/usePageMetadata';
import '../src/hubs.css';

const path = '/monetizacao-de-conteudo-com-ia';
const title = 'Monetização de conteúdo com bots e IA | Suprema Sites';
const description = 'Descubra quais bots acessam seu site, o que vale licenciar e como preservar a busca orgânica. Diagnóstico técnico em Curitiba e atendimento remoto.';
const contact = 'https://wa.me/5541992721004?text='+encodeURIComponent('Olá! Quero avaliar a monetização do conteúdo do meu site com bots de IA. Meu endereço é: ');
const sections = [
  ['01 / Medir antes de decidir','Se o site já está no ar, revisamos os registros disponíveis no servidor ou na CDN. O diagnóstico separa rastreadores identificáveis, visitas humanas vindas de assistentes e tráfego suspeito. Também mostra quais páginas os bots pedem e se encontram erros. Volumes de requisições não são uma projeção de receita.'],
  ['02 / Definir o que deve ficar aberto','Páginas de serviços, endereço e contato normalmente têm mais valor quando continuam fáceis de encontrar. Em vez de bloquear tudo, mapeamos as regras por finalidade: pesquisa, treinamento e acesso autorizado. Testamos as páginas públicas e evitamos mudanças que prejudiquem a busca orgânica.'],
  ['03 / Separar conteúdo que pode ser licenciado','Bases próprias, pesquisas, guias especializados e catálogos originais podem justificar uma avaliação comercial. O primeiro filtro é ter direito de licenciar o material, inclusive fotos e dados de terceiros. O segundo é existir interesse real de um comprador.'],
  ['04 / Escolher o modelo adequado','O licenciamento pode ser negociado diretamente, definindo finalidade, prazo, conteúdo e valor. A cobrança por acesso (pay per crawl) é outra possibilidade quando a plataforma e os participantes são elegíveis. A disponibilidade e as condições variam. Sem acordo ou acesso pago aceito, a visita não gera receita.'],
];
export const AiContentCallout = () => <aside aria-labelledby="ai-content-callout" className="studio-shell py-10 md:py-14">
  <div className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-950 md:p-8">
    <p className="eyebrow">SUPREMA SITES / NOVO SERVIÇO</p>
    <h2 id="ai-content-callout" className="mt-2 text-2xl font-bold">Bots de IA visitam seu site. O que isso vale?</h2>
    <p className="mt-2 max-w-2xl text-slate-700">Descubra quais rastreadores acessam seu conteúdo e se há espaço para licenciamento, sem confundir visitas com receita nem comprometer a busca local.</p>
    <Link className="mt-4 inline-block font-bold underline underline-offset-4" to={path}>Conheça o diagnóstico de monetização com IA →</Link>
  </div>
</aside>;

export const AiContentMonetization = () => {
  usePageMetadata(title, description, path, 'Service');
  return <div className="search-hub">
    <section className="studio-shell hub-hero">
      <p className="eyebrow">SUPREMA SITES / CONTEÚDO E IA</p>
      <h1>Monetização de conteúdo com bots e IA</h1>
      <p>Seu site pode receber rastreadores de inteligência artificial sem gerar um centavo. A Suprema Sites identifica esses acessos, ajuda a proteger o que é seu e avalia se existe uma oportunidade real de licenciamento.</p>
      <div className="hub-nav !px-0">
        <a href={contact}>Pedir diagnóstico pelo WhatsApp</a>
        <a href="#como-funciona">Entender como funciona</a>
      </div>
    </section>
    <div className="studio-shell hub-sections">
      <section id="como-funciona"><h2>O que você recebe no diagnóstico</h2>
        <p>Um mapa dos acessos identificados, das páginas mais consultadas, dos riscos para SEO e das oportunidades que valem investigar. Se o site for novo, começamos preparando a medição e organizando o conteúdo próprio.</p>
      </section>
      {sections.map(([heading, copy]) => <section key={heading}><h2>{heading}</h2><p>{copy}</p></section>)}
      <section><h2>Quando vale a pena começar?</h2>
        <p>Portais, blogs especializados e empresas com documentação própria tendem a ter material para analisar. Já num site institucional cujo objetivo é vender serviços em Curitiba, pode fazer mais sentido medir os contatos vindos das IAs e manter o conteúdo público do que cobrar pelo acesso.</p>
        <ul><li><Link to="/criacao-de-sites">Veja como estruturamos seu site</Link></li><li><Link to="/seo-local-curitiba">Conheça a estratégia de SEO local</Link></li></ul>
      </section>
      <section><h2>Dúvidas frequentes</h2>
        <details className="py-3"><summary className="cursor-pointer font-bold">O Google ou o ChatGPT me paga por cada visita?</summary><p>Não. Rastreamento normal não gera pagamento. A receita depende de licenciamento contratado ou de uma requisição expressamente aceita num programa de cobrança.</p></details>
        <details className="py-3"><summary className="cursor-pointer font-bold">Busca e treinamento são a mesma coisa?</summary><p>Não. No caso da OpenAI, por exemplo, OAI-SearchBot atende à pesquisa e GPTBot está ligado ao treinamento. Os controles são separados. Permitir um rastreador não garante citação nem posição nos resultados.</p></details>
        <details className="py-3"><summary className="cursor-pointer font-bold">A Suprema garante faturamento?</summary><p>Não. O serviço é de diagnóstico e preparação técnica. Adesão a plataformas, demanda e valores dependem do conteúdo, dos direitos de uso e dos compradores. Escopo e orçamento são definidos após avaliação.</p></details>
      </section>
      <section><h2>Fontes para conferir</h2><ul><li><a href="https://developers.openai.com/api/docs/bots">OpenAI: rastreadores e configurações de acesso</a></li><li><a href="https://developers.cloudflare.com/ai-crawl-control/features/pay-per-crawl/what-is-pay-per-crawl/">Cloudflare: Pay Per Crawl e disponibilidade</a></li></ul></section>
      <section><h2>Mostre o endereço do seu site</h2>
        <p>Atendimento em Curitiba e remoto. Envie apenas a URL e diga se seu foco é visibilidade, proteção do conteúdo ou licenciamento. Não envie senhas.</p>
        <ul><li><a href={contact}>WhatsApp: (41) 99272-1004</a></li><li><Link to="/contato">Outros canais de contato</Link></li></ul>
      </section>
    </div>
  </div>;
};
