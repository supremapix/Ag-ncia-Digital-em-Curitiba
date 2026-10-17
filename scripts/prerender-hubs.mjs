import fs from 'node:fs';
import hubs from '../data/searchHubs.json' with {type:'json'};
import {capitals} from '../data/capitalCatalog.ts';
import {localProvidersPost as post} from '../data/localProvidersPost.ts';
const origin='https://www.supremasite.com.br';
const esc=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
const template=fs.readFileSync('dist/index.html','utf8');
const nav='<nav aria-label="Guias">'+hubs.map(h=>`<a href="${h.path}">${esc(h.title.split(' | ')[0])}</a>`).join(' · ')+'</nav>';
const terms='<section><h2>Criação e plano regional têm valores separados</h2><p>Criação do site por R$ 1.680 em pagamento único, com 60 meses de hospedagem. Plano regional de Curitiba: mínimo de 11 bairros por R$ 220/mês. De 11 a 29 bairros, R$ 20 cada/mês; a partir de 30, R$ 10 cada/mês para todos. Cidades e regiões administrativas têm proposta sob consulta.</p><p>Enquanto o plano regional mensal estiver ativo, a Suprema paga a renovação anual do domínio e mantém a hospedagem incluída após os 60 meses iniciais. A mensalidade regional continua sendo paga. Sem plano ativo, consulte as condições de renovação.</p><a href="/presenca-local">Consultar condições e localidades</a></section>';
const pages=hubs.map(h=>({...h,body:`<p>${esc(h.intro)}</p>${nav}`+h.sections.map(s=>`<section><h2>${esc(s.title)}</h2><p>${esc(s.text)}</p><ul>${s.links.map(([label,url])=>`<li><a href="${url}">${esc(label)}</a></li>`).join('')}</ul></section>`).join('')+(h.path.endsWith('/capitais')?'<section><h2>27 capitais, com fontes e limites.</h2><ul>'+capitals.map(c=>`<li><a href="/presenca-local?capital=${c.id}">${esc(c.name)} — ${c.uf}</a></li>`).join('')+'</ul></section>':'')+terms}));
pages.push({path:'/blog/100',title:post.title+' | Blog Suprema',heading:post.title,description:post.excerpt,body:`<p>Equipe Suprema · 17 de outubro de 2026</p>${post.content}`});
for(const page of pages){
 const url=origin+page.path;
 let html=template.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g,'');
 html=html.replace(/<title>[\s\S]*?<\/title>/,`<title>${esc(page.title)}</title>`).replace(/<link rel="canonical" href="[^"]*"\s*\/?>/,`<link rel="canonical" href="${url}">`);
 for(const [key,value] of Object.entries({description:page.description,'og:title':page.title,'og:description':page.description,'og:url':url,'twitter:title':page.title,'twitter:description':page.description,'twitter:url':url}))html=html.replace(new RegExp(`<meta (name|property)="${key}" content="[^"]*"\\s*\\/?>`,'g'),`<meta ${key.startsWith('og:')?'property':'name'}="${key}" content="${esc(value)}">`);
 const schema=[{'@context':'https://schema.org','@type':page.path==='/blog/100'?'Article':'CollectionPage',name:page.heading,headline:page.heading,description:page.description,url,...(page.path==='/blog/100'?{datePublished:'2026-10-17',author:{'@type':'Organization',name:'Equipe Suprema',url:origin},publisher:{'@type':'Organization',name:'Suprema',url:origin}}:{})},{'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Início',item:origin+'/'},{'@type':'ListItem',position:2,name:page.heading,item:url}]}];
 html=html.replace('</head>',`<script type="application/ld+json">${JSON.stringify(schema).replaceAll('<','\\u003c')}</script></head>`);
 html=html.replace('<div id="root"></div>',`<div id="root"><header><a href="/">Suprema</a></header><main><h1>${esc(page.heading)}</h1>${page.body}</main><footer><a href="/contato">Contato</a></footer></div>`);
 fs.mkdirSync('dist'+page.path,{recursive:true});fs.writeFileSync('dist'+page.path+'/index.html',html);
}
console.log('Prerender: 3 guias e matéria editorial, conteúdo legível e canonical próprio.');
