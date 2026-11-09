import React, {useEffect,useRef} from 'react';
import {Link,useLocation} from 'react-router-dom';
import {ArrowUpRight,ArrowRight,Check,Plus} from 'lucide-react';
import pages from '../data/curitibaServices.json';
import {LeadForm} from '../components/LeadForm';
import {CommercialTerms} from '../components/CommercialTerms';
import {curitibaServiceSchema,siteOrigin} from '../components/curitibaServiceSchema';
import '../src/curitiba-services.css';

export function CuritibaServiceLinks(){return <nav className="curitiba-service-links" aria-label="Soluções para empresas de Curitiba">{pages.map(p=><Link key={p.path} to={p.path}>{p.label}<ArrowUpRight size={16} aria-hidden="true"/></Link>)}</nav>}
export const CuritibaService = () => {
 const {pathname}=useLocation();
 const page=pages.find(p=>p.path===pathname)!;
 const root=useRef<HTMLDivElement>(null);
 const message='Olá, Suprema! Quero uma proposta sobre '+page.label+'. Página: '+siteOrigin+page.path;
 useEffect(()=>{
  const url=siteOrigin+page.path;document.title=page.title;
  const values:Record<string,string>={description:page.description,'og:title':page.title,'og:description':page.description,'og:url':url,'og:image':siteOrigin+'/images/curitiba/'+page.image+'.webp','twitter:title':page.title,'twitter:description':page.description,'twitter:url':url,'twitter:image':siteOrigin+'/images/curitiba/'+page.image+'.webp'};
  for(const [name,value] of Object.entries(values)){let el=document.querySelector(`meta[name="${name}"],meta[property="${name}"]`);if(!el){el=document.createElement('meta');el.setAttribute(name.startsWith('og:')?'property':'name',name);document.head.appendChild(el)}el.setAttribute('content',value)}
  document.querySelector('link[rel="canonical"]')?.setAttribute('href',url);
  const old=[...document.head.querySelectorAll('script[type="application/ld+json"]')];old.forEach(n=>n.remove());
  const script=document.createElement('script');script.type='application/ld+json';script.dataset.curitibaSchema='true';script.textContent=JSON.stringify(curitibaServiceSchema(page));document.head.appendChild(script);
  return ()=>{script.remove();old.forEach(n=>document.head.appendChild(n))};
 },[page]);
 useEffect(()=>{
  if(!root.current||!('IntersectionObserver' in window))return;
  const media=window.matchMedia('(prefers-reduced-motion: reduce)');
  const running=new Set<Animation>();
  const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(!entry.isIntersecting)continue;observer.unobserve(entry.target);if(media.matches||!('animate' in entry.target))continue;const a=entry.target.animate([{opacity:.55,transform:'translateY(16px)'},{opacity:1,transform:'translateY(0)'}],{duration:450,easing:'cubic-bezier(.22,1,.36,1)'});running.add(a);a.onfinish=()=>running.delete(a)}},{threshold:.12});
  root.current.querySelectorAll('[data-reveal]').forEach(el=>observer.observe(el));
  const reduce=()=>{if(media.matches)running.forEach(a=>a.cancel())};media.addEventListener('change',reduce);
  return ()=>{observer.disconnect();running.forEach(a=>a.cancel());media.removeEventListener('change',reduce)};
 },[page]);
 return <div ref={root} className="curitiba-service" data-service={page.id}>
  <div className="cs-shell cs-breadcrumb"><Link to="/">Início</Link><span aria-hidden="true">/</span><Link to="/servicos">Serviços</Link><span aria-hidden="true">/</span><span>{page.label}</span></div>
  <header className="cs-shell cs-hero">
   <div className="cs-hero-copy" data-reveal><p className="cs-eyebrow">SUPREMA / CURITIBA / {String(pages.indexOf(page)+1).padStart(2,'0')}</p><h1>{page.heading}</h1><p className="cs-intro">{page.intro}</p><div className="cs-actions"><a className="cs-button" href={'https://wa.me/5541992721004?text='+encodeURIComponent(message)} target="_blank" rel="noopener noreferrer">Conversar sobre meu projeto<ArrowUpRight aria-hidden="true" size={19}/></a><a className="cs-text-link" href="#escopo">Entender o escopo<ArrowRight aria-hidden="true" size={17}/></a></div></div>
   <figure className="cs-visual" data-reveal><img src={'/images/curitiba/'+page.image+'.webp'} srcSet={'/images/curitiba/'+page.image+'-768.webp 768w, /images/curitiba/'+page.image+'.webp 1536w'} sizes="(max-width: 900px) 100vw, 50vw" width="1536" height="1024" alt={page.alt} fetchPriority="high"/><figcaption>Ilustração conceitual criada com IA. Não representa um projeto de cliente.</figcaption></figure>
  </header>
  <nav className="cs-shell cs-jump" aria-label="Nesta página"><a href="#escopo">O que considerar</a><a href="#briefing">Prepare seu briefing</a><a href="#duvidas">Perguntas frequentes</a><a href="#contato">Fale com a Suprema</a></nav>
  <section id="escopo" className="cs-shell cs-editorial" aria-label="Escopo e planejamento">
   {page.sections.map((s,i)=><article key={s.title} className="cs-block" data-reveal><div className="cs-section-number" aria-hidden="true">{String(i+1).padStart(2,'0')}</div><div><h2>{s.title}</h2><p>{s.text}</p>{s.items.length>0&&<ul>{s.items.map(item=><li key={item}><Check size={17} aria-hidden="true"/>{item}</li>)}</ul>}</div></article>)}
  </section>
  {page.id==='sites'&&<section className="cs-shell cs-scope-note" data-locality-areas><h2>Curitiba e seus bairros.</h2><p>Consulte as páginas de bairros e o escopo de presença local para a área em que sua empresa atende. A cobertura contratada é definida na proposta.</p><nav className="curitiba-service-links" aria-label="Bairros de Curitiba">{[['Batel','batel'],['Água Verde','agua-verde'],['Cabral','cabral'],['Bigorrilho','bigorrilho'],['Portão','portao'],['Boqueirão','boqueirao'],['Centro','centro'],['Santa Felicidade','santa-felicidade']].map(([label,slug])=><Link key={slug} to={'/site-em/'+slug}>{label}</Link>)}</nav><Link className="cs-text-link" to="/presenca-local">Consultar plano regional e localidades <ArrowRight size={16} aria-hidden="true"/></Link></section>}
  <section id="briefing" className="cs-briefing"><div className="cs-shell cs-briefing-grid"><div data-reveal><p className="cs-eyebrow">UM BOM COMEÇO</p><h2>Traga o contexto.<br/>Vamos definir o caminho.</h2><p>Estas informações ajudam a preparar uma proposta adequada. Não envie senhas ou dados privados de clientes no primeiro contato.</p><Link to="/portfolio" className="cs-text-link">Conheça o portfólio existente<ArrowUpRight size={18} aria-hidden="true"/></Link></div><ol>{page.checklist.map((item,i)=><li key={item}><span>{String(i+1).padStart(2,'0')}</span>{item}</li>)}</ol></div></section>
  <section id="duvidas" className="cs-shell cs-faq"><div><p className="cs-eyebrow">ANTES DE CONTRATAR</p><h2>Perguntas frequentes.</h2></div><div>{page.faqs.map(f=><details key={page.id+f.question}><summary>{f.question}<Plus size={20} aria-hidden="true"/></summary><p>{f.answer}</p></details>)}</div></section>
  {page.kind==='site'?<CommercialTerms/>:<section className="cs-shell cs-scope-note"><h2>Uma proposta para o seu escopo.</h2><p>Prazo, entregas, revisões, manutenção e custos de plataformas são definidos na proposta. Serviços de marketing, conteúdo e tecnologia não estão incluídos automaticamente na oferta de criação de site.</p><p>Não há garantia de ranking, indexação, citação por inteligência artificial ou volume de vendas.</p></section>}
  <section id="contato" className="cs-shell cs-contact"><div><p className="cs-eyebrow">SUPREMA SITES EXPRESS / SUPREMA MÍDIA</p><h2>Vamos conversar sobre {page.label.toLowerCase()}?</h2><p>Conte o que sua empresa precisa resolver. A partir disso, definimos escopo e próximos passos.</p><a href="tel:+5541992721004">(41) 99272-1004</a><p className="cs-review">Conteúdo editorial da Suprema · Revisado em 9 de novembro de 2026.</p></div><LeadForm locationName={'Curitiba · '+page.label}/></section>
  <section className="cs-shell cs-related"><p className="cs-eyebrow">CONTINUE EXPLORANDO</p><h2>Outros caminhos para o seu projeto.</h2><div>{page.related.map(id=>pages.find(p=>p.id===id)!).map(p=><Link key={p.id} to={p.path}><img src={'/images/curitiba/'+p.image+'-768.webp'} alt="" width="768" height="512" loading="lazy"/><span>{p.label}<ArrowUpRight size={20} aria-hidden="true"/></span></Link>)}</div></section>
 </div>;
};
