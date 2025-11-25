"use client";

import Navigation from "@/components/navigation";
import Link from "next/link";
import { MapPin, Users, Building2, ChartBar } from "lucide-react";

export default function OurPresence() {
  const locations = [
    {
      city: "Mumbai",
      region: "Western India",
      customers: "15,000+",
      projects: "3,200+",
    },
    {
      city: "Delhi",
      region: "Northern India",
      customers: "12,000+",
      projects: "2,800+",
    },
    {
      city: "Bangalore",
      region: "Southern India",
      customers: "18,000+",
      projects: "4,100+",
    },
    {
      city: "Hyderabad",
      region: "Central India",
      customers: "10,000+",
      projects: "2,300+",
    },
    {
      city: "Chennai",
      region: "Eastern India",
      customers: "8,000+",
      projects: "1,900+",
    },
    {
      city: "Pune",
      region: "Western India",
      customers: "9,000+",
      projects: "2,100+",
    },
  ];

  return (
    <main className="bg-white">
      <Navigation />

      {/* HERO */}
      <section className="pt-28 pb-16 px-4 bg-gradient-to-br from-[#0d5f3f] to-[#07361f] text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-xl">
            Our Global Presence
          </h1>
          <p className="text-lg md:text-xl text-green-100 max-w-3xl leading-relaxed">
            Serving customers across India with world-class solar solutions and
            support.
          </p>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0d5f3f] text-center mb-4">
            MAVEN Locations
          </h2>
          <p className="text-lg text-center text-gray-700 mb-10">
            We offer solar services in 20+ Indian cities — expanding every day.
          </p>

          <div className="rounded-2xl p-8 bg-gradient-to-br from-[#e8f5ef] to-[#d8ebe0] shadow-md flex items-center justify-center">
            <svg viewBox="0 0 800 900" className="w-full h-full max-w-2xl">
              <path
                d="M 400 100 L 500 150 L 550 200 L 560 300 L 550 400 L 520 500 L 480 550 L 420 580 L 350 560 L 300 500 L 280 400 L 290 300 L 320 200 L 350 150 Z"
                fill="#c8e6c9"
                stroke="#0d5f3f"
                strokeWidth="2"
              />

              {[
                { name: "Delhi", x: 380, y: 180 },
                { name: "Mumbai", x: 300, y: 380 },
                { name: "Bangalore", x: 420, y: 520 },
                { name: "Hyderabad", x: 450, y: 450 },
                { name: "Chennai", x: 480, y: 550 },
                { name: "Pune", x: 350, y: 420 },
              ].map((city, idx) => (
                <g key={idx}>
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r="12"
                    fill="#00c47d"
                    opacity="0.8"
                  />
                  <circle cx={city.x} cy={city.y} r="7" fill="#ff0000ff" />
                  <text
                    x={city.x}
                    y={city.y - 22}
                    textAnchor="middle"
                    fontSize="13"
                    fill="#0d5f3f"
                    fontWeight="bold"
                  >
                    {city.name}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </section>

      {/* LOCATION CARDS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0d5f3f] text-center mb-10">
            Our Service Centers
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {locations.map((loc, index) => (
              <div
                key={index}
                className="
                  bg-white p-8 rounded-2xl border border-green-100 
                  shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                  hover:shadow-[0_12px_30px_rgba(0,255,150,0.15)]
                  hover:border-[#0d5f3f]
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
                  <MapPin size={30} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold text-[#0d5f3f] mb-2">
                  {loc.city}
                </h3>
                <p className="text-gray-600 mb-4">{loc.region}</p>

                <p className="text-gray-700 text-sm mb-2">
                  <span className="text-[#00c47d] font-semibold">
                    Customers:
                  </span>{" "}
                  {loc.customers}
                </p>
                <p className="text-gray-700 text-sm mb-6">
                  <span className="text-[#00c47d] font-semibold">
                    Projects:
                  </span>{" "}
                  {loc.projects}
                </p>

                <button
                  className="
    w-full 
    bg-[#0d5f3f] 
    text-white 
    py-2.5 
    rounded-lg 
    border-2 
    border-[#0d5f3f] 
    hover:bg-white 
    hover:text-[#0d5f3f] 
    transition-all 
    duration-300 
    font-semibold
  "
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#0d5f3f] to-[#072e1f] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Our Impact</h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "72,000+", label: "Happy Customers" },
              { number: "16,400+", label: "Projects Completed" },
              { number: "500+ MW", label: "Total Capacity" },
              { number: "2.5M+", label: "Tons CO₂ Saved" },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-extrabold mb-2 drop-shadow">
                  {stat.number}
                </p>
                <p className="text-green-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0d5f3f] mb-4">
            Find Your Nearest Service Center
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Connect with our local experts for personalized solar solutions.
          </p>

          <Link
            href="/contact"
            className="bg-[#0d5f3f] text-[#fff] hover:text-[#0d5f3f] border-[#0d5f3f] px-10 py-4 rounded-xl text-lg font-semibold shadow-md hover:bg-white transition-all"
          >
            Contact Us Today →
          </Link>
        </div>
      </section>
    </main>
  );
}
