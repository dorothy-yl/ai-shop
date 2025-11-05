'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  // Categories dropdown structure matching plush.shop
  const categoriesData = {
    clothing: [
      { name: 'Dresses', url: '/edits/Dresses?type=ITEM' },
      { name: 'Tops', url: '/edits/Tops?type=ITEM' },
      { name: 'Outerwear', url: '/edits/Outerwear?type=ITEM' },
      { name: 'Jeans', url: '/edits/Jeans?type=ITEM' },
      { name: 'Jumpsuits & Rompers', url: '/edits/Jumpsuits+%26+Rompers?type=ITEM' },
      { name: 'Pants', url: '/edits/Pants?type=ITEM' },
      { name: 'Skirts', url: '/edits/Skirts?type=ITEM' },
      { name: 'Shorts', url: '/edits/Shorts?type=ITEM' },
      { name: 'Sweaters & Knits', url: '/edits/Sweaters+%26+Knits?type=ITEM' },
      { name: 'Swimsuits & Cover-Ups', url: '/edits/Swimsuits+%26+Cover-Ups?type=ITEM' },
    ],
    shoes: [
      { name: 'All Shoes', url: '/edits/Shoes?type=ITEM' },
      { name: 'Heels', url: '/edits/Heels?type=ITEM' },
      { name: 'Flats', url: '/edits/Flats?type=ITEM' },
      { name: 'Boots', url: '/edits/Boots?type=ITEM' },
      { name: 'Ballet flats', url: '/edits/Ballet+flats?type=ITEM' },
      { name: 'Loafers', url: '/edits/Loafers?type=ITEM' },
      { name: 'Mules', url: '/edits/Mules?type=ITEM' },
      { name: 'Sandals', url: '/edits/Sandals?type=ITEM' },
      { name: 'Sneakers', url: '/edits/Sneakers?type=ITEM' },
    ],
    mostWanted: [
      { name: 'The Capsule Closet', url: '/edits/the+capsule+closet?type=ITEM' },
      { name: 'Quiet Luxury Staples', url: '/edits/quiet+luxury+staples?type=ITEM' },
      { name: 'Denim on Denim', url: '/edits/denim+on+denim?type=ITEM' },
      { name: 'Resort Essentials', url: '/edits/resort+essentials?type=ITEM' },
      { name: 'Sporty Luxe', url: '/edits/sporty+luxe?type=ITEM' },
      { name: 'Office Attire', url: '/edits/office+attire?type=ITEM' },
    ],
    featured: [
      { name: 'Resort Essentials', url: '/edits/resort+essentials', image: 'https://plush-web-app.s3.us-west-1.amazonaws.com/edits/resort+essentials.webp' },
      { name: 'Office Attire', url: '/edits/office+attire', image: 'https://plush-web-app.s3.us-west-1.amazonaws.com/edits/office+attire.webp' },
    ]
  };

  // Edits dropdown structure matching plush.shop
  const editsData = {
    occasional: [
      { name: 'Best Dressed Guest', url: '/edits/wedding+guest+dresses+that+feel+chic%2C+elevated+and+timeless?type=ITEM' },
      { name: 'Euro Summer', url: '/edits/chic+dresses+for+euro+summer?type=ITEM' },
      { name: 'Nuptials by the Beach', url: '/edits/wedding+guest+dress+for+a+formal+beach+wedding?type=ITEM' },
      { name: 'The Bride', url: '/edits/bridal+dresses?type=ITEM' },
      { name: 'Spring in Paris', url: "/edits/outfit+I'd+wear+in+spring+in+Paris?type=ITEM" },
      { name: 'Gala Chic', url: '/edits/chic+gowns+for+a+gala+in+the+city?type=ITEM' },
    ],
    trending: [
      { name: 'Après-Ski Mode', url: '/edits/apres+ski+mode?type=ITEM' },
      { name: 'Butter Yellow', url: '/edits/butter+yellow+pieces?type=ITEM' },
      { name: 'Easter Elegance', url: '/edits/dresses+or+tops+for+easter?type=ITEM' },
      { name: 'Desert Darling', url: '/edits/dresses+to+wear+for+a+desert-themed+party?type=ITEM' },
      { name: 'The Festival Edit', url: '/edits/outfits+for+festivals?type=ITEM' },
      { name: 'After Dark Vibes', url: '/edits/elegant+dresses+for+a+night+out?type=ITEM' },
    ],
    mostWanted: [
      { name: 'The Capsule Closet', url: '/edits/the+capsule+closet?type=ITEM' },
      { name: 'Quiet Luxury Staples', url: '/edits/quiet+luxury+staples?type=ITEM' },
      { name: 'Denim on Denim', url: '/edits/denim+on+denim?type=ITEM' },
      { name: 'Resort Essentials', url: '/edits/resort+essentials?type=ITEM' },
      { name: 'Sporty Luxe', url: '/edits/sporty+luxe?type=ITEM' },
      { name: 'Office Attire', url: '/edits/office+attire?type=ITEM' },
    ],
    featured: [
      { name: 'Best Dressed Guest', url: '/edits/wedding+guest+dresses+that+feel+chic%2C+elevated+and+timeless', image: 'https://plush-web-app.s3.us-west-1.amazonaws.com/edits/best+dressed+guest.webp' },
      { name: 'Butter Yellow', url: '/edits/butter+yellow+pieces', image: 'https://plush-web-app.s3.us-west-1.amazonaws.com/edits/butter+yellow.webp' },
    ]
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-2xl font-serif font-semibold tracking-tight">
              Plush
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
                onClick={() => setActiveMenu(activeMenu === 'categories' ? null : 'categories')}
              >
                Categories
              </button>
              <button 
                className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
                onClick={() => setActiveMenu(activeMenu === 'edits' ? null : 'edits')}
              >
                Edits
              </button>
              <Link href="/brands" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                Brands
              </Link>
              <Link href="/blogs" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                Blog
              </Link>
            </div>

            {/* Sign In & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                Sign In
              </button>
              <button 
                className="md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Fullscreen Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <Link href="/" className="text-2xl font-serif font-semibold" onClick={() => setMenuOpen(false)}>
                Plush
              </Link>
              <button onClick={() => setMenuOpen(false)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-6">
                <div>
                  <button 
                    className="text-xl font-serif font-semibold mb-3"
                    onClick={() => setActiveMenu(activeMenu === 'categories-mobile' ? null : 'categories-mobile')}
                  >
                    Categories
                  </button>
                  {activeMenu === 'categories-mobile' && (
                    <div className="pl-4 space-y-4">
                      <div>
                        <p className="text-xs font-semibold text-gray-500 mb-2">CLOTHING</p>
                        {categoriesData.clothing.map((item, i) => (
                          <Link key={i} href={item.url} className="block text-gray-600 py-1" onClick={() => setMenuOpen(false)}>
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 mb-2">SHOES</p>
                        {categoriesData.shoes.map((item, i) => (
                          <Link key={i} href={item.url} className="block text-gray-600 py-1" onClick={() => setMenuOpen(false)}>
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 mb-2">MOST WANTED</p>
                        {categoriesData.mostWanted.map((item, i) => (
                          <Link key={i} href={item.url} className="block text-gray-600 py-1" onClick={() => setMenuOpen(false)}>
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <button 
                    className="text-xl font-serif font-semibold mb-3"
                    onClick={() => setActiveMenu(activeMenu === 'edits-mobile' ? null : 'edits-mobile')}
                  >
                    Edits
                  </button>
                  {activeMenu === 'edits-mobile' && (
                    <div className="pl-4 space-y-4">
                      <div>
                        <p className="text-xs font-semibold text-gray-500 mb-2">OCCASIONAL EDITS</p>
                        {editsData.occasional.map((item, i) => (
                          <Link key={i} href={item.url} className="block text-gray-600 py-1" onClick={() => setMenuOpen(false)}>
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 mb-2">TRENDING</p>
                        {editsData.trending.map((item, i) => (
                          <Link key={i} href={item.url} className="block text-gray-600 py-1" onClick={() => setMenuOpen(false)}>
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 mb-2">MOST WANTED</p>
                        {editsData.mostWanted.map((item, i) => (
                          <Link key={i} href={item.url} className="block text-gray-600 py-1" onClick={() => setMenuOpen(false)}>
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Link href="/brands" className="block text-xl font-serif font-semibold" onClick={() => setMenuOpen(false)}>
                  Brands
                </Link>

                <Link href="/blogs" className="block text-xl font-serif font-semibold" onClick={() => setMenuOpen(false)}>
                  Blog
                </Link>
              </div>

              {/* Bottom Links */}
              <div className="mt-12 space-y-4">
                <Link href="/" className="flex items-center gap-2 text-gray-600" onClick={() => setMenuOpen(false)}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                </Link>
                <Link href="/about" className="flex items-center gap-2 text-gray-600" onClick={() => setMenuOpen(false)}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  About
                </Link>
                <Link href="/contact" className="flex items-center gap-2 text-gray-600" onClick={() => setMenuOpen(false)}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact
                </Link>
                <Link href="/faq" className="flex items-center gap-2 text-gray-600" onClick={() => setMenuOpen(false)}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  FAQs
                </Link>
              </div>

              {/* Social Links */}
              <div className="mt-8 flex gap-4">
                <Link href="https://www.instagram.com/_plushshopping/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
                </Link>
                <Link href="https://www.tiktok.com/@_plushshopping" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  <Image src="/icons/tiktok.svg" alt="TikTok" width={24} height={24} />
                </Link>
                <Link href="https://www.linkedin.com/company/plushshopping/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
                </Link>
              </div>

              {/* Sign In Button */}
              <button className="mt-6 w-full py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                Sign in
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Dropdown Menus */}
      {activeMenu === 'categories' && (
        <div className="fixed inset-x-0 top-16 z-40 bg-white border-b border-gray-100 shadow-lg">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex gap-12">
              {/* Left section with 3 columns */}
              <div className="flex-1 grid grid-cols-3 gap-8">
                {/* Clothing Column */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">Clothing</h3>
                  <ul className="space-y-3">
                    {categoriesData.clothing.map((item, i) => (
                      <li key={i}>
                        <Link
                          href={item.url}
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          onClick={() => setActiveMenu(null)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Shoes Column */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">Shoes</h3>
                  <ul className="space-y-3">
                    {categoriesData.shoes.map((item, i) => (
                      <li key={i}>
                        <Link
                          href={item.url}
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          onClick={() => setActiveMenu(null)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Most Wanted Column */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">Most Wanted</h3>
                  <ul className="space-y-3">
                    {categoriesData.mostWanted.map((item, i) => (
                      <li key={i}>
                        <Link
                          href={item.url}
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          onClick={() => setActiveMenu(null)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right section with featured images */}
              <div className="flex gap-4">
                {categoriesData.featured.map((item, i) => (
                  <Link
                    key={i}
                    href={item.url}
                    className="group block"
                    onClick={() => setActiveMenu(null)}
                  >
                    <div className="relative w-32 h-48 rounded-lg overflow-hidden mb-2">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="128px"
                      />
                    </div>
                    <p className="text-xs text-center text-gray-700 group-hover:text-gray-900">
                      {item.name}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeMenu === 'edits' && (
        <div className="fixed inset-x-0 top-16 z-40 bg-white border-b border-gray-100 shadow-lg">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex gap-12">
              {/* Left section with 3 columns */}
              <div className="flex-1 grid grid-cols-3 gap-8">
                {/* Occasional Edits Column */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">Occasional Edits</h3>
                  <ul className="space-y-3">
                    {editsData.occasional.map((item, i) => (
                      <li key={i}>
                        <Link
                          href={item.url}
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          onClick={() => setActiveMenu(null)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Trending Column */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">Trending</h3>
                  <ul className="space-y-3">
                    {editsData.trending.map((item, i) => (
                      <li key={i}>
                        <Link
                          href={item.url}
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          onClick={() => setActiveMenu(null)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Most Wanted Column */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">Most Wanted</h3>
                  <ul className="space-y-3">
                    {editsData.mostWanted.map((item, i) => (
                      <li key={i}>
                        <Link
                          href={item.url}
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          onClick={() => setActiveMenu(null)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right section with featured images */}
              <div className="flex gap-4">
                {editsData.featured.map((item, i) => (
                  <Link
                    key={i}
                    href={item.url}
                    className="group block"
                    onClick={() => setActiveMenu(null)}
                  >
                    <div className="relative w-32 h-48 rounded-lg overflow-hidden mb-2">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="128px"
                      />
                    </div>
                    <p className="text-xs text-center text-gray-700 group-hover:text-gray-900">
                      {item.name}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Overlay to close menus */}
      {activeMenu && (
        <div 
          className="fixed inset-0 z-30 bg-black/20"
          onClick={() => setActiveMenu(null)}
        />
      )}
    </>
  );
}
