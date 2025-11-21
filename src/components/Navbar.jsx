import React from 'react';
import { Calendar, Menu, X, Snowflake } from 'lucide-react';
import Button from './Button';
import { RESERVATION_URL } from '../constants';

const Navbar = ({ scrolled, sportMode, navigateTo, isMenuOpen, setIsMenuOpen }) => (
  <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
    <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
      <div className="flex items-center gap-2 cursor-pointer group" onClick={() => navigateTo('home')}>
        <div className={`w-12 h-12 ${sportMode === 'ski' ? 'bg-emerald-500' : 'bg-indigo-500'} rounded-2xl rotate-3 group-hover:rotate-12 transition-all duration-500 flex items-center justify-center text-white shadow-lg`}>
          <Snowflake size={24} className="animate-pulse" />
        </div>
        <div className={`font-black text-xl leading-tight ${scrolled ? 'text-slate-800' : 'text-white'}`}>
          Școala de Ski<br/><span className={`${sportMode === 'ski' ? 'text-emerald-400' : 'text-indigo-300'} transition-colors duration-500`}>Obârșia Lotrului</span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {[
          { label: 'Despre Noi', id: 'despre-noi' },
          { label: 'Pachete', id: 'pachete' },
          { label: 'Echipa Noastră', id: 'team' },
          { label: 'Galerie', id: 'galerie' },
          { label: 'Recenzii', id: 'recenzii' },
          { label: 'Noutăți', id: 'news' },
          { label: 'Linkuri', id: 'links' },
          { label: 'Tabere', id: 'tabere' }
        ].map((item) => (
           <button key={item.id} onClick={() => navigateTo(item.id)}
             className={`font-bold text-sm uppercase tracking-wide hover:-translate-y-1 transition-all ${scrolled ? 'text-slate-600' : 'text-white'}`}>{item.label}</button>
        ))}
        <Button primary href={RESERVATION_URL} className="!py-2 !px-6 !text-sm" sportMode={sportMode}>
          Rezervă <Calendar size={16} />
        </Button>
      </div>

      <button className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-md" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={28} className={scrolled ? "text-slate-800" : "text-white"} /> : <Menu size={28} className={scrolled ? "text-slate-800" : "text-white"} />}
      </button>
    </div>
      {isMenuOpen && (
      <div className={`absolute top-full left-0 w-full ${sportMode === 'ski' ? 'bg-emerald-600' : 'bg-indigo-600'} shadow-2xl p-6 flex flex-col gap-6 md:hidden`}>
        {[{label:'Despre Noi', id:'despre-noi'}, {label:'Pachete', id:'pachete'}, {label:'Galerie', id:'galerie'}].map((item) => (
           <button key={item.id} onClick={() => navigateTo(item.id)} className="text-left text-2xl font-black text-white">{item.label}</button>
        ))}
        <button onClick={() => navigateTo('team')} className="text-left text-2xl font-black text-white/80">Echipa Noastră</button>
        <button onClick={() => navigateTo('recenzii')} className="text-left text-2xl font-black text-white">Recenzii</button>
        <button onClick={() => navigateTo('news')} className="text-left text-2xl font-black text-white">Noutăți</button>
        <button onClick={() => navigateTo('links')} className="text-left text-2xl font-black text-white">Linkuri</button>
        <button onClick={() => navigateTo('offers')} className="text-left text-2xl font-black text-white">Oferte</button>
        <Button href={RESERVATION_URL} className={`w-full justify-center bg-white ${sportMode === 'ski' ? 'text-emerald-600' : 'text-indigo-600'}`} sportMode={sportMode}>Rezervă Acum</Button>
      </div>
    )}
  </nav>
);

export default Navbar;
