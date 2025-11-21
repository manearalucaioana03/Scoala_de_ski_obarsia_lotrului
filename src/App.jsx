import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
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
  const [headerVisible, setHeaderVisible] = useState(true);
  const [activeView, setActiveView] = useState('home');
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
          setHeaderVisible(false);
        } else {
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
      setScrolled(window.scrollY > 50 || activeView !== 'home');
      if (window.scrollY <= 50) {
        setHeaderVisible(true);
      }
    }
  }, [activeView]);

  // Ensure header is visible when switching to full-page views or on activeView change
  useEffect(() => {
    const fullPages = [
      'team',
      'news',
      'links',
      'tabere',
      'despre-noi',
      'pachete',
      'galerie',
      'recenzii',
    ];
    if (fullPages.includes(activeView)) {
      setHeaderVisible(true);
      setScrolled(true);
      if (typeof window !== 'undefined') {
        lastScrollY.current = 0;
      }
    }
  }, [activeView]);

  const navigateTo = (viewId) => {
    setIsMenuOpen(false);
    // If user navigates to a full-page view, show that page; otherwise go to home and scroll to the section
    const fullPages = [
      'team',
      'news',
      'links',
      'tabere',
      'despre-noi',
      'pachete',
      'galerie',
      'recenzii',
    ];
    if (fullPages.includes(viewId)) {
      setActiveView(viewId);
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
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={activeView}
          classNames="fluid"
          timeout={400}
          unmountOnExit
        >
          <div>
            {activeView === 'home' && (
              <HomeView
                sportMode={sportMode}
                setSportMode={setSportMode}
                navigateTo={navigateTo}
              />
            )}
            {activeView === 'team' && (
              <TeamPage navigateTo={navigateTo} sportMode={sportMode} />
            )}
            {activeView === 'news' && (
              <NewsPage sportMode={sportMode} />
            )}
            {activeView === 'links' && (
              <LinksPage sportMode={sportMode} />
            )}
            {activeView === 'tabere' && (
              <TaberePage sportMode={sportMode} />
            )}
            {activeView === 'despre-noi' && (
              <AboutPage sportMode={sportMode} navigateTo={navigateTo} />
            )}
            {activeView === 'pachete' && (
              <PackagesPage sportMode={sportMode} />
            )}
            {activeView === 'galerie' && (
              <GalleryPage sportMode={sportMode} />
            )}
            {activeView === 'recenzii' && (
              <ReviewsPage sportMode={sportMode} />
            )}
          </div>
        </CSSTransition>
      </SwitchTransition>
      <footer className="bg-slate-900 text-slate-500 py-8 border-t border-slate-800 text-center text-sm">
        <p>© {new Date().getFullYear()} Școala de Ski Obârșia Lotrului</p>
      </footer>
    </div>
  );
};

export default App;
