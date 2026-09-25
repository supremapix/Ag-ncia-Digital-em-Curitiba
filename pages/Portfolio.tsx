import React, { useState, useMemo, useEffect } from 'react';
import { 
  Building2, Scale, Utensils, Car, Home as HomeIcon, ShoppingBag, Factory, Smartphone, 
  Receipt, Hotel, Wrench, Droplet, Blinds, HardHat, GraduationCap, Dumbbell, Bot, Cpu, 
  Search, Filter, ArrowUpRight, CheckCircle2, Sparkles, Layers, ShieldCheck, Zap, Globe
} from 'lucide-react';
import { LeadForm } from '../components/LeadForm';
import { TypewriterText } from '../src/components/TypewriterText';
import { PERSUASIVE_PHRASES } from '../src/constants/phrases';

interface PortfolioProject {
  id: string;
  title: string;
  category: 'site' | 'ecommerce' | 'sistema' | 'app' | 'ia';
  categoryLabel: string;
  segment: string;
  city: string;
  iconType: string;
  technologies: string[];
  goal: string;
  services: string[];
  growth: string;
  featured?: boolean;
}

const portfolioProjects: PortfolioProject[] = [
  {
    id: '1',
    title: 'Car Plus Pneus & Oficina Express',
    category: 'site',
    categoryLabel: 'Site Profissional + Ads',
    segment: 'Auto Center & Mecânica',
    city: 'Curitiba - PR',
    iconType: 'car',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Google Ads API', 'WhatsApp Bot'],
    goal: 'Captar clientes em busca urgente de troca de pneus e mecânica na grande Curitiba.',
    services: ['Landing Page de Alta Conversão', 'SEO Local no Google Maps', 'Campanhas de Google Ads', 'Integração WhatsApp Direct'],
    growth: '+1350% de Leads',
    featured: true
  },
  {
    id: '2',
    title: 'Clínica Odontológica Prodent',
    category: 'site',
    categoryLabel: 'Site Institucional + Sistema',
    segment: 'Clínica & Saúde',
    city: 'Curitiba - PR',
    iconType: 'clinic',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'SEO Semântico', 'Schema.org'],
    goal: 'Digitalizar agendamento de consultas e posicionar a clínica no topo do Google Batel/Rebouças.',
    services: ['Portal da Clínica', 'Sistema de Agendamento Online', 'SEO Local para Dentistas', 'Branding Digital'],
    growth: '+420% Agendamentos',
    featured: true
  },
  {
    id: '3',
    title: 'Cicarelli & Associados Advogados',
    category: 'site',
    categoryLabel: 'Site de Autoridade Corporate',
    segment: 'Advocacia & Jurídico',
    city: 'Curitiba - PR',
    iconType: 'law',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Schema Speakable', 'Cloudflare SSL'],
    goal: 'Transmitir máxima credibilidade jurídica e captar causas corporativas B2B no Paraná.',
    services: ['Design UI/UX Luxo', 'Arquitetura de Conteúdo Jurídico', 'SEO Semântico', 'Formulário Criptografado'],
    growth: '+330% Consultas B2B'
  },
  {
    id: '4',
    title: 'Gouveia Imóveis Selecionados',
    category: 'sistema',
    categoryLabel: 'Sistema Web + Portal',
    segment: 'Imobiliária',
    city: 'Curitiba & Litoral - PR',
    iconType: 'realestate',
    technologies: ['React', 'Next.js', 'PostgreSQL', 'Faceted Search API', 'WhatsApp CRM'],
    goal: 'Plataforma completa para gestão de imóveis de alto padrão com busca inteligente por bairro.',
    services: ['Portal Imobiliário Responsivo', 'Sistema CRM Interno para Corretores', 'Otimização de Fotos & WebP', 'Mapeamento Geográfico'],
    growth: '+340% Negócios Fechados',
    featured: true
  },
  {
    id: '5',
    title: 'Ateliê Beleza & Estética VIP',
    category: 'app',
    categoryLabel: 'Aplicativo Web / PWA',
    segment: 'Beleza & Estética',
    city: 'Joinville - SC',
    iconType: 'beauty',
    technologies: ['React Native Web', 'PWA', 'Tailwind', 'Push Notifications', 'Pix Payments'],
    goal: 'Aplicativo para agendamento de horários, notificações de retorno e pagamento via Pix.',
    services: ['Aplicativo PWA sem instalação', 'Painel da Cabeleireira/Esteticista', 'Confirmação Automática por WhatsApp', 'Gestão de Fidelidade'],
    growth: '+1450% Retenção'
  },
  {
    id: '6',
    title: 'Desentope ADP 24h Express',
    category: 'site',
    categoryLabel: 'Landing Page de Emergência',
    segment: 'Desentupidora & Serviços 24h',
    city: 'Curitiba, Pinhais & São José - PR',
    iconType: 'drain',
    technologies: ['React', 'Vite', 'Google Ads Call API', 'Core Web Vitals 100', 'GeoLocation API'],
    goal: 'Dominar o mercado de chamados de emergência 24h com atendimento em até 15 minutos.',
    services: ['Landing Page Ultra-Rápida (<1s)', 'Geo-direcionamento por Bairro', 'Botão de Ligação Direta', 'Gestão de Google Ads Agressivo'],
    growth: '+1750% Chamados 24h',
    featured: true
  },
  {
    id: '7',
    title: 'RVM Persianas & Decoração Premium',
    category: 'ecommerce',
    categoryLabel: 'Loja Virtual Customizada',
    segment: 'Persianas & Decoração',
    city: 'Blumenau - SC & Curitiba - PR',
    iconType: 'blinds',
    technologies: ['React', 'Node.js', 'MercadoPago SDK', 'Calculadora de Medidas Custom', 'SEO E-commerce'],
    goal: 'Venda de persianas sob medida online com simulador de preço por metro quadrado.',
    services: ['E-commerce sob medida', 'Calculadora dinâmica de m²', 'Integração com Frete e Correios', 'SEO para Decoração'],
    growth: '+950% Vendas Nacionais'
  },
  {
    id: '8',
    title: 'Agro Arkafla Global',
    category: 'site',
    categoryLabel: 'Portal B2B Internacional',
    segment: 'Agronegócio',
    city: 'Maringá & Londrina - PR',
    iconType: 'agro',
    technologies: ['React', 'TypeScript', 'i18n Multilingual', 'Tailwind CSS', 'Schema.org'],
    goal: 'Conectar produtores de grãos e commodities ao mercado de exportação em inglês e português.',
    services: ['Design Institucional Internacional', 'Versão Multilíngue (PT/EN)', 'Catálogo de Grãos e Fertilizantes', 'Formulário de Cotação B2B'],
    growth: '+380% Contratos de Exportação'
  },
  {
    id: '9',
    title: 'SmartERP para Clínicas & Oftalmo',
    category: 'sistema',
    categoryLabel: 'Sistema Web ERP / CRM',
    segment: 'Sistema para Clínicas',
    city: 'Porto Alegre - RS',
    iconType: 'system',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'REST API', 'Prontuário Eletrônico'],
    goal: 'Sistema corporativo de gestão médica, prontuário eletrônico e faturamento TISS/TUSS.',
    services: ['Desenvolvimento de ERP sob medida', 'Painel Administrativo Completo', 'Módulo Financeiro e DRE', 'Certificação Digital ICP-Brasil'],
    growth: '100% Eficiência Operacional',
    featured: true
  },
  {
    id: '10',
    title: 'Assistência Técnica Shop Cell',
    category: 'ecommerce',
    categoryLabel: 'Loja Virtual + Orçamento',
    segment: 'Assistência Técnica & Eletrônicos',
    city: 'Curitiba - PR',
    iconType: 'tech',
    technologies: ['React', 'Node.js', 'WooCommerce API Sync', 'PagSeguro', 'WhatsApp CRM'],
    goal: 'Venda de peças de reposição e agendamento de conserto de smartphones e Xiaomi.',
    services: ['E-commerce de Eletrônicos', 'Consulta de Status de Conserto Online', 'Integração Pix Automático', 'SEO para Xiaomi/iPhone'],
    growth: '+890% Faturamento Online'
  },
  {
    id: '11',
    title: 'Agente de IA para Atendimento WhatsApp',
    category: 'ia',
    categoryLabel: 'Agente de IA Empresarial',
    segment: 'Inteligência Artificial & Automação',
    city: 'Atendimento Nacional',
    iconType: 'ai',
    technologies: ['Gemini 1.5 Flash API', 'Python', 'Node.js', 'WhatsApp Business API', 'Vector DB'],
    goal: 'Agente inteligente 24/7 capaz de qualificar leads, agendar reuniões e responder dúvidas com linguagem natural.',
    services: ['Desenvolvimento de Agente de IA', 'Treinamento de LLM com dados da empresa', 'Integração WhatsApp & CRM', 'Dashboard de Métricas de Conversão'],
    growth: '98% Resposta Instantânea',
    featured: true
  },
  {
    id: '12',
    title: 'App Delivery & Cardápio Restaurante Sabor',
    category: 'app',
    categoryLabel: 'Aplicativo Mobile iOS & Android',
    segment: 'Restaurante & Gastronomia',
    city: 'Florianópolis - SC',
    iconType: 'restaurant',
    technologies: ['React Native', 'Flutter', 'Firebase Realtime', 'iFood API Integration', 'Pix QR Code'],
    goal: 'Aplicativo de delivery próprio eliminando comissões abusivas de plataformas terceiras.',
    services: ['Aplicativo Android e iPhone', 'Cardápio Digital com Fotos HD', 'Painel da Cozinha em Tempo Real', 'Programa de Fidelidade Cashback'],
    growth: 'Zero Comissões 3.000 pedidos/mês'
  },
  {
    id: '13',
    title: 'Pousada Vila d Italia',
    category: 'site',
    categoryLabel: 'Site com Reserva Direta',
    segment: 'Hotelaria & Turismo',
    city: 'Gramado - RS & Litoral',
    iconType: 'hotel',
    technologies: ['React', 'Tailwind CSS', 'Engine de Reservas', 'Stripe Payments', 'Weather API'],
    goal: 'Aumentar reservas diretas sem comissão para Booking ou Airbnb.',
    services: ['Website com Galeria Imersiva 360°', 'Motor de Reservas em Tempo Real', 'Integração de Pagamento de Diárias', 'SEO para Turismo no Sul'],
    growth: '+480% Reservas Diretas'
  },
  {
    id: '14',
    title: 'Engenharia do Paver & Pavimentação',
    category: 'site',
    categoryLabel: 'Site B2B Industrial',
    segment: 'Construção Civil & Engenharia',
    city: 'Curitiba & Ponta Grossa - PR',
    iconType: 'construction',
    technologies: ['React', 'Vite', 'SEO B2B', 'Calculadora de M² de Paver', 'Cloudflare'],
    goal: 'Atrair construtoras, condomínios e prefeituras para obras de pavimentação intertravada.',
    services: ['Site Corporativo B2B', 'Calculadora de Orçamento por M²', 'SEO para Obras e Engenharia', 'Apresentação Institucional'],
    growth: '+620% Cotações de Grandes Obras'
  },
  {
    id: '15',
    title: 'Escola Modelo de Ensino',
    category: 'site',
    categoryLabel: 'Portal Educacional + Matrículas',
    segment: 'Educação & Escola',
    city: 'Caxias do Sul - RS',
    iconType: 'school',
    technologies: ['React', 'Node.js', 'Portal do Aluno Integration', 'Tailwind', 'Accessibility WCAG'],
    goal: 'Aumentar matrículas escolares para o novo ano letivo e agendamento de visitas à escola.',
    services: ['Portal Educacional Acessível', 'Formulário de Pré-Matrícula', 'Agendamento de Visita Guiada', 'Galeria de Ambientes e Fotos'],
    growth: '+310% Matrículas Antecipadas'
  },
  {
    id: '16',
    title: 'CrossFit & Academia PowerFit',
    category: 'app',
    categoryLabel: 'Web App + Check-in',
    segment: 'Academia & Fitness',
    city: 'Londrina - PR',
    iconType: 'fitness',
    technologies: ['React', 'Firebase', 'PWA', 'QR Code Check-in', 'Stripe Subscriptions'],
    goal: 'Permitir check-in de aulas, renovação de planos de musculação e treino no celular.',
    services: ['Aplicativo de Treino e Check-in', 'Pagamento de Mensalidade Recorrente', 'Ranking de Desempenho de Alunos', 'SEO Local de Fitness'],
    growth: '+590% Alunos Ativos'
  }
];

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    document.title = "Portfólio de Sites, Sistemas, Aplicativos e IA | Suprema Sites Express";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Conheça o portfólio da Suprema Sites Express: Projetos reais de Sites Profissionais, Lojas Virtuais, Sistemas Web (ERP/CRM), Aplicativos Android/iOS e Agentes de IA no Sul do Brasil.");
    }
  }, []);

  const filteredProjects = useMemo(() => {
    return portfolioProjects.filter(project => {
      const matchesCategory = selectedCategory === 'todos' || project.category === selectedCategory;
      const matchesSearch = searchQuery === '' || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.segment.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const renderSegmentIcon = (iconType: string) => {
    const iconClass = "w-10 h-10 text-brand-primary group-hover:text-brand-accent transition-colors";
    switch (iconType) {
      case 'car': return <Car className={iconClass} />;
      case 'clinic': return <Building2 className={iconClass} />;
      case 'law': return <Scale className={iconClass} />;
      case 'realestate': return <HomeIcon className={iconClass} />;
      case 'beauty': return <Sparkles className={iconClass} />;
      case 'drain': return <Droplet className={iconClass} />;
      case 'blinds': return <Blinds className={iconClass} />;
      case 'agro': return <Factory className={iconClass} />;
      case 'system': return <Cpu className={iconClass} />;
      case 'tech': return <Wrench className={iconClass} />;
      case 'ai': return <Bot className={iconClass} />;
      case 'restaurant': return <Utensils className={iconClass} />;
      case 'hotel': return <Hotel className={iconClass} />;
      case 'construction': return <HardHat className={iconClass} />;
      case 'school': return <GraduationCap className={iconClass} />;
      case 'fitness': return <Dumbbell className={iconClass} />;
      default: return <Globe className={iconClass} />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden bg-brand-dark text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 via-brand-dark to-purple-900/20 opacity-80"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full text-brand-accent text-xs font-black uppercase tracking-[0.25em] mb-6">
            <Sparkles size={14} /> Portfólio de Alta Performance e Engenharia Digital
          </span>
          <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter leading-tight">
            Cases de Sucesso em <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-amber-300 to-brand-primary">
              Sites, Sistemas, Apps & IA
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

          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Sem capturas genéricas. Cada projeto abaixo representa uma arquitetura completa desenhada para empresas que exigem velocidade, ranqueamento orgânico no Google e conversão real de receita.
          </p>

          {/* Quick Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm">
              <span className="block text-2xl md:text-4xl font-black text-amber-400">+3.800</span>
              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Projetos Entregues</span>
            </div>
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm">
              <span className="block text-2xl md:text-4xl font-black text-blue-400">48 Horas</span>
              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Entrega Expressa</span>
            </div>
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm">
              <span className="block text-2xl md:text-4xl font-black text-green-400">Core Web Vitals</span>
              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Nota 95-100 Google</span>
            </div>
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm">
              <span className="block text-2xl md:text-4xl font-black text-purple-400">100% Sul do BR</span>
              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Atendimento Regional</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-[72px] z-30 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Category Filter Buttons */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-start">
              {[
                { id: 'todos', label: 'Todos os Projetos' },
                { id: 'site', label: '🌐 Sites Profissionais' },
                { id: 'ecommerce', label: '🛒 Lojas Virtuais' },
                { id: 'sistema', label: '⚙ Sistemas Web / ERP' },
                { id: 'app', label: '📱 Aplicativos Mobile' },
                { id: 'ia', label: '🤖 Agentes de IA' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                    selectedCategory === tab.id
                      ? 'bg-brand-dark text-white shadow-lg shadow-brand-dark/20 scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Buscar por segmento, cidade ou tecnologia..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold text-brand-dark focus:bg-white focus:outline-none focus:border-brand-primary transition-all"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Projects Display Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-xl font-black text-brand-dark tracking-tight">
              Mostrando <span className="text-brand-primary">{filteredProjects.length}</span> projetos encontrados
            </h2>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1">
              <ShieldCheck size={14} className="text-green-500" /> Ícones Vetoriais Interativos (Zero Print Genérico)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:border-brand-primary/30 transition-all duration-500 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Background Glow Effect on Hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-2xl group-hover:bg-brand-primary/15 transition-all"></div>

                <div>
                  {/* Top Badge Row */}
                  <div className="flex justify-between items-start mb-6 gap-2">
                    <div className="p-4 bg-brand-primary/10 rounded-2xl border border-brand-primary/20 group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                      {renderSegmentIcon(project.iconType)}
                    </div>
                    
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-amber-50 border border-amber-200 text-amber-700 text-[10px] font-black rounded-lg uppercase tracking-wider mb-1">
                        {project.growth}
                      </span>
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block">
                        📍 {project.city}
                      </div>
                    </div>
                  </div>

                  {/* Title & Category */}
                  <span className="text-xs font-black uppercase tracking-widest text-brand-primary mb-1 block">
                    {project.categoryLabel}
                  </span>
                  <h3 className="text-2xl font-black text-brand-dark mb-3 tracking-tight group-hover:text-brand-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Goal Paragraph */}
                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 mb-6">
                    <span className="text-[10px] font-black uppercase text-gray-400 tracking-wider block mb-1">🎯 Objetivo do Projeto:</span>
                    <p className="text-xs text-gray-600 font-medium leading-relaxed">
                      {project.goal}
                    </p>
                  </div>

                  {/* Services List */}
                  <div className="mb-6 space-y-2">
                    <span className="text-[10px] font-black uppercase text-gray-400 tracking-wider block mb-2">⚡ Serviços Realizados:</span>
                    {project.services.map((service, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-bold text-gray-700">
                        <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Technologies Badges */}
                <div className="pt-6 border-t border-gray-100 mt-auto">
                  <span className="text-[10px] font-black uppercase text-gray-400 tracking-wider block mb-2">🛠 Tecnologias Utilizadas:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-[10px] font-bold bg-brand-dark/5 text-brand-dark border border-brand-dark/10 px-2.5 py-1 rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a 
                    href="https://wa.me/5541992721004"
                    className="mt-6 w-full py-3 bg-brand-dark hover:bg-brand-primary text-white text-xs font-black rounded-xl uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md"
                  >
                    Quero um Projeto Similar <ArrowUpRight size={14} />
                  </a>
                </div>

              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
              <Bot className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-black text-brand-dark mb-2">Nenhum projeto encontrado</h3>
              <p className="text-gray-500 text-sm">Tente ajustar a busca ou trocar o filtro selecionado.</p>
            </div>
          )}

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 md:p-16 backdrop-blur-xl flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <span className="text-amber-400 text-xs font-black uppercase tracking-[0.3em] mb-4 block">
                Pronto para ser a próxima referência do seu setor?
              </span>
              <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">
                Transforme sua Ideia em um <span className="text-brand-primary">Ativo Digital</span> de Alto Retorno.
              </h2>
              <p className="text-gray-300 text-base leading-relaxed mb-8 font-medium">
                Sua empresa merece mais que um modelo pronto. Desenvolvemos sites, sistemas web, aplicativos e integrações com Inteligência Artificial que geram resultados imediatos.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://wa.me/5541992721004" 
                  className="shimmer-btn text-brand-dark font-black px-8 py-4 rounded-2xl text-lg shadow-2xl transition-all"
                >
                  Solicitar Proposta Grátis
                </a>
              </div>
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
