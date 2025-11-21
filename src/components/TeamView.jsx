import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import Button from './Button';
import { RESERVATION_URL } from '../constants';

const TeamView = ({ navigateTo, sportMode }) => {
  // 🔴 3. TEAM PHOTOS & DETAILS 🔴
  // Update the list below. Change "img" to your photo links.
  // Add a 'modes' field so we can show different teams for ski vs snowboard
  const instructors = [
    { 
      name: "Edy", 
      role: "Head Instructor", 
      motto: "Dacă nu cazi, înseamnă că nu încerci destul!", 
      img: "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", 
      desc: "Edy are răbdare de fier și glume în buzunar pentru fiecare căzătură.",
      modes: ['ski','snowboard']
    },
    { 
      name: "Raluca", 
      role: "Specialist Copii", 
      motto: "Zâmbetul e cel mai bun echipament.", 
      img: "https://images.unsplash.com/photo-1611487366537-229386258db0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", 
      desc: "Magiciană cu cei mici. Transformă 'mi-e frică' în 'mai vreau o dată'.",
      modes: ['ski']
    },
    { 
      name: "Bogdan", 
      role: "Snowboard Guru", 
      motto: "Chill vibes only.", 
      img: "https://images.unsplash.com/photo-1522056615691-da7b8106c665?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", 
      desc: "Stil relaxat și tehnică impecabilă pentru viitorii snowboarderi.",
      modes: ['snowboard']
    },
    { 
      name: "Gabriela", 
      role: "Ski Instructor", 
      motto: "Eleganță pe pârtie.", 
      img: "https://images.unsplash.com/photo-1485511213494-139515f4984a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", 
      desc: "Te învață nu doar să schiezi, ci să dansezi cu schiurile.",
      modes: ['ski']
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
           <button onClick={() => navigateTo('home')} className="inline-flex items-center gap-2 text-slate-400 font-bold hover:text-emerald-500 mb-6 transition-colors">
             <ArrowRight className="rotate-180" size={20}/> Înapoi acasă
           </button>
           <SectionTitle subtitle="Echipa" title="Oamenii care te țin pe picioare" sportMode={sportMode} />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.filter(person => person.modes.includes(sportMode)).map((person, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col group">
              <div className="h-64 overflow-hidden relative">
                <img src={person.img} alt={person.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 pt-20">
                  <h3 className="text-white font-black text-3xl">{person.name}</h3>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-xs font-bold text-emerald-500 italic mb-3">"{person.motto}"</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{person.desc}</p>
                <div className="mt-auto">
                  <Button primary href={RESERVATION_URL} className="w-full !text-sm !py-3 !rounded-xl" sportMode={sportMode}>Rezervă cu {person.name}</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamView;
