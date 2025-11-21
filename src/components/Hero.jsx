import React from 'react';
import { ChevronRight } from 'lucide-react';
import Button from './Button';
import { RESERVATION_URL } from '../constants';

const Hero = ({ sportMode, setSportMode, navigateTo }) => (
  <header id="home" className="relative min-h-[65vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden rounded-b-[2.5rem] md:rounded-b-[5rem] shadow-2xl transition-colors duration-700 bg-slate-900">
    {/* Dynamic Background */}
  <div className="absolute inset-0 z-0">
      {/* 🔴 2. MAIN BACKGROUND PHOTO 🔴 
         Replace the links inside src="..." with your own photo URLs.
         You can have different photos for Ski mode vs Snowboard mode if you want.
      */}
      <img 
        key={sportMode} 
        src={sportMode === 'ski' 
          ? "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          : "https://images.unsplash.com/photo-1522056615691-da7b8106c665?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"}
        alt="Background" 
        className="w-full h-full object-cover object-center animate-fade-in"
        loading="lazy"
      />
      <div className={`absolute inset-0 bg-gradient-to-b ${sportMode === 'ski' ? 'from-slate-900/70 via-emerald-900/40 to-emerald-900/80' : 'from-slate-900/70 via-indigo-900/40 to-indigo-900/80'} transition-colors duration-700`}></div>
    </div>

  <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white pt-12 md:pt-20 pb-20 md:pb-32">

      {/* ✨ NEW: Interactive Mood Switcher ✨ */}
  <div className="inline-flex bg-white/20 backdrop-blur-lg p-1.5 rounded-full mb-6 md:mb-8 border border-white/20 shadow-xl">
          <button 
            onClick={() => setSportMode('ski')}
            className={`px-8 py-3 rounded-full text-base font-bold transition-transform transition-colors duration-500 ease-[cubic-bezier(.22,.9,.35,1)] ${sportMode === 'ski' ? 'bg-emerald-500 text-white shadow-lg transform scale-105' : 'text-white hover:bg-white/10'}`}
          >
            ⛷️ Ski
          </button>
          <button 
            onClick={() => setSportMode('snowboard')}
            className={`px-8 py-3 rounded-full text-base font-bold transition-transform transition-colors duration-500 ease-[cubic-bezier(.22,.9,.35,1)] ${sportMode === 'snowboard' ? 'bg-indigo-500 text-white shadow-lg transform scale-105' : 'text-white hover:bg-white/10'}`}
          >
            🏂 Snowboard
          </button>
        </div>

      {/* Dynamic Text based on mode */}
  <h1 className="text-4xl sm:text-5xl md:text-8xl font-black mb-6 md:mb-8 leading-tight drop-shadow-xl transition-all duration-700 ease-[cubic-bezier(.22,.9,.35,1)]">
        {sportMode === 'ski' ? "Schiul e joacă." : "Placa e libertate."}<br/>
        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${sportMode === 'ski' ? 'from-emerald-300 to-teal-200' : 'from-indigo-300 to-purple-200'}`}>
          {sportMode === 'ski' ? "Noi aducem râsetele." : "Tu aduci curajul."}
        </span>
      </h1>

      <p className="text-base sm:text-lg md:text-2xl mb-8 md:mb-12 max-w-2xl mx-auto text-gray-100 font-medium leading-relaxed opacity-90 transition-opacity duration-600 ease-[cubic-bezier(.22,.9,.35,1)]">
        {sportMode === 'ski' 
          ? "Uită de lecțiile plictisitoare. La noi înveți să aluneci, să te ridici și să te distrezi maxim."
          : "Prima zi pe placă nu trebuie să fie dureroasă. Învață flow-ul corect alături de instructori cool."}
      </p>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-center relative z-30">
        <Button primary href={RESERVATION_URL} className="w-full md:w-auto text-xl shadow-2xl shadow-emerald-900/20" sportMode={sportMode}>
          Vreau un Monitor! <ChevronRight size={24} />
        </Button>
        <Button onClick={() => navigateTo('team')} className="w-full md:w-auto text-xl bg-white/10 text-white border-white/30 hover:bg-white hover:text-slate-900 backdrop-blur-md" sportMode={sportMode}>
          Cunoaște Echipa
        </Button>
      </div>
    </div>
  </header>
);

export default Hero;
