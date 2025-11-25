"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

interface MenuItem {
  label: string;
  href: string;
}

interface MenuGroup {
  title: string;
  items: MenuItem[];
}

export default function Navigation() {
  const [active, setActive] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);

  // Auto-Hide Navbar
  const [hidden, setHidden] = useState(false);
  let lastScrollY = 0;

  // Scroll Progress Bar
  const [scrollWidth, setScrollWidth] = useState(0);

  const pathname = usePathname();

  // Auto-hide navbar on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll progress bar
  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollWidth(progress);
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const menus: MenuGroup[] = [
    {
      title: "Our Offerings",
      items: [
        { label: "Residential Solar", href: "/residential" },
        { label: "Commercial Solar", href: "/commercial" },
        { label: "Industrial Solar", href: "/industrial" },
      ],
    },
    {
      title: "Solar Solutions",
      items: [
        { label: "Solar Solutions", href: "/solar-solutions" },
        { label: "Battery Storage", href: "/battery-storage" },
        { label: "Monitoring Systems", href: "/monitoring" },
      ],
    },
    {
      title: "Our Presence",
      items: [
        { label: "Our Presence", href: "/our-presence" },
        { label: "Service Areas", href: "/our-presence" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Blog",
      items: [
        { label: "Blog", href: "/blog" },
        { label: "Solar Tips", href: "/blog" },
        { label: "News", href: "/blog" },
      ],
    },
  ];

  const moreItems: MenuItem[] = [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-1/2 -translate-x-1/2 w-[96%] max-w-7xl
        bg-white/50 backdrop-blur-2xl border border-white/30 shadow-xl rounded-b-2xl z-50
        transition-all duration-300
        ${
          hidden
            ? "-translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }
      `}
      >
        {/* Scroll Progress Bar */}
        <div
          className="absolute top-0 left-0 h-[3px] bg-green-600 transition-all duration-150"
          style={{ width: `${scrollWidth}%` }}
        ></div>

        <div className="px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={400}
                height={120}
                className="h-16 w-auto transition-transform hover:scale-105"
              />
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-xl bg-white/40 backdrop-blur-xl border border-white/40 shadow-md hover:bg-white/60 transition"
              onClick={() => setMobile(!mobile)}
            >
              {mobile ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {menus.map((m) => (
                <Dropdown
                  key={m.title}
                  data={m}
                  active={active}
                  setActive={setActive}
                />
              ))}
              <Dropdown
                data={{ title: "More", items: moreItems }}
                active={active}
                setActive={setActive}
              />

              {/* CTA Button */}
              <Link
                href="/quote"
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold shadow-lg hover:shadow-emerald-500/40 hover:scale-105 transition"
              >
                Get Quote →
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobile && (
            <div className="md:hidden mt-3 bg-white/90 backdrop-blur-xl border border-gray-200 shadow-xl rounded-xl p-5 space-y-4 animate-slideDown">
              {menus.map((m) => (
                <MobileDropdown
                  key={m.title}
                  data={m}
                  active={active}
                  setActive={setActive}
                  setMobile={setMobile}
                />
              ))}

              <MobileDropdown
                data={{ title: "More", items: moreItems }}
                active={active}
                setActive={setActive}
                setMobile={setMobile}
              />

              <Link
                href="/quote"
                className="block text-center bg-gradient-to-r from-green-600 to-emerald-500 text-white py-3 rounded-xl shadow-lg hover:scale-105 transition"
              >
                Get Quote →
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* INTERNAL KEYFRAMES */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.32s ease-out;
        }
      `}</style>
    </>
  );
}

/* ------------------------------
   DESKTOP DROPDOWN
--------------------------------*/
function Dropdown({
  data,
  active,
  setActive,
}: {
  data: MenuGroup;
  active: string | null;
  setActive: (value: string | null) => void;
}) {
  return (
    <div className="relative">
      <button
        onClick={() => setActive(active === data.title ? null : data.title)}
        className="flex items-center gap-1 px-4 py-2 font-medium text-gray-700 hover:text-green-700 hover:bg-green-50 rounded-xl transition-all relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
      >
        {data.title}
        <ChevronDown
          size={18}
          className={`transition-transform ${
            active === data.title ? "rotate-180" : ""
          }`}
        />
      </button>

      {active === data.title && (
        <div className="absolute top-full left-0 mt-3 w-56 bg-white shadow-xl border border-gray-200 rounded-xl py-3 animate-fadeIn z-50">
          {data.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setActive(null)}
              className="block px-4 py-2.5 text-gray-700 rounded-lg transition-all hover:bg-green-100 hover:text-green-700 hover:scale-[1.02]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* ------------------------------
   MOBILE DROPDOWN
--------------------------------*/
function MobileDropdown({
  data,
  active,
  setActive,
  setMobile,
}: {
  data: MenuGroup;
  active: string | null;
  setActive: (value: string | null) => void;
  setMobile: (value: boolean) => void;
}) {
  return (
    <div>
      <button
        onClick={() => setActive(active === data.title ? null : data.title)}
        className="w-full bg-gray-100 px-4 py-3 rounded-xl flex justify-between items-center font-medium text-gray-700 transition-all active:scale-95"
      >
        {data.title}
        <ChevronDown
          size={20}
          className={`transition-transform ${
            active === data.title ? "rotate-180" : ""
          }`}
        />
      </button>

      {active === data.title && (
        <div className="mt-2 space-y-2 pl-2 animate-fadeIn">
          {data.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                setActive(null);
                setMobile(false);
              }}
              className="block bg-white px-4 py-3 rounded-lg text-gray-700 transition hover:bg-green-100 hover:text-green-700"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
