
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
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Sitemap } from './pages/Sitemap';
import { Privacy } from './pages/Privacy';
import { NotFound } from './pages/NotFound';
import { PillarParana } from './pages/PillarParana';
import { PillarSantaCatarina } from './pages/PillarSantaCatarina';
import { PillarRioGrandeDoSul } from './pages/PillarRioGrandeDoSul';
import { PillarBairrosCuritiba } from './pages/PillarBairrosCuritiba';
import { AgenciaSeoCuritiba } from './pages/AgenciaSeoCuritiba';
import { AgenciaMarketingCuritiba } from './pages/AgenciaMarketingCuritiba';
import { GoogleAdsCuritiba } from './pages/GoogleAdsCuritiba';
import { SeoLocalCuritiba } from './pages/SeoLocalCuritiba';
import { IaMarketingCuritiba } from './pages/IaMarketingCuritiba';
import { FloatingButtons } from './components/FloatingButtons';
import { SocialSection } from './components/SocialSection';

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="animate-fade-in">
      {children}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans bg-gray-50">
        <Header />
        <main className="flex-grow">
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicos" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/contato" element={<Contact />} />
              <Route path="/mapa-do-site" element={<Sitemap />} />
              <Route path="/privacidade" element={<Privacy />} />
              <Route path="/sites-em-parana" element={<PillarParana />} />
              <Route path="/sites-em-santa-catarina" element={<PillarSantaCatarina />} />
              <Route path="/sites-em-rio-grande-do-sul" element={<PillarRioGrandeDoSul />} />
              <Route path="/bairros-curitiba" element={<PillarBairrosCuritiba />} />
              <Route path="/agencia-seo-curitiba" element={<AgenciaSeoCuritiba />} />
              <Route path="/agencia-marketing-digital-curitiba" element={<AgenciaMarketingCuritiba />} />
              <Route path="/google-ads-curitiba" element={<GoogleAdsCuritiba />} />
              <Route path="/seo-local-curitiba" element={<SeoLocalCuritiba />} />
              <Route path="/ia-marketing-curitiba" element={<IaMarketingCuritiba />} />
              <Route path="/site-em/:slug" element={<LocationSEO />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageWrapper>
        </main>
        <SocialSection />
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
};

export default App;
