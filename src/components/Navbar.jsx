import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Code, Sparkles } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#journey' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="group flex items-center space-x-2 text-xl font-bold tracking-tight">
            <span className="text-white group-hover:text-[#B6FF00] transition-colors">AFNAN</span>
            <span className="text-[#B6FF00]">INAYAT</span>
            <span className="w-2 h-2 rounded-full bg-[#B6FF00] animate-pulse"></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 bg-[#121817]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#29312F]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#B6FF00] text-[#0B0F0E] font-semibold shadow-[0_0_12px_rgba(182,255,0,0.4)]'
                      : 'text-[#A7B0AD] hover:text-white hover:bg-[#1A211F]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Let's Talk CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#121817] border border-[#29312F] text-sm font-medium text-white hover:border-[#B6FF00] hover:text-[#B6FF00] transition-all duration-300 group shadow-sm hover:shadow-[0_0_20px_rgba(182,255,0,0.25)]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4 text-[#B6FF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#121817] border border-[#29312F] text-[#A7B0AD] hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#B6FF00]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-[#29312F] px-4 pt-3 pb-6 space-y-2 mt-3 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                activeSection === link.href.substring(1)
                  ? 'bg-[#B6FF00] text-[#0B0F0E] font-semibold'
                  : 'text-[#A7B0AD] hover:text-white hover:bg-[#1A211F]'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-lg bg-[#B6FF00] text-[#0B0F0E] font-semibold text-base"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
