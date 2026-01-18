
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { IPhoneFrame } from './IPhoneFrame';
import { CreditCard } from './CreditCard';
import { TrendingUp, Bell, Search, Settings } from 'lucide-react';

const LOGO_URL = "https://drive.google.com/thumbnail?id=1Az2dqZ3DOe24eRw4YFnS0NRqb2S8OkfI&sz=w500";

interface HeroProps {
  onDownloadClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadClick }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const cardRotateX = useSpring(useTransform(mouseY, [-300, 300], [12, -12]), { stiffness: 120, damping: 35 });
  const cardRotateY = useSpring(useTransform(mouseX, [-300, 300], [-12, 12]), { stiffness: 120, damping: 35 });

  const yOffset = useTransform(scrollY, [0, 500], [0, -100]);
  const sectionRotateX = useTransform(scrollY, [0, 500], [0, 4]);
  const springY = useSpring(yOffset, { stiffness: 100, damping: 30 });

  return (
    <section 
      ref={targetRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-44 pb-24 md:pt-56 md:pb-40 overflow-hidden bg-white selection:bg-black selection:text-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-gray-50 rounded-full border border-gray-100 mb-10 shadow-sm"
          >
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-500">Unified Crypto-Credit Protocol</span>
          </motion.div>
          
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-10 leading-[0.82] text-black">
            Hold Crypto, <br />
            <span className="text-gray-300">get Cash.</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-500 max-w-xl mb-14 leading-[1.3] font-light tracking-tight">
            Spend easily via Secured credit card using crypto while having full control of your funds.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={onDownloadClick}
              className="px-12 py-5.5 bg-black text-white rounded-full font-bold text-lg hover:bg-zinc-800 transition-all shadow-2xl shadow-black/20"
            >
              Get Started
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: '#f9fafb' }}
              whileTap={{ scale: 0.96 }}
              className="px-12 py-5.5 border border-zinc-200 text-black rounded-full font-bold text-lg transition-all"
            >
              How it works
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          style={{ y: springY, rotateX: sectionRotateX }}
          className="relative flex justify-center perspective-1000 mt-28 lg:mt-0"
        >
          <div className="relative w-full max-w-[370px] flex justify-center">
            <IPhoneFrame>
              <div className="w-full h-full bg-[#050505] flex flex-col pt-20 px-6 text-white overflow-hidden">
                {/* App Header */}
                <header className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 p-1.5 overflow-hidden flex items-center justify-center">
                      <img src={LOGO_URL} alt="solux logo" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-none mb-1">Account Owner</p>
                      <h3 className="text-lg font-bold tracking-tight">Solux Member</h3>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <Bell size={18} className="text-zinc-400" />
                    </div>
                  </div>
                </header>
                
                <div className="space-y-6">
                  {/* Balance Display */}
                  <div className="relative p-7 rounded-[2.5rem] bg-gradient-to-br from-zinc-900 to-black border border-white/5 shadow-2xl overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-emerald-500/20 transition-all duration-700" />
                    
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-6">
                        <p className="text-[9px] text-zinc-500 uppercase tracking-[0.2em] font-black">Account Value</p>
                        <div className="px-2 py-0.5 bg-emerald-500/10 rounded-md border border-emerald-500/20 flex items-center gap-1">
                          <TrendingUp size={10} className="text-emerald-500" />
                          <span className="text-[9px] font-bold text-emerald-500">+12.4%</span>
                        </div>
                      </div>
                      
                      <div className="mb-8">
                        <span className="text-sm font-light text-zinc-500 mr-1">$</span>
                        <span className="text-4xl font-black tracking-tighter">82,901.44</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-5">
                        <div>
                          <p className="text-[8px] text-zinc-600 uppercase font-black mb-1">Credit Power</p>
                          <p className="text-lg font-bold tracking-tight text-white/90">$41.4K</p>
                        </div>
                        <div>
                          <p className="text-[8px] text-zinc-600 uppercase font-black mb-1">Collateral</p>
                          <p className="text-lg font-bold tracking-tight text-white/90">2.1 BTC</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Assets Section */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center px-1">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Asset Exposure</p>
                      <p className="text-[10px] font-bold text-emerald-500">Manage</p>
                    </div>
                    
                    {[
                      { name: 'Ethereum', symbol: 'ETH', price: '$2,410.22', amount: '4.21 ETH', color: 'bg-zinc-800' },
                      { name: 'Solana', symbol: 'SOL', price: '$142.10', amount: '124.5 SOL', color: 'bg-zinc-800' },
                    ].map((asset, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-[1.8rem] border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                        <div className="flex items-center gap-3">
                          <div className={`w-11 h-11 rounded-2xl ${asset.color} flex items-center justify-center font-black text-xs border border-white/10 group-hover:scale-105 transition-transform`}>
                            {asset.symbol.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-white mb-0.5">{asset.name}</p>
                            <p className="text-[10px] text-zinc-500 font-bold">{asset.amount}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-white">{asset.price}</p>
                          <p className="text-[9px] text-emerald-500 font-bold">+2.1%</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Glassmorphism Bottom Card */}
                  <div className="p-6 rounded-[2.2rem] bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                        <Settings size={18} />
                      </div>
                      <p className="text-[11px] text-zinc-300 font-black uppercase tracking-widest">Protocol Setup</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-zinc-500 group-hover:bg-white/10 group-hover:text-white transition-all">
                      →
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-emerald-500/10 to-transparent pointer-events-none" />
              </div>
            </IPhoneFrame>
            
            {/* The Floating Credit Card */}
            <motion.div 
              style={{ 
                rotateX: cardRotateX, 
                rotateY: cardRotateY,
                z: 250
              }}
              initial={{ 
                x: isMobile ? 30 : 100, 
                y: isMobile ? 220 : 180, 
                opacity: 0, 
              }}
              animate={{ 
                x: isMobile ? 50 : 150, 
                y: isMobile ? 120 : 60, 
                opacity: 1, 
              }}
              transition={{ 
                duration: 2, 
                delay: 1.2, 
                type: 'spring', 
                stiffness: 35,
                damping: 18
              }}
              className="absolute top-1/2 left-0 z-20 w-[270px] md:w-[460px] pointer-events-none drop-shadow-[0_60px_100px_rgba(0,0,0,0.5)]"
            >
              <CreditCard 
                name="Visa Signature" 
                number="**** **** **** 0092" 
                exp="12/30" 
                color="silver"
                mouseX={mouseX}
                mouseY={mouseY}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Immersive Background Gradients */}
      <div className="absolute top-1/4 -right-1/4 w-[1200px] h-[1200px] bg-zinc-50 rounded-full blur-[240px] -z-10 opacity-60" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[1000px] h-[1000px] bg-zinc-50 rounded-full blur-[240px] -z-10 opacity-60" />
    </section>
  );
};
