import React from 'react';
import { regionalFaq } from '../data/regionalOffer';
export const StaticFAQ = () => <section id="regional-faq" className="regional-faq studio-shell" aria-labelledby="faq-heading"><p className="eyebrow">CONDIÇÕES COMERCIAIS</p><h2 id="faq-heading">Tudo claro, desde o início.</h2>{regionalFaq.map(item => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</section>;
