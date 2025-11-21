import React from 'react';
import { Snowflake, Smile, Wind } from 'lucide-react';

const FloatingStats = () => (
  <div className="relative z-40 -mt-24 px-4 mb-20 hidden md:block">
    <div className="container mx-auto flex justify-center gap-8">
        {[
        { title: "Status Pârtie", sub: "Perfectă 👌", icon: <Snowflake size={28} />, color: "text-emerald-500", bg: "bg-emerald-100" },
        { title: "Vibe-ul Zilei", sub: "100% Fun ⚡", icon: <Smile size={28} />, color: "text-orange-500", bg: "bg-orange-100" },
        { title: "Vremea", sub: "-2°C / Soare ☀️", icon: <Wind size={28} />, color: "text-blue-500", bg: "bg-blue-100" },
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-3xl p-6 shadow-2xl w-[280px] flex items-center gap-5 transform hover:-translate-y-2 transition-transform duration-300 border-b-4 border-slate-200">
            <div className={`${item.bg} ${item.color} p-4 rounded-2xl`}>
              {item.icon}
            </div>
            <div>
              <p className="text-slate-400 text-xs font-black uppercase tracking-wider mb-1">{item.title}</p>
              <p className="text-slate-800 font-black text-xl leading-none">{item.sub}</p>
            </div>
          </div>
        ))}
    </div>
  </div>
);

export default FloatingStats;
