import React from 'react';
import { SiteLocalitiesDrawing } from './SiteLocalitiesDrawing';
import { CoverageStory } from './CoverageStory';
import { ArrowUpRight } from 'lucide-react';
import { money, offer, regionalSubtotal } from '../data/regionalOffer';
export const RegionalOffer = ({ showPlanArtwork = false }: { showPlanArtwork?: boolean }) => <section className="regional-offer studio-shell" aria-labelledby="regional-heading">
  <div className="section-intro"><div><p className="eyebrow">PRESENÇA LOCAL / CURITIBA E REGIÃO</p><h2 id="regional-heading">Seu negócio.<br/><em>Na região que atende.</em></h2></div><p>Um site para apresentar sua empresa. Um plano regional para trabalhar sua presença e visibilidade nas localidades contratadas.</p></div>
  <div className="offer-cards"><article><span className="eyebrow">01 / CRIAÇÃO DO SITE</span><h3>{money(offer.sitePrice)}</h3><strong>Pagamento único</strong><p>Criação do seu site com {offer.hostingMonths} meses de hospedagem incluídos.</p></article><article className="regional-card"><span className="eyebrow">02 / PLANO REGIONAL</span><h3>{money(offer.minimumNeighborhoods * offer.localityMonthlyPrice)}<small> / mês</small></h3><strong>Mínimo de 11 bairros para iniciar</strong><p>De 11 a 29 bairros: R$ 20 por bairro/mês. Mínimo R$ 220/mês. A partir de 30 bairros, todos ficam por R$ 10 cada/mês. Exemplo: 30 bairros = R$ 300/mês.</p></article></div>
  {showPlanArtwork && <div className="regional-plan-guide">
    <div>
      <p className="eyebrow">ENTENDA NA PRÁTICA</p>
      <h3>Um pagamento pelo site. Uma mensalidade pela presença nos bairros.</h3>
      <ul className="regional-plan-examples">
        {[11, 20, 30].map(count => <li key={count}><span>{count} bairros</span><strong>{money(regionalSubtotal(count)!)}/mês</strong></li>)}
      </ul>
      <p>Com 30 bairros ou mais, o valor de R$ 10 por mês vale para <strong>todos</strong> os bairros escolhidos, não só para os adicionais. A criação do site é cobrada à parte.</p>
      <p>O cálculo vale para os bairros oficiais de Curitiba. Outras cidades e regiões ficam sob consulta.</p>
    </div>
    <figure>
      <img src="/images/plano-regional-curitiba.webp" alt="Ilustração da Suprema: uma empreendedora usa um notebook ao lado de um mapa de Curitiba com bairros marcados." width="1122" height="1402" loading="lazy" decoding="async" />
    </figure>
  </div>}
  <p className="offer-benefit">Com o plano regional mensal ativo, a Suprema paga a renovação anual do domínio e mantém a hospedagem incluída após os 60 meses, sem cobrança adicional de hospedagem.</p>
  <a className="studio-button orange" href="/presenca-local#calculator-heading">Escolher bairros e simular <ArrowUpRight size={19}/></a>
<p className="offer-reach">Do bairro à cidade, ao estado e ao Brasil: podemos trabalhar a presença digital conforme sua área de atendimento. Projetos estaduais e nacionais têm escopo e orçamento sob consulta.</p>
<SiteLocalitiesDrawing /><CoverageStory />
</section>;
