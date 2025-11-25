"use client";

import Navigation from "@/components/navigation";
import Link from "next/link";
import { CheckCircle, Building2, TrendingUp, Factory, Briefcase } from "lucide-react";

export default function CommercialPage() {
  return (
    <main className="bg-white">
      <Navigation />

      {/* HERO SECTION */}
      <section className="pt-36 pb-24 px-4 bg-gradient-to-br from-[#0d5f3f] to-[#07361f] text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-xl">
            Commercial Solar Solutions
          </h1>

          <p className="text-xl text-green-100 max-w-3xl leading-relaxed mb-10">
            Maximize your business profitability with enterprise-grade solar systems designed 
            for performance, reliability, and long-term savings.
          </p>

          <Link
            href="/signup"
            className="inline-block bg-[#00ff88] text-[#07361f] font-semibold px-10 py-4 rounded-xl shadow-lg hover:shadow-green-400/40 hover:bg-white transition-all text-lg"
          >
            Get Commercial Quote →
          </Link>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 gap-16">

            {/* LEFT SIDE: Why Commercial Solar */}
            <div>
              <h2 className="text-3xl font-bold text-[#0d5f3f] mb-6">
                Why Choose Commercial Solar?
              </h2>

              <ul className="space-y-5">
                {[
                  "Significant reduction in operating costs",
                  "Tax incentives and rebates available",
                  "Scalable solutions for any business size",
                  "Minimal downtime during installation",
                  "Dedicated business support team",
                  "Customized financing options",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle className="text-[#00c47d] w-7 h-7 shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT SIDE: Stats Card */}
            <div
              className="
                bg-gradient-to-br from-[#0d5f3f] to-[#09623d]
                text-white p-10 rounded-2xl shadow-2xl
              "
            >
              <h3 className="text-3xl font-bold mb-8">Average Commercial Savings</h3>

              <div className="space-y-8">
                <div>
                  <p className="text-[#00ffb0] text-5xl font-bold drop-shadow">40–60%</p>
                  <p className="text-gray-200 text-lg">Reduction in energy costs</p>
                </div>

                <div>
                  <p className="text-[#00ffb0] text-5xl font-bold drop-shadow">5–7 years</p>
                  <p className="text-gray-200 text-lg">Average ROI period</p>
                </div>

                <div>
                  <p className="text-[#00ffb0] text-5xl font-bold drop-shadow">25+ years</p>
                  <p className="text-gray-200 text-lg">System lifespan</p>
                </div>
              </div>
            </div>

          </div>

          {/* BENEFIT CARDS */}
          <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: Building2, title: "For Offices", desc: "Cut energy bills and promote sustainability." },
              { icon: Factory, title: "For Industries", desc: "Power heavy machinery efficiently." },
              { icon: TrendingUp, title: "For Warehouses", desc: "Lower per-unit cost with maximum output." },
              { icon: Briefcase, title: "For Enterprises", desc: "Enterprise-grade performance & support." },
            ].map((box, index) => {
              const Icon = box.icon;
              return (
                <div
                  key={index}
                  className="
                    bg-white p-8 rounded-2xl border border-green-100
                    shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                    hover:shadow-[0_12px_30px_rgba(0,255,150,0.15)]
                    hover:border-[#00ff88]
                    hover:-translate-y-2
                    transition-all duration-300
                  "
                >
                  <div
                    className="
                      w-14 h-14 flex items-center justify-center rounded-full mb-6
                      bg-gradient-to-br from-[#00ff88] to-[#0d5f3f]
                      shadow-[0_8px_20px_rgba(0,255,120,0.35)]
                    "
                  >
                    <Icon className="text-white" size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-[#0d5f3f] mb-2">{box.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{box.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
