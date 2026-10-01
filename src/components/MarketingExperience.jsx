import React from 'react';
import { Briefcase, Calendar, CheckCircle2, TrendingUp, Sparkles, Building2, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { marketingExperiences } from '../data/marketingData';

export default function MarketingExperience() {
  return (
    <section id="experience" className="py-24 bg-background relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-surface border border-white/10 text-xs font-mono text-cyan-accent">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Marketing & Growth Experience
          </h2>
          <p className="text-text-secondary text-base max-w-2xl leading-relaxed">
            Professional roles across e-commerce rebrands, university account management, and performance lead generation campaigns.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 lg:ml-10 space-y-12 pl-6 sm:pl-10">
          {marketingExperiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Icon Node */}
              <div className={`absolute -left-[33px] sm:-left-[49px] top-1.5 w-8 h-8 rounded-full bg-surface border-2 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 ${
                exp.featured
                  ? 'border-violet-accent text-violet-accent shadow-violet-glow'
                  : 'border-cyan-accent text-cyan-accent shadow-cyan-glow'
              }`}>
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl group-hover:shadow-2xl space-y-5">
                
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-cyan-accent uppercase tracking-wider">
                      {exp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-accent transition-colors flex items-center space-x-2">
                      <span>{exp.role}</span>
                    </h3>
                    <div className="text-sm font-semibold text-text-secondary flex items-center space-x-2">
                      <Building2 className="w-4 h-4 text-violet-accent" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1.5">
                    <span className="text-xs font-mono text-cyan-accent bg-surface-elevated px-3 py-1 rounded-full border border-white/5 flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 w-fit">
                      {exp.badge}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed">
                  {exp.summary}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono text-text-muted uppercase tracking-wider">Key Responsibilities & Outcomes:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-text-secondary">
                    {exp.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-accent shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools Applied */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-mono text-text-muted mr-2">Tools:</span>
                  {exp.tools.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-surface-elevated text-[10px] font-mono text-text-secondary border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
