import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-4">
      <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 max-w-lg w-full">
        <h1 className="text-9xl font-extrabold text-brand-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold text-brand-dark mb-4">Página Não Encontrada</h2>
        <p className="text-gray-600 mb-8 text-lg">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="flex items-center justify-center gap-2 bg-brand-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            <Home size={20} />
            Voltar ao Início
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-100 text-gray-700 font-bold py-3 px-6 rounded-lg transition-colors"
          >
            <ArrowLeft size={20} />
            Voltar Anterior
          </button>
        </div>
      </div>
    </div>
  );
};