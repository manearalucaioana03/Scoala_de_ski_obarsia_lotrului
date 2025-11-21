import React from 'react';
import { ExternalLink, Cloud, Home, Camera, Map } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const LinksPage = ({ sportMode }) => {
  const links = [
    { 
      title: "Starea Pârtiilor", 
      desc: "Vezi camerele web live și starea zăpezii.", 
      icon: <Camera size={32} />, 
      url: "#",
      color: "bg-blue-100 text-blue-600"
    },
    { 
      title: "Prognoza Meteo", 
      desc: "Vremea pe următoarele 3 zile la Obârșia Lotrului.", 
      icon: <Cloud size={32} />, 
      url: "#",
      color: "bg-sky-100 text-sky-600"
    },
    { 
      title: "Cazare în Zonă", 
      desc: "Pensiuni și hoteluri partenere recomandate.", 
      icon: <Home size={32} />, 
      url: "#",
      color: "bg-orange-100 text-orange-600"
    },
    { 
      title: "Harta Domeniului", 
      desc: "Descarcă harta completă a pârtiilor.", 
      icon: <Map size={32} />, 
      url: "#",
      color: "bg-emerald-100 text-emerald-600"
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Linkuri Utile" title="Resurse pentru vacanța ta" sportMode={sportMode} />
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {links.map((link, i) => (
            <a 
              key={i} 
              href={link.url} 
              target="_blank" 
              rel="noreferrer"
              className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-lg transition-all flex items-center gap-6 group"
            >
              <div className={`w-20 h-20 rounded-2xl ${link.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                {link.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-black text-slate-900 mb-1 flex items-center gap-2">
                  {link.title} <ExternalLink size={16} className="opacity-30 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-slate-600 text-sm">{link.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinksPage;
