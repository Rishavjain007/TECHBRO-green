"use client";

import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  {
    src: "/gallery-Bifacial-Solar-Modules-Explained-_1_.jpeg",
    alt: "Bifacial Solar Modules Explained",
    title: "Advanced Bifacial Technology",
  },
  {
    src: "/gallery-Bifacial-Solar-Modules-Explained.jpeg",
    alt: "Bifacial Solar Modules",
    title: "High-Efficiency Solar Solutions",
  },
  {
    src: "/gallery-Eco-friendly-Quotes-for-Bifacial-Solar-Modules.jpeg",
    alt: "Eco-friendly Solar",
    title: "Sustainable Energy Future",
  },
  {
    src: "/gallery-Legga-Village-Solar-Electrification.jpeg",
    alt: "Village Solar Electrification",
    title: "Rural Electrification Project",
  },
  {
    src: "/gallery-This-is-what-energy-independence-looks-like_-Rows….jpeg",
    alt: "Energy Independence",
    title: "Energy Independence Solutions",
  },
  {
    src: "/gallery-Power-Quality-Analysis-Bifacial-Solar-Modules.jpeg",
    alt: "Power Quality Analysis",
    title: "Advanced Power Analysis",
  },
  {
    src: "/gallery-Nimbus-Solar-Solution.jpeg",
    alt: "Nimbus Solar Solution",
    title: "Nimbus Solar Technology",
  },
  {
    src: "/gallery-India-Cleaner-Future.jpeg",
    alt: "India Cleaner Future",
    title: "Clean Energy for India",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0d5f3f]">
            Solar Projects Gallery
          </h2>
          <p className="text-lg text-gray-600 mt-3 max-w-3xl mx-auto">
            Explore real installations and renewable energy projects by MAVEN
            Green Energy
          </p>
        </div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className="group relative overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-[0.35]"
                />
              </div>

              {/* FULL TEXT OVERLAY (FIXED CLASSNAME) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700">
                <div className="text-center px-6 text-white text-xl font-semibold tracking-wide animate-fadeOverlay">
                  {image.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full animate-zoomIn">
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                width={1200}
                height={800}
                className="rounded-xl shadow-xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/60 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/80 transition"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Animations */}
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.35s ease-out;
          }

          @keyframes zoomIn {
            from {
              transform: scale(0.85);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
          .animate-zoomIn {
            animation: zoomIn 0.35s ease-out;
          }

          @keyframes fadeOverlay {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeOverlay {
            animation: fadeOverlay 0.4s ease-out;
          }
        `}</style>
      </div>
    </section>
  );
}
