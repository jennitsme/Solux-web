
import React from 'react';
import { motion } from 'framer-motion';
import { IPhoneFrame } from './IPhoneFrame';
import { ShoppingBag, Coffee, Car, Home, ChevronRight, MoreHorizontal, LayoutGrid, Fuel, ArrowUpRight, Zap } from 'lucide-react';

const LOGO_URL = "https://drive.google.com/thumbnail?id=1Az2dqZ3DOe24eRw4YFnS0NRqb2S8OkfI&sz=w500";

const TRANSACTIONS = [
  { id: 1, merchant: 'Apple Store', category: 'Technology', amount: '-$1,299.00', icon: <Zap size={18} />, color: 'bg-white text-black' },
  { id: 2, merchant: 'Tesla Supercharge', category: 'Travel', amount: '-$42.50', icon: <Fuel size={18} />, color: 'bg-zinc-800 text-white' },
  { id: 3, merchant: 'Blue Bottle Coffee', category: 'Food & Drink', amount: '-$14.20', icon: <Coffee size={18} />, color: 'bg-zinc-100 text-zinc-900' },
  { id: 4, merchant: 'Amazon Prime', category: 'Subscription', amount: '-$14.99', icon: <ShoppingBag size={18} />, color: 'bg-zinc-900 text-white' },
];

export const DashboardSection: React.FC = () => {
  return (
    <section className="py-28 bg-[#fafafa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
        <div className="order-2 lg:order-1 flex justify-center">
          <IPhoneFrame>
            <div className="h-full flex flex-col bg-[#080808] text-white">
              {/* Internal App Navigation */}
              <div className="p-7 pt-20 pb-4">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-5 overflow-x-auto no-scrollbar text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                    <div className="w-6 h-6 mr-1">
                      <img src={LOGO_URL} alt="s" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-white border-b-2 border-emerald-500 pb-2">Overview</span>
                    <span className="pb-2 hover:text-zinc-300 transition-colors">Insights</span>
                    <span className="pb-2 hover:text-zinc-300 transition-colors">Secure</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                    <LayoutGrid size={14} className="text-zinc-400" />
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="relative p-6 rounded-[2.2rem] bg-gradient-to-br from-zinc-800/50 to-transparent border border-white/5">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex flex-col">
                        <span className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.25em] mb-1">Weekly Limit</span>
                        <span className="text-2xl font-black tracking-tighter text-white">$4,200.00</span>
                      </div>
                      <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 rounded-full border border-white/10">
                        <span className="text-[8px] font-bold text-zinc-400 uppercase">Available</span>
                      </div>
                    </div>
                    
                    {/* High-fidelity progress bar */}
                    <div className="relative h-2 w-full bg-white/5 rounded-full overflow-hidden mt-6">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '68%' }}
                        transition={{ duration: 2, ease: "circOut" }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" 
                      />
                    </div>
                    <div className="flex justify-between mt-3">
                      <span className="text-[8px] font-black text-zinc-600 uppercase tracking-widest">Spent: $2.8k</span>
                      <span className="text-[8px] font-black text-zinc-600 uppercase tracking-widest">Limit: $4.2k</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-5 rounded-[1.8rem] border border-white/5 hover:bg-white/10 transition-all duration-300">
                      <p className="text-[8px] font-black text-zinc-600 uppercase mb-2 tracking-[0.2em]">Daily Avg</p>
                      <p className="text-lg font-black text-white">$142.11</p>
                    </div>
                    <div className="bg-emerald-500 p-5 rounded-[1.8rem] text-black hover:scale-105 transition-transform">
                      <p className="text-[8px] font-black text-black/40 uppercase mb-2 tracking-[0.2em]">Earned Rev</p>
                      <p className="text-lg font-black">$28.92</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transactions Feed - Realistic Mockup */}
              <div className="flex-1 bg-white rounded-t-[2.8rem] px-7 pt-8 text-black">
                <div className="flex justify-between items-center mb-8">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Transactions</h4>
                  <p className="text-[10px] font-bold text-zinc-900 border-b border-zinc-900">View All</p>
                </div>
                <div className="space-y-1">
                  {TRANSACTIONS.map((t, idx) => (
                    <motion.div 
                      key={t.id}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between py-4 hover:bg-zinc-50 rounded-2xl px-2 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 ${t.color} rounded-2xl flex items-center justify-center shadow-lg border border-black/5 group-hover:scale-110 transition-transform`}>
                          {t.icon}
                        </div>
                        <div>
                          <p className="text-sm font-bold leading-none mb-1 text-zinc-900">{t.merchant}</p>
                          <p className="text-[9px] text-zinc-400 uppercase font-black tracking-widest">{t.category}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-black tracking-tight text-zinc-900">{t.amount}</p>
                        <p className="text-[8px] text-zinc-400 font-bold uppercase mt-0.5">Approved</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="h-10" />
              </div>
            </div>
          </IPhoneFrame>
        </div>

        <div className="order-1 lg:order-2 max-w-xl">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-950 text-white rounded-lg mb-8"
          >
            <LayoutGrid size={14} />
            <span className="text-[10px] font-black uppercase tracking-widest">Real-Time Intelligence</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-10 leading-[1.05] text-black">
            Absolute clarity, <br />
            <span className="text-gray-300">at any scale.</span>
          </h2>
          
          <p className="text-2xl text-zinc-500 font-light mb-14 leading-relaxed tracking-tight">
            A frictionless management layer for your digital capital. Set granular protocol limits, reveal secure PINs instantly, and manage global collateral with zero lag.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { label: "Predictive Analytics", desc: "Automated spending insights driven by protocol history." },
              { label: "Dynamic Collateral", desc: "Your spending power adjusts with the market value of your assets." },
              { label: "Universal Acceptance", desc: "Spend your secured credit at over 100M+ Visa merchants." },
              { label: "Zero gas fees", desc: "Manage your credit line and bill without ever paying gas." }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <h4 className="text-lg font-bold mb-2 group-hover:translate-x-1 transition-transform">{benefit.label}</h4>
                <p className="text-sm text-zinc-400 leading-relaxed font-light">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
