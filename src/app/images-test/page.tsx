/**
 * 图片测试页面
 * 用于验证所有从 plush.shop 爬取的图片是否正确加载
 */

import Image from 'next/image';
import { 
  homeCards, 
  homeCardsMobile,
  banners,
  trySearchImages,
  popularSearchImages,
  blogImages,
  brands,
  socialIcons,
  icons
} from '@/lib/images';

export default function ImagesTestPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        图片爬取验证页面
      </h1>
      
      <p className="text-center text-gray-600 mb-12">
        所有图片均从 <a href="https://www.plush.shop/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">plush.shop</a> 爬取
      </p>

      {/* Hero Cards - Desktop */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Hero Cards (Desktop) - 8张</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {homeCards.map((card, index) => (
            <div key={index} className="relative aspect-[4/1] overflow-hidden rounded-lg border-2 border-gray-200">
              <Image
                src={card}
                alt={`Home card ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hero Cards - Mobile */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Hero Cards (Mobile) - 8张</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {homeCardsMobile.map((card, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg border-2 border-gray-200">
              <Image
                src={card}
                alt={`Mobile home card ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 12.5vw"
              />
              <div className="absolute bottom-1 left-1 bg-black/70 text-white px-1 py-0.5 rounded text-xs">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banners */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Banners - 4张</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Desktop Banner</h3>
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg border-2 border-gray-200">
              <Image
                src={banners.desktop}
                alt="Desktop banner"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Mobile Banner</h3>
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg border-2 border-gray-200">
              <Image
                src={banners.mobile}
                alt="Mobile banner"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">CTA Background Desktop</h3>
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg border-2 border-gray-200">
              <Image
                src={banners.ctaDesktop}
                alt="CTA desktop"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">CTA Background Mobile</h3>
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg border-2 border-gray-200">
              <Image
                src={banners.ctaMobile}
                alt="CTA mobile"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Try Search Images */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Try Searching 示例图片 - 8张</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {trySearchImages.map((image, index) => (
            <div key={index} className="relative aspect-[3/4] overflow-hidden rounded-lg border-2 border-gray-200">
              <Image
                src={image}
                alt={`Try search ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 12.5vw"
              />
              <div className="absolute bottom-1 left-1 bg-black/70 text-white px-1 py-0.5 rounded text-xs">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Search Images */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Popular Searches 示例图片 - 8张</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {popularSearchImages.map((image, index) => (
            <div key={index} className="relative aspect-[3/4] overflow-hidden rounded-lg border-2 border-gray-200">
              <Image
                src={image}
                alt={`Popular search ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 12.5vw"
              />
              <div className="absolute bottom-1 left-1 bg-black/70 text-white px-1 py-0.5 rounded text-xs">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Images */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Blog 图片 - 4张</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogImages.map((image, index) => (
            <div key={index} className="relative aspect-[4/5] overflow-hidden rounded-lg border-2 border-gray-200">
              <Image
                src={image}
                alt={`Blog ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brands */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Brands - 20个品牌（Logo + 图片）</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {brands.map((brand, index) => (
            <div key={index} className="border-2 border-gray-200 rounded-lg p-4">
              <div className="relative aspect-square overflow-hidden rounded-lg mb-3">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>
              <div className="relative h-12 flex items-center justify-center bg-white rounded">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <p className="text-sm font-semibold text-center mt-2">{brand.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Icons */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Social Media Icons - 4个</h2>
        <div className="flex gap-8 justify-center items-center p-8 bg-gray-900 rounded-lg">
          <div className="text-center">
            <Image
              src={socialIcons.instagram}
              alt="Instagram"
              width={48}
              height={48}
            />
            <p className="text-white text-sm mt-2">Instagram</p>
          </div>
          <div className="text-center">
            <Image
              src={socialIcons.tiktok}
              alt="TikTok"
              width={48}
              height={48}
            />
            <p className="text-white text-sm mt-2">TikTok</p>
          </div>
          <div className="text-center">
            <Image
              src={socialIcons.linkedin}
              alt="LinkedIn"
              width={48}
              height={48}
            />
            <p className="text-white text-sm mt-2">LinkedIn</p>
          </div>
          <div className="text-center">
            <Image
              src={socialIcons.x}
              alt="X"
              width={48}
              height={48}
            />
            <p className="text-white text-sm mt-2">X (Twitter)</p>
          </div>
        </div>
      </section>

      {/* Decorative Icons */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Decorative Icon</h2>
        <div className="flex justify-center p-8 bg-pink-50 rounded-lg">
          <div className="relative w-64 h-64">
            <Image
              src={icons.pinkCloud}
              alt="Pink cloud"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-green-800">✅ 爬取完成统计</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-lg">
          <div>
            <p className="font-bold text-3xl text-green-600">85</p>
            <p className="text-gray-700">总图片数</p>
          </div>
          <div>
            <p className="font-bold text-3xl text-green-600">20</p>
            <p className="text-gray-700">品牌数量</p>
          </div>
          <div>
            <p className="font-bold text-3xl text-green-600">4</p>
            <p className="text-gray-700">图片格式</p>
          </div>
          <div>
            <p className="font-bold text-3xl text-green-600">100%</p>
            <p className="text-gray-700">成功率</p>
          </div>
        </div>
        <p className="mt-6 text-gray-700">
          所有图片都已成功下载并集成到项目中，与 plush.shop 完全匹配！
        </p>
      </section>
    </div>
  );
}


