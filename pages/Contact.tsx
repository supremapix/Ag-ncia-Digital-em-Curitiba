import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { VideoPlayer } from '../components/VideoPlayer';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*Novo Contato via Site*\n\n*Nome:* ${formData.name}\n*Telefone:* ${formData.phone}\n*Email:* ${formData.email}\n*Mensagem:* ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/5541987001004?text=${encodedText}`, '_blank');
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-brand-dark mb-12">Fale Conosco</h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-brand-dark">Envie uma mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp / Telefone</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                  placeholder="(41) 99999-9999"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Como podemos ajudar?</label>
                <textarea 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                  placeholder="Descreva seu projeto..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Send size={20} />
                Enviar para WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Info & Pix */}
          <div className="space-y-8">
            <div className="bg-brand-dark text-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-brand-accent mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg">Endereço</h3>
                    <p className="text-gray-300">Av. Sete de Setembro, 2775 - 9º andar</p>
                    <p className="text-gray-400 text-sm">Acesso pelo elevador azul ou vermelho</p>
                    <p className="text-gray-300">Rebouças, Curitiba - PR, 80230-010</p>
                    <a href="https://share.google/j6UoHq8uuHfvwOfiW" target="_blank" rel="noreferrer" className="text-brand-accent hover:underline text-sm mt-2 block">Ver no Google Maps</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-brand-accent" size={24} />
                  <div>
                    <h3 className="font-bold text-lg">Telefone / WhatsApp</h3>
                    <p className="text-gray-300">(41) 98700-1004</p>
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
              <h3 className="text-xl font-bold text-brand-dark mb-4 text-center border-b pb-2">Dados para Pagamento (PIX)</h3>
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
  );
};