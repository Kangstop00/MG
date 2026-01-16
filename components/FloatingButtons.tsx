import React from 'react';
import { Calculator, Headphones, ArrowUp, FileText, FileCheck, Building } from 'lucide-react';

const FloatingButtons: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed right-0 top-[200px] z-50 flex flex-col gap-3">
        {/* Mobile Adjustment */}
        <style>{`
          @media (max-width: 1200px) {
            .fixed.right-0 {
              right: 0;
              top: auto;
              bottom: 3rem;
            }
          }
        `}</style>
      
      {/* Main container bg changed to primary */}
      <div className="bg-primary rounded-l-2xl shadow-lg border-0 p-2 flex flex-col gap-2 w-[84px]">
        
        <button className="group relative flex flex-col items-center justify-center w-full py-3 hover:bg-white/10 rounded-xl transition-all duration-300">
          <div className="mb-1 text-white group-hover:scale-110 transition-transform">
             <Calculator size={22} />
          </div>
          <span className="text-[10px] font-medium text-white/90 group-hover:text-white transition-colors">보험계산</span>
        </button>
        
        <button className="group relative flex flex-col items-center justify-center w-full py-3 hover:bg-white/10 rounded-xl transition-all duration-300">
           <div className="mb-1 text-white group-hover:scale-110 transition-transform">
            <Headphones size={22} />
          </div>
          <span className="text-[10px] font-medium text-white/90 group-hover:text-white transition-colors">상담신청</span>
        </button>

        <button className="group relative flex flex-col items-center justify-center w-full py-3 hover:bg-white/10 rounded-xl transition-all duration-300">
           <div className="mb-1 text-white group-hover:scale-110 transition-transform">
            <FileText size={22} />
          </div>
          <span className="text-[10px] font-medium text-white/90 group-hover:text-white transition-colors">청구안내</span>
        </button>
        
        <button className="group relative flex flex-col items-center justify-center w-full py-3 hover:bg-white/10 rounded-xl transition-all duration-300">
           <div className="mb-1 text-white group-hover:scale-110 transition-transform">
            <FileCheck size={22} />
          </div>
          <span className="text-[10px] font-medium text-white/90 group-hover:text-white transition-colors">증명서</span>
        </button>
        
        <button className="group relative flex flex-col items-center justify-center w-full py-3 hover:bg-white/10 rounded-xl transition-all duration-300">
           <div className="mb-1 text-white group-hover:scale-110 transition-transform">
            <Building size={22} />
          </div>
          <span className="text-[10px] font-medium text-white/90 group-hover:text-white transition-colors">지점찾기</span>
        </button>

        <div className="w-full h-[1px] bg-white/20 my-1"></div>

        <button 
          onClick={scrollToTop}
          className="flex items-center justify-center w-full py-3 text-white/70 hover:text-white transition-colors"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </div>
  );
};

export default FloatingButtons;