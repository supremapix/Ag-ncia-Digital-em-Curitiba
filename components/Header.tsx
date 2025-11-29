import React, { useState } from 'react';
import { Menu, X, Monitor, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Portfólio', path: '/portfolio' },
    { name: 'Contato', path: '/contato' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full bg-brand-dark text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold tracking-tighter hover:text-brand-accent transition-colors">
          <Monitor className="text-brand-accent" size={32} />
          <span>SUPREMA<span className="text-brand-accent">SITE</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                isActive(link.path) ? 'text-brand-accent' : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://wa.me/5541987001004" 
            target="_blank" 
            rel="noreferrer"
            className="bg-brand-accent text-brand-dark px-5 py-2 rounded-md font-bold hover:bg-white transition-all flex items-center gap-2"
          >
            <Phone size={16} />
            (41) 98700-1004
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <nav className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-lg ${isActive(link.path) ? 'text-brand-accent' : 'text-gray-300'}`}
              >
                {link.name}
              </Link>
            ))}
             <a 
              href="https://wa.me/5541987001004" 
              className="bg-green-600 text-white px-5 py-3 rounded text-center font-bold"
            >
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};