import fs from 'node:fs';
const html=fs.readFileSync('locality-sources/brasilia-segov.html','utf8');
const localities=[];
for(const match of html.matchAll(/<a\b[^>]*href=([\x22\x27])(.*?)\1[^>]*>([\s\S]*?)<\/a>/g)) {
 const text=match[3].replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
 const ra=text.match(/^(.+?)\s*\(\s*(?:RA\s*)?([IVX]+)\)$/);
 if(ra && !localities.some(item=>item.id==='5300108:ra:'+ra[2]))localities.push({id:'5300108:ra:'+ra[2],name:ra[1].trim(),kind:'regiao-administrativa'});
}
if(localities.length!==35) throw new Error('Expected 35 numbered entries in directory');
// Individually documented by SEGOV in August 2026; the directory summary still says 35.
for(const [name,roman,slug,ordinal] of [['26 de Setembro','XXXVI','26-de-setembro','36ª'],['Ponte Alta','XXXVII','ponte-alta','37ª']]) {
 const detail=fs.readFileSync(`locality-sources/brasilia-${slug}.html`,'utf8');
 if(!detail.includes(ordinal) || !detail.includes('2026'))throw new Error('Missing corroborating source');
 localities.push({id:'5300108:ra:'+roman,name,kind:'regiao-administrativa'});
}
localities.sort((a,b)=>a.name.localeCompare(b.name,'pt-BR'));
const value={capitalId:'5300108',status:'complete',verifiedAt:'2026-10-17',referenceDate:'2026-08-27',source:{title:'GDF/SEGOV — diretório das administrações regionais',url:'https://www.segov.df.gov.br/pt/category/administracoes-regionais'},additionalSources:[{title:'GDF/SEGOV — 26 de Setembro (36ª RA)',url:'https://www.segov.df.gov.br/pt/26-de-setembro'},{title:'GDF/SEGOV — Ponte Alta (37ª RA)',url:'https://www.segov.df.gov.br/pt/ponte-alta'}],note:'37 regiões administrativas do Distrito Federal documentadas no diretório e nas páginas individuais da SEGOV. O resumo geral ainda menciona 35; as páginas de 26 de Setembro e Ponte Alta registram a criação em 03/07/2026, com atualização em agosto de 2026. São regiões administrativas do DF, não bairros de Brasília. Todas têm proposta sob consulta e não entram no subtotal por bairro.',localities};
fs.writeFileSync('public/localities/5300108.json',JSON.stringify(value,null,2)+'\n');
console.log('Imported 37 DF administrative regions; no neighborhood pricing.');
