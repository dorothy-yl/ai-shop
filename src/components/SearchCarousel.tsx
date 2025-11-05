'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SearchExample {
  id: number;
  text: string;
  image: string;
  url?: string;
}

interface SearchCarouselProps {
  title: string;
  examples: SearchExample[];
}

export default function SearchCarousel({ title, examples }: SearchCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      scrollContainerRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h3 className="text-2xl font-serif font-semibold mb-6">{title}</h3>
        
        <div className="relative group">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50 -ml-4"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carousel */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          >
            {examples.map((example) => {
              const href = example.url || `/edits/${encodeURIComponent(example.text)}`;
              
              return (
                <Link
                  key={example.id}
                  href={href}
                  className="flex-shrink-0 w-56 group/card cursor-pointer"
                >
                  {/* 图片 */}
                  <div className="relative aspect-[5/7] rounded-lg overflow-hidden mb-3 bg-gray-100">
                    <Image
                      src={example.image}
                      alt={example.text}
                      fill
                      className="object-cover group-hover/card:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 224px"
                    />
                  </div>
                  {/* 文字在图片下方 */}
                  <div className="px-1">
                    <p className="text-gray-800 text-sm font-medium line-clamp-2 leading-snug">
                      "{example.text}"
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50 -mr-4"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
