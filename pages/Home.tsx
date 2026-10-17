import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Asterisk } from 'lucide-react';
import { RegionalOffer } from '../components/RegionalOffer';
import { regionalFaq } from '../data/regionalOffer';
import { LeadForm } from '../components/LeadForm';
import { StaticFAQ } from '../components/StaticFAQ';
import { Reveal, ProjectCard, PortfolioStage } from '../components/Showcase';
import { portfolioProjects } from '../data/portfolio';


export const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Suprema Sites Express | Criação de Sites, Sistemas Web, Apps e IA";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Criação do site por R$ 1.680 em pagamento único, com 60 meses de hospedagem. Conheça o plano regional para trabalhar sua presença local.");
    }

    // Organization & LocalBusiness Schema
    const entitySchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": "https://www.supremasite.com.br/#organization",
          "name": "Suprema Sites Express",
          "alternateName": "Suprema Mídia",
          "url": "https://www.supremasite.com.br/",
          "telephone": "+5541992721004",
          "email": "supremamidiabatel@gmail.com",
          "priceRange": "$$",
          "image": "https://www.supremamidia.com.br/images/fachada-suprema-midia-estrutura.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Sete de Setembro, 2775 - Batel",
            "addressLocality": "Curitiba",
            "addressRegion": "PR",
            "postalCode": "80230-010",
            "addressCountry": "BR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -25.4382,
            "longitude": -49.2731
          },
          "areaServed": [
            { "@type": "City", "name": "Curitiba" },
            { "@type": "State", "name": "Paraná" },
            { "@type": "Country", "name": "Brasil" }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Serviços Digitais e Tecnologia em Curitiba",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Agência SEO Curitiba" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Agência de Marketing Digital Curitiba" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads & Tráfego Pago Curitiba" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Local & Google Maps Curitiba" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Criação de Sites Profissionais em Curitiba" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Inteligência Artificial, GEO & Automação Curitiba" } }
            ]
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": regionalFaq.map(item => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } }))
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(entitySchema);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="suprema-home">
      <section className="impact-hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="studio-shell hero-layout">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> ESTÚDIO DIGITAL · CURITIBA, BRASIL</p>
            <h1>O digital<br />não precisa<br />ser <em>igual.</em><Asterisk className="hero-star" aria-hidden="true" /></h1>
            <p className="hero-description">Seu site, sua identidade e presença nas localidades em que sua empresa atende. Conheça a criação do site e o plano regional.</p>
            <div className="hero-actions"><Link className="studio-button orange" to="/presenca-local">Conheça a oferta local <ArrowUpRight size={19} /></Link><a className="text-link" href="https://wa.me/5541992721004">Vamos conversar <ArrowUpRight size={19} /></a></div>
          </div>
          <PortfolioStage />
        </div>
        <div className="studio-shell hero-foot"><span>DESIGN COM PRESENÇA. CÓDIGO COM PROPÓSITO.</span><span>ROLE PARA DESCOBRIR <ArrowDown size={14}/></span></div>
      </section>
      <div className="statement-band" aria-label="Design, tecnologia e estratégia"><span>DESIGN</span><Asterisk aria-hidden="true"/><span>TECNOLOGIA</span><Asterisk aria-hidden="true"/><span>ESTRATÉGIA</span><Asterisk aria-hidden="true"/><span>SUPREMA</span></div>
      <RegionalOffer />
      <section className="selected-work studio-shell" id="portfolio">
        <Reveal><div className="section-intro"><div><p className="eyebrow">01 / TRABALHOS SELECIONADOS</p><h2>Menos promessa.<br /><em>Mais presença.</em></h2></div><div><p>De negócios locais a plataformas digitais. Uma seleção do nosso portfólio, com diferentes desafios e identidades.</p><Link className="text-link dark-link" to="/portfolio">Explore o portfólio completo <ArrowUpRight size={20}/></Link></div></div></Reveal>
        <div className="project-grid">{['1','4','6','7'].map((id,i)=><ProjectCard key={id} project={portfolioProjects.find(p=>p.id===id)!} index={i} />)}</div>
      </section>
      <section className="capabilities"><div className="studio-shell capabilities-layout"><Reveal><p className="eyebrow">02 / O QUE MOVE SUA MARCA</p><h2>Bonito é<br />só o <em>começo.</em></h2><p>Design, desenvolvimento e estratégia trabalhando juntos. Do primeiro clique à próxima etapa do seu negócio.</p><Link className="studio-button orange" to="/servicos">Conheça nossas soluções <ArrowUpRight size={19}/></Link></Reveal><div className="service-list">{[
        ['Sites & e-commerce','Uma presença digital com a identidade da sua empresa.','/servicos'],
        ['Sistemas & aplicativos','Ferramentas sob medida para simplificar sua operação.','/servicos'],
        ['SEO, GEO & AIO','Estrutura e conteúdo para sua marca ser encontrada.','/agencia-seo-curitiba'],
        ['Tráfego & automação','Google Ads e inteligência artificial conectados à estratégia.','/google-ads-curitiba']
      ].map(([title,desc,url],i)=><Reveal key={title}><Link className="service-row" to={url}><span className="service-number">0{i+1}</span><div><h3>{title}</h3><p>{desc}</p></div><ArrowUpRight aria-hidden="true"/></Link></Reveal>)}</div></div></section>
      <section className="process-section studio-shell"><div className="section-intro"><div><p className="eyebrow">03 / DA IDEIA AO DIGITAL</p><h2>Juntos, do briefing<br />ao <em>próximo nível.</em></h2></div><p>Você traz o negócio. A gente conecta estratégia, interface e tecnologia para colocar sua presença digital em movimento.</p></div><div className="process-grid">{[['Imersão','Entendemos sua marca, seu público e o objetivo do projeto.'],['Direção criativa','Desenhamos a experiência e alinhamos o visual com você.'],['Desenvolvimento','Transformamos o conceito em uma experiência responsiva.'],['Lançamento','Testamos, ajustamos e preparamos o projeto para entrar no ar.']].map(([title,desc],i)=><Reveal key={title}><article><span>0{i+1}</span><h3>{title}</h3><p>{desc}</p></article></Reveal>)}</div></section>
      <div className="studio-faq"><StaticFAQ /></div>
      <section className="contact-stage" id="orcamento"><div className="studio-shell contact-layout"><div><p className="eyebrow">04 / VAMOS CRIAR ALGO SEU?</p><h2>Seu próximo<br />grande <em>clique.</em></h2><p>Conte o que você tem em mente. A gente encontra o caminho digital para sua marca.</p><a className="text-link" href="https://wa.me/5541992721004">Fale com a Suprema <ArrowUpRight/></a></div><div className="contact-form"><LeadForm /></div></div></section>
    </div>
  );
};
