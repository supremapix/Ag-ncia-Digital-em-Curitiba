import React, { useEffect, useState } from 'react';
import { 
  Globe, ShoppingCart, Smartphone, Cpu, Bot, TrendingUp, CheckCircle, 
  ArrowRight, Shield, Zap, Sparkles, Phone, Code, BarChart, Layers, Database, MessageSquare
} from 'lucide-react';
import { LeadForm } from '../components/LeadForm';
import { TypewriterText } from '../src/components/TypewriterText';
import { PERSUASIVE_PHRASES } from '../src/constants/phrases';

export const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('todos');

  useEffect(() => {
    document.title = "Serviços: Criação de Sites, Sistemas Web (ERP/CRM), Apps e IA | Suprema Sites Express";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Conheça todos os serviços da Suprema Sites Express: Criação de Sites Profissionais, Lojas Virtuais, Sistemas Web (ERP/CRM), Aplicativos Android/iOS, Agentes de IA e SEO Local.");
    }
  }, []);

  const serviceCategories = [
    { id: 'todos', label: 'Todos os Serviços' },
    { id: 'sites', label: '🌐 Sites & Landing Pages' },
    { id: 'sistemas', label: '⚙ Sistemas Web & ERP/CRM' },
    { id: 'apps', label: '📱 Aplicativos Android/iOS' },
    { id: 'ia', label: '🤖 IA & Automação WhatsApp' },
    { id: 'ecommerce', label: '🛒 Lojas Virtuais' },
    { id: 'seo', label: '📈 SEO & Google Maps' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-brand-dark text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-brand-dark to-purple-900/30 opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-brand-accent text-xs font-black uppercase tracking-[0.25em] mb-6 border border-white/10">
            <Sparkles size={14} /> Soluções Digitais de Alta Performance
          </span>
          <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter leading-tight">
            Engenharia de Software, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300">
              Sites, Sistemas & Inteligência Artificial
            </span>
          </h1>
          
          <div className="min-h-[50px] mb-8">
            <TypewriterText 
              phrases={PERSUASIVE_PHRASES}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed"
              speed={40}
              delay={3000}
            />
          </div>

          <p className="text-sm md:text-base text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            Da criação de sites institucionais expressos em 48 horas ao desenvolvimento de ERPs e Agentes de IA customizados. Atendemos empresas de todos os portes no Sul do Brasil e em todo o país.
          </p>

          <div className="flex justify-center gap-4">
            <a 
              href="https://wa.me/5541987001004" 
              className="shimmer-btn text-brand-dark font-black px-8 py-4 rounded-2xl text-base shadow-2xl flex items-center gap-2"
            >
              <Phone size={18} /> Falar com Consultor Técnico
            </a>
          </div>
        </div>
      </section>

      {/* Services Filter Bar */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-[72px] z-30 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {serviceCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                  activeTab === cat.id
                    ? 'bg-brand-primary text-white shadow-md shadow-brand-primary/20 scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 space-y-16">

          {/* Service Block: Sites Profissionais & Landing Pages */}
          {(activeTab === 'todos' || activeTab === 'sites') && (
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 bg-blue-50 text-brand-primary rounded-2xl flex items-center justify-center mb-6">
                    <Globe size={32} />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-brand-primary block mb-2">Presença Digital Premium</span>
                  <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-4 tracking-tight">
                    Criação de Sites Profissionais e Landing Pages
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Desenvolvemos sites institucionais, portais corporativos e landing pages otimizadas com foco em conversão e velocidade extrema. Entrega recorde em até 48 horas úteis.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    <div className="flex items-center gap-2 font-bold text-xs text-gray-700"><CheckCircle size={16} className="text-emerald-500 shrink-0"/> Design UX/UI Exclusivo</div>
                    <div className="flex items-center gap-2 font-bold text-xs text-gray-700"><CheckCircle size={16} className="text-emerald-500 shrink-0"/> Core Web Vitals Nota 100</div>
                    <div className="flex items-center gap-2 font-bold text-xs text-gray-700"><CheckCircle size={16} className="text-emerald-500 shrink-0"/> Integração com WhatsApp Direct</div>
                    <div className="flex items-center gap-2 font-bold text-xs text-gray-700"><CheckCircle size={16} className="text-emerald-500 shrink-0"/> Formulários Criptografados</div>
                  </div>
                  <a href="https://wa.me/5541987001004" className="inline-flex items-center gap-2 bg-brand-dark hover:bg-brand-primary text-white text-xs font-black py-4 px-8 rounded-xl transition-all">
                    Solicitar Site Profissional <ArrowRight size={16}/>
                  </a>
                </div>
                <div className="lg:w-1/2 bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <h3 className="text-lg font-black text-brand-dark mb-4">Tipos de Sites que Desenvolvemos:</h3>
                  <ul className="space-y-4 text-xs font-medium text-gray-600">
                    <li className="p-3 bg-white rounded-xl border border-gray-100 font-bold text-brand-dark">✔ Sites para Médicos, Clínicas e Consultórios</li>
                    <li className="p-3 bg-white rounded-xl border border-gray-100 font-bold text-brand-dark">✔ Sites para Escritórios de Advocacia & Contabilidade</li>
                    <li className="p-3 bg-white rounded-xl border border-gray-100 font-bold text-brand-dark">✔ Sites para Imobiliárias, Construtoras & Engenharia</li>
                    <li className="p-3 bg-white rounded-xl border border-gray-100 font-bold text-brand-dark">✔ Sites para Restaurantes, Hotéis & Pousadas</li>
                    <li className="p-3 bg-white rounded-xl border border-gray-100 font-bold text-brand-dark">✔ Landing Pages para Lançamentos & Tráfego Pago</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Service Block: Desenvolvimento de Sistemas Web (ERP / CRM) */}
          {(activeTab === 'todos' || activeTab === 'sistemas') && (
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                    <Cpu size={32} />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-indigo-600 block mb-2">Software House Sob Medida</span>
                  <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-4 tracking-tight">
                    Sistemas Web, ERPs & CRMs Personalizados
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Sistemas sob medida para gerenciar suas operações comerciais, financeiras e de clientes sem as limitações de softwares engessados de prateleira.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    <div className="flex items-center gap-2 font-bold text-xs text-gray-700"><CheckCircle size={16} className="text-emerald-500 shrink-0"/> Módulo Financeiro & DRE</div>
                    <div className="flex items-center gap-2 font-bold text-xs text-gray-700"><CheckCircle size={16} className="text-emerald-500 shrink-0"/> Controle de Estoque & NF-e</div>
                    <div className="flex items-center gap-2 font-bold text-xs text-gray-700"><CheckCircle size={16} className="text-emerald-500 shrink-0"/> Funil de Vendas CRM</div>
                    <div className="flex items-center gap-2 font-bold text-xs text-gray-700"><CheckCircle size={16} className="text-emerald-500 shrink-0"/> Dashboards BI & Relatórios</div>
                  </div>
                  <a href="https://wa.me/5541987001004" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-brand-dark text-white text-xs font-black py-4 px-8 rounded-xl transition-all">
                    Orçar Sistema Sob Medida <ArrowRight size={16}/>
                  </a>
                </div>
                <div className="lg:w-1/2 bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <h3 className="text-lg font-black text-brand-dark mb-4">Sistemas Especializados por Setor:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-gray-700">
                    <div className="p-3 bg-white rounded-xl border border-gray-100">⚙ ERP para Indústrias</div>
                    <div className="p-3 bg-white rounded-xl border border-gray-100">🏥 Sistema para Clínicas</div>
                    <div className="p-3 bg-white rounded-xl border border-gray-100">🚗 Sistema para Oficinas</div>
                    <div className="p-3 bg-white rounded-xl border border-gray-100">🏠 CRM para Imobiliárias</div>
                    <div className="p-3 bg-white rounded-xl border border-gray-100">🍕 Sistema para Restaurantes</div>
                    <div className="p-3 bg-white rounded-xl border border-gray-100">🛠 Sistema para Prestadores</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Service Block: Aplicativos Mobile (Android & iOS) */}
          {(activeTab === 'todos' || activeTab === 'apps') && (
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                    <Smartphone size={32} />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-purple-600 block mb-2">Mobile First</span>
                  <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-4 tracking-tight">
                    Desenvolvimento de Aplicativos Android & iOS
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Criamos aplicativos de alto desempenho com React Native e Flutter, cobrindo todo o ciclo desde o protótipo até a aprovação na Google Play Store e Apple App Store.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    <div className="flex items-center gap-2 font-bold text-xs text-gray-700"><CheckCircle size={16} className="text-emerald-500 shrink-0"/> Publicação Completa nas Lojas</div>
                    <div className="flex items-center gap-2 font-bold text-xs text-gray-700"><CheckCircle size={16} className="text-emerald-500 shrink-0"/> Notificações Push</div>
                    <div className="flex items-center gap-2 font-bold text-xs text-gray-700"><CheckCircle size={16} className="text-emerald-500 shrink-0"/> Pagamentos com Pix e Cartão</div>
                    <div className="flex items-center gap-2 font-bold text-xs text-gray-700"><CheckCircle size={16} className="text-emerald-500 shrink-0"/> Modo Offline & Sincronização</div>
                  </div>
                  <a href="https://wa.me/5541987001004" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-brand-dark text-white text-xs font-black py-4 px-8 rounded-xl transition-all">
                    Solicitar Projeto de App <ArrowRight size={16}/>
                  </a>
                </div>
                <div className="lg:w-1/2 bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <h3 className="text-lg font-black text-brand-dark mb-4">Soluções Mobile Frequentes:</h3>
                  <ul className="space-y-3 text-xs font-bold text-gray-700">
                    <li className="p-3 bg-white rounded-xl border border-gray-100">📱 Apps de Delivery e Cardápio Próprio</li>
                    <li className="p-3 bg-white rounded-xl border border-gray-100">📱 Apps de Agendamento e Serviços 24h</li>
                    <li className="p-3 bg-white rounded-xl border border-gray-100">📱 Apps de Rastreamento de Frotas & Logística</li>
                    <li className="p-3 bg-white rounded-xl border border-gray-100">📱 PWAs Ultra-Leves sem necessidade de download</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Service Block: IA Empresarial & Agentes Inteligentes */}
          {(activeTab === 'todos' || activeTab === 'ia') && (
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                    <Bot size={32} />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-emerald-600 block mb-2">Inteligência Artificial Aplicada</span>
                  <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-4 tracking-tight">
                    Agentes de IA Empresarial & Automação WhatsApp
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Incorpore modelos de Inteligência Artificial avançados no atendimento ao cliente da sua empresa. Agentes virtuais capazes de negociar, esclarecer dúvidas e agendar vendas 24h por dia.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    <div className="flex items-center gap-2 font-bold text-xs text-gray-700"><CheckCircle size={16} className="text-emerald-500 shrink-0"/> Respostas Humanizadas em Tempo Real</div>
                    <div className="flex items-center gap-2 font-bold text-xs text-gray-700"><CheckCircle size={16} className="text-emerald-500 shrink-0"/> Qualificação Automática de Leads</div>
                    <div className="flex items-center gap-2 font-bold text-xs text-gray-700"><CheckCircle size={16} className="text-emerald-500 shrink-0"/> Treinamento com Base de Conhecimento</div>
                    <div className="flex items-center gap-2 font-bold text-xs text-gray-700"><CheckCircle size={16} className="text-emerald-500 shrink-0"/> Integração com CRM & Google Calendar</div>
                  </div>
                  <a href="https://wa.me/5541987001004" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-brand-dark text-white text-xs font-black py-4 px-8 rounded-xl transition-all">
                    Conhecer Agentes de IA <ArrowRight size={16}/>
                  </a>
                </div>
                <div className="lg:w-1/2 bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <h3 className="text-lg font-black text-brand-dark mb-4">Aplicações de IA para Empresas:</h3>
                  <ul className="space-y-3 text-xs font-bold text-gray-700">
                    <li className="p-3 bg-white rounded-xl border border-gray-100">🤖 Chatbots de Vendas Ativos no WhatsApp</li>
                    <li className="p-3 bg-white rounded-xl border border-gray-100">🤖 Assistentes Virtuais de Suporte Nível 1</li>
                    <li className="p-3 bg-white rounded-xl border border-gray-100">🤖 Análise Preditiva e Triagem de Orçamentos</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Service Block: Lojas Virtuais / E-commerce */}
          {(activeTab === 'todos' || activeTab === 'ecommerce') && (
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                    <ShoppingCart size={32} />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-amber-600 block mb-2">E-commerce de Alta Conversão</span>
                  <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-4 tracking-tight">
                    Lojas Virtuais e E-commerce Otimizado
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Plataformas de vendas online construídas com checkout transparente, integração com gateways brasileiros (MercadoPago, PagSeguro, Asaas) e cálculo instantâneo de frete com Melhor Envio e Correios.
                  </p>
                  <a href="https://wa.me/5541987001004" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-brand-dark text-brand-dark hover:text-white text-xs font-black py-4 px-8 rounded-xl transition-all">
                    Criar Minha Loja Virtual <ArrowRight size={16}/>
                  </a>
                </div>
                <div className="lg:w-1/2 bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <h3 className="text-lg font-black text-brand-dark mb-4">Diferenciais da Nossa Loja Virtual:</h3>
                  <ul className="space-y-3 text-xs font-bold text-gray-700">
                    <li className="p-3 bg-white rounded-xl border border-gray-100">🛒 Checkout em 1 Clique sem cadastro cansativo</li>
                    <li className="p-3 bg-white rounded-xl border border-gray-100">🛒 Integração Pix com aprovação imediata</li>
                    <li className="p-3 bg-white rounded-xl border border-gray-100">🛒 Otimização SEO para cadastros no Google Shopping</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Service Block: SEO Local & LLM SEO */}
          {(activeTab === 'todos' || activeTab === 'seo') && (
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm hover:shadow-xl transition-all">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                    <TrendingUp size={32} />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-red-600 block mb-2">Dominância em Mecanismos de Busca</span>
                  <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-4 tracking-tight">
                    SEO Local, Google Maps & LLM SEO (IAs)
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Estratégias de ranqueamento semântico que posicionam sua empresa em primeiro lugar no Google Meu Negócio e preparam sua presença para buscas em inteligências artificiais como ChatGPT, Gemini e Copilot.
                  </p>
                  <a href="https://wa.me/5541987001004" className="inline-flex items-center gap-2 bg-red-600 hover:bg-brand-dark text-white text-xs font-black py-4 px-8 rounded-xl transition-all">
                    Dominar Buscas na Minha Cidade <ArrowRight size={16}/>
                  </a>
                </div>
                <div className="lg:w-1/2 bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <h3 className="text-lg font-black text-brand-dark mb-4">Serviços de SEO Especializado:</h3>
                  <ul className="space-y-3 text-xs font-bold text-gray-700">
                    <li className="p-3 bg-white rounded-xl border border-gray-100">📈 Gestão e Otimização do Google Meu Negócio</li>
                    <li className="p-3 bg-white rounded-xl border border-gray-100">📈 Marcação Completa em Dados Estruturados Schema.org</li>
                    <li className="p-3 bg-white rounded-xl border border-gray-100">📈 SEO para Centenas de Cidades e Bairros (Bairro SEO)</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="container mx-auto px-4">
          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <span className="text-amber-400 text-xs font-black uppercase tracking-[0.3em] mb-4 block">
                Pronto para começar seu projeto?
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 leading-tight">
                Receba uma Consultoria Gratuita via WhatsApp.
              </h2>
              <p className="text-gray-300 text-base leading-relaxed mb-8 font-medium">
                Avaliamos o perfil da sua empresa e indicamos a melhor solução técnica entre sites, sistemas web, aplicativos ou automação com Inteligência Artificial.
              </p>
              <a 
                href="https://wa.me/5541987001004" 
                className="shimmer-btn text-brand-dark font-black px-8 py-4 rounded-2xl text-lg shadow-2xl inline-block"
              >
                Falar com Engenheiro Digital
              </a>
            </div>
            <div className="lg:w-5/12 w-full">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
