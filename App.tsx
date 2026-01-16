import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickAccess from './components/QuickAccess';
import CustomerSupport from './components/CustomerSupport';
import Products from './components/Products';
import SpecialProducts from './components/SpecialProducts';
import InfoBanner from './components/InfoBanner';
import Notice from './components/Notice';
import News from './components/News';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

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