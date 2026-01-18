
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Lock, 
  Sparkles, 
  Layers, 
  Plane, 
  Utensils, 
  Car, 
  ShieldCheck, 
  HeartHandshake,
  Zap,
  Globe,
  ArrowRight,
  Shield,
  CreditCard as CardIcon
} from 'lucide-react';

const MAIN_BENEFITS = [
  { 
    title: "Your funds, Your control", 
    desc: "Experience true self-custody. Our passkey-driven architecture ensures that you are the only one with access to your private keys.", 
    icon: <Lock size={22} />,
    tag: "Security"
  },
  { 
    title: "Visa Premium Status", 
    desc: "Every Solux card is a Visa Signature or Infinite tier, providing access to luxury lounges and world-class tradeFi rewards.", 
    icon: <Sparkles size={22} />,
    tag: "Prestige"
  },
  { 
    title: "Zero Friction Infrastructure", 
    desc: "Say goodbye to gas fees and interchange hurdles. We handle the complexity on-chain so you can spend effortlessly.", 
    icon: <Zap size={22} />,
    tag: "Efficiency"
  },
  { 
    title: "On-chain Transparency", 
    desc: "Audit your credit line in real-time. Every transaction and collateralization event is immutably recorded on the network.", 
    icon: <Layers size={22} />,
    tag: "Integrity"
  }
];

const REWARDS = [
  { icon: <Car size={18}/>, label: "Auto Rental Insurance" },
  { icon: <Plane size={18}/>, label: "Luxury Travel" },
  { icon: <Utensils size={18}/>, label: "Fine Dining" },
  { icon: <HeartHandshake size={18}/>, label: "Global Concierge" },
  { icon: <ShieldCheck size={18}/>, label: "Purchase Protection" }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export const Benefits: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 px-3 py-1 bg-zinc-50 rounded-full border border-zinc-100 w-fit mb-6"
            >
              <Shield size={12} className="text-zinc-900" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">The Solux Advantage</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight text-black">
              Global reach. <br />
              <span className="text-gray-300">Institutional security.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
              We've distilled complex financial engineering into a retail experience that feels as natural as tapping your phone.
            </p>
          </div>
          
          <div className="hidden lg:block">
            <div className="flex items-center gap-4 text-zinc-300">
               <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Retail Simplicity</span>
               <div className="w-12 h-[1px] bg-zinc-100" />
               <Globe size={20} className="text-zinc-200" />
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32"
        >
          {MAIN_BENEFITS.map((benefit, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group bg-zinc-50/50 p-10 rounded-[2.5rem] border border-transparent hover:border-gray-100 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-500 cursor-default"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-8 text-black group-hover:scale-110 group-hover:bg-zinc-900 group-hover:text-white transition-all duration-500">
                {benefit.icon}
              </div>
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-3 block group-hover:text-zinc-900 transition-colors">{benefit.tag}</span>
              <h3 className="text-2xl font-bold mb-4 tracking-tight leading-tight">{benefit.title}</h3>
              <p className="text-gray-500 text-base font-light leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Rewards Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-zinc-50 rounded-[3.5rem] -z-10" />
          <div className="px-10 py-16 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="max-w-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                  <CardIcon size={20} />
                </div>
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">Exclusive Perks</h3>
              </div>
              <h4 className="text-4xl font-bold tracking-tight mb-6">Visa Signature® Rewards Program</h4>
              <p className="text-gray-500 font-light text-lg mb-10">
                Access a curated world of benefits that extend far beyond payments. From concierge services to elite travel protection.
              </p>
              <button className="flex items-center gap-3 font-bold text-sm uppercase tracking-widest hover:gap-5 transition-all group">
                Explore All Benefits <ArrowRight size={16} className="text-zinc-300 group-hover:text-black transition-colors" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
              {REWARDS.map((reward, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:text-zinc-900 group-hover:bg-zinc-100 transition-all">
                    {reward.icon}
                  </div>
                  <span className="text-sm font-bold tracking-tight text-zinc-900">{reward.label}</span>
                </motion.div>
              ))}
              
              {/* Coming Soon Teaser */}
              <div className="flex items-center gap-4 bg-zinc-900 p-6 rounded-3xl border border-zinc-800 shadow-xl overflow-hidden relative">
                <div className="absolute top-0 right-0 p-2">
                  <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">Beta</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/40">
                  <Sparkles size={18} />
                </div>
                <span className="text-sm font-bold tracking-tight text-white/90">Airport Lounges</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
