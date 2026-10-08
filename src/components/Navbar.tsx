"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

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
        </div>
      </div>
    </nav>
  );
}
