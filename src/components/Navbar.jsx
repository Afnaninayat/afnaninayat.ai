import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Cpu, TrendingUp, Sparkles, Layers, Send } from 'lucide-react';

export default function Navbar({ activeTrack, setActiveTrack }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', track: 'all' },
    { name: 'About', href: '#about', track: 'all' },
    { name: 'Engineering & IC', href: '#engineering', track: 'engineering' },
    { name: 'FYP (Batsman Pro)', href: '#fyp-batsman-pro', track: 'engineering' },
    { name: 'Digital Marketing', href: '#marketing', track: 'marketing' },
    { name: 'Iqbal Jee Case Study', href: '#iqbal-jee', track: 'marketing' },
    { name: 'Experience', href: '#experience', track: 'all' },
    { name: 'Skills', href: '#skills', track: 'all' },
    { name: 'Contact', href: '#contact', track: 'all' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = ['home', 'about', 'engineering', 'fyp-batsman-pro', 'marketing', 'iqbal-jee', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 160;

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#home" className="group flex items-center space-x-2.5 text-lg sm:text-xl font-display font-extrabold tracking-tight">
            <span className="text-white group-hover:text-cyan-accent transition-colors">AFNAN</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent to-violet-accent">INAYAT</span>
            <span className="relative flex h-2.5 w-2.5 ml-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-accent"></span>
            </span>
          </a>

          {/* Dual-Track Quick Filter / Navigation */}
          <div className="hidden lg:flex items-center bg-[#0F1626]/90 backdrop-blur-md px-1.5 py-1 rounded-full border border-white/10 shadow-glass-card">
            <button
              onClick={() => setActiveTrack('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTrack === 'all'
                  ? 'bg-white/15 text-white font-semibold shadow-sm'
                  : 'text-text-muted hover:text-white'
              }`}
            >
              Unified View
            </button>
            <button
              onClick={() => setActiveTrack('engineering')}
              className={`inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTrack === 'engineering'
                  ? 'bg-cyan-accent/20 text-cyan-accent font-semibold border border-cyan-accent/40 shadow-cyan-glow'
                  : 'text-text-muted hover:text-cyan-accent'
              }`}
            >
              <Cpu className="w-3 h-3 text-cyan-accent" />
              <span>Engineering</span>
            </button>
            <button
              onClick={() => setActiveTrack('marketing')}
              className={`inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTrack === 'marketing'
                  ? 'bg-violet-accent/20 text-violet-accent font-semibold border border-violet-accent/40 shadow-violet-glow'
                  : 'text-text-muted hover:text-violet-accent'
              }`}
            >
              <TrendingUp className="w-3 h-3 text-violet-accent" />
              <span>Marketing & Creative</span>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.slice(0, 6).map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'text-white bg-white/10 font-semibold'
                      : 'text-text-secondary hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-accent/15 via-surface to-violet-accent/15 border border-white/15 text-xs font-semibold text-white hover:border-cyan-accent hover:shadow-cyan-glow transition-all duration-300 group"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-surface border border-border text-text-secondary hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-accent" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden glass-panel border-b border-white/10 px-4 pt-4 pb-6 space-y-3 mt-3 animate-in slide-in-from-top duration-200">
          
          {/* Mobile Track Switcher */}
          <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-background border border-border">
            <button
              onClick={() => setActiveTrack('all')}
              className={`py-2 text-[11px] font-medium rounded-lg text-center ${
                activeTrack === 'all' ? 'bg-white/15 text-white font-semibold' : 'text-text-muted'
              }`}
            >
              Unified
            </button>
            <button
              onClick={() => setActiveTrack('engineering')}
              className={`py-2 text-[11px] font-medium rounded-lg text-center ${
                activeTrack === 'engineering' ? 'bg-cyan-accent/20 text-cyan-accent font-semibold' : 'text-text-muted'
              }`}
            >
              Engineering
            </button>
            <button
              onClick={() => setActiveTrack('marketing')}
              className={`py-2 text-[11px] font-medium rounded-lg text-center ${
                activeTrack === 'marketing' ? 'bg-violet-accent/20 text-violet-accent font-semibold' : 'text-text-muted'
              }`}
            >
              Marketing
            </button>
          </div>

          {/* Links */}
          <div className="space-y-1 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'bg-cyan-accent/15 text-cyan-accent font-semibold border border-cyan-accent/30'
                    : 'text-text-secondary hover:text-white hover:bg-surface-elevated'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-gradient-to-r from-cyan-accent to-blue-500 text-[#080B11] font-bold text-sm shadow-cyan-glow"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
