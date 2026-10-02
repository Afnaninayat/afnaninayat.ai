import React from 'react';
import { ArrowRight, ArrowUpRight, Cpu, TrendingUp, Sparkles, CheckCircle2, Terminal, Code2, Play, Award, Zap, Github, Linkedin, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import afnanAvatar from '../assets/images/afnan_avatar.jpg';
import { impactMetrics } from '../data/impactMetrics';

export default function Hero({ setActiveTrack }) {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-accent/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-violet-accent/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Positioning & Narrative */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Status Indicator Pill */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-surface border border-white/10 text-xs font-mono text-text-secondary shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-accent"></span>
              </span>
              <span className="text-cyan-accent font-semibold">Available for Roles & Projects</span>
              <span className="text-white/20">|</span>
              <span className="text-text-muted">BS Computer Science Graduate</span>
            </motion.div>

            {/* Main Title & Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <div className="text-sm sm:text-base font-mono font-medium text-cyan-accent tracking-wide uppercase flex items-center space-x-2">
                <span>Afnan Inayat</span>
                <span className="w-1.5 h-1.5 rounded-full bg-violet-accent"></span>
                <span className="text-violet-accent">Multidisciplinary Portfolio</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.12]">
                Building at the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-accent to-violet-accent">
                  intersection of technology,
                </span> <br />
                creativity & performance.
              </h1>
            </motion.div>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed font-normal"
            >
              I work across <span className="text-white font-medium">Digital IC Design</span>, AI-driven product thinking, content creation, <span className="text-white font-medium">performance digital marketing</span>, and e-commerce — combining engineering precision with creative execution.
            </motion.p>

            {/* Dual-Path Visual Entry Cards (Engineering vs Marketing) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1"
            >
              {/* Engineering Pathway Card */}
              <a
                href="#engineering"
                onClick={() => setActiveTrack('engineering')}
                className="group relative p-4 sm:p-5 rounded-2xl bg-surface/90 border border-cyan-accent/30 hover:border-cyan-accent hover:shadow-cyan-glow transition-all duration-300 block text-left bg-gradient-to-br from-surface to-surface-elevated"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div className="p-2 rounded-xl bg-cyan-accent/15 text-cyan-accent group-hover:scale-110 transition-transform">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-cyan-accent flex items-center space-x-1">
                    <span>EXPLORE TRACK</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-accent transition-colors">
                  Engineering & Technology
                </h3>
                <p className="text-xs text-text-muted mt-1 leading-normal">
                  RTL • ASIC • FPGA • FYP • Embedded / Systems Thinking
                </p>
              </a>

              {/* Marketing Pathway Card */}
              <a
                href="#marketing"
                onClick={() => setActiveTrack('marketing')}
                className="group relative p-4 sm:p-5 rounded-2xl bg-surface/90 border border-violet-accent/30 hover:border-violet-accent hover:shadow-violet-glow transition-all duration-300 block text-left bg-gradient-to-br from-surface to-surface-elevated"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div className="p-2 rounded-xl bg-violet-accent/15 text-violet-accent group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-violet-accent flex items-center space-x-1">
                    <span>EXPLORE TRACK</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-violet-accent transition-colors">
                  Digital Marketing & Creative
                </h3>
                <p className="text-xs text-text-muted mt-1 leading-normal">
                  Social Media • Content • Meta Ads • Shopify • SEO • AI
                </p>
              </a>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <a
                href="#fyp-batsman-pro"
                className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-accent to-blue-500 text-[#080B11] font-bold text-sm hover:opacity-95 transition-all shadow-cyan-glow transform hover:-translate-y-0.5"
              >
                <span>Featured FYP Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#iqbal-jee"
                className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-accent to-fuchsia-600 text-white font-bold text-sm hover:opacity-95 transition-all shadow-violet-glow transform hover:-translate-y-0.5"
              >
                <span>Iqbal Jee Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl bg-surface border border-white/10 text-sm font-semibold text-text-secondary hover:text-white hover:border-white/25 transition-all"
              >
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Verified Social Presence Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center space-x-2.5 pt-1 text-xs font-mono text-text-muted"
            >
              <span>Connect:</span>
              <a
                href="https://github.com/Afnaninayat"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-surface border border-white/10 text-text-secondary hover:text-cyan-accent hover:border-cyan-accent/50 transition-colors"
                aria-label="GitHub Profile @Afnaninayat"
                title="GitHub: @Afnaninayat"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/afnaninayat"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-surface border border-white/10 text-text-secondary hover:text-violet-accent hover:border-violet-accent/50 transition-colors"
                aria-label="LinkedIn Profile in/afnaninayat"
                title="LinkedIn: in/afnaninayat"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/afnaninayatt"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-surface border border-white/10 text-text-secondary hover:text-pink-400 hover:border-pink-500/50 transition-colors"
                aria-label="Instagram Profile @afnaninayatt"
                title="Instagram: @afnaninayatt"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/afnaninayat"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-surface border border-white/10 text-text-secondary hover:text-blue-400 hover:border-blue-500/50 transition-colors"
                aria-label="Facebook Profile Afnan Inayat"
                title="Facebook: Afnan Inayat"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </motion.div>

          </div>

          {/* Right Column: High-End Interactive Digital Identity Module */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[420px]"
            >
              {/* Outer decorative ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-accent via-blue-500 to-violet-accent rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>

              {/* Main Card Container */}
              <div className="relative rounded-3xl bg-surface border border-white/10 p-5 shadow-2xl overflow-hidden backdrop-blur-xl">
                
                {/* Header status bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                    <span className="ml-1 text-[11px] font-mono text-text-muted">afnan_identity.sys</span>
                  </div>
                  <div className="inline-flex items-center space-x-1.5 text-[10px] font-mono text-cyan-accent bg-cyan-accent/10 px-2.5 py-1 rounded-full border border-cyan-accent/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent animate-pulse"></span>
                    <span>ONLINE & DEPLOYED</span>
                  </div>
                </div>

                {/* Avatar Display */}
                <div className="relative rounded-2xl overflow-hidden aspect-square border border-white/10 mb-4 bg-background">
                  <img
                    src={afnanAvatar}
                    alt="Afnan Inayat 3D Digital Identity"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-75"></div>
                  
                  {/* Floating Identity Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-surface/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">Afnan Inayat</div>
                      <div className="text-[10px] text-text-secondary font-mono">CS Graduate • UIT University</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-mono text-cyan-accent font-semibold">2026 GRADUATE</div>
                      <div className="text-[10px] text-text-muted">Karachi, PK</div>
                    </div>
                  </div>
                </div>

                {/* Dual-Domain Matrix Badges */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  
                  <div className="p-3 rounded-xl bg-surface-elevated border border-cyan-accent/20">
                    <div className="flex items-center space-x-1.5 text-cyan-accent mb-1">
                      <Cpu className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider">Engineering</span>
                    </div>
                    <div className="text-xs font-semibold text-white">Digital IC & Systems</div>
                    <div className="text-[10px] text-text-muted mt-0.5">RTL • UVM • AMBA • FYP</div>
                  </div>

                  <div className="p-3 rounded-xl bg-surface-elevated border border-violet-accent/20">
                    <div className="flex items-center space-x-1.5 text-violet-accent mb-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider">Marketing</span>
                    </div>
                    <div className="text-xs font-semibold text-white">Growth & Brand</div>
                    <div className="text-[10px] text-text-muted mt-0.5">Meta Ads • Shopify • 3x ROAS</div>
                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

        {/* Real Verified Impact Metrics Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-text-muted uppercase tracking-wider flex items-center space-x-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-accent" />
              <span>Verified Results & Milestones</span>
            </span>
            <span className="text-[11px] font-mono text-text-muted hidden sm:inline">
              Evidence-based metrics across engineering & marketing tracks
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {impactMetrics.map((metric) => (
              <div
                key={metric.id}
                className="p-4 rounded-2xl bg-surface/80 border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div
                  className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight"
                  style={{ color: metric.color }}
                >
                  {metric.value}
                </div>
                <div className="text-xs font-semibold text-white mt-1">
                  {metric.label}
                </div>
                <div className="text-[10px] text-text-muted mt-0.5">
                  {metric.sublabel}
                </div>
              </div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
