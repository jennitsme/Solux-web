
import React from 'react';
import { motion } from 'framer-motion';
import { IPhoneFrame } from './IPhoneFrame';
import { Plus, ArrowUpRight, ArrowDownLeft, ShieldCheck, Fingerprint } from 'lucide-react';

const LOGO_URL = "https://drive.google.com/thumbnail?id=1Az2dqZ3DOe24eRw4YFnS0NRqb2S8OkfI&sz=w500";

export const ValueProposition: React.FC = () => {
  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
            Spend it, <br />
            Don't Sell it.
          </h2>
          <p className="text-xl text-gray-500 font-light leading-relaxed mb-8">
            With your crypto, Visa simply hands you a credit line with matching spending power. Unlock liquidity without creating a taxable event or losing your long-term position.
          </p>
          <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-xs font-bold uppercase tracking-widest text-gray-500">
            Coming Soon to your region
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <IPhoneFrame>
            <div className="h-full bg-[#050505] p-7 pt-20 text-white flex flex-col">
              <div className="text-center mb-12">
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 p-2 overflow-hidden flex items-center justify-center">
                    <img src={LOGO_URL} alt="solux logo" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-emerald-500/10 rounded-md border border-emerald-500/20 mb-4">
                  <ShieldCheck size={10} className="text-emerald-500" />
                  <span className="text-[8px] font-black text-emerald-500 uppercase tracking-widest">Protocol Active</span>
                </div>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Available Credit Line</p>
                <h3 className="text-5xl font-black tracking-tighter mb-2">$4,900.01</h3>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-[10px] text-zinc-500 font-bold">LTV: 45.2%</span>
                  <div className="w-1 h-1 rounded-full bg-zinc-800" />
                  <span className="text-[10px] text-emerald-500 font-bold">Healthy Range</span>
                </div>
              </div>

              {/* Action Grid - Premium Metallic Look */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                <button className="relative flex flex-col items-center gap-3 p-5 bg-white text-black rounded-[2.2rem] group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-zinc-200 to-zinc-400 opacity-20" />
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl relative z-10">
                    <ArrowUpRight size={24} className="text-white" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest relative z-10">Top Up</span>
                </button>
                <button className="relative flex flex-col items-center gap-3 p-5 bg-zinc-900 text-white rounded-[2.2rem] border border-white/5 group overflow-hidden">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform shadow-xl">
                    <ArrowDownLeft size={24} className="text-zinc-300" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest">Withdraw</span>
                </button>
              </div>

              <div className="flex-1 bg-white/5 rounded-[2.5rem] p-6 border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl -mr-10 -mt-10" />
                
                <div className="flex justify-between items-center mb-8 relative z-10">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500">Security Layers</h4>
                  <Fingerprint size={16} className="text-zinc-600" />
                </div>
                
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span className="text-xs font-bold text-zinc-300">Biometric Unlock</span>
                    </div>
                    <span className="text-[9px] font-black text-emerald-500 uppercase">On</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                      <span className="text-xs font-bold text-zinc-300">MPC Multi-Sig</span>
                    </div>
                    <span className="text-[9px] font-black text-emerald-500 uppercase">Active</span>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/5">
                   <p className="text-[10px] text-zinc-600 italic font-medium leading-relaxed">
                     Your assets are protected by enterprise-grade institutional custody.
                   </p>
                </div>
              </div>
            </div>
          </IPhoneFrame>
        </motion.div>
      </div>
    </section>
  );
};
