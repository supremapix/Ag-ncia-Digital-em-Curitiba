import React from 'react';
import { Play } from 'lucide-react';

export const VideoPlayer: React.FC = () => {
  return (
    <div className="w-full bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 my-8">
      <div className="relative pt-[56.25%] group">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/scecnDWM5cg?autoplay=0&rel=0&showinfo=0&modestbranding=1"
          title="Suprema Sites - Criação de Sites Profissionais"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-6 bg-brand-dark text-white flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-brand-accent flex items-center gap-2">
            <Play size={20} fill="currentColor" />
            Veja como transformamos negócios
          </h3>
          <p className="text-gray-400 text-sm mt-1">Descubra o método para aumentar sua visibilidade em 300%.</p>
        </div>
        <a 
          href="https://wa.me/5541987001004" 
          target="_blank"
          rel="noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg whitespace-nowrap transition-colors shadow-lg animate-pulse"
        >
          Quero um Site Assim
        </a>
      </div>
    </div>
  );
};