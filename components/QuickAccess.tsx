import React from 'react';
import { AnimatedSection } from './ui/AnimatedSection.tsx';
import { FileText, Calculator, CreditCard, PieChart, Landmark } from 'lucide-react';
import { QuickLink } from '../types.ts';

const quickLinks: QuickLink[] = [
  { id: '1', label: '보험금청구', icon: FileText },
  { id: '2', label: '보험료납입', icon: CreditCard },
  { id: '3', label: '대출신청', icon: Landmark },
  { id: '4', label: '증명서발급', icon: FileText },
  { id: '5', label: '계약조회', icon: PieChart },
  { id: '6', label: '보험계산', icon: Calculator },
];

const QuickAccess: React.FC = () => {
  return (
    <section className="bg-white relative">
      {/* Reduced top padding to md:pt-20 to pull content up closer to the lifted Login Card */}
      <div className="max-w-[1240px] mx-auto px-6 py-12 md:pt-20 md:pb-24">
        
        <div className="flex flex-col">
            
            {/* Header Area - Left Side (65%) */}
            <div className="w-full md:w-[65%] mb-12">
                <AnimatedSection>
                  {/* Removed cursor-pointer and group classes */}
                  <div className="flex items-center gap-2 mb-3">
                    {/* Removed hover:text-primary class */}
                    <h2 className="text-3xl font-bold text-text-main">자주 찾는 서비스</h2>
                  </div>
                  <p className="text-text-sub text-base">고객님들이 가장 많이 이용하시는 서비스입니다.</p>
                </AnimatedSection>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                {/* Icons Grid - 6 items */}
                <div className="w-full md:w-full">
                    {/* Changed grid-cols-4 to grid-cols-3 for mobile (3 columns * 2 rows = 6 items) */}
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                      {quickLinks.map((link, index) => (
                        <AnimatedSection key={link.id} delay={index * 50}>
                          <a 
                            href="#" 
                            onClick={(e) => e.preventDefault()}
                            className="group relative flex flex-col items-center justify-center gap-3 py-6 rounded-2xl transition-all duration-300 overflow-hidden bg-gray-50/50"
                          >
                            {/* Background fill effect rising from bottom (Primary Color) */}
                            <div className="absolute inset-0 bg-primary transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0 rounded-2xl"></div>

                            <div className="relative z-10 text-primary group-hover:text-white group-hover:animate-wiggle transition-colors duration-300 transform">
                              <link.icon size={44} strokeWidth={1.5} />
                            </div>
                            <span className="relative z-10 text-base font-medium text-gray-800 group-hover:text-white transition-colors tracking-tight text-center whitespace-nowrap">
                              {link.label}
                            </span>
                          </a>
                        </AnimatedSection>
                      ))}
                    </div>
                </div>
            </div>
        </div>
        
      </div>
    </section>
  );
};

export default QuickAccess;