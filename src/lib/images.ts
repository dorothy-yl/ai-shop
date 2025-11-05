/**
 * Image paths configuration
 * All images are stored in the public folder and can be accessed directly via their path
 */

// Hero section cards (desktop)
export const homeCards = [
  '/home-card-1.webp',
  '/home-card-2.webp',
  '/home-card-3.webp',
  '/home-card-4.webp',
  '/home-card-5.webp',
  '/home-card-6.webp',
  '/home-card-7.webp',
  '/home-card-8.webp',
] as const;

// Hero section cards (mobile)
export const homeCardsMobile = [
  '/home-card-mobile-1.webp',
  '/home-card-mobile-2.webp',
  '/home-card-mobile-3.webp',
  '/home-card-mobile-4.webp',
  '/home-card-mobile-5.webp',
  '/home-card-mobile-6.webp',
  '/home-card-mobile-7.webp',
  '/home-card-mobile-8.webp',
] as const;

// Banner images
export const banners = {
  desktop: '/banner-desktop.webp',
  mobile: '/banner-mobile.webp',
  ctaDesktop: '/cta-bg-desktop.png',
  ctaMobile: '/cta-bg-mobile.png',
} as const;

// Try searching example images
export const trySearchImages = [
  '/try-search-1.jpg',
  '/try-search-2.jpg',
  '/try-search-3.jpg',
  '/try-search-4.jpg',
  '/try-search-5.jpg',
  '/try-search-6.jpg',
  '/try-search-7.jpg',
  '/try-search-8.jpg',
] as const;

// Popular searches example images
export const popularSearchImages = [
  '/popular-1.jpg',
  '/popular-2.jpg',
  '/popular-3.jpg',
  '/popular-4.jpg',
  '/popular-5.jpg',
  '/popular-6.jpg',
  '/popular-7.jpg',
  '/popular-8.jpg',
] as const;

// Blog images
export const blogImages = [
  '/blog-1.jpg',
  '/blog-2.jpg',
  '/blog-3.jpg',
  '/blog-4.jpg',
] as const;

// Brand logos (SVG)
export const brandLogos = {
  toteme: '/brands/toteme.svg',
  doen: '/brands/doen.svg',
  zimmermann: '/brands/zimmermann.svg',
  alc: '/brands/alc.svg',
  oscarDeLaRenta: '/brands/oscar-de-la-renta.svg',
  selfPortrait: '/brands/self-portrait.svg',
  magdaButrym: '/brands/magda-butrym.svg',
  erdem: '/brands/erdem.svg',
  giambattistaValli: '/brands/giambattista-valli.svg',
  tove: '/brands/tove.svg',
  missoni: '/brands/missoni.svg',
  laDoublej: '/brands/la-doublej.svg',
  alaia: '/brands/alaia.svg',
  jacquemus: '/brands/jacquemus.svg',
  solaceLondon: '/brands/solace-london.svg',
  ullaJohnson: '/brands/ulla-johnson.svg',
  farmRio: '/brands/farm-rio.svg',
  sir: '/brands/sir.svg',
  acneStudios: '/brands/acne-studios.svg',
  ganni: '/brands/ganni.svg',
} as const;

// Brand images (photos)
export const brandImages = {
  toteme: '/brands/toteme.jpg',
  doen: '/brands/doen.png',
  zimmermann: '/brands/zimmermann.png',
  alc: '/brands/alc.jpg',
  oscarDeLaRenta: '/brands/oscar-de-la-renta.jpg',
  selfPortrait: '/brands/self-portrait.jpg',
  magdaButrym: '/brands/magda-butrym.jpg',
  erdem: '/brands/erdem.jpg',
  giambattistaValli: '/brands/giambattista-valli.png',
  tove: '/brands/tove.png',
  missoni: '/brands/missoni.png',
  laDoublej: '/brands/la-doublej.jpg',
  alaia: '/brands/alaia.png',
  jacquemus: '/brands/jacquemus.jpg',
  solaceLondon: '/brands/solace-london.png',
  ullaJohnson: '/brands/ulla-johnson.png',
  farmRio: '/brands/farm-rio.png',
  sir: '/brands/sir.png',
  acneStudios: '/brands/acne-studios.png',
  ganni: '/brands/ganni.png',
} as const;

// Social media icons
export const socialIcons = {
  instagram: '/icons/ins-white.svg',
  tiktok: '/icons/tiktok-white.svg',
  linkedin: '/icons/linkedin-white.svg',
  x: '/icons/icon-x.svg',
} as const;

// Other icons
export const icons = {
  pinkCloud: '/icons/pink-cloud.svg',
} as const;

// Combined brand data
export const brands = [
  { name: 'TOTEME', logo: brandLogos.toteme, image: brandImages.toteme },
  { name: 'Dôen', logo: brandLogos.doen, image: brandImages.doen },
  { name: 'Zimmermann', logo: brandLogos.zimmermann, image: brandImages.zimmermann },
  { name: 'A.L.C.', logo: brandLogos.alc, image: brandImages.alc },
  { name: 'Oscar de la Renta', logo: brandLogos.oscarDeLaRenta, image: brandImages.oscarDeLaRenta },
  { name: 'Self-Portrait', logo: brandLogos.selfPortrait, image: brandImages.selfPortrait },
  { name: 'Magda Butrym', logo: brandLogos.magdaButrym, image: brandImages.magdaButrym },
  { name: 'Erdem', logo: brandLogos.erdem, image: brandImages.erdem },
  { name: 'Giambattista Valli', logo: brandLogos.giambattistaValli, image: brandImages.giambattistaValli },
  { name: 'TOVE', logo: brandLogos.tove, image: brandImages.tove },
  { name: 'Missoni', logo: brandLogos.missoni, image: brandImages.missoni },
  { name: 'La DoubleJ', logo: brandLogos.laDoublej, image: brandImages.laDoublej },
  { name: 'Alaïa', logo: brandLogos.alaia, image: brandImages.alaia },
  { name: 'Jacquemus', logo: brandLogos.jacquemus, image: brandImages.jacquemus },
  { name: 'Solace London', logo: brandLogos.solaceLondon, image: brandImages.solaceLondon },
  { name: 'Ulla Johnson', logo: brandLogos.ullaJohnson, image: brandImages.ullaJohnson },
  { name: 'FARM Rio', logo: brandLogos.farmRio, image: brandImages.farmRio },
  { name: 'SIR.', logo: brandLogos.sir, image: brandImages.sir },
  { name: 'Acne Studios', logo: brandLogos.acneStudios, image: brandImages.acneStudios },
  { name: 'GANNI', logo: brandLogos.ganni, image: brandImages.ganni },
] as const;


