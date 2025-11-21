import React from 'react';
import { MapPin, Shield, Heart, Award } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const AboutPage = ({ sportMode, navigateTo }) => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80" 
                alt="Fun instructor" 
                className="rounded-[2.5rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px] rotate-3">
                <p className="font-black text-5xl text-emerald-500 mb-1">5 <span className="text-2xl text-yellow-400">★</span></p>
                <p className="text-slate-800 text-sm font-bold leading-tight">Rating pe Google & Facebook</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <SectionTitle align="left" subtitle="Vibe-ul Nostru" title="Mai mult decât 'îndoaie genunchii'" sportMode={sportMode} />
            <p className="text-xl text-slate-600 mb-6">
              La noi la Obârșia Lotrului, nu suntem o armată. Suntem o gașcă. Credem că înveți cel mai bine când ești relaxat și te distrezi.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Povestea noastră a început din pasiunea pentru munte și dorința de a împărtăși bucuria alunecării pe zăpadă. 
              Nu ne interesează doar să te învățăm tehnică, ci să te facem să te îndrăgostești de iarnă. 
              Fiecare instructor din echipa noastră a fost ales nu doar pentru certificări, ci pentru capacitatea de a zâmbi și de a încuraja.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {["Răbdare Infinită", "Fără Țipete", "Video Analiză", "Glume Incluse"].map((tag, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-emerald-50">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">✓</div>
                  <span className="font-bold text-slate-700">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-24">
          <SectionTitle subtitle="Valorile Noastre" title="De ce să ne alegi pe noi?" sportMode={sportMode} />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Shield size={40} />, title: "Siguranță pe primul loc", desc: "Nu riscăm niciodată. Echipamentul și condițiile meteo sunt verificate constant." },
              { icon: <Heart size={40} />, title: "Pasiune pură", desc: "Nu e doar un job pentru noi. E stilul nostru de viață și vrem să te molipsim." },
              { icon: <Award size={40} />, title: "Progres garantat", desc: "Metodologia noastră modernă asigură rezultate vizibile de la prima ședință." }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl hover:shadow-lg transition-all text-center">
                <div className={`inline-flex p-4 rounded-2xl mb-6 ${sportMode === 'ski' ? 'bg-emerald-100 text-emerald-600' : 'bg-indigo-100 text-indigo-600'}`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Location Section */}
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
             {/* Abstract map pattern or image could go here */}
             <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <span className="text-emerald-400 font-bold tracking-widest uppercase mb-2 block">Locația Noastră</span>
              <h2 className="text-4xl md:text-5xl font-black mb-6">Obârșia Lotrului</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Un colț de rai ascuns în inima munților. Pârtii perfecte pentru începători, peisaje care îți taie respirația și o liniște pe care o găsești rar în stațiunile aglomerate.
                Suntem situați chiar la baza pârtiei, gata să te întâmpinăm cu ceai cald și echipament pregătit.
              </p>
              <div className="flex items-center gap-4 text-emerald-400 font-bold">
                <MapPin size={24} />
                <span>Județul Vâlcea, România</span>
              </div>
            </div>
            <div className="md:w-1/2 w-full h-80 bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-700/50">
              {/* Placeholder for Map */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2814.267873465866!2d23.62466631555564!3d45.43266697910064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474c3f7b7b7b7b7b%3A0x7b7b7b7b7b7b7b7b!2sObarsia%20Lotrului!5e0!3m2!1sen!2sro!4v1620000000000!5m2!1sen!2sro" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy"
                title="Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
