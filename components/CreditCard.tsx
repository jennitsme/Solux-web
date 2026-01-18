
import React from 'react';
import { motion, useTransform, useMotionTemplate, useMotionValue } from 'framer-motion';

const LOGO_URL = "https://drive.google.com/thumbnail?id=1Az2dqZ3DOe24eRw4YFnS0NRqb2S8OkfI&sz=w500";

interface CreditCardProps {
  name: string;
  number: string;
  exp: string;
  color?: 'silver' | 'black';
  mouseX?: any;
  mouseY?: any;
}

export const CreditCard: React.FC<CreditCardProps> = ({ 
  name, 
  number, 
  exp, 
  color = 'silver',
  mouseX,
  mouseY
}) => {
  const isSilver = color === 'silver';
  
  const defaultMouseX = useMotionValue(0);
  const defaultMouseY = useMotionValue(0);
  
  const activeMouseX = mouseX || defaultMouseX;
  const activeMouseY = mouseY || defaultMouseY;

  const reflectionX = useTransform(activeMouseX, [-400, 400], ['-30%', '130%']);
  const reflectionY = useTransform(activeMouseY, [-400, 400], ['-30%', '130%']);

  const edgeLightOpacity = useTransform(activeMouseX, [-500, 500], [0.2, 0.6]);
  const edgeLightPositionX = useTransform(activeMouseX, [-500, 500], [0, 100]);
  const edgeLightPositionY = useTransform(activeMouseY, [-500, 500], [0, 100]);

  const edgeLightBackground = useMotionTemplate`radial-gradient(400px circle at ${edgeLightPositionX}% ${edgeLightPositionY}%, rgba(255,255,255,0.4) 0%, transparent 100%)`;

  return (
    <div 
      className={`
        aspect-[1.586/1] w-full rounded-[1.2rem] md:rounded-[1.4rem] p-6 md:p-8 flex flex-col justify-between 
        shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2),0_10px_20px_-10px_rgba(0,0,0,0.1)] 
        relative overflow-hidden group transition-transform duration-500 
        will-change-transform backface-hidden
        ${isSilver 
          ? 'bg-gradient-to-br from-[#ffffff] via-[#fdfdfe] to-[#f1f3f5] text-zinc-900' 
          : 'bg-gradient-to-br from-[#2c2c2e] via-[#1c1c1e] to-[#000000] text-zinc-100'
        }
      `}
      style={{
        boxShadow: isSilver 
          ? '0 0 0 1px rgba(0,0,0,0.02), 0 20px 40px -15px rgba(0,0,0,0.12)' 
          : '0 0 0 1px rgba(255,255,255,0.04), 0 20px 40px -15px rgba(0,0,0,0.4)',
        outline: '1px solid transparent'
      }}
    >
      {/* 1. Micro-Texture Layer */}
      <div className={`absolute inset-0 pointer-events-none mix-blend-overlay ${isSilver ? 'opacity-[0.08]' : 'opacity-[0.04]'}`} 
           style={{ 
             backgroundImage: isSilver 
              ? `linear-gradient(90deg, transparent 95%, rgba(0,0,0,0.05) 100%), url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
              : `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
           }} 
      />

      {/* 2. Brand Watermark - Bottom Right Subtle Logo */}
      <div className="absolute bottom-4 right-4 w-20 h-20 opacity-[0.03] grayscale pointer-events-none">
        <img src={LOGO_URL} alt="" className="w-full h-full object-contain" />
      </div>

      {/* 3. Specular Hotspot */}
      <motion.div 
        style={{ 
          left: reflectionX, 
          top: reflectionY,
          background: isSilver 
            ? 'radial-gradient(circle at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 80%)'
            : 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 80%)'
        }}
        className="absolute w-[250%] h-[250%] -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-soft-light z-20 blur-[120px] opacity-50"
      />

      {/* 4. Soft Rim Glow */}
      <motion.div 
        style={{
          opacity: edgeLightOpacity,
          background: edgeLightBackground
        }}
        className="absolute inset-0 rounded-[inherit] pointer-events-none z-50 overflow-hidden"
      >
        <div className="absolute inset-0 rounded-[inherit] border border-white/10 mix-blend-overlay" />
      </motion.div>

      {/* Content Architecture */}
      <div className="flex justify-between items-start relative z-40">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-3">
             <img src={LOGO_URL} alt="solux" className={`w-5 h-5 object-contain ${!isSilver ? 'invert' : 'brightness-0'}`} />
             <span className="text-[9px] md:text-[11px] uppercase font-black tracking-[0.35em] opacity-40">SOLUX</span>
          </div>
          <div className="flex flex-col">
            <span className="font-black text-2xl md:text-3xl tracking-tighter italic select-none leading-none">VISA</span>
            <span className="text-[7px] md:text-[8px] font-black tracking-[0.4em] uppercase opacity-30 mt-1 select-none">Signature</span>
          </div>
        </div>
        
        {/* Refined Chip */}
        <div className="w-11 md:w-13 h-8 md:h-10 rounded-lg bg-gradient-to-br from-[#e5e7eb] to-[#9ca3af] p-[1px] shadow-inner relative overflow-hidden">
           <div className="w-full h-full bg-[#cbd5e1] flex flex-col gap-[2.5px] p-2 justify-center relative rounded-[inherit]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-black/10" />
              <div className="flex gap-[2.5px] relative z-10">
                <div className="w-1/2 h-2 border-[0.5px] border-black/10 rounded-sm bg-black/5" />
                <div className="w-1/2 h-2 border-[0.5px] border-black/10 rounded-sm bg-black/5" />
              </div>
              <div className="w-full h-0.5 border-[0.5px] border-black/10 rounded-sm bg-black/5 relative z-10" />
              <div className="flex gap-[2.5px] relative z-10">
                <div className="w-1/2 h-2 border-[0.5px] border-black/10 rounded-sm bg-black/5" />
                <div className="w-1/2 h-2 border-[0.5px] border-black/10 rounded-sm bg-black/5" />
              </div>
           </div>
        </div>
      </div>

      <div className="flex flex-col gap-0.5 relative z-40">
        <p className="text-xl md:text-[24px] font-bold tracking-[0.15em] mb-2 md:mb-4 font-mono select-none opacity-80">
          {number}
        </p>
        
        <div className="flex justify-between items-end">
          <div className="flex flex-col">
            <span className="text-[6px] md:text-[8px] uppercase tracking-[0.2em] font-black opacity-30 mb-0.5">Valid Thru</span>
            <span className="text-[10px] md:text-xs font-bold tracking-tight">{exp}</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.2em] opacity-80">{name}</span>
            <div className="h-[2px] w-8 md:w-10 bg-current opacity-10 mt-1.5 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
