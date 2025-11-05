'use client';

import { useRef } from 'react';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
}

export default function BlogSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'From Runway to Real Life: 2025 Dressing Trends Predicted by AI',
      date: 'Oct 21st, 2025',
      image: '/blog-1.jpg',
    },
    {
      id: 2,
      title: 'AI-Curated Picks: Knee-High Boots and Heels That Elevate Every Outfit',
      date: 'Oct 10th, 2025',
      image: '/blog-2.jpg',
    },
    {
      id: 3,
      title: 'Night-Out Ready: AI-Powered Picks for Cocktail & Party Dresses',
      date: 'Oct 1st, 2025',
      image: '/blog-3.jpg',
    },
    {
      id: 4,
      title: 'How to Find Your Style (With a Little Help from AI Fashion Search)',
      date: 'Sep 19th, 2025',
      image: '/blog-4.jpg',
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      scrollContainerRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h3 className="text-2xl font-serif font-semibold mb-6">Blog</h3>
        
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

          {/* Blog Posts Carousel */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          >
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="flex-shrink-0 w-80 group/card cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-gray-200">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover/card:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                </div>
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h4 className="text-lg font-medium leading-snug group-hover/card:text-gray-600 transition-colors line-clamp-2">
                  {post.title}
                </h4>
              </article>
            ))}
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
