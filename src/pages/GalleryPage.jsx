import React, { useState } from 'react';
import { Instagram, Camera } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const GalleryPage = ({ sportMode }) => {
  const [filter, setFilter] = useState('all');

  const photos = [
    { src: "https://images.unsplash.com/photo-1516458464372-eea4ab222631?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80", category: 'ski', size: 'large' },
    { src: "https://images.unsplash.com/photo-1551524559-8af4e6624178?ixlib=rb-4.0.3&auto=format&fit=crop&w=1026&q=80", category: 'ski', size: 'small' },
    { src: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80", category: 'fun', size: 'wide' },
    { src: "https://images.unsplash.com/photo-1522056615691-da7b8106c665?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", category: 'snowboard', size: 'small' },
    { src: "https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", category: 'ski', size: 'small' },
    { src: "https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", category: 'fun', size: 'large' },
    { src: "https://images.unsplash.com/photo-1596324635858-2e7596396216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", category: 'snowboard', size: 'wide' },
  ];

  const filteredPhotos = filter === 'all' ? photos : photos.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
       <div className="container mx-auto px-4">
         <SectionTitle subtitle="Galerie" title="Life at Obârșia Lotrului" sportMode={sportMode} />
         
         {/* Filter Tabs */}
         <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {['all', 'ski', 'snowboard', 'fun'].map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-bold uppercase text-sm tracking-wider transition-all ${
                  filter === cat 
                    ? (sportMode === 'ski' ? 'bg-emerald-500 text-white shadow-lg' : 'bg-indigo-500 text-white shadow-lg') 
                    : 'bg-white text-slate-500 hover:bg-slate-100'
                }`}
              >
                {cat === 'all' ? 'Toate' : cat}
              </button>
            ))}
         </div>

         {/* Masonry-ish Grid */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
           {filteredPhotos.map((photo, idx) => (
             <div 
                key={idx} 
                className={`rounded-3xl overflow-hidden relative group shadow-md hover:shadow-xl transition-all duration-500 ${
                  photo.size === 'large' ? 'md:row-span-2' : 
                  photo.size === 'wide' ? 'md:col-span-2' : ''
                }`}
             >
                <img src={photo.src} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Gallery" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide text-slate-800">
                    {photo.category}
                  </span>
                </div>
             </div>
           ))}
           
           {/* Instagram CTA Card */}
           <a href="https://instagram.com/YOUR_ACCOUNT" target="_blank" rel="noreferrer" className={`rounded-3xl overflow-hidden relative group shadow-md hover:shadow-xl ${sportMode === 'ski' ? 'bg-emerald-100' : 'bg-indigo-100'} flex flex-col items-center justify-center p-6 transition-colors cursor-pointer md:col-span-1 md:row-span-1`}>
              <div className={`w-16 h-16 rounded-full ${sportMode === 'ski' ? 'bg-emerald-200 text-emerald-600' : 'bg-indigo-200 text-indigo-600'} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Instagram size={32} />
              </div>
              <p className={`font-black text-lg text-center leading-tight ${sportMode === 'ski' ? 'text-emerald-800' : 'text-indigo-800'}`}>
                Vezi mai multe pe Instagram
              </p>
              <p className={`text-sm font-bold mt-2 opacity-70 ${sportMode === 'ski' ? 'text-emerald-700' : 'text-indigo-700'}`}>@scoaladeski</p>
           </a>
         </div>
       </div>
    </div>
  );
};

export default GalleryPage;
