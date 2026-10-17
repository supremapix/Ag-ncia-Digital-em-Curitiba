import fs from 'node:fs';
import path from 'node:path';
import { capitals } from '../data/capitalCatalog.ts';
const base='https://geoftp.ibge.gov.br/organizacao_do_territorio/malhas_territoriais/malhas_de_setores_censitarios__divisoes_intramunicipais/censo_2022/bairros/shp/UF/';
const results=[];
for(const capital of capitals) {
 const target='public/localities/'+capital.id+'.json';
 if(fs.existsSync(target)) {
  const previous=JSON.parse(fs.readFileSync(target,'utf8').replace(/^\uFEFF/,''));
  if(!previous.source.url.includes('geoftp.ibge.gov.br')) continue;
 }
 const folder=path.join('locality-sources',capital.uf);
 if(!fs.existsSync(folder)) continue;
 const file=fs.readdirSync(folder).find(name=>name.endsWith('.dbf'));
 if(!file) continue;
 const b=fs.readFileSync(path.join(folder,file));
 const decoder=new TextDecoder('utf-8',{fatal:true});
 const count=b.readUInt32LE(4), header=b.readUInt16LE(8), length=b.readUInt16LE(10);
 const fields=[]; let offset=1;
 for(let p=32;b[p]!==13;p+=32){const name=b.subarray(p,p+11).toString('ascii').replace(/\0.*$/,'');const size=b[p+16];fields.push({name,offset,size});offset+=size;}
 const rows=[];
 for(let n=0;n<count;n++){const pos=header+n*length;if(b[pos]===42)continue;const row={};for(const field of fields)row[field.name]=decoder.decode(b.subarray(pos+field.offset,pos+field.offset+field.size)).trim();if(row.CD_MUN===capital.id)rows.push(row);}
 if(!rows.length){results.push({capital:capital.name,count:0});continue;}
 const seen=new Set();
 const localities=rows.map(row=>{if(!row.CD_BAIRRO || !row.NM_BAIRRO || seen.has(row.CD_BAIRRO))throw new Error('Missing or duplicate neighborhood');seen.add(row.CD_BAIRRO);return {id:capital.id+':bairro:'+row.CD_BAIRRO,name:row.NM_BAIRRO,kind:'bairro'};}).sort((a,b)=>a.name.localeCompare(b.name,'pt-BR'));
 const inventory={capitalId:capital.id,status:'partial',verifiedAt:'2026-10-17',referenceDate:'2022-07-31',source:{title:'IBGE — bairros do Censo 2022 ('+capital.uf+')',url:base+capital.uf+'_bairros_CD2022.zip'},note:'Bairros presentes no recorte territorial do Censo 2022, publicado em 2024. Alterações municipais posteriores ainda não foram conciliadas. A lista não declara todos os bairros atuais.',localities};
 fs.writeFileSync('public/localities/'+capital.id+'.json',JSON.stringify(inventory,null,2)+'\n');
 results.push({capital:capital.name,uf:capital.uf,count:localities.length});
}
console.log(JSON.stringify(results,null,2));
