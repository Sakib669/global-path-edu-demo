"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <>
      {/* Footer CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4"
        >
          <h2 className="font-heading text-4xl font-bold mb-6">Ready to Take the Next Step?</h2>
          <p className="text-gray-300 mb-10 text-lg">Book a free session with our expert counselors and map out your educational future today.</p>
          <Link href="/consultation">
            <button className="bg-accent text-white px-10 py-4 rounded-full font-semibold text-xl hover:bg-red-700 transition shadow-lg shadow-red-900/50">
              Book Free Consultation
            </button>
          </Link>
        </motion.div>
      </section>

      <footer className="bg-[#071530] text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Link href="/" className="font-heading font-bold text-2xl text-white mb-4 block">
            Global<span className="text-accent">Path</span>
          </Link>
          <p>© 2026 GlobalPath Consultancy. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
