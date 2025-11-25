"use client";

import type React from "react";
import { useState } from "react";
import { Calculator, Zap, TrendingDown } from "lucide-react";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    whatsapp: "",
    pincode: "",
    city: "",
    email: "",
    billRange: "",
    roofArea: "",
    agreeTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Solar consultation form submitted:", formData);
  };

  const billRanges = [
    "< ₹2000",
    "₹2000 - ₹4000",
    "₹4000 - ₹8000",
    "₹8000 - ₹15000",
    "More than ₹15000",
  ];
  const roofAreas = [
    "< 200 sq ft",
    "200-500 sq ft",
    "500-1000 sq ft",
    "1000-2000 sq ft",
    "> 2000 sq ft",
  ];

  return (
    <section className="bg-[#0d5f3f] py-20 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div className="text-white space-y-10">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Get Your <span className="text-[#00ff88]">FREE</span> Solar
            Assessment Today
          </h2>

          <p className="text-lg text-green-100 max-w-xl">
            Save money, increase efficiency, and switch to clean solar power
            with a custom-designed solar setup.
          </p>

          <div className="space-y-6">
            {[
              {
                icon: <Calculator size={26} className="text-[#0d5f3f]" />,
                title: "Free Cost Analysis",
                subtitle: "Get detailed ROI & savings calculation",
              },
              {
                icon: <Zap size={26} className="text-[#0d5f3f]" />,
                title: "Custom Solar Design",
                subtitle: "Tailored system for your home",
              },
              {
                icon: <TrendingDown size={26} className="text-[#0d5f3f]" />,
                title: "Zero Pressure Consultation",
                subtitle: "Expert help with no obligation",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-center">
                <div className="bg-[#00ff88] p-3 rounded-full">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-green-200 text-sm">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-green-100">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-[#0d5f3f]">
              Start Your Solar Journey
            </h3>
            <p className="text-gray-600 text-sm">
              Fill in your details to receive a personalized consultation
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Full Name *"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#00ff88] outline-none transition"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />

            <input
              type="tel"
              placeholder="WhatsApp Number *"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#00ff88] outline-none transition"
              value={formData.whatsapp}
              onChange={(e) =>
                setFormData({ ...formData, whatsapp: e.target.value })
              }
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Pin Code *"
                required
                className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#00ff88] outline-none transition"
                value={formData.pincode}
                onChange={(e) =>
                  setFormData({ ...formData, pincode: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="City *"
                required
                className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#00ff88] outline-none transition"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
              />
            </div>

            <input
              type="email"
              placeholder="Email Address *"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#00ff88] outline-none transition"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            {/* BILL RANGE BUTTONS */}
            <div>
              <label className="font-semibold text-gray-900 text-sm">
                Monthly Electricity Bill *
              </label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {billRanges.map((range) => (
                  <button
                    key={range}
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, billRange: range })
                    }
                    className={`px-3 py-2 rounded-lg text-sm border transition ${
                      formData.billRange === range
                        ? "bg-[#0d5f3f] text-white border-[#0d5f3f]"
                        : "bg-gray-100 border-gray-300 hover:bg-gray-200"
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            {/* ROOF AREA BUTTONS */}
            <div>
              <label className="font-semibold text-gray-900 text-sm">
                Available Roof Area
              </label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {roofAreas.map((area) => (
                  <button
                    key={area}
                    type="button"
                    onClick={() => setFormData({ ...formData, roofArea: area })}
                    className={`px-3 py-2 rounded-lg text-sm border transition ${
                      formData.roofArea === area
                        ? "bg-[#0d5f3f] text-white border-[#0d5f3f]"
                        : "bg-gray-100 border-gray-300 hover:bg-gray-200"
                    }`}
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>

            {/* TERMS CHECKBOX */}
            <label className="flex items-start gap-3 text-sm text-gray-700">
              <input
                type="checkbox"
                required
                checked={formData.agreeTerms}
                onChange={(e) =>
                  setFormData({ ...formData, agreeTerms: e.target.checked })
                }
                className="mt-1 w-4 h-4"
              />
              <span>
                I agree to the{" "}
                <span className="font-semibold">terms of service</span> &{" "}
                <span className="font-semibold">privacy policy</span>.
              </span>
            </label>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#0d5f3f] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#00ff88] hover:text-[#0d5f3f] transition-all shadow-md"
            >
              Get My Free Solar Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
