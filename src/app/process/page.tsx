"use client";

import { motion } from "framer-motion";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  PhoneCall, 
  Search, 
  FileText, 
  GraduationCap, 
  Plane,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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
    <main className="min-h-screen bg-white">
      <TopBar />
      <Navbar />

      {/* Hero Header */}
      <div className="bg-light py-24 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-sm font-bold mb-6 tracking-wide uppercase"
          >
            How We Work
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            A Transparent Path to Your <br/><span className="text-accent">Global Education</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg"
          >
            Our proven 5-step framework removes the guesswork from studying abroad. From the first hello to your first day of class, we are with you.
          </motion.p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

          <div className="space-y-16">
            {DETAILED_PROCESS_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              const Icon = step.icon;
              
              return (
                <motion.div 
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Content Box */}
                  <div className="w-full md:w-1/2 px-4 md:px-12">
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-light flex items-center justify-center text-accent md:hidden">
                          <Icon size={24} />
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-primary">
                          <span className="text-gray-300 mr-2">0{index + 1}.</span>
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-6">{step.desc}</p>
                      <ul className="space-y-3">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-center text-sm font-medium text-gray-700">
                            <CheckCircle2 size={18} className="text-accent mr-3 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white border-4 border-accent rounded-full items-center justify-center z-20 shadow-lg">
                    <Icon size={24} className="text-primary" />
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
      <div className="bg-primary py-20 text-center">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="max-w-3xl mx-auto px-4"
        >
          <h2 className="font-heading text-3xl font-bold text-white mb-6">Ready to start step one?</h2>
          <p className="text-gray-300 mb-8 text-lg">Book a free consultation session with our experts today and kickstart your journey.</p>
          <Link href="/consultation">
            <button className="bg-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition shadow-xl shadow-red-900/50">
              Book Free Consultation
            </button>
          </Link>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
