"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

  // Track scroll position (for header background)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detect active section
      const sections = navItems.map((id) =>
        document.getElementById(id)
      );
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        if (
          section &&
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md border-b border-gray-800 shadow-lg"
          : "bg-white/20 backdrop-blur-lg border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-6">
        {/* Logo */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#00FFB3]">
          Kadagi
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 text-[var(--foreground)]">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href={`#${item}`}
                  scroll={false}
                  className={`cursor-pointer transition-colors ${
                    activeSection === item
                      ? "text-[#00FFB3] font-semibold"
                      : "hover:text-[#00FFB3]"
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FiX size={28} className="text-[var(--foreground)]" />
          ) : (
            <FiMenu size={28} className="text-[var(--foreground)]" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-black/90 backdrop-blur-md border-t border-gray-800">
          <ul className="flex flex-col items-center space-y-4 p-6">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href={`#${item}`}
                  scroll={false}
                  className={`cursor-pointer transition-colors ${
                    activeSection === item
                      ? "text-[#00FFB3] font-semibold"
                      : "hover:text-[#00FFB3]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
