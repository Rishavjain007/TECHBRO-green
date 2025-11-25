"use client";

import { MapPin, Users, Building, Zap } from "lucide-react";
import Image from "next/image";

const locations = [
  {
    state: "Gujarat",
    cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
    installations: "2,500+",
  },
  {
    state: "Maharashtra",
    cities: ["Mumbai", "Pune", "Nagpur", "Nashik"],
    installations: "3,200+",
  },
  {
    state: "Karnataka",
    cities: ["Bangalore", "Mysore", "Belgaum", "Hubli"],
    installations: "1,800+",
  },
  {
    state: "Tamil Nadu",
    cities: ["Chennai", "Coimbatore", "Madurai", "Salem"],
    installations: "2,100+",
  },
];

export default function Locations() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d5f3f] mb-4">
            MAVEN Locations Across India
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serving 25+ cities with 10,000+ successful solar installations nationwide
          </p>
        </div>

        {/* India Map Section */}
        <div className="mb-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/india-map.jpg"
              alt="India Map"
              width={600}
              height={400}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d5f3f]/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Stats Cards */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">

              <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-green-100 hover:border-[#00ff88] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <Building className="text-[#0d5f3f]" size={24} />
                  <h3 className="font-bold text-[#0d5f3f]">25+ Cities</h3>
                </div>
                <p className="text-gray-600 text-sm">Nationwide Coverage</p>
              </div>

              <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-green-100 hover:border-[#00ff88] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="text-[#0d5f3f]" size={24} />
                  <h3 className="font-bold text-[#0d5f3f]">10,000+</h3>
                </div>
                <p className="text-gray-600 text-sm">Happy Customers</p>
              </div>

              <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-green-100 col-span-2 hover:border-[#00ff88] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="text-[#0d5f3f]" size={24} />
                  <h3 className="font-bold text-[#0d5f3f]">50+ MW Installed</h3>
                </div>
                <p className="text-gray-600 text-sm">India's clean energy contribution</p>
              </div>

            </div>
          </div>
        </div>

        {/* LOCATIONS CARDS - PREMIUM */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {locations.map((loc, index) => (
            <div
              key={index}
              className="
                bg-white p-8 rounded-2xl
                border border-[#eaf7f0]
                shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                hover:shadow-[0_10px_35px_rgba(0,255,120,0.15)]
                hover:border-[#00ff88]
                transition-all duration-300
                hover:-translate-y-2
              "
            >
              {/* Icon */}
              <div className="flex items-center gap-4 mb-5">
                
                <div className="
                  w-14 h-14 rounded-full flex items-center justify-center
                  bg-gradient-to-br from-[#00ff88] to-[#0d5f3f]
                  shadow-[0_8px_20px_rgba(0,255,120,0.35)]
                ">
                  <MapPin size={28} className="text-white" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#0d5f3f]">{loc.state}</h3>
                  <p className="text-gray-500 text-sm">{loc.installations} installations</p>
                </div>
              </div>

              {/* City List */}
              <ul className="space-y-3">
                {loc.cities.map((city, i) => (
                  <li key={i} className="text-gray-600 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#00ff88] rounded-full"></span>
                    {city}
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
