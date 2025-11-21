import React from 'react';

const SectionTitle = ({ subtitle, title, align = "center", sportMode = 'ski' }) => (
  <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
    <span className={`inline-block py-1 px-3 rounded-lg ${sportMode === 'ski' ? 'bg-emerald-100 text-emerald-600' : 'bg-indigo-100 text-indigo-600'} font-black tracking-wider uppercase text-xs mb-3 transform -rotate-2 transition-colors duration-500`}>
      {subtitle}
    </span>
    <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] drop-shadow-sm">
      {title}
    </h2>
  </div>
);

export default SectionTitle;
