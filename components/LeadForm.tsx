import React, { useState } from 'react';
import { Send, ShieldCheck, ArrowRight, ArrowLeft, Check, Clock, Award, Star } from 'lucide-react';

interface LeadFormProps {
  locationName?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({ locationName }) => {
  const [step, setStep] = useState(1);
  const [selectedSolution, setSelectedSolution] = useState('Site Express (Entrega 48h)');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    segment: '',
    cityInput: locationName || 'Curitiba'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (step === 1) setStep(2);
  };

  const prevStep = () => {
    if (step === 2) setStep(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    const text = `*Solicitação de Orçamento Suprema Site Express*\n\n*Solução Ideal:* ${selectedSolution}\n*Nome:* ${formData.name}\n*WhatsApp/Telefone:* ${formData.phone}\n*Empresa / Segmento:* ${formData.segment || 'Não informado'}\n*Local de Interesse:* ${formData.cityInput}\n\n*Olá! Gostaria de receber atendimento prioritário e iniciar meu projeto na região de ${formData.cityInput}.*`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/5541992721004?text=${encodedText}`, '_blank');
  };

  const solutions = [
    { title: 'Site Express (Entrega 48h)', desc: 'Site institucional corporativo em React' },
    { title: 'Landing Page de Alta Conversão', desc: 'Foco total em vendas rápidas e geração de leads' },
    { title: 'Loja Virtual / E-commerce', desc: 'Plataforma completa com checkout e frete' },
    { title: 'SEO Local & Google Maps', desc: 'Dominância nos primeiros resultados do Google' }
  ];

  return (
    <div id="lead-form-container" className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-slate-200 text-slate-900">
      <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Orçamento Rápido · Etapa {step} de 2
        </span>
        <div className="flex gap-1.5">
          <div className={`w-2 h-2 rounded-full ${step === 1 ? 'bg-brand-primary' : 'bg-slate-200'}`}></div>
          <div className={`w-2 h-2 rounded-full ${step === 2 ? 'bg-brand-primary' : 'bg-slate-200'}`}></div>
        </div>
      </div>

      {step === 1 ? (
        <div className="animate-fade-in">
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-slate-900 tracking-tight">Qual o objetivo do seu projeto?</h3>
          <p className="text-slate-500 mb-6 text-xs font-normal">Selecione a solução para receber a estimativa.</p>
          
          <div className="space-y-2.5 mb-6">
            {solutions.map((sol, idx) => (
              <button
                key={idx}
                type="button"
                id={`solution-btn-${idx}`}
                onClick={() => setSelectedSolution(sol.title)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                  selectedSolution === sol.title 
                    ? 'border-brand-primary bg-blue-50/50' 
                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                  selectedSolution === sol.title ? 'border-brand-primary bg-brand-primary text-white' : 'border-slate-300 bg-white'
                }`}>
                  {selectedSolution === sol.title && <Check size={10} strokeWidth={3} />}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-xs md:text-sm">{sol.title}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">{sol.desc}</p>
                </div>
              </button>
            ))}
          </div>

          <button
            type="button"
            id="next-step-btn"
            onClick={nextStep}
            className="w-full bg-brand-primary hover:bg-blue-600 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md text-sm"
          >
            <span>Avançar para contato</span>
            <ArrowRight size={16} />
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
          <h3 className="text-xl md:text-2xl font-bold mb-1 text-slate-900 tracking-tight">Informações de contato</h3>
          <p className="text-slate-500 mb-4 text-xs font-normal">Receba a proposta diretamente pelo WhatsApp.</p>

          <div className="space-y-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Seu Nome</label>
            <input 
              type="text" 
              name="name"
              id="form-name-input"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-primary focus:bg-white focus:outline-none transition-colors font-medium text-slate-900 text-sm"
              placeholder="Nome completo"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">WhatsApp / Telefone</label>
              <input 
                type="tel" 
                name="phone"
                id="form-phone-input"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-primary focus:bg-white focus:outline-none transition-colors font-medium text-slate-900 text-sm"
                placeholder="(41) 90000-0000"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Segmento</label>
              <input 
                type="text" 
                name="segment"
                id="form-segment-input"
                value={formData.segment}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-primary focus:bg-white focus:outline-none transition-colors font-medium text-slate-900 text-sm"
                placeholder="Ex: Medicina, Advocacia, Vendas"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Cidade / Região</label>
            <input 
              type="text" 
              name="cityInput"
              id="form-city-input"
              required
              value={formData.cityInput}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-primary focus:bg-white focus:outline-none transition-colors font-medium text-slate-900 text-sm"
              placeholder="Ex: Curitiba, Batel, Joinville"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              id="prev-step-btn"
              onClick={prevStep}
              className="flex-1 border border-slate-200 hover:border-slate-300 text-slate-600 font-semibold py-3.5 rounded-xl flex items-center justify-center gap-1.5 transition-colors text-xs"
            >
              <ArrowLeft size={14} /> Voltar
            </button>
            
            <button 
              type="submit" 
              id="submit-lead-btn"
              className="flex-[2] bg-brand-primary hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md text-xs uppercase tracking-wider"
            >
              <Send size={14} /> Solicitar Proposta
            </button>
          </div>
        </form>
      )}

      {/* Trust Markers */}
      <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-2 gap-3 text-[11px] font-medium text-slate-500">
        <div className="flex items-center gap-2">
          <Clock size={14} className="text-brand-primary shrink-0" />
          <span>Entrega em 48h</span>
        </div>
        <div className="flex items-center gap-2">
          <Star size={14} className="text-amber-500 shrink-0" />
          <span>Nota 5.0 no Google</span>
        </div>
        <div className="flex items-center gap-2">
          <Award size={14} className="text-brand-primary shrink-0" />
          <span>SEO Estruturado</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck size={14} className="text-emerald-600 shrink-0" />
          <span>LGPD em Conformidade</span>
        </div>
      </div>
    </div>
  );
};
