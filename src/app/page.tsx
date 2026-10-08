"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Bookmark, 
  BookmarkCheck, 
  CheckCircle2, 
  GraduationCap, 
  Globe2, 
  Award, 
  MessageCircle,
  Search,
  Calendar,
  Users
} from "lucide-react";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

// --- Seed Data ---
const DESTINATIONS = [
  { id: "uk", name: "United Kingdom", subtitle: "160+ Universities", image: "https://images.unsplash.com/photo-1513635269975-5969336ac1cb?q=80&w=1000&auto=format&fit=crop" },
  { id: "usa", name: "United States", subtitle: "4000+ Universities", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e2815cb?q=80&w=1000&auto=format&fit=crop" },
  { id: "canada", name: "Canada", subtitle: "High Visa Success", image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=1000&auto=format&fit=crop" },
  { id: "australia", name: "Australia", subtitle: "Top Livable Cities", image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1000&auto=format&fit=crop" }
];

const SERVICES = [
  { title: "Career Counseling", desc: "Expert guidance to choose the right path and university.", icon: Users },
  { title: "University Admission", desc: "Seamless application process for top global institutions.", icon: GraduationCap },
  { title: "Visa Processing", desc: "High success rate with meticulous documentation support.", icon: Award },
  { title: "Pre-Departure", desc: "Briefings and support to ensure a smooth transition abroad.", icon: Globe2 }
];

const STATS = [
  { value: "16+", label: "Years Experience" },
  { value: "10,000+", label: "Successful Students" },
  { value: "500+", label: "Partner Universities" },
  { value: "98%", label: "Visa Success Rate" }
];

const TESTIMONIALS = [
  { name: "Rafiqul Islam", uni: "University of Manchester, UK", text: "GlobalPath made my dream of studying in the UK a reality. Their visa processing team is phenomenal." },
  { name: "Sadia Rahman", uni: "University of Toronto, Canada", text: "From university selection to my flight, the guidance was top-notch. Highly recommended!" },
  { name: "Ahmed Hossain", uni: "Monash University, Australia", text: "I received a 50% scholarship thanks to their expert application tips. Truly the best consultancy." }
];

// --- Animations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Home() {
  const [savedDestinations, setSavedDestinations] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["United Kingdom", "USA", "Canada", "Australia"];

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
    const stored = localStorage.getItem("savedDestinations");
    if (stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSavedDestinations(JSON.parse(stored));
    }
    
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

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
    <main className="min-h-screen relative font-sans">
      <TopBar />
      <Navbar />

      {/* Floating WhatsApp CTA */}
      <a 
        href="#"
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition hover:scale-110 flex items-center justify-center"
      >
        <MessageCircle size={28} />
      </a>

      {/* Hero Section (Modern Split Layout) */}
      <section className="bg-gradient-to-b from-light to-white overflow-hidden py-16 lg:py-24 relative">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Content */}
            <motion.div 
              initial="hidden" animate="visible" variants={staggerContainer}
              className="lg:w-1/2 relative z-10"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-6 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                Top Educational Consultant in BD
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-[1.1] mb-6">
                Study in <br />
                <span className="text-accent h-[1.2em] inline-block overflow-hidden relative w-full">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentWord}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -50, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="absolute"
                    >
                      {words[currentWord]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-gray-600 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
                Shape your future with world-class education. We provide end-to-end guidance from university selection to visa approval with a 98% success rate.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Link href="/consultation">
                  <button className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-900 transition shadow-xl shadow-gray-200 flex items-center justify-center gap-2">
                    Start Your Journey <ArrowRight size={20} />
                  </button>
                </Link>
                <Link href="/destinations">
                  <button className="w-full sm:w-auto bg-white border-2 border-gray-200 text-primary px-8 py-4 rounded-xl font-bold text-lg hover:border-primary transition flex items-center justify-center">
                    Explore Countries
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Images (Composition) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 relative h-[500px] lg:h-[600px] w-full"
            >
              <div className="absolute inset-0 bg-primary rounded-3xl transform rotate-3 scale-[0.95] opacity-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop" 
                alt="Happy students" 
                className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl z-10"
              />
              {/* Floating Stat Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-gray-100 flex items-center gap-4"
              >
                <div className="bg-accent/10 p-3 rounded-full text-accent">
                  <Award size={32} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary font-heading">16+ Years</div>
                  <div className="text-sm text-gray-500 font-medium">Of Excellence</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Search Bar */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-30">
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 flex flex-col md:flex-row gap-4 items-center border border-gray-50">
          <div className="flex-1 w-full flex items-center gap-3 px-4 py-3 bg-light rounded-xl border border-gray-100 focus-within:border-accent transition">
            <Search className="text-gray-400" size={20} />
            <input type="text" placeholder="What do you want to study?" className="bg-transparent border-none outline-none w-full text-gray-700" />
          </div>
          <div className="flex-1 w-full flex items-center gap-3 px-4 py-3 bg-light rounded-xl border border-gray-100">
            <Globe2 className="text-gray-400" size={20} />
            <select className="bg-transparent border-none outline-none w-full text-gray-700 cursor-pointer">
              <option value="">Any Destination</option>
              <option value="uk">United Kingdom</option>
              <option value="usa">USA</option>
              <option value="canada">Canada</option>
              <option value="australia">Australia</option>
            </select>
          </div>
          <button className="w-full md:w-auto bg-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition">
            Find Course
          </button>
        </div>
      </div>

      {/* Our Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">Our Premium Services</h2>
            <p className="text-gray-500 text-lg">We offer comprehensive 360-degree support to ensure your study abroad journey is completely hassle-free.</p>
          </div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={index} variants={fadeInUp} 
                  className="group p-8 rounded-3xl bg-light hover:bg-primary transition duration-300 border border-gray-100 hover:border-primary shadow-sm hover:shadow-xl text-center"
                >
                  <div className="w-20 h-20 mx-auto bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition shadow-sm">
                    <Icon size={32} className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-primary group-hover:text-white mb-3 transition">{service.title}</h3>
                  <p className="text-gray-500 group-hover:text-gray-300 transition">{service.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="p-6"
              >
                <div className="text-4xl md:text-5xl font-extrabold font-heading text-accent mb-2">{stat.value}</div>
                <div className="text-gray-300 font-semibold uppercase tracking-wider text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-heading text-4xl font-bold text-primary mb-4">Top Study Destinations</h2>
              <p className="text-gray-500 text-lg">Explore the most sought-after countries offering world-class education, excellent lifestyle, and post-study work opportunities.</p>
            </div>
            <Link href="/destinations" className="inline-flex items-center gap-2 text-accent font-bold hover:text-red-700 transition group">
              View All Countries <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
            </Link>
          </div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {DESTINATIONS.map((dest) => (
              <motion.div key={dest.id} variants={fadeInUp} className="group relative rounded-3xl overflow-hidden h-[400px] shadow-lg cursor-pointer">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition"></div>
                
                {isMounted && (
                  <button 
                    onClick={(e) => { e.stopPropagation(); toggleSave(dest.id); }}
                    className="absolute top-4 right-4 z-10 p-3 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full transition text-white"
                  >
                    {savedDestinations.includes(dest.id) ? <BookmarkCheck size={20} className="text-accent" /> : <Bookmark size={20} />}
                  </button>
                )}

                <div className="absolute bottom-0 left-0 p-8 w-full z-10 transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                  <h3 className="text-white font-heading font-extrabold text-3xl mb-2">{dest.name}</h3>
                  <p className="text-gray-300 font-medium mb-6 opacity-0 group-hover:opacity-100 transition duration-300 delay-100">{dest.subtitle}</p>
                  <div className="inline-flex items-center gap-2 text-white font-semibold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition duration-300 delay-200">
                    Explore <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">Student Success Stories</h2>
            <p className="text-gray-500 text-lg">Hear from our students who are now studying at their dream universities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="bg-light p-8 rounded-3xl relative border border-gray-100"
              >
                <div className="text-accent mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">&quot;{t.text}&quot;</p>
                <div>
                  <h4 className="font-bold text-primary font-heading text-lg">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.uni}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event CTA */}
      <section className="py-20 bg-accent text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                <Calendar size={16} /> Upcoming Event
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Global Education Fair 2026</h2>
              <p className="text-white/80 text-lg max-w-xl">Meet representatives from 50+ universities worldwide. On-spot assessment and application fee waivers available.</p>
            </div>
            <div className="shrink-0">
              <button className="bg-white text-accent px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-xl w-full md:w-auto">
                Register for Free
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
