"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Search, MapPin, Building2, Clock, DollarSign, ArrowRight } from "lucide-react";
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

const COURSES = [
  { id: 1, name: "BSc Computer Science", uni: "University of Toronto", country: "Canada", duration: "4 Years", fee: "$45,000/yr", category: "Engineering" },
  { id: 2, name: "MSc Data Science", uni: "Imperial College London", country: "UK", duration: "1 Year", fee: "£32,000/yr", category: "Technology" },
  { id: 3, name: "MBA Global Business", uni: "University of Melbourne", country: "Australia", duration: "2 Years", fee: "$65,000/yr", category: "Business" },
  { id: 4, name: "BSc Nursing", uni: "McGill University", country: "Canada", duration: "4 Years", fee: "$38,000/yr", category: "Healthcare" },
  { id: 5, name: "BA Media & Communications", uni: "University of Sydney", country: "Australia", duration: "3 Years", fee: "$42,000/yr", category: "Arts" },
  { id: 6, name: "MSc Artificial Intelligence", uni: "Stanford University", country: "USA", duration: "2 Years", fee: "$55,000/yr", category: "Technology" }
];

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  const filteredCourses = COURSES.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.uni.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === "" || c.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-[100dvh] bg-gray-50">
      <Navbar />

      <div className="pt-40 pb-20 lg:pt-52 lg:pb-24 bg-primary rounded-b-[3rem] text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 initial="hidden" animate="visible" variants={fadeInUp} className="font-heading text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Find Your <span className="text-white/40">Perfect Course</span>
          </motion.h1>
          
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.2 }} className="p-2 bg-white/5 border border-white/10 rounded-3xl max-w-4xl mx-auto mt-12 backdrop-blur-md">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center gap-3 px-6 py-4 bg-white rounded-[calc(1.5rem-0.375rem)] focus-within:ring-2 focus-within:ring-primary/20">
                <Search className="text-gray-400" size={20} />
                <input type="text" placeholder="Search course or university..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="bg-transparent border-none outline-none w-full text-primary font-medium" />
              </div>
              <div className="w-full md:w-64 flex items-center gap-3 px-6 py-4 bg-white rounded-[calc(1.5rem-0.375rem)] focus-within:ring-2 focus-within:ring-primary/20">
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="bg-transparent border-none outline-none w-full text-primary font-medium cursor-pointer appearance-none">
                  <option value="">All Categories</option>
                  <option value="Technology">Technology</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Business">Business</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Arts">Arts</option>
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <motion.div key={course.id} variants={fadeInUp} className="p-1.5 bg-white rounded-[2rem] ring-1 ring-black/5 hover:bg-gray-100 transition-colors duration-500 shadow-sm">
                <div className="bg-white rounded-[calc(2rem-0.375rem)] p-8 shadow-[0_2px_10px_rgb(0,0,0,0.02)] h-full flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/5 text-accent text-xs font-bold uppercase tracking-wider mb-4">
                      {course.category}
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-primary mb-3 line-clamp-2">{course.name}</h3>
                    <div className="space-y-2 mb-8">
                      <p className="text-gray-500 text-sm font-medium flex items-center gap-3">
                        <Building2 size={16} className="text-gray-400" /> {course.uni}
                      </p>
                      <p className="text-gray-500 text-sm font-medium flex items-center gap-3">
                        <MapPin size={16} className="text-gray-400" /> {course.country}
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-50 grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Duration</p>
                      <p className="text-primary font-bold flex items-center gap-1.5"><Clock size={14} className="text-accent" /> {course.duration}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Est. Fee</p>
                      <p className="text-primary font-bold flex items-center gap-1.5"><DollarSign size={14} className="text-accent" /> {course.fee}</p>
                    </div>
                  </div>

                  <Link href="/application" className="w-full">
                    <button className="w-full group inline-flex items-center justify-between bg-gray-50 text-primary p-1.5 pl-6 rounded-full font-bold text-sm hover:bg-primary hover:text-white transition-all duration-500">
                      Apply Now
                      <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary transition-transform duration-500 group-hover:scale-105 shadow-sm">
                        <ArrowRight size={16} />
                      </span>
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
