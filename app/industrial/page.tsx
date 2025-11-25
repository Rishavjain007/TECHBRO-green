"use client";

import Navigation from "@/components/navigation";
import Link from "next/link";
import { Factory, Zap, Cpu } from "lucide-react";
import type { ReactElement } from "react";

interface FeatureCardProps {
  icon: ReactElement;
  title: string;
  desc: string;
}

export default function IndustrialPage() {
  return (
    <main className="bg-white">
      <Navigation />

      {/* HERO */}
      <section className="pt-28 pb-16 px-4 bg-gradient-to-br from-[#0d5f3f] to-[#07361f] text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-xl">
            Industrial Solar Solutions
          </h1>

          <p className="text-lg md:text-xl text-green-100 max-w-2xl leading-relaxed">
            Power your industrial operations with large-scale solar
            infrastructure. Achieve energy independence while reducing long-term
            operational costs.
          </p>

          <Link
            href="/signup"
            className="inline-block mt-8 bg-[#00ff88] text-[#07361f] font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-white transition-all"
          >
            Request Industrial Assessment →
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            <FeatureCard
              icon={<Factory className="text-white" size={32} />}
              title="Megawatt Scale"
              desc="Systems ranging from 100kW to 10MW+ capacity for heavy industrial needs."
            />

            <FeatureCard
              icon={<Zap className="text-white" size={32} />}
              title="High Efficiency"
              desc="Industrial-grade modules with 22%+ efficiency and maximum durability."
            />

            <FeatureCard
              icon={<Cpu className="text-white" size={32} />}
              title="Grid Integration"
              desc="Seamless integration with existing plant infrastructure and power systems."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

/* Reusable Premium Card */
function FeatureCard({ icon, title, desc }: FeatureCardProps) {
  return (
    <div
      className="
        bg-white p-8 rounded-2xl 
        border border-green-100 
        shadow-[0_4px_20px_rgba(0,0,0,0.05)]
        hover:shadow-[0_12px_30px_rgba(0,255,150,0.15)]
        hover:border-[#00ff88]
        hover:-translate-y-2
        transition-all duration-300
      "
    >
      <div
        className="
          w-16 h-16 flex items-center justify-center rounded-full mb-6
          bg-gradient-to-br from-[#00ff88] to-[#0d5f3f]
          shadow-[0_8px_20px_rgba(0,255,120,0.35)]
        "
      >
        {icon}
      </div>

      <h3 className="text-xl font-bold text-[#0d5f3f] mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-[15px]">{desc}</p>
    </div>
  );
}
