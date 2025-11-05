#!/usr/bin/env python3
"""
Image downloader script for Plush.shop
Downloads all images from the website and saves them to the public folder
"""

import os
import requests
from urllib.parse import urlparse, unquote
import time
from pathlib import Path

# 设置请求头，模拟浏览器
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9',
    'Referer': 'https://www.plush.shop/',
}

# 定义需要下载的图片列表
IMAGES_TO_DOWNLOAD = [
    # Home cards (desktop)
    {
        'url': 'https://www.plush.shop/_next/static/media/home-card-1.deca4393.webp',
        'filename': 'home-card-1.webp'
    },
    {
        'url': 'https://www.plush.shop/_next/static/media/home-card-2.ac6d83a8.webp',
        'filename': 'home-card-2.webp'
    },
    {
        'url': 'https://www.plush.shop/_next/static/media/home-card-3.519fc148.webp',
        'filename': 'home-card-3.webp'
    },
    {
        'url': 'https://www.plush.shop/_next/static/media/home-card-4.8e469b90.webp',
        'filename': 'home-card-4.webp'
    },
    {
        'url': 'https://www.plush.shop/_next/static/media/home-card-5.253c41ba.webp',
        'filename': 'home-card-5.webp'
    },
    {
        'url': 'https://www.plush.shop/_next/static/media/home-card-6.2324d111.webp',
        'filename': 'home-card-6.webp'
    },
    {
        'url': 'https://www.plush.shop/_next/static/media/home-card-7.8b40e88c.webp',
        'filename': 'home-card-7.webp'
    },
    {
        'url': 'https://www.plush.shop/_next/static/media/home-card-8.294bae94.webp',
        'filename': 'home-card-8.webp'
    },
    # Home cards (mobile)
    {
        'url': 'https://www.plush.shop/_next/static/media/home-card-mobile-1.d5024ea9.webp',
        'filename': 'home-card-mobile-1.webp'
    },
    {
        'url': 'https://www.plush.shop/_next/static/media/home-card-mobile-2.e8781ee8.webp',
        'filename': 'home-card-mobile-2.webp'
    },
    {
        'url': 'https://www.plush.shop/_next/static/media/home-card-mobile-3.6257ad17.webp',
        'filename': 'home-card-mobile-3.webp'
    },
    {
        'url': 'https://www.plush.shop/_next/static/media/home-card-mobile-4.3b423641.webp',
        'filename': 'home-card-mobile-4.webp'
    },
    {
        'url': 'https://www.plush.shop/_next/static/media/home-card-mobile-5.8f573e9d.webp',
        'filename': 'home-card-mobile-5.webp'
    },
    {
        'url': 'https://www.plush.shop/_next/static/media/home-card-mobile-6.9b1434a7.webp',
        'filename': 'home-card-mobile-6.webp'
    },
    {
        'url': 'https://www.plush.shop/_next/static/media/home-card-mobile-7.c8b49966.webp',
        'filename': 'home-card-mobile-7.webp'
    },
    {
        'url': 'https://www.plush.shop/_next/static/media/home-card-mobile-8.8e06c0ce.webp',
        'filename': 'home-card-mobile-8.webp'
    },
    # Banner images
    {
        'url': 'https://www.plush.shop/homepage-banner-2-desktop.webp',
        'filename': 'banner-desktop.webp'
    },
    {
        'url': 'https://www.plush.shop/homepage-banner-2-mobile.webp',
        'filename': 'banner-mobile.webp'
    },
    {
        'url': 'https://www.plush.shop/banner-bg-web.png',
        'filename': 'cta-bg-desktop.png'
    },
    {
        'url': 'https://www.plush.shop/banner-bg-mobile.png',
        'filename': 'cta-bg-mobile.png'
    },
    # Icons
    {
        'url': 'https://www.plush.shop/icon-x.svg',
        'filename': 'icons/icon-x.svg'
    },
    {
        'url': 'https://www.plush.shop/ins-white.svg',
        'filename': 'icons/ins-white.svg'
    },
    {
        'url': 'https://www.plush.shop/tiktok-white.svg',
        'filename': 'icons/tiktok-white.svg'
    },
    {
        'url': 'https://www.plush.shop/linkedin-white.svg',
        'filename': 'icons/linkedin-white.svg'
    },
    {
        'url': 'https://www.plush.shop/pink-cloud.svg',
        'filename': 'icons/pink-cloud.svg'
    },
]

# Try searching 示例图片 (外部链接的产品图片)
TRY_SEARCH_IMAGES = [
    {
        'url': 'https://www.net-a-porter.com/variants/images/1647597337733814/ou/w2000.jpg',
        'filename': 'try-search-1.jpg'
    },
    {
        'url': 'https://www.theoutnet.com/variants/images/46376663162923797/R/w2000.jpg',
        'filename': 'try-search-2.jpg'
    },
    {
        'url': 'https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/lione/lione305781004d/lione305781004d_1738341056154_2-0.jpg',
        'filename': 'try-search-3.jpg'
    },
    {
        'url': 'https://www.net-a-porter.com/variants/images/1647597333559819/ou/w2000.jpg',
        'filename': 'try-search-4.jpg'
    },
    {
        'url': 'https://img.mytheresa.com/2310/2610/100/jpeg/catalog/product/bf/P00552955_b1.jpg',
        'filename': 'try-search-5.jpg'
    },
    {
        'url': 'https://img.mytheresa.com/2310/2610/100/jpeg/catalog/product/4b/P00888396_b1.jpg',
        'filename': 'try-search-6.jpg'
    },
    {
        'url': 'https://www.theoutnet.com/variants/images/46376663162913752/F/w2000.jpg',
        'filename': 'try-search-7.jpg'
    },
    {
        'url': 'https://img.mytheresa.com/2310/2610/100/jpeg/catalog/product/97/P01062404_b1.jpg',
        'filename': 'try-search-8.jpg'
    },
]

# Popular searches 示例图片
POPULAR_SEARCH_IMAGES = [
    {
        'url': 'https://www.net-a-porter.com/variants/images/1647597354366541/ou/w2000.jpg',
        'filename': 'popular-1.jpg'
    },
    {
        'url': 'https://www.net-a-porter.com/variants/images/1647597338669875/ou/w2000.jpg',
        'filename': 'popular-2.jpg'
    },
    {
        'url': 'https://www.net-a-porter.com/variants/images/1647597352507482/fr/w2000.jpg',
        'filename': 'popular-3.jpg'
    },
    {
        'url': 'https://www.theoutnet.com/variants/images/1647597351664435/F/w2000.jpg',
        'filename': 'popular-4.jpg'
    },
    {
        'url': 'https://img.mytheresa.com/2310/2610/100/jpeg/catalog/product/17/P01041713_b1.jpg',
        'filename': 'popular-5.jpg'
    },
    {
        'url': 'https://www.net-a-porter.com/variants/images/1647597347746245/ou/w2000.jpg',
        'filename': 'popular-6.jpg'
    },
    {
        'url': 'https://www.net-a-porter.com/variants/images/1647597342544309/fr/w2000.jpg',
        'filename': 'popular-7.jpg'
    },
    {
        'url': 'https://www.net-a-porter.com/variants/images/1647597332650457/fr/w2000.jpg',
        'filename': 'popular-8.jpg'
    },
]

# Blog 图片 (来自 Azure Blob Storage)
BLOG_IMAGES = [
    {
        'url': 'https://plush.blob.core.windows.net/blog/2025-ai-dressing-trends/plush-blog8-1.jpg',
        'filename': 'blog-1.jpg'
    },
    {
        'url': 'https://plush.blob.core.windows.net/blog/2025-ai-curated-heel-picks/plush-blog7-1.jpg',
        'filename': 'blog-2.jpg'
    },
    {
        'url': 'https://plush.blob.core.windows.net/blog/2025-night-out-ai-party-dresses/plush-blog6-1.jpg',
        'filename': 'blog-3.jpg'
    },
    {
        'url': 'https://plush.blob.core.windows.net/blog/2025-find-your-style-with-ai/plush-blog5-1.jpg',
        'filename': 'blog-4.jpg'
    },
]

# Brand logos
BRAND_LOGOS = [
    {'url': 'https://www.plush.shop/brand-logos/Toteme.svg', 'filename': 'brands/toteme.svg'},
    {'url': 'https://www.plush.shop/brand-logos/Doen.svg', 'filename': 'brands/doen.svg'},
    {'url': 'https://www.plush.shop/brand-logos/ZIMMERMANN.svg', 'filename': 'brands/zimmermann.svg'},
    {'url': 'https://www.plush.shop/brand-logos/A.L.C..svg', 'filename': 'brands/alc.svg'},
    {'url': 'https://www.plush.shop/brand-logos/Oscar%20de%20la%20Renta.svg', 'filename': 'brands/oscar-de-la-renta.svg'},
    {'url': 'https://www.plush.shop/brand-logos/Self-Portrait.svg', 'filename': 'brands/self-portrait.svg'},
    {'url': 'https://www.plush.shop/brand-logos/MAGDA%20BUTRYM.svg', 'filename': 'brands/magda-butrym.svg'},
    {'url': 'https://www.plush.shop/brand-logos/ERDEM.svg', 'filename': 'brands/erdem.svg'},
    {'url': 'https://www.plush.shop/brand-logos/Giambattista%20Valli.svg', 'filename': 'brands/giambattista-valli.svg'},
    {'url': 'https://www.plush.shop/brand-logos/TOVE.svg', 'filename': 'brands/tove.svg'},
    {'url': 'https://www.plush.shop/brand-logos/missoni.svg', 'filename': 'brands/missoni.svg'},
    {'url': 'https://www.plush.shop/brand-logos/La%20DoubleJ.svg', 'filename': 'brands/la-doublej.svg'},
    {'url': 'https://www.plush.shop/brand-logos/Alaia.svg', 'filename': 'brands/alaia.svg'},
    {'url': 'https://www.plush.shop/brand-logos/Jacquemus.svg', 'filename': 'brands/jacquemus.svg'},
    {'url': 'https://www.plush.shop/brand-logos/Solace%20London.svg', 'filename': 'brands/solace-london.svg'},
    {'url': 'https://www.plush.shop/brand-logos/Ulla%20Johnson.svg', 'filename': 'brands/ulla-johnson.svg'},
    {'url': 'https://www.plush.shop/brand-logos/FARM%20Rio.svg', 'filename': 'brands/farm-rio.svg'},
    {'url': 'https://www.plush.shop/brand-logos/Sir..svg', 'filename': 'brands/sir.svg'},
    {'url': 'https://www.plush.shop/brand-logos/Acne%20studios.svg', 'filename': 'brands/acne-studios.svg'},
    {'url': 'https://www.plush.shop/brand-logos/Ganni.svg', 'filename': 'brands/ganni.svg'},
]

# Brand images
BRAND_IMAGES = [
    {'url': 'https://plush.blob.core.windows.net/merchandising/brands/toteme.jpg', 'filename': 'brands/toteme.jpg'},
    {'url': 'https://plush.blob.core.windows.net/merchandising/brands/doen.png', 'filename': 'brands/doen.png'},
    {'url': 'https://plush.blob.core.windows.net/merchandising/brands/zimmermann.png', 'filename': 'brands/zimmermann.png'},
    {'url': 'https://plush.blob.core.windows.net/merchandising/brands/alc.jpg', 'filename': 'brands/alc.jpg'},
    {'url': 'https://plush.blob.core.windows.net/merchandising/brands/oscar-de-la-renta.jpg', 'filename': 'brands/oscar-de-la-renta.jpg'},
    {'url': 'https://plush.blob.core.windows.net/merchandising/brands/self-portrait.jpg', 'filename': 'brands/self-portrait.jpg'},
    {'url': 'https://plush.blob.core.windows.net/merchandising/brands/magda-butrym.jpg', 'filename': 'brands/magda-butrym.jpg'},
    {'url': 'https://plush.blob.core.windows.net/merchandising/brands/erdem.jpg', 'filename': 'brands/erdem.jpg'},
    {'url': 'https://plush.blob.core.windows.net/merchandising/brands/giambattista-valli.png', 'filename': 'brands/giambattista-valli.png'},
    {'url': 'https://plush.blob.core.windows.net/merchandising/brands/tove.png', 'filename': 'brands/tove.png'},
    {'url': 'https://plush.blob.core.windows.net/merchandising/brands/missoni.png', 'filename': 'brands/missoni.png'},
    {'url': 'https://plush.blob.core.windows.net/merchandising/brands/la-doublej.jpg', 'filename': 'brands/la-doublej.jpg'},
    {'url': 'https://plush.blob.core.windows.net/merchandising/brands/alaia.png', 'filename': 'brands/alaia.png'},
    {'url': 'https://plush.blob.core.windows.net/merchandising/brands/jacquemus.jpg', 'filename': 'brands/jacquemus.jpg'},
    {'url': 'https://plush.blob.core.windows.net/merchandising/brands/solace-london.png', 'filename': 'brands/solace-london.png'},
    {'url': 'https://plush.blob.core.windows.net/merchandising/brands/ulla-johnson.png', 'filename': 'brands/ulla-johnson.png'},
    {'url': 'https://plush.blob.core.windows.net/merchandising/brands/farm-rio.png', 'filename': 'brands/farm-rio.png'},
    {'url': 'https://plush.blob.core.windows.net/merchandising/brands/sir.png', 'filename': 'brands/sir.png'},
    {'url': 'https://plush.blob.core.windows.net/merchandising/brands/acne-studios.png', 'filename': 'brands/acne-studios.png'},
    {'url': 'https://plush.blob.core.windows.net/merchandising/brands/ganni.png', 'filename': 'brands/ganni.png'},
]


def download_image(url, save_path, retry=3):
    """下载单个图片"""
    try:
        print(f"Downloading: {url}")
        response = requests.get(url, headers=HEADERS, timeout=30)
        
        if response.status_code == 200:
            # 确保目录存在
            os.makedirs(os.path.dirname(save_path), exist_ok=True)
            
            with open(save_path, 'wb') as f:
                f.write(response.content)
            print(f"✓ Saved: {save_path}")
            return True
        else:
            print(f"✗ Failed: {url} (Status: {response.status_code})")
            if retry > 0:
                time.sleep(2)
                return download_image(url, save_path, retry - 1)
            return False
    except Exception as e:
        print(f"✗ Error downloading {url}: {str(e)}")
        if retry > 0:
            time.sleep(2)
            return download_image(url, save_path, retry - 1)
        return False


def main():
    """主函数"""
    # 获取项目根目录
    script_dir = Path(__file__).parent
    project_root = script_dir.parent
    public_dir = project_root / 'public'
    
    print(f"Project root: {project_root}")
    print(f"Public directory: {public_dir}")
    print("=" * 60)
    
    # 合并所有图片列表
    all_images = (
        IMAGES_TO_DOWNLOAD + 
        TRY_SEARCH_IMAGES + 
        POPULAR_SEARCH_IMAGES + 
        BLOG_IMAGES + 
        BRAND_LOGOS +
        BRAND_IMAGES
    )
    
    total = len(all_images)
    success = 0
    failed = 0
    
    for i, img in enumerate(all_images, 1):
        print(f"\n[{i}/{total}]")
        save_path = public_dir / img['filename']
        
        # 跳过已存在的文件
        if save_path.exists():
            print(f"⊘ Skipped (already exists): {save_path}")
            success += 1
            continue
        
        if download_image(img['url'], str(save_path)):
            success += 1
        else:
            failed += 1
        
        # 添加延迟，避免请求过快
        time.sleep(0.5)
    
    print("\n" + "=" * 60)
    print(f"Download complete!")
    print(f"Total: {total} | Success: {success} | Failed: {failed}")
    print("=" * 60)


if __name__ == '__main__':
    main()


