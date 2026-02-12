
import React from 'react';

export const Logo: React.FC<{ size?: number; className?: string }> = ({ size = 48, className = "" }) => {
  return (
    <div className={`flex items-center gap-3 group cursor-pointer ${className}`}>
      <div className="relative" style={{ width: size, height: size }}>
        {/* Camada de brilho externa */}
        <div className="absolute inset-0 bg-brand-primary opacity-0 group-hover:opacity-40 blur-xl transition-all duration-700 rounded-lg"></div>
        
        <svg 
          viewBox="0 0 100 100" 
          className="relative z-10 w-full h-full transform transition-all duration-500 group-hover:scale-110 group-active:scale-95 animate-logo-glow"
        >
          {/* Fundo Preto */}
          <rect width="100" height="100" fill="#050a14" rx="4" />
          
          {/* Moldura Externa (Estilo Suprema Mídia) */}
          <path 
            d="M15 15 H 85 V 85 H 15 V 15" 
            fill="none" 
            stroke="white" 
            strokeWidth="6" 
            strokeLinejoin="miter"
          />
          
          {/* O "S" Estilizado (Geometria Exata da Imagem) */}
          <path 
            d="M75 28 H 30 C 25 28 25 45 30 45 H 70 C 75 45 75 62 70 62 H 25" 
            fill="none" 
            stroke="white" 
            strokeWidth="9" 
            strokeLinecap="square"
            strokeLinejoin="miter"
            className="group-hover:stroke-brand-accent transition-colors duration-500"
          />
          
          {/* Detalhe da moldura inferior */}
          <path d="M15 85 L 15 75" stroke="white" strokeWidth="6" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-white font-black text-2xl leading-none tracking-tighter group-hover:text-brand-accent transition-colors">
          SUPREMA<span className="text-brand-primary">MÍDIA</span>
        </span>
        <span className="text-[9px] text-gray-500 font-bold uppercase tracking-[0.3em] leading-none mt-1 group-hover:text-white transition-colors">
          Performance Digital
        </span>
      </div>
    </div>
  );
};
