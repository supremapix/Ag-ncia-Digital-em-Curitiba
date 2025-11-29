import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface LeadFormProps {
  locationName?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({ locationName }) => {
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
    const locText = locationName ? ` (Interesse em: ${locationName})` : '';
    const text = `*Contato via Site Suprema Express${locText}*\n\n*Nome:* ${formData.name}\n*Telefone:* ${formData.phone}\n*Email:* ${formData.email}\n*Mensagem:* ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/5541987001004?text=${encodedText}`, '_blank');
  };

  return (
    <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-lg border border-gray-200">
      <h3 className="text-2xl font-bold mb-2 text-brand-dark">Solicite um Orçamento</h3>
      <p className="text-gray-600 mb-6 text-sm">Preencha abaixo e receba atendimento prioritário no WhatsApp.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input 
            type="text" 
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary outline-none"
            placeholder="Nome Completo"
          />
        </div>
        <div>
          <input 
            type="tel" 
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary outline-none"
            placeholder="WhatsApp / Telefone"
          />
        </div>
        <div>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary outline-none"
            placeholder="Seu melhor e-mail"
          />
        </div>
        <div>
          <textarea 
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary outline-none"
            placeholder="Descreva seu projeto..."
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-transform hover:scale-105"
        >
          <Send size={18} />
          Enviar via WhatsApp
        </button>
      </form>
    </div>
  );
};