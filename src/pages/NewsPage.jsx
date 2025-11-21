import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const NewsPage = ({ sportMode }) => {
  const news = [
    { 
      title: "Deschiderea Sezonului 2024-2025", 
      date: "15 Nov 2024", 
      category: "Anunț",
      image: "https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      excerpt: "Suntem gata de start! Pârtiile sunt pregătite, tunurile de zăpadă au funcționat la capacitate maximă. Vă așteptăm începând cu 1 Decembrie!" 
    },
    { 
      title: "Tabăra de Ski pentru Copii - Februarie", 
      date: "10 Nov 2024", 
      category: "Eveniment",
      image: "https://images.unsplash.com/photo-1611487366537-229386258db0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      excerpt: "Înscrierile pentru tabăra din vacanța de februarie sunt deschise. Locuri limitate! 5 zile de distracție, concursuri și premii surpriză." 
    },
    { 
      title: "Echipament Nou în Centrul de Închirieri", 
      date: "01 Nov 2024", 
      category: "Noutăți",
      image: "https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      excerpt: "Am reînnoit stocul de schiuri și plăci. Modele 2025 de la Atomic, Salomon și Burton sunt acum disponibile pentru testare." 
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Noutăți" title="Ultimele știri de pe munte" sportMode={sportMode} />
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {news.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="rounded-3xl overflow-hidden mb-6 relative h-64 shadow-lg">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide text-slate-800">
                  {item.category}
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm font-bold mb-3">
                <Calendar size={14} /> {item.date}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-emerald-500 transition-colors leading-tight">{item.title}</h3>
              <p className="text-slate-600 mb-4 line-clamp-3">{item.excerpt}</p>
              <span className={`inline-flex items-center gap-2 font-bold ${sportMode === 'ski' ? 'text-emerald-500' : 'text-indigo-500'} group-hover:gap-3 transition-all`}>
                Citește mai mult <ArrowRight size={16} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
