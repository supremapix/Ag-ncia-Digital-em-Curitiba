import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, MessageCircle } from 'lucide-react';
import { VideoPlayer } from '../components/VideoPlayer';
import { Accordion } from '../components/Accordion';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*Novo Contato via Site*\n\n*Nome:* ${formData.name}\n*Telefone:* ${formData.phone}\n*Email:* ${formData.email}\n*Mensagem:* ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/5541987001004?text=${encodedText}`, '_blank');
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-brand-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Estamos prontos para atender empresas de Curitiba, Araucária, São José dos Pinhais, Colombo, Pinhais e toda região metropolitana. Fale com nossa equipe agora!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-brand-dark">Envie uma mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp / Telefone</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                  placeholder="(41) 99999-9999"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Como podemos ajudar?</label>
                <textarea 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                  placeholder="Descreva seu projeto..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Send size={20} />
                Enviar para WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Info & Pix */}
          <div className="space-y-8">
            <div className="bg-brand-dark text-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-brand-accent mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg">Endereço</h3>
                    <p className="text-gray-300">Av. Sete de Setembro, 2775 - 9º andar</p>
                    <p className="text-gray-400 text-sm">Acesso pelo elevador azul ou vermelho</p>
                    <p className="text-gray-300">Rebouças, Curitiba - PR, 80230-010</p>
                    <a href="https://share.google/j6UoHq8uuHfvwOfiW" target="_blank" rel="noreferrer" className="text-brand-accent hover:underline text-sm mt-2 block">Ver no Google Maps</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-brand-accent" size={24} />
                  <div>
                    <h3 className="font-bold text-lg">Telefone / WhatsApp</h3>
                    <p className="text-gray-300">(41) 98700-1004</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-brand-accent" size={24} />
                  <div>
                    <h3 className="font-bold text-lg">E-mail</h3>
                    <p className="text-gray-300">supremamidiabatel@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment / Pix Info */}
            <div className="bg-white border border-brand-accent p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-brand-dark mb-4 text-center border-b pb-2">Dados para Pagamento (PIX)</h3>
              <div className="space-y-3 text-center">
                <p className="text-sm text-gray-500">Razão Social</p>
                <p className="font-bold text-gray-800">OSKAFI WEB SITES LTDA ME</p>
                
                <p className="text-sm text-gray-500 mt-4">Chave Pix (E-mail)</p>
                <p className="font-mono bg-gray-100 p-3 rounded text-lg select-all text-brand-primary">supremapix@gmail.com</p>
                
                <p className="text-sm text-gray-500 mt-4">CNPJ</p>
                <p className="font-mono text-gray-700">15.083.543/0001-97</p>
              </div>
            </div>
            
            {/* Horário de Atendimento */}
            <div className="bg-slate-50 border border-gray-200 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-brand-primary" size={28} />
                <h3 className="text-xl font-bold text-brand-dark">Horário de Atendimento</h3>
              </div>
              <div className="space-y-2 text-gray-700">
                <p><strong>Segunda a Sexta:</strong> 09h às 18h</p>
                <p><strong>Sábados:</strong> 09h às 13h</p>
                <p><strong>WhatsApp 24h:</strong> Resposta em até 2h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Texto 1 - Por que nos contatar */}
        <div className="max-w-5xl mx-auto bg-slate-50 p-12 rounded-2xl shadow-lg mt-16 mb-16">
          <h2 className="text-3xl font-bold text-brand-dark mb-6 text-center">Por Que Escolher a Suprema Site?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Atendimento Rápido e Personalizado</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nossa equipe está localizada em <strong>Curitiba</strong> e atende empresas de toda região metropolitana: <strong>Batel</strong>, <strong>Centro</strong>, <strong>Água Verde</strong>, <strong>CIC</strong>, <strong>Portão</strong>, <strong>Boqueirão</strong>, <strong>Araucária</strong>, <strong>São José dos Pinhais</strong>, <strong>Colombo</strong> e <strong>Pinhais</strong>. Você fala com pessoas reais que entendem seu mercado local.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Respondemos rapidamente via WhatsApp, e-mail ou telefone. Agende reuniões presenciais em nosso escritório ou totalmente online conforme sua preferência.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Orçamentos Sem Compromisso</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Fornecemos orçamentos detalhados e transparentes. Explicamos tudo que está incluído no projeto: número de páginas, funcionalidades, prazos, formas de pagamento e suporte pós-entrega.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Não trabalhamos com surpresas ou taxas ocultas. Você saberá exatamente quanto investirá para ter um <strong>site profissional</strong> que realmente gera resultados e vendas para seu negócio.
              </p>
            </div>
          </div>
        </div>

        {/* Texto 2 - Formas de Contato */}
        <div className="max-w-5xl mx-auto bg-white p-12 rounded-2xl shadow-lg border border-gray-100 mb-16">
          <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center">Múltiplas Formas de Contato</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-green-600" size={32} />
              </div>
              <h3 className="font-bold text-lg text-brand-dark mb-2">WhatsApp</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Forma mais rápida! Envie mensagem para <strong>(41) 98700-1004</strong> e receba resposta em minutos. Ideal para orçamentos rápidos e dúvidas pontuais.
              </p>
              <a href="https://wa.me/5541987001004" className="text-green-600 hover:underline font-bold">Abrir WhatsApp</a>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-blue-600" size={32} />
              </div>
              <h3 className="font-bold text-lg text-brand-dark mb-2">E-mail</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Prefere e-mail? Envie para <strong>supremamidiabatel@gmail.com</strong> com detalhes do seu projeto. Respondemos em até 2 horas úteis.
              </p>
              <a href="mailto:supremamidiabatel@gmail.com" className="text-blue-600 hover:underline font-bold">Enviar E-mail</a>
            </div>
            <div className="text-center">
              <div className="bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-yellow-600" size={32} />
              </div>
              <h3 className="font-bold text-lg text-brand-dark mb-2">Presencial</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Agende uma reunião em nosso escritório na <strong>Av. Sete de Setembro, 2775 - Rebouças, Curitiba</strong>. Estacionamento no local.
              </p>
              <a href="https://share.google/j6UoHq8uuHfvwOfiW" target="_blank" rel="noreferrer" className="text-yellow-600 hover:underline font-bold">Ver no Mapa</a>
            </div>
          </div>
        </div>

        {/* Vídeo */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-brand-dark text-center mb-6">Conheça a Suprema Site</h2>
          <VideoPlayer />
          <p className="text-center text-gray-600 mt-6 text-lg">
            Veja como desenvolvemos sites profissionais otimizados para <strong>Google</strong>, <strong>Bing</strong>, <strong>Yahoo</strong> e mais de 300 buscadores. Atendemos empresas de <strong>Santa Felicidade</strong>, <strong>Pinheirinho</strong>, <strong>Bacacheri</strong>, <strong>Cajuru</strong>, <strong>Xaxim</strong>, <strong>Fazenda Rio Grande</strong>, <strong>Campo Largo</strong>, <strong>Piraquara</strong> e toda região.
          </p>
        </div>

        {/* Texto 3 - Atendimento Regional */}
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-brand-primary to-blue-700 text-white p-12 rounded-2xl shadow-2xl mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Atendimento Especializado para Sua Região</h2>
          <p className="text-gray-100 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
            Conhecemos profundamente o mercado de Curitiba e região metropolitana. Essa expertise local permite criar estratégias de SEO e conteúdo que realmente funcionam para seu público-alvo.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h3 className="font-bold text-xl mb-3 text-brand-accent">Curitiba - Todos os Bairros</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                Atendemos <strong>Batel</strong>, <strong>Centro</strong>, <strong>Água Verde</strong>, <strong>CIC</strong>, <strong>Portão</strong>, <strong>Boqueirão</strong>, <strong>Santa Felicidade</strong>, <strong>Pinheirinho</strong>, <strong>Bacacheri</strong>, <strong>Cajuru</strong>, <strong>Xaxim</strong>, <strong>Bigorrilho</strong>, <strong>Rebouças</strong>, <strong>Ecoville</strong>, <strong>Juvevê</strong>, <strong>Cristo Rei</strong> e todos os demais bairros.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h3 className="font-bold text-xl mb-3 text-brand-accent">Região Metropolitana</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                <strong>Araucária</strong>, <strong>São José dos Pinhais</strong>, <strong>Colombo</strong>, <strong>Pinhais</strong>, <strong>Fazenda Rio Grande</strong>, <strong>Almirante Tamandaré</strong>, <strong>Campo Largo</strong>, <strong>Piraquara</strong>, <strong>Quatro Barras</strong> e todas as cidades da região.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-brand-dark text-center mb-12">Perguntas Frequentes sobre Contato</h2>
          <Accordion items={[
            {
              question: "Qual a forma mais rápida de obter um orçamento?",
              answer: "WhatsApp! Envie uma mensagem para (41) 98700-1004 com informações básicas do projeto (tipo de site, quantas páginas, funcionalidades desejadas) e enviamos um orçamento preliminar em minutos. Para orçamentos detalhados, podemos agendar uma reunião online ou presencial."
            },
            {
              question: "Vocês atendem fora de Curitiba e região?",
              answer: "Sim! Embora nossa sede seja em Curitiba e a maioria dos clientes sejam da região metropolitana, atendemos empresas de todo o Brasil através de atendimento 100% online (videoconferência, WhatsApp, e-mail). Nossos processos são otimizados para trabalho remoto."
            },
            {
              question: "Posso agendar uma reunião presencial?",
              answer: "Sim! Nossa sede fica na Av. Sete de Setembro, 2775 - 9º andar, Rebouças, Curitiba/PR. Entre em contato via WhatsApp ou e-mail para agendar um horário. Temos estacionamento conveniado no prédio. Acesso pelo elevador azul ou vermelho."
            },
            {
              question: "Quanto tempo levam para responder?",
              answer: "WhatsApp: resposta em até 30 minutos em horário comercial. E-mail: resposta em até 2 horas úteis. Telefone: atendimento imediato de segunda a sexta, 9h às 18h, e sábados, 9h às 13h. Mensagens fora do horário são respondidas no próximo dia útil."
            },
            {
              question: "Preciso ter material pronto para solicitar orçamento?",
              answer: "Não! Você pode nos contatar apenas com a ideia do projeto. Ajudamos na definição de escopo, funcionalidades necessárias, quantidade de páginas e até na criação de textos e seleção de imagens. Fazemos uma consultoria completa."
            },
            {
              question: "Emitem nota fiscal?",
              answer: "Sim! Somos uma empresa 100% legalizada (CNPJ 15.083.543/0001-97 - OSKAFI WEB SITES LTDA ME) e emitimos nota fiscal para todos os serviços. Ideal para empresas que precisam de documentação fiscal para prestação de contas."
            }
          ]} />
        </div>

        {/* CTA Final */}
        <div className="max-w-4xl mx-auto bg-brand-accent p-12 rounded-2xl shadow-2xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">Pronto para Transformar Seu Negócio?</h2>
          <p className="text-gray-800 text-lg mb-8">
            Entre em contato agora e descubra como um site profissional pode <strong>multiplicar suas vendas</strong> e colocar sua empresa nas primeiras posições do Google, Bing e Yahoo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5541987001004"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full text-lg inline-flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <MessageCircle size={24} />
              WhatsApp Agora
            </a>
            <a
              href="mailto:supremamidiabatel@gmail.com"
              className="bg-brand-dark hover:bg-gray-800 text-white font-bold py-4 px-10 rounded-full text-lg inline-flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <Mail size={24} />
              Enviar E-mail
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};