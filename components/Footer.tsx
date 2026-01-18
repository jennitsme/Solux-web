
import React, { useState } from 'react';
import { Twitter, Disc as Discord, Send, Linkedin, Instagram, ArrowRight, Hexagon } from 'lucide-react';

const LOGO_URL = "https://drive.google.com/thumbnail?id=1Az2dqZ3DOe24eRw4YFnS0NRqb2S8OkfI&sz=w500";

interface FooterProps {
  onDownloadClick: () => void;
  onDocsClick: () => void;
  onHomeClick: () => void;
  onProtocolClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onDownloadClick, onDocsClick, onHomeClick, onProtocolClick }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <footer className="bg-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Final CTA */}
        <div className="text-center mb-32">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-black">
            Money, <br />
            <span className="text-gray-300">Forever yours.</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto mb-12">
            Ditch the wallets, skip the exchanges, and forget the banks. Start spending your crypto wealth today.
          </p>
          <button 
            onClick={onDownloadClick}
            className="inline-flex items-center gap-4 bg-black text-white px-10 py-5 rounded-full text-xl font-bold hover:scale-105 transition-all group shadow-2xl shadow-black/20"
          >
            Download App
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        {/* Footer Info */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-gray-100 pt-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8 cursor-pointer" onClick={onHomeClick}>
              {!imageError ? (
                <img 
                  src={LOGO_URL} 
                  alt="solux logo" 
                  onError={() => setImageError(true)}
                  className="h-10 w-10 object-contain" 
                />
              ) : (
                <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center shadow-lg">
                  <Hexagon size={20} className="text-white fill-white/10" strokeWidth={2.5} />
                </div>
              )}
              <h3 className="text-3xl font-black tracking-tighter text-black">solux</h3>
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed mb-8">
              651 N Broad St, Suite 201,<br />
              Middletown, 19709,<br />
              Solux Inc.
            </p>
            <div className="flex items-center gap-5 text-gray-400">
              <Twitter size={20} className="hover:text-black cursor-pointer transition-colors" />
              <Discord size={20} className="hover:text-black cursor-pointer transition-colors" />
              <Send size={20} className="hover:text-black cursor-pointer transition-colors" />
              <Linkedin size={20} className="hover:text-black cursor-pointer transition-colors" />
              <Instagram size={20} className="hover:text-black cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-black mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li><button onClick={onDocsClick} className="hover:text-black transition-colors">Docs</button></li>
              <li><button onClick={onProtocolClick} className="hover:text-black transition-colors">Protocol</button></li>
              <li><button onClick={onHomeClick} className="hover:text-black transition-colors">Solux Manifesto</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-black mb-8">Legal</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li><button className="hover:text-black transition-colors">Privacy Policy</button></li>
              <li><button className="hover:text-black transition-colors">ToS</button></li>
              <li><button className="hover:text-black transition-colors">Cookie Policy</button></li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            © 2024 Solux Inc. All rights reserved.
          </p>
          <p className="text-[10px] text-gray-300 max-w-lg text-center md:text-right italic">
            Solux is a financial technology company, not a bank. Credit services provided by licensed banking partners. Crypto assets are not insured by FDIC.
          </p>
        </div>
      </div>
    </footer>
  );
};
