import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
const stages = [
  ['Bairro', 'Perto de quem precisa.', 'Escolha as localidades em que sua empresa realmente atende.'],
  ['Cidade', 'Conecte sua presença.', 'Uma estratégia que considera sua área de atendimento municipal.'],
  ['Estado', 'Amplie o horizonte.', 'Projetos estaduais com escopo e orçamento definidos em conversa.'],
  ['Brasil', 'Pense além das fronteiras.', 'Presença nacional com uma estratégia adequada ao seu negócio.']
];
export const CoverageStory = () => {
  const [stage, setStage] = useState(0);
  const reduce = useReducedMotion();
  return <div className="coverage-story"><div><p className="eyebrow">DO SEU BAIRRO AO BRASIL</p><h3>Seu alcance começa<br/>com uma escolha.</h3><div className="coverage-controls" role="group" aria-label="Explore as áreas de atuação">{stages.map(([title], index) => <button type="button" key={title} aria-pressed={stage === index} onClick={() => setStage(index)}>{title}</button>)}</div><div className="coverage-description" aria-live="polite"><strong>{stages[stage][1]}</strong><p>{stages[stage][2]}</p></div><small>Ilustração de alcance. Não representa resultado, ranking ou cobertura contratada.</small></div><div className="coverage-orbit" aria-hidden="true">{[0,1,2,3].map(index => <motion.div key={index} className="coverage-ring" style={{width: `${28 + index * 22}%`, height: `${28 + index * 22}%`}} animate={{ opacity: index <= stage ? 1 : .16, scale: index <= stage ? 1 : .88 }} transition={{duration: reduce ? 0 : .45}}/>)}<motion.div className="coverage-center" animate={{scale: reduce ? 1 : 1 + stage * .07}} transition={{duration:reduce ? 0 : .35}}>S<span>{stages[stage][0]}</span></motion.div><span className="orbit-node node-a"/><span className="orbit-node node-b"/><span className="orbit-node node-c"/></div></div>;
};
