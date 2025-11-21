import React from 'react';

const Button = ({ children, primary, onClick, href, className = "", sportMode = 'ski' }) => {
  // responsive padding + softer motion; smaller on mobile for better fit
  const baseClass = "px-6 md:px-8 py-3 md:py-4 rounded-full font-extrabold text-base md:text-lg transition-transform transition-opacity duration-500 transform hover:scale-105 active:scale-95 touch-manipulation flex items-center justify-center gap-2 shadow-xl z-20 relative select-none ease-[cubic-bezier(.22,.9,.35,1)]";
  // Dynamic colors based on mode
  const primaryClass = sportMode === 'ski' 
    ? "bg-emerald-500 text-white hover:bg-emerald-400 ring-4 ring-emerald-500/20" 
    : "bg-indigo-500 text-white hover:bg-indigo-400 ring-4 ring-indigo-500/20"; // Purple for snowboard

  const secondaryClass = "bg-white text-slate-800 hover:bg-slate-50 border-2 border-slate-100";

  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseClass} ${primary ? primaryClass : secondaryClass} ${className}`}>{children}</a>;
  }
  return <button onClick={onClick} className={`${baseClass} ${primary ? primaryClass : secondaryClass} ${className}`}>{children}</button>;
};

export default Button;
