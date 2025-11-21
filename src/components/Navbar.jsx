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
        {['Despre Noi', 'Pachete', 'Echipa Noastră', 'Galerie'].map((item) => (
           <button key={item} onClick={() => navigateTo(item === 'Echipa Noastră' ? 'team' : item.toLowerCase().replace(' ', '-'))} 
           className={`font-bold text-sm uppercase tracking-wide hover:-translate-y-1 transition-all ${scrolled ? 'text-slate-600' : 'text-white'}`}>{item}</button>
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
        {['Despre Noi', 'Pachete', 'Galerie'].map((item) => (
           <button key={item} onClick={() => navigateTo(item.toLowerCase().replace(' ', '-'))} className="text-left text-2xl font-black text-white">{item}</button>
        ))}
        <button onClick={() => navigateTo('team')} className="text-left text-2xl font-black text-white/80">Echipa Noastră</button>
        <Button href={RESERVATION_URL} className={`w-full justify-center bg-white ${sportMode === 'ski' ? 'text-emerald-600' : 'text-indigo-600'}`} sportMode={sportMode}>Rezervă Acum</Button>
      </div>
    )}
  </nav>
);

export default Navbar;
