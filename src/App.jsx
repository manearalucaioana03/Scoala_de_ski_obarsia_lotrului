import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';
import PackagesPage from './pages/PackagesPage';
import GalleryPage from './pages/GalleryPage';
import ReviewsPage from './pages/ReviewsPage';
import NewsPage from './pages/NewsPage';
import LinksPage from './pages/LinksPage';
import TaberePage from './pages/TaberePage';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // ✨ NEW: Interactive State for "Ski" vs "Snowboard"
  const [sportMode, setSportMode] = useState('ski'); // 'ski' or 'snowboard'
  const navigate = useNavigate();

  // Handle scroll effect for navbar and header hide/show on scroll direction
  const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      // if menu is open, keep header visible
      if (isMenuOpen) {
        setHeaderVisible(true);
      } else {
        // show header when scrolling up, hide when scrolling down
        if (currentY > lastScrollY.current && currentY > 50) {
          // scrolling down
          setHeaderVisible(false);
        } else {
          // scrolling up
          setHeaderVisible(true);
        }
      }

      // Consider full pages (not 'home') as scrolled so navbar has contrast
      setScrolled(currentY > 50 || activeView !== 'home');
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen, activeView]);

  // Ensure header initial state reflects actual scroll position (covers direct loads / refreshes)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      lastScrollY.current = window.scrollY;
      // If we're on a full page, treat it as scrolled so navbar has a solid background
      setScrolled(window.scrollY > 50 || activeView !== 'home');
      // make header visible when at top
      if (window.scrollY <= 50) {
        setHeaderVisible(true);
      }
    }
  }, [activeView]);

  // Ensure header is visible when switching to full-page views or on activeView change
  useEffect(() => {
    const fullPages = ['team','news','links','offers'];
    if (fullPages.includes(activeView)) {
      setHeaderVisible(true);
      // ensure navbar has contrast on full pages
      setScrolled(true);
      if (typeof window !== 'undefined') {
        lastScrollY.current = 0;
      }
    }
  }, [activeView]);

  const navigateTo = (viewId) => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    switch (viewId) {
      case 'home':
        navigate('/');
        break;
      case 'despre-noi':
        navigate('/despre-noi');
        break;
      case 'pachete':
        navigate('/pachete');
        break;
      case 'team':
        navigate('/echipa');
        break;
      case 'galerie':
        navigate('/galerie');
        break;
      case 'recenzii':
        navigate('/recenzii');
        break;
      case 'news':
        navigate('/noutati');
        break;
      case 'links':
        navigate('/linkuri');
        break;
      case 'tabere':
        navigate('/tabere');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <div className="font-sans text-slate-800 bg-white overflow-x-hidden selection:bg-emerald-200">
      <Navbar 
        scrolled={scrolled} 
        headerVisible={headerVisible}
        sportMode={sportMode} 
        navigateTo={navigateTo} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
      />
      
      <Routes>
        <Route path="/" element={<HomeView sportMode={sportMode} setSportMode={setSportMode} navigateTo={navigateTo} />} />
        <Route path="/despre-noi" element={<AboutPage sportMode={sportMode} navigateTo={navigateTo} />} />
        <Route path="/pachete" element={<PackagesPage sportMode={sportMode} />} />
        <Route path="/echipa" element={<TeamPage navigateTo={navigateTo} sportMode={sportMode} />} />
        <Route path="/galerie" element={<GalleryPage sportMode={sportMode} />} />
        <Route path="/recenzii" element={<ReviewsPage sportMode={sportMode} />} />
        <Route path="/noutati" element={<NewsPage sportMode={sportMode} />} />
        <Route path="/linkuri" element={<LinksPage sportMode={sportMode} />} />
        <Route path="/tabere" element={<TaberePage sportMode={sportMode} />} />
      </Routes>

      <footer className="bg-slate-900 text-slate-500 py-8 border-t border-slate-800 text-center text-sm">
         <p>© {new Date().getFullYear()} Școala de Ski Obârșia Lotrului</p>
      </footer>
    </div>
  );
};

export default App;
