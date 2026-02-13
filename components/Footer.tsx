
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Heart, Globe, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-gray-400 pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          <div>
            <Logo size={56} className="mb-8" />
            <p className="text-sm leading-relaxed mb-8 font-medium">
              A agência número #1 em Curitiba para criação de sites que vendem. Tecnologia de ponta, SEO local agressivo e suporte humano especializado.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/suprema_midia" className="bg-white/5 p-3 rounded-xl hover:bg-brand-primary hover:text-white transition-all"><Instagram size={20}/></a>
              <a href="https://facebook.com/supremamidiactba" className="bg-white/5 p-3 rounded-xl hover:bg-brand-primary hover:text-white transition-all"><Facebook size={20}/></a>
              <a href="https://www.supremasite.com.br" className="bg-white/5 p-3 rounded-xl hover:bg-brand-primary hover:text-white transition-all"><Globe size={20}/></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-[11px] mb-8">Onde Estamos</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex gap-4">
                <MapPin size={24} className="text-brand-accent shrink-0" />
                <span className="leading-relaxed">Av. Sete de Setembro, 2775 - 9º andar<br/><strong className="text-white">Batel / Rebouças</strong><br/>Curitiba - PR, 80230-010</span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone size={20} className="text-brand-primary shrink-0" />
                <a href="tel:41987001004" className="hover:text-white font-bold tracking-tighter">(41) 98700-1004</a>
              </li>
              <li className="flex gap-4 items-center">
                <Mail size={20} className="text-brand-accent shrink-0" />
                <a href="mailto:supremamidiabatel@gmail.com" className="hover:text-white">contato@supremasite.com.br</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-[11px] mb-8">Especialidades</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/servicos" className="hover:text-brand-primary flex items-center gap-2">SEO Local de Elite</Link></li>
              <li><Link to="/servicos" className="hover:text-brand-primary flex items-center gap-2">Sites Institucionais Express</Link></li>
              <li><Link to="/servicos" className="hover:text-brand-primary flex items-center gap-2">Lojas Virtuais de Alta Conversão</Link></li>
              <li><Link to="/servicos" className="hover:text-brand-primary flex items-center gap-2">Landing Pages Vendedoras</Link></li>
              <li><Link to="/servicos" className="hover:text-brand-primary flex items-center gap-2">Gestão de Google Ads</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-[11px] mb-8">Informações</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/portfolio" className="hover:text-brand-primary underline decoration-brand-accent decoration-2">Ver Portfólio 2025</Link></li>
              <li><Link to="/sobre" className="hover:text-brand-primary">Conheça nossa Agência</Link></li>
              <li><a href="https://wa.me/5541987001004" className="hover:text-brand-primary">Trabalhe Conosco</a></li>
              <li><Link to="/contato" className="hover:text-brand-primary">Suporte ao Cliente</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col items-center text-center gap-8">
          <div className="flex flex-col items-center gap-3">
             <div className="flex items-center gap-4 text-white text-xl md:text-2xl font-black">
                <span>Desenvolvido com</span>
                <div className="relative">
                  <Heart size={48} fill="#ef4444" stroke="#ef4444" className="animate-heart-beat" />
                  <div className="absolute inset-0 bg-red-500 blur-xl opacity-40 animate-pulse"></div>
                </div>
                <span>por Suprema Mídia</span>
             </div>
             <p className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.3em]">
               OSKAFI WEB SITES LTDA ME | CNPJ: 15.083.543/0001-97
             </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-[10px] font-black uppercase tracking-widest text-gray-500">
             <Link to="/mapa-do-site" className="hover:text-white transition-colors flex items-center gap-1">
               <Globe size={12} /> Mapa do Site
             </Link>
             <span className="text-white/10">|</span>
             <a href="/sitemap.xml" target="_blank" className="hover:text-white transition-colors flex items-center gap-1">
               <FileText size={12} /> XML
             </a>
             <span className="text-white/10">|</span>
             <span>Todos os Direitos Reservados &copy; {new Date().getFullYear()}</span>
             <span className="text-white/10">|</span>
             <Link to="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
          </div>
        </div>
      </div>
      
      {/* Decorative logo background */}
      <div className="absolute -bottom-20 -right-20 opacity-[0.03] rotate-12 pointer-events-none">
         <Logo size={400} />
      </div>
    </footer>
  );
};
