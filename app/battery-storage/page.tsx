"use client";

import Navigation from "@/components/navigation";
import Link from "next/link";
import { BatteryFull, ShieldCheck, Zap, Sun, TrendingUp } from "lucide-react";

export default function BatteryStorage() {
  const features = [
    {
      title: "24/7 Power Backup",
      desc: "Store excess solar energy and use it at night or during power cuts.",
      icon: BatteryFull,
    },
    {
      title: "Energy Independence",
      desc: "Reduce dependency on the electricity grid and enjoy uninterrupted power.",
      icon: ShieldCheck,
    },
    {
      title: "Lower Electricity Bills",
      desc: "Optimize solar usage and reduce peak-time grid consumption.",
      icon: TrendingUp,
    },
    {
      title: "Fast Charging",
      desc: "High-capacity lithium-ion batteries charge quickly and efficiently.",
      icon: Zap,
    },
    {
      title: "Long Life Durability",
      desc: "Advanced battery chemistry ensures long life and high performance.",
      icon: Sun,
    },
    {
      title: "Smart Monitoring",
      desc: "Track battery health, charge levels, and usage in real-time.",
      icon: ShieldCheck,
    },
  ];

  return (
    <main className="bg-white">
      <Navigation />

      {/* HERO SECTION */}
      <section className="pt-36 pb-24 px-4 bg-gradient-to-br from-[#0d5f3f] to-[#07361f] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/battery-bg.png')] bg-cover opacity-10"></div>

        <div className="relative max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg leading-tight">
            Battery Storage Solutions
          </h1>
          <p className="text-xl md:text-2xl text-green-200 mb-10 max-w-2xl leading-relaxed">
            Maximize your solar power by storing clean energy and using it
            whenever you need it.
          </p>

          <Link
            href="/signup"
            className="inline-block bg-[#00c47d] hover:bg-[#00ffae] text-[#07361f] px-10 py-4 rounded-xl font-semibold shadow-lg hover:shadow-green-400/30 transition-all"
          >
            Get Free Consultation →
          </Link>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d5f3f] mb-14 text-center">
            Why Choose Battery Storage?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="
                    bg-white/80 backdrop-blur-xl p-8 rounded-2xl 
                    shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                    border border-green-100
                    hover:border-[#00ff88]
                    hover:shadow-[0_12px_30px_rgba(0,255,150,0.15)]
                    transition-all duration-300
                    hover:-translate-y-2
                  "
                >
                  <div
                    className="
                      w-14 h-14 rounded-full flex items-center justify-center mb-6
                      bg-gradient-to-br from-[#00ff88] to-[#0d5f3f]
                      shadow-[0_8px_20px_rgba(0,255,120,0.35)]
                    "
                  >
                    <Icon className="text-white" size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-[#0d5f3f] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-4 bg-[#0d5f3f] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/solar-pattern.png')] opacity-10"></div>

        <div className="relative max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Unlock Full Solar Power?
          </h2>
          <p className="text-lg text-green-100 mb-10">
            Store, save, and use solar energy anytime with MAVEN's premium
            storage solutions.
          </p>

          <Link
            href="/signup"
            className="inline-block bg-[#00ff88] text-[#0d5f3f] px-10 py-4 rounded-xl 
             font-semibold shadow-lg hover:bg-white transition-all hover:shadow-green-400/40"
          >
            Get Started Today →
          </Link>
        </div>
      </section>
    </main>
  );
}
