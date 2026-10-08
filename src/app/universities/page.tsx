"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Search, MapPin, Building2, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const UNIVERSITIES = [
  { id: 1, name: "University of Oxford", country: "United Kingdom", location: "Oxford, England", courses: 250, image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Stanford University", country: "United States", location: "Stanford, California", courses: 180, image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "University of Toronto", country: "Canada", location: "Toronto, Ontario", courses: 300, image: "https://images.unsplash.com/photo-1606148386129-455b9e5d4a13?q=80&w=800&auto=format&fit=crop" },
  { id: 4, name: "University of Melbourne", country: "Australia", location: "Melbourne, Victoria", courses: 210, image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=800&auto=format&fit=crop" },
  { id: 5, name: "Imperial College London", country: "United Kingdom", location: "London, England", courses: 150, image: "https://images.unsplash.com/photo-1513635269975-5969336ac1cb?q=80&w=800&auto=format&fit=crop" },
  { id: 6, name: "McGill University", country: "Canada", location: "Montreal, Quebec", courses: 280, image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=800&auto=format&fit=crop" }
];

export default function UniversitiesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const filteredUnis = UNIVERSITIES.filter(uni => {
    const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = selectedCountry === "" || uni.country === selectedCountry;
    return matchesSearch && matchesCountry;
  });

  return (
    <main className="min-h-[100dvh] bg-white">
      <Navbar />

      {/* Header */}
      <div className="pt-40 pb-20 lg:pt-52 lg:pb-24 bg-gray-50 border-b border-gray-100 rounded-b-[3rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 initial="hidden" animate="visible" variants={fadeInUp} className="font-heading text-5xl md:text-6xl font-extrabold text-primary mb-6 tracking-tight">
            Partner <span className="text-gray-300">Universities</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.1 }} className="text-gray-500 text-lg max-w-2xl mb-12 font-medium">
            Browse through our global network of top-ranked institutions. Find the perfect campus for your academic journey.
          </motion.p>
          
          {/* Search & Filter Bar */}
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.2 }} className="p-2 bg-white rounded-3xl ring-1 ring-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] max-w-4xl">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center gap-3 px-6 py-4 bg-gray-50 rounded-[calc(1.5rem-0.375rem)] focus-within:ring-1 focus-within:ring-primary/20 transition-all">
                <Search className="text-gray-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Search university name..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-transparent border-none outline-none w-full text-primary font-medium" 
                />
              </div>
              <div className="w-full md:w-64 flex items-center gap-3 px-6 py-4 bg-gray-50 rounded-[calc(1.5rem-0.375rem)] focus-within:ring-1 focus-within:ring-primary/20 transition-all">
                <MapPin className="text-gray-400" size={20} />
                <select 
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="bg-transparent border-none outline-none w-full text-primary font-medium cursor-pointer appearance-none"
                >
                  <option value="">All Countries</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" animate="visible" variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredUnis.map((uni) => (
              <motion.div key={uni.id} variants={fadeInUp} className="group p-1.5 bg-gray-50 rounded-[2.5rem] ring-1 ring-black/5 hover:bg-gray-100 transition-colors duration-500">
                <div className="bg-white rounded-[calc(2.5rem-0.375rem)] overflow-hidden h-full shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col">
                  <div className="h-48 overflow-hidden relative">
                    <img src={uni.image} alt={uni.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                      <MapPin size={12} className="text-accent" /> {uni.country}
                    </div>
                  </div>
                  <div className="p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-primary mb-2 line-clamp-1">{uni.name}</h3>
                      <p className="text-gray-500 text-sm font-medium flex items-center gap-2 mb-6">
                        <Building2 size={16} /> {uni.location}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                      <div className="flex items-center gap-2 text-primary font-bold text-sm">
                        <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center">
                          <GraduationCap size={16} />
                        </div>
                        {uni.courses} Courses
                      </div>
                      <Link href={`/application`}>
                        <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-gray-900 hover:scale-105 transition-all active:scale-95 shadow-md shadow-primary/20">
                          <ArrowRight size={18} />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {filteredUnis.length === 0 && (
              <div className="col-span-full py-20 text-center">
                <p className="text-gray-500 text-lg font-medium">No universities found matching your search criteria.</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
