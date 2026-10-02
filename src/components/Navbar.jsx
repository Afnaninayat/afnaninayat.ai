import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  Cpu, 
  TrendingUp, 
  Sparkles, 
  Layers, 
  Send, 
  User, 
  Briefcase, 
  Award, 
  Code2, 
  Mail, 
  ChevronRight,
  Github, 
  Linkedin,
  Instagram,
  Facebook,
  PhoneCall
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ activeTrack, setActiveTrack }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Full catalog of navigation destinations with associated track
  const allNavLinks = [
    { name: 'Home', href: '#home', track: 'all', icon: Sparkles },
    { name: 'About', href: '#about', track: 'all', icon: User },
    { name: 'Digital IC Journey', href: '#engineering', track: 'engineering', icon: Cpu },
    { name: 'Batsman Pro (FYP)', href: '#fyp-batsman-pro', track: 'engineering', icon: Code2 },
    { name: 'Technical Projects', href: '#technical-projects', track: 'engineering', icon: Layers },
    { name: 'Digital Marketing', href: '#marketing', track: 'marketing', icon: TrendingUp },
    { name: 'Iqbal Jee Case Study', href: '#iqbal-jee', track: 'marketing', icon: Sparkles },
    { name: 'Marketing Experience', href: '#experience', track: 'marketing', icon: Briefcase },
    { name: 'Skills & Stack', href: '#skills', track: 'all', icon: Award },
    { name: 'Certifications', href: '#certifications', track: 'all', icon: Award },
    { name: 'Contact', href: '#contact', track: 'all', icon: Mail },
  ];

  // Dynamic desktop links curated by active track for ideal density & zero horizontal overflow
  const getDesktopLinks = () => {
    if (activeTrack === 'engineering') {
      return [
        { name: 'About', href: '#about', track: 'all' },
        { name: 'Digital IC', href: '#engineering', track: 'engineering' },
        { name: 'Batsman Pro', href: '#fyp-batsman-pro', track: 'engineering' },
        { name: 'Projects', href: '#technical-projects', track: 'engineering' },
        { name: 'Skills', href: '#skills', track: 'all' },
        { name: 'Contact', href: '#contact', track: 'all' },
      ];
    }
    if (activeTrack === 'marketing') {
      return [
        { name: 'About', href: '#about', track: 'all' },
        { name: 'Marketing', href: '#marketing', track: 'marketing' },
        { name: 'Iqbal Jee', href: '#iqbal-jee', track: 'marketing' },
        { name: 'Experience', href: '#experience', track: 'marketing' },
        { name: 'Skills', href: '#skills', track: 'all' },
        { name: 'Contact', href: '#contact', track: 'all' },
      ];
    }
    // Unified 'all' view
    return [
      { name: 'About', href: '#about', track: 'all' },
      { name: 'Digital IC', href: '#engineering', track: 'engineering' },
      { name: 'Batsman Pro', href: '#fyp-batsman-pro', track: 'engineering' },
      { name: 'Marketing', href: '#marketing', track: 'marketing' },
      { name: 'Experience', href: '#experience', track: 'marketing' },
      { name: 'Skills', href: '#skills', track: 'all' },
      { name: 'Contact', href: '#contact', track: 'all' },
    ];
  };

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll spy & navbar background transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = [
        'home',
        'about',
        'results',
        'engineering',
        'fyp-batsman-pro',
        'technical-projects',
        'marketing',
        'iqbal-jee',
        'experience',
        'ai-workflow',
        'creator-lab',
        'skills',
        'certifications',
        'contact',
      ];

      const scrollPosition = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTrack]);

  // Click handler that synchronizes track switching before smooth scrolling
  const handleNavClick = (e, link) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    // If target requires a specific track that is currently unmounted, activate it
    if (link.track && link.track !== 'all' && activeTrack !== 'all' && activeTrack !== link.track) {
      setActiveTrack(link.track);
    }

    const targetId = link.href.replace('#', '');
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({
          top: Math.max(0, y),
          behavior: 'smooth',
        });
        setActiveSection(targetId);
      }
    }, 60);
  };

  const desktopLinks = getDesktopLinks();

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-2.5 sm:py-3 shadow-lg shadow-black/40'
            : 'bg-background/80 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none py-3 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Brand Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, { href: '#home', track: 'all' })}
              className="group flex items-center space-x-2 text-base sm:text-lg lg:text-xl font-display font-extrabold tracking-tight shrink-0 focus:outline-none"
              aria-label="Afnan Inayat - Return to Home"
            >
              <span className="text-white group-hover:text-cyan-accent transition-colors">AFNAN</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent to-violet-accent">
                INAYAT
              </span>
              <span className="relative flex h-2 w-2 ml-0.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-accent"></span>
              </span>
            </a>

            {/* Desktop Track Filter (Segmented Control) */}
            <div className="hidden lg:flex items-center bg-[#0F1626]/90 backdrop-blur-md p-1 rounded-full border border-white/10 shadow-glass-card shrink-0">
              <button
                onClick={() => setActiveTrack('all')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeTrack === 'all'
                    ? 'bg-white/15 text-white font-semibold shadow-sm'
                    : 'text-text-muted hover:text-white'
                }`}
                title="View All Content"
              >
                Unified
              </button>
              <button
                onClick={() => setActiveTrack('engineering')}
                className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeTrack === 'engineering'
                    ? 'bg-cyan-accent/20 text-cyan-accent font-semibold border border-cyan-accent/40 shadow-cyan-glow'
                    : 'text-text-muted hover:text-cyan-accent'
                }`}
                title="Filter by Engineering & Digital IC"
              >
                <Cpu className="w-3 h-3 text-cyan-accent" />
                <span>Engineering</span>
              </button>
              <button
                onClick={() => setActiveTrack('marketing')}
                className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeTrack === 'marketing'
                    ? 'bg-violet-accent/20 text-violet-accent font-semibold border border-violet-accent/40 shadow-violet-glow'
                    : 'text-text-muted hover:text-violet-accent'
                }`}
                title="Filter by Digital Marketing & Growth"
              >
                <TrendingUp className="w-3 h-3 text-violet-accent" />
                <span>Marketing</span>
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5" aria-label="Desktop Navigation">
              {desktopLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all whitespace-nowrap ${
                      isActive
                        ? 'text-white bg-white/10 font-semibold shadow-sm'
                        : 'text-text-secondary hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Action CTA & Mobile Controls */}
            <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
              
              {/* Mobile Active Track Pill (Visible on screens < 1024px) */}
              <button
                onClick={() => {
                  const nextTrack =
                    activeTrack === 'all'
                      ? 'engineering'
                      : activeTrack === 'engineering'
                      ? 'marketing'
                      : 'all';
                  setActiveTrack(nextTrack);
                }}
                className="lg:hidden inline-flex items-center space-x-1.5 px-2.5 py-1.5 rounded-full bg-surface/80 border border-white/10 text-[11px] font-medium text-text-secondary hover:text-white transition-colors"
                title="Tap to toggle track"
                aria-label={`Current Track: ${activeTrack}. Tap to change track.`}
              >
                {activeTrack === 'engineering' && <Cpu className="w-3 h-3 text-cyan-accent" />}
                {activeTrack === 'marketing' && <TrendingUp className="w-3 h-3 text-violet-accent" />}
                {activeTrack === 'all' && <Layers className="w-3 h-3 text-cyan-accent" />}
                <span className="capitalize">{activeTrack === 'all' ? 'Unified' : activeTrack}</span>
              </button>

              {/* Contact CTA Button (Hidden on tiny screens < 640px to maximize space, prominent on sm+) */}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, { href: '#contact', track: 'all' })}
                className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-accent/15 via-surface to-violet-accent/15 border border-white/15 text-xs font-semibold text-white hover:border-cyan-accent hover:shadow-cyan-glow transition-all duration-300 group"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cyan-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Mobile Hamburger Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 sm:p-2.5 rounded-xl bg-surface/90 border border-white/10 text-text-secondary hover:text-white hover:border-cyan-accent/40 focus:outline-none transition-colors"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-cyan-accent" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer & Backdrop with Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Dimming Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-[53px] sm:top-[61px] bg-black/75 backdrop-blur-sm z-40 lg:hidden"
              aria-hidden="true"
            />

            {/* Scrollable Mobile Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="fixed inset-x-0 top-[53px] sm:top-[61px] bottom-0 z-50 lg:hidden flex flex-col bg-[#0A0E17]/95 backdrop-blur-2xl border-t border-white/10 overflow-y-auto overscroll-contain shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
            >
              <div className="px-4 sm:px-6 py-5 space-y-6 max-w-lg mx-auto w-full pb-10">
                
                {/* Track Switcher Card */}
                <div className="bg-surface/60 rounded-2xl p-3.5 border border-white/10 space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-mono text-text-muted px-1">
                    <span className="uppercase tracking-wider">Portfolio Track Filter</span>
                    <span className="text-cyan-accent font-semibold">{activeTrack.toUpperCase()}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5 bg-[#080B11] p-1 rounded-xl border border-white/5">
                    <button
                      onClick={() => setActiveTrack('all')}
                      className={`py-2 px-1 text-xs font-medium rounded-lg text-center transition-all ${
                        activeTrack === 'all'
                          ? 'bg-white/20 text-white font-semibold shadow-sm'
                          : 'text-text-muted hover:text-white'
                      }`}
                    >
                      Unified
                    </button>
                    <button
                      onClick={() => setActiveTrack('engineering')}
                      className={`py-2 px-1 text-xs font-medium rounded-lg text-center transition-all flex items-center justify-center space-x-1 ${
                        activeTrack === 'engineering'
                          ? 'bg-cyan-accent/20 text-cyan-accent font-semibold border border-cyan-accent/40 shadow-cyan-glow'
                          : 'text-text-muted hover:text-cyan-accent'
                      }`}
                    >
                      <Cpu className="w-3 h-3 shrink-0" />
                      <span>Engineering</span>
                    </button>
                    <button
                      onClick={() => setActiveTrack('marketing')}
                      className={`py-2 px-1 text-xs font-medium rounded-lg text-center transition-all flex items-center justify-center space-x-1 ${
                        activeTrack === 'marketing'
                          ? 'bg-violet-accent/20 text-violet-accent font-semibold border border-violet-accent/40 shadow-violet-glow'
                          : 'text-text-muted hover:text-violet-accent'
                      }`}
                    >
                      <TrendingUp className="w-3 h-3 shrink-0" />
                      <span>Marketing</span>
                    </button>
                  </div>
                  <p className="text-[11px] text-text-muted px-1">
                    {activeTrack === 'all' && 'Showing both engineering hardware projects and digital marketing results.'}
                    {activeTrack === 'engineering' && 'Focusing exclusively on Digital IC, RTL, FPGA & Technical projects.'}
                    {activeTrack === 'marketing' && 'Focusing exclusively on Performance Marketing, Rebranding & Case Studies.'}
                  </p>
                </div>

                {/* Navigation Sections */}
                <div className="space-y-1">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-text-muted px-2 pb-1">
                    Navigation Menu
                  </div>
                  {allNavLinks.map((link) => {
                    const isActive = activeSection === link.href.substring(1);
                    const IconComponent = link.icon;
                    const isTrackRelated =
                      link.track === 'all' || link.track === activeTrack || activeTrack === 'all';

                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link)}
                        className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition-all ${
                          isActive
                            ? 'bg-cyan-accent/15 text-cyan-accent font-semibold border border-cyan-accent/30 shadow-sm'
                            : 'text-text-secondary hover:text-white hover:bg-surface-elevated'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`p-1.5 rounded-lg ${
                              isActive
                                ? 'bg-cyan-accent/20 text-cyan-accent'
                                : 'bg-surface border border-white/5 text-text-muted'
                            }`}
                          >
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span>{link.name}</span>
                        </div>

                        <div className="flex items-center space-x-2">
                          {link.track === 'engineering' && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-accent/10 text-cyan-accent border border-cyan-accent/20">
                              IC & Eng
                            </span>
                          )}
                          {link.track === 'marketing' && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-violet-accent/10 text-violet-accent border border-violet-accent/20">
                              Marketing
                            </span>
                          )}
                          <ChevronRight className="w-4 h-4 text-text-muted opacity-60" />
                        </div>
                      </a>
                    );
                  })}
                </div>

                {/* Drawer Footer Actions */}
                <div className="pt-2 space-y-3">
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, { href: '#contact', track: 'all' })}
                    className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-accent to-blue-500 text-[#080B11] font-bold text-sm shadow-cyan-glow transition-transform active:scale-[0.99]"
                  >
                    <span>Get In Touch / Hire Me</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  {/* Direct Contact & Social Links */}
                  <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
                    <a
                      href="https://github.com/Afnaninayat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-surface border border-white/10 text-text-muted hover:text-cyan-accent hover:border-cyan-accent transition-colors"
                      aria-label="GitHub Profile @Afnaninayat"
                      title="GitHub: @Afnaninayat"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href="https://linkedin.com/in/afnaninayat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-surface border border-white/10 text-text-muted hover:text-violet-accent hover:border-violet-accent transition-colors"
                      aria-label="LinkedIn Profile in/afnaninayat"
                      title="LinkedIn: in/afnaninayat"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="https://instagram.com/afnaninayatt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-surface border border-white/10 text-text-muted hover:text-pink-400 hover:border-pink-500 transition-colors"
                      aria-label="Instagram Profile @afnaninayatt"
                      title="Instagram: @afnaninayatt"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.facebook.com/afnaninayat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-surface border border-white/10 text-text-muted hover:text-blue-400 hover:border-blue-500 transition-colors"
                      aria-label="Facebook Profile Afnan Inayat"
                      title="Facebook: Afnan Inayat"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href="mailto:afnaninayat@gmail.com"
                      className="p-2.5 rounded-xl bg-surface border border-white/10 text-text-muted hover:text-cyan-accent hover:border-cyan-accent transition-colors"
                      aria-label="Email Afnan"
                      title="Email: afnaninayat@gmail.com"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                  
                  <p className="text-center text-[11px] font-mono text-text-muted pt-1">
                    Afnan Inayat • Karachi, Pakistan
                  </p>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
