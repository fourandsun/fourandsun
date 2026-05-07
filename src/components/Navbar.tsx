"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useActiveSection } from "@/context/ActiveSectionContext";

const navLinks = [
  { label: "About",     sectionIndex: 1, id: "about" },
  { label: "Mission",   sectionIndex: 2, id: "mission" },
  { label: "Our Works", sectionIndex: 3, id: "products" },
  { label: "Contact",   sectionIndex: 4, id: "contact" },
];

export default function Navbar() {
  const { section, goTo } = useActiveSection();
  const activeId = navLinks.find((l) => l.sectionIndex === section)?.id ?? "";

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-amber-100/50"
      style={{ backgroundColor: "#FDF4EE" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => goTo(0)} className="flex items-center">
          <Image
            src="/horizontal_logo.png"
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
              onClick={() => goTo(link.sectionIndex)}
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
