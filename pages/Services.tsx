
import React from 'react';
import { VideoPlayer } from '../components/VideoPlayer';
import { Accordion } from '../components/Accordion';
import { LeadForm } from '../components/LeadForm';
// Added CheckCircle to imports
import { TrendingUp, Target, Zap, Award, CheckCircle } from 'lucide-react';

export const Services: React.FC = () => {
  const faqItems = [
    {
      question: "O site será meu ou pagarei aluguel?",
      answer: "O site é 100% seu. Diferente de plataformas de aluguel, nós desenvolvemos o projeto e entregamos a propriedade total a você. Sem mensalidades abusivas."
    },
    {
      question: "Qual o impacto real no meu faturamento?",
      answer: "Nossos projetos registram historicamente um aumento de visibilidade orgânica entre 300% e 1900% nos primeiros 12 meses, o que se traduz em um volume constante de novos leads e orçamentos."
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="bg-brand-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary opacity-5 transform -skew-y-6 translate-y-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-6 animate-slide-up">Nossas Soluções Digitais</h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Não criamos apenas sites. Construímos máquinas de vendas capazes de gerar um <strong>crescimento de até 1900%</strong> na sua presença online.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        
        {/* Highlight Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-20 -mt-24 relative z-20">
           {[
             { icon: <TrendingUp className="text-green-500" />, title: "+1900% Visibilidade", desc: "Performance de SEO Local" },
             { icon: <Zap className="text-brand-accent" />, title: "Entrega 48h", desc: "Agilidade absoluta" },
             { icon: <Target className="text-red-500" />, title: "Foco em Leads", desc: "Conversão garantida" },
             { icon: <Award className="text-blue-500" />, title: "Nota 5 Estrelas", desc: "Google My Business" },
           ].map((card, i) => (
             <div key={i} className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
               <div className="mb-4">{card.icon}</div>
               <h3 className="font-black text-brand-dark mb-1">{card.title}</h3>
               <p className="text-xs text-gray-500 uppercase font-bold">{card.desc}</p>
             </div>
           ))}
        </div>

        <div className="space-y-20">
          {/* Detailed Service blocks keep their structure but content is refined for the 300-1900% range */}
          <div className="flex flex-col lg:flex-row items-center gap-16 animate-slide-up">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-primary/10 rounded-2xl blur-2xl"></div>
                <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800" alt="SEO e Sites" className="relative rounded-2xl shadow-2xl" />
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 block">Estratégia Dominante</span>
              <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-6 leading-tight">Otimização SEO Local & Performance</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Nossa especialidade é colocar sua empresa no topo do Google em tempo recorde. Implementamos técnicas de <strong>SEO Avançado</strong> que garantem resultados exponenciais. Empresas de Curitiba e região registraram saltos de <span className="bg-yellow-100 px-1 font-bold">1900% na visibilidade</span> logo após a migração para nossa infraestrutura.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                 <li className="flex items-center gap-2 font-bold text-gray-700"><CheckCircle className="text-green-500" size={18}/> Keyword Research Local</li>
                 <li className="flex items-center gap-2 font-bold text-gray-700"><CheckCircle className="text-green-500" size={18}/> Google Meu Negócio Pro</li>
                 <li className="flex items-center gap-2 font-bold text-gray-700"><CheckCircle className="text-green-500" size={18}/> Link Building Regional</li>
                 <li className="flex items-center gap-2 font-bold text-gray-700"><CheckCircle className="text-green-500" size={18}/> Schema Markup Avançado</li>
              </ul>
              <a href="https://wa.me/5541987001004" className="inline-flex items-center gap-2 bg-brand-dark text-white font-bold py-4 px-8 rounded-xl hover:bg-brand-primary transition-colors shadow-lg">
                Falar com Especialista SEO
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
