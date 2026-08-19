import React from 'react';
import { ArrowRight, Terminal, Sparkles, Cpu, Eye, Code2, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Glow background accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#B6FF00]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#22C55E]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Bio */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Status Pill */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-[#121817] border border-[#29312F] text-xs font-mono text-[#A7B0AD]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B6FF00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#B6FF00]"></span>
              </span>
              <span className="text-[#B6FF00] font-semibold">Open to opportunities</span>
              <span className="text-[#6F7975]">|</span>
              <span>Computer Science Graduate</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                I build digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#B6FF00]">
                  experiences that
                </span> <br />
                solve real problems.
              </h1>
              <p className="text-lg sm:text-xl font-medium text-[#B6FF00]/90 font-sans">
                Hi, I'm Afnan Inayat. Software Developer & Technology Enthusiast.
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#A7B0AD] max-w-2xl leading-relaxed font-normal"
            >
              I’m a Computer Science graduate focused on building modern applications, 
              AI-powered solutions, and reliable digital systems using technologies 
              across mobile, web, backend, and hardware development.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center space-x-3 px-7 py-3.5 rounded-xl bg-[#B6FF00] text-[#0B0F0E] font-bold text-sm hover:bg-[#9BE600] transition-all duration-300 shadow-[0_0_25px_rgba(182,255,0,0.3)] hover:shadow-[0_0_35px_rgba(182,255,0,0.5)] transform hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-xl bg-[#121817] border border-[#29312F] text-sm font-semibold text-white hover:border-[#B6FF00] hover:text-[#B6FF00] transition-all duration-300"
              >
                <span>Let's Connect</span>
              </a>
            </motion.div>

            {/* Quick Tech Highlights */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-[#29312F]/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-[#A7B0AD]"
            >
              <div className="flex items-center space-x-2">
                <Code2 className="w-4 h-4 text-[#B6FF00]" />
                <span>React & Flutter</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4 text-[#B6FF00]" />
                <span>AI & OpenCV</span>
              </div>
              <div className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-[#B6FF00]" />
                <span>Python & Flask</span>
              </div>
              <div className="flex items-center space-x-2">
                <Cpu className="w-4 h-4 text-[#B6FF00]" />
                <span>SystemVerilog</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Abstract Technical Visual */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-2xl bg-[#121817] border border-[#29312F] p-6 shadow-2xl overflow-hidden group hover:border-[#3F4B48] transition-colors"
            >
              {/* Card top bar */}
              <div className="flex items-center justify-between border-b border-[#29312F] pb-4 mb-5">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444]/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-[#22C55E]/80"></div>
                  <span className="ml-2 text-xs font-mono text-[#6F7975]">afnan_workspace.v</span>
                </div>
                <div className="flex items-center space-x-2 text-[10px] font-mono text-[#B6FF00] bg-[#1A211F] px-2.5 py-1 rounded border border-[#29312F]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B6FF00] animate-pulse"></span>
                  <span>SYSTEM ACTIVE</span>
                </div>
              </div>

              {/* Code/Metrics Visual Box */}
              <div className="space-y-4 font-mono text-xs text-[#A7B0AD]">
                
                {/* Tech stack badge list */}
                <div className="bg-[#0B0F0E] p-4 rounded-xl border border-[#29312F] space-y-2">
                  <div className="text-[#6F7975] text-[11px]">// Primary Developer Core</div>
                  <div className="flex items-center justify-between text-white font-semibold">
                    <span className="text-[#B6FF00]">const</span>
                    <span>developer = &#123;</span>
                  </div>
                  <div className="pl-4 space-y-1 text-slate-300">
                    <div><span className="text-[#A7B0AD]">name:</span> <span className="text-emerald-400">'Afnan Inayat'</span>,</div>
                    <div><span className="text-[#A7B0AD]">degree:</span> <span className="text-emerald-400">'BS Computer Science'</span>,</div>
                    <div><span className="text-[#A7B0AD]">focus:</span> [<span className="text-[#B6FF00]">'Software'</span>, <span className="text-[#B6FF00]">'AI Vision'</span>, <span className="text-[#B6FF00]">'RTL Verification'</span>],</div>
                    <div><span className="text-[#A7B0AD]">status:</span> <span className="text-[#22C55E]">'Ready to Deploy'</span></div>
                  </div>
                  <div className="text-white font-semibold">&#125;;</div>
                </div>

                {/* Floating Metric Card 1 */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#1A211F] p-3.5 rounded-xl border border-[#29312F] hover:border-[#B6FF00]/40 transition-colors">
                    <div className="text-[10px] text-[#6F7975] uppercase tracking-wider">AI Precision</div>
                    <div className="text-xl font-bold text-[#B6FF00] mt-1">98.4%</div>
                    <div className="text-[10px] text-[#A7B0AD] mt-0.5">YOLO Shot Vision</div>
                  </div>
                  <div className="bg-[#1A211F] p-3.5 rounded-xl border border-[#29312F] hover:border-[#B6FF00]/40 transition-colors">
                    <div className="text-[10px] text-[#6F7975] uppercase tracking-wider">RTL Coverage</div>
                    <div className="text-xl font-bold text-white mt-1">100%</div>
                    <div className="text-[10px] text-[#A7B0AD] mt-0.5">UVM Assertion Suite</div>
                  </div>
                </div>

                {/* Mini Waveform / Hardware graphic */}
                <div className="bg-[#0B0F0E] p-3.5 rounded-xl border border-[#29312F]">
                  <div className="flex items-center justify-between text-[11px] mb-2 text-[#6F7975]">
                    <span>APB Protocol Bus</span>
                    <span className="text-[#B6FF00]">PCLK • PENABLE</span>
                  </div>
                  <div className="h-8 flex items-center space-x-1 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-between px-1">
                      <div className="h-5 w-8 bg-[#1A211F] border-t-2 border-[#B6FF00] flex items-center justify-center text-[9px] text-[#B6FF00]">CLK</div>
                      <div className="h-5 w-8 bg-[#1A211F] border-b-2 border-emerald-400 flex items-center justify-center text-[9px] text-emerald-400">SEL</div>
                      <div className="h-5 w-8 bg-[#1A211F] border-t-2 border-sky-400 flex items-center justify-center text-[9px] text-sky-400">EN</div>
                      <div className="h-5 w-12 bg-[#B6FF00]/20 border border-[#B6FF00] flex items-center justify-center text-[9px] text-white font-bold">READY</div>
                    </div>
                  </div>
                </div>

              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
