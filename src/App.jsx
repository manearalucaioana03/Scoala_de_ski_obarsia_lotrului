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

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
