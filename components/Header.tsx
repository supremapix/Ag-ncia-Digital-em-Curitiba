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
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-warm-white py-3.5 shadow-sm' : 'bg-brand-dark py-5'}`}>
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <Logo size={scrolled ? 36 : 42} />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-bold font-display tracking-wide transition-colors ${
                isActive(link.path) 
                  ? (scrolled ? 'text-cobalt' : 'text-white')
                  : (scrolled ? 'text-brand-dark hover:text-cobalt' : 'text-warm-white/70 hover:text-white')
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <a 
            href="https://wa.me/5541992721004" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cobalt hover:bg-blue-700 text-white text-sm font-bold px-6 py-3 rounded-sm transition-all active:scale-95 whitespace-nowrap"
          >
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        <button 
          className="lg:hidden flex items-center gap-2 bg-white/5 border border-white/10 text-white px-4 py-2.5 rounded-sm hover:bg-white/10 text-sm font-bold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "FECHAR" : "MENU"}
        </button>
      </div>

      <div 
        className={`lg:hidden fixed inset-0 z-50 bg-brand-dark transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col min-h-screen p-6 justify-center">
          <nav className="space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-display font-black text-warm-white hover:text-cobalt"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
