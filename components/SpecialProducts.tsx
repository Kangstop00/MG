import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, TrendingUp, PiggyBank, Heart, User, Home } from 'lucide-react';

const categories = [
  { 
    id: 'future', 
    label: '#든든한 미래를 위한 보장', 
    items: [
      { title: '든든한 보장', desc: '예기치 못한 사고와 질병,\n걱정 없이 치료에만\n전념하세요', icon: ShieldCheck },
      { title: '알뜰한 저축', desc: '목돈 마련부터 노후 준비까지,\n안정적인 수익으로\n키워드려요', icon: PiggyBank },
      { title: '안전한 대출', desc: '필요할 때 힘이 되는,\n합리적인 금리의\n신용대출', icon: TrendingUp },
    ]
  },
  { 
    id: 'custom', 
    label: '#고객 맞춤형 설계', 
    items: [
      { title: '맞춤형 건강', desc: '나에게 꼭 필요한 보장만\n쏙쏙 골라 담아\n설계하세요', icon: Heart },
      { title: '생애주기별', desc: '연령별, 시기별 필요한\n보장을 전문가가\n추천합니다', icon: User },
      { title: '종합 보장', desc: '하나의 보험으로\n다양한 위험을 한번에\n대비하세요', icon: ShieldCheck },
    ]
  },
  { 
    id: 'benefit', 
    label: '#다양한 혜택 제공', 
    items: [
      { title: '보험료 할인', desc: '건강할수록, 안전할수록\n더 내려가는 보험료\n혜택', icon: PiggyBank },
      { title: '부가 서비스', desc: '헬스케어부터 건강검진까지\n다양한 부가서비스를\n누리세요', icon: Heart },
      { title: '멤버십 혜택', desc: 'MG새마을금고 회원만을\n위한 특별한 제휴\n서비스', icon: User },
    ]
  },
  { 
    id: 'partner', 
    label: '#평생 함께하는 파트너', 
    items: [
      { title: '간편 청구', desc: '모바일로 쉽고 빠르게\n보험금을 청구할 수\n있습니다', icon: Home },
      { title: '전문 상담', desc: '언제 어디서나\n전문가와 1:1 상담이\n가능합니다', icon: User },
      { title: '평생 케어', desc: '가입부터 만기까지\n평생 든든하게\n지켜드립니다', icon: ShieldCheck },
    ]
  }
];

const SpecialProducts: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const activeData = categories.find(c => c.id === activeCategory) || categories[0];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-16">
          
          {/* Left: Title & Tags */}
          <div className="lg:w-[30%] flex flex-col shrink-0 relative z-30">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-10 pl-4">
              MG새마을금고만의<br />
              특별한<br />
              테마상품입니다.
            </h2>
            
            <div className="flex flex-col gap-4 items-start w-full pr-0">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-xl font-medium transition-all duration-300 text-left px-8 py-6 flex items-center justify-between group relative overflow-visible ${
                    activeCategory === cat.id 
                      ? 'bg-primary text-white shadow-xl shadow-blue-200/50 w-[115%] rounded-full translate-x-8 z-30' 
                      : 'bg-white text-gray-400 hover:text-primary hover:bg-gray-50 rounded-full w-full'
                  }`}
                >
                  <span className="relative z-10">{cat.label}</span>
                  {activeCategory === cat.id && <ArrowRight size={24} className="ml-4 relative z-10 mr-4" />}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Cards Container */}
          <div className="lg:w-[70%] bg-gray-50 rounded-[40px] p-8 md:p-10 relative z-10 flex flex-col justify-center min-h-[500px]">
             <div className="text-center mb-6">
                <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                  고객님의 상황에 딱 맞는 <span className="text-primary">맞춤형 상품</span>을<br/> 추천해 드립니다.
                </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {activeData.items.map((item, idx) => (
                   <div key={idx} className="bg-white rounded-[24px] p-8 flex flex-col items-start text-left cursor-pointer group border-2 border-transparent hover:border-primary transition-all duration-300 min-h-[300px] hover:shadow-lg">
                      {/* Icon positioned higher */}
                      <div className="mb-auto mt-2 text-gray-400 group-hover:text-primary transition-colors">
                         <item.icon size={56} strokeWidth={1.2} />
                      </div>
                      
                      {/* Text positioned lower with reduced gap */}
                      <div className="mt-3">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-base text-gray-500 leading-relaxed whitespace-pre-line group-hover:text-gray-700">
                            {item.desc}
                        </p>
                      </div>
                   </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpecialProducts;