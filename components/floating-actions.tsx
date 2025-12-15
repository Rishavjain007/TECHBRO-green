"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-5 left-0 right-0 z-50 px-4">
      <div className="mx-auto max-w-7xl flex justify-between items-center gap-4">

        {/* Call Button */}
        <a
          href="tel:+919876543210"
          className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-full shadow-lg transition-all"
        >
          <Phone size={22} />
          <div className="leading-tight">
            <p className="text-sm font-semibold">Call Now</p>
            <p className="text-xs opacity-90">+91 98765 43210</p>
          </div>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full shadow-lg transition-all"
        >
          <MessageCircle size={22} />
          <div className="leading-tight">
            <p className="text-sm font-semibold">Chat on WhatsApp</p>
            <p className="text-xs opacity-90">Quick Response</p>
          </div>
        </a>

      </div>
    </div>
  );
}
