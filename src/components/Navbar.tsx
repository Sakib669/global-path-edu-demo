"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "Our Process", href: "/process" }
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-heading font-bold text-2xl text-primary">
              Global<span className="text-accent">Path</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition ${pathname === link.href ? "text-accent font-semibold" : "text-gray-600 hover:text-accent"}`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/consultation">
              <button className="bg-accent text-white px-6 py-2.5 rounded-full font-semibold hover:bg-red-700 transition shadow-lg shadow-red-200">
                Free Consultation
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 rounded-md text-base font-medium transition ${
                  pathname === link.href ? "bg-accent/10 text-accent font-bold" : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link href="/consultation" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-accent text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition shadow-lg shadow-red-200">
                  Free Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
