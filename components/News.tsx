import React from 'react';
import { Plus, ArrowUpRight } from 'lucide-react';

const newsItems = [
  { id: 1, title: '6월 신용카드 무이자할부 안내', date: '2023.06.01' },
  { id: 2, title: "[모바일]신상품 '굿앤굿어린이치아보험' 오픈", date: '2023.04.28' },
  { id: 3, title: 'TMAP 안전운전할인특약 출시 안내', date: '2023.04.28' },
  { id: 4, title: 'K-BPI 다이렉트 부문 6년 연속 1위 수상', date: '2023.03.24' },
  { id: 5, title: '고객센터 시스템 점검 안내', date: '2023.03.20' },
  { id: 6, title: '자동차보험 마일리지 특약 변경 안내', date: '2023.03.15' },
  { id: 7, title: '2023년 우수 금융상품 선정', date: '2023.03.10' },
  { id: 8, title: '개인정보처리방침 개정 안내', date: '2023.03.01' },
];

const News: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
           {/* Left Header */}
           <div className="md:w-[280px] flex-shrink-0 flex flex-col">
              <h3 className="text-3xl font-bold text-gray-900 leading-tight mb-6">MG뉴스룸</h3>
              
              <button className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all duration-300 group">
                <Plus size={24} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>
           </div>
           
           {/* Right Grid - Restored Borders, Removed large Gaps */}
           <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0">
                 {newsItems.map((item, index) => (
                    <div 
                        key={item.id} 
                        className={`
                            px-6 py-6 transition-colors duration-200 hover:bg-[#F4F9FF] flex flex-col h-full
                            ${index % 4 !== 3 ? 'md:border-r border-gray-100' : ''} 
                            ${index < 4 ? 'md:border-b border-gray-100' : ''}
                        `}
                    >
                       <a href="#" className="block h-full flex flex-col group">
                           <div className="mb-2">
                              <h4 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                                 {item.title}
                              </h4>
                           </div>
                           
                           <div className="mt-12 flex items-end justify-between">
                              <span className="text-sm text-gray-400 font-eng">
                                  {item.date}
                              </span>
                              <ArrowUpRight size={20} className="text-gray-300 group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300" />
                           </div>
                       </a>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default News;