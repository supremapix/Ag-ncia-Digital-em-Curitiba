import React from 'react';
import { useLocation } from 'react-router-dom';
import '../src/locality-accessibility.css';
export const GlobalPromotion = () => {
 const {pathname}=useLocation();
 const message='Olá, Suprema Sites Express! Quero conversar sobre meu site. Página de referência: https://www.supremasite.com.br'+pathname;
 return <section className="global-promotion" aria-labelledby="global-promotion-heading" data-global-promotion>
  <div className="promotion-inner"><img src="/banner/suprema-sites-express.svg" alt="Suprema Sites Express. WhatsApp (41) 99272-1004. Chave Pix: supremapix@gmail.com." width="900" height="620" loading="lazy"/>
  <div className="promotion-copy"><p className="promotion-eyebrow">SUPREMA SITES EXPRESS</p><h2 id="global-promotion-heading">Seu próximo site começa com uma conversa.</h2><p>Apresente sua empresa com um site pensado para seus clientes, seus serviços e sua área de atendimento.</p><p><strong>Criação por R$ 1.680 em pagamento único</strong>, com 60 meses de hospedagem. Plano regional separado: mínimo de 11 bairros, por R$ 220/mês. <a href="/presenca-local">Confira escopo e condições.</a></p><p className="promotion-payment">Pagamento via Pix<br/><strong>Chave Pix: supremapix@gmail.com</strong></p><a className="promotion-cta" href={'https://wa.me/5541992721004?text='+encodeURIComponent(message)}>Conversar no WhatsApp <span>(41) 99272-1004</span></a><p className="promotion-note">Confirme a proposta e os dados de pagamento com a equipe antes de transferir.</p></div></div>
 </section>;
};
