"use client";

import { motion } from "framer-motion";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Bookmark, BookmarkCheck, MapPin, GraduationCap, Building2, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const DETAILED_DESTINATIONS = [
  {
    id: "uk",
    name: "United Kingdom",
    image: "https://images.unsplash.com/photo-1513635269975-5969336ac1cb?q=80&w=1000&auto=format&fit=crop",
    description: "Home to some of the world's oldest and most prestigious universities. Experience academic excellence in a rich cultural setting.",
    stats: { universities: "160+", students: "600K+", workRights: "2 Years PSW" },
    topUnis: ["University of Oxford", "Imperial College London", "University of Edinburgh"]
  },
  {
    id: "usa",
    name: "United States",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e2815cb?q=80&w=1000&auto=format&fit=crop",
    description: "The ultimate destination for innovation and research. Benefit from flexible education systems and global networking opportunities.",
    stats: { universities: "4000+", students: "1M+", workRights: "1-3 Years OPT" },
    topUnis: ["MIT", "Stanford University", "Harvard University"]
  },
  {
    id: "canada",
    name: "Canada",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=1000&auto=format&fit=crop",
    description: "Known for its welcoming society, high quality of life, and affordable world-class education. A clear pathway to permanent residency.",
    stats: { universities: "100+", students: "800K+", workRights: "Up to 3 Years PGWP" },
    topUnis: ["University of Toronto", "UBC", "McGill University"]
  },
  {
    id: "australia",
    name: "Australia",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1000&auto=format&fit=crop",
    description: "Enjoy a high standard of living, diverse communities, and globally recognized degrees in some of the most livable cities.",
    stats: { universities: "43", students: "700K+", workRights: "2-4 Years PSW" },
    topUnis: ["University of Melbourne", "UNSW Sydney", "University of Sydney"]
  }
];

export default function DestinationsPage() {
  const [savedDestinations, setSavedDestinations] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
    const stored = localStorage.getItem("savedDestinations");
    if (stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSavedDestinations(JSON.parse(stored));
    }
  }, []);

  const toggleSave = (id: string) => {
    let newSaved = [...savedDestinations];
    if (newSaved.includes(id)) {
      newSaved = newSaved.filter((dest) => dest !== id);
    } else {
      newSaved.push(id);
    }
    setSavedDestinations(newSaved);
    localStorage.setItem("savedDestinations", JSON.stringify(newSaved));
  };

  return (
    <main className="min-h-[100dvh] bg-white">
      <Navbar />

      {/* Hero Header */}
      <div className="bg-primary pt-40 pb-24 lg:pt-52 lg:pb-32 relative overflow-hidden rounded-b-[3rem] lg:rounded-b-[4rem]">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-bold uppercase tracking-widest mb-8"
          >
            Global Opportunities
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="font-heading text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]"
          >
            Choose Your <br className="hidden md:block"/> <span className="text-white/40">Dream Destination</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-medium"
          >
            Explore world-class educational hubs. Compare opportunities, lifestyle, and post-study work rights.
          </motion.p>
        </div>
      </div>

      {/* Destinations List */}
      <div className="py-24 lg:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {DETAILED_DESTINATIONS.map((dest, index) => (
              <motion.div 
                key={dest.id}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
              >
                {/* Image Section (Double Bezel) */}
                <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
                  <div className="p-2 bg-gray-50/50 ring-1 ring-black/5 rounded-[2.5rem]">
                    <div className="relative rounded-[calc(2.5rem-0.5rem)] overflow-hidden h-[400px] lg:h-[500px] shadow-[inset_0_1px_1px_rgba(255,255,255,1)]">
                      <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                      
                      {isMounted && (
                        <button 
                          onClick={() => toggleSave(dest.id)}
                          className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-md rounded-full shadow-lg hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] text-primary"
                        >
                          {savedDestinations.includes(dest.id) ? <BookmarkCheck size={24} className="text-accent" /> : <Bookmark size={24} />}
                        </button>
                      )}
                      
                      <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-xl px-5 py-3 rounded-2xl font-heading font-bold text-primary flex items-center gap-3 shadow-xl">
                        <MapPin size={20} className="text-accent" /> {dest.name}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Content Section */}
                <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
                  <h2 className="font-heading text-4xl lg:text-5xl font-extrabold text-primary mb-6 tracking-tight">{dest.name}</h2>
                  <p className="text-gray-500 mb-10 text-lg leading-relaxed">{dest.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                    <div className="p-1.5 bg-gray-50 rounded-3xl ring-1 ring-black/5">
                      <div className="bg-white p-5 rounded-[calc(1.5rem-0.375rem)] text-center h-full shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
                        <div className="text-primary font-bold text-2xl mb-1">{dest.stats.universities}</div>
                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Universities</div>
                      </div>
                    </div>
                    <div className="p-1.5 bg-gray-50 rounded-3xl ring-1 ring-black/5">
                      <div className="bg-white p-5 rounded-[calc(1.5rem-0.375rem)] text-center h-full shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
                        <div className="text-primary font-bold text-2xl mb-1">{dest.stats.students}</div>
                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Intl. Students</div>
                      </div>
                    </div>
                    <div className="p-1.5 bg-gray-50 rounded-3xl ring-1 ring-black/5">
                      <div className="bg-white p-5 rounded-[calc(1.5rem-0.375rem)] text-center h-full shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
                        <div className="text-primary font-bold text-2xl mb-1">{dest.stats.workRights}</div>
                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Work Rights</div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-10">
                    <h4 className="font-heading font-bold text-primary mb-4 flex items-center gap-3 text-lg">
                      <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center">
                        <GraduationCap size={16} className="text-primary" />
                      </div>
                      Top Institutions
                    </h4>
                    <ul className="space-y-3">
                      {dest.topUnis.map((uni, i) => (
                        <li key={i} className="flex items-center gap-4 text-gray-500 font-medium bg-gray-50/50 p-3 rounded-2xl">
                          <Building2 size={18} className="text-gray-400" />
                          {uni}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="group relative inline-flex items-center justify-between gap-6 bg-primary text-white p-2 pr-8 rounded-full font-bold text-base hover:bg-gray-900 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]">
                    <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-105 group-hover:translate-x-1">
                      <ArrowRight size={20} />
                    </span>
                    View Programs in {dest.name}
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
