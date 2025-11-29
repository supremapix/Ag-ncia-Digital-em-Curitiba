import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { LocationSEO } from './pages/LocationSEO';
import { Portfolio } from './pages/Portfolio';
import { NotFound } from './pages/NotFound';
import { FloatingButtons } from './components/FloatingButtons';
import { SocialSection } from './components/SocialSection';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const About = () => (
  <div className="py-20 container mx-auto px-4">
    <h1 className="text-4xl font-bold mb-6 text-brand-dark">Sobre a Suprema Site</h1>
    <div className="prose max-w-none text-gray-700">
      <p>A <strong>OSKAFI WEB SITES LTDA ME</strong>, atuando sob o nome fantasia Suprema Site, é uma agência digital consolidada em Curitiba, Paraná.</p>
      <p>Com mais de uma década de experiência, nos especializamos em criar soluções web que realmente funcionam. Não vendemos apenas sites; vendemos ferramentas de crescimento para o seu negócio.</p>
      <p>Localizados no coração do bairro Rebouças, atendemos clientes de todo o Brasil com a mesma dedicação e qualidade técnica.</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans bg-gray-50">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            {/* Dynamic Route for SEO Locations */}
            <Route path="/site-em-:slug" element={<LocationSEO />} />
            
            {/* Catch-all Route for 404 Errors */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {/* Social Section appears on all pages before footer */}
        <SocialSection />
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
};

export default App;