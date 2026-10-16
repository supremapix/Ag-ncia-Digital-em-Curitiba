import assert from 'node:assert/strict';
import fs from 'node:fs';
const read = p => fs.readFileSync(p, 'utf8');
const portfolio = read('data/portfolio.ts');
const images = [...portfolio.matchAll(/image: '([^']+)'/g)].map(m=>m[1]);
assert.equal(images.length,16,'Keep all 16 existing portfolio entries');
for (const image of images) assert.ok(fs.statSync(`public${image}`).size>0,`Missing asset: ${image}`);
for (const route of ['/','/portfolio','/servicos','/contato','/blog','/sobre','/site-em/:slug','/privacidade']) assert.ok(read('App.tsx').includes(`path="${route}"`),`Missing route: ${route}`);
const header=read('components/Header.tsx');
for (const feature of ['aria-expanded','aria-controls','aria-current','Escape','Pular para o conteúdo']) assert.ok(header.includes(feature),`Missing navigation behavior: ${feature}`);
assert.ok(read('src/index.css').includes('prefers-reduced-motion:reduce'));
assert.ok(read('components/Showcase.tsx').includes('useReducedMotion'));
assert.ok(read('pages/Portfolio.tsx').includes('aria-pressed'));
assert.ok(read('pages/Portfolio.tsx').includes('role="status"'));
for(const route of ['index.html','portfolio/index.html','servicos/index.html','site-em/curitiba/index.html']) {
 const html=read(`dist/${route}`);assert.ok(html.includes('rel="canonical"'));assert.ok(html.includes('name="description"'));
}
console.log('Design contract passed: 16 projects, assets, routes, navigation semantics, reduced motion, filters and prerender metadata.');
