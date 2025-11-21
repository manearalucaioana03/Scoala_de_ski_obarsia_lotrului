import React from 'react';
import { SPONSORS } from '../constants';

const Sponsors = ({ sportMode }) => {
  // Simple logos grid; update SPONSORS in constants.js
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center mt-8">
      {SPONSORS.map((s, i) => (
        <a key={i} href={s.url || '#'} target="_blank" rel="noreferrer" className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
          <img src={s.logo} alt={s.name} className="max-h-12 object-contain" />
        </a>
      ))}
    </div>
  );
};

export default Sponsors;
