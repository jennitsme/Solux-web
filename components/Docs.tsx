
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Book, 
  Shield, 
  Cpu, 
  Lock, 
  Zap, 
  Globe, 
  CreditCard, 
  CheckCircle2, 
  Hammer,
  ArrowRight,
  Fingerprint,
  Layers,
  AlertTriangle,
  Info,
  ChevronRight,
  Code2,
  BarChart3,
  Network,
  Scale,
  Terminal,
  FileSearch,
  Users,
  Key,
  Globe2,
  Server,
  ShieldCheck
} from 'lucide-react';

type SectionId = 'intro' | 'protocol' | 'security' | 'onboarding' | 'cards' | 'api' | 'compliance' | 'roadmap' | 'faq';

// Local Smartphone icon helper as it might not be in the standard lucide-react version used
const Smartphone = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

export const Docs: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('intro');

  const sections: { id: SectionId, title: string, icon: React.ReactNode }[] = [
    { id: 'intro', title: 'Introduction', icon: <Book size={16} /> },
    { id: 'protocol', title: 'Core Protocol', icon: <Cpu size={16} /> },
    { id: 'security', title: 'Security & Custody', icon: <Lock size={16} /> },
    { id: 'onboarding', title: 'User Journey', icon: <Zap size={16} /> },
    { id: 'cards', title: 'Card Tiers', icon: <CreditCard size={16} /> },
    { id: 'api', title: 'Developer API', icon: <Terminal size={16} /> },
    { id: 'compliance', title: 'Legal & Compliance', icon: <FileSearch size={16} /> },
    { id: 'roadmap', title: 'Roadmap (37%)', icon: <Hammer size={16} /> },
    { id: 'faq', title: 'FAQ', icon: <Info size={16} /> },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  const InfoBox = ({ children, type = 'note' }: { children: React.ReactNode, type?: 'note' | 'warning' | 'tip' }) => (
    <div className={`p-6 rounded-2xl my-8 border flex gap-4 ${
      type === 'warning' ? 'bg-amber-50 border-amber-100 text-amber-900' :
      type === 'tip' ? 'bg-emerald-50 border-emerald-100 text-emerald-900' :
      'bg-zinc-50 border-zinc-100 text-zinc-900'
    }`}>
      <div className="mt-1">
        {type === 'warning' ? <AlertTriangle size={20} /> : type === 'tip' ? <Zap size={20} /> : <Info size={20} />}
      </div>
      <div className="text-sm font-light leading-relaxed prose-p:my-0">{children}</div>
    </div>
  );

  return (
    <div className="pt-32 pb-40 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sidebar Navigation */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="sticky top-32">
              <div className="mb-12">
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-8 px-4">Technical Registry</h2>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center justify-between px-5 py-3.5 rounded-2xl text-[13px] font-bold transition-all group ${
                        activeSection === section.id 
                        ? 'bg-zinc-900 text-white shadow-xl shadow-black/10' 
                        : 'text-zinc-400 hover:text-black hover:bg-zinc-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={activeSection === section.id ? 'text-emerald-400' : 'text-inherit group-hover:text-black'}>
                          {section.icon}
                        </span>
                        {section.title}
                      </div>
                      <ChevronRight size={14} className={`opacity-0 group-hover:opacity-100 transition-opacity ${activeSection === section.id ? 'opacity-100' : ''}`} />
                    </button>
                  ))}
                </nav>
              </div>
              
              <div className="p-8 bg-zinc-950 rounded-[2.5rem] text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-emerald-500/20 transition-all" />
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-4">Protocol Version</p>
                <p className="text-xl font-black mb-2 tracking-tight">Mainnet v0.3.7</p>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-[10px] text-zinc-400 font-bold">Encrypted & Active</span>
                </div>
                <button className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors">
                  API Keys Console
                </button>
              </div>
            </div>
          </aside>

          {/* Documentation Content */}
          <div className="flex-1 max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="prose prose-zinc max-w-none prose-h1:tracking-tighter prose-h2:tracking-tight"
              >
                {activeSection === 'intro' && (
                  <section>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-50 rounded-full border border-zinc-100 mb-8">
                       <Book size={12} className="text-zinc-400" />
                       <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Documentation / Overview</span>
                    </div>
                    <h1 className="text-6xl font-black text-black mb-10 leading-[0.9]">
                      Welcome to <br />
                      <span className="text-zinc-300">the Solux Protocol.</span>
                    </h1>
                    <p className="text-2xl text-zinc-500 font-light leading-relaxed mb-12">
                      Solux is an institutional-grade decentralized liquidity layer designed to eliminate the need for selling crypto assets. We enable users to unlock immediate fiat spending power using digital capital as secure, interest-accruing collateral.
                    </p>

                    <h2 className="text-3xl font-black text-black mb-8">The core value proposition</h2>
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                      {[
                        { title: 'Tax-Advantaged Liquidity', desc: 'Borrowing against crypto assets is generally not a taxable event in many jurisdictions (e.g., US, UK), unlike selling which triggers Capital Gains Tax.', icon: <Scale size={20} /> },
                        { title: 'Custodial Autonomy', desc: 'Our MPC-based sharding ensures your keys are never in a single location, reducing risk of internal theft or platform-wide hacks.', icon: <Lock size={20} /> },
                        { title: 'Instant fiat bridge', desc: 'Most crypto loans require manual withdrawal. Solux binds the loan to a Visa card, converting credit to fiat at point-of-sale.', icon: <Globe size={20} /> },
                        { title: 'Institutional Yields', desc: 'Collateral is not just sitting idle; it can be put to work in low-risk DeFi yield strategies to offset borrowing costs.', icon: <BarChart3 size={20} /> },
                      ].map((item, i) => (
                        <div key={i} className="p-8 bg-zinc-50 rounded-[2rem] border border-zinc-100 hover:shadow-xl hover:shadow-black/5 transition-all">
                          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm text-black">
                            {item.icon}
                          </div>
                          <h4 className="text-lg font-bold mb-3">{item.title}</h4>
                          <p className="text-sm text-zinc-400 leading-relaxed font-light">{item.desc}</p>
                        </div>
                      ))}
                    </div>

                    <h2 className="text-3xl font-black text-black mb-8">Asset Support Matrix</h2>
                    <p className="text-zinc-500 font-light mb-8">Supported assets are selected based on liquidity depth, volatility profile, and smart-contract security score (SCSS).</p>
                    <div className="overflow-x-auto mb-12">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="border-b border-zinc-100">
                            <th className="py-4 text-[10px] font-black uppercase tracking-widest">Asset</th>
                            <th className="py-4 text-[10px] font-black uppercase tracking-widest">LTV Threshold</th>
                            <th className="py-4 text-[10px] font-black uppercase tracking-widest">Liquidation Buffer</th>
                          </tr>
                        </thead>
                        <tbody className="text-sm">
                          <tr><td className="py-4 font-bold">ETH (Ethereum)</td><td className="py-4">50%</td><td className="py-4">15%</td></tr>
                          <tr><td className="py-4 font-bold">BTC (Wrapped/Native)</td><td className="py-4">60%</td><td className="py-4">10%</td></tr>
                          <tr><td className="py-4 font-bold">USDC (Stablecoin)</td><td className="py-4">90%</td><td className="py-4">2%</td></tr>
                          <tr><td className="py-4 font-bold">SOL (Solana)</td><td className="py-4">40%</td><td className="py-4">20%</td></tr>
                        </tbody>
                      </table>
                    </div>
                    
                    <InfoBox type="tip">
                      Looking for the Solux Manifesto? It's our vision for a decentralized financial future where banks are replaced by protocols.
                    </InfoBox>
                  </section>
                )}

                {activeSection === 'protocol' && (
                  <section>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-50 rounded-full border border-zinc-100 mb-8">
                       <Cpu size={12} className="text-zinc-400" />
                       <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Documentation / Core Mechanics</span>
                    </div>
                    <h1 className="text-6xl font-black text-black mb-10 leading-[0.9]">
                      Protocol <br />
                      <span className="text-zinc-300">Architecture.</span>
                    </h1>
                    
                    <h2 className="text-3xl font-black text-black mb-8">1. The Solux Credit Line Calculation</h2>
                    <p className="text-zinc-500 font-light leading-relaxed mb-8">
                      Unlike traditional credit scores (FICO), Solux uses <strong>Asset-Backed Credit (ABC)</strong>. Your credit line is a function of the real-time valuation of your collateral, updated via decentralized oracles every 12 seconds.
                    </p>
                    
                    <div className="bg-zinc-950 p-10 rounded-[2.5rem] mb-12 text-center relative overflow-hidden">
                       <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
                       <p className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.4em] mb-4">LTV (Loan-to-Value) Logic</p>
                       <code className="text-3xl md:text-5xl font-black tracking-tighter text-white">
                         CreditLimit = Σ (Collateralᵢ × Priceᵢ × LTVᵢ)
                       </code>
                       <p className="mt-6 text-zinc-500 text-xs font-medium">Where <em>i</em> represents the asset type in your basket.</p>
                    </div>

                    <h2 className="text-3xl font-black text-black mb-8">2. The Settlement Engine</h2>
                    <p className="text-zinc-500 font-light leading-relaxed mb-8">
                      When you swipe your card at a merchant:
                    </p>
                    <ol className="space-y-8 mb-12">
                      <li className="flex gap-6">
                        <div className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">A</div>
                        <div>
                          <p className="text-lg font-bold mb-1">Authorization Request</p>
                          <p className="text-sm text-zinc-500 font-light">Visa network pings Solux Auth-Gateway. The protocol checks the <strong>Health Factor</strong> of your vault in &lt;200ms.</p>
                        </div>
                      </li>
                      <li className="flex gap-6">
                        <div className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">B</div>
                        <div>
                          <p className="text-lg font-bold mb-1">On-Chain Reservation</p>
                          <p className="text-sm text-zinc-500 font-light">The protocol places a "soft-lock" on a portion of your collateral equivalent to the spend amount + 2% buffer.</p>
                        </div>
                      </li>
                      <li className="flex gap-6">
                        <div className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">C</div>
                        <div>
                          <p className="text-lg font-bold mb-1">Fiat Settlement</p>
                          <p className="text-sm text-zinc-500 font-light">Our banking partner settles the fiat with the merchant. You now have a 30-day interest-free window to repay or roll into a long-term loan.</p>
                        </div>
                      </li>
                    </ol>

                    <h2 className="text-3xl font-black text-black mb-8">3. Health Factor & Liquidation</h2>
                    <p className="text-zinc-500 font-light leading-relaxed mb-6">
                      The protocol remains solvent by liquidating vaults that cross the critical threshold. 
                    </p>
                    <div className="p-8 bg-zinc-50 rounded-[2rem] border border-zinc-100 mb-12">
                       <div className="flex justify-between items-center mb-6">
                          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Liquidation Hierarchy</span>
                          <AlertTriangle size={16} className="text-amber-500" />
                       </div>
                       <div className="space-y-4">
                          <div className="flex justify-between border-b border-zinc-200 pb-2">
                             <span className="text-sm font-bold">Safe Zone (H &gt; 1.5)</span>
                             <span className="text-xs text-emerald-500 font-black">ACTIVE</span>
                          </div>
                          <div className="flex justify-between border-b border-zinc-200 pb-2">
                             <span className="text-sm font-bold">Warning Zone (1.2 &lt; H &lt; 1.5)</span>
                             <span className="text-xs text-amber-500 font-black">NOTIFIED</span>
                          </div>
                          <div className="flex justify-between border-b border-zinc-200 pb-2">
                             <span className="text-sm font-bold">Freeze Zone (1.0 &lt; H &lt; 1.1)</span>
                             <span className="text-xs text-amber-600 font-black">FROZEN</span>
                          </div>
                          <div className="flex justify-between">
                             <span className="text-sm font-bold">Liquidation (H &lt; 1.0)</span>
                             <span className="text-xs text-red-500 font-black">LIQUIDATED</span>
                          </div>
                       </div>
                    </div>
                  </section>
                )}

                {activeSection === 'security' && (
                  <section>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-50 rounded-full border border-zinc-100 mb-8">
                       <Lock size={12} className="text-zinc-400" />
                       <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Documentation / Security Matrix</span>
                    </div>
                    <h1 className="text-6xl font-black text-black mb-10 leading-[0.9]">
                      Bank-Grade <br />
                      <span className="text-zinc-300">Cybersecurity.</span>
                    </h1>

                    <h2 className="text-3xl font-black text-black mb-8">MPC (Multi-Party Computation)</h2>
                    <p className="text-zinc-500 font-light leading-relaxed mb-8">
                      Standard "Centralized Exchange" wallets are a single point of failure. Solux uses <strong>Threshold Signature Schemes (TSS)</strong>. Your private key never exists in one piece.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                       <div className="p-6 bg-zinc-50 rounded-3xl border border-zinc-100">
                          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm"><Smartphone size={20} /></div>
                          <h4 className="font-bold mb-2 text-sm">User Shard</h4>
                          <p className="text-[11px] text-zinc-400 font-light">Stored in your device's Secure Enclave (Apple T2 or Android StrongBox).</p>
                       </div>
                       <div className="p-6 bg-zinc-50 rounded-3xl border border-zinc-100">
                          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm"><Server size={20} /></div>
                          <h4 className="font-bold mb-2 text-sm">Protocol Shard</h4>
                          <p className="text-[11px] text-zinc-400 font-light">Stored in an offline Hardware Security Module (HSM) managed by Solux.</p>
                       </div>
                       <div className="p-6 bg-zinc-50 rounded-3xl border border-zinc-100">
                          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm"><Users size={20} /></div>
                          <h4 className="font-bold mb-2 text-sm">Recovery Shard</h4>
                          <p className="text-[11px] text-zinc-400 font-light">Encrypted and distributed among 5 trusted institutional recovery nodes.</p>
                       </div>
                    </div>

                    <h2 className="text-3xl font-black text-black mb-8">Social Recovery & Death Switch</h2>
                    <p className="text-zinc-500 font-light leading-relaxed mb-12">
                      Losing access to keys is the #1 risk in crypto. Solux allows you to nominate <strong>Guardians</strong>. If you lose your User Shard, 3 of 5 Guardians can authorize the protocol to recreate your key using the Recovery Shard.
                    </p>

                    <h2 className="text-3xl font-black text-black mb-8">Infrastructure Hardening</h2>
                    <ul className="space-y-4 text-sm font-light text-zinc-500">
                       <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-500" size={16} /> Bug Bounty program with $1M+ reward pool.</li>
                       <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-400" size={16} /> Formal verification of all Move/Solidity smart contracts.</li>
                       <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-300" size={16} /> 24/7 Red-Teaming by internal security group.</li>
                    </ul>
                  </section>
                )}

                {activeSection === 'onboarding' && (
                  <section>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-50 rounded-full border border-zinc-100 mb-8">
                       <Zap size={12} className="text-zinc-400" />
                       <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Documentation / Getting Started</span>
                    </div>
                    <h1 className="text-6xl font-black text-black mb-10 leading-[0.9]">
                      How to <br />
                      <span className="text-zinc-300">Launch.</span>
                    </h1>

                    <div className="space-y-4">
                      {[
                        { title: "Connect Wallet & Passkey", desc: "Link your Metamask, Phantom, or Ledger. Setup your biometric passkey for future secure logins." },
                        { title: "Collateral Deposit", desc: "Select assets (USDC, ETH, BTC) to deposit into your secure MPC vault." },
                        { title: "Identity Verification (KYC)", desc: "Quick 2-minute automated KYC process to comply with international Visa regulations." },
                        { title: "Virtual Card Issuance", desc: "Instantly generate your card details and add them to Apple Pay or Google Pay." }
                      ].map((step, i) => (
                        <div key={i} className="flex gap-8 p-10 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 hover:bg-white hover:shadow-xl transition-all">
                          <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center font-black text-xl flex-shrink-0">
                            0{i + 1}
                          </div>
                          <div>
                            <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                            <p className="text-zinc-500 font-light leading-relaxed">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {activeSection === 'cards' && (
                  <section>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-50 rounded-full border border-zinc-100 mb-8">
                       <CreditCard size={12} className="text-zinc-400" />
                       <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Documentation / Tiers</span>
                    </div>
                    <h1 className="text-6xl font-black text-black mb-10 leading-[0.9]">
                      Exclusive <br />
                      <span className="text-zinc-300">Member Tiers.</span>
                    </h1>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-zinc-100">
                            <th className="py-6 px-4 text-[10px] font-black uppercase tracking-widest text-zinc-400">Feature</th>
                            <th className="py-6 px-4 text-[10px] font-black uppercase tracking-widest text-black">Silver Tier</th>
                            <th className="py-6 px-4 text-[10px] font-black uppercase tracking-widest text-black">Black Tier</th>
                          </tr>
                        </thead>
                        <tbody className="text-sm font-light text-zinc-600">
                          <tr className="border-b border-zinc-50">
                            <td className="py-6 px-4 font-bold text-black">Collateral Requirement</td>
                            <td className="py-6 px-4">$10,000+</td>
                            <td className="py-6 px-4">$250,000+</td>
                          </tr>
                          <tr className="border-b border-zinc-50">
                            <td className="py-6 px-4 font-bold text-black">Max LTV</td>
                            <td className="py-6 px-4">50%</td>
                            <td className="py-6 px-4">70%</td>
                          </tr>
                          <tr className="border-b border-zinc-50">
                            <td className="py-6 px-4 font-bold text-black">Protocol Fee</td>
                            <td className="py-6 px-4">0.1% per swipe</td>
                            <td className="py-6 px-4">0%</td>
                          </tr>
                          <tr className="border-b border-zinc-50">
                            <td className="py-6 px-4 font-bold text-black">Physical Card</td>
                            <td className="py-6 px-4">Recycled Polymer</td>
                            <td className="py-6 px-4">Brushed Titanium</td>
                          </tr>
                          <tr>
                            <td className="py-6 px-4 font-bold text-black">Concierge</td>
                            <td className="py-6 px-4">Standard</td>
                            <td className="py-6 px-4">24/7 Dedicated</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>
                )}

                {activeSection === 'api' && (
                  <section>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-50 rounded-full border border-zinc-100 mb-8">
                       <Terminal size={12} className="text-zinc-400" />
                       <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Documentation / Developer Console</span>
                    </div>
                    <h1 className="text-6xl font-black text-black mb-10 leading-[0.9]">
                      Build on <br />
                      <span className="text-zinc-300">the Protocol.</span>
                    </h1>
                    <p className="text-xl text-zinc-500 font-light leading-relaxed mb-10">
                      Our API allows developers to integrate Solux Credit Lines directly into their own dApps and Fintech products.
                    </p>

                    <h2 className="text-2xl font-black text-black mb-6">Authentication</h2>
                    <pre className="p-6 bg-zinc-950 text-emerald-400 rounded-3xl overflow-x-auto text-xs font-mono mb-12">
{`// Initialize Solux Client
const solux = new SoluxClient({
  apiKey: process.env.SOLUX_API_KEY,
  environment: 'production'
});

// Authenticate user via Passkey
const session = await solux.auth.fromPasskey();`}
                    </pre>

                    <h2 className="text-2xl font-black text-black mb-6">Endpoints (Preview)</h2>
                    <div className="space-y-4 mb-12">
                       <div className="flex items-center gap-4 p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                          <span className="bg-emerald-500 text-white text-[9px] font-black px-2 py-1 rounded">GET</span>
                          <span className="text-xs font-mono">/v1/vault/{'{vault_id}'}/health</span>
                          <span className="ml-auto text-[10px] text-zinc-400">Fetch Health Factor</span>
                       </div>
                       <div className="flex items-center gap-4 p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                          <span className="bg-amber-500 text-white text-[9px] font-black px-2 py-1 rounded">POST</span>
                          <span className="text-xs font-mono">/v1/cards/issue</span>
                          <span className="ml-auto text-[10px] text-zinc-400">Issue Virtual Card</span>
                       </div>
                    </div>
                  </section>
                )}

                {activeSection === 'compliance' && (
                  <section>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-50 rounded-full border border-zinc-100 mb-8">
                       <FileSearch size={12} className="text-zinc-400" />
                       <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Documentation / Compliance</span>
                    </div>
                    <h1 className="text-6xl font-black text-black mb-10 leading-[0.9]">
                      Global <br />
                      <span className="text-zinc-300">Compliance.</span>
                    </h1>
                    
                    <h2 className="text-3xl font-black text-black mb-8">AML/KYC Requirements</h2>
                    <p className="text-zinc-500 font-light leading-relaxed mb-8">
                      To bridge on-chain assets to the Visa network, Solux adheres to strict regulatory standards in all operating jurisdictions.
                    </p>
                    
                    <div className="space-y-6 mb-12">
                       <div className="flex gap-6 items-start">
                          <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center flex-shrink-0"><Globe2 size={24} /></div>
                          <div>
                             <h4 className="font-bold text-lg mb-1">The Travel Rule</h4>
                             <p className="text-sm text-zinc-500 font-light">All asset transfers over $1,000 USD equivalent must be accompanied by beneficiary information as per FATF recommendations.</p>
                          </div>
                       </div>
                       <div className="flex gap-6 items-start">
                          <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center flex-shrink-0"><ShieldCheck size={24} /></div>
                          <div>
                             <h4 className="font-bold text-lg mb-1">PCI-DSS Level 1</h4>
                             <p className="text-sm text-zinc-500 font-light">Our card issuance infrastructure is certified to the highest security standards for payment card processing.</p>
                          </div>
                       </div>
                    </div>
                  </section>
                )}

                {activeSection === 'roadmap' && (
                  <section>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-50 rounded-full border border-zinc-100 mb-8">
                       <Hammer size={12} className="text-zinc-400" />
                       <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Documentation / Future Build</span>
                    </div>
                    <h1 className="text-6xl font-black text-black mb-10 leading-[0.9]">
                      Roadmap <br />
                      <span className="text-zinc-300">Phase 0.3.7</span>
                    </h1>
                    
                    <p className="text-xl text-zinc-500 font-light leading-relaxed mb-12">
                      We are currently at <span className="text-black font-black">37% completion</span> of the total protocol vision. Below is the granular breakdown of our engineering cycles.
                    </p>

                    <div className="mb-16">
                      <div className="flex justify-between items-end mb-4">
                        <span className="text-[11px] font-black uppercase tracking-widest text-zinc-400">Total Engineering Hours</span>
                        <span className="text-5xl font-black tracking-tighter text-black">37%</span>
                      </div>
                      <div className="h-4 w-full bg-zinc-100 rounded-full overflow-hidden relative shadow-inner">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '37%' }}
                          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full bg-black rounded-full"
                        />
                      </div>
                    </div>

                    <div className="space-y-12">
                      <div className="relative pl-12 border-l-2 border-zinc-100 pb-12">
                        <div className="absolute top-0 left-[-11px] w-5 h-5 bg-black rounded-full shadow-lg flex items-center justify-center">
                           <CheckCircle2 size={12} className="text-emerald-400" />
                        </div>
                        <h4 className="text-xl font-black mb-4">Phase 1: Genesis Protocol (Completed)</h4>
                        <ul className="space-y-3 text-sm text-zinc-500 font-light list-none p-0">
                          <li>• Smart Contract Core Vault implementation (Solidity).</li>
                          <li>• Chainlink Data Feed integration for real-time asset pricing.</li>
                          <li>• MPC Sharding architecture for private key security.</li>
                          <li>• Initial security audit by OpenZeppelin.</li>
                        </ul>
                      </div>

                      <div className="relative pl-12 border-l-2 border-zinc-100 pb-12">
                        <div className="absolute top-0 left-[-11px] w-5 h-5 bg-black rounded-full shadow-lg flex items-center justify-center animate-pulse">
                           <div className="w-1.5 h-1.5 bg-white rounded-full" />
                        </div>
                        <h4 className="text-xl font-black mb-4">Phase 2: Settlement & Fiat Gateway (37% - Active)</h4>
                        <ul className="space-y-3 text-sm text-zinc-500 font-light list-none p-0">
                          <li>• Real-time authorization bridge for Visa processing nodes.</li>
                          <li>• Virtual Card issuance API integration.</li>
                          <li>• Mobile App development (iOS/Android Beta builds).</li>
                          <li>• Institutional liquidity pool onboarding.</li>
                        </ul>
                      </div>

                      <div className="relative pl-12 border-l-2 border-zinc-100">
                        <div className="absolute top-0 left-[-11px] w-5 h-5 bg-white border-2 border-zinc-100 rounded-full" />
                        <h4 className="text-xl font-black mb-4 opacity-30">Phase 3: Global Expansion (Upcoming)</h4>
                        <ul className="space-y-3 text-sm text-zinc-500 font-light opacity-30 list-none p-0">
                          <li>• Physical Metal Card manufacturing and logistics.</li>
                          <li>• Multi-currency fiat support (EUR, GBP, SGD).</li>
                          <li>• Developer API public release.</li>
                          <li>• DAO Governance implementation.</li>
                        </ul>
                      </div>
                    </div>
                  </section>
                )}

                {activeSection === 'faq' && (
                  <section>
                     <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-50 rounded-full border border-zinc-100 mb-8">
                       <Info size={12} className="text-zinc-400" />
                       <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Documentation / Frequently Asked Questions</span>
                    </div>
                    <h1 className="text-6xl font-black text-black mb-10 leading-[0.9]">
                      Common <br />
                      <span className="text-zinc-300">Queries.</span>
                    </h1>

                    <div className="space-y-6">
                      {[
                        { q: "What happens if Solux goes bankrupt?", a: "Your assets are held in segregated MPC vaults. Even if the Solux platform is unavailable, the recovery nodes can reconstruct your keys for you to withdraw funds independently." },
                        { q: "Is there a minimum deposit?", a: "To maintain protocol efficiency, the initial deposit must be at least $1,000 USD equivalent in supported assets." },
                        { q: "Can I pay off the balance with fiat?", a: "Yes. You can link a bank account via Plaid or Stripe to pay down your credit line using fiat, or repay using crypto from your vault." },
                        { q: "How are the card fees structured?", a: "Solux charges a 0.1% protocol fee on swiped transactions for Silver members. Black members pay 0% fees." },
                        { q: "Are the cards accepted in all countries?", a: "Solux cards are accepted at all 100M+ merchants worldwide that support Visa, except for sanctioned countries listed by OFAC." }
                      ].map((item, i) => (
                        <div key={i} className="p-8 bg-zinc-50 rounded-[2rem] border border-zinc-100">
                          <h4 className="text-lg font-bold mb-4">{item.q}</h4>
                          <p className="text-sm text-zinc-500 font-light leading-relaxed">{item.a}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
