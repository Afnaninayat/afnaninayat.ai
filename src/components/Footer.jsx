import React from 'react';
import { Github, Linkedin, Instagram, Facebook, Mail, ArrowUp, Cpu, TrendingUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-white/10 py-14 text-text-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Brand & Summary */}
          <div className="md:col-span-6 space-y-3">
            <div className="text-xl font-display font-extrabold text-white tracking-tight flex items-center space-x-2">
              <span>AFNAN INAYAT</span>
              <span className="w-2 h-2 rounded-full bg-cyan-accent"></span>
            </div>
            
            <p className="text-xs sm:text-sm text-text-muted max-w-md leading-relaxed">
              Computer Science Graduate | Digital IC Design Enthusiast | Digital Marketer | Content Creator | AI-Assisted Creative Strategist.
            </p>

            <div className="flex items-center space-x-3 pt-1">
              <span className="inline-flex items-center space-x-1.5 text-[11px] font-mono text-cyan-accent bg-surface px-2.5 py-1 rounded-full border border-white/5">
                <Cpu className="w-3 h-3" />
                <span>Engineering & RTL</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 text-[11px] font-mono text-violet-accent bg-surface px-2.5 py-1 rounded-full border border-white/5">
                <TrendingUp className="w-3 h-3" />
                <span>Growth & Creative</span>
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-mono text-white uppercase tracking-wider font-semibold">
              Site Navigation
            </div>
            <ul className="space-y-1.5 text-xs text-text-muted">
              <li><a href="#about" className="hover:text-cyan-accent transition-colors">About & Philosophy</a></li>
              <li><a href="#engineering" className="hover:text-cyan-accent transition-colors">Digital IC Design Journey</a></li>
              <li><a href="#fyp-batsman-pro" className="hover:text-cyan-accent transition-colors">Batsman Pro (Flagship FYP)</a></li>
              <li><a href="#marketing" className="hover:text-violet-accent transition-colors">Digital Marketing Portfolio</a></li>
              <li><a href="#iqbal-jee" className="hover:text-violet-accent transition-colors">Iqbal Jee Case Study</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills & Tech Stack</a></li>
            </ul>
          </div>

          {/* Socials & Top Button */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono text-white uppercase tracking-wider font-semibold">
              Connect Directly
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
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
                aria-label="Email Afnan Inayat"
                title="Email: afnaninayat@gmail.com"
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                onClick={scrollToTop}
                className="p-2.5 rounded-xl bg-surface border border-white/10 text-cyan-accent hover:bg-cyan-accent hover:text-[#080B11] transition-all ml-auto"
                aria-label="Scroll to top"
                title="Scroll to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>

            <div className="text-[11px] font-mono text-text-muted pt-1">
              Based in Karachi, Pakistan • Class of 2026
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-text-muted gap-4">
          <div>
            © {new Date().getFullYear()} Afnan Inayat. All rights reserved.
          </div>
          <div className="flex items-center space-x-1">
            <span>Built at the intersection of</span>
            <span className="text-cyan-accent">Engineering</span>
            <span>&</span>
            <span className="text-violet-accent">Creative Strategy</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
