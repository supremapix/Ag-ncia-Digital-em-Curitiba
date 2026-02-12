
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Portfólio', path: '/portfolio' },
    { name: 'Contato', path: '/contato' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${scrolled ? 'glass-header py-3 shadow-2xl shadow-brand-primary/10' : 'bg-brand-dark py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/">
          <Logo size={scrolled ? 36 : 48} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-2 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 text-[11px] font-black uppercase tracking-[0.15em] rounded-full transition-all duration-300 ${
                isActive(link.path) 
                  ? 'bg-brand-primary text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="ml-6 pl-6 border-l border-white/10">
            <a 
              href="https://wa.me/5541987001004" 
              className="shimmer-btn text-brand-dark px-6 py-3 rounded-full font-black flex items-center gap-2 text-xs uppercase tracking-wider transform hover:scale-105 transition-all"
            >
              <Phone size={14} />
              (41) 98700-1004
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white p-2 rounded-xl bg-white/5 border border-white/10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-xl transition-all duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-8 pt-24">
          <div className="space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-3xl font-black uppercase tracking-tighter ${isActive(link.path) ? 'text-brand-accent' : 'text-white'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="mt-auto space-y-4">
             <a 
              href="https://wa.me/5541987001004" 
              className="shimmer-btn text-brand-dark w-full py-5 rounded-2xl text-center font-black text-xl shadow-2xl block"
            >
              WhatsApp Direto
            </a>
            <p className="text-gray-500 text-center font-bold text-sm">OSKAFI WEB SITES LTDA</p>
          </div>
        </div>
      </div>
    </header>
  );
};
