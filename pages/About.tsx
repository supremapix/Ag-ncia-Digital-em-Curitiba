import React, { useEffect } from 'react';
import { CheckCircle, Award, Users, Clock, Shield, Zap, Target, MapPin, Phone, Mail, FileText } from 'lucide-react';

export const About: React.FC = () => {
  useEffect(() => {
    document.title = "Quem Somos | Suprema Site Express - Autoridade em Criação de Sites";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Conheça a história, a equipe e a expertise da Suprema Site Express. Especialistas em React, SEO Local e entrega em 48h com foco em E-E-A-T.");
    }
  }, []);

  const stats = [
    { label: "Clientes Atendidos", value: "+1.200", icon: <Users className="text-brand-primary" /> },
    { label: "Anos de Experiência", value: "+6", icon: <Clock className="text-brand-primary" /> },
    { label: "Aumento de Visibilidade", value: "1.900%", icon: <Zap className="text-brand-primary" /> },
    { label: "Estados Atendidos", value: "27", icon: <Target className="text-brand-primary" /> }
  ];

  const team = [
    {
      name: "Ricardo Santos",
      role: "Fundador e Especialista em Sites",
      bio: "Com vasta experiência em arquitetura de sistemas e visão de negócios, lidera a estratégia técnica da agência.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Ana Paula Ribeiro",
      role: "Especialista em SEO e Performance",
      bio: "Especialista em algoritmos de busca e comportamento do consumidor digital, focada em gerar ROI real para nossos clientes.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
    }
  ];

  const values = [
    { title: "Transparência Total", desc: "Comunicação clara e honesta em todas as etapas do projeto." },
    { title: "Foco no Resultado", desc: "Nosso sucesso é medido pelo crescimento das vendas do cliente." },
    { title: "Inovação Constante", desc: "Sempre utilizando as tecnologias mais modernas do mercado." },
    { title: "Agilidade com Qualidade", desc: "Entrega rápida sem comprometer a excelência técnica." }
  ];

  return (
    <div className="bg-white">
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "Suprema Site Express",
            "alternateName": "Suprema Mídia",
            "url": "https://www.supremasite.com.br/",
            "logo": "https://www.supremasite.com.br/logo.png",
            "foundingDate": "2018",
            "identifier": "15.083.543/0001-97",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Av. Sete de Setembro, 2775",
              "addressLocality": "Curitiba",
              "addressRegion": "PR",
              "postalCode": "80230-010",
              "addressCountry": "BR"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+55-41-98700-1004",
              "contactType": "customer service"
            },
            "member": team.map(member => ({
              "@type": "Person",
              "name": member.name,
              "jobTitle": member.role,
              "description": member.bio
            }))
          }
        })}
      </script>

      {/* Hero Section */}
      <section className="bg-brand-dark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 max-w-3xl mx-auto text-center leading-tight">
            Quem somos: a Suprema Site Express e nossa missão digital
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto text-center">
            Transformando a presença online de empresas brasileiras com tecnologia de ponta e foco em resultados reais.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-dark mb-8 flex items-center gap-3">
            <Clock className="text-brand-primary" /> Nossa história: de Curitiba para todo o Brasil
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>
              Fundada em 2018 no coração de Curitiba, a Suprema Site Express (também conhecida como Suprema Mídia) nasceu com um propósito claro: transformar a presença digital de pequenas e médias empresas brasileiras. O que começou como um escritório focado no mercado local paranaense rapidamente se expandiu para todo o território nacional, impulsionado por uma metodologia que une velocidade e performance técnica.
            </p>
            <p>
              Nossa jornada é marcada pela busca incessante por soluções que não apenas "pareçam bonitas", mas que funcionem como verdadeiras máquinas de vendas. Entendemos que o empresário brasileiro precisa de agilidade, e foi assim que consolidamos nossa famosa entrega em 48 horas. Hoje, orgulhamo-nos de ser uma autoridade em SEO Local e desenvolvimento em React, ajudando negócios de todos os 27 estados a alcançarem o topo do Google. Nossa missão continua sendo a mesma: democratizar a tecnologia de ponta e garantir que cada cliente tenha uma vitrine digital de alta autoridade.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-dark mb-12 text-center">Expertise: por que entendemos de presença digital brasileira</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">Tecnologia React e Cloud</h3>
              <p className="text-gray-600">
                Utilizamos o que há de mais moderno no desenvolvimento web. Nossos sites são construídos com React, garantindo uma navegação fluida (SPA) e performance superior, hospedados em infraestrutura Cloud de alta disponibilidade.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-6">
                <Target className="text-brand-accent" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">SEO Local para o mercado brasileiro</h3>
              <p className="text-gray-600">
                Dominamos as nuances do algoritmo do Google para o Brasil. Implementamos dados estruturados avançados e estratégias de conteúdo geolocalizado que colocam sua empresa no mapa, literalmente.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-6">
                <Clock className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">Entrega ágil: sites em 48 horas</h3>
              <p className="text-gray-600">
                Desenvolvemos um fluxo de trabalho otimizado que nos permite entregar projetos profissionais em tempo recorde, sem comprometer a qualidade técnica ou a segurança.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-brand-dark mb-12 text-center">Nossa equipe</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-brand-primary/10"
                referrerPolicy="no-referrer"
              />
              <h3 className="text-2xl font-bold text-brand-dark mb-2">{member.name}</h3>
              <p className="text-brand-primary font-medium mb-4">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Números que comprovam nossa autoridade</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4 text-3xl">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-brand-dark mb-12">Certificações e Parceiros</h2>
        <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
          <div className="flex flex-col items-center">
            <Award size={48} className="mb-2 text-brand-primary" />
            <span className="font-bold">Google Partner</span>
          </div>
          <div className="flex flex-col items-center">
            <Shield size={48} className="mb-2 text-brand-primary" />
            <span className="font-bold">AWS Certified</span>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle size={48} className="mb-2 text-brand-primary" />
            <span className="font-bold">React Specialist</span>
          </div>
        </div>
      </section>

      {/* Legal Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center">CNPJ e Informações Legais</h2>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FileText className="text-brand-primary mt-1" size={20} />
                <div>
                  <p className="font-bold text-brand-dark">Razão Social</p>
                  <p className="text-gray-600">OSKAFI WEB SITES LTDA ME</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="text-brand-primary mt-1" size={20} />
                <div>
                  <p className="font-bold text-brand-dark">CNPJ</p>
                  <p className="text-gray-600">15.083.543/0001-97</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-brand-primary mt-1" size={20} />
                <div>
                  <p className="font-bold text-brand-dark">Endereço Sede</p>
                  <p className="text-gray-600">Av. Sete de Setembro, 2775, Rebouças<br />Curitiba - PR, 80230-010</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="text-brand-primary mt-1" size={20} />
                <div>
                  <p className="font-bold text-brand-dark">Telefone</p>
                  <p className="text-gray-600">+55 (41) 98700-1004</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="text-brand-primary mt-1" size={20} />
                <div>
                  <p className="font-bold text-brand-dark">E-mail Oficial</p>
                  <p className="text-gray-600">contato@supremasite.com.br</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-brand-dark mb-12 text-center">Nossos Valores</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {values.map((value, idx) => (
            <div key={idx} className="text-center p-6 rounded-xl bg-white border border-gray-100 shadow-sm">
              <h3 className="font-bold text-brand-dark mb-3">{value.title}</h3>
              <p className="text-sm text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
