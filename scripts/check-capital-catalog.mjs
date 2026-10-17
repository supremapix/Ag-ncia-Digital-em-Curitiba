import assert from 'node:assert/strict';
import fs from 'node:fs';
import { capitals, validateInventory } from '../data/capitalCatalog.ts';
assert.equal(capitals.length,27);
assert.equal(new Set(capitals.map(c=>c.uf)).size,27);
assert.equal(new Set(capitals.map(c=>c.id)).size,27);
let count=0;
for(const capital of capitals.filter(c=>c.available)) {
 const value=validateInventory(JSON.parse(fs.readFileSync(`public/localities/${capital.id}.json`,'utf8').replace(/^\uFEFF/,'')),capital.id);
 assert.ok(['complete','partial'].includes(value.status));
 assert.ok(value.source.url.startsWith('https://'));
 assert.ok(value.localities.length>0);
 count+=value.localities.length;
 if(capital.id==='4106902') assert.equal(value.localities.length,75);
 if(capital.id==='3550308') {assert.equal(value.localities.length,96);assert.ok(value.localities.every(item=>item.kind==='distrito'));}
 if(capital.id==='4205407') assert.equal(value.localities.length,56);
 if(value.source.url.includes('geoftp')) {assert.equal(value.referenceDate,'2022-07-31');assert.equal(value.status,'partial');}
}
assert.throws(()=>validateInventory({capitalId:'wrong'},'4106902'));
assert.throws(()=>validateInventory({capitalId:'4106902',source:{url:'x'},verifiedAt:'2026-10-17',localities:[{id:'3550308:1',name:'Centro',kind:'bairro'}]},'4106902'));
console.log(`Catalog passed: 27 capitals, ${capitals.filter(c=>c.available).length} sourced inventories, ${count} classified units, isolated IDs, dated partial snapshots.`);
