import React, { useEffect, useState } from 'react';
import { capitals, localityKind, pendingNotes, validateInventory, type CapitalInventory } from '../data/capitalCatalog';
const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const cache = new Map<string, CapitalInventory>();
export const CapitalExplorer = () => {
  const [capitalId, setCapitalId] = useState(() => { const id = new URLSearchParams(window.location.search).get('capital'); return capitals.some(c => c.id === id) ? id! : '4106902'; });
  const [query, setQuery] = useState('');
  const [requestedLocality, setRequestedLocality] = useState('');
  const [inventory, setInventory] = useState<CapitalInventory | null>(null);
  const [state, setState] = useState<'loading'|'ready'|'pending'|'error'>('loading');
  const capital = capitals.find(item => item.id === capitalId)!;
  useEffect(() => {
    setInventory(null); setQuery(''); setRequestedLocality('');
    if(!capital.available) { setState('pending'); return; }
    const controller = new AbortController();
    setState('loading');
    const cached = cache.get(capitalId);
    if(cached) { setInventory(cached); setState('ready'); return; }
    fetch(`/localities/${capitalId}.json`, {signal: controller.signal}).then(response => {
      if(!response.ok) throw new Error('Unavailable');
      return response.json();
    }).then(value => {
      const data = validateInventory(value, capitalId);
      if(controller.signal.aborted) return;
      cache.set(capitalId,data); setInventory(data); setState('ready');
    }).catch(() => { if(!controller.signal.aborted) setState('error'); });
    return () => controller.abort();
  }, [capitalId,capital.available]);
  const visible = inventory?.localities.filter(item => normalize(item.name).includes(normalize(query))) ?? [];
  return <section className="capital-explorer studio-shell" aria-labelledby="capital-heading">
    <p className="eyebrow">LOCALIDADES NAS CAPITAIS</p><h2 id="capital-heading">Encontre sua capital.</h2>
    <p>26 capitais estaduais e Brasília. As listas são disponibilizadas por etapas, com fonte e limites de cada base. Esta consulta não representa contratação nem cobertura de toda a cidade.</p>
    <label>Capital e UF<select value={capitalId} onChange={event => setCapitalId(event.target.value)}>{capitals.map(item => <option key={item.id} value={item.id}>{item.name} — {item.uf}</option>)}</select></label>
    <div role="status">{state==='loading' ? 'Carregando localidades…' : state==='error' ? 'Não foi possível carregar a lista. Escolha outra capital ou tente novamente mais tarde.' : state==='pending' ? `Lista de ${capital.name} — ${capital.uf} em verificação. Consulte sua localidade com a Suprema.` : `${inventory?.localities.length} unidades disponíveis na base de ${capital.name} — ${capital.uf}.`}</div>
    {state==='pending' && <p>{pendingNotes[capital.id]} A ausência de uma lista aqui não significa ausência de bairros na capital.</p>}
    {capital.uf==='DF' && <p>O Distrito Federal é dividido em regiões administrativas. Elas não serão apresentadas como bairros nem calculadas pela tarifa de bairro. <a href="https://atlas.ipe.df.gov.br/">Fonte: Atlas do Distrito Federal, IPEDF.</a></p>}
    {inventory && <><p>{inventory.note}</p><p className="catalog-provenance">{inventory.status==='complete' ? 'Lista completa no recorte da fonte' : 'Lista parcial'} • Conferência: {inventory.verifiedAt}{inventory.referenceDate && ` • Referência territorial: ${inventory.referenceDate}`}. Não pressupõe ausência de alterações posteriores. <a href={inventory.source.url}>{inventory.source.title}</a></p>
      {inventory.additionalSources && <p className="catalog-provenance">Fontes complementares: {inventory.additionalSources.map(source => <a key={source.url} href={source.url} style={{display:'block'}}>{source.title}</a>)}</p>}
      <label>Buscar localidade em {capital.name} — {capital.uf}<input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Digite o nome da localidade" /></label>
      <p role="status">{visible.length} resultados</p>
      <ul className="capital-localities">{visible.map(item => <li key={item.id}><strong>{item.name}</strong><span>{localityKind[item.kind]} • {capital.name} — {capital.uf}</span><small>{capital.id==='4106902' && item.kind==='bairro' ? 'Disponível na calculadora abaixo' : 'Proposta sob consulta'}</small></li>)}</ul>
      {capital.id==='4106902' && <a className="text-link dark-link" href="#calculator-heading">Simular bairros de Curitiba</a>}
    </>}
    <p>Capital inteira, distritos, regiões administrativas e planos que combinam cidades: escopo e valores sob consulta. Os valores da calculadora abaixo se referem aos bairros de Curitiba, sem tarifa para o Brasil inteiro.</p>
    <label>Informe seu bairro ou localidade<input value={requestedLocality} maxLength={120} onChange={event=>setRequestedLocality(event.target.value)} placeholder="Não encontrou? Informe o nome aqui" /></label><p>O nome informado será enviado somente se você continuar no WhatsApp e enviar a mensagem. Informar uma localidade não confirma sua classificação nem contratação.</p>
    <a href={'https://wa.me/5541992721004?text='+encodeURIComponent(`Olá! Gostaria de consultar presença local em ${capital.name} — ${capital.uf}.${requestedLocality ? ' Localidade: '+requestedLocality : ''}`)} className="studio-button orange">Consultar {capital.name}</a>
  </section>;
};
