
import React, { useEffect, useState } from 'react';
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

// Page transition wrapper component
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Force re-triggering of animations
    setAnimationKey(prev => prev + 1);
  }, [pathname]);

  return (
    <div key={animationKey} className="page-enter">
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
              <Route path="/contato" element={<Contact />} />
              <Route path="/site-em-:slug" element={<LocationSEO />} />
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
