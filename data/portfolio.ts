export interface PortfolioProject {
  id: string;
  image: string;
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

export const portfolioProjects: PortfolioProject[] = [
  {
    id: '1',
    image: '/cases/car-plus.png',
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
    image: '/cases/prodent.png',
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
    image: '/cases/cicarelli.png',
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
    image: '/cases/gouveia.png',
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
    image: '/cases/atelie-beleza.png',
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
    image: '/cases/desentope-adp.png',
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
    image: '/cases/rvm-persianas.png',
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
    image: '/cases/agro-arkafla.png',
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
    image: '/cases/smarterp.png',
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
    image: '/cases/shop-cell.png',
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
    image: '/cases/agente-ia.png',
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
    image: '/cases/restaurante-sabor.png',
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
    image: '/cases/pousada-vila-ditalia.png',
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
    image: '/cases/engenharia-paver.png',
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
    image: '/cases/escola-modelo.png',
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
    image: '/cases/powerfit.png',
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

