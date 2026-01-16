import React, { useState, useEffect } from 'react';
import { Menu, Search, Lock } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['보험상품', '공제서비스', '소비자포털', '고객센터'];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-4 bg-white/80 backdrop-blur-md' 
          : 'py-6 bg-white'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-6 flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img 
            src="https://insure.kfcc.co.kr/img/header_mg_logo.23b57068.png" 
            alt="MG새마을금고보험" 
            className="h-6 w-auto object-contain" 
          />
        </div>

        {/* Main Navigation */}
        <nav className="hidden xl:flex items-center gap-12">
          {navItems.map((item) => (
            <a 
              key={item} 
              href="#" 
              onClick={(e) => e.preventDefault()}
              className="text-lg font-medium text-gray-800 hover:text-primary transition-colors relative group py-2"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Utilities */}
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
             {/* Login Text Color Changed to Primary */}
             <button className="flex items-center gap-1 text-primary font-bold hover:text-blue-700 transition-colors">
                로그인
             </button>
             {/* Divider Removed */}
             {/* Auth Center - Chip Design with Lock Icon */}
             <button className="flex items-center gap-1.5 bg-blue-50 text-primary px-4 py-1.5 rounded-full font-bold hover:bg-blue-100 transition-colors">
                <Lock size={14} />
                인증센터
             </button>
          </div>
          
          <div className="flex items-center gap-4">
             <button className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-800 transition-colors">
                <Search size={24} strokeWidth={2} />
             </button>
             <button className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-800 transition-colors">
                <Menu size={24} strokeWidth={2} />
             </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;