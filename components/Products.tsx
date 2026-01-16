import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Plus, X, FileText, Shield } from 'lucide-react';

interface ProductItem {
    id: string;
    title: string;
    desc: string;
    image: string;
    tags: string[];
    detail?: string;
}

const products: ProductItem[] = [
    {
        id: 'driver',
        title: '운전자 보험',
        desc: '운전 중 발생할 수 있는 사고,\n형사적 책임까지 든든하게 보장',
        image: 'https://lh3.google.com/u/0/d/1dI3S2z51YC_I6_0UgqwSrGsp3yOx_4Qo=w1721-h826-iv1?auditContext=prefetch',
        tags: ['#형사합의금', '#변호사선임비'],
        detail: '교통사고 처리지원금, 변호사 선임비용, 벌금 등 운전자에게 발생할 수 있는 형사적/행정적 책임을 보장합니다.'
    },
    {
        id: 'child',
        title: '어린이 보험',
        desc: '우리 아이 성장 단계별 위험,\n처음부터 끝까지 꼼꼼하게',
        image: 'https://lh3.google.com/u/0/d/1HShKRuSgRpdQ-aJ0eoXud_fVI1aQGj-X=w357-h356-iv1?auditContext=forDisplay',
        tags: ['#성장단계별', '#응급실내원비', '#납입면제'],
        detail: '성장기 자녀에게 발생할 수 있는 질병, 상해, 골절 등을 종합적으로 보장하며 성인이 되어서도 든든하게 지켜드립니다.'
    },
    {
        id: 'savings',
        title: '저축 보험',
        desc: '목돈 마련의 꿈,\n복리 이자와 비과세 혜택으로',
        image: 'https://lh3.google.com/u/0/d/1dqdVhbscMgo_Q2n9Z-06Mjw4h75iz-0h=w962-h826-iv1?auditContext=prefetch',
        tags: ['#목돈마련', '#비과세', '#복리이자'],
        detail: '장기적인 자산 형성을 위한 저축성 보험으로, 관련 세법 충족 시 비과세 혜택과 공시이율에 따른 복리 효과를 제공합니다.'
    },
    {
        id: 'health',
        title: '건강 보험',
        desc: '암, 뇌, 심장 3대 질병부터\n수술비, 입원비까지 한번에',
        image: 'https://lh3.google.com/u/0/d/1xIabF8YdwaGGB5SuXKz_xswYmjVFltoV=w1721-h826-iv1?auditContext=prefetch',
        tags: ['#암진단비', '#수술비', '#3대질병'],
        detail: '한국인의 주요 사망원인인 암, 뇌혈관질환, 심장질환을 집중 보장하며, 각종 수술비와 입원일당을 지원합니다.'
    },
    {
        id: 'fire',
        title: '화재 보험',
        desc: '소중한 우리 집과 재산,\n화재 손해 완벽 대비',
        image: 'https://lh3.google.com/u/0/d/18WOQNfKJmi2O-LOT5fQbeo194E9f1M5E=w962-h826-iv1?auditContext=prefetch',
        tags: ['#화재벌금', '#가전제품수리'],
        detail: '주택 화재로 인한 재산 손해뿐만 아니라, 우리집 화재로 인한 이웃집 피해 배상 책임, 가전제품 고장 수리비용 등을 보장합니다.'
    },
    {
        id: 'pension',
        title: '연금 보험',
        desc: '행복한 노후를 위한 준비,\n평생 월급처럼 든든하게',
        image: 'https://lh3.google.com/u/0/d/1MUrfssZes5KOeCT8FaFr9dEhXxE1e5bs=w962-h826-iv1?auditContext=prefetch',
        tags: ['#평생월급', '#노후준비'],
        detail: '안정적인 노후 생활을 위해 연금을 수령할 수 있는 상품으로, 종신연금형, 확정기간형 등 다양한 수령 방법을 선택할 수 있습니다.'
    }
];

const Products: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation(0.1);
    const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
    
    // Duplicate products for infinite scroll effect
    const displayProducts = [...products, ...products, ...products];

    return (
        <section className="py-24 bg-bg-base overflow-hidden w-full max-w-[1920px] mx-auto relative">
            <div className="w-full">
                {/* Header - Aligned to center grid */}
                <div className="max-w-[1240px] mx-auto px-6 mb-12">
                    <div className="text-left">
                        <h2 className="text-[40px] font-bold text-text-main mb-3 leading-tight">
                            고객님, <br/>
                            어떤 보험을 찾으시나요?
                        </h2>
                        <p className="text-text-sub text-lg font-medium">생애주기별 꼭 필요한 보장만을 담았습니다.</p>
                    </div>
                </div>

                {/* Marquee Viewport */}
                <div ref={ref} className={`relative fade-up-enter ${isVisible ? 'fade-up-active' : ''} w-full`}>
                    <div className="overflow-hidden py-12 -my-12"> 
                        <div className="flex gap-6 animate-scroll w-max px-6 hover:[animation-play-state:paused]">
                            {displayProducts.map((product, index) => {
                                return (
                                    <div 
                                        key={`${product.id}-${index}`} 
                                        className="flex-shrink-0 w-[320px]"
                                        onClick={() => setSelectedProduct(product)}
                                    >
                                        <div className="w-full h-[450px] relative rounded-[32px] bg-white border-[3px] border-transparent hover:border-primary transition-all duration-300 cursor-pointer overflow-hidden group transform hover:-translate-y-2">
                                            
                                            {/* Content */}
                                            <div className="p-8 h-full flex flex-col relative z-20">
                                                
                                                <div>
                                                    <h3 className="text-[28px] font-bold text-gray-900 mb-3 leading-snug group-hover:text-primary transition-colors">
                                                        {product.title}
                                                    </h3>
                                                    <p className="text-lg text-gray-500 leading-relaxed font-medium whitespace-pre-line mb-4">
                                                        {product.desc}
                                                    </p>
                                                </div>

                                                {/* Tags moved below description with original blue color */}
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {product.tags.map((tag, i) => (
                                                        <span key={i} className="bg-blue-50 text-primary text-xs font-bold px-2.5 py-1 rounded-lg">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Plus Icon */}
                                                <div className="mt-auto">
                                                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                                        <Plus size={24} strokeWidth={2} className="group-hover:rotate-90 transition-transform duration-300" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Image */}
                                            <div className="absolute bottom-0 right-0 w-[240px] h-[240px] transition-transform duration-500 group-hover:scale-105 origin-bottom-right z-10">
                                                <img 
                                                    src={product.image} 
                                                    alt={product.title} 
                                                    className="w-full h-full object-contain object-bottom-right"
                                                    loading="lazy"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Detail Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div 
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
                        onClick={() => setSelectedProduct(null)}
                    ></div>
                    <div className="bg-white rounded-[32px] p-8 md:p-10 max-w-2xl w-full relative z-10 shadow-2xl animate-fade-up-enter opacity-100 translate-y-0">
                        <button 
                            onClick={() => setSelectedProduct(null)}
                            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors z-50"
                        >
                            <X size={24} />
                        </button>

                        <div className="flex flex-col gap-8">
                            {/* Top Section: Text (Left) + Image (Right) */}
                            <div className="flex flex-col md:flex-row gap-6 items-center">
                                <div className="flex-1 pt-6 pl-2">
                                    <h3 className="text-4xl font-bold text-gray-900 mb-4">{selectedProduct.title}</h3>
                                    <p className="text-xl text-gray-600 mb-6 leading-relaxed whitespace-pre-line">{selectedProduct.desc}</p>
                                    
                                    {/* Tags - Reverted color */}
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProduct.tags.map((tag, i) => (
                                            <span key={i} className="bg-blue-50 text-primary text-sm font-bold px-3 py-1.5 rounded-lg">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="w-full md:w-[200px] flex-shrink-0 flex justify-center">
                                    <img 
                                        src={selectedProduct.image} 
                                        alt={selectedProduct.title} 
                                        className="w-[180px] h-[180px] object-contain"
                                    />
                                </div>
                            </div>

                            {/* Bottom Section: Features and Terms spanning full width */}
                            <div className="flex flex-col gap-4 w-full">
                                <div className="bg-gray-50 rounded-2xl p-6 w-full">
                                    <div className="flex items-start gap-3 mb-2">
                                        <Shield className="text-primary mt-1" size={20} />
                                        <h4 className="font-bold text-gray-900">상품 특징</h4>
                                    </div>
                                    <p className="text-gray-600 pl-8 leading-relaxed">
                                        {selectedProduct.detail}
                                    </p>
                                </div>

                                <div className="flex items-start gap-3 px-2">
                                    <FileText className="text-gray-400 mt-1" size={20} />
                                    <div className="flex-1">
                                         <h4 className="font-bold text-gray-900 text-sm mb-1">약관 안내</h4>
                                         <p className="text-gray-500 text-sm">보장 내용은 상품 상세설명서 및 약관을 참조하시기 바랍니다.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex gap-3">
                            <button className="flex-1 bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-200">
                                상담 신청하기
                            </button>
                            <button className="flex-1 bg-gray-100 text-gray-800 py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-colors">
                                자세히 보기
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Products;