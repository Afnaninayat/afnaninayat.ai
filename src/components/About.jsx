import React from 'react';
import { GraduationCap, MapPin, Target, Sparkles, CheckCircle2, User, Award, Layers, Cpu, TrendingUp, Compass, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-background relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-surface border border-white/10 text-xs font-mono text-cyan-accent">
            <User className="w-3.5 h-3.5" />
            <span>MULTIDISCIPLINARY DNA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            About Afnan Inayat
          </h2>
          <p className="text-text-secondary text-base max-w-2xl">
            Computer science graduate combining technical engineering rigor with high-impact digital marketing, e-commerce execution, and AI-accelerated workflows.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative & The Dual-Domain Advantage */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-text-secondary text-base leading-relaxed"
          >
            <p className="text-lg text-white font-medium">
              I believe the most valuable professionals of the next decade are not one-dimensional specialists, but <span className="text-cyan-accent">polymath builders</span> who can engineer complex systems and communicate them with compelling creative impact.
            </p>

            <p>
              With a formal background in <span className="text-white font-medium">Computer Science from UIT University</span>, I have spent years working deeply across two complementary disciplines that rarely intersect:
            </p>

            {/* The 2 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-surface border border-cyan-accent/25 space-y-2 hover:border-cyan-accent/50 transition-colors">
                <div className="flex items-center space-x-2 text-cyan-accent font-semibold text-sm">
                  <Cpu className="w-4 h-4" />
                  <span>The Engineering Mindset</span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  First-principles logic, micro-architecture design (Verilog, SystemVerilog, AMBA, UVM), computer vision pipelines (YOLO, OpenCV), and verifiable correctness down to clock cycles.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-surface border border-violet-accent/25 space-y-2 hover:border-violet-accent/50 transition-colors">
                <div className="flex items-center space-x-2 text-violet-accent font-semibold text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>The Creative & Growth Engine</span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  Audience psychology, direct-response Meta ad funnels, Shopify e-commerce development, viral short-form video scripting (50K+ organic views), and up to 3x ROAS campaign scaling.
                </p>
              </div>
            </div>

            <p>
              Rather than viewing these as separate paths, each strengthens the other:
              engineering gives my marketing systematic test structures, data-backed optimization, and deep technical empathy; while marketing gives my software and hardware work a relentless focus on usability, user adoption, and real-world value.
            </p>

            {/* AI Philosophy note */}
            <div className="p-4 rounded-xl bg-surface-elevated/70 border border-white/10 flex items-start space-x-3.5">
              <Sparkles className="w-5 h-5 text-cyan-accent shrink-0 mt-0.5" />
              <div className="text-xs text-text-secondary leading-relaxed">
                <strong className="text-white">AI-Assisted Workflow Philosophy:</strong> I leverage state-of-the-art AI models (ChatGPT, Gemini, Claude, Antigravity) not as a shortcut, but as a cognitive amplifier for research, scripting, and synthesis—while applying human taste, domain strategy, and precise quality control to every output.
              </div>
            </div>

          </motion.div>

          {/* Right Column: Profile Specs Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-surface border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                  <Award className="w-5 h-5 text-cyan-accent" />
                  <span>Verified Credentials</span>
                </h3>
                <span className="text-[11px] font-mono text-cyan-accent bg-cyan-accent/10 px-2.5 py-1 rounded-full border border-cyan-accent/30">
                  VERIFIED PROFILE
                </span>
              </div>

              <div className="space-y-5 text-sm">
                
                {/* Degree */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-xl bg-surface-elevated text-cyan-accent border border-white/10 shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-text-muted">ACADEMIC DEGREE</div>
                    <div className="text-white font-semibold mt-0.5">BS Computer Science</div>
                    <div className="text-xs text-text-secondary">UIT University, Karachi • Class of 2026</div>
                  </div>
                </div>

                {/* Core Domains */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-xl bg-surface-elevated text-violet-accent border border-white/10 shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-text-muted">PRIMARY SPECIALIZATIONS</div>
                    <div className="text-white font-semibold mt-0.5 space-y-1">
                      <div className="flex items-center space-x-1.5 text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent"></span>
                        <span>Digital IC Design & Verification (RTL, AMBA, UVM)</span>
                      </div>
                      <div className="flex items-center space-x-1.5 text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-accent"></span>
                        <span>Digital Marketing & E-Commerce (Meta Ads, Shopify)</span>
                      </div>
                      <div className="flex items-center space-x-1.5 text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-accent"></span>
                        <span>AI-Driven Software & Vision (YOLO, Pose Analysis)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-xl bg-surface-elevated text-cyan-accent border border-white/10 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-text-muted">LOCATION & RELOCATION</div>
                    <div className="text-white font-semibold mt-0.5">Karachi, Pakistan</div>
                    <div className="text-xs text-text-secondary">Open to Remote & On-Site International Opportunities</div>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-start space-x-4 pt-2 border-t border-white/10">
                  <div className="p-2.5 rounded-xl bg-surface-elevated text-emerald-accent border border-white/10 shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-text-muted">CURRENT ENGAGEMENT</div>
                    <div className="text-emerald-accent font-semibold mt-0.5 flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-accent animate-pulse"></span>
                      <span>Open for Full-time Roles & High-Impact Projects</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Quick Jump Buttons */}
              <div className="pt-2 border-t border-white/10 grid grid-cols-2 gap-2 text-xs">
                <a
                  href="#engineering"
                  className="py-2.5 px-3 rounded-xl bg-surface-elevated text-cyan-accent font-semibold border border-cyan-accent/20 text-center hover:bg-cyan-accent/10 transition-colors"
                >
                  View Technical Work →
                </a>
                <a
                  href="#marketing"
                  className="py-2.5 px-3 rounded-xl bg-surface-elevated text-violet-accent font-semibold border border-violet-accent/20 text-center hover:bg-violet-accent/10 transition-colors"
                >
                  View Marketing Work →
                </a>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
