import React from 'react';
import { journeyEvents } from '../data/journey';
import { GraduationCap, Briefcase, Award, Calendar, CheckCircle2, Milestone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Journey() {
  return (
    <section id="journey" className="py-24 bg-[#0B0F0E] relative border-t border-[#29312F]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#121817] border border-[#29312F] text-xs font-mono text-[#B6FF00]">
            <Milestone className="w-3.5 h-3.5" />
            <span>ACADEMIC & TECHNICAL MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Journey & Education
          </h2>
          <p className="text-[#A7B0AD] text-base max-w-xl">
            My computer science education, engineering specialization, and project milestones.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative border-l-2 border-[#29312F] ml-4 sm:ml-8 lg:ml-12 space-y-12 pl-6 sm:pl-10">
          {journeyEvents.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Node Icon */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-8 h-8 rounded-full bg-[#121817] border-2 border-[#B6FF00] flex items-center justify-center text-[#B6FF00] shadow-[0_0_10px_rgba(182,255,0,0.4)] group-hover:scale-110 transition-transform">
                {item.type === 'Education' ? (
                  <GraduationCap className="w-4 h-4" />
                ) : (
                  <Award className="w-4 h-4" />
                )}
              </div>

              {/* Event Card */}
              <div className="bg-[#121817] border border-[#29312F] rounded-2xl p-6 sm:p-8 hover:border-[#3F4B48] transition-all duration-300 shadow-xl group-hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]">
                
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-[#B6FF00] bg-[#1A211F] px-3 py-1 rounded-full border border-[#29312F] flex items-center space-x-1.5">
                    <Calendar className="w-3 h-3" />
                    <span>{item.period}</span>
                  </span>
                  <span className="text-xs font-mono text-[#6F7975] uppercase tracking-wider">
                    {item.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#B6FF00] transition-colors">
                  {item.title}
                </h3>
                <div className="text-sm font-medium text-[#A7B0AD] mt-1 mb-4">
                  {item.institution}
                </div>

                <p className="text-sm text-[#A7B0AD] leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Details list */}
                {item.details && (
                  <div className="pt-4 border-t border-[#29312F] grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#A7B0AD]">
                    {item.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B6FF00] shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
