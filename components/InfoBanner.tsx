import React from 'react';
import { AnimatedSection } from './ui/AnimatedSection.tsx';
import { ArrowUpRight } from 'lucide-react';

const InfoBanner: React.FC = () => {
  return (
    // Section allows overflow visible for the icon
    <section className="relative h-[200px] md:h-[140px] w-full flex items-center z-40">
        <style>
            {`
            @keyframes gradient {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            .animate-gradient {
                background: linear-gradient(-45deg, #495aff, #0acffe, #495aff);
                background-size: 200% 200%;
                animation: gradient 5s ease infinite;
            }
            `}
        </style>
        
        {/* Background Container handles clipping for gradient and blobs */}
        <div className="absolute inset-0 overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 animate-gradient z-0"></div>

            {/* Floating shapes pattern */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute top-[-50%] right-[-10%] w-[300px] h-[300px] rounded-full bg-white blur-3xl mix-blend-overlay"></div>
                <div className="absolute bottom-[-50%] left-[-10%] w-[300px] h-[300px] rounded-full bg-blue-300 blur-3xl mix-blend-overlay"></div>
            </div>
        </div>

        <div className="max-w-[1240px] mx-auto px-6 w-full relative z-10">
            <AnimatedSection>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
                            MG새마을 금고에서 보험 진단받고 <br className="md:hidden" />
                            <span className="text-white">딱 맞는 보험</span>을 찾아보세요!
                        </h2>
                        
                        <button className="flex items-center gap-1 text-base font-medium text-white/90 hover:text-white transition-colors w-fit group">
                            내 보험 진단받기
                            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                    
                    <div className="flex items-center gap-8 relative">
                        {/* 3D Icon Motion with Image - Positioned significantly higher (top-[-5rem]) and visible now */}
                        <div className="hidden md:flex absolute right-12 top-[-5rem] -translate-y-1/2 items-center justify-center animate-bounce-slow pointer-events-none">
                            <img 
                                src="https://lh3.google.com/u/0/d/14kvAA87uHJOOQ2tJMgauF9XcLUb-2Htp=w1593-h826-iv1?auditContext=prefetch"
                                alt="Insurance Diagnosis"
                                className="w-48 h-auto object-contain drop-shadow-2xl transform rotate-[-5deg]"
                            />
                        </div>
                        {/* Spacer for icon */}
                        <div className="w-48 h-20 hidden md:block"></div>
                    </div>
                </div>
            </AnimatedSection>
        </div>
    </section>
  );
};

export default InfoBanner;