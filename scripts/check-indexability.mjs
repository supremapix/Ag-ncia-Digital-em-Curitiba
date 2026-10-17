import fs from 'node:fs';import assert from 'node:assert/strict';
const records=JSON.parse(fs.readFileSync('.prerender/routes.json','utf8')),paths=new Set(records.map(r=>r.path)),config=JSON.parse(fs.readFileSync('vercel.json','utf8'));
const broken=new Map();let totalLinks=0;
for(const r of records){const html=fs.readFileSync(r.file,'utf8');assert.equal((html.match(/rel="canonical"/g)||[]).length,1,r.path);assert.ok(html.includes('href="https://www.supremasite.com.br'+r.path+'"'),r.path);assert.ok(/<h1(?:\s|>)/.test(html),r.path);assert.ok(!html.includes('name="robots" content="noindex"'),r.path);assert.equal((html.match(/data-global-promotion/g)||[]).length,1,r.path);
 for(const m of html.matchAll(/<a[^>]+href="(\/[^"#?]*)(?:[?#][^"]*)?"/g)){totalLinks++;const dest=m[1];if(paths.has(dest)||config.redirects.some(r=>r.source===dest)||fs.existsSync('dist'+dest))continue;const item=broken.get(dest)||{destination:dest,count:0,sample:r.path};item.count++;broken.set(dest,item)}
}
for(const r of config.redirects)assert.ok(paths.has(r.destination),r.source);
assert.ok(!config.rewrites.some(r=>r.destination==='/index.html'));
assert.ok(fs.readFileSync('dist/404.html','utf8').includes('name="robots" content="noindex"'));
const sitemapPaths=[];for(const f of ['sitemap_pages.xml','sitemap_cidades.xml','sitemap_bairros.xml'])for(const m of fs.readFileSync('dist/'+f,'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)){const p=new URL(m[1]).pathname;assert.ok(paths.has(p),p);sitemapPaths.push(p)}
assert.equal(new Set(sitemapPaths).size,sitemapPaths.length);
fs.writeFileSync('.prerender/link-audit.json',JSON.stringify({routeCount:records.length,totalLinks,sitemapUrls:sitemapPaths.length,redirects:config.redirects.length,broken:[...broken.values()]},null,2));
console.log(JSON.stringify({routes:records.length,sitemap:sitemapPaths.length,redirects:config.redirects.length,totalLinks,unresolvedLinks:[...broken.values()]}));
if(broken.size)process.exitCode=1;
