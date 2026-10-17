import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { LeadForm } from '../components/LeadForm';
import { VideoPlayer } from '../components/VideoPlayer';

import { TypewriterText } from '../src/components/TypewriterText';
import { PERSUASIVE_PHRASES } from '../src/constants/phrases';

export const Contact: React.FC = () => {
  useEffect(() => {
    document.title = "Contato | Suprema Site Express - Criação de Sites com prazo sob consulta";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Entre em contato com a Suprema Site Express. Solicite um orçamento para a criação do seu site profissional ou loja virtual com entrega expressa com prazo sob consulta.");
    }
  }, []);

  return (
    <div className="bg-white contact-page">
      {/* Hero Section */}
      <section className="bg-brand-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary opacity-5 transform skew-y-3 translate-y-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Fale Conosco: Solicite seu Orçamento</h1>
          <div className="min-h-[60px]">
            <TypewriterText 
              phrases={PERSUASIVE_PHRASES}
              className="text-xl text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed"
              speed={40}
              delay={3000}
            />
          </div>
        </div>
      </section>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="min-w-0">
              <LeadForm />
            </div>

            {/* Contact Info & Pix */}
            <div className="space-y-8">
              <div className="bg-brand-dark text-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Informações de Contato e Localização em Curitiba</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-brand-accent mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-lg">Endereço, Telefone e E-mail da Suprema Site Express</h3>
                      <p className="text-gray-300">Av. Sete de Setembro, 2775 - 6º andar</p>
                      <p className="text-gray-400 text-sm">Acesso pelo elevador azul ou vermelho</p>
                      <p className="text-gray-300">Rebouças, Curitiba - PR, 80230-010</p>
                      <a href="https://share.google/j6UoHq8uuHfvwOfiW" target="_blank" rel="noreferrer" className="text-brand-accent hover:underline text-sm mt-2 block">Ver no Google Maps</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="text-brand-accent" size={24} />
                    <div>
                      <h3 className="font-bold text-lg">Telefone / WhatsApp</h3>
                      <p className="text-gray-300">(41) 99272-1004</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="text-brand-accent" size={24} />
                    <div>
                      <h3 className="font-bold text-lg">E-mail</h3>
                      <p className="text-gray-300">supremamidiabatel@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment / Pix Info */}
              <div className="bg-white border border-brand-accent p-8 rounded-xl shadow-md">
                <h2 className="text-xl font-bold text-brand-dark mb-4 text-center border-b pb-2">Dados para Pagamento e Faturamento (PIX)</h2>
                <div className="space-y-3 text-center">
                  <p className="text-sm text-gray-500">Razão Social</p>
                  <p className="font-bold text-gray-800">OSKAFI WEB SITES LTDA ME</p>
                  
                  <p className="text-sm text-gray-500 mt-4">Chave Pix (E-mail)</p>
                  <p className="font-mono bg-gray-100 p-3 rounded text-lg select-all text-brand-primary">supremapix@gmail.com</p>
                  
                  <p className="text-sm text-gray-500 mt-4">CNPJ</p>
                  <p className="font-mono text-gray-700">15.083.543/0001-97</p>
                </div>
              </div>
              
              {/* Video at bottom */}
              <div className="mt-8">
                 <VideoPlayer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
