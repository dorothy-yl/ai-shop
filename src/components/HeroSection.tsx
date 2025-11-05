'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  // Hero home cards data - 直接从 Plush S3 获取
  const homeCardsData = [
    // Group 1
    [
      { id: 1, image: 'https://plush-web-app.s3.us-west-1.amazonaws.com/home-page-cards/home-card-0.webp', text: 'Pastel colored long-sleeve blouses with ruffle details, size Small', url: '/edits/Pastel+colored+long-sleeve+blouses+with+ruffle+details%2C+size+Small' },
      { id: 2, image: 'https://plush-web-app.s3.us-west-1.amazonaws.com/home-page-cards/home-card-1.webp', text: 'Versatile midi summer dress, sleek with a fitted waist, no patterns', url: '/edits/Versatile+midi+summer+dress%2C+sleek+with+a+fitted+waist%2C+no+patterns' },
      { id: 3, image: 'https://plush-web-app.s3.us-west-1.amazonaws.com/home-page-cards/home-card-2.webp', text: 'Silk dresses with lace details, no cutout or slits', url: '/edits/Silk+dresses+with+lace+details%2C+no+cutout+or+slits' },
      { id: 4, image: 'https://plush-web-app.s3.us-west-1.amazonaws.com/home-page-cards/home-card-3.webp', text: 'Blazer with cinched waist in neutral colors, on sale, under $500', url: '/edits/Blazer+with+cinched+waist+in+neutral+colors%2C+on+sale%2C+under+%24500' },
    ],
    // Group 2
    [
      { id: 5, image: 'https://plush-web-app.s3.us-west-1.amazonaws.com/home-page-cards/home-card-4.webp', text: 'What do I wear for a wedding in Jackson Hole in May? Under $500', url: '/edits/What+do+I+wear+for+a+wedding+in+Jackson+Hole+in+May%3F+Under+%24500' },
      { id: 6, image: 'https://plush-web-app.s3.us-west-1.amazonaws.com/home-page-cards/home-card-5.webp', text: 'What type of jackets are chic and warm for date nights in San Francisco?', url: '/edits/What+type+of+jackets+are+chic+and+warm+for+date+nights+in+San+Francisco%3F' },
      { id: 7, image: 'https://plush-web-app.s3.us-west-1.amazonaws.com/home-page-cards/home-card-6.webp', text: 'What should I wear to my rehearsal dinner as the bride on the Amalfi Coast?', url: '/edits/What+should+I+wear+to+my+rehearsal+dinner+as+the+bride+on+the+Amalfi+Coast%3F' },
      { id: 8, image: 'https://plush-web-app.s3.us-west-1.amazonaws.com/home-page-cards/home-card-7.webp', text: 'What kind of work dresses are good for a rectangle body type?', url: '/edits/What+kind+of+work+dresses+are+good+for+a+rectangle+body+type%3F' },
    ],
  ];

  // 自动轮播 - 每2秒切换
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % homeCardsData.length);
    }, 2000); // 每2秒切换

    return () => clearInterval(timer);
  }, [homeCardsData.length]);

  const currentCards = homeCardsData[currentIndex];

  return (
    <section className="relative pt-8 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold tracking-tight mb-6">
          Style that speaks <em className="italic">your</em> language
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Describe what you're looking for, and let our AI curate tasteful results.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="relative mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="What can we help you find today?"
              className="w-full px-6 py-4 pr-12 text-base border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent shadow-sm"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </form>

        {/* Home Cards Grid - 2x2 Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-4xl mx-auto">
          {currentCards.map((card) => (
            <Link
              key={card.id}
              href={card.url}
              className="group block relative aspect-[16/10] rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 hover:shadow-lg transition-all duration-300"
            >
              {/* 左侧图片 */}
              <div className="absolute left-0 top-0 bottom-0 w-1/2">
                <Image
                  src={card.image}
                  alt={card.text}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, 25vw"
                  priority
                />
              </div>
              {/* 右侧文字 */}
              <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-center p-4 sm:p-6">
                <p className="text-gray-800 text-xs sm:text-sm font-medium text-center leading-snug">
                  "{card.text}"
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mb-6">
          {homeCardsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'w-8 bg-gray-900' : 'w-2 bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full hover:border-gray-300 transition-all shadow-sm hover:shadow">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium">Surprise me</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full hover:border-gray-300 transition-all shadow-sm hover:shadow">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            <span className="text-sm font-medium">Smart filters</span>
          </button>
        </div>
      </div>
    </section>
  );
}
