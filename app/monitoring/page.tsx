"use client";

import Navigation from "@/components/navigation";
import Link from "next/link";
import { Wifi, Smartphone, Bell } from "lucide-react";

export default function Monitoring() {
  return (
    <main className="bg-white">
      <Navigation />

      {/* HERO SECTION */}
      <section className="pt-28 pb-16 px-4 bg-gradient-to-br from-[#0d5f3f] to-[#07361f] text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-xl">
            Smart Monitoring Systems
          </h1>

          <p className="text-lg md:text-xl text-green-100 max-w-2xl leading-relaxed">
            Track your solar performance in real-time with advanced monitoring
            tools.
          </p>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0d5f3f] mb-12 text-center">
            Monitoring Features
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <FeatureCard
              icon={<Wifi className="text-white" size={32} />}
              title="Real-Time Data"
              desc="Monitor energy production instantly with accurate live data tracking."
            />

            {/* Card 2 */}
            <FeatureCard
              icon={<Smartphone className="text-white" size={32} />}
              title="Mobile App"
              desc="Check system performance anytime, anywhere with our easy app."
            />

            {/* Card 3 */}
            <FeatureCard
              icon={<Bell className="text-white" size={32} />}
              title="Alerts & Reports"
              desc="Receive instant alerts, weekly reports, and detailed analytics."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#0d5f3f] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Monitor Your Solar System</h2>

          <Link
            href="/signup"
            className="bg-[#00ff88] text-[#07361f] text-lg font-semibold px-10 py-4 rounded-xl shadow-lg hover:bg-white transition-all"
          >
            Get Started Today →
          </Link>
        </div>
      </section>
    </main>
  );
}

/* Premium Feature Card Component */
function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
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
      {/* Icon Bubble */}
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
