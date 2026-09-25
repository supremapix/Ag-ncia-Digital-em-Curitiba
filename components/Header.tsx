import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, MessageCircle, ChevronRight, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Portfólio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Sobre a Agência', path: '/sobre' },
    { name: 'Contato e Suporte', path: '/contato' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'glass-header py-3.5 shadow-xl shadow-black/20' : 'bg-[#070b14] py-5 border-b border-white/5'}`}>
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <Logo size={scrolled ? 36 : 42} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-semibold tracking-wide transition-colors relative py-1 ${
                isActive(link.path) 
                  ? 'text-white font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-brand-primary' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop WhatsApp CTA */}
        <div className="hidden lg:flex items-center">
          <a 
            href="https://wa.me/5541992721004" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-brand-primary hover:bg-blue-600 text-white text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-blue-900/30 active:scale-95 whitespace-nowrap"
          >
            <span>Falar no WhatsApp</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile Menu Trigger Button - Large & Clear for Senior Users */}
        <button 
          className="lg:hidden flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-2.5 rounded-xl hover:bg-white/20 active:scale-95 transition-all text-sm font-bold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu de navegação"}
        >
          {isMenuOpen ? (
            <>
              <X size={22} className="text-amber-400" />
              <span>FECHAR</span>
            </>
          ) : (
            <>
              <Menu size={22} className="text-brand-primary" />
              <span>MENU</span>
            </>
          )}
        </button>
      </div>

      {/* Mobile Nav Drawer Overlay - Designed for Elderly & High Accessibility */}
      <div 
        className={`lg:hidden fixed inset-0 z-50 bg-[#070b14]/98 backdrop-blur-2xl transition-all duration-300 overflow-y-auto ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col min-h-screen p-6 pt-6 justify-between max-w-md mx-auto">
          
          {/* Top Bar inside Overlay */}
          <div className="flex justify-between items-center pb-6 border-b border-white/10 mb-6">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
              <Logo size={36} />
            </Link>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-500/40 px-4 py-2 rounded-xl text-sm font-bold active:scale-95"
            >
              <X size={20} />
              <span>FECHAR</span>
            </button>
          </div>

          {/* Nav Links - Big Touch Area & High Legibility Font */}
          <nav className="space-y-3 mb-8">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2 px-1">
              Páginas do Site
            </span>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                  isActive(link.path) 
                    ? 'bg-brand-primary text-white border-brand-primary font-extrabold text-lg shadow-md' 
                    : 'bg-white/5 border-white/10 text-slate-100 hover:bg-white/10 font-bold text-base'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight size={18} className={isActive(link.path) ? 'text-white' : 'text-slate-400'} />
              </Link>
            ))}
          </nav>

          {/* Quick Direct Actions for Elderly Users */}
          <div className="space-y-4 pt-6 border-t border-white/15">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block px-1">
              Atendimento e Telefones Diretos
            </span>

            {/* Big Green WhatsApp Button */}
            <a 
              href="https://wa.me/5541992721004" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 px-5 rounded-xl font-extrabold text-base flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-transform"
            >
              <MessageCircle size={22} fill="currentColor" />
              <span>WhatsApp: (41) 99272-1004</span>
            </a>

            {/* Big Blue Phone Call Button */}
            <a 
              href="tel:41992721004" 
              className="w-full bg-brand-primary hover:bg-blue-600 text-white py-4 px-5 rounded-xl font-extrabold text-base flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-transform"
            >
              <Phone size={20} />
              <span>Ligar Direto: (41) 99272-1004</span>
            </a>

            {/* Address Info Block */}
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-slate-300 text-xs leading-relaxed flex items-start gap-3">
              <MapPin size={18} className="text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block text-sm font-bold mb-0.5">Sede Suprema em Curitiba</strong>
                <p>Av. Sete de Setembro, 2775 - 6º andar (Batel / Rebouças) · CEP 80230-010</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};
