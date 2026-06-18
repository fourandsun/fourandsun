"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useActiveSection } from "@/context/ActiveSectionContext";

const navLinks = [
  { label: "About", id: "about" },
  { label: "Works", id: "works" },
  { label: "Crew", id: "crew" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const { activeId, scrollTo } = useActiveSection();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/70"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo("hero")} className="flex items-center">
          <Image
            src="/fourandsun-horizontal-logo.png"
            alt="fourandsun"
            height={36}
            width={160}
            style={{ height: 36, width: "auto" }}
            priority
          />
        </button>

        <nav className="flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`relative text-sm font-medium transition-colors duration-300 ${
                activeId === link.id
                  ? "text-amber-500"
                  : "text-slate-700 hover:text-amber-500"
              }`}
            >
              {link.label}
              {activeId === link.id && (
                <motion.span
                  layoutId="nav-dot"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-400"
                />
              )}
            </button>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
