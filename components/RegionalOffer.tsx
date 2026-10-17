import React from 'react';
import { SiteLocalitiesDrawing } from './SiteLocalitiesDrawing';
import { CoverageStory } from './CoverageStory';
import { ArrowUpRight } from 'lucide-react';
import { money, offer } from '../data/regionalOffer';
export const RegionalOffer = () => <section className="regional-offer studio-shell" aria-labelledby="regional-heading">
  <div className="section-intro"><div><p className="eyebrow">PRESENÇA LOCAL / CURITIBA E REGIÃO</p><h2 id="regional-heading">Seu negócio.<br/><em>Na região que atende.</em></h2></div><p>Um site para apresentar sua empresa. Um plano regional para trabalhar sua presença e visibilidade nas localidades contratadas.</p></div>
  <div className="offer-cards"><article><span className="eyebrow">01 / CRIAÇÃO DO SITE</span><h3>{money(offer.sitePrice)}</h3><strong>Pagamento único</strong><p>Criação do seu site com {offer.hostingMonths} meses de hospedagem incluídos.</p></article><article className="regional-card"><span className="eyebrow">02 / PLANO REGIONAL</span><h3>{money(offer.minimumNeighborhoods * offer.localityMonthlyPrice)}<small> / mês</small></h3><strong>Mínimo de 11 bairros para iniciar</strong><p>De 11 a 29 bairros: R$ 20 por bairro/mês. Mínimo R$ 220/mês. A partir de 30 bairros, todos ficam por R$ 10 cada/mês. Exemplo: 30 bairros = R$ 300/mês.</p></article></div>
  <p className="offer-benefit">Com o plano regional mensal ativo, a Suprema paga a renovação anual do domínio e mantém a hospedagem incluída após os 60 meses, sem cobrança adicional de hospedagem.</p>
  <a className="studio-button orange" href="/presenca-local#calculator-heading">Escolher bairros e simular <ArrowUpRight size={19}/></a>
<p className="offer-reach">Do bairro à cidade, ao estado e ao Brasil: podemos trabalhar a presença digital conforme sua área de atendimento. Projetos estaduais e nacionais têm escopo e orçamento sob consulta.</p>
<SiteLocalitiesDrawing /><CoverageStory />
</section>;
