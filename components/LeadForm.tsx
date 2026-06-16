import React, { useState } from 'react';
import { Send, ShieldCheck, ArrowRight, ArrowLeft, Check, Sparkles, Star, Award, Clock } from 'lucide-react';

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
    
    const text = `*Solicitação de Orçamento Suprema Site Express*\n\n*Solução Ideal:* ${selectedSolution}\n*Nome:* ${formData.name}\n*WhatsApp/Telefone:* ${formData.phone}\n*Empresa / Segmento:* ${formData.segment || 'Não informado'}\n*Local de Interesse:* ${formData.cityInput}\n\n*Olá! Gostaria de receber atendimento prioritário e iniciar meu projeto de criação de site para minha empresa na região de ${formData.cityInput}.*`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/5541987001004?text=${encodedText}`, '_blank');
  };

  const solutions = [
    { title: 'Site Express (Entrega 48h)', desc: 'Site institucional rápido de alta performance' },
    { title: 'Landing Page de Alta Conversão', desc: 'Foco total em capturar leads e gerar vendas rápidas' },
    { title: 'Loja Virtual / E-commerce de Elite', desc: 'Estruturação completa com meios de pagamento inclusos' },
    { title: 'SEO Local & Google Meu Negócio Pro', desc: 'Posicionamento no topo das buscas regionais do Google' }
  ];

  return (
    <div id="lead-form-container" className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-brand-primary/10 transition-colors"></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-center mb-6">
          <span className="bg-brand-primary/10 text-brand-primary font-black text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full inline-block">
            Formulário Inteligente — Passo {step} de 2
          </span>
          <div className="flex gap-1.5">
            <div className={`w-2 h-2 rounded-full ${step === 1 ? 'bg-brand-primary' : 'bg-gray-200'}`}></div>
            <div className={`w-2 h-2 rounded-full ${step === 2 ? 'bg-brand-primary' : 'bg-gray-200'}`}></div>
          </div>
        </div>

        {step === 1 ? (
          <div className="animate-fade-in">
            <h3 className="text-3xl font-black mb-2 text-brand-dark tracking-tighter">Qual solução digital sua empresa precisa?</h3>
            <p className="text-gray-500 mb-8 text-sm font-medium">Selecione uma opção para receber uma proposta personalizada.</p>
            
            <div className="space-y-3 mb-8">
              {solutions.map((sol, idx) => (
                <button
                  key={idx}
                  type="button"
                  id={`solution-btn-${idx}`}
                  onClick={() => setSelectedSolution(sol.title)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-4 ${
                    selectedSolution === sol.title 
                      ? 'border-brand-primary bg-brand-primary/5 ring-2 ring-brand-primary/20' 
                      : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 mt-1 transition-all ${
                    selectedSolution === sol.title ? 'border-brand-primary bg-brand-primary text-white' : 'border-gray-300 bg-white'
                  }`}>
                    {selectedSolution === sol.title && <Check size={12} strokeWidth={4} />}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm md:text-base">{sol.title}</h4>
                    <p className="text-xs text-gray-400 mt-0.5">{sol.desc}</p>
                  </div>
                </button>
              ))}
            </div>

            <button
              type="button"
              id="next-step-btn"
              onClick={nextStep}
              className="w-full bg-brand-primary hover:bg-blue-700 text-white font-black py-4 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-500/10 hover:shadow-blue-500/20 text-base"
            >
              Próxima Etapa <ArrowRight size={18} />
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in">
            <h3 className="text-3xl font-black mb-2 text-brand-dark tracking-tighter">Por favor, informe seus dados</h3>
            <p className="text-gray-500 mb-6 text-sm font-medium">Seus dados são confidenciais e protegidos pela LGPD.</p>

            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Seu Nome</label>
              <input 
                type="text" 
                name="name"
                id="form-name-input"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-primary/5 outline-none transition-all font-medium text-brand-dark"
                placeholder="Ex: Roberto Oliveira"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">WhatsApp / Celular</label>
                <input 
                  type="tel" 
                  name="phone"
                  id="form-phone-input"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-primary/5 outline-none transition-all font-medium text-brand-dark"
                  placeholder="(00) 90000-0000"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Seu Segmento de Negócio</label>
                <input 
                  type="text" 
                  name="segment"
                  id="form-segment-input"
                  value={formData.segment}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-primary/5 outline-none transition-all font-medium text-brand-dark"
                  placeholder="Ex: Clínica, Advocacia, Loja"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Cidade ou Bairro de Atendimento</label>
              <input 
                type="text" 
                name="cityInput"
                id="form-city-input"
                required
                value={formData.cityInput}
                onChange={handleChange}
                className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 focus:border-brand-primary focus:bg-white focus:ring-4 focus:ring-brand-primary/5 outline-none transition-all font-medium text-brand-dark"
                placeholder="Ex: Batel, Curitiba, Joinville"
              />
            </div>

            <div className="flex gap-3 pt-3">
              <button
                type="button"
                id="prev-step-btn"
                onClick={prevStep}
                className="flex-[1] border border-gray-200 hover:border-gray-300 text-gray-500 font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all bg-white"
              >
                <ArrowLeft size={16} /> Voltar
              </button>
              
              <button 
                type="submit" 
                id="submit-lead-btn"
                className="flex-[2] bg-brand-primary hover:bg-blue-700 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-500/15 text-sm md:text-base"
              >
                <Send size={16} /> Enviar no WhatsApp
              </button>
            </div>
          </form>
        )}

        {/* Dynamic trust seals to boost CRO (Tarefa 3) */}
        <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-brand-primary/5 flex items-center justify-center text-brand-primary flex-shrink-0">
              <Clock size={14} />
            </div>
            <div>
              <span className="block text-[10px] font-black text-gray-800 uppercase tracking-tight">Entrega Express</span>
              <span className="block text-[9px] text-gray-400 font-bold uppercase">Lançamento em 48 Horas</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-brand-primary/5 flex items-center justify-center text-brand-primary flex-shrink-0">
              <Star size={14} fill="currentColor" />
            </div>
            <div>
              <span className="block text-[10px] font-black text-gray-800 uppercase tracking-tight">Melhor Avaliação</span>
              <span className="block text-[9px] text-gray-400 font-bold uppercase">Nota 5.0 Google Business</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-brand-primary/5 flex items-center justify-center text-brand-primary flex-shrink-0">
              <Award size={14} />
            </div>
            <div>
              <span className="block text-[10px] font-black text-gray-800 uppercase tracking-tight">SEO Comprovado</span>
              <span className="block text-[9px] text-gray-400 font-bold uppercase">Até +1900% Visibilidade</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-brand-primary/5 flex items-center justify-center text-brand-primary flex-shrink-0">
              <ShieldCheck size={14} />
            </div>
            <div>
              <span className="block text-[10px] font-black text-gray-800 uppercase tracking-tight">Privacidade Total</span>
              <span className="block text-[9px] text-gray-400 font-bold uppercase">LGPD 100% Conforme</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
