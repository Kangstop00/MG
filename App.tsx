import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import QuickAccess from './components/QuickAccess.tsx';
import CustomerSupport from './components/CustomerSupport.tsx';
import Products from './components/Products.tsx';
import SpecialProducts from './components/SpecialProducts.tsx';
import InfoBanner from './components/InfoBanner.tsx';
import Notice from './components/Notice.tsx';
import News from './components/News.tsx';
import Footer from './components/Footer.tsx';
import FloatingButtons from './components/FloatingButtons.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg-base text-text-main font-sans selection:bg-primary/20">
      <Header />
      <main>
        {/* Hero includes the Banner Carousel and handles the LoginCard position */}
        <Hero />
        
        {/* Main Content Area */}
        <div className="relative z-20 bg-white">
           <QuickAccess />
           <Products />
           <CustomerSupport />
           <SpecialProducts />
           <InfoBanner />
           <Notice />
           <News />
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default App;