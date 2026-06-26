import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-mono font-bold text-2xl text-primary tracking-tight">
              Squebefi AI
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#features" className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">
              Features
            </a>
            <a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">
              Pricing
            </a>
            <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium">
              Testimonials
            </a>
            <a
              href="#pricing"
              className="bg-primary text-background px-5 py-2.5 rounded font-medium hover:bg-accent transition-colors duration-200"
            >
              Get Started
            </a>
          </nav>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground hover:text-primary p-2 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-card/95 backdrop-blur-lg border-b border-border transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-4 shadow-xl">
          <a
            href="#features"
            className="block text-foreground/80 hover:text-primary text-base font-medium transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#pricing"
            className="block text-foreground/80 hover:text-primary text-base font-medium transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#testimonials"
            className="block text-foreground/80 hover:text-primary text-base font-medium transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <a
            href="#pricing"
            className="block text-center w-full bg-primary text-background px-4 py-3 rounded font-medium hover:bg-accent transition-colors duration-200 mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
