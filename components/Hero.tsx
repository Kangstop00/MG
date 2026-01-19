import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import LoginCard from './LoginCard.tsx';

const banners = [
  {
    id: 1,
    title: "내 삶을 지켜주는\n든든한 파트너",
    desc: "언제나 회원님 곁에서 힘이 되어드리겠습니다.\nMG새마을금고보험과 함께 더 나은 내일을 준비하세요.",
    image: "https://lh3.google.com/u/0/d/1BNW0wBKUdKDX1ZIz5zfSJQKP9bkd4UMI=w1668-h825-iv1?auditContext=prefetch",
    bgClass: "from-[#E3F2FD] via-[#F8FAFC] to-[#FFFFFF]" // Bright Pastel Blue
  },
  {
    id: 2,
    title: "우리아이의 꿈을\n응원합니다",
    desc: "성장 단계별 맞춤 보장으로\n소중한 자녀의 미래를 지켜드립니다.",
    image: "https://lh3.google.com/u/0/d/10JSChnXQZIUOGQEiCZO6p0hom_zfL6FR=w1668-h825-iv1?auditContext=prefetch",
    bgClass: "from-[#D1E9FC] via-[#E6F4FF] to-[#FFFFFF]" // Pastel Blue
  },
  {
    id: 3,
    title: "건강한 100세\n시대를 위한 준비",
    desc: "노후 의료비 걱정 없는\n행복한 제2의 인생을 설계하세요.",
    image: "https://lh3.google.com/u/0/d/1jRuSft-aaZrMBYaJvMJy_reghxl4iZ3W=w1668-h825-iv1?auditContext=prefetch",
    bgClass: "from-[#E0F7FA] via-[#E1F5FE] to-[#FFFFFF]" // Bright Pastel Cyan
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let interval: number;
    if (isPlaying) {
      interval = window.setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % banners.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    // Section styles
    <section className="relative pt-32 md:pt-40 pb-0 bg-white z-30 overflow-visible">
      <style>
        {`
          @keyframes progress {
            0% { width: 0%; }
            100% { width: 100%; }
          }
          .animate-progress {
            animation: progress 5s linear;
          }
        `}
      </style>
      
      {/* Background Wrapper with Overflow Hidden to prevent scrollbars from background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Background Shape Layer */}
          <div className={`absolute top-0 right-0 w-[53%] h-full rounded-bl-[180px] transition-colors duration-1000 ease-in-out bg-gradient-to-br ${banners[currentSlide].bgClass} z-0`}></div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        
        {/* Banner Container */}
        <div className="relative pb-12 md:pb-16">
           {/* Left: Banner Slider */}
           <div className="w-full md:w-[70%] relative flex flex-col justify-center">
              
              <div className="relative h-[280px] w-full">
                {banners.map((banner, index) => (
                  <div 
                    key={banner.id}
                    className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out transform ${
                      index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'
                    }`}
                  >
                    <div className="flex items-center justify-between h-full relative">
                        <div className={`py-6 flex flex-col justify-center relative z-20`}>
                          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.2] mb-6 whitespace-pre-line tracking-wide">
                            {banner.title}
                          </h1>
                          <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium whitespace-pre-line">
                            {banner.desc}
                          </p>
                        </div>
                        
                        {/* Banner Image Area */}
                        <div className="hidden md:block absolute right-[-40px] top-[55%] -translate-y-1/2 w-[1100px] h-[110%] z-10 pointer-events-none">
                           <img 
                              src={banner.image} 
                              alt="" 
                              className={`w-full h-full object-contain object-right mix-blend-multiply ${index === 0 ? 'scale-125 origin-right' : ''}`}
                           />
                        </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigator */}
              <div className="flex items-center gap-5 mt-10 relative z-20 w-fit">
                 <div className="flex items-center gap-2 font-eng font-medium text-xl text-gray-900 shrink-0">
                    <span className="text-primary font-bold">{String(currentSlide + 1).padStart(2, '0')}</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-gray-400">{String(banners.length).padStart(2, '0')}</span>
                 </div>

                 <div className="w-[120px] h-[2px] bg-gray-200 rounded-full overflow-hidden shrink-0">
                    {isPlaying && (
                       <div key={currentSlide} className="h-full bg-primary animate-progress origin-left"></div>
                    )}
                 </div>

                 <div className="flex items-center gap-1">
                    <button onClick={handlePrev} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-50 text-[#9DA3AF] hover:text-gray-600 transition-colors">
                      <ChevronLeft size={20} strokeWidth={2} />
                    </button>
                    <button onClick={togglePlay} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-50 text-[#9DA3AF] hover:text-gray-600 transition-colors">
                      {isPlaying ? (
                        <Pause size={16} fill="currentColor" strokeWidth={0} />
                      ) : (
                        <Play size={16} fill="currentColor" strokeWidth={0} className="ml-0.5" />
                      )}
                    </button>
                    <button onClick={handleNext} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-50 text-[#9DA3AF] hover:text-gray-600 transition-colors">
                      <ChevronRight size={20} strokeWidth={2} />
                    </button>
                 </div>
              </div>

           </div>

           {/* Right: Login Card */}
           {/* Move higher: changed bottom-16 to bottom-28. Keeps translate-y-1/2 to hang slightly. */}
           <div className="hidden md:block absolute right-0 bottom-28 translate-y-1/2 z-50">
                <LoginCard className="shadow-2xl" />
           </div>
        </div>

        {/* Mobile: Login Card */}
        <div className="md:hidden mt-8 mb-4">
          <LoginCard />
        </div>

      </div>
    </section>
  );
};

export default Hero;