"use client";

import { motion } from "framer-motion";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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
    
    // Mock API call / save to local storage
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
    <main className="min-h-screen bg-light">
      <TopBar />
      <Navbar />

      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          
          {/* Left Side - Info */}
          <div className="lg:w-5/12 bg-primary p-10 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10">
              <motion.h2 
                initial="hidden" animate="visible" variants={fadeInUp}
                className="font-heading text-3xl lg:text-4xl font-bold mb-6"
              >
                Let&apos;s map out your future.
              </motion.h2>
              <motion.p 
                initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.1 }}
                className="text-gray-300 mb-12 text-lg"
              >
                Fill out the form and our senior education counselors will contact you within 24 hours to schedule your free consultation session.
              </motion.p>

              <div className="space-y-8">
                <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.2 }} className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl"><Phone className="text-accent" size={24} /></div>
                  <div>
                    <h4 className="font-semibold text-lg">Call Us Directly</h4>
                    <p className="text-gray-400 mt-1">+880 1234 567890</p>
                  </div>
                </motion.div>
                
                <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.3 }} className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl"><Mail className="text-accent" size={24} /></div>
                  <div>
                    <h4 className="font-semibold text-lg">Email Us</h4>
                    <p className="text-gray-400 mt-1">info@globalpath.com.bd</p>
                  </div>
                </motion.div>

                <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.4 }} className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl"><MapPin className="text-accent" size={24} /></div>
                  <div>
                    <h4 className="font-semibold text-lg">Visit Office</h4>
                    <p className="text-gray-400 mt-1">Gulshan 1, Dhaka, Bangladesh</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-7/12 p-10 lg:p-16">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <CheckCircle2 size={80} className="text-green-500 mb-6" />
                <h3 className="font-heading text-3xl font-bold text-primary mb-4">Request Submitted!</h3>
                <p className="text-gray-500 text-lg mb-8 max-w-md">
                  Thank you for reaching out. One of our expert counselors will get in touch with you shortly.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="bg-light text-primary font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              <motion.form 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                onSubmit={handleSubmit} className="space-y-6"
              >
                <h3 className="font-heading text-2xl font-bold text-primary mb-8">Request a Free Session</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Full Name</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-light border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Email Address</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-light border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-light border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition" placeholder="+880 1..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Preferred Destination</label>
                    <select required name="destination" value={formData.destination} onChange={handleChange} className="w-full bg-light border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition text-gray-600">
                      <option value="">Select a country</option>
                      <option value="uk">United Kingdom</option>
                      <option value="usa">United States</option>
                      <option value="canada">Canada</option>
                      <option value="australia">Australia</option>
                      <option value="other">Other / Undecided</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Study Level</label>
                  <select required name="level" value={formData.level} onChange={handleChange} className="w-full bg-light border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition text-gray-600">
                    <option value="">Select study level</option>
                    <option value="bachelors">Bachelor&apos;s Degree</option>
                    <option value="masters">Master&apos;s Degree</option>
                    <option value="phd">PhD / Doctorate</option>
                    <option value="diploma">Diploma / Certificate</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Additional Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-light border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition resize-none" placeholder="Tell us a bit about your background and goals..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-accent text-white font-bold py-4 rounded-xl hover:bg-red-700 transition shadow-lg shadow-red-200 disabled:opacity-70 flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    "Submit Request"
                  )}
                </button>
              </motion.form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
