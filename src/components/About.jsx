import React from 'react';
import { GraduationCap, MapPin, Target, Sparkles, CheckCircle2, User, Award, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0B0F0E] relative border-t border-[#29312F]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#121817] border border-[#29312F] text-xs font-mono text-[#B6FF00]">
            <User className="w-3.5 h-3.5" />
            <span>BACKGROUND & IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-[#B6FF00] rounded-full"></div>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-[#A7B0AD] text-base leading-relaxed"
          >
            <p className="text-lg text-white font-medium">
              I am a <span className="text-[#B6FF00]">Computer Science graduate</span> and developer driven by a passion for creating high-performance software systems and intelligent technology solutions.
            </p>

            <p>
              My expertise spans modern full-stack web and mobile development, artificial intelligence, and digital design verification. I have engineered real-world cross-platform applications using <span className="text-white font-medium">Flutter, React, and Firebase</span>, as well as high-performance REST APIs in <span className="text-white font-medium">Python, Flask, and FastAPI</span>.
            </p>

            <p>
              In the domain of AI and Computer Vision, I have built specialized analysis platforms—most notably <span className="text-white font-semibold">Batsman Pro</span>—utilizing <span className="text-[#B6FF00]">OpenCV, YOLO, and pose estimation</span> to evaluate complex physical biomechanics from video streams.
            </p>

            <p>
              Additionally, my background extends into low-level hardware architecture and verification. I work comfortably with <span className="text-white font-medium">SystemVerilog, Verilog, UVM methodology</span>, and AMBA bus protocols (APB, AHB, AXI), enabling me to bridge the gap between software algorithms and hardware implementation.
            </p>

            {/* Core Values / Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#121817] border border-[#29312F] flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#B6FF00] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold text-sm">Full-Spectrum Engineering</h4>
                  <p className="text-xs text-[#6F7975] mt-0.5">Capable across high-level web/mobile apps to low-level hardware logic.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#121817] border border-[#29312F] flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#B6FF00] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold text-sm">Computer Vision & AI</h4>
                  <p className="text-xs text-[#6F7975] mt-0.5">Practical implementation of object detection & skeletal pose analysis.</p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Information Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-[#121817] border border-[#29312F] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden group hover:border-[#3F4B48] transition-colors">
              
              <div className="flex items-center justify-between border-b border-[#29312F] pb-4">
                <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                  <Award className="w-5 h-5 text-[#B6FF00]" />
                  <span>Developer Profile</span>
                </h3>
                <span className="text-xs font-mono text-[#B6FF00] bg-[#1A211F] px-2.5 py-1 rounded border border-[#29312F]">VERIFIED</span>
              </div>

              <div className="space-y-5 text-sm">
                
                {/* Education */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-lg bg-[#1A211F] text-[#B6FF00] border border-[#29312F] shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#6F7975]">EDUCATION</div>
                    <div className="text-white font-semibold mt-0.5">BS Computer Science</div>
                    <div className="text-xs text-[#A7B0AD]">UIT University • Completed 2026</div>
                  </div>
                </div>

                {/* Focus */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-lg bg-[#1A211F] text-[#B6FF00] border border-[#29312F] shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#6F7975]">CORE FOCUS</div>
                    <div className="text-white font-semibold mt-0.5 space-y-1">
                      <div>• Software Development (Web & Mobile)</div>
                      <div>• AI / Computer Vision</div>
                      <div>• Digital Design & Verification</div>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-lg bg-[#1A211F] text-[#B6FF00] border border-[#29312F] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#6F7975]">BASED IN</div>
                    <div className="text-white font-semibold mt-0.5">Karachi, Pakistan</div>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-start space-x-4 pt-2 border-t border-[#29312F]">
                  <div className="p-2.5 rounded-lg bg-[#1A211F] text-[#22C55E] border border-[#29312F] shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#6F7975]">AVAILABILITY STATUS</div>
                    <div className="text-[#22C55E] font-semibold mt-0.5 flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></span>
                      <span>Open to Opportunities</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
