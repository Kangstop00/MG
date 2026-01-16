import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-20 pb-16 min-h-[400px]">
      <div className="max-w-[1240px] mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
           <div className="md:col-span-1">
              <div className="mb-6">
                 {/* Reduced Logo Size */}
                 <img 
                   src="https://insure.kfcc.co.kr/img/header_mg_logo.23b57068.png" 
                   alt="MG새마을금고보험" 
                   className="h-5 w-auto grayscale opacity-80" 
                 />
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                 고객님의 든든한 파트너가 되어드리겠습니다.<br/>
                 언제나 믿고 맡길 수 있는 보험사가 되겠습니다.
              </p>
           </div>
           
           <div>
              <h4 className="font-bold text-gray-900 mb-2 text-sm">고객센터</h4>
              <p className="text-3xl font-bold text-gray-800 font-eng mb-3">1599-9000</p>
              <p className="text-xs text-gray-500">
                 평일 09:00 ~ 18:00<br/>
                 (주말 및 공휴일 휴무)
              </p>
           </div>
           
           <div>
              <h4 className="font-bold text-gray-900 mb-6 text-sm">바로가기</h4>
              <ul className="space-y-3 text-xs text-gray-600">
                 <li><a href="#" onClick={e=>e.preventDefault()} className="hover:text-primary transition-colors">회사소개</a></li>
                 <li><a href="#" onClick={e=>e.preventDefault()} className="hover:text-primary transition-colors">지점찾기</a></li>
                 <li><a href="#" onClick={e=>e.preventDefault()} className="hover:text-primary transition-colors">공시실</a></li>
                 <li><a href="#" onClick={e=>e.preventDefault()} className="hover:text-primary transition-colors">소비자보호</a></li>
              </ul>
           </div>

           <div>
              <h4 className="font-bold text-gray-900 mb-6 text-sm">관련사이트</h4>
               <select className="w-full p-3 bg-white border border-gray-200 rounded-lg text-xs text-gray-600 focus:outline-none focus:border-primary transition-colors">
                  <option>패밀리사이트 선택</option>
                  <option>MG새마을금고</option>
                  <option>MG복지재단</option>
               </select>
           </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex flex-wrap gap-6 text-xs">
              <a href="#" onClick={e=>e.preventDefault()} className="font-bold text-gray-900">개인정보처리방침</a>
              <a href="#" onClick={e=>e.preventDefault()} className="text-gray-600 hover:text-gray-900 transition-colors">신용정보활용체제</a>
              <a href="#" onClick={e=>e.preventDefault()} className="text-gray-600 hover:text-gray-900 transition-colors">이용약관</a>
              <a href="#" onClick={e=>e.preventDefault()} className="text-gray-600 hover:text-gray-900 transition-colors">전자금융거래약관</a>
           </div>
           <div className="text-xs text-gray-400 font-eng">
              © 2024 MG Community Credit Cooperatives. All rights reserved.
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;