import React, { useState, useMemo, useEffect } from 'react';
import { Search, ArrowUpRight, Asterisk } from 'lucide-react';
import { portfolioProjects } from '../data/portfolio';
import { ProjectCard } from '../components/Showcase';

export const Portfolio: React.FC = () => {
  const [category, setCategory] = useState('todos');
  const [query, setQuery] = useState('');
  useEffect(() => {
    document.title = 'Portfólio de Sites, Sistemas, Aplicativos e IA | Suprema Sites Express';
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Conheça o portfólio da Suprema Sites Express: Projetos reais de Sites Profissionais, Lojas Virtuais, Sistemas Web (ERP/CRM), Aplicativos Android/iOS e Agentes de IA no Sul do Brasil.');
  }, []);
  const normalize=(s:string)=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const projects = useMemo(()=>portfolioProjects.filter(p=>(category==='todos'||p.category===category)&&normalize([p.title,p.segment,p.city,...p.technologies].join(' ')).includes(normalize(query.trim()))),[category,query]);
  return <div className="portfolio-page"><section className="portfolio-intro"><div className="studio-shell"><p className="eyebrow">SUPREMA / PORTFÓLIO DIGITAL</p><h1>Ideias que<br/>ganham <em>presença.</em><Asterisk aria-hidden="true"/></h1><div className="portfolio-intro-bottom"><p>Não existe uma única forma de fazer diferente.<br/>Explore projetos de sites, lojas, sistemas, aplicativos e IA.</p><span>{String(portfolioProjects.length).padStart(2,'0')} PROJETOS / DIFERENTES POSSIBILIDADES</span></div></div></section>
  <section className="studio-shell portfolio-gallery" aria-labelledby="gallery-title"><h2 id="gallery-title" className="sr-only">Galeria de projetos</h2><div className="portfolio-controls"><div className="filter-list" role="group" aria-label="Filtrar por tipo de projeto">{[['todos','Todos'],['site','Sites'],['ecommerce','E-commerce'],['sistema','Sistemas'],['app','Aplicativos'],['ia','IA']].map(([id,label])=><button key={id} aria-pressed={category===id} onClick={()=>setCategory(id)}>{label}<span>{id==='todos'?portfolioProjects.length:portfolioProjects.filter(p=>p.category===id).length}</span></button>)}</div><label className="portfolio-search"><Search size={18}/><span className="sr-only">Buscar projetos</span><input type="search" placeholder="Nome, segmento ou cidade" value={query} onChange={e=>setQuery(e.target.value)}/></label></div><p className="result-count" role="status">{projects.length} {projects.length===1?'projeto encontrado':'projetos encontrados'}</p><div className="project-grid">{projects.map((p,i)=><ProjectCard key={p.id} project={p} index={i}/>)}</div>{!projects.length&&<div className="empty-projects"><h2>Nenhum projeto por aqui.</h2><p>Tente outro termo ou explore todas as categorias.</p><button className="studio-button" onClick={()=>{setQuery('');setCategory('todos');}}>Limpar filtros</button></div>}</section>
  <section className="portfolio-outro studio-shell"><p className="eyebrow">O PRÓXIMO PODE SER O SEU.</p><h2>Vamos criar algo<br/><em>impossível de ignorar?</em></h2><a className="studio-button orange" href="https://wa.me/5541992721004">Converse com a Suprema <ArrowUpRight size={20}/></a></section></div>;
};
