import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { EXTERNAL_LINKS } from '../constants';

const LinksView = ({ navigateTo }) => {
  const [links] = useState(EXTERNAL_LINKS);

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <button onClick={() => navigateTo('home')} className="inline-flex items-center gap-2 text-slate-400 font-bold hover:text-emerald-500 mb-6 transition-colors">Înapoi acasă</button>
          <SectionTitle title="Linkuri Utile" subtitle="Resurse externe" sportMode={'ski'} />
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {links.map((l, i) => (
            <a key={i} href={l.url} target="_blank" rel="noreferrer" className="p-6 bg-slate-50 rounded-xl shadow hover:shadow-md transition-all">
              <h3 className="font-black text-lg mb-1">{l.title}</h3>
              <p className="text-slate-600 text-sm">{l.url}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinksView;
