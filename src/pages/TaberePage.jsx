import React from 'react';
import SectionTitle from '../components/SectionTitle';

const TaberePage = ({ sportMode }) => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <SectionTitle 
          subtitle="În curând" 
          title="Tabere de Schi și Snowboard" 
          sportMode={sportMode} 
        />
        <div className="max-w-2xl mx-auto mt-12 p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
          <p className="text-xl text-slate-600">
            Lucrăm la organizarea celor mai tari tabere pentru sezonul următor. 
            Revin-o curând pentru detalii!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaberePage;
