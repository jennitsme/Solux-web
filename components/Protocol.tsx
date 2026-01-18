
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Network, 
  ShieldCheck, 
  Database, 
  Layers, 
  Zap, 
  Code2, 
  Activity,
  Server,
  Terminal,
  ChevronRight,
  Hexagon
} from 'lucide-react';

export const Protocol: React.FC = () => {
  return (
    <div className="pt-32 pb-40 bg-white min-h-screen selection:bg-black selection:text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="max-w-4xl mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 px-3 py-1 bg-zinc-900 text-white rounded-full mb-8 shadow-xl shadow-black/10"
          >
            <Hexagon size={14} className="text-emerald-400" fill="currentColor" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em]">Solux V2 Protocol Spec</span>
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-black mb-10 leading-[0.85]">
            The Liquidity <br />
            <span className="text-zinc-300">Engine.</span>
          </h1>
          <p className="text-2xl text-zinc-500 font-light leading-relaxed max-w-2xl">
            A high-performance decentralized protocol engineered for institutional-grade credit issuance and instant fiat settlement.
          </p>
        </div>

        {/* Protocol Visual Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {/* Core Infrastructure Bento */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-2 bg-zinc-950 rounded-[3rem] p-12 text-white relative overflow-hidden group border border-white/5"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />
            
            <div className="flex flex-col md:flex-row gap-12 items-center h-full">
              <div className="flex-1 z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                  <Cpu className="text-emerald-400" size={28} />
                </div>
                <h3 className="text-4xl font-black mb-6 tracking-tight">Real-time Oracle Settlement</h3>
                <p className="text-zinc-400 font-light leading-relaxed text-lg mb-8">
                  Solux integrates deeply with Chainlink's low-latency data feeds to ensure every spending event is backed by real-time market valuations with sub-second accuracy.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Sub-second Latency', 'Multi-Oracle Redundancy', 'Price Deviance Threshold: 0.1%'].map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[9px] font-black uppercase tracking-widest text-zinc-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="w-full md:w-64 space-y-3 z-10">
                {[
                  { label: "ETH / USD", value: "$2,410.22", status: "Active" },
                  { label: "BTC / USD", value: "$64,902.11", status: "Active" },
                  { label: "SOL / USD", value: "$142.08", status: "Syncing" },
                  { label: "USDC / USD", value: "$1.0001", status: "Active" }
                ].map((feed, i) => (
                  <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-2xl flex justify-between items-center group/item hover:bg-white/10 transition-all">
                    <div>
                      <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-1">{feed.label}</p>
                      <p className="text-sm font-bold font-mono">{feed.value}</p>
                    </div>
                    <div className="flex items-center gap-2">
                       <div className={`w-1.5 h-1.5 rounded-full ${feed.status === 'Active' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-amber-500 animate-pulse'}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Security Node Bento */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-zinc-50 rounded-[3rem] p-12 flex flex-col justify-between border border-gray-100 group hover:shadow-2xl transition-all"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center mb-10 group-hover:rotate-[15deg] transition-transform">
                <Network size={28} />
              </div>
              <h3 className="text-3xl font-black mb-4 tracking-tight">Decentralized Authorization</h3>
              <p className="text-zinc-500 font-light leading-relaxed">
                Transaction authorization is distributed across a network of validator nodes. No single entity can stop or reverse a legitimate protocol-spend.
              </p>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-zinc-400">
                <span>Active Nodes</span>
                <span className="text-black">124 / 128</span>
              </div>
              <div className="h-1.5 w-full bg-gray-100 rounded-full mt-3 overflow-hidden">
                <div className="h-full w-[94%] bg-black rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Deep Dive */}
        <div className="space-y-32">
          {/* Section 1: The Vault Engine */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-8">
                 <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-white">
                   <Terminal size={20} />
                 </div>
                 <h2 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400">Protocol Layer 01</h2>
              </div>
              <h3 className="text-5xl font-black tracking-tight mb-8">The Secure Vault Framework.</h3>
              <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
                Our vaults are not just static wallets. They are programmable smart-contracts audited to the highest standard, featuring automated deleveraging and social recovery features.
              </p>
              
              <ul className="space-y-6">
                {[
                  { title: "Atomic Swaps", desc: "Instant collateral rebalancing to protect health factors during volatility." },
                  { title: "Non-Custodial", desc: "The protocol can never move funds without a valid user-signed intent." },
                  { title: "Gasless Management", desc: "Protocol operators relay transactions, removing gas friction for the end user." }
                ].map((feature, i) => (
                  <li key={i} className="flex gap-5 group cursor-default">
                    <div className="w-6 h-6 rounded-full border border-zinc-200 flex items-center justify-center text-[10px] font-black mt-1 group-hover:bg-black group-hover:text-white transition-colors">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{feature.title}</h4>
                      <p className="text-sm text-zinc-400 font-light">{feature.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="bg-zinc-950 rounded-[3rem] p-10 border border-white/5 font-mono text-[11px] leading-relaxed text-zinc-400 shadow-2xl relative z-10">
                <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20" />
                  </div>
                  <span className="text-white/40 ml-4">SoluxVault.sol</span>
                </div>
                <div className="space-y-1">
                  <p><span className="text-indigo-400">contract</span> <span className="text-amber-400">SoluxVault</span> {'{'}</p>
                  <p className="pl-4"><span className="text-zinc-600">// Institutional Collateral Engine</span></p>
                  <p className="pl-4"><span className="text-indigo-400">mapping</span>(address => Vault) <span className="text-white">public</span> vaults;</p>
                  <p className="pl-4 text-emerald-400/80">function depositCollateral(uint256 amount) external {'{'}</p>
                  <p className="pl-8 text-zinc-500">_verifyPasskeySignature(msg.sender);</p>
                  <p className="pl-8 text-zinc-500">_updateHealthFactor(msg.sender, amount);</p>
                  <p className="pl-8 text-zinc-500">collateralToken.transferFrom(msg.sender, address(this), amount);</p>
                  <p className="pl-4">{'}'}</p>
                  <p className="pl-4 text-emerald-400/80">function authorizeSpend(uint256 fiatAmount) internal {'{'}</p>
                  <p className="pl-8 text-zinc-500">require(isHealthy(msg.sender), "LTV_THRESHOLD_EXCEEDED");</p>
                  <p className="pl-8 text-zinc-500">_mintSpendingPower(msg.sender, fiatAmount);</p>
                  <p className="pl-4">{'}'}</p>
                  <p>{'}'}</p>
                </div>
              </div>
              <div className="absolute -inset-4 bg-emerald-500/5 blur-3xl -z-10 rounded-full" />
            </div>
          </div>

          {/* Section 2: Liquidation Architecture */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
               <div className="relative w-full max-w-sm aspect-square bg-zinc-50 rounded-[3.5rem] p-10 flex flex-col items-center justify-center border border-gray-100 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-50" />
                  <div className="relative z-10 w-full">
                     <div className="flex justify-between items-end mb-6">
                        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Health Monitor</span>
                        <Activity className="text-emerald-500 animate-pulse" size={18} />
                     </div>
                     <div className="space-y-6">
                        <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                           <div className="flex justify-between mb-2">
                             <span className="text-[9px] font-black uppercase text-zinc-500">Current LTV</span>
                             <span className="text-xs font-bold text-black">42.5%</span>
                           </div>
                           <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: '42.5%' }}
                                transition={{ duration: 1.5 }}
                                className="h-full bg-emerald-500"
                              />
                           </div>
                        </div>
                        <div className="p-5 bg-zinc-900 rounded-2xl border border-white/5 shadow-xl text-white">
                           <p className="text-[9px] font-black uppercase text-zinc-500 mb-3 tracking-widest">Protocol Action</p>
                           <p className="text-sm font-bold flex items-center gap-2">
                             <ShieldCheck className="text-emerald-500" size={14} />
                             Position Healthy
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/5 rounded-full blur-[60px] pointer-events-none" />
               </div>
            </div>
            
            <div className="order-1 lg:order-2">
               <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-white">
                    <Layers size={20} />
                  </div>
                  <h2 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400">Protocol Layer 02</h2>
               </div>
               <h3 className="text-5xl font-black tracking-tight mb-8">Dynamic Deleveraging.</h3>
               <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
                 The protocol uses a unique <strong>Atomic Liquidation</strong> mechanism. Instead of dumping large blocks of collateral, we rebalance positions gradually to ensure zero slippage and maximum capital preservation.
               </p>
               <button className="px-8 py-4 border border-zinc-200 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                 Read Liquidation Spec
               </button>
            </div>
          </div>
        </div>

        {/* Protocol Stats Teaser */}
        <div className="mt-40 pt-24 border-t border-gray-100 grid md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Total Value Locked", val: "$142.9M" },
            { label: "Active Spend Limit", val: "$62.1M" },
            { label: "Avg Liquidation Fee", val: "2.1%" },
            { label: "Node Up-time", val: "99.99%" }
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-3">{stat.label}</p>
              <p className="text-4xl font-black tracking-tighter text-black">{stat.val}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
