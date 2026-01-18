
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, RefreshCw, CheckCircle2, Lock, CheckCircle, ArrowRight, Wallet, Cpu } from 'lucide-react';

const STEPS = [
  {
    title: "Securely deposit your assets on Solux",
    desc: "Your assets are locked in a secure, multi-sig vault. You retain full control with private keys and biometric passkeys.",
    icon: <Lock className="text-zinc-900" size={28} />,
    tag: "High Security",
    mockup: (
      <div className="mt-10 bg-white rounded-3xl p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-50 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-zinc-100 transition-colors" />
        <div className="flex items-center justify-between mb-6 relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-black" />
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Vault Status</span>
          </div>
          <span className="text-[10px] font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full">Encrypted</span>
        </div>
        <div className="space-y-3 relative z-10">
          <div className="p-3 bg-gray-50 rounded-2xl flex justify-between items-center border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center shadow-sm">
                <Wallet size={14} className="text-zinc-400" />
              </div>
              <span className="text-xs font-bold text-zinc-900">USDC Vault</span>
            </div>
            <span className="text-[10px] font-black text-zinc-400">0x...f291</span>
          </div>
          <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full bg-black" 
            />
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Your card is ready in 2 minutes",
    desc: "Our automated protocol verifies your collateral instantly. No traditional credit checks or long waiting periods.",
    icon: <Cpu className="text-zinc-900" size={28} />,
    tag: "Instant Protocol",
    mockup: (
      <div className="mt-10 bg-zinc-950 rounded-3xl p-6 shadow-2xl border border-white/5 text-white relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/20 to-transparent opacity-50" />
        <div className="text-center py-6 relative z-10">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10">
            <CheckCircle2 className="text-emerald-400" size={32} />
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400 mb-2">Protocol Verified</p>
          <h4 className="text-lg font-bold tracking-tight mb-4">Digital Card Issued</h4>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
            <span className="text-[9px] font-bold text-white/40">ID: SLX-99021-X</span>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Top up and spend globally",
    desc: "Easily manage your credit line with crypto top-ups and spend at over 100M+ merchants using Apple or Google Pay.",
    icon: <RefreshCw className="text-zinc-900" size={28} />,
    tag: "Global Spend",
    mockup: (
      <div className="mt-10 bg-white rounded-3xl p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 relative group">
        <div className="flex items-center gap-3 mb-6">
           <div className="w-10 h-10 rounded-2xl bg-zinc-900 flex items-center justify-center shadow-lg">
             <SmartphoneNfc size={20} className="text-white" />
           </div>
           <div>
             <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Active Session</p>
             <p className="text-xs font-bold text-zinc-900">POS: Starbucks NY</p>
           </div>
        </div>
        <div className="flex justify-between items-center p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
          <div className="flex flex-col">
            <span className="text-[8px] font-black text-zinc-400 uppercase mb-1">Authorization</span>
            <span className="text-sm font-black text-zinc-900">-$12.40</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]">
            <Check size={16} strokeWidth={3} />
          </div>
        </div>
      </div>
    )
  }
];

// Helper Icon for Step 3
function Check({ size, className, strokeWidth }: { size: number, className?: string, strokeWidth?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth={strokeWidth || 2} 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

import { SmartphoneNfc } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2.5 px-3 py-1 bg-zinc-50 rounded-full border border-zinc-100 mb-6"
            >
              <div className="w-1.5 h-1.5 bg-black rounded-full" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500">The Onboarding Flow</span>
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
              Getting started is <br />
              <span className="text-gray-300">faster than a coffee.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-lg leading-relaxed">
              Solux is engineered for speed. We removed the legacy friction to give you liquidity at the speed of the blockchain.
            </p>
          </div>
          
          <div className="hidden lg:flex flex-col items-end">
            <div className="flex -space-x-3 mb-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-zinc-100 overflow-hidden shadow-sm">
                  <div className="w-full h-full bg-gradient-to-br from-zinc-200 to-zinc-400 opacity-50" />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-white bg-black flex items-center justify-center text-[10px] font-bold text-white shadow-xl">
                +4k
              </div>
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Join 12,000+ early adopters</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 relative z-10">
          {STEPS.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="group flex flex-col h-full bg-gray-50/30 p-10 rounded-[3rem] border border-transparent hover:border-gray-100 hover:bg-white transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-10">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  {step.icon}
                </div>
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest border-b border-zinc-100 pb-1">0{idx + 1}</span>
              </div>
              
              <div className="mb-4">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-3 block">{step.tag}</span>
                <h3 className="text-2xl font-bold mb-4 tracking-tight leading-tight group-hover:text-black transition-colors">{step.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed mb-auto text-base">
                  {step.desc}
                </p>
              </div>
              
              <div className="mt-auto">
                {step.mockup}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative large background text */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none select-none overflow-hidden opacity-[0.02] -z-10 flex whitespace-nowrap">
        <span className="text-[40rem] font-black leading-none tracking-tighter uppercase mr-40">Solux</span>
        <span className="text-[40rem] font-black leading-none tracking-tighter uppercase">Protocol</span>
      </div>
    </section>
  );
};
