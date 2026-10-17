import {build} from 'esbuild';import fs from 'node:fs';
fs.mkdirSync('.prerender',{recursive:true});
await build({stdin:{contents:`import React from 'react';import {renderToStaticMarkup} from 'react-dom/server';import {MemoryRouter} from 'react-router-dom';import {SiteContent} from './App';import {localitySlugs,staticRoutes} from './data/routeInventory';import {blogPosts} from './data/blogData';import hubs from './data/searchHubs.json';export {localitySlugs,staticRoutes,blogPosts,hubs};export function render(path){return renderToStaticMarkup(<MemoryRouter initialEntries={[path]}><SiteContent/></MemoryRouter>)}`,resolveDir:process.cwd(),loader:'tsx'},bundle:true,platform:'node',format:'esm',packages:'external',loader:{'.css':'empty'},outfile:'.prerender/render.mjs'});
const {render,localitySlugs,staticRoutes,blogPosts,hubs}=await import('../.prerender/render.mjs');
const template=fs.readFileSync('dist/index.html','utf8');const origin='https://www.supremasite.com.br';
const esc=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
const strip=s=>s.replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').replaceAll('&amp;','&').trim();
const routes=[...staticRoutes,...blogPosts.map(p=>'/blog/'+p.id),...localitySlugs.map(s=>'/site-em/'+s)];
const records=[];
for(const path of [...routes,'/__not-found__']){
 const body=render(path),notFound=path==='/__not-found__',url=origin+path;
 const h1=strip(body.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1]||'Suprema Sites Express');
 const hub=hubs.find(h=>h.path===path),post=blogPosts.find(p=>'/blog/'+p.id===path);
 const title=hub?.title||(post?post.title+' | Blog Suprema':notFound?'Página não encontrada | Suprema':h1+' | Suprema');
 const description=hub?.description||post?.excerpt||(path.startsWith('/site-em/')?`${h1}. Consulte escopo, prazo e condições de criação do site e presença local. Sem garantia de ranking ou vendas.`:notFound?'A página solicitada não existe.':`${h1}. Consulte informações, serviços e condições da Suprema Sites Express.`);
 let html=template.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g,'').replace(/<title>[\s\S]*?<\/title>/,`<title>${esc(title)}</title>`).replace(/<link rel="canonical" href="[^"]*"\s*\/?>/,notFound?'':`<link rel="canonical" href="${url}">`);
 for(const [key,value]of Object.entries({description,'og:title':title,'og:description':description,'og:url':url,'twitter:title':title,'twitter:description':description,'twitter:url':url}))html=html.replace(new RegExp(`<meta (name|property)="${key}" content="[^"]*"\\s*\\/?>`,'g'),`<meta ${key.startsWith('og:')?'property':'name'}="${key}" content="${esc(value)}">`);
 const schema={'@context':'https://schema.org','@type':post?'Article':'WebPage',name:h1,headline:h1,description,url,...(post?{author:{'@type':'Organization',name:post.author},publisher:{'@type':'Organization',name:'Suprema Sites Express',url:origin}}:{})};
 html=html.replace('</head>',notFound?'<meta name="robots" content="noindex"></head>':`<script type="application/ld+json">${JSON.stringify(schema).replaceAll('<','\\u003c')}</script></head>`).replace('<div id="root"></div>',`<div id="root">${body}</div>`);
 const file=notFound?'dist/404.html':path==='/'?'dist/index.html':'dist'+path+'/index.html';fs.mkdirSync(file.slice(0,file.lastIndexOf('/')),{recursive:true});fs.writeFileSync(file,html);if(!notFound)records.push({path,title,description,file});
}
fs.writeFileSync('.prerender/routes.json',JSON.stringify(records,null,2));
// Fail the build instead of publishing a sitemap entry without its canonical HTML.
for(const file of ['sitemap_pages.xml','sitemap_cidades.xml','sitemap_bairros.xml'])for(const m of fs.readFileSync('dist/'+file,'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)){const path=new URL(m[1]).pathname;if(!records.some(r=>r.path===path))throw Error('Sitemap URL missing rendered route: '+path)}
console.log(`Rendered ${records.length} existing routes plus a real 404 document; all sitemap entries resolve to route-specific HTML.`);
