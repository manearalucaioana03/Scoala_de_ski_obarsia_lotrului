import React from 'react';
import { Mail } from 'lucide-react';
import TeamView from '../components/TeamView';
import Button from '../components/Button';

const TeamPage = ({ navigateTo, sportMode }) => {
  return (
    <>
      <TeamView navigateTo={navigateTo} sportMode={sportMode} />
      
      {/* Join Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Vrei să faci parte din echipă?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Căutăm mereu oameni pasionați, cu zâmbetul pe buze și schiurile în picioare. 
            Dacă ai certificare de instructor și iubești muntele la fel de mult ca noi, hai să ne cunoaștem!
          </p>
          <Button href="mailto:scoaladeski@gmail.com" className="bg-slate-900 text-white hover:bg-slate-800" sportMode={sportMode}>
            Trimite CV-ul <Mail size={20} />
          </Button>
        </div>
      </section>
    </>
  );
};

export default TeamPage;
