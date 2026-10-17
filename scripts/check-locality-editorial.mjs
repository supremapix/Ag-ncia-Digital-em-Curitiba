import fs from 'node:fs';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
await build({stdin:{contents:"export * from './data/locations';export * from './data/verifiedMunicipalities';",resolveDir:process.cwd(),loader:'ts'},bundle:true,platform:'node',format:'esm',outfile:'.prerender/editorial-data.mjs'});
const data=await import('../.prerender/editorial-data.mjs');
const records=JSON.parse(fs.readFileSync('.prerender/routes.json','utf8'));
const local=records.filter(r=>r.path.startsWith('/site-em/'));
assert.equal(data.getRegionFromSlug('botucatu'),'SP');
assert.equal(data.getNameFromSlug('botucatu'),'Botucatu');
assert.equal(data.verifiedMunicipalities.botucatu.ibgeId,3507506);
assert.ok(!data.rsCities.includes('Botucatu'));
const forbidden=['autoridade imediata','carregue abaixo de 1s','carregamento instantâneo','capta reservas imediatas','performance imbatível','garantir que os empreendimentos','liderem as intenções','site que não carrega em 1 segundo','suporte prioritário humanizado e em tempo real'];
let consultation=0,curitibaNeighborhoods=0;
for(const r of local){
 const html=fs.readFileSync(r.file,'utf8'),slug=r.path.slice(9);
 for(const term of forbidden)assert.ok(!html.includes(term),`${r.path}: ${term}`);
 const block=html.split('data-locality-areas')[1]?.split('data-locality-consultation');
 assert.ok(block,`${r.path}: missing area block`);
 const isNeighborhood=data.neighborhoods.some(n=>data.slugify(n)===slug);
 if(slug!=='curitiba'&&!isNeighborhood){
  consultation++;
  assert.ok(html.includes('data-locality-consultation'),r.path);
  const area=html.split('data-locality-areas')[1].split('Escopo definido na proposta')[0];
  for(const bairro of ['batel','agua-verde','cabral','bigorrilho','portao','boqueirao'])assert.ok(!area.includes(`href="/site-em/${bairro}"`),`${r.path}: foreign neighborhood ${bairro}`);
 }else if(isNeighborhood){curitibaNeighborhoods++;assert.ok(!html.includes('data-locality-consultation'),r.path);}
}
const curitiba=fs.readFileSync('dist/site-em/curitiba/index.html','utf8');
for(const slug of ['batel','agua-verde','cabral','bigorrilho','portao','boqueirao','centro','santa-felicidade'])assert.ok(curitiba.includes(`href="/site-em/${slug}"`),slug);
const botucatu=fs.readFileSync('dist/site-em/botucatu/index.html','utf8');
assert.ok(/Botucatu[^<]*\/ SP/.test(botucatu.replace(/<[^>]*>/g,'')),'Botucatu visible UF');
assert.ok(!botucatu.includes('Botucatu / RS'));
const result={localRoutes:local.length,consultationPages:consultation,preservedNeighborhoodPages:curitibaNeighborhoods,curitibaNeighborhoodLinks:8,correctedMunicipalities:['Botucatu/SP'],forbiddenClaims:0};
fs.writeFileSync('.prerender/editorial-check.json',JSON.stringify(result,null,2));console.log(JSON.stringify(result));
