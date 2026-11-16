import React, { useEffect, useState } from 'react';
import '../src/channel-journey.css';
const steps = [
 {name:'Instagram',heading:'Desperte o interesse',text:'Mostre trabalhos autorizados, novidades e bastidores. Leve quem quer saber mais para uma página útil do seu site.'},
 {name:'Site próprio',heading:'Organize a decisão',text:'Explique serviços, área de atendimento e condições. Facilite o orçamento e mantenha o controle dos acessos ao seu domínio.'},
 {name:'Perfil no Google',heading:'Conecte a pesquisa ao negócio',text:'Mantenha dados corretos e um link pertinente. O perfil, quando elegível, complementa o site e as redes; não há garantia de posição.'}
];
export const ChannelJourney = () => {
 const [active,setActive]=useState(0),[playing,setPlaying]=useState(false),[reduced,setReduced]=useState(false);
 useEffect(()=>{const mq=window.matchMedia('(prefers-reduced-motion: reduce)');const update=()=>{setReduced(mq.matches);if(mq.matches)setPlaying(false);};update();mq.addEventListener('change',update);return()=>mq.removeEventListener('change',update)},[]);
 useEffect(()=>{if(!playing||reduced)return;const timer=window.setInterval(()=>setActive(i=>(i+1)%steps.length),5000);return()=>window.clearInterval(timer)},[playing,reduced]);
 return <section className="studio-shell channel-journey" aria-labelledby="journey-title">
  <figure className="journey-illustration"><img src="/images/meu-site-instagram-suprema.webp" width="1536" height="1024" alt="Ilustração da Suprema mostrando como Instagram, site e Google se complementam na presença digital de uma empresa. Telefone (41) 99272-1004."/><figcaption>Instagram para relacionamento, site para informação e contato, Google para descoberta.</figcaption></figure>
  <h2 id="journey-title">Veja como os canais se complementam</h2>
  <p>Selecione cada etapa. A demonstração é ilustrativa e não representa uma ordem obrigatória de compra.</p>
  <div className="journey-controls" role="group" aria-label="Escolher canal">{steps.map((step,i)=><button key={step.name} type="button" aria-pressed={active===i} aria-controls="journey-detail" onClick={()=>{setActive(i);setPlaying(false)}}>{i+1}. {step.name}</button>)}</div>
  <div id="journey-detail" className="journey-detail" aria-live={playing?'off':'polite'} aria-atomic="true"><div key={active} className="journey-enter"><h3>{steps[active].heading}</h3><p>{steps[active].text}</p></div></div>
  {!reduced&&<button type="button" className="journey-play" aria-pressed={playing} onClick={()=>setPlaying(v=>!v)}>{playing?'Pausar demonstração':'Animar demonstração'}</button>}
  <p className="journey-caption">{reduced?'Movimento reduzido respeitado: use os botões para ler cada etapa.':'A animação só começa quando você pede. Troca de etapa a cada 5 segundos e pode ser pausada.'}</p>
  <details><summary>Ler todas as etapas sem animação</summary>{steps.map(step=><div key={step.name}><h3>{step.name}: {step.heading}</h3><p>{step.text}</p></div>)}</details>
  <p><a href="tel:+5541992721004">Fale com a Suprema: (41) 99272-1004</a></p>
 </section>;
};
