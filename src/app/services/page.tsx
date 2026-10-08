"use client";

import { motion } from "framer-motion";
import { 
  GraduationCap, 
  BookOpen, 
  FileText, 
  Award, 
  Plane, 
  HeartHandshake, 
  Compass, 
  Briefcase, 
  MoreHorizontal,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: GraduationCap,
    title: "University Admission",
    description: "End-to-end assistance for gaining admission to top-tier universities worldwide.",
  },
  {
    icon: BookOpen,
    title: "Course Selection",
    description: "Expert guidance to find the program that aligns with your career aspirations and academic background.",
  },
  {
    icon: FileText,
    title: "Application Processing",
    description: "Meticulous preparation and tracking of your applications to ensure the highest chance of acceptance.",
  },
  {
    icon: Award,
    title: "Scholarship Guidance",
    description: "Identify and apply for financial aid, grants, and merit-based scholarships tailored to your profile.",
  },
  {
    icon: Plane,
    title: "Visa Guidance",
    description: "Comprehensive support for student visa applications, interview preparation, and documentation.",
  },
  {
    icon: HeartHandshake,
    title: "Pre-Departure Support",
    description: "Briefings on culture, accommodation, and travel to ensure a smooth transition to your new country.",
  },
  {
    icon: Compass,
    title: "Student Counselling",
    description: "One-on-one sessions to resolve doubts, address concerns, and build your confidence.",
  },
  {
    icon: Briefcase,
    title: "Career Guidance",
    description: "Align your international education with long-term professional success and global opportunities.",
  },
  {
    icon: MoreHorizontal,
    title: "Additional Consultancy",
    description: "Customized support for test prep, language requirements, and specialized programmatic needs.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50/50 pt-32 pb-24 selection:bg-black selection:text-white">
      {/* Hero Section */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center space-x-2 bg-white px-3 py-1 rounded-full ring-1 ring-black/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-xs font-medium uppercase tracking-wider text-gray-900">
              Our Expertise
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 mb-6 leading-[1.1]">
            Comprehensive <br />
            <span className="font-medium">Student Services</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
            From your first consultation to your arrival on campus, our end-to-end services are designed to make your international education journey seamless and successful.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-white rounded-3xl p-8 ring-1 ring-black/5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 ring-1 ring-black/5 group-hover:bg-black group-hover:text-white transition-colors duration-500">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-black text-white rounded-[2rem] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
              Ready to start your journey?
            </h2>
            <p className="text-gray-400 text-lg">
              Book a free consultation with our expert counselors and map out your global education strategy today.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <Link
              href="/consultation"
              className="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-full text-sm font-medium transition-transform hover:scale-105 active:scale-95"
            >
              Book Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
