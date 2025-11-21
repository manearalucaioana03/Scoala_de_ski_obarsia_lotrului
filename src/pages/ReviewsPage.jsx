import React from 'react';
import { Star, Quote } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { GOOGLE_REVIEWS_URL } from '../constants';

const ReviewsPage = ({ sportMode }) => {
  const reviews = [
    { name: "Andrei Popescu", date: "Feb 2024", rating: 5, text: "Cea mai tare experiență! Edy a avut o răbdare de fier cu mine. Recomand cu încredere!", source: "Google" },
    { name: "Maria Ionescu", date: "Ian 2024", rating: 5, text: "Copiii s-au distrat de minune cu Raluca. Nu voiau să mai plece de pe pârtie.", source: "Facebook" },
    { name: "George Dumitru", date: "Dec 2023", rating: 5, text: "Profesionalism și voie bună. Am învățat să mă dau cu placa în 3 zile.", source: "Google" },
    { name: "Elena Radu", date: "Mar 2024", rating: 5, text: "O atmosferă super prietenoasă. M-am simțit în siguranță tot timpul.", source: "Google" },
    { name: "Vlad Munteanu", date: "Feb 2024", rating: 4, text: "Foarte aglomerat în weekend, dar instructorii sunt top.", source: "Facebook" },
    { name: "Ioana Stan", date: "Ian 2024", rating: 5, text: "Mulțumesc Gabriela pentru sfaturi! Mi-am corectat stilul și acum schiez mult mai relaxat.", source: "Google" }
  ];

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Recenzii" title="Ce spun clienții noștri" sportMode={sportMode} />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-all relative">
              <Quote className={`absolute top-6 right-6 opacity-10 ${sportMode === 'ski' ? 'text-emerald-500' : 'text-indigo-500'}`} size={48} />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, starIdx) => (
                  <Star 
                    key={starIdx} 
                    size={16} 
                    className={`${starIdx < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200'}`} 
                  />
                ))}
              </div>
              <p className="text-slate-600 mb-6 italic leading-relaxed">"{review.text}"</p>
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <p className="font-bold text-slate-900">{review.name}</p>
                  <p className="text-xs text-slate-400">{review.date}</p>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">{review.source}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-white p-12 rounded-[3rem] shadow-xl max-w-4xl mx-auto">
          <h3 className="text-2xl font-black text-slate-900 mb-4">Ai fost la noi?</h3>
          <p className="text-slate-600 mb-8">Părerea ta ne ajută să fim mai buni. Lasă-ne o recenzie!</p>
          <Button href={GOOGLE_REVIEWS_URL} primary sportMode={sportMode}>
            Scrie o recenzie pe Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
