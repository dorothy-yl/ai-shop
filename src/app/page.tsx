import HeroSection from '@/components/HeroSection';
import SearchCarousel from '@/components/SearchCarousel';
import CTABanner from '@/components/CTABanner';
import HowItWorks from '@/components/HowItWorks';
import BlogSection from '@/components/BlogSection';
import BrandsShowcase from '@/components/BrandsShowcase';
import FinalCTABanner from '@/components/FinalCTABanner';

export default function Home() {
  const trySearchingExamples = [
    {
      id: 1,
      text: 'Dresses with Khaite or Toteme vibes for a Tuscan villa stay this summer',
      image: '/try-search-1.jpg',
      url: '/edits/Dresses+with+Khaite+or+Toteme+vibes+for+a+Tuscan+villa+stay+this+summer'
    },
    {
      id: 2,
      text: 'I need long sleeve top with floral patterns for a cocktail event in the fall',
      image: '/try-search-2.jpg',
      url: '/edits/I+need+long+sleeve+top+with+floral+patterns+for+a+cocktail+event+in+the+fall'
    },
    {
      id: 3,
      text: "I need a cardigan that's fitted and flattering under $150, I want it to be a unique cut",
      image: '/try-search-3.jpg',
      url: '/edits/I+need+a+cardigan+that%E2%80%99s+fitted+and+flattering+under+%24150%2C+I+want+it+to+be+a+unique+cut'
    },
    {
      id: 4,
      text: 'Bright colored dress for a black-tie wedding, under $500, not strapless',
      image: '/try-search-4.jpg',
      url: '/edits/bright+colored+dress+for+a+black-tie+wedding%2C+under+%24500%2C+not+strapless'
    },
    {
      id: 5,
      text: 'Swimsuits with sculpting detail, on sale',
      image: '/try-search-5.jpg',
      url: '/edits/Swimsuits+with+sculpting+detail%2C+on+sale'
    },
    {
      id: 6,
      text: 'A vacation dress that works for day and night',
      image: '/try-search-6.jpg',
      url: '/edits/A+vacation+dress+that+works+for+day+and+night'
    },
    {
      id: 7,
      text: 'Strappy kitten heels I can dance in, neutral colors',
      image: '/try-search-7.jpg',
      url: '/edits/Strappy+kitten+heels+I+can+dance+in%2C+neutral+colors'
    },
    {
      id: 8,
      text: 'Chic loose sweater for early fall',
      image: '/try-search-8.jpg',
      url: '/edits/Chic+loose+sweater+for+early+fall'
    },
  ];

  const popularSearches = [
    {
      id: 1,
      text: 'Silk pants with elasticated waist, size small',
      image: '/popular-1.jpg',
      url: '/edits/Silk+pants+with+elasticated+waist%2C+size+small'
    },
    {
      id: 2,
      text: 'Find me a modest dress for a religious holiday in the fall',
      image: '/popular-2.jpg',
      url: '/edits/Find+me+a+modest+dress+for+a+religious+holiday+in+the+fall'
    },
    {
      id: 3,
      text: 'Versatile jackets for fall',
      image: '/popular-3.jpg',
      url: '/edits/Versatile+jackets+for+fall'
    },
    {
      id: 4,
      text: 'Statement heels for a summer cocktail event, under $600',
      image: '/popular-4.jpg',
      url: '/edits/Statement+heels+for+a+summer+cocktail+event%2C+under+%24600'
    },
    {
      id: 5,
      text: 'Pastel colored dress for a date night in the city this summer, size small, no pattern',
      image: '/popular-5.jpg',
      url: '/edits/Pastel+colored+dress+for+a+date+night+in+the+city+this+summer%2C+size+small%2C+no+pattern'
    },
    {
      id: 6,
      text: 'Breathable linen shorts with a relaxed fit, light colors',
      image: '/popular-6.jpg',
      url: '/edits/Breathable+linen+shorts+with+a+relaxed+fit%2C+light+colors'
    },
    {
      id: 7,
      text: 'Blazers with strong shoulders and dark colors',
      image: '/popular-7.jpg',
      url: '/edits/Blazers+with+strong+shoulders+and+dark+colors'
    },
    {
      id: 8,
      text: 'Denim maxi skirts with a raw hem, under $300',
      image: '/popular-8.jpg',
      url: '/edits/Denim+maxi+skirts+with+a+raw+hem%2C+under+%24300'
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Auto-rotating Cards */}
      <HeroSection />

      {/* Try Searching Section */}
      <SearchCarousel title="Try searching" examples={trySearchingExamples} />

      {/* Popular Searches Section */}
      <SearchCarousel title="Popular searches" examples={popularSearches} />

      {/* CTA Banner */}
      <CTABanner />

      {/* How It Works */}
      <HowItWorks />

      {/* Blog Section */}
      <BlogSection />

      {/* Final CTA Banner with Real Background */}
      <FinalCTABanner />

      {/* Brands Showcase */}
      <BrandsShowcase />
    </div>
  );
}
