"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] } }
};

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    level: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      const existing = localStorage.getItem("consultations");
      const consultations = existing ? JSON.parse(existing) : [];
      consultations.push({ ...formData, date: new Date().toISOString() });
      localStorage.setItem("consultations", JSON.stringify(consultations));
      
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", destination: "", level: "", message: "" });
    }, 1500);
  };

  return (
    <main className="min-h-[100dvh] bg-white">
      <Navbar />

      <div className="py-32 lg:py-48 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-2 bg-gray-50 ring-1 ring-black/5 rounded-[3rem] lg:rounded-[4rem]">
          <div className="bg-white rounded-[calc(3rem-0.5rem)] lg:rounded-[calc(4rem-0.5rem)] shadow-[0_8px_40px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col lg:flex-row border border-gray-50">
            
            {/* Left Side - Info */}
            <div className="lg:w-5/12 bg-primary p-12 lg:p-20 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-center">
                <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-bold tracking-widest uppercase mb-8 w-max">
                  Free Session
                </motion.div>
                <motion.h2 
                  initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.1 }}
                  className="font-heading text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-[1.1]"
                >
                  Let&apos;s map out <br/> <span className="text-white/40">your future.</span>
                </motion.h2>
                <motion.p 
                  initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.2 }}
                  className="text-white/60 mb-16 text-lg font-medium leading-relaxed"
                >
                  Fill out the form and our senior education counselors will contact you within 24 hours to schedule your free consultation session.
                </motion.p>

                <div className="space-y-10">
                  <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.3 }} className="flex items-start gap-6 group">
                    <div className="p-4 bg-white/5 rounded-2xl ring-1 ring-white/10 group-hover:bg-white/10 transition-colors"><Phone className="text-white/80" size={24} /></div>
                    <div>
                      <h4 className="font-bold text-lg text-white">Call Us Directly</h4>
                      <p className="text-white/50 mt-1 font-medium tracking-wide">+880 1234 567890</p>
                    </div>
                  </motion.div>
                  
                  <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.4 }} className="flex items-start gap-6 group">
                    <div className="p-4 bg-white/5 rounded-2xl ring-1 ring-white/10 group-hover:bg-white/10 transition-colors"><Mail className="text-white/80" size={24} /></div>
                    <div>
                      <h4 className="font-bold text-lg text-white">Email Us</h4>
                      <p className="text-white/50 mt-1 font-medium tracking-wide">info@globalpath.com.bd</p>
                    </div>
                  </motion.div>

                  <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.5 }} className="flex items-start gap-6 group">
                    <div className="p-4 bg-white/5 rounded-2xl ring-1 ring-white/10 group-hover:bg-white/10 transition-colors"><MapPin className="text-white/80" size={24} /></div>
                    <div>
                      <h4 className="font-bold text-lg text-white">Visit Office</h4>
                      <p className="text-white/50 mt-1 font-medium tracking-wide">Gulshan 1, Dhaka, Bangladesh</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:w-7/12 p-8 lg:p-20">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                  className="h-full flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-8">
                    <CheckCircle2 size={48} className="text-green-500" />
                  </div>
                  <h3 className="font-heading text-4xl font-extrabold text-primary mb-4 tracking-tight">Request Submitted!</h3>
                  <p className="text-gray-500 text-lg mb-10 max-w-md font-medium">
                    Thank you for reaching out. One of our expert counselors will get in touch with you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="bg-gray-50 text-primary font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors ring-1 ring-black/5"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
                  onSubmit={handleSubmit} className="space-y-8"
                >
                  <h3 className="font-heading text-3xl font-bold text-primary mb-10 tracking-tight">Request a Free Session</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Full Name</label>
                      <div className="p-1.5 bg-gray-50 rounded-2xl ring-1 ring-black/5 focus-within:ring-primary/20 transition-shadow">
                        <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-white rounded-[calc(1rem-0.375rem)] px-5 py-4 focus:outline-none text-primary font-medium" placeholder="John Doe" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Email Address</label>
                      <div className="p-1.5 bg-gray-50 rounded-2xl ring-1 ring-black/5 focus-within:ring-primary/20 transition-shadow">
                        <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-white rounded-[calc(1rem-0.375rem)] px-5 py-4 focus:outline-none text-primary font-medium" placeholder="john@example.com" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Phone Number</label>
                      <div className="p-1.5 bg-gray-50 rounded-2xl ring-1 ring-black/5 focus-within:ring-primary/20 transition-shadow">
                        <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-white rounded-[calc(1rem-0.375rem)] px-5 py-4 focus:outline-none text-primary font-medium" placeholder="+880 1..." />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Destination</label>
                      <div className="p-1.5 bg-gray-50 rounded-2xl ring-1 ring-black/5 focus-within:ring-primary/20 transition-shadow">
                        <select required name="destination" value={formData.destination} onChange={handleChange} className="w-full bg-white rounded-[calc(1rem-0.375rem)] px-5 py-4 focus:outline-none text-primary font-medium cursor-pointer appearance-none">
                          <option value="">Select a country</option>
                          <option value="uk">United Kingdom</option>
                          <option value="usa">United States</option>
                          <option value="canada">Canada</option>
                          <option value="australia">Australia</option>
                          <option value="other">Other / Undecided</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Study Level</label>
                    <div className="p-1.5 bg-gray-50 rounded-2xl ring-1 ring-black/5 focus-within:ring-primary/20 transition-shadow">
                      <select required name="level" value={formData.level} onChange={handleChange} className="w-full bg-white rounded-[calc(1rem-0.375rem)] px-5 py-4 focus:outline-none text-primary font-medium cursor-pointer appearance-none">
                        <option value="">Select study level</option>
                        <option value="bachelors">Bachelor&apos;s Degree</option>
                        <option value="masters">Master&apos;s Degree</option>
                        <option value="phd">PhD / Doctorate</option>
                        <option value="diploma">Diploma / Certificate</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Message</label>
                    <div className="p-1.5 bg-gray-50 rounded-2xl ring-1 ring-black/5 focus-within:ring-primary/20 transition-shadow">
                      <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-white rounded-[calc(1rem-0.375rem)] px-5 py-4 focus:outline-none text-primary font-medium resize-none" placeholder="Tell us a bit about your background and goals..."></textarea>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full group relative inline-flex items-center justify-between gap-6 bg-primary text-white p-2 pl-8 rounded-full font-bold text-lg hover:bg-gray-900 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] disabled:opacity-70 disabled:pointer-events-none mt-4"
                  >
                    <span>{isSubmitting ? "Submitting..." : "Submit Request"}</span>
                    <span className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <ArrowRight size={24} />
                      )}
                    </span>
                  </button>
                </motion.form>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
