import React from 'react';
import { motion, useReducedMotion, useMotionValue, useSpring } from 'motion/react';
import { ArrowUpRight, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PortfolioProject } from '../data/portfolio';

export const Reveal: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const reduced = useReducedMotion();
  return <motion.div initial={false} whileInView={reduced ? {} : { y: [24, 0], opacity: [0.65, 1] }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
};

export const PortfolioStage = () => {
  const reduced = useReducedMotion();
  const x = useMotionValue(0); const y = useMotionValue(0);
  const rx = useSpring(y, { stiffness: 90, damping: 25 });
  const ry = useSpring(x, { stiffness: 90, damping: 25 });
  return <div className="portfolio-stage" onPointerMove={e=>{if(reduced || e.pointerType !== 'mouse') return; const r=e.currentTarget.getBoundingClientRect(); x.set(((e.clientX-r.left)/r.width-.5)*8); y.set(-((e.clientY-r.top)/r.height-.5)*8);}} onPointerLeave={()=>{x.set(0);y.set(0);}}>
    <div className="orbital-mark" aria-hidden="true"><span/><span/><span/></div>
    <div className="stage-label"><span>SUPREMA / SELECTED WORK</span><span>↗</span></div>
    <motion.div className="stage-composition" style={{rotateX:reduced?0:rx,rotateY:reduced?0:ry}}>
      <Link to="/portfolio" className="stage-main" aria-label="Explorar portfólio da Suprema, apresentação Gouveia Imóveis"><div className="browser-bar"><i/><i/><i/><span>GOUVEIA IMÓVEIS / PORTAL DIGITAL</span></div><img src="/cases/gouveia.png" alt="Apresentação do projeto Gouveia Imóveis" width="1536" height="1024" fetchPriority="high" /></Link>
      <Link to="/portfolio" className="stage-secondary" aria-label="Explorar portfólio da Suprema, apresentação Car Plus"><img src="/cases/car-plus.png" alt="Apresentação do projeto Car Plus" width="1536" height="1024"/><span>CAR PLUS <ArrowUpRight size={15}/></span></Link>
      <div className="stage-sticker" aria-hidden="true">FEITO PARA<br/><strong>MARCAR.</strong><ArrowUpRight size={30}/></div>
    </motion.div>
    <div className="stage-caption"><span>IDENTIDADE + EXPERIÊNCIA + TECNOLOGIA</span><span>01—16</span></div>
  </div>;
};

export const ProjectCard: React.FC<{project: PortfolioProject; index:number}> = ({project,index}) => <Reveal><article className={`project-card project-tone-${index%4}`} id={`projeto-${project.id}`}>
  <div className="project-image"><img src={project.image} alt={`Apresentação do projeto ${project.title}`} width={project.id === '5' ? 1312 : 1536} height={project.id === '5' ? 1199 : 1024} loading="lazy"/><span className="project-index">{String(index+1).padStart(2,'0')} / SUPREMA</span></div>
  <div className="project-heading"><div><p>{project.segment} · {project.city}</p><h3>{project.title}</h3></div><ArrowUpRight aria-hidden="true"/></div>
  <details className="project-details"><summary>Conheça o projeto <Plus size={18}/></summary><div><p>{project.goal}</p><h4>O que foi desenvolvido</h4><ul>{project.services.map(s=><li key={s}>{s}</li>)}</ul><div className="technology-list">{project.technologies.map(t=><span key={t}>{t}</span>)}</div><a className="text-link dark-link" href="https://wa.me/5541992721004">Vamos criar o seu? <ArrowUpRight size={18}/></a></div></details>
</article></Reveal>;
