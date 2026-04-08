
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Tag, Share2, MessageSquare } from 'lucide-react';
import { blogPosts } from '../data/blogData';

export const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === Number(id));

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Blog Suprema Site Express`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', post.excerpt);
      }
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-4">Postagem não encontrada</h1>
        <p className="text-gray-600 mb-8">O artigo que você procura não existe ou foi removido.</p>
        <Link to="/blog" className="bg-brand-primary text-white px-8 py-3 rounded-full font-bold">
          Voltar ao Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-white min-h-screen">
      {/* Hero Section */}
      <header className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 pb-12">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={20} /> Voltar ao Blog
          </Link>
          <div className="flex gap-2 mb-4">
            <span className="bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white max-w-4xl leading-tight tracking-tighter">
            {post.title}
          </h1>
        </div>
      </header>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <main className="lg:col-span-8">
            <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-12 pb-8 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-dark uppercase tracking-wider">Autor</p>
                  <p className="text-sm">{post.author}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={20} className="text-brand-primary" />
                <div>
                  <p className="text-xs font-bold text-brand-dark uppercase tracking-wider">Publicado em</p>
                  <p className="text-sm">{post.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare size={20} className="text-brand-primary" />
                <div>
                  <p className="text-xs font-bold text-brand-dark uppercase tracking-wider">Leitura</p>
                  <p className="text-sm">5 min</p>
                </div>
              </div>
            </div>

            <div 
              className="prose prose-lg prose-brand max-w-none text-gray-700 leading-relaxed
                prose-headings:text-brand-dark prose-headings:font-black prose-headings:tracking-tight
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:mb-6
                prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6
                prose-li:mb-2
                prose-strong:text-brand-dark prose-strong:font-bold"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-16 pt-8 border-t border-gray-100">
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="flex items-center gap-1 bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium">
                    <Tag size={14} /> {tag}
                  </span>
                ))}
              </div>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            {/* CTA Sidebar */}
            <div className="bg-brand-dark text-white p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">Precisa de um site como este?</h3>
              <p className="text-gray-400 mb-8 relative z-10">
                Desenvolvemos sites de alta performance em React com foco total em SEO e conversão.
              </p>
              <a 
                href="https://wa.me/5541987001004" 
                className="block w-full bg-brand-primary text-white text-center py-4 rounded-xl font-bold hover:bg-brand-primary/90 transition-colors relative z-10"
              >
                Solicitar Orçamento
              </a>
            </div>

            {/* Share */}
            <div>
              <h4 className="text-lg font-bold text-brand-dark mb-4 flex items-center gap-2">
                <Share2 size={20} className="text-brand-primary" /> Compartilhe este artigo
              </h4>
              <div className="flex gap-4">
                {['WhatsApp', 'LinkedIn', 'Facebook', 'Twitter'].map(network => (
                  <button key={network} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-primary hover:text-white transition-all">
                    <span className="sr-only">{network}</span>
                    {/* Icons would go here */}
                    <div className="w-4 h-4 bg-current rounded-sm"></div>
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div>
              <h4 className="text-lg font-bold text-brand-dark mb-6">Artigos Relacionados</h4>
              <div className="space-y-6">
                {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map(related => (
                  <Link key={related.id} to={`/blog/${related.id}`} className="flex gap-4 group">
                    <div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden">
                      <img src={related.image} alt={related.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div>
                      <h5 className="font-bold text-brand-dark text-sm line-clamp-2 group-hover:text-brand-primary transition-colors">
                        {related.title}
                      </h5>
                      <p className="text-xs text-gray-500 mt-1">{related.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
};
