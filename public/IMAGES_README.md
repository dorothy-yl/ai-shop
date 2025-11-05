# Images Directory

This directory contains all the images used in the AI Shop project, sourced from [plush.shop](https://www.plush.shop/).

## Directory Structure

```
public/
├── home-card-*.webp          # Hero section cards (desktop, 8 images)
├── home-card-mobile-*.webp   # Hero section cards (mobile, 8 images)
├── banner-desktop.webp       # Main banner (desktop)
├── banner-mobile.webp        # Main banner (mobile)
├── cta-bg-desktop.png        # CTA background (desktop)
├── cta-bg-mobile.png         # CTA background (mobile)
├── try-search-*.jpg          # Try searching example images (8 images)
├── popular-*.jpg             # Popular searches example images (8 images)
├── blog-*.jpg                # Blog post featured images (4 images)
├── brands/                   # Brand logos and images
│   ├── *.svg                 # Brand logos (20 brands)
│   └── *.jpg/png             # Brand photos (20 brands)
└── icons/                    # Social media and UI icons
    ├── ins-white.svg         # Instagram icon
    ├── tiktok-white.svg      # TikTok icon
    ├── linkedin-white.svg    # LinkedIn icon
    ├── icon-x.svg            # X (Twitter) icon
    └── pink-cloud.svg        # Decorative icon
```

## Image Categories

### Hero Section Cards
- **Desktop**: `home-card-1.webp` to `home-card-8.webp`
- **Mobile**: `home-card-mobile-1.webp` to `home-card-mobile-8.webp`
- Format: WebP
- Usage: Main hero section showcasing different fashion styles

### Banners
- `banner-desktop.webp` - Main homepage banner (desktop)
- `banner-mobile.webp` - Main homepage banner (mobile)
- `cta-bg-desktop.png` - Call-to-action section background (desktop)
- `cta-bg-mobile.png` - Call-to-action section background (mobile)

### Example Images
- **Try Searching**: `try-search-1.jpg` to `try-search-8.jpg`
  - Sample product images for the "Try searching" section
  - Sourced from: Net-a-Porter, TheOutnet, Shopbop, Mytheresa

- **Popular Searches**: `popular-1.jpg` to `popular-8.jpg`
  - Sample product images for the "Popular searches" section
  - Sourced from: Net-a-Porter, TheOutnet, Mytheresa

### Blog Images
- `blog-1.jpg` to `blog-4.jpg`
- Featured images for blog posts
- Sourced from: Azure Blob Storage (plush.blob.core.windows.net)

### Brands
20 luxury fashion brands with both logo (SVG) and photo (JPG/PNG):

1. TOTEME
2. Dôen
3. Zimmermann
4. A.L.C.
5. Oscar de la Renta
6. Self-Portrait
7. Magda Butrym
8. Erdem
9. Giambattista Valli
10. TOVE
11. Missoni
12. La DoubleJ
13. Alaïa
14. Jacquemus
15. Solace London
16. Ulla Johnson
17. FARM Rio
18. SIR.
19. Acne Studios
20. GANNI

## Usage in Code

All images are configured in `src/lib/images.ts` for easy import and usage:

```typescript
import { homeCards, brands, socialIcons } from '@/lib/images';

// Use home cards
<Image src={homeCards[0]} alt="Fashion card" />

// Use brand data
{brands.map(brand => (
  <Image src={brand.logo} alt={brand.name} />
))}

// Use social icons
<Image src={socialIcons.instagram} alt="Instagram" />
```

## Image Sources

All images were downloaded from [plush.shop](https://www.plush.shop/) using the download script located at `scripts/download-images.js`.

To re-download or update images:
```bash
node scripts/download-images.js
```

## Image Formats

- **WebP**: Used for hero cards and banners (better compression)
- **JPG**: Used for product examples and blog images
- **PNG**: Used for some brand images and backgrounds
- **SVG**: Used for logos and icons (scalable vector graphics)

## License

These images are sourced from plush.shop and their respective brands. All rights belong to their original owners. This project is for educational and demonstration purposes only.


