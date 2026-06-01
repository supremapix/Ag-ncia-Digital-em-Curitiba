import fs from 'fs';
import path from 'path';

// 1. Setup paths
const LOCATIONS_FILE = path.join(process.cwd(), 'data/locations.ts');
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const ROOT_DIR = process.cwd();

// Ensure public directory exists
if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

// 2. Read locations.ts and extract arrays
console.log('Lendo locations.ts...');
const locationsContent = fs.readFileSync(LOCATIONS_FILE, 'utf-8');

const extractArray = (content, varName) => {
  const regex = new RegExp(`export\\s+const\\s+${varName}\\s*=\\s*\\[([\\s\\S]*?)\\];`);
  const match = content.match(regex);
  if (!match) {
    console.error(`Erro ao encontrar variável ${varName}`);
    return [];
  }
  
  // Clean comments and retrieve strings
  const arrayStr = match[1]
    .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '') // remove comments
    .trim();
    
  return arrayStr
    .split(',')
    .map(item => {
      const clean = item.trim().replace(/^['"`]|['"`]$/g, '');
      return clean;
    })
    .filter(item => item.length > 0);
};

const neighborhoods = extractArray(locationsContent, 'neighborhoods');
const cities = extractArray(locationsContent, 'cities');
const scCities = extractArray(locationsContent, 'scCities');
const rsCities = extractArray(locationsContent, 'rsCities');

console.log(`Carregados:`);
console.log(`- ${neighborhoods.length} Bairros`);
console.log(`- ${cities.length} Cidades Paranaenses`);
console.log(`- ${scCities.length} Cidades Catarinenses`);
console.log(`- ${rsCities.length} Cidades Gaúchas`);

// 3. Slugify logic matching front-end
const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

const sanitizeXml = (str) => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
};

const currentDate = new Date().toISOString().split('T')[0];

// 4. Generate sitemap_pages.xml
console.log('Gerando sitemap_pages.xml...');
const mainPages = [
  { path: '', priority: '1.0', changefreq: 'daily' },
  { path: 'servicos', priority: '0.9', changefreq: 'weekly' },
  { path: 'portfolio', priority: '0.9', changefreq: 'weekly' },
  { path: 'sobre', priority: '0.8', changefreq: 'monthly' },
  { path: 'blog', priority: '0.8', changefreq: 'weekly' },
  { path: 'contato', priority: '0.8', changefreq: 'monthly' },
  { path: 'mapa-do-site', priority: '0.7', changefreq: 'weekly' },
  { path: 'privacidade', priority: '0.3', changefreq: 'yearly' }
];

let sitemapPagesXml = `<?xml version="1.0" encoding="UTF-8"?>
<!-- sitemap_pages.xml - Páginas Principais e Institucionais -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

mainPages.forEach(p => {
  sitemapPagesXml += `  <url>
    <loc>https://www.supremasite.com.br/${p.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>\n`;
});
sitemapPagesXml += `</urlset>`;
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap_pages.xml'), sitemapPagesXml);

// 5. Generate sitemap_cidades.xml
console.log('Gerando sitemap_cidades.xml...');
let sitemapCidadesXml = `<?xml version="1.0" encoding="UTF-8"?>
<!-- sitemap_cidades.xml - Páginas de Cidades -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

const allCities = [...new Set([...cities, ...scCities, ...rsCities])].sort();

allCities.forEach(city => {
  const slug = slugify(city);
  // High priorities for major capitals/strategic cities
  let priority = '0.7';
  if (['curitiba', 'londrina', 'maringa', 'florianopolis', 'joinville', 'porto-alegre', 'caxias-do-sul'].includes(slug)) {
    priority = '0.9';
  } else if (['cascavel', 'foz-do-iguacu', 'ponta-grossa', 'blumenau', 'balneario-camboriu', 'lages', 'criciuma', 'pelotas', 'santa-maria'].includes(slug)) {
    priority = '0.8';
  }
  
  sitemapCidadesXml += `  <url>
    <loc>https://www.supremasite.com.br/site-em/${slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>\n`;
});
sitemapCidadesXml += `</urlset>`;
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap_cidades.xml'), sitemapCidadesXml);

// 6. Generate sitemap_bairros.xml
console.log('Gerando sitemap_bairros.xml...');
let sitemapBairrosXml = `<?xml version="1.0" encoding="UTF-8"?>
<!-- sitemap_bairros.xml - Páginas de Bairros -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

neighborhoods.forEach(b => {
  const slug = slugify(b);
  let priority = '0.6';
  if (['batel', 'agua-verde', 'centro-civico', 'bigorrilho', 'ecoville', 'merces', 'cabral', 'juveve'].includes(slug)) {
    priority = '0.7';
  }
  sitemapBairrosXml += `  <url>
    <loc>https://www.supremasite.com.br/site-em/${slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>\n`;
});
sitemapBairrosXml += `</urlset>`;
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap_bairros.xml'), sitemapBairrosXml);

// 7. Generate sitemap_index.xml and root sitemap.xml
console.log('Gerando sitemap_index.xml e sitemap.xml...');
const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<!-- sitemap_index.xml - Índice Geral de Sitemaps para supremasite.com.br -->
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://www.supremasite.com.br/sitemap_pages.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.supremasite.com.br/sitemap_cidades.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.supremasite.com.br/sitemap_bairros.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
</sitemapindex>
`;
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap_index.xml'), sitemapIndexXml);
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemapIndexXml);
// Root fallback
fs.writeFileSync(path.join(ROOT_DIR, 'sitemap.xml'), sitemapIndexXml);

console.log('Sitemaps criados e atualizados com sucesso!');
