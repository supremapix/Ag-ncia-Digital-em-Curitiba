import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { SUPREMA_MEDIA } from '../constants/media';

export const VideoEmbed: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    'name': SUPREMA_MEDIA.video.title,
    'description': 'Conheça a Suprema Sites Express, a agência líder em criação de sites profissionais, e-commerce e SEO local com entrega em 48 horas em Curitiba e todo o Brasil.',
    'thumbnailUrl': SUPREMA_MEDIA.video.thumbnail,
    'uploadDate': '2024-01-15T08:00:00+03:00',
    'contentUrl': SUPREMA_MEDIA.video.watchUrl,
    'embedUrl': SUPREMA_MEDIA.video.embedUrl,
    'publisher': {
      '@type': 'Organization',
      'name': 'Suprema Site Express',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.supremamidia.com.br/images/fachada-suprema-midia-estrutura.png'
      }
    }
  };

  return (
    <div className={`relative rounded-2xl overflow-hidden bg-brand-dark border border-white/10 shadow-2xl group ${className}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      
      {!isPlaying ? (
        <div 
          className="relative aspect-video cursor-pointer flex items-center justify-center overflow-hidden"
          onClick={() => setIsPlaying(true)}
          role="button"
          tabIndex={0}
          aria-label="Assistir Vídeo Institucional Suprema Sites Express"
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsPlaying(true); }}
        >
          <img
            src={SUPREMA_MEDIA.video.thumbnail}
            alt={SUPREMA_MEDIA.video.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent flex items-center justify-center">
            <div className="w-20 h-20 bg-brand-primary text-white rounded-full flex items-center justify-center shadow-2xl shadow-brand-primary/50 group-hover:scale-110 transition-all duration-300 relative">
              <Play size={36} className="ml-1 fill-white" />
              <div className="absolute -inset-2 rounded-full border-2 border-brand-primary/40 animate-ping pointer-events-none" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-left">
            <span className="inline-block px-3 py-1 bg-brand-accent text-black font-black text-xs uppercase tracking-wider rounded-md mb-1">
              Vídeo Institucional
            </span>
            <h3 className="text-white font-bold text-lg md:text-xl drop-shadow">
              {SUPREMA_MEDIA.video.title}
            </h3>
          </div>
        </div>
      ) : (
        <div className="aspect-video w-full">
          <iframe
            src={SUPREMA_MEDIA.video.embedUrl}
            title={SUPREMA_MEDIA.video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>
      )}
    </div>
  );
};
