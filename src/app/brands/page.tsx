"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface Brand {
  name: string;
  logo?: string;
  slug: string;
}

const brandData: Record<string, Brand[]> = {
  "#": [
    { name: "1017 ALYX 9SM", slug: "1017-alyx-9sm" },
    { name: "16Arlington", slug: "16arlington" },
    { name: "1. STATE", slug: "1-state" },
    { name: "1XBLUE", slug: "1xblue" },
    { name: "27 miles malibu", slug: "27-miles-malibu" },
    { name: "3.1 Phillip Lim", slug: "3-1-phillip-lim" },
    { name: "3JUIN", slug: "3juin" },
    { name: "3x1", slug: "3x1" },
    { name: "437", slug: "437" },
    { name: "4th & Reckless", slug: "4th-reckless" },
    { name: "525", slug: "525" },
    { name: "7 Days Active", slug: "7-days-active" },
    { name: "7 For All Mankind", slug: "7-for-all-mankind" },
    { name: "87Origins", slug: "87origins" },
    { name: "9seed", slug: "9seed" },
  ],
  A: [
    { name: "AAIZEL", slug: "aaizel" },
    { name: "Abadia", slug: "abadia" },
    { name: "ABRAND", slug: "abrand" },
    { name: "ABYSSE", slug: "abysse" },
    { name: "ACACIA", slug: "acacia" },
    { name: "Acler", slug: "acler" },
    { name: "Acne Studios", slug: "acne-studios" },
    { name: "adidas", slug: "adidas" },
    { name: "adidas by Stella McCartney", slug: "adidas-by-stella-mccartney" },
    { name: "Aje", slug: "aje" },
    { name: "AKNVAS", slug: "aknvas" },
    { name: "Alaïa", slug: "alaia" },
    { name: "ALBERTA FERRETTI", slug: "alberta-ferretti" },
    { name: "A.L.C.", slug: "alc" },
    { name: "Alexander Wang", slug: "alexander-wang" },
    { name: "Alexis", slug: "alexis" },
    { name: "alice + olivia", slug: "alice-olivia" },
    { name: "ALIX NYC", slug: "alix-nyc" },
    { name: "ALLSAINTS", slug: "allsaints" },
    { name: "Alo Yoga", slug: "alo-yoga" },
    { name: "Altuzarra", slug: "altuzarra" },
    { name: "AMIRI", slug: "amiri" },
    { name: "AMO", slug: "amo" },
    { name: "AMUR", slug: "amur" },
    { name: "Ancient Greek Sandals", slug: "ancient-greek-sandals" },
    { name: "ANINE BING", slug: "anine-bing" },
    { name: "A.P.C.", slug: "apc" },
    { name: "AQUAZZURA", slug: "aquazzura" },
    { name: "Area", slug: "area" },
    { name: "ATM Anthony Thomas Melillo", slug: "atm-anthony-thomas-melillo" },
    { name: "Autumn Cashmere", slug: "autumn-cashmere" },
    { name: "AYR", slug: "ayr" },
  ],
  B: [
    { name: "Balenciaga", slug: "balenciaga" },
    { name: "Balmain", slug: "balmain" },
    { name: "ba&sh", slug: "bash" },
    { name: "BCBGeneration", slug: "bcbgeneration" },
    { name: "BCBGMAXAZRIA", slug: "bcbgmaxazria" },
    { name: "Beach Riot", slug: "beach-riot" },
    { name: "Bella Dahl", slug: "bella-dahl" },
    { name: "Birkenstock", slug: "birkenstock" },
    { name: "BLANKNYC", slug: "blanknyc" },
    { name: "Bottega Veneta", slug: "bottega-veneta" },
    { name: "Brandon Maxwell", slug: "brandon-maxwell" },
    { name: "Brunello Cucinelli", slug: "brunello-cucinelli" },
    { name: "Burberry", slug: "burberry" },
    { name: "By Malene Birger", slug: "by-malene-birger" },
    { name: "byTiMo", slug: "bytimo" },
  ],
  C: [
    { name: "Calvin Klein", slug: "calvin-klein" },
    { name: "Canada Goose", slug: "canada-goose" },
    { name: "Carolina Herrera", slug: "carolina-herrera" },
    { name: "Caroline Constas", slug: "caroline-constas" },
    { name: "Casablanca", slug: "casablanca" },
    { name: "Cecilie Bahnsen", slug: "cecilie-bahnsen" },
    { name: "Champion", slug: "champion" },
    { name: "Chloé", slug: "chloe" },
    { name: "Christopher Esber", slug: "christopher-esber" },
    { name: "Cinq à Sept", slug: "cinq-a-sept" },
    { name: "Citizens Of Humanity", slug: "citizens-of-humanity" },
    { name: "Cleobella", slug: "cleobella" },
    { name: "Coach", slug: "coach" },
    { name: "Commando", slug: "commando" },
  ],
  D: [
    { name: "David Koma", slug: "david-koma" },
    { name: "Dion Lee", slug: "dion-lee" },
    { name: "Dior", slug: "dior" },
    { name: "DKNY", slug: "dkny" },
    { name: "Dolce & Gabbana", slug: "dolce-gabbana" },
    { name: "DL1961", slug: "dl1961" },
    { name: "Dr. Martens", slug: "dr-martens" },
    { name: "Dundas", slug: "dundas" },
  ],
  E: [
    { name: "Eberjey", slug: "eberjey" },
    { name: "Eckhaus Latta", slug: "eckhaus-latta" },
    { name: "EENK", slug: "eenk" },
    { name: "Elie Saab", slug: "elie-saab" },
    { name: "Elie Tahari", slug: "elie-tahari" },
    { name: "Elizabeth and James", slug: "elizabeth-and-james" },
    { name: "Eloquii", slug: "eloquii" },
    { name: "Equipment", slug: "equipment" },
    { name: "Erdem", slug: "erdem" },
    { name: "Eres", slug: "eres" },
    { name: "Etro", slug: "etro" },
  ],
  F: [
    { name: "Faithfull The Brand", slug: "faithfull-the-brand" },
    { name: "Fear of God", slug: "fear-of-god" },
    { name: "Fendi", slug: "fendi" },
    { name: "For Love & Lemons", slug: "for-love-lemons" },
    { name: "Frame", slug: "frame" },
    { name: "Free People", slug: "free-people" },
    { name: "French Connection", slug: "french-connection" },
  ],
  G: [
    { name: "Ganni", slug: "ganni" },
    { name: "Gap", slug: "gap" },
    { name: "Gianvito Rossi", slug: "gianvito-rossi" },
    { name: "Giorgio Armani", slug: "giorgio-armani" },
    { name: "Givenchy", slug: "givenchy" },
    { name: "Golden Goose", slug: "golden-goose" },
    { name: "Good American", slug: "good-american" },
    { name: "Gucci", slug: "gucci" },
  ],
  H: [
    { name: "Halston", slug: "halston" },
    { name: "Hermès", slug: "hermes" },
    { name: "House of CB", slug: "house-of-cb" },
    { name: "Hudson Jeans", slug: "hudson-jeans" },
  ],
  I: [
    { name: "Ichi", slug: "ichi" },
    { name: "Iro", slug: "iro" },
    { name: "Isabel Marant", slug: "isabel-marant" },
  ],
  J: [
    { name: "J Brand", slug: "j-brand" },
    { name: "Jacquemus", slug: "jacquemus" },
    { name: "Jil Sander", slug: "jil-sander" },
    { name: "Jimmy Choo", slug: "jimmy-choo" },
    { name: "Jonathan Simkhai", slug: "jonathan-simkhai" },
    { name: "Joie", slug: "joie" },
  ],
  K: [
    { name: "Karen Millen", slug: "karen-millen" },
    { name: "Kate Spade", slug: "kate-spade" },
    { name: "Kenzo", slug: "kenzo" },
    { name: "Khaite", slug: "khaite" },
  ],
  L: [
    { name: "La Perla", slug: "la-perla" },
    { name: "Lanvin", slug: "lanvin" },
    { name: "Loewe", slug: "loewe" },
    { name: "Loro Piana", slug: "loro-piana" },
    { name: "Louis Vuitton", slug: "louis-vuitton" },
    { name: "Lovers and Friends", slug: "lovers-and-friends" },
  ],
  M: [
    { name: "Madewell", slug: "madewell" },
    { name: "Magda Butrym", slug: "magda-butrym" },
    { name: "Maiô", slug: "maio" },
    { name: "Maje", slug: "maje" },
    { name: "Mango", slug: "mango" },
    { name: "Marc Jacobs", slug: "marc-jacobs" },
    { name: "Marni", slug: "marni" },
    { name: "Massimo Dutti", slug: "massimo-dutti" },
    { name: "Max Mara", slug: "max-mara" },
    { name: "Michael Kors", slug: "michael-kors" },
    { name: "Miu Miu", slug: "miu-miu" },
    { name: "Moncler", slug: "moncler" },
    { name: "Mother", slug: "mother" },
  ],
  N: [
    { name: "Nagnata", slug: "nagnata" },
    { name: "Nanushka", slug: "nanushka" },
    { name: "Needle & Thread", slug: "needle-thread" },
    { name: "New Balance", slug: "new-balance" },
    { name: "Nike", slug: "nike" },
    { name: "Norma Kamali", slug: "norma-kamali" },
  ],
  O: [
    { name: "Off-White", slug: "off-white" },
    { name: "Oscar de la Renta", slug: "oscar-de-la-renta" },
  ],
  P: [
    { name: "Paco Rabanne", slug: "paco-rabanne" },
    { name: "Paige", slug: "paige" },
    { name: "Palm Angels", slug: "palm-angels" },
    { name: "Patou", slug: "patou" },
    { name: "Philipp Plein", slug: "philipp-plein" },
    { name: "Polo Ralph Lauren", slug: "polo-ralph-lauren" },
    { name: "Prada", slug: "prada" },
    { name: "Proenza Schouler", slug: "proenza-schouler" },
  ],
  Q: [
    { name: "Quanticlo", slug: "quanticlo" },
  ],
  R: [
    { name: "Rabanne", slug: "rabanne" },
    { name: "Rag & Bone", slug: "rag-bone" },
    { name: "Rails", slug: "rails" },
    { name: "Ralph Lauren", slug: "ralph-lauren" },
    { name: "Reformation", slug: "reformation" },
    { name: "Reiss", slug: "reiss" },
    { name: "Retrofête", slug: "retrofete" },
    { name: "Rhode", slug: "rhode" },
    { name: "Rick Owens", slug: "rick-owens" },
    { name: "Rotate Birger Christensen", slug: "rotate-birger-christensen" },
  ],
  S: [
    { name: "Saint Laurent", slug: "saint-laurent" },
    { name: "Saks Potts", slug: "saks-potts" },
    { name: "Saloni", slug: "saloni" },
    { name: "Salvatore Ferragamo", slug: "salvatore-ferragamo" },
    { name: "Sandro", slug: "sandro" },
    { name: "Self-Portrait", slug: "self-portrait" },
    { name: "Sézane", slug: "sezane" },
    { name: "Simkhai", slug: "simkhai" },
    { name: "Skims", slug: "skims" },
    { name: "Solid & Striped", slug: "solid-striped" },
    { name: "Staud", slug: "staud" },
    { name: "Stella McCartney", slug: "stella-mccartney" },
    { name: "Stone Cold Fox", slug: "stone-cold-fox" },
    { name: "Stuart Weitzman", slug: "stuart-weitzman" },
  ],
  T: [
    { name: "Tanya Taylor", slug: "tanya-taylor" },
    { name: "Ted Baker", slug: "ted-baker" },
    { name: "The Frankie Shop", slug: "the-frankie-shop" },
    { name: "The North Face", slug: "the-north-face" },
    { name: "The Row", slug: "the-row" },
    { name: "Theory", slug: "theory" },
    { name: "Tibi", slug: "tibi" },
    { name: "Tory Burch", slug: "tory-burch" },
    { name: "Toteme", slug: "toteme" },
  ],
  U: [
    { name: "UGG", slug: "ugg" },
    { name: "Ulla Johnson", slug: "ulla-johnson" },
    { name: "Undercover", slug: "undercover" },
  ],
  V: [
    { name: "Valentino", slug: "valentino" },
    { name: "Vans", slug: "vans" },
    { name: "Varley", slug: "varley" },
    { name: "Veja", slug: "veja" },
    { name: "Veronica Beard", slug: "veronica-beard" },
    { name: "Versace", slug: "versace" },
    { name: "Vetements", slug: "vetements" },
    { name: "Victoria Beckham", slug: "victoria-beckham" },
    { name: "Vince", slug: "vince" },
  ],
  W: [
    { name: "Wales Bonner", slug: "wales-bonner" },
    { name: "Wolford", slug: "wolford" },
  ],
  X: [
    { name: "XIRENA", slug: "xirena" },
  ],
  Y: [
    { name: "Y-3", slug: "y-3" },
    { name: "Year of Ours", slug: "year-of-ours" },
    { name: "Yves Salomon", slug: "yves-salomon" },
  ],
  Z: [
    { name: "Zankov", slug: "zankov" },
    { name: "Zimmermann", slug: "zimmermann" },
    { name: "Zuhair Murad", slug: "zuhair-murad" },
  ],
};

const allLetters = ["#", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

export default function BrandsPage() {
  const [activeLetter, setActiveLetter] = useState<string>("#");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const letter = entry.target.getAttribute("data-letter");
            if (letter) {
              setActiveLetter(letter);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    allLetters.forEach((letter) => {
      const element = document.getElementById(`section-${letter}`);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToLetter = (letter: string) => {
    const element = document.getElementById(`section-${letter}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold font-serif">
            Plush
          </Link>
          <button className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors">
            Sign In
          </button>
        </nav>
      </header>

      {/* Alphabet Navigation */}
      <div className="fixed top-20 left-0 right-0 z-40 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center flex-wrap gap-2 md:gap-4">
            {allLetters.map((letter) => (
              <button
                key={letter}
                onClick={() => scrollToLetter(letter)}
                className={`px-2 py-1 rounded transition-colors ${
                  activeLetter === letter
                    ? "bg-black text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          {allLetters.map((letter) => {
            const brands = brandData[letter] || [];
            if (brands.length === 0) return null;

            return (
              <div
                key={letter}
                id={`section-${letter}`}
                data-letter={letter}
                className="mb-12 scroll-mt-32"
              >
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  {letter}
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {brands.map((brand) => (
                    <li key={brand.slug}>
                      <Link
                        href={`/brands/${brand.slug}`}
                        className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105 group"
                      >
                        <div className="flex items-center gap-3">
                          {brand.logo ? (
                            <Image
                              src={brand.logo}
                              alt={brand.name}
                              width={40}
                              height={40}
                              className="object-contain"
                            />
                          ) : (
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-semibold">
                              {brand.name.charAt(0)}
                            </div>
                          )}
                          <span className="text-gray-800 group-hover:text-black transition-colors">
                            {brand.name}
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
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
              Discover and shop women's fashion effortlessly with Plush. Using advanced AI and natural language search, Plush helps you discover exactly what you need.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

