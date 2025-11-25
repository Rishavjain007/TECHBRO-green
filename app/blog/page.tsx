"use client";

import Navigation from "@/components/navigation";
import { NotebookPen, CalendarDays, Tag } from "lucide-react";

export default function BlogPage() {
  const articles = [
    {
      title: "How Solar Panels Can Save You Money",
      date: "October 15, 2024",
      excerpt:
        "Learn how solar panels can reduce your electricity bills by up to 80% and provide long-term savings.",
      category: "Solar Tips",
    },
    {
      title: "The Future of Renewable Energy",
      date: "October 10, 2024",
      excerpt:
        "Explore the latest trends and innovations in renewable energy technology.",
      category: "News",
    },
    {
      title: "Solar Installation Process Explained",
      date: "October 5, 2024",
      excerpt:
        "A step-by-step guide to understanding how solar panels are installed on your home.",
      category: "Solar Tips",
    },
    {
      title: "Government Incentives for Solar Energy",
      date: "September 28, 2024",
      excerpt:
        "Discover available tax credits and rebates for solar installations in your area.",
      category: "News",
    },
  ];

  return (
    <main className="bg-white">
      <Navigation />

      {/* HERO SECTION */}
      <div className="pt-36 pb-10 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0d5f3f] mb-4">
            MAVEN <span className="text-[#00c47d]">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 mb-14 max-w-2xl">
            Stay updated with the latest solar energy tips, news, and industry insights.
          </p>

          {/* BLOG GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {articles.map((article, idx) => (
              <article
                key={idx}
                className="
                  bg-white p-8 rounded-2xl 
                  shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                  border border-green-100
                  hover:border-[#00ff88]
                  hover:shadow-[0_12px_30px_rgba(0,255,150,0.15)]
                  transition-all duration-300
                  hover:-translate-y-2
                  cursor-pointer relative overflow-hidden
                "
              >
                {/* CATEGORY TAG */}
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="
                      px-4 py-1 text-xs font-semibold rounded-full 
                      bg-gradient-to-r from-[#00ff88] to-[#0d5f3f]
                      text-white shadow-md
                    "
                  >
                    {article.category}
                  </span>

                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <CalendarDays size={16} />
                    {article.date}
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-bold text-[#0d5f3f] mb-4 leading-tight">
                  {article.title}
                </h3>

                {/* EXCERPT */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {article.excerpt}
                </p>

                {/* READ MORE */}
                <a
                  href="#"
                  className="
                    text-[#0d5f3f] font-semibold text-sm 
                    hover:text-[#00c47d] transition-all 
                    inline-flex items-center gap-2
                  "
                >
                  Read More →
                </a>

                {/* BOTTOM GLOW */}
                <div
                  className="
                    absolute bottom-0 left-0 right-0 h-1 
                    bg-gradient-to-r from-[#00ff88] to-[#0d5f3f]
                    opacity-0 group-hover:opacity-100 transition-all
                  "
                ></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
