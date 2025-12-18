import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { LocationSEO } from './pages/LocationSEO';
import { Portfolio } from './pages/Portfolio';
import { About } from './pages/About';
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
            {/* Dynamic Routes for SEO Locations */}
            <Route path="/site-em-:slug" element={<LocationSEO />} />
            <Route path="/bairros/:slug" element={<LocationSEO />} />
            <Route path="/cidades/:slug" element={<LocationSEO />} />
            
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