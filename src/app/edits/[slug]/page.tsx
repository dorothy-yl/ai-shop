'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';

// Sample product data - in real app, this would come from API
const sampleProducts = [
  {
    id: 1,
    name: 'Silk Maxi Dress',
    brand: 'TOTEME',
    price: 890,
    originalPrice: null,
    image: 'https://plush-web-app.s3.us-west-1.amazonaws.com/home-page-cards/home-card-0.webp',
    colors: ['Black', 'Cream'],
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 2,
    name: 'Linen Blend Midi Dress',
    brand: 'DÔEN',
    price: 428,
    originalPrice: 535,
    image: 'https://plush-web-app.s3.us-west-1.amazonaws.com/home-page-cards/home-card-1.webp',
    colors: ['White', 'Blue'],
    sizes: ['XS', 'S', 'M'],
  },
  {
    id: 3,
    name: 'Pleated Chiffon Dress',
    brand: 'Zimmermann',
    price: 1250,
    originalPrice: null,
    image: 'https://plush-web-app.s3.us-west-1.amazonaws.com/home-page-cards/home-card-2.webp',
    colors: ['Floral'],
    sizes: ['S', 'M', 'L'],
  },
  {
    id: 4,
    name: 'Cotton Poplin Dress',
    brand: 'A.L.C.',
    price: 395,
    originalPrice: null,
    image: 'https://plush-web-app.s3.us-west-1.amazonaws.com/home-page-cards/home-card-3.webp',
    colors: ['White', 'Black'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 5,
    name: 'Satin Slip Dress',
    brand: 'GANNI',
    price: 325,
    originalPrice: 450,
    image: 'https://plush-web-app.s3.us-west-1.amazonaws.com/home-page-cards/home-card-4.webp',
    colors: ['Burgundy', 'Navy'],
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: 6,
    name: 'Wool Blazer Dress',
    brand: 'Acne Studios',
    price: 680,
    originalPrice: null,
    image: 'https://plush-web-app.s3.us-west-1.amazonaws.com/home-page-cards/home-card-5.webp',
    colors: ['Grey', 'Black'],
    sizes: ['S', 'M', 'L'],
  },
  {
    id: 7,
    name: 'Embroidered Maxi Dress',
    brand: 'Ulla Johnson',
    price: 795,
    originalPrice: null,
    image: 'https://plush-web-app.s3.us-west-1.amazonaws.com/home-page-cards/home-card-6.webp',
    colors: ['Multi'],
    sizes: ['XS', 'S', 'M'],
  },
  {
    id: 8,
    name: 'Knit Midi Dress',
    brand: 'TOTEME',
    price: 520,
    originalPrice: null,
    image: 'https://plush-web-app.s3.us-west-1.amazonaws.com/home-page-cards/home-card-7.webp',
    colors: ['Camel', 'Black'],
    sizes: ['XS', 'S', 'M', 'L'],
  },
];

export default function EditsPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const slug = params.slug as string;
  const type = searchParams.get('type');
  
  const [showFilters, setShowFilters] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('recommended');

  // Decode the slug to get the readable title
  const title = decodeURIComponent(slug.replace(/\+/g, ' '));

  const brands = ['TOTEME', 'DÔEN', 'Zimmermann', 'A.L.C.', 'GANNI', 'Acne Studios', 'Ulla Johnson'];
  const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with title and filters */}
      <div className="border-b border-gray-200 bg-white sticky top-16 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl sm:text-3xl font-serif font-semibold">{title}</h1>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <span className="text-sm font-medium">Filters</span>
            </button>
          </div>

          {/* Results count and sort */}
          <div className="flex items-center justify-between text-sm">
            <p className="text-gray-600">{sampleProducts.length} results</p>
            <div className="flex items-center gap-2">
              <label className="text-gray-600">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
              >
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="border-t border-gray-200 bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Brand Filter */}
                <div>
                  <h3 className="text-sm font-semibold mb-3">Brand</h3>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {brands.map((brand) => (
                      <label key={brand} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => toggleBrand(brand)}
                          className="rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                        />
                        <span className="text-sm text-gray-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Size Filter */}
                <div>
                  <h3 className="text-sm font-semibold mb-3">Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => toggleSize(size)}
                        className={`px-4 py-2 text-sm border rounded-lg transition-colors ${
                          selectedSizes.includes(size)
                            ? 'bg-gray-900 text-white border-gray-900'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div>
                  <h3 className="text-sm font-semibold mb-3">Price Range</h3>
                  <div className="space-y-3">
                    <input
                      type="range"
                      min="0"
                      max="2000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedBrands.length > 0 || selectedSizes.length > 0) && (
                <button
                  onClick={() => {
                    setSelectedBrands([]);
                    setSelectedSizes([]);
                    setPriceRange([0, 2000]);
                  }}
                  className="mt-4 text-sm text-gray-600 hover:text-gray-900 underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Products Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sampleProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group"
            >
              {/* Product Image */}
              <div className="relative aspect-[3/4] mb-3 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {product.originalPrice && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    Sale
                  </div>
                )}
                {/* Quick View Button */}
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-full py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors">
                    Quick View
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-1">
                <p className="text-xs text-gray-500 uppercase tracking-wide">{product.brand}</p>
                <h3 className="text-sm font-medium text-gray-900 group-hover:underline">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-900">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                {/* Colors */}
                <div className="flex gap-1">
                  {product.colors.map((color, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 rounded-full border border-gray-300"
                      style={{ backgroundColor: color.toLowerCase() }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 border border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors font-medium">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}


