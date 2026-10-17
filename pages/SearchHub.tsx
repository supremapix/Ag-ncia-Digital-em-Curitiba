import React, { useEffect, useState } from 'react';
import { usePageMetadata } from '../components/usePageMetadata';
import { Link, useLocation } from 'react-router-dom';
import hubs from '../data/searchHubs.json';
import { capitals } from '../data/capitalCatalog';
import { CommercialTerms } from '../components/CommercialTerms';
import '../src/hubs.css';
export const HubLinks = () => <nav className="hub-nav studio-shell" aria-label="Guias de criação de sites">{hubs.map(hub=><Link key={hub.path} to={hub.path}>{hub.path.endsWith('capitais')?'Pesquisar capitais':hub.path.endsWith('como-escolher')?'Como escolher seu site':'Guia de criação de sites'}</Link>)}</nav>;
export const SearchHub = () => {
 const {pathname}=useLocation(); const hub=hubs.find(item=>item.path===pathname)!;
 const [query,setQuery]=useState('');
 usePageMetadata(hub.title,hub.description,hub.path,'CollectionPage');
 useEffect(()=>{document.title=hub.title;document.querySelector('meta[name="description"]')?.setAttribute('content',hub.description);document.querySelector('link[rel="canonical"]')?.setAttribute('href','https://www.supremasite.com.br'+hub.path);setQuery('');},[hub]);
 const normalize=(s:string)=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 const filtered=capitals.filter(c=>normalize(c.name+' '+c.uf).includes(normalize(query)));
 return <div className="search-hub"><div className="studio-shell hub-hero"><p className="eyebrow">SUPREMA / GUIAS E LOCALIDADES</p><h1>{hub.heading}</h1><p>{hub.intro}</p></div><HubLinks/><div className="studio-shell hub-sections">{hub.sections.map(section=><section key={section.title}><h2>{section.title}</h2><p>{section.text}</p><ul>{section.links.map(([label,path])=><li key={path}><Link to={path}>{label} →</Link></li>)}</ul></section>)}</div>{hub.path.endsWith('/capitais')&&<section className="studio-shell hub-directory"><h2>27 capitais, com fontes e limites.</h2><label htmlFor="capital-search">Buscar capital ou UF</label><input id="capital-search" type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Ex.: Curitiba ou PR"/><p role="status">{filtered.length} capitais encontradas</p><ul>{filtered.map(c=><li key={c.id}><Link to={'/presenca-local?capital='+c.id}><strong>{c.name} — {c.uf}</strong><span>Consultar catálogo e classificação</span></Link></li>)}</ul>{!filtered.length&&<p>Nenhuma capital encontrada. Tente outro nome ou UF.</p>}</section>}<CommercialTerms/></div>;
};
