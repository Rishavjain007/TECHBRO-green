import Navigation from "@/components/navigation";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-white">
      <Navigation />

      {/* HERO SECTION */}
      <section className="pt-28 pb-16 px-4 bg-gradient-to-br from-[#0d5f3f] to-[#07361f] text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-xl">
            Contact Us
          </h1>

          <p className="text-lg md:text-xl text-green-100 max-w-2xl leading-relaxed">
            Our solar experts are here to assist you. Get in touch today.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* LEFT SIDE — INFO CARDS */}
          <div>
            <h2 className="text-2xl font-bold text-[#0d5f3f] mb-6">
              Get In Touch
            </h2>

            <div className="space-y-6">
              {/* Phone */}
              <InfoCard
                icon={<Phone size={22} className="text-[#0d5f3f]" />}
                title="Phone"
                text="1-800-SOLAR-SQ (1-800-765-2777)"
              />

              {/* Email */}
              <InfoCard
                icon={<Mail size={22} className="text-[#0d5f3f]" />}
                title="Email"
                text="info@maven.com"
              />

              {/* Address */}
              <InfoCard
                icon={<MapPin size={22} className="text-[#0d5f3f]" />}
                title="Address"
                text={
                  <>
                    123 Solar Street <br />
                    Green City, GC 12345 <br />
                    United States
                  </>
                }
              />

              {/* Hours */}
              <InfoCard
                icon={<Clock size={22} className="text-[#0d5f3f]" />}
                title="Hours"
                text={
                  <>
                    Mon–Fri: 8 AM – 6 PM <br />
                    Saturday: 9 AM – 4 PM <br />
                    Sunday: Closed
                  </>
                }
              />
            </div>
          </div>

          {/* RIGHT SIDE — FORM */}
          <div
            className="
              bg-gradient-to-br from-[#0d5f3f] to-[#09623d] 
              p-8 rounded-2xl text-white shadow-lg
            "
          >
            <h2 className="text-2xl font-bold mb-6">Quick Contact Form</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="
                  w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 
                  text-white placeholder-gray-300 
                  focus:outline-none focus:ring-2 focus:ring-[#00ff88]
                "
              />

              <input
                type="email"
                placeholder="Your Email"
                className="
                  w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 
                  text-white placeholder-gray-300 
                  focus:outline-none focus:ring-2 focus:ring-[#00ff88]
                "
              />

              <textarea
                placeholder="Your Message"
                rows={3}
                className="
                  w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 
                  text-white placeholder-gray-300 
                  focus:outline-none focus:ring-2 focus:ring-[#00ff88]
                "
              />

              <button
                className="
                  w-full py-3 rounded-xl text-lg font-bold 
                  bg-[#fff]
                  hover:bg-[#00ff88] text-[#05351f]
                  transition-all 
                  hover-text-white
                  shadow-lg hover:shadow-green-400/40
                "
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

/* Small reusable info card component */
function InfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: any;
}) {
  return (
    <div
      className="
        bg-white p-5 rounded-xl border border-green-100 shadow-sm 
        hover:shadow-[0_8px_20px_rgba(0,255,120,0.15)]
        hover:border-[#00ff88]
        transition-all duration-300
      "
    >
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <h3 className="font-semibold text-lg text-[#0d5f3f]">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
    </div>
  );
}
