'use client';

import Image from 'next/image';

export default function FinalCTABanner() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 my-12">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden min-h-[500px] flex items-center justify-center">
          {/* Background Image */}
          <Image
            src="/banner-desktop.webp"
            alt="Banner background"
            fill
            className="object-cover hidden md:block"
            sizes="100vw"
            priority
          />
          <Image
            src="/banner-mobile.webp"
            alt="Banner background"
            fill
            className="object-cover md:hidden"
            sizes="100vw"
            priority
          />
          
          {/* Content */}
          <div className="relative z-10 text-center text-black px-4">
            <p className="text-4xl sm:text-5xl md:text-6xl font-serif mb-3 leading-tight">
              Describe the vibe.
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl font-serif mb-8 leading-relaxed">
              Get curated style<br className="hidden sm:block" /> from only the best brands.
            </p>
            <button 
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors font-medium"
            >
              <span>Shop Now</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

