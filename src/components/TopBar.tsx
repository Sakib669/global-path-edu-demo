"use client";
import { Phone, Mail } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-primary text-white text-sm py-2 px-4 md:px-8 flex justify-between items-center">
      <div className="flex space-x-4 items-center">
        <span className="flex items-center gap-2"><Phone size={14} /> +880 1234 567 890</span>
        <span className="hidden md:flex items-center gap-2"><Mail size={14} /> info@globalpath.example.com</span>
      </div>
      <div className="flex space-x-4 items-center">
        <a href="#" className="hover:text-accent transition">Facebook</a>
        <a href="#" className="hover:text-accent transition">LinkedIn</a>
      </div>
    </div>
  );
}
