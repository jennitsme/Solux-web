
import React from 'react';
import { Wifi, Signal } from 'lucide-react';

interface IPhoneFrameProps {
  children: React.ReactNode;
}

export const IPhoneFrame: React.FC<IPhoneFrameProps> = ({ children }) => {
  return (
    <div className="relative mx-auto h-[780px] w-[370px] scale-90 md:scale-100 origin-center perspective-1000">
      {/* 1. Main Outer Chassis - Realistic Titanium/Stainless Steel look */}
      <div className="absolute inset-0 bg-[#0c0c0d] rounded-[3.8rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4),0_30px_60px_-30px_rgba(0,0,0,0.5),inset_0_0_2px_1px_rgba(255,255,255,0.1)] transition-transform duration-700 ease-out overflow-visible">
        
        {/* Antenna Lines for Realism */}
        <div className="absolute top-[80px] -left-[1px] w-[2px] h-[10px] bg-white/5" />
        <div className="absolute top-[80px] -right-[1px] w-[2px] h-[10px] bg-white/5" />
        <div className="absolute bottom-[80px] -left-[1px] w-[2px] h-[10px] bg-white/5" />
        <div className="absolute bottom-[80px] -right-[1px] w-[2px] h-[10px] bg-white/5" />

        {/* Metallic Specular Highlights (Side lighting) */}
        <div className="absolute inset-[1px] rounded-[3.7rem] bg-gradient-to-tr from-[#1a1a1b] via-[#0c0c0d] to-[#1a1a1b] pointer-events-none" />
        
        {/* Hardware Buttons - More detailed and subtle */}
        <div className="absolute -left-[2.5px] top-[120px] w-[3.5px] h-[32px] bg-[#1a1a1b] rounded-l-[2px] border-y border-white/5 shadow-[inset_-1px_0_1px_rgba(0,0,0,0.5)]" /> {/* Action Button */}
        <div className="absolute -left-[2.5px] top-[175px] w-[3.5px] h-[65px] bg-[#1a1a1b] rounded-l-[2px] border-y border-white/5 shadow-[inset_-1px_0_1px_rgba(0,0,0,0.5)]" /> {/* Vol Up */}
        <div className="absolute -left-[2.5px] top-[250px] w-[3.5px] h-[65px] bg-[#1a1a1b] rounded-l-[2px] border-y border-white/5 shadow-[inset_-1px_0_1px_rgba(0,0,0,0.5)]" /> {/* Vol Down */}
        <div className="absolute -right-[2.5px] top-[200px] w-[3.5px] h-[100px] bg-[#1a1a1b] rounded-r-[2px] border-y border-white/5 shadow-[inset_1px_0_1px_rgba(0,0,0,0.5)]" /> {/* Power */}

        {/* 2. Ultra-Thin OLED Bezel - Reduced from previous version */}
        <div className="absolute inset-[8px] rounded-[3.2rem] bg-black overflow-hidden ring-1 ring-white/10 shadow-[inset_0_0_15px_rgba(0,0,0,1)]">
          
          {/* Inner Display Content Area */}
          <div className="relative w-full h-full bg-white flex flex-col">
            
            {/* iOS Status Bar - Refined typography */}
            <div className="absolute top-0 inset-x-0 h-14 z-[60] flex items-center justify-between px-10 pt-4 pointer-events-none">
              <div className="text-[14px] font-semibold text-black select-none tracking-tight">9:41</div>
              <div className="flex items-center gap-1.5 text-black">
                <Signal size={15} strokeWidth={2.5} />
                <Wifi size={15} strokeWidth={2.5} />
                <div className="relative w-[24px] h-[12px] border-[1.5px] border-black/20 rounded-[4px] flex items-center px-[1.5px]">
                  <div className="h-full w-[80%] bg-black rounded-[1.5px]" />
                  <div className="absolute -right-[3.5px] top-1/2 -translate-y-1/2 w-[1.5px] h-[4px] bg-black/20 rounded-r-full" />
                </div>
              </div>
            </div>

            {/* 3. Dynamic Island - Floating Glassy look */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[120px] h-[36px] bg-black rounded-[20px] z-[70] shadow-xl flex items-center justify-end pr-4">
              {/* Proximity/FaceID sensor subtle hint */}
              <div className="w-2.5 h-2.5 rounded-full bg-indigo-900/10 blur-[1px] ring-1 ring-white/5" />
            </div>

            {/* 4. Screen Content */}
            <div className="w-full h-full relative overflow-hidden bg-white">
              {children}
              
              {/* Professional Glass Refraction System */}
              <div className="absolute inset-0 pointer-events-none z-[100] overflow-hidden rounded-[inherit]">
                {/* Main screen reflection */}
                <div className="absolute -inset-[100%] bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] transform rotate-12" />
                
                {/* Secondary light flare */}
                <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-white/[0.05] to-transparent" />
                
                {/* Subtle depth shadow at the edges of the OLED panel */}
                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.02)]" />
              </div>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-black/10 rounded-full z-[60]" />
          </div>
        </div>
      </div>

      {/* Frame Specular Highlights (Outer layer) */}
      <div className="absolute top-[10%] left-[1px] w-[1px] h-[30%] bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none z-20" />
      <div className="absolute bottom-[10%] right-[1px] w-[1px] h-[30%] bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none z-20" />
    </div>
  );
};
