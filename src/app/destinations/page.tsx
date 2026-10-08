"use client";

import { motion } from "framer-motion";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Bookmark, BookmarkCheck, MapPin, GraduationCap, Building2 } from "lucide-react";
import { useState, useEffect } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
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
    <main className="min-h-screen bg-light">
      <TopBar />
      <Navbar />

      {/* Hero Header */}
      <div className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Choose Your <span className="text-accent">Dream Destination</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Explore world-class educational hubs. Compare opportunities, lifestyle, and post-study work rights to make an informed decision for your future.
          </motion.p>
        </div>
      </div>

      {/* Destinations List */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {DETAILED_DESTINATIONS.map((dest, index) => (
              <motion.div 
                key={dest.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow`}
              >
                {/* Image Section */}
                <motion.div variants={fadeInUp} className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden h-[400px]">
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                  
                  {isMounted && (
                    <button 
                      onClick={() => toggleSave(dest.id)}
                      className="absolute top-4 right-4 z-10 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition text-gray-700"
                    >
                      {savedDestinations.includes(dest.id) ? <BookmarkCheck size={24} className="text-accent" /> : <Bookmark size={24} />}
                    </button>
                  )}
                  
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg font-heading font-bold text-primary flex items-center gap-2">
                    <MapPin size={18} className="text-accent" /> {dest.name}
                  </div>
                </motion.div>

                {/* Content Section */}
                <motion.div variants={fadeInUp} className="w-full lg:w-1/2 px-4 lg:px-8">
                  <h2 className="font-heading text-3xl font-bold text-primary mb-4">{dest.name}</h2>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">{dest.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-light p-4 rounded-xl text-center border border-gray-50">
                      <div className="text-accent font-bold text-xl mb-1">{dest.stats.universities}</div>
                      <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Universities</div>
                    </div>
                    <div className="bg-light p-4 rounded-xl text-center border border-gray-50">
                      <div className="text-accent font-bold text-xl mb-1">{dest.stats.students}</div>
                      <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Intl. Students</div>
                    </div>
                    <div className="bg-light p-4 rounded-xl text-center border border-gray-50">
                      <div className="text-accent font-bold text-xl mb-1">{dest.stats.workRights}</div>
                      <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Work Rights</div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-heading font-semibold text-primary mb-3 flex items-center gap-2">
                      <GraduationCap size={20} className="text-gray-400" />
                      Popular Universities
                    </h4>
                    <ul className="space-y-2">
                      {dest.topUnis.map((uni, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-600">
                          <Building2 size={16} className="text-accent/60" />
                          {uni}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition shadow-lg shadow-gray-200">
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
