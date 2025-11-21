import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import TeamView from './components/TeamView';
import NewsView from './components/NewsView';
import LinksView from './components/LinksView';
import OffersView from './components/OffersView';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [activeView, setActiveView] = useState('home');
  // ✨ NEW: Interactive State for "Ski" vs "Snowboard"
  const [sportMode, setSportMode] = useState('ski'); // 'ski' or 'snowboard'

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
    // If user navigates to a full-page view, show that page; otherwise go to home and scroll to the section
    const fullPages = ['team','news','links','offers'];
    if (fullPages.includes(viewId)) {
      setActiveView(viewId);
      // Ensure header is visible when landing on a full page (avoid hidden header at top)
      setHeaderVisible(true);
      setScrolled(false);
      if (typeof window !== 'undefined') {
        lastScrollY.current = 0;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      setActiveView('home');
      setTimeout(() => {
        const element = document.getElementById(viewId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          // If we scroll to top, make sure header is visible
          setHeaderVisible(true);
          setScrolled(false);
          if (typeof window !== 'undefined') {
            lastScrollY.current = 0;
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
      }, 100);
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
      {activeView === 'home' && (
        <HomeView 
          sportMode={sportMode} 
          setSportMode={setSportMode} 
          navigateTo={navigateTo} 
        />
      )}
      {activeView === 'team' && (
        <TeamView navigateTo={navigateTo} sportMode={sportMode} />
      )}
      {activeView === 'news' && (
        <NewsView navigateTo={navigateTo} />
      )}
      {activeView === 'links' && (
        <LinksView navigateTo={navigateTo} />
      )}
      {activeView === 'offers' && (
        <OffersView navigateTo={navigateTo} />
      )}

      <footer className="bg-slate-900 text-slate-500 py-8 border-t border-slate-800 text-center text-sm">
         <p>© {new Date().getFullYear()} Școala de Ski Obârșia Lotrului</p>
      </footer>
    </div>
  );
};

export default App;
