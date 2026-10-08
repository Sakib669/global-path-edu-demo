"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  PhoneCall, 
  Search, 
  FileText, 
  GraduationCap, 
  Plane,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] } }
};

const DETAILED_PROCESS_STEPS = [
  {
    title: "Initial Consultation",
    desc: "We discuss your academic background, career goals, and budget to find the perfect destination and course for you.",
    icon: PhoneCall,
    details: ["Profile evaluation", "Career counseling", "Budget assessment"]
  },
  {
    title: "University & Course Selection",
    desc: "Based on your profile, we shortlist universities that align with your aspirations and have a high acceptance rate.",
    icon: Search,
    details: ["Shortlisting universities", "Course comparison", "Scholarship opportunities"]
  },
  {
    title: "Application Processing",
    desc: "Our experts help you prepare a strong application, including SOPs, LORs, and resume, ensuring all requirements are met.",
    icon: FileText,
    details: ["SOP & LOR guidance", "Document verification", "Application submission"]
  },
  {
    title: "Offer & Acceptance",
    desc: "Once you receive offers, we help you choose the best one and guide you through the acceptance and deposit process.",
    icon: GraduationCap,
    details: ["Offer evaluation", "Interview preparation", "Tuition deposit processing"]
  },
  {
    title: "Visa Application & Departure",
    desc: "Comprehensive visa guidance, financial documentation check, and pre-departure briefing for a smooth transition.",
    icon: Plane,
    details: ["Visa documentation", "Mock visa interviews", "Pre-departure briefing"]
  }
];

export default function ProcessPage() {
  return (
    <main className="min-h-[100dvh] bg-white">
      <Navbar />

      {/* Hero Header */}
      <div className="bg-gray-50 pt-40 pb-24 lg:pt-52 lg:pb-32 border-b border-gray-100 rounded-b-[3rem] lg:rounded-b-[4rem]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-8"
          >
            How We Work
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="font-heading text-5xl md:text-7xl font-extrabold text-primary mb-8 tracking-tight leading-[1.1]"
          >
            A Transparent Path to Your <br className="hidden md:block"/>
            <span className="text-gray-300">Global Education</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl mx-auto"
          >
            Our proven 5-step framework removes the guesswork from studying abroad. From the first hello to your first day of class, we are with you.
          </motion.p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-24 lg:py-40 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-gray-200"></div>

          <div className="space-y-12 lg:space-y-24">
            {DETAILED_PROCESS_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              const Icon = step.icon;
              
              return (
                <motion.div 
                  key={index}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
                  className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Content Box (Double Bezel) */}
                  <div className="w-full md:w-1/2 px-0 md:px-12 py-6">
                    <div className="p-1.5 bg-gray-50 rounded-[2.5rem] ring-1 ring-black/5 hover:bg-gray-100/50 transition-colors duration-500">
                      <div className="bg-white p-8 lg:p-10 rounded-[calc(2.5rem-0.375rem)] shadow-[0_2px_20px_rgb(0,0,0,0.02)] border border-gray-50">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center text-primary md:hidden">
                            <Icon size={24} />
                          </div>
                          <h3 className="font-heading text-3xl font-bold text-primary tracking-tight">
                            <span className="text-gray-200 mr-3 text-4xl">0{index + 1}.</span>
                            <br className="md:hidden"/>{step.title}
                          </h3>
                        </div>
                        <p className="text-gray-500 mb-8 text-lg leading-relaxed">{step.desc}</p>
                        <ul className="space-y-4">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-center text-sm font-semibold text-gray-700 bg-gray-50/50 p-3 rounded-2xl">
                              <CheckCircle2 size={18} className="text-primary/40 mr-4 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white ring-1 ring-black/5 rounded-full items-center justify-center z-20 shadow-xl shadow-black/5">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
                      <Icon size={24} className="text-primary" />
                    </div>
                  </div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-1/2"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 lg:py-40 text-center">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="max-w-3xl mx-auto px-4"
        >
          <div className="p-2 bg-gray-50 ring-1 ring-black/5 rounded-[3rem] inline-block w-full max-w-2xl mx-auto">
            <div className="bg-white p-12 lg:p-20 rounded-[calc(3rem-0.5rem)] shadow-[0_4px_30px_rgb(0,0,0,0.03)] border border-gray-50">
              <h2 className="font-heading text-4xl lg:text-5xl font-extrabold text-primary mb-6 tracking-tight">Ready to start step one?</h2>
              <p className="text-gray-500 mb-10 text-lg font-medium">Book a free consultation session with our experts today and kickstart your journey.</p>
              <Link href="/consultation">
                <button className="group relative inline-flex items-center justify-center gap-4 bg-primary text-white p-2 pr-8 rounded-full font-bold text-lg hover:bg-gray-900 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]">
                  <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-105 group-hover:translate-x-1">
                    <ArrowRight size={20} />
                  </span>
                  Book Free Consultation
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
