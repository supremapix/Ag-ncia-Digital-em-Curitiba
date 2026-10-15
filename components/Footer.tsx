import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Globe, FileText, MessageCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-warm-white pt-20 pb-14 border-t border-white/5 relative overflow-hidden">
      
      {/* Background Video 01 (Omar SEO 01) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto"
          className="w-full h-full object-cover opacity-30 filter saturate-110 contrast-105"
        >
          <source src="https://img.supremasite.com.br/omar-seo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/90 to-brand-dark/80" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Top Banner */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-sm mb-16 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="text-cobalt font-display font-bold uppercase tracking-widest block mb-2">Atendimento Direto</span>
              <h3 className="text-2xl font-display font-black text-white">Dúvidas ou Orçamento?</h3>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="https://wa.me/5541992721004" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-cobalt hover:bg-blue-700 text-white px-8 py-4 rounded-sm font-bold text-sm transition-all active:scale-95"
              >
                WhatsApp: (41) 99272-1004
              </a>
            </div>
          </div>
        </div>

        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: About */}
          <div>
            <Logo size={46} className="mb-6" />
            <p className="text-sm leading-relaxed text-warm-white/70">
              Estúdio digital em Curitiba focado em criação de sites, sistemas inteligentes e posicionamento orgânico de marcas.
            </p>
          </div>

          {/* Col 2: Contact */}
          <div>
            <h4 className="font-display text-white font-black text-lg mb-6 uppercase tracking-widest filete">Sede Curitiba</h4>
            <ul className="space-y-4 text-sm text-warm-white/70">
              <li>Av. Sete de Setembro, 2775<br/>Batel · Curitiba - PR, 80230-010</li>
              <li><a href="tel:41992721004" className="text-white font-bold text-lg hover:text-cobalt">(41) 99272-1004</a></li>
              <li><a href="mailto:supremamidiabatel@gmail.com" className="hover:text-white">supremamidiabatel@gmail.com</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-display text-white font-black text-lg mb-6 uppercase tracking-widest filete">Soluções</h4>
            <ul className="space-y-3 text-sm text-warm-white/70">
              <li><Link to="/servicos" className="hover:text-cobalt">Criação de Sites</Link></li>
              <li><Link to="/servicos" className="hover:text-cobalt">E-commerce</Link></li>
              <li><Link to="/servicos" className="hover:text-cobalt">Sistemas Web (ERP)</Link></li>
              <li><Link to="/agencia-seo-curitiba" className="hover:text-cobalt">SEO & AIO</Link></li>
              <li><Link to="/google-ads-curitiba" className="hover:text-cobalt">Google Ads</Link></li>
            </ul>
          </div>

          {/* Col 4: Links */}
          <div>
            <h4 className="font-display text-white font-black text-lg mb-6 uppercase tracking-widest filete">Institucional</h4>
            <ul className="space-y-3 text-sm text-warm-white/70">
              <li><Link to="/portfolio" className="hover:text-cobalt">Projetos</Link></li>
              <li><Link to="/sobre" className="hover:text-cobalt">Sobre</Link></li>
              <li><Link to="/contato" className="hover:text-cobalt">Contato</Link></li>
              <li><Link to="/mapa-do-site" className="hover:text-cobalt">Mapa do Site</Link></li>
              <li><a href="/sitemap.xml" className="hover:text-cobalt">XML Sitemap</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-warm-white/50">
          <p>© {new Date().getFullYear()} Suprema Estúdio Digital. CNPJ: 15.083.543/0001-97</p>
          <Link to="/privacidade" className="hover:text-white">Privacidade</Link>
        </div>
      </div>
    </footer>
  );
};
