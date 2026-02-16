"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Control body scroll when menu is open (simple, no animations)
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => {
  setIsOpen((prev) => !prev);
  };

  const scrollToSection = (id) => {
    setIsOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      // adjust for fixed header offset if needed
      window.scrollBy(0, -80);
    }
  };

  const downloadResume = () => {
    // Path to the PDF file in your public folder
    const pdfPath = "/resume/Mueez_Resume.pdf";

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "Mueez_Resume.pdf"; // Name that will appear when downloading
    link.target = "_blank";

    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-zinc-900 py-3 shadow-lg" : "bg-zinc-900 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-emerald-400">
          <span className="text-white">Mueez ur </span>Rehman
        </a>

  <nav className="hidden md:flex space-x-8">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-zinc-300 hover:text-emerald-400 transition-colors capitalize"
            >
              {item}
            </button>
          ))}
          <Button
            className="bg-emerald-500 hover:bg-emerald-600 text-white"
            onClick={downloadResume}
          >
            Resume
          </Button>
        </nav>

        <button
          className="md:hidden text-zinc-100 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Render a React-managed backdrop instead of mutating the DOM directly.
          Backdrop is only shown on mobile when `isOpen` is true. */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-zinc-900/60 z-40 md:hidden"
          onClick={toggleMenu}
          aria-hidden
        />
      )}

      <div
        className={`mobile-menu fixed top-0 right-0 h-full w-4/5 bg-zinc-800 z-50 md:hidden shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full bg-zinc-800 p-6">
          <div className="flex justify-end">
            <button onClick={toggleMenu} aria-label="Close menu">
              <X size={24} className="text-zinc-100" />
            </button>
          </div>
          <nav className="flex flex-col space-y-6 mt-8">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-zinc-300 hover:text-emerald-400 transition-colors text-xl capitalize"
              >
                {item}
              </button>
            ))}
            <Button
              className="bg-emerald-500 hover:bg-emerald-600 text-white mt-4"
              onClick={downloadResume}
            >
              Resume
            </Button>
          </nav>
          <div className="mt-auto">
            <p className="text-zinc-400 text-sm">
              © {new Date().getFullYear()} Mueez ur Rehman
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
