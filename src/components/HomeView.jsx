import React from 'react';
import { Snowflake, Instagram, Facebook } from 'lucide-react';
import Hero from './Hero';
import FloatingStats from './FloatingStats';
import SectionTitle from './SectionTitle';
import Button from './Button';
import { RESERVATION_URL } from '../constants';
import Sponsors from './Sponsors';
import { GOOGLE_REVIEWS_URL } from '../constants';

const HomeView = ({ sportMode, setSportMode, navigateTo }) => (
  <>
    <Hero sportMode={sportMode} setSportMode={setSportMode} navigateTo={navigateTo} />
    <FloatingStats />

    <section id="despre-noi" className="py-20 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              {/* 🔴 4. ABOUT US PHOTO 🔴 */}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {["Răbdare Infinită", "Fără Țipete", "Video Analiză", "Glume Incluse"].map((tag, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-emerald-50">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">✓</div>
                  <span className="font-bold text-slate-700">{tag}</span>
                </div>
              ))}
            </div>
            <Button onClick={() => navigateTo('team')} sportMode={sportMode}>
              Vezi cine te va învăța
            </Button>
          </div>
        </div>
      </div>
    </section>

    <section id="pachete" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Alege Stilul" title="Pachete pentru Toți" sportMode={sportMode} />
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Start", sub: "Începători", color: sportMode === 'ski' ? "bg-emerald-500" : "bg-indigo-500", feat: ["1 la 1 cu monitorul", "Ritmul tău", "Siguranță maximă"] },
            { title: "Gașca", sub: "Grup (2-4 pers)", color: "bg-blue-500", feat: ["Distracție cu prietenii", "Învățare prin joc", "Competiție amicală"] },
            { title: "Pro", sub: "Avansați", color: "bg-purple-500", feat: ["Tehnică avansată", "Video analiză", "Corectare stil"] }
          ].map((pkg, i) => (
            <div key={i} className="bg-slate-50 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all border border-slate-100">
              <div className={`w-14 h-14 ${pkg.color} rounded-2xl mb-6 flex items-center justify-center shadow-lg text-white`}>
                <Snowflake size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-900">{pkg.title}</h3>
              <p className="text-slate-400 font-bold text-sm uppercase mb-6">{pkg.sub}</p>
              <ul className="space-y-3 mb-8">
                {pkg.feat.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                    <div className={`w-1.5 h-1.5 rounded-full ${pkg.color}`}></div> {f}
                  </li>
                ))}
              </ul>
              <Button href={RESERVATION_URL} className="w-full !text-sm !py-3 bg-white border-2 border-slate-200" sportMode={sportMode}>Rezervă Acum</Button>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="galerie" className="py-10">
       <div className="container mx-auto px-4">
         <SectionTitle subtitle="Galerie" title="Life at Obârșia Lotrului" sportMode={sportMode} />
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[500px]">
           <div className="col-span-2 row-span-2 rounded-[2rem] overflow-hidden relative group shadow-lg">
              {/* 🔴 5. GALLERY PHOTOS 🔴 - Update src="..." links here */}
              <img src="https://images.unsplash.com/photo-1516458464372-eea4ab222631?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Ski" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
           </div>
           <div className="rounded-[2rem] overflow-hidden relative group shadow-lg">
              <img src="https://images.unsplash.com/photo-1551524559-8af4e6624178?ixlib=rb-4.0.3&auto=format&fit=crop&w=1026&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Ski" />
           </div>
           {/* 🔴 6. INSTAGRAM LINK (Gallery Box) 🔴 */}
           <a href="https://instagram.com/YOUR_ACCOUNT" target="_blank" rel="noreferrer" className={`rounded-[2rem] overflow-hidden relative group shadow-lg ${sportMode === 'ski' ? 'bg-emerald-100' : 'bg-indigo-100'} flex flex-col items-center justify-center p-6 transition-colors cursor-pointer hover:shadow-xl`}>
              <Instagram size={32} className={`mb-2 ${sportMode === 'ski' ? 'text-emerald-600' : 'text-indigo-600'}`} />
              <p className={`font-black text-lg text-center leading-tight ${sportMode === 'ski' ? 'text-emerald-800' : 'text-indigo-800'}`}>Urmărește-ne pe Instagram!</p>
           </a>
           <div className="col-span-2 rounded-[2rem] overflow-hidden relative group shadow-lg">
              <img src="https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Ski" />
           </div>
         </div>
       </div>
    </section>

    {/* Sponsors / Partners section */}
    <section id="sponsori" className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Parteneri" title="Mulțumim sponsorilor noștri" sportMode={sportMode} />
        <Sponsors sportMode={sportMode} />
      </div>
    </section>

    {/* Reviews/Recenzii - links to Google reviews */}
    <section id="recenzii" className="py-12">
      <div className="container mx-auto px-4 text-center">
        <SectionTitle subtitle="Păreri" title="Ce spun oamenii despre noi" sportMode={sportMode} />
        <p className="mb-6 text-slate-600">Vezi recenziile verificare pe Google pentru experiențe reale.</p>
        <div className="flex justify-center">
          <Button href={GOOGLE_REVIEWS_URL} className="!px-8 !py-4" sportMode={sportMode} primary>
            Vezi recenzii pe Google
          </Button>
        </div>
      </div>
    </section>

    <section id="contact" className={`py-20 ${sportMode === 'ski' ? 'bg-emerald-600' : 'bg-indigo-600'} text-white`}>
      <div className="container mx-auto px-4 text-center">
         <h2 className="text-4xl md:text-6xl font-black mb-8">Ne vedem pe pârtie!</h2>
         <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 mb-12">
            <div>
               <p className="text-white/60 text-sm font-bold uppercase mb-1">Telefon</p>
               <a href="tel:+40770701314" className="text-2xl font-bold hover:text-white/80">+40 770 701 314</a>
            </div>
            {/* 🔴 7. EMAIL & SOCIALS 🔴 */}
            <div>
               <p className="text-white/60 text-sm font-bold uppercase mb-1">Email</p>
               <p className="text-2xl font-bold">scoaladeski@gmail.com</p>
            </div>
         </div>

         {/* 🔴 8. SOCIAL MEDIA BUTTONS (Added here for visibility) 🔴 */}
         <div className="flex justify-center gap-6 mb-12">
           <a href="https://facebook.com/YOUR_PAGE" target="_blank" rel="noreferrer" className="bg-white/20 p-4 rounded-full hover:bg-white hover:text-emerald-600 transition-all backdrop-blur-sm">
             <Facebook size={24} />
           </a>
           <a href="https://instagram.com/YOUR_PAGE" target="_blank" rel="noreferrer" className="bg-white/20 p-4 rounded-full hover:bg-white hover:text-emerald-600 transition-all backdrop-blur-sm">
             <Instagram size={24} />
           </a>
         </div>

         <Button href={RESERVATION_URL} className="bg-white !text-slate-900 !px-10 !py-5 shadow-2xl" sportMode={sportMode}>
           Rezervă Lecția Acum
         </Button>
      </div>
    </section>
  </>
);

export default HomeView;
