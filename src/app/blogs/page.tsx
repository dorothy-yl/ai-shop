"use client";

import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  date: string;
  category?: string;
}

const featuredPost: BlogPost = {
  id: "1",
  title: "From Runway to Real Life: 2025 Dressing Trends Predicted by AI",
  slug: "2025-ai-dressing-trends",
  excerpt: "Trends might start on the runway but they come alive in your closet. This year, style isn't just about what you see on the ramp; it's about what feels right on you. The pieces you actually reach for. The ones fit your lifestyle, budget, and unique aesthetic.",
  image: "/blog-1.jpg",
  date: "Oct 21st, 2025",
  category: "LATEST",
};

const mostReadPost: BlogPost = {
  id: "2",
  title: "Carla Anderson on Embracing Minimalism, Quality, and Androgynous Style",
  slug: "carla-anderson-on-embracing-minimalism-quality-and-androgynous-style",
  excerpt: "",
  image: "/blog-2.jpg",
  date: "Nov 19th, 2024",
};

const blogPosts: BlogPost[] = [
  {
    id: "3",
    title: "AI-Curated Picks: Knee-High Boots and Heels That Elevate Every Outfit",
    slug: "ai-curated-heel-picks",
    excerpt: "Black heels aren't just a staple, they're a statement. We've all heard how the saying goes: give a woman the right pair of black heels, and she can conquer the world. Black heels are the kind of piece that instantly sharpens a look, whether you're wearing tailored trousers or a flowing dress. They're timeless, confident, and quietly powerful.",
    image: "/blog-3.jpg",
    date: "Oct 10th, 2025",
  },
  {
    id: "4",
    title: "Night-Out Ready: AI-Powered Picks for Cocktail & Party Dresses",
    slug: "night-out-ai-party-dresses",
    excerpt: "You know that moment when you're staring at your closet an hour before an enticing yet elegant night with girls, asking the eternal question, \"What do I even wear tonight?\" Finding cocktail & party dresses that feel put together without making you feel like a stuffed duffle bag shouldn't be that hard.",
    image: "/blog-4.jpg",
    date: "Oct 1st, 2025",
  },
  {
    id: "5",
    title: "How to Find Your Style (With a Little Help from AI Fashion Search)",
    slug: "find-your-style-with-ai",
    excerpt: "You know the feeling of standing in front of a closet full of clothes but still thinking, \"I have nothing to wear\"? You're not alone. Even the most style-savvy people hit that wall: scrolling endlessly through inspiration, saving looks, yet still unsure of what actually feels like you.",
    image: "/blog-1.jpg",
    date: "Sep 19th, 2025",
  },
  {
    id: "6",
    title: "Vacation Mode On: AI Curates 12 Cute Vacation Dresses Under $200",
    slug: "vacation-dresses-under-200",
    excerpt: "Vacations are about experiences, not endless shopping tabs. So why choose between looking amazing and saving your budget for the memories that matter? With Plush, packing gets easier.",
    image: "/blog-2.jpg",
    date: "Sep 15th, 2025",
  },
  {
    id: "7",
    title: "Desk-to-Dinner: Work Dresses Hand-Picked by AI for Busy Professionals",
    slug: "desk-to-dinner-work-dresses",
    excerpt: "If your 9 a.m. presentation suddenly turns into a 7 p.m. dinner plan, your outfit needs to keep pace. With Plush, AI curates a personalized edit in seconds, with pieces chosen for their ability to move effortlessly from desk to dinner.",
    image: "/blog-3.jpg",
    date: "Sep 8th, 2025",
  },
  {
    id: "8",
    title: "Top 10 Fall Wedding Guest Dresses Curated by Plush's AI (2025 Edition)",
    slug: "fall-wedding-guest-dresses-ai-curated",
    excerpt: "The air feels fresh, the foliage transitions to burnished gold, and the wedding season adopts a richer, romantic color palette. Fall weddings are an opportunity to embrace texture.",
    image: "/blog-4.jpg",
    date: "Aug 28th, 2025",
  },
  {
    id: "9",
    title: "How an AI Shopping Assistant Finds the Perfect Wedding Guest Dress in Seconds",
    slug: "ai-shopping-assistant-wedding-guest-dress",
    excerpt: "You've RSVP-ed \"yes\" to an event, and now the real work begins. First on the list: finding a wedding-guest dress that fits the dress code, suits the season, and still feels like you.",
    image: "/blog-1.jpg",
    date: "Aug 25th, 2025",
  },
  {
    id: "10",
    title: "How to Style a White Button Down Shirt: 4 Effortless Looks That Prove It's Anything but Basic",
    slug: "how-to-style-a-white-button-down-shirt",
    excerpt: "The white button down shirt is a timeless wardrobe staple—but it's all in the styling. Whether you're channeling polished Parisian energy or cool downtown vibes, here are four fresh outfit formulas.",
    image: "/blog-2.jpg",
    date: "Jul 25th, 2025",
  },
  {
    id: "11",
    title: "How to Style Bermuda Shorts on Vacation",
    slug: "how-to-style-bermuda-shorts-on-vacation",
    excerpt: "Whether you're heading to brunch, strolling through cobblestone streets, or dressing up for dinner by the sea, Bermuda shorts are your vacation wardrobe MVP.",
    image: "/blog-3.jpg",
    date: "Jul 22nd, 2025",
  },
  {
    id: "12",
    title: "Nicole Scallan on Balancing Ambition and Minimalism: How a Fast-Paced Career Led to Effortless Style",
    slug: "nicole-scallan-on-balancing-ambition-and-minimalism",
    excerpt: "Stepping into fashion and beauty consulting was never a straight path for Nicole Scallan — but that's exactly what makes her journey so inspiring.",
    image: "/blog-4.jpg",
    date: "Mar 26th, 2025",
  },
  {
    id: "13",
    title: "8 Color Combinations We're Loving This Spring",
    slug: "8-color-combinations-were-loving-this-spring",
    excerpt: "This season, color-blocking is taking center stage with fresh, unexpected pairings. From soft pastels meeting deep jewel tones to earthy shades contrasted with zesty brights.",
    image: "/blog-1.jpg",
    date: "Mar 20th, 2025",
  },
  {
    id: "14",
    title: "7 Fashion Styling Lessons from Anouk Yve",
    slug: "7-fashion-styling-lessons-from-anouk-yve",
    excerpt: "Anouk Yve's signature style is the epitome of effortless sophistication, blending neutral tones, luxurious textures, and timeless silhouettes.",
    image: "/blog-2.jpg",
    date: "Mar 12th, 2025",
  },
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold font-serif">
            Plush
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Categories
            </Link>
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Edits
            </Link>
            <Link
              href="/brands"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Brands
            </Link>
            <Link
              href="/blogs"
              className="text-gray-900 font-semibold border-b-2 border-gray-900"
            >
              Blog
            </Link>
            <button className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors text-sm">
              Sign In
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Hero Featured Post */}
          <article className="mb-12">
            <Link href={`/blog/${featuredPost.slug}`} className="group">
              <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-[400px] md:h-[500px]">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  {featuredPost.category && (
                    <span className="inline-block bg-black text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                      {featuredPost.category}
                    </span>
                  )}
                  <p className="text-sm text-gray-500 mb-2">{featuredPost.date}</p>
                  <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                    {featuredPost.title}
                  </h1>
                  <p className="text-gray-600 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          </article>

          {/* Most Read Story */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
              Most Read Stories
            </h2>
            <Link href={`/blog/${mostReadPost.slug}`} className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-[300px]">
                  <Image
                    src={mostReadPost.image}
                    alt={mostReadPost.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                    {mostReadPost.title}
                  </h3>
                </div>
              </div>
            </Link>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="relative h-[280px]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                    <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-serif font-semibold text-white mb-4">
                About
              </h3>
              <ul>
                <li className="mb-2">
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    Our story
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/careers"
                    className="hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/faq"
                    className="hover:text-white transition-colors"
                  >
                    FAQs
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Policy Section */}
            <div>
              <h3 className="text-xl font-serif font-semibold text-white mb-4">
                Policy
              </h3>
              <ul>
                <li className="mb-2">
                  <Link
                    href="/terms"
                    className="hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/privacy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/disclosure"
                    className="hover:text-white transition-colors"
                  >
                    Affiliate Disclosure
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-serif font-semibold text-white mb-4">
                Connect
              </h3>
              <div className="flex space-x-4">
                <Link
                  href="https://www.instagram.com/_plushshopping/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icons/instagram.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                    className="hover:opacity-75 transition-opacity"
                  />
                </Link>
                <Link
                  href="https://www.tiktok.com/@_plushshopping"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icons/tiktok.svg"
                    alt="TikTok"
                    width={24}
                    height={24}
                    className="hover:opacity-75 transition-opacity"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/plushshopping/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icons/linkedin.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="hover:opacity-75 transition-opacity"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} Plush. All rights reserved.
            </p>
            <p className="text-center text-sm text-gray-400 mt-4 max-w-4xl mx-auto">
              <strong>Plush: Your AI-Powered Fashion Search and Discovery Destination</strong>
              <br />
              Discover and shop women's fashion effortlessly with Plush. Using advanced AI and natural language search.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

