export type Locality = { id: string; name: string; kind: 'bairro' | 'bairro-popular' | 'distrito' | 'regiao-administrativa' };
export type CapitalInventory = { capitalId: string; status: 'complete' | 'partial'; verifiedAt: string; referenceDate?: string; source: { title: string; url: string }; note: string; localities: Locality[] };
export const capitals = [
  ['1200401','Rio Branco','AC'],['2704302','Maceió','AL'],['1600303','Macapá','AP'],
  ['1302603','Manaus','AM'],['2927408','Salvador','BA'],['2304400','Fortaleza','CE'],
  ['5300108','Brasília','DF'],['3205309','Vitória','ES'],['5208707','Goiânia','GO'],
  ['2111300','São Luís','MA'],['5103403','Cuiabá','MT'],['5002704','Campo Grande','MS'],
  ['3106200','Belo Horizonte','MG'],['1501402','Belém','PA'],['2507507','João Pessoa','PB'],
  ['4106902','Curitiba','PR'],['2611606','Recife','PE'],['2211001','Teresina','PI'],
  ['3304557','Rio de Janeiro','RJ'],['2408102','Natal','RN'],['4314902','Porto Alegre','RS'],
  ['1100205','Porto Velho','RO'],['1400100','Boa Vista','RR'],['4205407','Florianópolis','SC'],
  ['3550308','São Paulo','SP'],['2800308','Aracaju','SE'],['1721000','Palmas','TO'],
].map(([id,name,uf]) => ({ id, name, uf, available: ['4106902','3550308','2704302','1600303','1302603','2927408','2304400','5103403','5002704','3106200','1501402','2507507','2611606','2211001','2408102','1100205','1400100','2800308','3304557','4314902','3205309','4205407'].includes(id) }));
export const localityKind = { bairro: 'Bairro', 'bairro-popular': 'Bairro popular (endereçamento)', distrito: 'Distrito', 'regiao-administrativa': 'Região administrativa' };
export const pendingNotes: Record<string,string> = {
 '1200401':'A camada cartográfica localizada para Rio Branco identifica uma proposta de bairros. A aprovação e a lista vigente precisam de confirmação.',
 '5208707':'O portal municipal de dados abertos estava indisponível na conferência de 17/10/2026. A lista aguarda validação.',
 '2111300':'A fonte municipal distingue cadastro de bairros e delimitação legal. O inventário ainda precisa ser validado; informe a localidade para consulta.',
 '1721000':'Quadras, bairros, regiões e distritos de Palmas precisam ser diferenciados antes de incluir uma lista.',
 '5300108':'A relação vigente das regiões administrativas está em verificação; informe a região ou localidade para consulta.'
};
export function validateInventory(value: CapitalInventory, capitalId: string): CapitalInventory {
  if(value.capitalId !== capitalId || !Array.isArray(value.localities) || !value.source?.url || !value.verifiedAt) throw new Error('Invalid inventory');
  const ids = new Set<string>();
  for(const item of value.localities) {
    if(!item.id.startsWith(capitalId + ':') || ids.has(item.id) || !item.name || !(item.kind in localityKind)) throw new Error('Invalid locality');
    ids.add(item.id);
  }
  return value;
}
