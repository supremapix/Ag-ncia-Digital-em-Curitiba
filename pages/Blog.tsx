import React, { useEffect } from 'react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "Quanto custa criar um site profissional no Brasil em 2025?",
    excerpt: "Descubra os valores reais para criar um site profissional em 2025. Analisamos preços de freelancers, agências e plataformas para você investir certo.",
    date: "08 Abr, 2026",
    author: "Omar Skafi",
    category: "Negócios",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Site no Wix vs Site Profissional: qual escolher para sua empresa?",
    excerpt: "Comparativo completo: Wix vs Site Profissional em React. Entenda as limitações de SEO, performance e propriedade que impactam sua empresa.",
    date: "05 Abr, 2026",
    author: "Lizdaiane",
    category: "Tecnologia",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Como aparecer no Google Maps: guia para pequenas empresas",
    excerpt: "Quer atrair clientes próximos? Aprenda como colocar sua empresa no Google Maps e otimizar seu perfil para aparecer no topo das buscas locais.",
    date: "02 Abr, 2026",
    author: "Lizdaiane",
    category: "SEO Local",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "O que é SEO local e por que sua empresa em Curitiba precisa disso",
    excerpt: "Entenda como o SEO Local pode colocar sua empresa de Curitiba na frente da concorrência. Atraia clientes que já estão procurando por você na região.",
    date: "30 Mar, 2026",
    author: "Omar Skafi",
    category: "SEO Local",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "Landing page vs site completo: quando usar cada um",
    excerpt: "Não sabe se precisa de uma Landing Page ou um Site Institucional? Entenda as diferenças e qual opção traz o melhor retorno para sua campanha.",
    date: "25 Mar, 2026",
    author: "Lizdaiane",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "5 erros que afastam clientes do seu site (e como corrigir)",
    excerpt: "Seu site recebe visitas mas não gera vendas? Confira os 5 erros mais comuns que afastam clientes e aprenda como corrigi-los agora.",
    date: "20 Mar, 2026",
    author: "Omar Skafi",
    category: "UX Design",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 7,
    title: "Como criar uma loja virtual do zero em 2025: passo a passo",
    excerpt: "Quer vender online? Siga este passo a passo para criar sua loja virtual em 2025, desde a escolha da plataforma até a primeira venda.",
    date: "15 Mar, 2026",
    author: "Lizdaiane",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 8,
    title: "Core Web Vitals: o que são e por que impactam seu negócio",
    excerpt: "Entenda o que são os Core Web Vitals e como a velocidade e estabilidade do seu site influenciam diretamente no seu ranking e nas suas vendas.",
    date: "10 Mar, 2026",
    author: "Omar Skafi",
    category: "Tecnologia",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 9,
    title: "Criação de sites para restaurantes: guia completo",
    excerpt: "Seu restaurante precisa de mais do que um Instagram. Aprenda como um site profissional pode aumentar suas reservas e pedidos diretos sem taxas.",
    date: "05 Mar, 2026",
    author: "Lizdaiane",
    category: "Nicho",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 10,
    title: "Sites para clínicas e consultórios: requisitos e boas práticas",
    excerpt: "Guia completo para médicos e profissionais da saúde. Como criar um site que transmite confiança e facilita o agendamento de consultas.",
    date: "01 Mar, 2026",
    author: "Omar Skafi",
    category: "Nicho",
    image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 11,
    title: "Como escolher a melhor agência de sites para sua empresa",
    excerpt: "Não erre na contratação! Saiba o que avaliar ao escolher uma agência de sites para garantir um projeto de sucesso e sem dores de cabeça.",
    date: "25 Fev, 2026",
    author: "Omar Skafi",
    category: "Negócios",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 12,
    title: "Site responsivo: por que 80% das buscas vêm do celular",
    excerpt: "Ter um site que funciona no celular não é mais luxo, é obrigação. Entenda por que o Google prioriza sites responsivos e como isso afeta suas vendas.",
    date: "20 Fev, 2026",
    author: "Lizdaiane",
    category: "UX Design",
    image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&q=80&w=800"
  }
];

export const Blog: React.FC = () => {
  useEffect(() => {
    document.title = "Blog | Suprema Site Express - Dicas de SEO e Criação de Sites";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Acesse nosso blog e confira as melhores dicas sobre criação de sites, SEO local, marketing digital e performance para sua empresa.");
    }
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Blog Suprema Site Express</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Estratégias de marketing digital, tecnologia e SEO para acelerar o crescimento da sua empresa.
          </p>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Buscar artigos..." 
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
            />
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {["Todos", "SEO Local", "Tecnologia", "Negócios", "Marketing", "E-commerce"].map((cat) => (
              <button key={cat} className="whitespace-nowrap px-4 py-1 rounded-full text-sm font-medium hover:bg-brand-primary hover:text-white transition-colors border border-gray-200">
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                </div>
                <h2 className="text-xl font-bold text-brand-dark mb-3 line-clamp-2 group-hover:text-brand-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`} 
                  className="inline-flex items-center gap-2 text-brand-primary font-bold text-sm hover:underline"
                >
                  Ler artigo completo <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-brand-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Fique por dentro das novidades</h2>
          <p className="mb-8 opacity-90">Receba dicas exclusivas de SEO e marketing digital diretamente no seu e-mail.</p>
          <form className="max-w-md mx-auto flex gap-2">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="flex-1 px-6 py-3 rounded-xl text-brand-dark focus:outline-none"
            />
            <button className="bg-brand-dark text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition-colors">
              Assinar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
