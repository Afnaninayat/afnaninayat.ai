import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0F0E] border-t border-[#29312F] py-12 text-[#A7B0AD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="space-y-1 text-center md:text-left">
            <div className="text-lg font-bold text-white tracking-tight flex items-center justify-center md:justify-start space-x-2">
              <span>AFNAN INAYAT</span>
              <span className="w-2 h-2 rounded-full bg-[#B6FF00]"></span>
            </div>
            <div className="text-xs font-mono text-[#6F7975]">
              Software Developer • AI & Computer Vision • Digital Verification
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#121817] border border-[#29312F] text-[#A7B0AD] hover:text-[#B6FF00] hover:border-[#B6FF00]/50 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#121817] border border-[#29312F] text-[#A7B0AD] hover:text-[#B6FF00] hover:border-[#B6FF00]/50 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="mailto:afnaninayat@gmail.com"
              className="p-2.5 rounded-xl bg-[#121817] border border-[#29312F] text-[#A7B0AD] hover:text-[#B6FF00] hover:border-[#B6FF00]/50 transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#121817] border border-[#29312F] text-[#B6FF00] hover:bg-[#B6FF00] hover:text-[#0B0F0E] transition-all ml-4"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-[#29312F]/60 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#6F7975] gap-4">
          <div>
            © 2026 Afnan Inayat. Built with React & Tailwind CSS.
          </div>
          <div>
            Designed with <span className="text-[#B6FF00]">Batsman Pro</span> Visual Identity
          </div>
        </div>

      </div>
    </footer>
  );
}
