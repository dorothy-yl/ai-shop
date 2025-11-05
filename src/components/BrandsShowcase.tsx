'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function BrandsShowcase() {
  const [isPaused, setIsPaused] = useState(false);

  const brands = [
    { name: 'TOTEME', image: '/brands/toteme.jpg', logoStyle: 'font-serif text-white uppercase tracking-widest text-5xl' },
    { name: 'Dôen', image: '/brands/doen.png', logoStyle: 'font-serif text-white italic text-4xl' },
    { name: 'Zimmermann', image: '/brands/zimmermann.png', logoStyle: 'font-serif text-white uppercase tracking-wide text-3xl' },
    { name: 'A.L.C.', image: '/brands/alc.jpg', logoStyle: 'font-bold text-white uppercase tracking-widest text-6xl' },
    { name: 'Oscar de la Renta', image: '/brands/oscar-de-la-renta.jpg', logoStyle: 'font-serif text-white italic text-3xl' },
    { name: 'self-portrait', image: '/brands/self-portrait.jpg', logoStyle: 'font-serif text-white lowercase text-4xl tracking-tight' },
    { name: 'Magda Butrym', image: '/brands/magda-butrym.jpg', logoStyle: 'font-sans text-white uppercase tracking-widest text-3xl' },
    { name: 'Erdem', image: '/brands/erdem.jpg', logoStyle: 'font-serif text-white uppercase tracking-wider text-4xl' },
    { name: 'Giambattista Valli', image: '/brands/giambattista-valli.png', logoStyle: 'font-serif text-white italic text-3xl' },
    { name: 'TOVE', image: '/brands/tove.png', logoStyle: 'font-serif text-white uppercase tracking-widest text-6xl' },
    { name: 'Missoni', image: '/brands/missoni.png', logoStyle: 'font-bold text-white uppercase tracking-wider text-5xl' },
    { name: 'La DoubleJ', image: '/brands/la-doublej.jpg', logoStyle: 'font-serif text-white italic text-4xl' },
    { name: 'Alaïa', image: '/brands/alaia.png', logoStyle: 'font-serif text-white uppercase tracking-widest text-5xl' },
    { name: 'Jacquemus', image: '/brands/jacquemus.jpg', logoStyle: 'font-serif text-white lowercase italic text-4xl' },
    { name: 'Solace London', image: '/brands/solace-london.png', logoStyle: 'font-sans text-white uppercase tracking-wide text-3xl' },
    { name: 'Ulla Johnson', image: '/brands/ulla-johnson.png', logoStyle: 'font-serif text-white text-4xl' },
    { name: 'FARM Rio', image: '/brands/farm-rio.png', logoStyle: 'font-bold text-white uppercase tracking-wider text-4xl' },
    { name: 'SIR.', image: '/brands/sir.png', logoStyle: 'font-serif text-white uppercase tracking-widest text-5xl' },
    { name: 'Acne Studios', image: '/brands/acne-studios.png', logoStyle: 'font-sans text-white uppercase tracking-widest text-4xl' },
    { name: 'GANNI', image: '/brands/ganni.png', logoStyle: 'font-bold text-white uppercase tracking-wider text-5xl' }
  ];

  // 复制品牌数组以实现无缝滚动
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#EAE4DD]">
      <div className="mx-auto max-w-full">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-12 tracking-tight">
          Brands across the world{' '}
          <span className="inline-block font-serif">全球品牌</span>
        </h2>
        
        {/* 无限滚动容器 */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <style jsx>{`
            @keyframes scroll-left {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            
            .animate-scroll-left {
              animation: scroll-left 60s linear infinite;
            }
            
            .animate-scroll-left.paused {
              animation-play-state: paused !important;
            }
          `}</style>
          
          <div 
            className={`flex gap-6 animate-scroll-left ${isPaused ? 'paused' : ''}`}
          >
            {duplicatedBrands.map((brand, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-[280px] h-[360px] rounded-lg overflow-hidden group cursor-pointer"
              >
                {/* 背景图片 */}
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="280px"
                  priority={index < brands.length}
                />
                
                {/* 深色渐变遮罩 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                {/* 品牌艺术字 */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <h3 
                    className={`${brand.logoStyle} drop-shadow-2xl text-center select-none`}
                    style={{ 
                      textShadow: '2px 2px 8px rgba(0,0,0,0.5), 0 0 20px rgba(0,0,0,0.3)'
                    }}
                  >
                    {brand.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
