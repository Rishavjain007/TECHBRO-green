import { Sun, Battery, Leaf, Award, TrendingUp, Shield } from "lucide-react";

const features = [
  {
    icon: Sun,
    title: "Premium Solar Technology",
    description:
      "High-efficiency monocrystalline panels with a 25-year performance warranty.",
  },
  {
    icon: Battery,
    title: "Smart Energy Storage",
    description:
      "Advanced lithium-ion battery systems for uninterrupted clean energy, day & night.",
  },
  {
    icon: Shield,
    title: "Cyclone-Proof Installation",
    description:
      "WindPro Mount™ engineered to withstand extreme weather and 170+ kmph winds.",
  },
  {
    icon: TrendingUp,
    title: "Maximum ROI Guarantee",
    description:
      "Save up to 90% on electricity bills with India's fastest solar payback cycle.",
  },
  {
    icon: Leaf,
    title: "Carbon Footprint Reduction",
    description:
      "Reduce CO₂ emissions by 4+ tons annually with cutting-edge green energy solutions.",
  },
  {
    icon: Award,
    title: "Industry-Leading Warranty",
    description:
      "25-year solar panel warranty + 5 years of free professional maintenance.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white via-green-50/40 to-white relative overflow-hidden">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#00ff88]/20 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0d5f3f] drop-shadow-sm tracking-tight">
            Why Choose <span className="text-[#00cc77]">MAVEN Green Energy</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Leading India’s solar revolution with future-ready technology and trusted service.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-lg border border-green-100 
                hover:shadow-2xl hover:border-[#00ff88] hover:-translate-y-2 hover:scale-[1.03] transition-all duration-500 
                relative overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-[#00ff88] to-[#0d5f3f] blur-2xl transition-all duration-500"></div>

                {/* Icon */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full mb-6 
                bg-gradient-to-r from-[#00ff88] to-[#0d5f3f] shadow-lg group-hover:scale-110 transition-all duration-500">
                  <Icon size={34} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-[#0d5f3f] mb-3 group-hover:text-[#00995a] transition-all duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-20">
          <button className="px-12 py-4 bg-gradient-to-r from-[#0d5f3f] to-[#00995a] text-white font-bold text-lg rounded-xl 
          shadow-xl hover:shadow-green-400/30 hover:scale-105 transition-all duration-300">
            Discover Our Solutions →
          </button>
        </div>
      </div>
    </section>
  );
}
