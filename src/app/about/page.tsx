"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Target, Eye, Trophy, Users, ShieldCheck, HeartHandshake } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function AboutPage() {
  return (
    <main className="min-h-[100dvh] bg-white">
      <Navbar />

      {/* Hero Header */}
      <div className="bg-primary pt-40 pb-24 lg:pt-52 lg:pb-32 relative overflow-hidden rounded-b-[3rem] lg:rounded-b-[4rem]">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-bold tracking-widest uppercase mb-8">
              About Us
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
              Empowering Students <br className="hidden md:block"/>
              <span className="text-white/40">Globally Since 2008</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              We are a premier educational consultancy firm dedicated to guiding ambitious minds toward world-class universities and global success.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Overview & Stats */}
      <section className="py-24 lg:py-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="w-full lg:w-1/2">
            <h2 className="font-heading text-4xl lg:text-5xl font-extrabold text-primary mb-6 tracking-tight">Our Story</h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Founded with the vision of bridging the gap between local talent and global opportunities, GlobalPath has grown into one of the most trusted names in international education consultancy.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              With partnerships spanning across the UK, USA, Canada, and Australia, we provide end-to-end support—from career counseling and university selection to visa processing and pre-departure briefings.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-1.5 bg-gray-50 rounded-[2rem] ring-1 ring-black/5">
                <div className="bg-white p-6 rounded-[calc(2rem-0.375rem)] shadow-sm">
                  <div className="text-4xl font-extrabold text-primary mb-2 font-heading">16+</div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Years Exp.</div>
                </div>
              </div>
              <div className="p-1.5 bg-gray-50 rounded-[2rem] ring-1 ring-black/5">
                <div className="bg-white p-6 rounded-[calc(2rem-0.375rem)] shadow-sm">
                  <div className="text-4xl font-extrabold text-accent mb-2 font-heading">10k+</div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Visas Approved</div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="w-full lg:w-1/2">
            <div className="p-2 bg-gray-50 rounded-[3rem] ring-1 ring-black/5 h-[600px]">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" alt="Team" className="w-full h-full object-cover rounded-[calc(3rem-0.5rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,1)]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-24 lg:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div variants={fadeInUp} className="p-2 bg-white rounded-[3rem] ring-1 ring-black/5 shadow-sm">
              <div className="bg-gray-50 p-10 lg:p-16 rounded-[calc(3rem-0.5rem)] h-full">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-primary mb-8 shadow-sm ring-1 ring-black/5">
                  <Target size={32} />
                </div>
                <h3 className="font-heading text-3xl font-extrabold text-primary mb-4 tracking-tight">Our Mission</h3>
                <p className="text-gray-500 text-lg leading-relaxed">
                  To provide transparent, ethical, and high-quality educational consultancy services, ensuring every student finds the right academic environment to thrive and achieve their career aspirations.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-2 bg-white rounded-[3rem] ring-1 ring-black/5 shadow-sm">
              <div className="bg-gray-50 p-10 lg:p-16 rounded-[calc(3rem-0.5rem)] h-full">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-accent mb-8 shadow-sm ring-1 ring-black/5">
                  <Eye size={32} />
                </div>
                <h3 className="font-heading text-3xl font-extrabold text-primary mb-4 tracking-tight">Our Vision</h3>
                <p className="text-gray-500 text-lg leading-relaxed">
                  To be the global leader in international student recruitment by consistently exceeding expectations, fostering strong institutional partnerships, and transforming lives through education.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Strengths / Why Choose Us */}
      <section className="py-24 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="font-heading text-4xl lg:text-5xl font-extrabold text-primary mb-16 tracking-tight">Our Core Strengths</motion.h2>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={fadeInUp} className="p-8 rounded-[2rem] border border-gray-100 hover:shadow-xl transition-all duration-500 bg-white group">
              <div className="w-14 h-14 mx-auto rounded-full bg-gray-50 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck size={28} />
              </div>
              <h4 className="font-heading text-xl font-bold text-primary mb-3">Ethical Guidance</h4>
              <p className="text-gray-500">100% transparent process with no hidden fees. We prioritize the student&apos;s best interest above all else.</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="p-8 rounded-[2rem] border border-gray-100 hover:shadow-xl transition-all duration-500 bg-white group">
              <div className="w-14 h-14 mx-auto rounded-full bg-gray-50 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
                <Users size={28} />
              </div>
              <h4 className="font-heading text-xl font-bold text-primary mb-3">Expert Counselors</h4>
              <p className="text-gray-500">Our team consists of British Council and ICEF certified consultants with years of industry experience.</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="p-8 rounded-[2rem] border border-gray-100 hover:shadow-xl transition-all duration-500 bg-white group">
              <div className="w-14 h-14 mx-auto rounded-full bg-gray-50 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
                <HeartHandshake size={28} />
              </div>
              <h4 className="font-heading text-xl font-bold text-primary mb-3">360° Support</h4>
              <p className="text-gray-500">From IELTS preparation to airport pickup, we provide comprehensive support at every step.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
