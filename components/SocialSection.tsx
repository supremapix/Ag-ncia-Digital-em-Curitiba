import React from 'react';
import { Facebook, Instagram, Link as LinkIcon } from 'lucide-react';

// Custom TikTok Icon since it's not in the standard Lucide set used here
const TikTokIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
  </svg>
);

export const SocialSection: React.FC = () => {
  const socials = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/suprema_midia/',
      icon: <Instagram size={28} />,
      colorClass: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500',
      hoverColor: 'hover:opacity-90',
      handle: '@suprema_midia'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/supremamidiactba/',
      icon: <Facebook size={28} />,
      colorClass: 'bg-[#1877F2]',
      hoverColor: 'hover:bg-[#166fe5]',
      handle: 'Suprema Mídia'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@suprema_midia/',
      icon: <TikTokIcon size={28} />,
      colorClass: 'bg-black',
      hoverColor: 'hover:bg-gray-800',
      handle: '@suprema_midia'
    },
    {
      name: 'Bio Links',
      url: 'https://bio.supremamidia.com.br/',
      icon: <LinkIcon size={28} />,
      colorClass: 'bg-green-600',
      hoverColor: 'hover:bg-green-700',
      handle: 'Nossos Links'
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Siga a Suprema Mídia</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Acompanhe nosso trabalho, dicas de marketing e novidades exclusivas nas redes sociais.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className={`${social.colorClass} ${social.hoverColor} text-white px-6 py-4 rounded-xl flex items-center gap-4 transition-all duration-300 transform hover:-translate-y-1 shadow-lg min-w-[220px] md:min-w-[240px] group`}
            >
              <div className="bg-white/20 p-2 rounded-full group-hover:scale-110 transition-transform">
                {social.icon}
              </div>
              <div className="text-left">
                <span className="block text-xs font-medium opacity-90 uppercase tracking-wide">Siga no</span>
                <span className="block text-lg font-bold leading-none mt-1">{social.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};