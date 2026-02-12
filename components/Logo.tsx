
import React from 'react';

export const Logo: React.FC<{ size?: number; className?: string }> = ({ size = 48, className = "" }) => {
  return (
    <div className={`flex items-center gap-3 group cursor-pointer ${className}`}>
      <div className="relative" style={{ width: size, height: size }}>
        {/* Camada de brilho externa para efeito premium */}
        <div className="absolute inset-0 bg-brand-primary opacity-0 group-hover:opacity-30 blur-xl transition-all duration-700 rounded-lg"></div>
        
        <svg 
          viewBox="0 0 100 100" 
          className="relative z-10 w-full h-full transform transition-all duration-500 group-hover:scale-110 group-active:scale-95 animate-logo-glow"
        >
          {/* Fundo Preto Sólido */}
          <rect width="100" height="100" fill="#050a14" rx="2" />
          
          {/* Moldura Branca (Contorno Externo) */}
          <path 
            d="M12 12 H 88 V 88 H 12 V 12" 
            fill="none" 
            stroke="white" 
            strokeWidth="5" 
            strokeLinejoin="miter"
          />
          
          {/* O "S" Geométrico - Fiel ao Pixel da imagem anexada */}
          <path 
            d="M78 28 H 28 V 50 H 72 V 72 H 22" 
            fill="none" 
            stroke="white" 
            strokeWidth="9" 
            strokeLinecap="square"
            strokeLinejoin="miter"
            className="group-hover:stroke-brand-accent transition-colors duration-500"
          />
          
          {/* Detalhe de quebra da moldura inferior esquerda */}
          <path d="M12 88 L 12 75" stroke="white" strokeWidth="5" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-white font-black text-2xl leading-none tracking-tighter group-hover:text-brand-accent transition-colors">
          SUPREMA<span className="text-brand-primary">MÍDIA</span>
        </span>
        <span className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.4em] leading-none mt-1 group-hover:text-white transition-colors">
          Performance
        </span>
      </div>
    </div>
  );
};
