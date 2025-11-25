"use client";

import Navigation from "@/components/navigation";
import Link from "next/link";
import {
  Sun,
  Battery,
  BarChart3,
  Smartphone,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function SolarSolutions() {
  return (
    <main className="bg-white">
      <Navigation />

      {/* HERO */}
      <section className="pt-28 pb-20 px-4 bg-gradient-to-br from-[#0d5f3f] to-[#07361f] text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-xl scroll-fade-in">
            Advanced Solar Solutions
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl scroll-fade-in leading-relaxed">
            Comprehensive renewable energy systems engineered for maximum
            efficiency, durability, and long-term sustainability.
          </p>
        </div>
      </section>

      {/* SOLAR PANELS */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div className="scroll-fade-in-left">
            <h2 className="text-4xl font-bold text-[#0d5f3f] mb-6">
              High-Efficiency Solar Panels
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Our industry-leading solar panels deliver outstanding output with
              efficiency ratings up to 22%. Built with top-tier monocrystalline
              technology for superior performance under all weather conditions.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "25-year performance warranty",
                "Cyclone-proof build quality",
                "Low degradation rate",
                "Eco-friendly manufacturing",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#0d5f3f]" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <button className="bg-[#0d5f3f] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#0099cc] transition-all">
              Learn More →
            </button>
          </div>

          {/* Icon Card */}
          <div className="scroll-fade-in-right flex justify-center">
            <div className="bg-gradient-to-br from-[#e8f5f0] to-[#d0ebe0] rounded-2xl h-80 w-full flex items-center justify-center shadow-xl">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-[#0d5f3f] flex items-center justify-center mx-auto shadow-lg mb-4">
                  <Sun className="text-white" size={36} />
                </div>
                <p className="text-xl font-semibold text-[#0d5f3f]">
                  Premium Solar Panels
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BATTERY STORAGE */}
      <section className="py-20 px-4 bg-[#f0f9f6]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          {/* Icon Card */}
          <div className="scroll-fade-in">
            <div className="bg-gradient-to-br from-[#0d5f3f] to-[#072e1f] rounded-2xl h-80 w-full flex items-center justify-center shadow-xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto shadow-inner mb-4">
                  <Battery className="text-white" size={40} />
                </div>
                <p className="text-xl font-semibold text-white">
                  Advanced Battery Storage
                </p>
              </div>
            </div>
          </div>

          <div className="scroll-fade-in">
            <h2 className="text-4xl font-bold text-[#0d5f3f] mb-6">
              Battery Storage Systems
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Store excess solar energy and use it anytime — even at night or
              during power outages. Our lithium-ion systems ensure
              round-the-clock power supply.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "10–15 kWh storage capacity",
                "Smart load management",
                "Backup power support",
                "10-year product warranty",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#0d5f3f]" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <button className="bg-[#0d5f3f] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#0d5f3f] transition-all">
              Explore Storage →
            </button>
          </div>
        </div>
      </section>

      {/* MONITORING */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0d5f3f] mb-14 text-center scroll-fade-in">
            Real-Time Monitoring
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <BarChart3 size={40} className="text-[#0d5f3f]" />,
                title: "Live Performance Tracking",
                desc: "Monitor system performance with real-time metrics.",
              },
              {
                icon: <Sparkles size={40} className="text-[#0d5f3f]" />,
                title: "Energy Analytics",
                desc: "Track daily, monthly, and annual energy production trends.",
              },
              {
                icon: <Smartphone size={40} className="text-[#0d5f3f]" />,
                title: "Mobile Control App",
                desc: "Control and monitor your solar system from anywhere.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="scroll-fade-in bg-[#f0f9f6] p-10 rounded-2xl border border-[#d0ebe0] hover:shadow-xl hover:-translate-y-2 transition-all"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#0d5f3f] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 px-4 bg-[#f0f9f6]">
        <div className="max-w-6xl mx-auto scroll-fade-in">
          <h2 className="text-4xl font-bold text-[#0d5f3f] mb-12 text-center">
            Solution Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-[#d0ebe0] rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-[#0d5f3f] text-white">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-center">Basic</th>
                  <th className="p-4 text-center">Premium</th>
                  <th className="p-4 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Solar Panels",
                    basic: "4–6 kW",
                    premium: "8–10 kW",
                    enterprise: "15+ kW",
                  },
                  {
                    feature: "Battery Storage",
                    basic: "5 kWh",
                    premium: "10 kWh",
                    enterprise: "20+ kWh",
                  },
                  {
                    feature: "Monitoring",
                    basic: "Basic",
                    premium: "Advanced",
                    enterprise: "Premium",
                  },
                  {
                    feature: "Warranty",
                    basic: "10 yrs",
                    premium: "15 yrs",
                    enterprise: "20 yrs",
                  },
                  {
                    feature: "Support",
                    basic: "Email",
                    premium: "24/7 Support",
                    enterprise: "Dedicated Team",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-[#e8f5f0]"}
                  >
                    <td className="p-4 font-semibold text-[#0d5f3f]">
                      {row.feature}
                    </td>
                    <td className="p-4 text-center text-gray-700">
                      {row.basic}
                    </td>
                    <td className="p-4 text-center text-gray-700">
                      {row.premium}
                    </td>
                    <td className="p-4 text-center text-gray-700">
                      {row.enterprise}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#0d5f3f] to-[#072e1f] text-white">
        <div className="max-w-5xl mx-auto text-center scroll-fade-in">
          <h2 className="text-4xl font-bold mb-6">Ready to Go Solar?</h2>
          <p className="text-xl mb-8 text-green-100">
            Get a free consultation and customized quote for your home or
            business.
          </p>
          <Link
            href="/signup"
            className="bg-white text-[#0d5f3f] px-10 py-4 rounded-xl font-semibold hover:bg-green-100 transition-all"
          >
            Get Your Free Quote →
          </Link>
        </div>
      </section>
    </main>
  );
}
