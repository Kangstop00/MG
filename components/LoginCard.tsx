import React from 'react';
import { ChevronRight } from 'lucide-react';

export const LoginCard: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`bg-white rounded-[32px] px-8 pb-8 pt-0 shadow-[0_20px_40px_rgba(0,0,0,0.08)] w-full md:w-[320px] flex flex-col h-[280px] relative overflow-visible ${className}`}>
       
       {/* 3D Icon - Smaller (w-36), Higher position (-top-16) */}
       <div className="absolute -top-16 -right-8 transform rotate-6 pointer-events-none animate-bounce-slow z-20">
          <img 
             src="https://lh3.google.com/u/0/d/1G7c8Lg5il9W6SeXSoRj3bW1pCPCrz8qS=w1640-h826-iv1?auditContext=prefetch"
             alt="Login Lock Icon"
             className="w-36 h-auto" 
          />
       </div>

       {/* Content Area */}
       <div className="mt-auto relative z-10 flex flex-col">
         {/* Gap kept as per previous state (mb-4) */}
         <p className="text-gray-600 font-medium text-lg leading-snug mb-4">
           안전하고 든든한 보장<br/>
           <span className="text-primary font-bold">MG새마을금고보험</span>에서
         </p>
         <h3 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight leading-tight whitespace-nowrap">
           로그인 해주세요!
         </h3>

         {/* Buttons - Gap kept as per previous state (gap-5) */}
         <div className="flex flex-col gap-5 mb-1">
           <button className="w-full py-3.5 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-200 group">
             로그인 <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
           </button>
           
           <button className="flex items-center justify-center gap-1 text-base text-gray-500 hover:text-primary transition-colors font-medium group">
              비회원 로그인 <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform"/>
           </button>
         </div>
       </div>
    </div>
  );
}

export default LoginCard;