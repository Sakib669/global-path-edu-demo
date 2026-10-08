"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "Our Process", href: "/process" }
  ];

  return (
    <>
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${scrolled ? "pt-4" : "pt-8"}`}>
        <nav className={`mx-auto w-[95%] max-w-5xl rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${scrolled ? "bg-white/80 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20 py-2" : "bg-transparent py-4"}`}>
          <div className="px-6 md:px-8">
            <div className="flex justify-between items-center">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="font-heading font-extrabold text-2xl tracking-tight text-primary">
                  Global<span className="text-accent">Path.</span>
                </Link>
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-1 items-center bg-gray-50/50 p-1 rounded-full border border-gray-100">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                      pathname === link.href 
                        ? "bg-white shadow-[0_2px_10px_rgb(0,0,0,0.04)] text-primary" 
                        : "text-gray-500 hover:text-primary hover:bg-gray-100/50"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              <div className="hidden md:block">
                <Link href="/consultation">
                  <button className="group relative inline-flex items-center justify-center gap-3 bg-primary text-white px-2 py-2 pr-6 rounded-full font-semibold text-sm transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-gray-900 active:scale-[0.98]">
                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-105 group-hover:translate-x-1">
                      <ArrowRight size={14} />
                    </span>
                    Get Started
                  </button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-primary hover:bg-gray-100 transition-colors focus:outline-none"
                >
                  <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                  </motion.div>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl pt-32 px-6 pb-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-6 py-5 rounded-2xl text-2xl font-bold transition-all duration-500 ${
                      pathname === link.href ? "bg-primary/5 text-primary" : "text-gray-400 hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                className="mt-8"
              >
                <Link href="/consultation" onClick={() => setIsOpen(false)}>
                  <button className="w-full group inline-flex items-center justify-between bg-primary text-white p-2 rounded-full font-bold text-lg hover:bg-gray-900 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]">
                    <span className="pl-6">Book Free Consultation</span>
                    <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                      <ArrowRight size={20} />
                    </span>
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
