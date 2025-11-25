"use client";

import Navigation from "@/components/navigation";
import Link from "next/link";
import {
  Wallet,
  Leaf,
  Home,
  ShieldCheck,
  Wrench,
  BarChart3,
} from "lucide-react";

export default function ResidentialPage() {
  return (
    <main className="bg-white">
      <Navigation />

      {/* HERO SECTION */}
      <section className="pt-28 pb-16 px-4 bg-gradient-to-br from-[#0d5f3f] to-[#07361f] text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-xl">
            Residential Solar Solutions
          </h1>

          <p className="text-lg md:text-xl text-green-100 max-w-2xl leading-relaxed mb-6">
            Transform your home with clean, renewable energy. Reduce electricity
            bills, increase property value, and enjoy long-term energy
            independence.
          </p>

          <Link
            href="/signup"
            className="inline-block bg-[#00ff88] text-[#07361f] font-semibold px-10 py-4 rounded-xl shadow-lg hover:bg-white transition-all text-lg"
          >
            Get Your Free Quote →
          </Link>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0d5f3f] mb-10 text-center">
            Why Homeowners Choose MAVEN
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <FeatureCard
              icon={<Wallet className="text-white" size={32} />}
              title="Cost Savings"
              desc="Reduce your electricity bills by up to 80% with our high-efficiency solar panels."
            />

            <FeatureCard
              icon={<Leaf className="text-white" size={32} />}
              title="Eco-Friendly"
              desc="Generate clean energy and reduce your household’s carbon footprint."
            />

            <FeatureCard
              icon={<Home className="text-white" size={32} />}
              title="Increased Home Value"
              desc="Solar installation increases property value by an average of 4%."
            />

            <FeatureCard
              icon={<ShieldCheck className="text-white" size={32} />}
              title="25-Year Warranty"
              desc="Backed by a 25-year panel performance warranty for long-term reliability."
            />

            <FeatureCard
              icon={<Wrench className="text-white" size={32} />}
              title="Expert Installation"
              desc="Installed by certified technicians ensuring safety and precision."
            />

            <FeatureCard
              icon={<BarChart3 className="text-white" size={32} />}
              title="24/7 Monitoring"
              desc="Real-time tracking of your system’s performance and efficiency."
            />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#0d5f3f] to-[#09623d] text-white p-14 rounded-2xl shadow-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Go Solar?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-green-100">
            Join thousands of homeowners saving money with MAVEN. Get a free
            consultation today.
          </p>

          <Link
            href="/signup"
            className="inline-block bg-[#00ff88] text-[#05351f] px-10 py-4 rounded-xl font-semibold hover:bg-white transition-all text-lg shadow-lg hover:shadow-green-400/40"
          >
            Schedule Free Consultation →
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
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}
