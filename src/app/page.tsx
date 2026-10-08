"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Facebook, Linkedin, ArrowRight, Bookmark, BookmarkCheck } from "lucide-react";

// --- Seed Data ---
const DESTINATIONS = [
  {
    id: "uk",
    name: "United Kingdom",
    subtitle: "150+ Partner Universities",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "usa",
    name: "USA",
    subtitle: "Stem & Business Focus",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "canada",
    name: "Canada",
    subtitle: "PGWP Opportunities",
    image: "https://images.unsplash.com/photo-1518627675569-e9d4fb906b1f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "australia",
    name: "Australia",
    subtitle: "High Visa Success Rate",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=800&auto=format&fit=crop"
  }
];

const PROCESS_STEPS = [
  {
    title: "Free Consultation",
    desc: "Profile evaluation and matching with the right countries and courses."
  },
  {
    title: "Application Processing",
    desc: "Document preparation, SOP writing assistance, and fast-track offer letters."
  },
  {
    title: "Visa Assistance",
    desc: "Mock interviews, financial documentation guidance, and visa filing."
  }
];

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  const [savedDestinations, setSavedDestinations] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const stored = localStorage.getItem("savedDestinations");
    if (stored) {
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
    <main className="min-h-screen">
      {/* Top Bar */}
      <div className="bg-primary text-white text-sm py-2 px-4 md:px-8 flex justify-between items-center">
        <div className="flex space-x-4 items-center">
          <span className="flex items-center gap-2"><Phone size={14} /> +880 1234 567 890</span>
          <span className="hidden md:flex items-center gap-2"><Mail size={14} /> info@globalpath.example.com</span>
        </div>
        <div className="flex space-x-4 items-center">
          <a href="#" className="hover:text-accent transition"><Facebook size={16} /></a>
          <a href="#" className="hover:text-accent transition"><Linkedin size={16} /></a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="font-heading font-bold text-2xl text-primary">Global<span className="text-accent">Path</span></span>
            </div>
            <div className="hidden md:flex space-x-8 items-center font-medium">
              <a href="#" className="text-primary hover:text-accent transition">Home</a>
              <a href="#destinations" className="text-gray-600 hover:text-accent transition">Destinations</a>
              <a href="#process" className="text-gray-600 hover:text-accent transition">Our Process</a>
              <button className="bg-accent text-white px-6 py-2.5 rounded-full font-semibold hover:bg-red-700 transition shadow-lg shadow-red-200">
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-pattern min-h-[600px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl text-white"
          >
            <motion.span variants={fadeInUp} className="inline-block py-1 px-3 rounded-full bg-white/20 text-sm font-semibold mb-4 backdrop-blur-sm">
              Empowering Bangladeshi Students
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-heading text-5xl md:text-6xl font-bold leading-tight mb-6">
              Your Journey to <br/>Global Success <span className="text-accent">Starts Here</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
              Expert guidance for studying abroad. From choosing the right course to securing your visa, we're with you every step of the way.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition shadow-xl shadow-red-900/20 text-center">
                Apply for 2026 Intake
              </button>
              <button className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition text-center">
                Explore Courses
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Trust Ticker */}
      <div className="bg-light py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">Recognized By & Partnered With 200+ Institutions</p>
          <div className="flex justify-between items-center opacity-60 grayscale flex-wrap gap-8 px-4">
            <span className="text-xl font-heading font-bold">University of Tech</span>
            <span className="text-xl font-heading font-bold">Global Academy</span>
            <span className="text-xl font-heading font-bold">British Council</span>
            <span className="text-xl font-heading font-bold">ICEF Accredited</span>
            <span className="text-xl font-heading font-bold">State College</span>
          </div>
        </div>
      </div>

      {/* Destinations Section */}
      <section id="destinations" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">Explore Top Study Destinations</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Discover world-class education systems and multicultural environments tailored for international students.</p>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {DESTINATIONS.map((dest) => (
              <motion.div key={dest.id} variants={fadeInUp} className="group relative rounded-2xl overflow-hidden cursor-pointer h-80 shadow-md">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
                
                {/* Save Bookmark Button */}
                {isMounted && (
                  <button 
                    onClick={(e) => { e.stopPropagation(); toggleSave(dest.id); }}
                    className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full transition text-white"
                  >
                    {savedDestinations.includes(dest.id) ? <BookmarkCheck size={20} className="text-accent" /> : <Bookmark size={20} />}
                  </button>
                )}

                <div className="absolute bottom-0 left-0 p-6 w-full z-10">
                  <h3 className="text-white font-heading font-bold text-2xl mb-1">{dest.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{dest.subtitle}</p>
                  <span className="text-accent font-medium flex items-center group-hover:text-white transition">Explore Programs <ArrowRight size={16} className="ml-2" /></span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services / Process Section */}
      <section id="process" className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:w-1/2"
            >
              <motion.h2 variants={fadeInUp} className="font-heading text-4xl font-bold text-primary mb-6">Your Study Abroad Journey Made Simple</motion.h2>
              <motion.p variants={fadeInUp} className="text-gray-600 mb-8 text-lg">We handle the complexities so you can focus on your future. Our step-by-step approach ensures a smooth transition to your dream university.</motion.p>
              
              <div className="space-y-8">
                {PROCESS_STEPS.map((step, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-accent text-accent font-bold font-heading text-xl">{idx + 1}</div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-heading font-semibold text-primary">{step.title}</h4>
                      <p className="text-gray-500 mt-1">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-accent rounded-3xl transform translate-x-4 translate-y-4 opacity-20"></div>
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" className="rounded-3xl relative z-10 w-full object-cover h-[500px] shadow-2xl" alt="Students consulting" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto px-4"
        >
          <h2 className="font-heading text-4xl font-bold mb-6">Ready to Take the Next Step?</h2>
          <p className="text-gray-300 mb-10 text-lg">Book a free session with our expert counselors and map out your educational future today.</p>
          <button className="bg-accent text-white px-10 py-4 rounded-full font-semibold text-xl hover:bg-red-700 transition shadow-lg shadow-red-900/50">
            Book Free Consultation
          </button>
        </motion.div>
      </section>

      <footer className="bg-[#071530] text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="font-heading font-bold text-2xl text-white mb-4 block">Global<span className="text-accent">Path</span></span>
          <p>© 2026 GlobalPath Consultancy. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
