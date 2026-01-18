
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { CreditCard } from './CreditCard';
import { Smartphone, SmartphoneNfc, Plus, ShieldCheck } from 'lucide-react';

export const FeaturesBento: React.FC = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as any 
      } 
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1: Multiple Cards */}
          <motion.div 
            variants={item}
            whileHover={{ y: -8 }}
            className="md:col-span-2 bg-gray-50 rounded-[2.5rem] p-10 md:p-14 overflow-hidden relative min-h-[500px] transition-shadow hover:shadow-2xl hover:shadow-black/5 flex flex-col md:flex-row items-center gap-12"
          >
            <div className="flex-1 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-gray-100 mb-6 shadow-sm">
                <Plus size={14} className="text-black" />
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Unlimited Issuance</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-[1.1]">Create multiple cards for everything</h3>
              <p className="text-gray-500 font-light text-lg leading-relaxed max-w-sm">
                Instantly issue virtual cards for subscriptions, groceries, travel & more. Categorize your wealth with precision.
              </p>
            </div>
            
            <div className="flex-1 relative w-full h-full min-h-[340px] flex items-center justify-center">
              <div className="relative w-full max-w-[280px] h-[180px] perspective-1000">
                <motion.div 
                  initial={{ rotate: 0, y: 60, x: 20, opacity: 0 }}
                  whileInView={{ rotate: -5, y: 60, x: 20, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 1 }}
                  className="absolute inset-0 drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
                >
                  <CreditCard name="Cloud Service" number="**** 8821" exp="09/28" color="black" />
                </motion.div>
                <motion.div 
                  initial={{ rotate: 0, y: 30, x: 10, opacity: 0 }}
                  whileInView={{ rotate: 0, y: 15, x: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 1 }}
                  className="absolute inset-0 drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
                >
                  <CreditCard name="Groceries" number="**** 4432" exp="11/27" color="silver" />
                </motion.div>
                <motion.div 
                  initial={{ rotate: 0, y: 0, x: 0, opacity: 0 }}
                  whileInView={{ rotate: 5, y: -30, x: -20, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="absolute inset-0 z-10 drop-shadow-[0_30px_50px_rgba(0,0,0,0.2)]"
                >
                  <CreditCard name="Streaming" number="**** 1109" exp="02/29" color="black" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Digital Only */}
          <motion.div 
            variants={item}
            whileHover={{ y: -8 }}
            className="bg-black text-white rounded-[2.5rem] p-10 flex flex-col justify-between transition-shadow hover:shadow-2xl hover:shadow-black/20"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
              <Smartphone size={28} />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 tracking-tight">Digital First</h3>
              <p className="text-gray-400 font-light text-base leading-relaxed">
                Get your card details instantly in the app. No waiting for the mailman. Ready to use in under 60 seconds.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Physical Card */}
          <motion.div 
            variants={item}
            whileHover={{ y: -8 }}
            className="md:col-span-1 bg-zinc-50 rounded-[2.5rem] p-8 md:p-10 flex flex-col items-center text-center transition-all hover:shadow-2xl hover:shadow-black/5 border border-gray-100 overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent pointer-events-none" />
            
            <div className="relative z-10 w-full mb-4 flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 text-white rounded-full mb-6 shadow-lg shadow-zinc-200">
                <ShieldCheck size={12} className="text-emerald-400" />
                <span className="text-[8px] font-black uppercase tracking-[0.2em]">Brushed Metal Tier</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">Physical Card</h3>
              <p className="text-gray-500 font-light text-xs leading-relaxed max-w-[220px]">
                Precision-engineered from premium metallic alloys for a substantial feel and institutional finish.
              </p>
            </div>

            <div className="relative w-full flex justify-center py-4">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white blur-3xl rounded-full opacity-30 -z-10" />
              
              <motion.div 
                whileHover={{ 
                  rotateY: 8, 
                  rotateX: -2, 
                  scale: 1.02,
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-[240px] perspective-1000 relative z-20 drop-shadow-[0_25px_50px_rgba(0,0,0,0.15)]"
              >
                <CreditCard name="Solux Member" number="**** 9911" exp="05/30" color="silver" />
              </motion.div>
            </div>
          </motion.div>

          {/* Card 4: Tap To Pay */}
          <motion.div 
            variants={item}
            whileHover={{ y: -8 }}
            className="md:col-span-2 bg-gray-50 rounded-[2.5rem] p-10 flex flex-col md:flex-row gap-10 items-center overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-black/5"
          >
            <div className="flex-1">
              <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center mb-6">
                <SmartphoneNfc size={28} />
              </div>
              <h3 className="text-4xl font-bold mb-4 tracking-tight">Tap To Pay</h3>
              <p className="text-gray-500 font-light text-lg">
                Shop offline like a pro by adding to Apple Pay or Google Pay. Just tap and go, anywhere in the world.
              </p>
            </div>
            <div className="flex-shrink-0 relative">
               <div className="bg-black rounded-[2rem] p-5 w-52 shadow-2xl">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <span className="text-[8px] text-white/40 font-bold uppercase tracking-[0.2em]">Apple Wallet</span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-24 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl p-3 flex flex-col justify-between">
                      <div className="w-6 h-4 bg-white/10 rounded" />
                      <p className="text-[7px] text-white/60 font-bold tracking-widest">VISA SIGNATURE</p>
                    </div>
                    <div className="h-7 bg-white/10 rounded-xl flex items-center justify-center">
                       <p className="text-[7px] text-white/40 font-bold uppercase tracking-widest">Double Click to Pay</p>
                    </div>
                  </div>
               </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
