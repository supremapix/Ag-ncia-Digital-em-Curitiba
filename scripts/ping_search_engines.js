import http from 'http';
import https from 'https';

const sitemaps = [
  'https://www.supremasite.com.br/sitemap.xml',
  'https://www.supremasite.com.br/sitemap_index.xml',
  'https://www.supremasite.com.br/sitemap_pages.xml',
  'https://www.supremasite.com.br/sitemap_cidades.xml',
  'https://www.supremasite.com.br/sitemap_bairros.xml'
];

async function pingUrl(serviceName, url) {
  return new Promise((resolve) => {
    const transport = url.startsWith('https') ? https : http;
    transport.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        console.log(`[${serviceName}] Status: ${res.statusCode} para ${url}`);
        resolve({ service: serviceName, status: res.statusCode, success: true });
      });
    }).on('error', (err) => {
      console.error(`[${serviceName}] Erro ao pingar ${url}:`, err.message);
      resolve({ service: serviceName, success: false, error: err.message });
    });
  });
}

async function run() {
  console.log('Iniciando submissão ativa de sitemaps aos buscadores...');
  
  for (const sitemap of sitemaps) {
    const encodedSitemap = encodeURIComponent(sitemap);
    
    // Bing sitemap ping (still fully supported/documented)
    const bingUrl = `https://www.bing.com/ping?sitemap=${encodedSitemap}`;
    await pingUrl('Bing', bingUrl);
    
    // Google sitemap ping (Google deprecated the public /ping endpoint in late 2023, 
    // but we send it as a fallback/best effort)
    const googleUrl = `https://www.google.com/ping?sitemap=${encodedSitemap}`;
    await pingUrl('Google (Best Effort)', googleUrl);
  }
  
  console.log('Processo de ping concluído!');
}

run();
