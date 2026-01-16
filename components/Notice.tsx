import React from 'react';
import { Plus, ArrowUpRight } from 'lucide-react';

const notices = [
  { id: 1, type: '공지', title: '시스템 정기 점검 안내 (2024.05.20)', date: '2024.05.15' },
  { id: 2, type: '뉴스', title: 'MG새마을금고보험, 신상품 출시 기념 이벤트', date: '2024.05.10' },
  { id: 3, type: '공지', title: '보험약관 개정 안내', date: '2024.05.01' },
  { id: 4, type: '뉴스', title: '2023년도 경영공시 안내', date: '2024.04.28' },
  { id: 5, type: '공지', title: '고객센터 운영시간 변경 안내', date: '2024.04.20' },
];

const Notice: React.FC = () => {
  // Filter to show only '공지'
  const filteredNotices = notices.filter(n => n.type === '공지');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
           {/* Left Header */}
           <div className="md:w-[280px] flex-shrink-0 flex flex-col">
              <h3 className="text-3xl font-bold text-gray-900 leading-tight mb-6">MG새마을금고가<br/>알려드려요</h3>
              
              <button className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all duration-300 group">
                <Plus size={24} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>
           </div>
           
           {/* Right List - Restored dividers, removed rounded corners */}
           <div className="flex-1">
              <ul className="flex flex-col divide-y divide-gray-100">
                 {filteredNotices.map(notice => (
                    <li key={notice.id} className="group flex flex-col md:flex-row md:items-center justify-between py-5 cursor-pointer hover:bg-gray-50 px-4 -mx-4 transition-all duration-200">
                       <div className="flex items-center gap-4 overflow-hidden mb-1 md:mb-0 flex-1">
                          <span className="text-xs font-bold px-2.5 py-1 rounded-md flex-shrink-0 bg-gray-100 text-gray-600 group-hover:bg-white transition-colors">
                             {notice.type}
                          </span>
                          <span className="text-gray-800 font-medium text-lg truncate group-hover:text-primary transition-colors flex items-center gap-2">
                             {notice.title}
                             <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 text-primary" />
                          </span>
                       </div>
                       <span className="text-sm text-gray-400 font-eng flex-shrink-0 md:ml-4">{notice.date}</span>
                    </li>
                 ))}
              </ul>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Notice;