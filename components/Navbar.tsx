
import React, { useState } from 'react';
import { Apple, PlayCircle, Hexagon } from 'lucide-react';
import { motion } from 'framer-motion';

const LOGO_URL = "https://drive.google.com/thumbnail?id=1Az2dqZ3DOe24eRw4YFnS0NRqb2S8OkfI&sz=w500";

interface NavbarProps {
  onDownloadClick: () => void;
  onDocsClick: () => void;
  onHomeClick: () => void;
  onProtocolClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onDownloadClick, onDocsClick, onHomeClick, onProtocolClick }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-[100] bg-white/70 backdrop-blur-xl border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={onHomeClick}>
          <div className="relative w-10 h-10 flex items-center justify-center">
            {!imageError ? (
              <img 
                src={LOGO_URL} 
                alt="solux logo" 
                onError={() => setImageError(true)}
                className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-500" 
              />
            ) : (
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center group-hover:rotate-[15deg] transition-transform duration-500 shadow-lg shadow-black/10">
                <Hexagon size={20} className="text-white fill-white/10" strokeWidth={2.5} />
              </div>
            )}
            <div className="absolute inset-0 bg-black/5 blur-xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="text-2xl font-bold tracking-tighter text-black">solux</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-[13px] font-bold uppercase tracking-widest text-gray-400">
          <button onClick={onHomeClick} className="hover:text-black transition-colors">Manifesto</button>
          <button onClick={onDocsClick} className="hover:text-black transition-colors">Docs</button>
          <button onClick={onProtocolClick} className="hover:text-black transition-colors">Protocol</button>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={onDownloadClick}
            className="flex items-center gap-2 bg-black text-white px-6 py-2.5 rounded-full text-[13px] font-bold hover:bg-zinc-800 transition-all active:scale-95 shadow-lg shadow-black/10"
          >
            <span>Download App</span>
            <div className="flex items-center gap-1.5 border-l border-white/20 pl-2.5">
              <Apple size={15} strokeWidth={3} />
              <PlayCircle size={15} strokeWidth={3} />
            </div>
          </button>
        </div>
      </div>
    </motion.header>
  );
};
