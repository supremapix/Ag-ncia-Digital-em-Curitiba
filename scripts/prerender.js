import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.log('Dist folder does not exist. Skipping prerender.');
  process.exit(0);
}

const templatePath = path.join(distDir, 'index.html');
if (!fs.existsSync(templatePath)) {
  console.log('dist/index.html not found. Skipping prerender.');
  process.exit(0);
}

const templateHtml = fs.readFileSync(templatePath, 'utf8');

// 1. Static main pages
const staticPages = [
  {
    path: '/',
    title: 'Suprema Sites Express | Criação de Sites Profissionais em Curitiba (48h)',
    description: 'Criamos sites profissionais, landing pages e e-commerce de alta performance em Curitiba e todo o Brasil com entrega em 48h. Solicite seu orçamento!',
    canonical: 'https://www.supremasite.com.br/'
  },
  {
    path: '/servicos',
    title: 'Serviços | Criação de Sites, Lojas Virtuais e SEO Local - Suprema Sites',
    description: 'Conheça nossos serviços de criação de sites express, e-commerce, landing pages de alta conversão, gestão de tráfego e SEO Local para negócios.',
    canonical: 'https://www.supremasite.com.br/servicos'
  },
  {
    path: '/portfolio',
    title: 'Portfólio de Sites | Projetos Entregues em 48h - Suprema Sites Express',
    description: 'Confira nosso portfólio com dezenas de sites profissionais, e-commerce e landing pages criadas para empresas de Curitiba, Paraná e todo o Sul.',
    canonical: 'https://www.supremasite.com.br/portfolio'
  },
  {
    path: '/sobre',
    title: 'Sobre a Suprema Mídia | Agência de Web Design e SEO em Curitiba',
    description: 'Saiba mais sobre a Suprema Sites Express. Agência com sede própria em Curitiba especializada em desenvolvimento web de alta performance.',
    canonical: 'https://www.supremasite.com.br/sobre'
  },
  {
    path: '/blog',
    title: 'Blog de SEO, Web Design e Vendas Online | Suprema Sites Express',
    description: 'Dicas práticas de SEO local, criação de sites em React, atração de clientes pelo Google Meu Negócio e estratégias de conversão para empresas.',
    canonical: 'https://www.supremasite.com.br/blog'
  },
  {
    path: '/contato',
    title: 'Contato | Fale com a Suprema Sites Express no WhatsApp',
    description: 'Entre em contato com a equipe da Suprema Sites Express. Atendimento rápido via WhatsApp (+55 41 99272-1004) ou e-mail supremamidiabatel@gmail.com.',
    canonical: 'https://www.supremasite.com.br/contato'
  },
  {
    path: '/mapa-do-site',
    title: 'Mapa do Site | Suprema Sites Express - Cobertura em 1.163 Cidades',
    description: 'Navegue pelo mapa do site da Suprema Sites Express e veja todas as cidades e bairros atendidos com criação de sites profissionais e SEO Local.',
    canonical: 'https://www.supremasite.com.br/mapa-do-site'
  },
  {
    path: '/privacidade',
    title: 'Política de Privacidade | Suprema Sites Express',
    description: 'Leia a nossa Política de Privacidade. Transparência no tratamento de dados e conformidade com a LGPD para nossos clientes.',
    canonical: 'https://www.supremasite.com.br/privacidade'
  },
  {
    path: '/sites-em-parana',
    title: 'Criação de Sites no Paraná (PR) | Todas as Cidades em 48h',
    description: 'Agência especializada em criação de sites profissionais, lojas virtuais e SEO local para todas as cidades do Paraná. Entrega rápida em 48h.',
    canonical: 'https://www.supremasite.com.br/sites-em-parana'
  },
  {
    path: '/sites-em-santa-catarina',
    title: 'Criação de Sites em Santa Catarina (SC) | Entrega em 48h',
    description: 'Agência especializada em criação de sites profissionais, e-commerce e SEO local para todas as cidades de Santa Catarina. Sites em React.',
    canonical: 'https://www.supremasite.com.br/sites-em-santa-catarina'
  },
  {
    path: '/sites-em-rio-grande-do-sul',
    title: 'Criação de Sites no Rio Grande do Sul (RS) | Entrega 48h',
    description: 'Agência especializada em criação de sites profissionais, lojas virtuais e SEO local para Porto Alegre, Caxias do Sul e todo o Rio Grande do Sul.',
    canonical: 'https://www.supremasite.com.br/sites-em-rio-grande-do-sul'
  },
  {
    path: '/bairros-curitiba',
    title: 'Criação de Sites nos Bairros de Curitiba (IPPUC) | 48h',
    description: 'Agência especializada em criação de sites profissionais e SEO Local nos 75 bairros oficiais de Curitiba e regiões metropolitana.',
    canonical: 'https://www.supremasite.com.br/bairros-curitiba'
  },
  {
    path: '/agencia-seo-curitiba',
    title: 'Agência de SEO em Curitiba | Consultoria & Otimização de Sites | Suprema',
    description: 'Especialistas em SEO em Curitiba. Estratégias de otimização de sites, SEO técnico, SEO Local e GEO/AIO para colocar sua empresa na primeira página do Google e em IA.',
    canonical: 'https://www.supremasite.com.br/agencia-seo-curitiba'
  },
  {
    path: '/agencia-marketing-digital-curitiba',
    title: 'Agência de Marketing Digital em Curitiba | Performance & SEO | Suprema',
    description: 'Agência de marketing digital em Curitiba. Estratégias integradas de SEO, tráfego pago, desenvolvimento de sites e inteligência artificial para empresas.',
    canonical: 'https://www.supremasite.com.br/agencia-marketing-digital-curitiba'
  },
  {
    path: '/google-ads-curitiba',
    title: 'Google Ads & Tráfego Pago em Curitiba | Agência de Mídia | Suprema',
    description: 'Gestão profissional de Google Ads e tráfego pago em Curitiba. Campanhas otimizadas na Rede de Pesquisa, Google Maps e Remarketing com foco em ROI.',
    canonical: 'https://www.supremasite.com.br/google-ads-curitiba'
  },
  {
    path: '/seo-local-curitiba',
    title: 'SEO Local & Google Maps em Curitiba | Google Meu Negócio | Suprema',
    description: 'Especialistas em SEO Local e Google Maps em Curitiba. Otimização do Google Meu Negócio, presença nos bairros e atração de clientes locais.',
    canonical: 'https://www.supremasite.com.br/seo-local-curitiba'
  },
  {
    path: '/ia-marketing-curitiba',
    title: 'IA, GEO & AIO em Curitiba | SEO para Inteligência Artificial | Suprema',
    description: 'Soluções de IA, GEO (Generative Engine Optimization) e AIO em Curitiba. Otimize sua empresa para aparecer em respostas do ChatGPT, Gemini e Perplexity.',
    canonical: 'https://www.supremasite.com.br/ia-marketing-curitiba'
  }
];

// Write static main pages
staticPages.forEach(route => {
  let html = templateHtml;
  html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
  
  if (html.includes('<meta name="description"')) {
    html = html.replace(/<meta name="description" content=".*?"\s*\/?>/, `<meta name="description" content="${route.description}" />`);
  } else {
    html = html.replace('</head>', `  <meta name="description" content="${route.description}" />\n</head>`);
  }

  if (html.includes('<link rel="canonical"')) {
    html = html.replace(/<link rel="canonical" href=".*?"\s*\/?>/, `<link rel="canonical" href="${route.canonical}" />`);
  } else {
    html = html.replace('</head>', `  <link rel="canonical" href="${route.canonical}" />\n</head>`);
  }

  // Update og/twitter tags
  html = html.replace(/<meta property="og:title" content=".*?"\s*\/?>/g, `<meta property="og:title" content="${route.title}" />`);
  html = html.replace(/<meta property="og:description" content=".*?"\s*\/?>/g, `<meta property="og:description" content="${route.description}" />`);
  html = html.replace(/<meta property="og:url" content=".*?"\s*\/?>/g, `<meta property="og:url" content="${route.canonical}" />`);
  html = html.replace(/<meta name="twitter:title" content=".*?"\s*\/?>/g, `<meta name="twitter:title" content="${route.title}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?"\s*\/?>/g, `<meta name="twitter:description" content="${route.description}" />`);
  html = html.replace(/<meta name="twitter:url" content=".*?"\s*\/?>/g, `<meta name="twitter:url" content="${route.canonical}" />`);

  const targetSubDir = route.path === '/' ? distDir : path.join(distDir, route.path.replace(/^\//, ''));
  if (!fs.existsSync(targetSubDir)) {
    fs.mkdirSync(targetSubDir, { recursive: true });
  }

  const targetFile = route.path === '/' ? path.join(distDir, 'index.html') : path.join(targetSubDir, 'index.html');
  fs.writeFileSync(targetFile, html, 'utf8');
  console.log(`Pre-rendered route HTML generated: ${route.path} -> ${targetFile}`);
});

// 2. High commercial value localized pages (Cidades e Bairros)
const curatedCities = [
  { slug: "curitiba", name: "Curitiba", stateSigla: "PR", state: "Paraná", region: "Região Metropolitana de Curitiba", strongSegment: "Tecnologia, Indústrias (CIC), Saúde, Advocacia e Serviços de Alto Padrão" },
  { slug: "londrina", name: "Londrina", stateSigla: "PR", state: "Paraná", region: "Norte do Paraná", strongSegment: "Agronegócio, Comércio, Imobiliárias e Clínicas Médicas" },
  { slug: "maringa", name: "Maringá", stateSigla: "PR", state: "Paraná", region: "Noroeste do Paraná", strongSegment: "Tecnologia, Polo Têxtil, Franquias e Distribuidoras" },
  { slug: "cascavel", name: "Cascavel", stateSigla: "PR", state: "Paraná", region: "Oeste do Paraná", strongSegment: "Agronegócio, Logística, Implementos Agrícolas e Saúde" },
  { slug: "foz-do-iguacu", name: "Foz do Iguaçu", stateSigla: "PR", state: "Paraná", region: "Tríplice Fronteira", strongSegment: "Turismo, Hotelaria de Luxo, Comércio Exterior e Gastronomia" },
  { slug: "ponta-grossa", name: "Ponta Grossa", stateSigla: "PR", state: "Paraná", region: "Campos Gerais", strongSegment: "Indústrias de Grande Porte, Logística Rodoferroviária e Varejo" },
  { slug: "sao-jose-dos-pinhais", name: "São José dos Pinhais", stateSigla: "PR", state: "Paraná", region: "Grande Curitiba", strongSegment: "Setor Automotivo (Montadoras), Logística, Indústria Metalmecânica e Aeroporto" },
  { slug: "fazenda-rio-grande", name: "Fazenda Rio Grande", stateSigla: "PR", state: "Paraná", region: "Grande Curitiba", strongSegment: "Indústrias de Transformação, Distribuição, Prestação de Serviços e Forte Comércio de Expansão" },
  { slug: "araucaria", name: "Araucária", stateSigla: "PR", state: "Paraná", region: "Grande Curitiba", strongSegment: "Refinaria Petroquímica, Indústrias Químicas, Logística e Transporte Pesado" },
  { slug: "pinhais", name: "Pinhais", stateSigla: "PR", state: "Paraná", region: "Grande Curitiba", strongSegment: "Indústrias Metalúrgicas, Serviços de Eventos, Distribuidoras de Alimentos e Metalmecânica" },
  { slug: "colombo", name: "Colombo", stateSigla: "PR", state: "Paraná", region: "Grande Curitiba", strongSegment: "Indústria Metalmecânica leve, Agroindústria Familiar, Comércio e Construção Civil" },
  { slug: "campo-largo", name: "Campo Largo", stateSigla: "PR", state: "Paraná", region: "Grande Curitiba", strongSegment: "Capital da Louça (Cerâmicas e Porcelanas), Mineração e Indústrias Cervejeiras" },
  { slug: "joinville", name: "Joinville", stateSigla: "SC", state: "Santa Catarina", region: "Norte Catarinense", strongSegment: "Indústrias Metal-Mecânicas, Plásticos, Tecnologia da Informação e Logística de Exportação" },
  { slug: "florianopolis", name: "Florianópolis", stateSigla: "SC", state: "Santa Catarina", region: "Ilha da Magia", strongSegment: "Startups de Tecnologia, Turismo, Hotelaria de Luxo e Alta Gastronomia" },
  { slug: "blumenau", name: "Blumenau", stateSigla: "SC", state: "Santa Catarina", region: "Vale do Itajaí", strongSegment: "Indústria Têxtil, Cervejarias Artesanais, Empresas de Software e Serviços Especializados" },
  { slug: "balneario-camboriu", name: "Balneário Camboriú", stateSigla: "SC", state: "Santa Catarina", region: "Litoral Norte", strongSegment: "Mercado Imobiliário de Alto Padrão, Construção Civil Verticalizada, Turismo e Comércio de Luxo" },
  { slug: "criciuma", name: "Criciúma", stateSigla: "SC", state: "Santa Catarina", region: "Sul Catarinense", strongSegment: "Polo Cerâmico, Indústrias Químicas, Confecções e Distribuição Comercial" },
  { slug: "porto-alegre", name: "Porto Alegre", stateSigla: "RS", state: "Rio Grande do Sul", region: "Grande Porto Alegre", strongSegment: "Serviços Corporativos, Saúde de Elite, Educação, Tecnologia e Finanças" },
  { slug: "caxias-do-sul", name: "Caxias do Sul", stateSigla: "RS", state: "Rio Grande do Sul", region: "Serra Gaúcha", strongSegment: "Setor de Metalmecânica Pesada, Vinícolas de Exportação, Agronegócio e Enoturismo" },
  { slug: "pelotas", name: "Pelotas", stateSigla: "RS", state: "Rio Grande do Sul", region: "Sul do RS", strongSegment: "Polo Universitário de Excelência, Agronegócio, Gastronomia Colonial e Doces Finos" },
  { slug: "santa-maria", name: "Santa Maria", stateSigla: "RS", state: "Rio Grande do Sul", region: "Coração do Rio Grande", strongSegment: "Educação Superior, Unidades Militares e Comércio Regional Centralizado" },
  { slug: "sao-paulo", name: "São Paulo", stateSigla: "SP", state: "São Paulo", region: "Grande São Paulo", strongSegment: "Mercado Financeiro, Fintechs, Serviços Corporativos, Saúde e Gastronomia Global" },
  { slug: "campinas", name: "Campinas", stateSigla: "SP", state: "São Paulo", region: "Interior de SP", strongSegment: "Polo Tecnológico, Universidades de Pesquisa, Logística de Cargas Pesadas e Agronegócio" },
  { slug: "santos", name: "Santos", stateSigla: "SP", state: "São Paulo", region: "Baixada Santista", strongSegment: "Logística Portuária de Grande Porte, Turismo, Serviços Aduaneiros e Comércio de Varejo" },
  { slug: "belo-horizonte", name: "Belo Horizonte", stateSigla: "MG", state: "Minas Gerais", region: "Grande BH", strongSegment: "Polo de Startups, Economia de Serviços, Gastronomia Tradicional e Clínicas Médicas" },
  { slug: "brasilia", name: "Brasília", stateSigla: "DF", state: "Distrito Federal", region: "Distrito Federal", strongSegment: "Serviços Jurídicos de Elite, Assessorias de Governo, Serviços Corporativos Premium e Clínicas de Especialidades" }
];

const curatedBairros = [
  { slug: "abranches", name: "Abranches", type: "Bairro", parentCity: "Curitiba", stateSigla: "PR", strongSegment: "Comércios de Proximidade, Indústrias Leves, Serviços Gerais e Autopeças" },
  { slug: "agua-verde", name: "Água Verde", type: "Bairro", parentCity: "Curitiba", stateSigla: "PR", strongSegment: "Escritórios de Advocacia, Clínicas Médicas Premium, Consultórios de Estética e Gastronomia de Elite" },
  { slug: "portao", name: "Portão", type: "Bairro", parentCity: "Curitiba", stateSigla: "PR", strongSegment: "Lojas de Varejo, Construtoras, Academias Premium, Clínicas Odontológicas e Serviços Especializados" },
  { slug: "batel", name: "Batel", type: "Bairro", parentCity: "Curitiba", stateSigla: "PR", strongSegment: "Clínicas Médicas de Elite, Cirurgia Plástica, Advocacias de Alto Padrão, Marcas de Luxo e Startups" },
  { slug: "centro-civico", name: "Centro Cívico", type: "Bairro", parentCity: "Curitiba", stateSigla: "PR", strongSegment: "Órgãos Governamentais, Advocacias Administrativas, Clínicas Odontológicas e Gastronomia Corporativa" },
  { slug: "bigorrilho", name: "Bigorrilho", type: "Bairro", parentCity: "Curitiba", stateSigla: "PR", strongSegment: "Clínicas Odontológicas, Consultórios de Psicologia, Escritórios de Engenharia e Serviços Premium" },
  { slug: "cabral", name: "Cabral", type: "Bairro", parentCity: "Curitiba", stateSigla: "PR", strongSegment: "Estúdios de Arquitetura, Clínicas Veterinárias de Elite, Construtoras de Luxo e Cafeterias Premium" },
  { slug: "juveve", name: "Juvevê", type: "Bairro", parentCity: "Curitiba", stateSigla: "PR", strongSegment: "Consultórios Médicos, Estúdios de Fotografia, Serviços de TI e Gastronomia Conceito" },
  { slug: "boqueirao", name: "Boqueirão", type: "Bairro", parentCity: "Curitiba", stateSigla: "PR", strongSegment: "Distribuidoras de Autopeças, Comunicação Visual, Metalurgia Leve e Lojas de Tintas" },
  { slug: "cic", name: "Cidade Industrial (CIC)", type: "Bairro", parentCity: "Curitiba", stateSigla: "PR", strongSegment: "Metalúrgicas de Cargas, Logística e Distribuição, Indústrias Químicas e Usinagem Técnica" },
  { slug: "sitio-cercado", name: "Sítio Cercado", type: "Bairro", parentCity: "Curitiba", stateSigla: "PR", strongSegment: "Lojas de Varejo de Moda, Farmácias de Manipulação, Assistências Técnicas e Academias" },
  { slug: "pinheirinho", name: "Pinheirinho", type: "Bairro", parentCity: "Curitiba", stateSigla: "PR", strongSegment: "Distribuidoras de Alimentos, Revendedoras de Veículos, Clínicas de Fisioterapia e Comércios Fortes" },
  { slug: "santa-felicidade", name: "Santa Felicidade", type: "Bairro", parentCity: "Curitiba", stateSigla: "PR", strongSegment: "Restaurantes Tradicionais, Vinícolas, Móveis Planejados de Alto Padrão e Arquitetura" },
  { slug: "cajuru", name: "Cajuru", type: "Bairro", parentCity: "Curitiba", stateSigla: "PR", strongSegment: "Oficinas Mecânicas de Especialidade, Vidraçarias, Distribuição Comercial e Serviços de Instalação" },
  { slug: "uberaba", name: "Uberaba", type: "Bairro", parentCity: "Curitiba", stateSigla: "PR", strongSegment: "Transportadoras de Carga, Empresas de Ar Condicionado, Comércio Varejista de Bairro e Vidros" },
  { slug: "hauer", name: "Hauer", type: "Bairro", parentCity: "Curitiba", stateSigla: "PR", strongSegment: "Distribuidoras Industriais, Gráficas Rápidas, Manutenção Hidráulica e Comércio Técnico" },
  { slug: "xaxim", name: "Xaxim", type: "Bairro", parentCity: "Curitiba", stateSigla: "PR", strongSegment: "Lojas de Autopeças, Clínicas Odontológicas Populares, Pet Shops e Concessionárias de Moto" },
  { slug: "novo-mundo", name: "Novo Mundo", type: "Bairro", parentCity: "Curitiba", stateSigla: "PR", strongSegment: "Lojas de Eletrodomésticos, Construtoras Civis, Clínicas de Estética e Comércio de Móveis" },
  { slug: "vista-alegre", name: "Vista Alegre", type: "Bairro", parentCity: "Curitiba", stateSigla: "PR", strongSegment: "Radiodifusão, Clínicas Veterinárias, Escolas e Gastronomia Familiar" },
  { slug: "centro", name: "Centro", type: "Bairro", parentCity: "Curitiba", stateSigla: "PR", strongSegment: "Escritórios de Cobrança, Imobiliárias Populares, Clínicas de Especialidades e Comércio Geral" },
  { slug: "reboucas", name: "Rebouças", type: "Bairro", parentCity: "Curitiba", stateSigla: "PR", strongSegment: "Gráficas de Grande Porte, Comunicação Visual, Concessionárias de Carros e Escritórios Criativos" }
];

// Combine all dynamic localized pages to pre-render
const localizedRoutes = [
  ...curatedCities.map(c => ({
    ...c,
    isBairro: false,
    title: `Criação de Sites em ${c.name}, ${c.stateSigla} | Suprema Site Express`,
    description: `Desenvolvimento profissional de sites de alta performance, lojas virtuais e SEO Local em ${c.name}, ${c.stateSigla}. Projetos exclusivos em React com entrega em 48h!`,
    canonical: `https://www.supremasite.com.br/site-em/${c.slug}`
  })),
  ...curatedBairros.map(b => ({
    ...b,
    isBairro: true,
    title: `Criação de Sites no Bairro ${b.name} — Curitiba (PR) | Suprema Site Express`,
    description: `Desenvolvemos sites profissionais com design premium em React e SEO Local no bairro ${b.name} em Curitiba. Entrega rápida de 48h com foco em resultados reais!`,
    canonical: `https://www.supremasite.com.br/site-em/${b.slug}`
  }))
];

// Custom context texts based on location to ensure dynamic, high-quality content without doorway filters
function generateContext(loc) {
  if (loc.isBairro) {
    return `O bairro ${loc.name} em Curitiba (PR) possui um comércio forte e independente. Empresas e consultórios localizados no bairro ${loc.name} demandam uma presença digital impecável para atrair clientes locais que usam o smartphone para buscar serviços próximos. Atendemos comércios, clínicas e prestadores em todo o ${loc.name} com sites desenvolvidos em React para carregamento abaixo de 1 segundo, aumentando o número de ligações e orçamentos via WhatsApp.`;
  }
  
  if (loc.slug === 'curitiba') {
    return `Curitiba consolidou-se como o "Vale do Pinhão", um dos principais polos de inovação e startups do Brasil. Para empresas na capital paranaense, contar com um site não é mais apenas um portfólio institucional básico, mas uma máquina estruturada de captação de clientes. No Batel, Centro Cívico, CIC e demais distritos comerciais, a relevância orgânica e a presença no Google Maps definem quem lidera o faturamento. Oferecemos design premium, código leve e SEO estruturado com sede na Av. Sete de Setembro, no Batel.`;
  }

  if (loc.slug === 'fazenda-rio-grande') {
    return `Fazenda Rio Grande é uma das cidades de maior crescimento industrial e demográfico na Região Metropolitana de Curitiba (RMC). Com o surgimento de novos polos comerciais e distritos industriais de transformação, as empresas em Fazenda Rio Grande necessitam de uma vitrine digital de alto nível para competir com marcas da capital. Desenvolvemos landing pages velozes e portais B2B que garantem indexação e atração contínua de contratos em Fazenda Rio Grande e municípios adjacentes.`;
  }

  if (loc.slug === 'sao-jose-dos-pinhais') {
    return `São José dos Pinhais, um dos maiores PIBs do Paraná, abriga um gigante cinturão metalmecânico, montadoras de renome global, e o Aeroporto Internacional Afonso Pena. Essa dinâmica exige uma comunicação corporativa extremamente profissional. Desenvolvemos sites institucionais estruturados em React e sistemas leves sob medida para indústrias, transportadoras e comércios que buscam dominar as consultas de pesquisa comercial de alto nível em São José dos Pinhais.`;
  }

  // General fallbacks per state
  if (loc.stateSigla === 'PR') {
    return `A cidade de ${loc.name} (PR) destaca-se por sua economia forte e integrada. Desenvolver um site profissional na Suprema Site Express para o mercado de ${loc.name} garante que sua empresa seja apresentada com alto padrão de design corporativo. Otimizamos toda a semântica de busca local no Google, no Bing e nos mecanismos de IA de ${loc.name} para assegurar visitas orgânicas qualificadas e geração contínua de novos leads comerciais.`;
  }
  if (loc.stateSigla === 'SC') {
    return `O mercado catarinense em ${loc.name} (SC) é reconhecido pela solidez cultural e forte empreendedorismo na indústria, comércio de luxo ou tecnologia. Nossa equipe desenvolve sites institucionais responsivos e lojas virtuais de alta conversão estruturados em React para impulsionar suas vendas na região de ${loc.name}. Garantimos velocidade Core Web Vitals 95+ e suporte rápido pelo WhatsApp.`;
  }
  if (loc.stateSigla === 'RS') {
    return `A presença digital para marcas comerciais e indústrias tradicionais em ${loc.name} (RS) é essencial para escalar vendas e faturamento de forma sustentável. Criamos portais institucionais robustos, sistemas corporativos sob medida e landing pages em React otimizadas para celulares na região de ${loc.name}, com marcação avançada Schema.org para indexação garantida e rápida nos buscadores.`;
  }
  
  return `Desenvolvemos sites de alto nível institucional e técnico para empresas na região de ${loc.name}. Unimos design UX minimalista, tipografia Plus Jakarta Sans impecável e carregamento de carregamento expresso em React para garantir que sua empresa domine o Google localmente e atraia orçamentos qualificados diariamente.`;
}

// Generate static pre-rendered HTML for each dynamic localized page
localizedRoutes.forEach(loc => {
  const context = generateContext(loc);
  let html = templateHtml;

  // Title & Header Replacements
  html = html.replace(/<title>.*?<\/title>/, `<title>${loc.title}</title>`);
  
  if (html.includes('<meta name="description"')) {
    html = html.replace(/<meta name="description" content=".*?"\s*\/?>/, `<meta name="description" content="${loc.description}" />`);
  } else {
    html = html.replace('</head>', `  <meta name="description" content="${loc.description}" />\n</head>`);
  }

  if (html.includes('<link rel="canonical"')) {
    html = html.replace(/<link rel="canonical" href=".*?"\s*\/?>/, `<link rel="canonical" href="${loc.canonical}" />`);
  } else {
    html = html.replace('</head>', `  <link rel="canonical" href="${loc.canonical}" />\n</head>`);
  }

  // Update OG / Twitter tags
  html = html.replace(/<meta property="og:title" content=".*?"\s*\/?>/g, `<meta property="og:title" content="${loc.title}" />`);
  html = html.replace(/<meta property="og:description" content=".*?"\s*\/?>/g, `<meta property="og:description" content="${loc.description}" />`);
  html = html.replace(/<meta property="og:url" content=".*?"\s*\/?>/g, `<meta property="og:url" content="${loc.canonical}" />`);
  html = html.replace(/<meta name="twitter:title" content=".*?"\s*\/?>/g, `<meta name="twitter:title" content="${loc.title}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?"\s*\/?>/g, `<meta name="twitter:description" content="${loc.description}" />`);
  html = html.replace(/<meta name="twitter:url" content=".*?"\s*\/?>/g, `<meta name="twitter:url" content="${loc.canonical}" />`);

  // Build the rich static content to inject inside <div id="root"></div> for SEO crawlers
  const inlineStaticContent = `
    <div class="seo-static-page bg-[#f8fafc] text-slate-900 font-sans min-h-screen">
      <!-- High Contrast Elegant Head Banner -->
      <header class="py-5 bg-[#070b14] text-white border-b border-white/10">
        <div class="container mx-auto px-4 flex justify-between items-center max-w-6xl">
          <div class="flex items-center gap-2">
            <span class="font-extrabold text-xl tracking-tight text-white uppercase">Suprema Site Express</span>
            <span class="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded">PRONTIDÃO 48h</span>
          </div>
          <a href="https://wa.me/5541992721004" class="text-sm font-bold bg-brand-primary text-white px-5 py-2.5 rounded-lg">Falar no WhatsApp (41) 99272-1004</a>
        </div>
      </header>

      <!-- Exact One H1 Tag with location name inside dynamic Hero -->
      <section class="py-20 lg:py-28 bg-[#070b14] text-white relative overflow-hidden">
        <div class="container mx-auto px-4 max-w-5xl text-center relative z-10">
          <span class="text-xs font-bold uppercase tracking-[0.20em] text-brand-primary block mb-3">01 · ENGENHARIA DE SITES &amp; SEO DE PERFORMANCE</span>
          <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
            Criação de Sites em <span class="text-amber-400">${loc.name}</span>
          </h1>
          <p class="text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Desenvolvimento de sites profissionais, landing pages, e-commerce e portais B2B de altíssima performance para empresas na região de <strong>${loc.name}</strong>. Atendimento técnico especializado e entrega rápida em até 48 horas.
          </p>
          <div class="inline-block bg-white/5 border border-white/10 px-5 py-3 rounded-xl mb-4">
            <span class="text-amber-400 text-sm font-bold">★ Velocidade extrema Core Web Vitals 95+ para atrair clientes em ${loc.name}</span>
          </div>
        </div>
      </section>

      <!-- Introduction and local economic segment context (Prevents Doorway pages) -->
      <section class="py-20 bg-white border-b border-slate-200">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="mb-12">
            <span class="text-xs font-bold uppercase tracking-widest text-brand-primary block mb-2">02 · ECONOMIA LOCAL &amp; VISIBILIDADE</span>
            <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Foco no Crescimento e Segmento Comercial de ${loc.name}</h2>
          </div>
          <div class="space-y-6 text-slate-700 text-base md:text-lg leading-relaxed font-normal">
            <p>${context}</p>
            <p>
              Na <strong>Suprema Site Express</strong>, desenvolvemos soluções moldadas especificamente para o segmento de <strong>${loc.strongSegment}</strong> em ${loc.name}. Diferente de agências tradicionais que usam criadores de sites lentos ou modelos prontos pesados, nós escrevemos código limpo utilizando as melhores tecnologias do mercado moderno. Unimos a beleza de layouts elegantes com a inteligência do SEO Local para que seu negócio seja encontrado por compradores locais prontos para consumir seus serviços e fechar propostas.
            </p>
          </div>
        </div>
      </section>

      <!-- Services Offered in the region -->
      <section class="py-20 bg-slate-50 border-b border-slate-200">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="mb-12">
            <span class="text-xs font-bold uppercase tracking-widest text-brand-primary block mb-2">03 · PORTFÓLIO DE PRODUTOS</span>
            <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Serviços Especializados Disponíveis na Região</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <h3 class="text-lg font-bold text-slate-900 mb-2">Sites Institucionais</h3>
              <p class="text-sm text-slate-600">Desenvolvimento com design premium e usabilidade limpa. Perfeito para demonstrar a autoridade corporativa da sua marca.</p>
            </div>
            <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <h3 class="text-lg font-bold text-slate-900 mb-2">Landing Pages de Alta Conversão</h3>
              <p class="text-sm text-slate-600">Páginas de vendas ultra-focadas em direcionar o cliente diretamente ao WhatsApp ou formulário, maximizando seu tráfego pago.</p>
            </div>
            <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <h3 class="text-lg font-bold text-slate-900 mb-2">Lojas Virtuais (E-commerce)</h3>
              <p class="text-sm text-slate-600">Plataformas de venda robustas com cálculo de frete automático, checkout transparente e painel administrativo intuitivo.</p>
            </div>
            <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <h3 class="text-lg font-bold text-slate-900 mb-2">SEO Local & Google Maps</h3>
              <p class="text-sm text-slate-600">Otimização completa do Perfil da Empresa (Meu Negócio), marcação de dados estruturados Schema e relevância em buscas locais.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Localized FAQ section -->
      <section class="py-20 bg-white border-b border-slate-200">
        <div class="container mx-auto px-4 max-w-4xl">
          <div class="mb-12">
            <span class="text-xs font-bold uppercase tracking-widest text-brand-primary block mb-2">04 · PERGUNTAS FREQUENTES (FAQ)</span>
            <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Dúvidas Comuns sobre Criação de Sites em ${loc.name}</h2>
          </div>
          <div class="space-y-6">
            <div class="border-b border-slate-200 pb-4">
              <h3 class="text-base font-bold text-slate-900 mb-1">Qual o prazo de entrega do site em ${loc.name}?</h3>
              <p class="text-sm text-slate-600 leading-relaxed">Nosso prazo de entrega para sites institucionais express e landing pages é de até 48 horas úteis após o recebimento de todo o conteúdo necessário para preenchimento da página.</p>
            </div>
            <div class="border-b border-slate-200 pb-4">
              <h3 class="text-base font-bold text-slate-900 mb-1">Vocês entregam o site pronto com otimização SEO em ${loc.name}?</h3>
              <p class="text-sm text-slate-600 leading-relaxed">Com certeza! Todo site que criamos já é otimizado com dados estruturados da Schema.org de forma autorreferente para a região de ${loc.name}, facilitando o ranqueamento imediato e indexação nos motores de busca.</p>
            </div>
            <div class="border-b border-slate-200 pb-4">
              <h3 class="text-base font-bold text-slate-900 mb-1">O código do site pertence a quem?</h3>
              <p class="text-sm text-slate-600 leading-relaxed">O código-fonte e o domínio pertencem integralmente a você. Não cobramos mensalidades obrigatórias de licença de uso ou plataformas amarradas; você tem propriedade integral.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Navigation & Interlinking Section to distribute PageRank -->
      <section class="py-16 bg-slate-50 border-b border-slate-200">
        <div class="container mx-auto px-4 max-w-4xl">
          <h2 class="text-lg font-bold text-slate-900 mb-4">Cidades e Regiões Relacionadas para Criação de Sites</h2>
          <p class="text-sm text-slate-600 mb-4 font-normal">Atendemos de forma técnica e expressa as seguintes regiões de destaque no Sul do Brasil:</p>
          <div class="flex flex-wrap gap-2 text-xs">
            ${curatedCities.map(c => `<a href="/site-em/${c.slug}" class="bg-white border border-slate-200 px-3 py-1.5 rounded-lg font-semibold text-slate-700 hover:text-brand-primary">${c.name} (${c.stateSigla})</a>`).join('\n            ')}
          </div>
          <div class="mt-6 pt-6 border-t border-slate-200">
            <p class="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-3">Bairros de Destaque em Curitiba:</p>
            <div class="flex flex-wrap gap-2 text-xs">
              ${curatedBairros.slice(0, 15).map(b => `<a href="/site-em/${b.slug}" class="bg-white border border-slate-200 px-3 py-1.5 rounded-lg font-semibold text-slate-700 hover:text-brand-primary">${b.name}</a>`).join('\n              ')}
            </div>
          </div>
        </div>
      </section>

      <!-- Footer fallback inside static crawl rendering -->
      <footer class="py-10 bg-[#070b14] text-slate-400 text-xs">
        <div class="container mx-auto px-4 max-w-4xl text-center">
          <p class="mb-2"><strong>Suprema Site Express (Suprema Mídia)</strong> · Sede própria no Batel: Av. Sete de Setembro, 2775 - Curitiba - PR</p>
          <p>© ${new Date().getFullYear()} Suprema Site Express. Todos os direitos reservados. CNPJ: 15.083.543/0001-97</p>
        </div>
      </footer>
    </div>
  `;

  // Inject the rich pre-rendered static content inside <div id="root"></div>
  html = html.replace('<div id="root"></div>', `<div id="root">${inlineStaticContent}</div>`);

  // Build Breadcrumb and LocalBusiness JSON-LD markup
  const jsonLdMarkup = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `https://www.supremasite.com.br/site-em/${loc.slug}#service`,
      "name": `Suprema Site Express - ${loc.name}`,
      "description": loc.description,
      "url": `https://www.supremasite.com.br/site-em/${loc.slug}`,
      "telephone": "+5541992721004",
      "image": "https://www.supremasite.com.br/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": loc.isBairro ? "Curitiba" : loc.name,
        "addressRegion": loc.stateSigla,
        "addressCountry": "BR",
        "streetAddress": loc.isBairro ? `Bairro ${loc.name}` : "Atendimento Regional Altamente Escalável"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": loc.isBairro ? "-25.4284" : "-25.4300", 
        "longitude": loc.isBairro ? "-49.2733" : "-49.2700"
      },
      "areaServed": [
        {
          "@type": loc.isBairro ? "AdministrativeArea" : "City",
          "name": loc.name
        }
      ],
      "knowsAbout": ["Web Design", "SEO", "React", "Google Maps", "Landing Page", "E-commerce"]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Início",
          "item": "https://www.supremasite.com.br/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": loc.isBairro ? "Curitiba" : "Cidades",
          "item": loc.isBairro ? "https://www.supremasite.com.br/site-em/curitiba" : "https://www.supremasite.com.br/mapa-do-site"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": loc.name,
          "item": `https://www.supremasite.com.br/site-em/${loc.slug}`
        }
      ]
    }
  ];

  // Inject customized JSON-LD into the head of this route's index.html
  const jsonLdString = `<script type="application/ld+json">\n${JSON.stringify(jsonLdMarkup, null, 2)}\n</script>\n</head>`;
  html = html.replace('</head>', jsonLdString);

  // Write file to target output path
  const targetSubDir = path.join(distDir, 'site-em', loc.slug);
  if (!fs.existsSync(targetSubDir)) {
    fs.mkdirSync(targetSubDir, { recursive: true });
  }

  const targetFile = path.join(targetSubDir, 'index.html');
  fs.writeFileSync(targetFile, html, 'utf8');
  console.log(`Pre-rendered route HTML generated: /site-em/${loc.slug} -> ${targetFile}`);
});

console.log('Prerender script completed successfully.');
