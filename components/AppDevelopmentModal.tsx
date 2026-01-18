
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Hammer, Rocket, Code2, AlertCircle } from 'lucide-react';
import { CreditCard } from './CreditCard';

interface AppDevelopmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppDevelopmentModal: React.FC<AppDevelopmentModalProps> = ({ isOpen, onClose }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isOpen) {
      // Small delay then animate to 37%
      const timer = setTimeout(() => {
        setProgress(37);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setProgress(0);
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-white rounded-[3rem] shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-black transition-colors z-50"
            >
              <X size={20} />
            </button>

            <div className="grid lg:grid-cols-5 h-full">
              {/* Visual Side (Large Card display) */}
              <div className="lg:col-span-3 bg-zinc-50 p-12 lg:p-16 flex flex-col items-center justify-center relative overflow-hidden border-b lg:border-b-0 lg:border-r border-gray-100">
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                   <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
                </div>
                
                {/* Immersive glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-black/5 rounded-full blur-[100px] pointer-events-none" />

                <motion.div 
                  initial={{ rotateY: -30, rotateX: 15, scale: 0.8, opacity: 0 }}
                  animate={{ 
                    rotateY: -10, 
                    rotateX: 5, 
                    scale: 1,
                    opacity: 1,
                    y: [0, -20, 0] 
                  }}
                  transition={{ 
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    default: { duration: 1.5, ease: [0.16, 1, 0.3, 1] }
                  }}
                  className="w-full max-w-[420px] drop-shadow-[0_50px_80px_rgba(0,0,0,0.15)] relative z-10 perspective-1000"
                >
                  <CreditCard 
                    name="SOLUX EARLY" 
                    number="**** **** **** 2025" 
                    exp="01/30" 
                    color="black" 
                  />
                </motion.div>
                
                <div className="mt-16 text-center relative z-10">
                  <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white rounded-full border border-gray-100 shadow-sm mb-4">
                    <Rocket size={14} className="text-emerald-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Engineering Protocol Build v0.3.7</span>
                  </div>
                  <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.4em]">Proprietary Hardware Render</p>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:col-span-2 p-10 lg:p-14 flex flex-col justify-center">
                <div className="mb-12">
                  <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-black/10">
                    <Hammer size={24} className="text-white" />
                  </div>
                  <h2 className="text-4xl font-bold tracking-tighter mb-4 leading-[1.1]">The Future <br/>is Building.</h2>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    Solux is undergoing rigorous infrastructure stress-tests. We are perfecting the atomic swap bridge to ensure institutional-grade reliability.
                  </p>
                </div>

                <div className="space-y-10">
                  <div>
                    <div className="flex justify-between items-end mb-4">
                      <span className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-900">Protocol Integrity</span>
                      <span className="text-3xl font-black tracking-tighter text-emerald-500">{progress}%</span>
                    </div>
                    <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden relative">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full bg-emerald-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { icon: <Code2 size={16} />, text: "Core Protocol V2 Implementation", status: "Done" },
                      { icon: <ShieldCheck size={16} />, text: "Biometric Auth Framework", status: "Done" },
                      { icon: <Hammer size={16} />, text: "Visa Network Integration", status: "37%" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-3 border-b border-gray-50">
                        <div className="flex items-center gap-3 text-zinc-400">
                          {item.icon}
                          <span className="text-[13px] font-medium tracking-tight">{item.text}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-[9px] font-black uppercase tracking-widest ${item.status === 'Done' ? 'text-emerald-500' : 'text-zinc-300'}`}>
                            {item.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6">
                    <button className="w-full py-5 bg-zinc-900 text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-black transition-all active:scale-[0.98] flex items-center justify-center gap-3 shadow-xl shadow-black/10">
                      Reserve Spot on Waitlist
                    </button>
                    <p className="text-[10px] text-center text-gray-400 mt-5 font-medium italic opacity-60">
                      Estimated Delivery Window: Q3 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// Helper for ShieldCheck icon inside the map
function ShieldCheck({ size, className }: { size: number, className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
