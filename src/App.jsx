import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import TeamView from './components/TeamView';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeView, setActiveView] = useState('home');
  // ✨ NEW: Interactive State for "Ski" vs "Snowboard"
  const [sportMode, setSportMode] = useState('ski'); // 'ski' or 'snowboard'

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
    if (viewId === 'team') {
      setActiveView('team');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setActiveView('home');
      setTimeout(() => {
        const element = document.getElementById(viewId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
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
      {activeView === 'home' ? (
        <HomeView 
          sportMode={sportMode} 
          setSportMode={setSportMode} 
          navigateTo={navigateTo} 
        />
      ) : (
        <TeamView 
          navigateTo={navigateTo} 
          sportMode={sportMode} 
        />
      )}

      <footer className="bg-slate-900 text-slate-500 py-8 border-t border-slate-800 text-center text-sm">
         <p>© {new Date().getFullYear()} Școala de Ski Obârșia Lotrului</p>
      </footer>
    </div>
  );
};

export default App;
