"use client";

import Navigation from "@/components/navigation";
import { Leaf, ShieldCheck, Lightbulb } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Navigation />

      {/* HERO SECTION */}
      <div className="pt-36 pb-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0d5f3f] mb-6 leading-tight">
            About <span className="text-[#00c47d]">MAVEN</span>
          </h1>

          <p className="text-xl text-gray-600 mb-14 max-w-3xl leading-relaxed">
            For over a decade, MAVEN has been leading India’s solar transformation — empowering homes,
            businesses, and industries to adopt clean, affordable, and sustainable energy solutions.
          </p>

          {/* TWO COLUMN SECTION */}
          <div className="grid md:grid-cols-2 gap-14 items-start">

            {/* MISSION */}
            <div>
              <h2 className="text-3xl font-bold text-[#0d5f3f] mb-6">Our Mission</h2>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our mission is simple — to make solar energy accessible, affordable, and reliable for every
                Indian household and business. We believe in a future where renewable energy is the primary 
                source powering our nation.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Through continuous innovation, customer-first service, and engineering excellence, we are 
                committed to building a cleaner, greener, and more sustainable India.
              </p>
            </div>

            {/* STATS CARD */}
            <div className="
              bg-gradient-to-br from-[#0d5f3f] to-[#00996b]
              text-white p-10 rounded-2xl shadow-xl
            ">
              <h2 className="text-3xl font-bold mb-8">By The Numbers</h2>

              <div className="space-y-8">
                <div>
                  <p className="text-[#00ffb0] text-5xl font-bold drop-shadow">
                    50,000+
                  </p>
                  <p className="text-gray-200 text-lg">
                    Happy Customers
                  </p>
                </div>

                <div>
                  <p className="text-[#00ffb0] text-5xl font-bold drop-shadow">
                    500+ MW
                  </p>
                  <p className="text-gray-200 text-lg">
                    Installed Solar Capacity
                  </p>
                </div>

                <div>
                  <p className="text-[#00ffb0] text-5xl font-bold drop-shadow">
                    10 Years
                  </p>
                  <p className="text-gray-200 text-lg">
                    Industry Excellence
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* VALUES SECTION */}
          <div className="mt-20 bg-white p-12 rounded-2xl border border-green-100 shadow-lg">
            <h2 className="text-3xl font-bold text-[#0d5f3f] mb-10">Our Values</h2>

            <div className="grid md:grid-cols-3 gap-10">

              <div className="
                bg-white p-8 rounded-xl border border-green-100 
                shadow-[0_4px_20px_rgba(0,0,0,0.06)]
                hover:shadow-[0_10px_25px_rgba(0,255,100,0.15)]
                hover:-translate-y-2 transition-all duration-300
              ">
                <Leaf size={40} className="text-[#00c47d] mb-4" />
                <h3 className="text-xl font-bold text-[#0d5f3f] mb-3">Sustainability</h3>
                <p className="text-gray-600">
                  We are committed to protecting the environment through renewable solutions.
                </p>
              </div>

              <div className="
                bg-white p-8 rounded-xl border border-green-100 
                shadow-[0_4px_20px_rgba(0,0,0,0.06)]
                hover:shadow-[0_10px_25px_rgba(0,255,100,0.15)]
                hover:-translate-y-2 transition-all duration-300
              ">
                <ShieldCheck size={40} className="text-[#00c47d] mb-4" />
                <h3 className="text-xl font-bold text-[#0d5f3f] mb-3">Integrity</h3>
                <p className="text-gray-600">
                  Honest service, transparent pricing, and complete accountability.
                </p>
              </div>

              <div className="
                bg-white p-8 rounded-xl border border-green-100 
                shadow-[0_4px_20px_rgba(0,0,0,0.06)]
                hover:shadow-[0_10px_25px_rgba(0,255,100,0.15)]
                hover:-translate-y-2 transition-all duration-300
              ">
                <Lightbulb size={40} className="text-[#00c47d] mb-4" />
                <h3 className="text-xl font-bold text-[#0d5f3f] mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We continuously upgrade our technology to deliver high-performance solar solutions.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
