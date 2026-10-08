"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { CheckCircle2, ArrowRight, UploadCloud } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] } }
};

export default function ApplicationPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      return;
    }
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <main className="min-h-[100dvh] bg-gray-50">
      <Navbar />

      <div className="py-32 lg:py-48 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <motion.h1 initial="hidden" animate="visible" variants={fadeInUp} className="font-heading text-4xl lg:text-5xl font-extrabold text-primary tracking-tight mb-4">
            Student Application
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.1 }} className="text-gray-500 font-medium">
            Fill out the form below to begin your admission process.
          </motion.p>
        </div>

        <div className="p-2 bg-white ring-1 ring-black/5 rounded-[3rem]">
          <div className="bg-gray-50/50 rounded-[calc(3rem-0.5rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,1)] p-8 lg:p-16">
            
            {isSuccess ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 size={48} className="text-green-500" />
                </div>
                <h3 className="font-heading text-3xl font-extrabold text-primary mb-4">Application Submitted!</h3>
                <p className="text-gray-500 font-medium mb-8">Our admission team will review your documents and contact you shortly.</p>
                <button onClick={() => { setIsSuccess(false); setStep(1); }} className="bg-white text-primary font-bold px-8 py-4 rounded-full ring-1 ring-black/5 shadow-sm hover:bg-gray-50 transition">
                  Submit Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Progress Bar */}
                <div className="flex items-center justify-between mb-12 relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 rounded-full -z-10"></div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary rounded-full -z-10 transition-all duration-500" style={{ width: `${((step - 1) / 2) * 100}%` }}></div>
                  
                  {[1, 2, 3].map((num) => (
                    <div key={num} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-500 ${step >= num ? 'bg-primary text-white shadow-lg' : 'bg-white text-gray-400 ring-1 ring-black/5'}`}>
                      {num}
                    </div>
                  ))}
                </div>

                <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
                  
                  {step === 1 && (
                    <div className="space-y-6">
                      <h4 className="font-heading text-xl font-bold text-primary mb-6">Personal Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input required type="text" placeholder="First Name" className="w-full bg-white rounded-2xl px-5 py-4 focus:outline-none ring-1 ring-black/5 focus:ring-primary/20 text-primary font-medium shadow-sm" />
                        <input required type="text" placeholder="Last Name" className="w-full bg-white rounded-2xl px-5 py-4 focus:outline-none ring-1 ring-black/5 focus:ring-primary/20 text-primary font-medium shadow-sm" />
                      </div>
                      <input required type="email" placeholder="Email Address" className="w-full bg-white rounded-2xl px-5 py-4 focus:outline-none ring-1 ring-black/5 focus:ring-primary/20 text-primary font-medium shadow-sm" />
                      <input required type="tel" placeholder="Phone Number" className="w-full bg-white rounded-2xl px-5 py-4 focus:outline-none ring-1 ring-black/5 focus:ring-primary/20 text-primary font-medium shadow-sm" />
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6">
                      <h4 className="font-heading text-xl font-bold text-primary mb-6">Academic & Preferences</h4>
                      <select required className="w-full bg-white rounded-2xl px-5 py-4 focus:outline-none ring-1 ring-black/5 focus:ring-primary/20 text-primary font-medium shadow-sm cursor-pointer appearance-none">
                        <option value="">Highest Qualification</option>
                        <option value="highschool">High School / A-Levels</option>
                        <option value="bachelors">Bachelor&apos;s Degree</option>
                        <option value="masters">Master&apos;s Degree</option>
                      </select>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <select required className="w-full bg-white rounded-2xl px-5 py-4 focus:outline-none ring-1 ring-black/5 focus:ring-primary/20 text-primary font-medium shadow-sm cursor-pointer appearance-none">
                          <option value="">Target Country</option>
                          <option value="uk">United Kingdom</option>
                          <option value="usa">USA</option>
                          <option value="canada">Canada</option>
                        </select>
                        <input required type="text" placeholder="Preferred Course (e.g. Computer Science)" className="w-full bg-white rounded-2xl px-5 py-4 focus:outline-none ring-1 ring-black/5 focus:ring-primary/20 text-primary font-medium shadow-sm" />
                      </div>
                      <input type="text" placeholder="English Test Score (IELTS/TOEFL) - Optional" className="w-full bg-white rounded-2xl px-5 py-4 focus:outline-none ring-1 ring-black/5 focus:ring-primary/20 text-primary font-medium shadow-sm" />
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6">
                      <h4 className="font-heading text-xl font-bold text-primary mb-6">Supporting Documents</h4>
                      <div className="border-2 border-dashed border-gray-300 rounded-[2rem] p-10 text-center bg-white hover:bg-gray-50 transition cursor-pointer flex flex-col items-center justify-center gap-4 group">
                        <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition">
                          <UploadCloud size={32} />
                        </div>
                        <div>
                          <p className="font-bold text-primary text-lg">Click to upload documents</p>
                          <p className="text-sm text-gray-400 mt-1">Upload Passport, Transcripts, and CV (PDF, JPG)</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-10 flex justify-between">
                    {step > 1 ? (
                      <button type="button" onClick={() => setStep(step - 1)} className="px-8 py-4 rounded-full font-bold text-gray-500 hover:bg-white ring-1 ring-black/5 shadow-sm transition">
                        Back
                      </button>
                    ) : <div></div>}
                    
                    <button type="submit" disabled={isSubmitting} className="group relative inline-flex items-center justify-between gap-6 bg-primary text-white p-2 pl-8 rounded-full font-bold text-lg hover:bg-gray-900 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] disabled:opacity-70">
                      <span>{isSubmitting ? "Processing..." : step === 3 ? "Submit Application" : "Continue"}</span>
                      <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                        <ArrowRight size={20} />
                      </span>
                    </button>
                  </div>
                </motion.div>
              </form>
            )}
            
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
