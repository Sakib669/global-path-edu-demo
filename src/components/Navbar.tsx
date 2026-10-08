"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
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
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Destinations", href: "/destinations" },
    { name: "Universities", href: "/universities" },
    { name: "Courses", href: "/courses" },
    { name: "Blog", href: "/blog" }
  ];

  return (
    <>
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${scrolled ? "pt-4" : "pt-8"}`}>
        <nav className={`mx-auto w-[98%] max-w-7xl rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${scrolled ? "bg-white/90 backdrop-blur-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/20 py-3" : "bg-white/50 backdrop-blur-md py-4 shadow-sm"}`}>
          <div className="px-6 md:px-8">
            <div className="flex justify-between items-center">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="font-heading font-extrabold text-2xl tracking-tight text-primary">
                  Global<span className="text-accent">Path.</span>
                </Link>
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden xl:flex space-x-1 items-center bg-gray-50/80 p-1.5 rounded-full border border-gray-100/50 shadow-[inset_0_1px_1px_rgba(255,255,255,1)]">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                      pathname === link.href 
                        ? "bg-white shadow-[0_2px_15px_rgb(0,0,0,0.06)] text-primary ring-1 ring-black/5" 
                        : "text-gray-500 hover:text-primary hover:bg-white/60"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              <div className="hidden xl:flex items-center gap-3">
                <Link href="/application">
                  <button className="px-6 py-3 rounded-full font-bold text-sm text-primary hover:bg-gray-100 transition-colors">
                    Apply Now
                  </button>
                </Link>
                <Link href="/consultation">
                  <button className="group relative inline-flex items-center justify-center gap-3 bg-primary text-white p-1.5 pr-6 rounded-full font-bold text-sm transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-gray-900 active:scale-[0.98] shadow-lg shadow-primary/20">
                    <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-105 group-hover:translate-x-1">
                      <ArrowRight size={16} />
                    </span>
                    Free Consultation
                  </button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="xl:hidden flex items-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-12 h-12 rounded-full bg-white shadow-sm ring-1 ring-black/5 flex items-center justify-center text-primary hover:bg-gray-50 transition-colors focus:outline-none"
                >
                  <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl pt-36 px-6 pb-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-2 max-w-lg mx-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.05, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-6 py-5 rounded-3xl text-2xl font-extrabold transition-all duration-500 ${
                      pathname === link.href ? "bg-primary/5 text-primary ring-1 ring-primary/10" : "text-gray-400 hover:text-primary hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5, ease: [0.32, 0.72, 0, 1] }} className="mt-8 flex flex-col gap-4">
                <Link href="/application" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-gray-100 text-primary p-5 rounded-2xl font-bold text-lg hover:bg-gray-200 transition-colors">
                    Submit Application
                  </button>
                </Link>
                <Link href="/consultation" onClick={() => setIsOpen(false)}>
                  <button className="w-full group inline-flex items-center justify-between bg-primary text-white p-3 pl-8 rounded-full font-bold text-lg hover:bg-gray-900 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]">
                    <span>Book Consultation</span>
                    <span className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                      <ArrowRight size={24} />
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
