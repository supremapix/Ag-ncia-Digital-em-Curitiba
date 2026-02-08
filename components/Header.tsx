
import React, { useState } from 'react';
import { Menu, X, Monitor, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Portfólio', path: '/portfolio' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full glass-header border-b border-white/5 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-black tracking-tighter hover:scale-105 transition-transform">
          <div className="bg-brand-primary p-1.5 rounded-lg">
            <Monitor className="text-white" size={24} />
          </div>
          <span className="text-white">SUPREMA<span className="text-brand-accent">SITE</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-1 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 text-xs font-black uppercase tracking-widest rounded-lg transition-all ${
                isActive(link.path) 
                  ? 'bg-brand-primary text-white shadow-lg' 
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="ml-4 pl-4 border-l border-white/10">
            <a 
              href="https://wa.me/5541987001004" 
              target="_blank" 
              rel="noreferrer"
              className="shimmer-btn text-brand-dark px-6 py-2.5 rounded-xl font-black hover:scale-105 transition-all flex items-center gap-2 text-sm"
            >
              <Phone size={16} />
              (41) 98700-1004
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 rounded-lg bg-white/5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen border-t border-white/5 bg-brand-dark shadow-2xl' : 'max-h-0'}`}>
        <nav className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`block text-xl font-bold py-2 ${isActive(link.path) ? 'text-brand-accent' : 'text-gray-300'}`}
            >
              {link.name}
            </Link>
          ))}
           <a 
            href="https://wa.me/5541987001004" 
            className="shimmer-btn text-brand-dark px-5 py-4 rounded-xl text-center font-black text-lg shadow-xl"
          >
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
};
