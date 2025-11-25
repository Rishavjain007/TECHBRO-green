"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const newsCards = [
  {
    id: 1,
    image: "https://placehold.co/400x220/E0F7FA/000000?text=News+Image",
    source: "DEC 12, 2024 • FORBES",
    headline: "MAVEN Revolutionizes Rooftop Solar with WindPro Technology",
  },
  {
    id: 2,
    image: "https://placehold.co/400x220/E0F7FA/000000?text=News+Image",
    source: "DEC 10, 2024 • ECONOMIC TIMES",
    headline: "India's Leading Solar Company Expands to 20+ Cities",
  },
  {
    id: 3,
    image: "https://placehold.co/400x220/E0F7FA/000000?text=News+Image",
    source: "DEC 08, 2024 • BUSINESS TODAY",
    headline: "Cyclone-Proof Solar Systems: The Future of Renewable Energy",
  },
];

export default function InTheNews() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track Scroll Position
  const handleScroll = () => {
    if (!sliderRef.current) return;
    const scrollLeft = sliderRef.current.scrollLeft;
    const cardWidth = 400; // width + gap
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  // Scroll Buttons
  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const scrollAmount = 400;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#0d5f3f] mb-12">
          In the News
        </h2>

        <div className="relative">
          {/* Slider */}
          <div
            ref={sliderRef}
            id="news-carousel"
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 no-scrollbar"
          >
            {newsCards.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 w-96 bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group"
              >
                <div className="overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.headline}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold tracking-wide text-[#0d5f3f] mb-2">
                    {card.source}
                  </p>

                  <h3 className="text-lg font-bold text-gray-900 mb-4 leading-snug">
                    {card.headline}
                  </h3>

                  <a
                    href="#"
                    className="text-[#00aaff] font-semibold hover:text-[#0088cc] transition-colors"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Arrow Left */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-white shadow-lg border border-gray-200 rounded-full p-3 hover:bg-gray-50 transition-all"
          >
            <ChevronLeft size={22} className="text-[#0d5f3f]" />
          </button>

          {/* Arrow Right */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 bg-white shadow-lg border border-gray-200 rounded-full p-3 hover:bg-gray-50 transition-all"
          >
            <ChevronRight size={22} className="text-[#0d5f3f]" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {newsCards.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                activeIndex === index ? "bg-[#0d5f3f] w-8" : "bg-gray-300 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
