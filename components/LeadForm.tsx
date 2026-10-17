import React, { useState } from 'react';
interface LeadFormProps { locationName?: string; }
export const LeadForm: React.FC<LeadFormProps> = ({ locationName }) => {
  const [phone, setPhone] = useState('');
  const [trap, setTrap] = useState('');
  const [status, setStatus] = useState('');
  const [ready, setReady] = useState(false);
  const digits = phone.replace(/\D/g, '');
  const message = 'Olá, Suprema! Gostaria de receber contato no telefone ' + phone + (locationName ? '. Região de interesse: ' + locationName : '') + '.';
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (trap) return;
    if (digits.length < 10 || digits.length > 15) { setStatus('Informe um telefone válido com DDD, entre 10 e 15 dígitos.'); setReady(false); return; }
    setReady(true); setStatus('Seu telefone está pronto para envio. Continue no WhatsApp e envie a mensagem para solicitar o contato.');
  };
  return <form className="callback-form bg-white p-6 md:p-8 rounded-2xl border border-slate-200 text-slate-900" onSubmit={submit}>
    <h3 className="text-3xl mb-3">Deixe seu telefone. Entramos em contato.</h3>
    <p className="text-sm mb-5">Envie sua solicitação pelo WhatsApp da Suprema.</p>
    <label className="block font-bold" htmlFor="callback-phone">Telefone com DDD</label>
    <input id="callback-phone" type="tel" inputMode="tel" autoComplete="tel" required maxLength={25} value={phone} onChange={event => { setPhone(event.target.value.replace(/[^0-9+() .-]/g, '')); setReady(false); setStatus(''); }} placeholder="(41) 99999-9999" aria-describedby="phone-privacy callback-status" className="w-full border border-slate-500 rounded p-3 mt-2 mb-4" />
    <div className="honeypot" aria-hidden="true"><label>Empresa<input tabIndex={-1} autoComplete="off" value={trap} onChange={event => setTrap(event.target.value)} /></label></div>
    <button type="submit" className="studio-button orange w-full">Solicitar contato</button>
    <p id="phone-privacy" className="text-xs mt-4">O telefone será compartilhado com a Suprema ao enviar a mensagem no WhatsApp para retorno sobre sua solicitação. <a href="/privacidade" className="underline">Privacidade</a>.</p>
    <p id="callback-status" role="status" className="text-sm mt-4">{status}</p>
    {ready && <a href={'https://wa.me/5541992721004?text=' + encodeURIComponent(message)} target="_blank" rel="noopener noreferrer" className="block underline font-bold py-3">Continuar no WhatsApp para enviar</a>}
  </form>;
};
