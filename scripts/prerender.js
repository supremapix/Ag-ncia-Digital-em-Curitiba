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

// Define key static routes to prerender HTML for crawlers
const routesToPrerender = [
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
    path: '/site-em/curitiba',
    title: 'Criação de Sites em Curitiba (PR) | Agência Sede no Batel (48h)',
    description: 'Criação de sites profissionais e SEO Local em Curitiba. Agência com sede na Av. Sete de Setembro, 2775 (Batel). Entrega ágil em 48h!',
    canonical: 'https://www.supremasite.com.br/site-em/curitiba'
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

routesToPrerender.forEach(route => {
  let html = templateHtml;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);

  // Replace or inject meta description
  if (html.includes('<meta name="description"')) {
    html = html.replace(/<meta name="description" content=".*?"\s*\/?>/, `<meta name="description" content="${route.description}" />`);
  } else {
    html = html.replace('</head>', `  <meta name="description" content="${route.description}" />\n</head>`);
  }

  // Replace or inject canonical link
  if (html.includes('<link rel="canonical"')) {
    html = html.replace(/<link rel="canonical" href=".*?"\s*\/?>/, `<link rel="canonical" href="${route.canonical}" />`);
  } else {
    html = html.replace('</head>', `  <link rel="canonical" href="${route.canonical}" />\n</head>`);
  }

  const targetSubDir = route.path === '/' ? distDir : path.join(distDir, route.path.replace(/^\//, ''));
  if (!fs.existsSync(targetSubDir)) {
    fs.mkdirSync(targetSubDir, { recursive: true });
  }

  const targetFile = route.path === '/' ? path.join(distDir, 'index.html') : path.join(targetSubDir, 'index.html');
  fs.writeFileSync(targetFile, html, 'utf8');
  console.log(`Pre-rendered route HTML generated: ${route.path} -> ${targetFile}`);
});

console.log('Prerender script completed successfully.');
