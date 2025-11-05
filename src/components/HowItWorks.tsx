export default function HowItWorks() {
  const steps = [
    {
      title: 'Ask Anything',
      description: 'Describe what you\'re shopping for, in your own words. Plush understands nuanced preferences like "ethereal bohemian," "no synthetics," or "no cutouts." It\'s fashion search that truly understands how women shop.',
    },
    {
      title: 'Let AI Curate',
      description: 'Plush\'s proprietary AI decodes your intent and preferences in seconds, and curates tasteful pieces from trusted brands you already love, and new ones you\'ll be glad to meet.',
    },
    {
      title: 'Refine Your Results',
      description: 'Not quite what you had in mind? Just tweak your original prompt, or use our Smart Filters. Plush adjusts in real time, so you stay in control of the search—with zero friction.',
    },
    {
      title: 'Discover & Shop',
      description: 'Save your favorites, explore similar pieces, or be inspired by influencer edits. Whether you\'re browsing or ready to buy, Plush turns discovery into a seamless, elevated and personalized experience.',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm uppercase tracking-wider text-gray-500 mb-8">
          How Plush Works
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video/Image Placeholder */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-300 to-gray-400">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto text-white/50 mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <p className="text-white/70 text-sm">Video Demo</p>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="group cursor-pointer">
                <h3 className="text-xl font-serif font-semibold mb-2 group-hover:text-gray-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

