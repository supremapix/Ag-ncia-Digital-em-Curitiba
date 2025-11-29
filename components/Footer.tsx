import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

// Custom TikTok Icon
const TikTokIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
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

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t-4 border-brand-accent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
              SUPREMA<span className="text-brand-accent">SITE</span>
            </h3>
            <p className="text-sm mb-6 leading-relaxed">
              Especialistas em desenvolvimento web e marketing digital. 
              Levamos sua empresa para o próximo nível com sites de alta performance e estratégias de SEO focadas em resultados.
            </p>
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">Siga a Suprema Mídia</h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/suprema_midia/" target="_blank" rel="noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-brand-accent hover:text-brand-dark transition-colors" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href="https://www.facebook.com/supremamidiactba/" target="_blank" rel="noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-brand-accent hover:text-brand-dark transition-colors" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
                <a href="https://www.tiktok.com/@suprema_midia/" target="_blank" rel="noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-brand-accent hover:text-brand-dark transition-colors" aria-label="TikTok">
                  <TikTokIcon size={18} />
                </a>
                <a href="https://bio.supremamidia.com.br/" target="_blank" rel="noreferrer" className="bg-gray-800 p-2 rounded-full hover:bg-brand-accent hover:text-brand-dark transition-colors" aria-label="Bio Links">
                  <LinkIcon size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-accent shrink-0 mt-1" size={18} />
                <span>
                  Av. Sete de Setembro, 2775 - 9º andar<br/>
                  Rebouças, Curitiba - PR, 80230-010
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-accent shrink-0" size={18} />
                <a href="tel:41987001004" className="hover:text-white">(41) 98700-1004</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-accent shrink-0" size={18} />
                <a href="mailto:supremamidiabatel@gmail.com" className="hover:text-white">supremamidiabatel@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/servicos" className="hover:text-brand-accent">Criação de Sites</Link></li>
              <li><Link to="/servicos" className="hover:text-brand-accent">Lojas Virtuais (E-commerce)</Link></li>
              <li><Link to="/servicos" className="hover:text-brand-accent">Otimização SEO Local</Link></li>
              <li><Link to="/servicos" className="hover:text-brand-accent">Landing Pages</Link></li>
              <li><Link to="/servicos" className="hover:text-brand-accent">Gestão de Tráfego</Link></li>
            </ul>
          </div>

          {/* Local SEO Areas */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Áreas de Atuação</h3>
            <ul className="space-y-1 text-xs text-gray-400">
              <li>Criação de Sites em Curitiba</li>
              <li>Sites em São José dos Pinhais</li>
              <li>Sites em Colombo</li>
              <li>Sites em Araucária</li>
              <li>Sites em Pinhais</li>
              <li>Sites em Campo Largo</li>
              <li>Sites em Almirante Tamandaré</li>
              <li>Atendimento em todo o Paraná</li>
            </ul>
          </div>
        </div>

        {/* Map Embed */}
        <div className="w-full h-48 bg-gray-800 rounded-lg overflow-hidden mb-8">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.835492677843!2d-49.26998982361665!3d-25.44376483340621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce470716b0811%3A0x6649721490288863!2sAv.%20Sete%20de%20Setembro%2C%202775%20-%20Rebou%C3%A7as%2C%20Curitiba%20-%20PR%2C%2080230-010!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr" 
             width="100%" 
             height="100%" 
             style={{border:0}} 
             allowFullScreen 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade">
           </iframe>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} OSKAFI WEB SITES LTDA ME - CNPJ: 15.083.543/0001-97. Todos os direitos reservados.</p>
          <p className="mt-2">Av. Sete de Setembro, 2775 - 9º andar ou Piso G6 - Acesso pelo elevador azul ou vermelho.</p>
        </div>
      </div>
    </footer>
  );
};