import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Globe, FileText, MessageCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070b14] text-slate-200 pt-20 pb-14 border-t border-white/10 relative overflow-hidden">
      
      {/* Background Video 01 (Omar SEO 01) with High Elegance & High Contrast */}
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/90 to-[#070b14]/85" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Top Banner: Quick High-Contrast Direct Actions for Elderly & Senior Users */}
        <div className="bg-white/5 border border-white/15 p-6 md:p-8 rounded-2xl mb-16 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">
                Atendimento Rápido e Facilitado
              </span>
              <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
                Dúvidas ou Orçamento por Telefone e WhatsApp
              </h3>
              <p className="text-sm text-slate-300 mt-1 font-normal">
                Equipe pronta para atender você e sua empresa com atenção e agilidade.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a 
                href="https://wa.me/5541992721004" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3.5 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 whitespace-nowrap"
              >
                <MessageCircle size={20} fill="currentColor" />
                <span>WhatsApp: (41) 99272-1004</span>
              </a>

              <a 
                href="tel:41992721004" 
                className="bg-brand-primary hover:bg-blue-600 text-white px-6 py-3.5 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 whitespace-nowrap"
              >
                <Phone size={18} />
                <span>Ligar: (41) 99272-1004</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Main Footer Columns - High Legibility Font Size */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: About & Social */}
          <div>
            <Logo size={46} className="mb-6" />
            <p className="text-sm leading-relaxed mb-6 font-normal text-slate-300">
              Desenvolvimento de sites profissionais, lojas virtuais, sistemas web e SEO em Curitiba. Entrega ágil em 48 horas com atendimento direto e suporte humanizado.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com/suprema_midia" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-xl hover:bg-brand-primary hover:text-white transition-colors" aria-label="Instagram"><Instagram size={20}/></a>
              <a href="https://facebook.com/supremamidiactba" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-xl hover:bg-brand-primary hover:text-white transition-colors" aria-label="Facebook"><Facebook size={20}/></a>
              <a href="https://www.supremasite.com.br" className="bg-white/10 p-3 rounded-xl hover:bg-brand-primary hover:text-white transition-colors" aria-label="Website"><Globe size={20}/></a>
            </div>
          </div>

          {/* Col 2: Sede Address & Contacts */}
          <div>
            <h4 className="text-white font-extrabold text-base mb-6 border-b border-white/10 pb-2">Sede Curitiba</h4>
            <ul className="space-y-4 text-sm font-normal">
              <li className="flex gap-3">
                <MapPin size={20} className="text-amber-400 shrink-0 mt-1" />
                <span className="leading-relaxed text-slate-200">
                  <strong className="text-white block font-bold">Av. Sete de Setembro, 2775</strong>
                  6º andar · Batel / Rebouças<br/>
                  Curitiba - PR, 80230-010
                </span>
              </li>
              <li className="flex gap-3 items-center pt-2">
                <Phone size={18} className="text-brand-primary shrink-0" />
                <a href="tel:41992721004" className="hover:text-amber-300 font-bold text-white text-base">(41) 99272-1004</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-amber-400 shrink-0" />
                <a href="mailto:supremamidiabatel@gmail.com" className="hover:text-white text-slate-200 font-medium text-sm">supremamidiabatel@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Links with Clear Arrows */}
          <div>
            <h4 className="text-white font-extrabold text-base mb-6 border-b border-white/10 pb-2">Soluções Digitais</h4>
            <ul className="space-y-2.5 text-sm font-normal">
              <li>
                <Link to="/servicos" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight size={14} className="text-brand-primary" />
                  <span>Criação de Sites Institucionais</span>
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight size={14} className="text-brand-primary" />
                  <span>Lojas Virtuais & E-commerce</span>
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight size={14} className="text-brand-primary" />
                  <span>Sistemas Web (ERP & CRM)</span>
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight size={14} className="text-brand-primary" />
                  <span>Aplicativos Mobile Android & iOS</span>
                </Link>
              </li>
              <li>
                <Link to="/agencia-seo-curitiba" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight size={14} className="text-brand-primary" />
                  <span>Agência SEO em Curitiba</span>
                </Link>
              </li>
              <li>
                <Link to="/google-ads-curitiba" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight size={14} className="text-brand-primary" />
                  <span>Gestão de Google Ads</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Institution Links */}
          <div>
            <h4 className="text-white font-extrabold text-base mb-6 border-b border-white/10 pb-2">Navegação</h4>
            <ul className="space-y-2.5 text-sm font-normal">
              <li>
                <Link to="/portfolio" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight size={14} className="text-amber-400" />
                  <span>Portfólio de Casos Reais</span>
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight size={14} className="text-amber-400" />
                  <span>Sobre a Suprema</span>
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight size={14} className="text-amber-400" />
                  <span>Atendimento & Contato</span>
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight size={14} className="text-amber-400" />
                  <span>Política de Privacidade</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-normal text-slate-400">
          <div>
            <p className="font-semibold text-slate-300">OSKAFI WEB SITES LTDA ME · CNPJ: 15.083.543/0001-97</p>
            <p className="mt-1">© {new Date().getFullYear()} Suprema Sites Express. Todos os direitos reservados.</p>
          </div>
          
          <div className="flex items-center gap-4 text-xs">
             <Link to="/mapa-do-site" className="hover:text-slate-200 transition-colors flex items-center gap-1">
               <Globe size={12} /> Mapa do Site
             </Link>
             <span>·</span>
             <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-slate-200 transition-colors flex items-center gap-1">
               <FileText size={12} /> XML Sitemap
             </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
