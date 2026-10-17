import assert from 'node:assert/strict';
import fs from 'node:fs';
import hubs from '../data/searchHubs.json' with {type:'json'};
import providers from '../data/localProviders.json' with {type:'json'};
const origin='https://www.supremasite.com.br';
const sitemap=fs.readFileSync('public/sitemap_pages.xml','utf8');
const app=fs.readFileSync('App.tsx','utf8');
const rewrites=JSON.parse(fs.readFileSync('vercel.json','utf8')).rewrites;
for(const path of [...hubs.map(h=>h.path),'/blog/100']){
 const html=fs.readFileSync('dist'+path+'/index.html','utf8');
 assert.ok(html.includes(`<link rel="canonical" href="${origin+path}">`));
 assert.ok(!html.includes('noindex'));
 assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1);
 assert.ok(/<h2(?:\s|>)/.test(html));
 assert.equal(sitemap.split(`<loc>${origin+path}</loc>`).length-1,1);
 assert.ok(rewrites.some(r=>r.source===path&&r.destination===path+'/index.html') || (path==='/blog/100' && rewrites.some(r=>r.source==='/blog/:id'&&r.destination==='/blog/:id/index.html')));
 assert.ok(!/"Review"|aggregateRating|ratingValue/.test(html));
 for(const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g))JSON.parse(match[1]);
 for(const match of html.matchAll(/<a[^>]*href="(\/[^"#?]*)(?:[?#][^"]*)?"/g)){
  const link=match[1];assert.ok(link==='/'||link.startsWith('/site-em/')||app.includes('path="'+link+'"')||fs.existsSync('dist'+link),`Missing route: ${link}`);
 }
}
const directory=fs.readFileSync('dist/criacao-de-sites/capitais/index.html','utf8');
assert.equal((directory.match(/\?capital=/g)||[]).length,27);
assert.equal(providers.length,17);assert.equal(new Set(providers.map(p=>p.place)).size,17);assert.equal(providers.filter(p=>p.city).length,5);
const article=fs.readFileSync('dist/blog/100/index.html','utf8');for(const p of providers){assert.ok(article.includes(p.name));assert.ok(article.includes(p.url.replaceAll('&','&amp;')))}
assert.ok(!fs.readFileSync('public/robots.txt','utf8').includes('sitemap-locations.xml'));
assert.ok(!fs.readFileSync('index.html','utf8').includes('"Review"'));
console.log('PASS: 4 indexable URLs, canonical, sitemap uniqueness, explicit deployment rewrites, readable HTML, linked routes, parsed schema without unsupported reviews, 27 capital links, 17 providers (12 neighborhoods + 5 cities).');
