import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
export const Header: React.FC = () => {
  const [open,setOpen]=useState(false); const location=useLocation(); const toggle=useRef<HTMLButtonElement>(null);
  useEffect(()=>setOpen(false),[location.pathname]);
  useEffect(()=>{if(!open)return;const onKey=(e:KeyboardEvent)=>{if(e.key==='Escape'){setOpen(false);toggle.current?.focus();}};window.addEventListener('keydown',onKey);return()=>window.removeEventListener('keydown',onKey);},[open]);
  const links=[['Início','/'],['Serviços','/servicos'],['Portfólio','/portfolio'],['Blog','/blog'],['Sobre','/sobre'],['Contato','/contato']];
  return <header className="studio-header"><a className="skip-link" href="#main-content">Pular para o conteúdo</a><div className="studio-shell header-inner"><Link className="studio-logo" to="/" aria-label="Suprema Sites, início"><Logo size={40}/></Link><button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="primary-navigation" onClick={()=>setOpen(!open)}>{open?'Fechar':'Menu'}{open?<X size={21}/>:<Menu size={21}/>}</button><nav id="primary-navigation" aria-label="Navegação principal" className={open?'primary-navigation is-open':'primary-navigation'}>{links.map(([name,url])=><Link key={url} to={url} aria-current={location.pathname===url?'page':undefined}>{name}</Link>)}<a className="header-cta" href="https://wa.me/5541992721004">Começar projeto <ArrowUpRight size={17}/></a></nav></div></header>;
};
