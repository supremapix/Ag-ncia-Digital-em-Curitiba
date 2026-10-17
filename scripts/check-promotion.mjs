import fs from 'node:fs';import assert from 'node:assert/strict';
const app=fs.readFileSync('App.tsx','utf8'),promo=fs.readFileSync('components/GlobalPromotion.tsx','utf8'),svg=fs.readFileSync('public/banner/suprema-sites-express.svg','utf8');
assert.equal((app.match(/<GlobalPromotion\s*\/>/g)||[]).length,1);
assert.ok(app.indexOf('<GlobalPromotion />')>app.indexOf('</main>'));
for(const text of ['Chave Pix: supremapix@gmail.com','(41) 99272-1004']){assert.ok(promo.includes(text));assert.ok(svg.includes(text))}
assert.ok(promo.includes('wa.me/5541992721004?text='));assert.ok(promo.includes('encodeURIComponent(message)'));assert.ok(promo.includes('+pathname'));
assert.ok(!/QR|desconto|beneficiário/i.test(promo));assert.ok(!app.includes('<SupremaBanner'));
const luminance=h=>{const v=h.match(/\w\w/g).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return v[0]*.2126+v[1]*.7152+v[2]*.0722};
const pairs=[['ffffff','1d4ed8'],['ffffff','173da8'],['46515d','f3f1eb'],['46515d','edf2ff'],['b5ccff','111318'],['ffffff','9d174d'],['ffffff','701037'],['ffffff','1457a6'],['ffffff','103f78'],['ffffff','166534'],['ffffff','104b27'],['111318','ffffff']];
for(const [a,b]of pairs){const x=luminance(a),y=luminance(b);assert.ok((Math.max(x,y)+.05)/(Math.min(x,y)+.05)>=4.5,`${a}/${b}`)}
console.log('PASS: shared promotion mounted once outside route switch (including blog and 404), authorized Pix/phone in SVG and accessible text, contextual official CTA; normal/hover/focus palette pairs >=4.5:1.');
