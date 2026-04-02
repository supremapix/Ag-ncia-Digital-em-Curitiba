import React, { useState } from 'react';
import { Send, ShieldCheck } from 'lucide-react';

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
    <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-brand-primary/10 transition-colors"></div>
      
      <div className="relative z-10">
        <h3 className="text-3xl font-black mb-2 text-brand-dark tracking-tighter">Solicite um Orçamento</h3>
        <p className="text-gray-500 mb-8 text-sm font-medium">Preencha e receba atendimento prioritário em instantes.</p>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Nome Completo</label>
            <input 
              type="text" 
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-primary/5 outline-none transition-all font-medium text-brand-dark"
              placeholder="Ex: João Silva"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">WhatsApp</label>
              <input 
                type="tel" 
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-primary/5 outline-none transition-all font-medium text-brand-dark"
                placeholder="(00) 00000-0000"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">E-mail</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-primary/5 outline-none transition-all font-medium text-brand-dark"
                placeholder="seu@email.com"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Seu Projeto</label>
            <textarea 
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-primary/5 outline-none transition-all font-medium text-brand-dark resize-none"
              placeholder="Conte-nos brevemente o que você precisa..."
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-brand-primary hover:bg-blue-700 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 shadow-xl shadow-blue-500/20 text-lg"
          >
            <Send size={20} />
            Enviar via WhatsApp
          </button>
          
          <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest pt-2">
            <ShieldCheck size={14} className="text-green-500" />
            Seus dados estão 100% seguros
          </div>
        </form>
      </div>
    </div>
  );
};
