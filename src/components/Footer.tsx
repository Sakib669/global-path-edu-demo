"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 rounded-t-[3rem] lg:rounded-t-[4rem] mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          <div className="lg:col-span-2">
            <Link href="/" className="font-heading font-extrabold text-4xl tracking-tight text-white mb-6 block">
              Global<span className="text-white/40">Path.</span>
            </Link>
            <p className="text-white/60 text-lg max-w-sm mb-8 leading-relaxed font-medium">
              We guide ambitious students to world-class educational institutions globally, ensuring a transparent and successful journey.
            </p>
            <Link href="/consultation">
              <button className="group relative inline-flex items-center justify-between gap-6 bg-white/10 text-white p-2 pr-8 rounded-full font-bold text-sm hover:bg-white hover:text-primary transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]">
                <span className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-primary/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-105 group-hover:translate-x-1">
                  <ArrowRight size={16} />
                </span>
                Start Your Journey
              </button>
            </Link>
          </div>
          
          <div>
            <h4 className="font-bold text-white text-lg mb-6 tracking-tight">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="/destinations" className="text-white/50 hover:text-white transition-colors font-medium">Study in UK</Link></li>
              <li><Link href="/destinations" className="text-white/50 hover:text-white transition-colors font-medium">Study in USA</Link></li>
              <li><Link href="/destinations" className="text-white/50 hover:text-white transition-colors font-medium">Study in Canada</Link></li>
              <li><Link href="/destinations" className="text-white/50 hover:text-white transition-colors font-medium">Study in Australia</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-lg mb-6 tracking-tight">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/process" className="text-white/50 hover:text-white transition-colors font-medium">Our Process</Link></li>
              <li><Link href="/consultation" className="text-white/50 hover:text-white transition-colors font-medium">Contact Us</Link></li>
              <li><a href="#" className="text-white/50 hover:text-white transition-colors font-medium">Privacy Policy</a></li>
              <li><a href="#" className="text-white/50 hover:text-white transition-colors font-medium">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-sm font-medium tracking-wide">
          <p>&copy; {new Date().getFullYear()} GlobalPath Consultancy. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
