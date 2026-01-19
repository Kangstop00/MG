import React from 'react';
import { AnimatedSection } from './ui/AnimatedSection.tsx';
import { Headphones, Smartphone, AlertTriangle, FileText, ArrowUpRight } from 'lucide-react';

const CustomerSupport: React.FC = () => {
  const items = [
    { 
      id: 'support', 
      title: '고객상담', 
      desc: '궁금한 점이 있으신가요?\n전문 상담원이 도와드립니다.',
      icon: Headphones 
    },
    { 
      id: 'mobile', 
      title: '모바일창구', 
      desc: '지점 방문 없이 간편하게\n모바일로 업무를 처리하세요.',
      icon: Smartphone 
    },
    { 
      id: 'accident', 
      title: '자동차 사고 접수', 
      desc: '예기치 못한 사고 발생 시\n신속하게 접수해 드립니다.',
      icon: AlertTriangle 
    },
    { 
      id: 'docs', 
      title: '필요 서류 안내', 
      desc: '보험금 청구에 필요한\n서류를 안내해 드립니다.',
      icon: FileText 
    }
  ];

  return (
    <section className="bg-white pb-24 pt-32">
      <div className="max-w-[1240px] mx-auto px-6">
        <AnimatedSection>
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">문제를 해결해드릴게요</h2>
            <p className="text-gray-500 text-lg">언제나 신속하고 친절하게 안내해드리겠습니다.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {items.map((item, index) => (
              <a 
                key={item.id}
                href="#"
                onClick={e => e.preventDefault()}
                className="group flex flex-col p-8 rounded-[24px] bg-gray-50 hover:bg-[#F4F9FF] transition-all duration-300 relative overflow-hidden items-start min-h-[220px] gap-12"
              >
                {/* Icon */}
                <div className="text-gray-900 group-hover:text-primary group-hover:scale-110 transition-all duration-300 transform origin-left">
                    <item.icon size={60} strokeWidth={1.2} />
                </div>
                
                {/* Text Area */}
                <div className="w-full">
                    {/* Arrow next to title with larger gap (gap-4) */}
                    <div className="flex items-center gap-4 mb-3 w-full">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors tracking-tight">
                            {item.title}
                        </h3>
                        <ArrowUpRight size={24} className="text-gray-300 group-hover:text-primary transition-colors" />
                    </div>
                    {/* Description */}
                    <p className="text-base text-gray-500 leading-relaxed whitespace-pre-line group-hover:text-gray-700 transition-colors">
                        {item.desc}
                    </p>
                </div>
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CustomerSupport;