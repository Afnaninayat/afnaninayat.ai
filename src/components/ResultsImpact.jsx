import React from 'react';
import { Sparkles, TrendingUp, Cpu, Award, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { impactMetrics } from '../data/impactMetrics';

export default function ResultsImpact() {
  return (
    <section id="results" className="py-24 bg-background relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-surface border border-white/10 text-xs font-mono text-cyan-accent">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MEASURABLE BUSINESS & TECHNICAL OUTCOMES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Verified Impact & Performance
          </h2>
          <p className="text-text-secondary text-base leading-relaxed">
            Tangible results achieved across performance ad campaigns, organic viral reach, and hardware verification testbenches.
          </p>
        </div>

        {/* 5 Metrics Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {impactMetrics.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-surface border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider">
                    {item.sublabel}
                  </span>
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></span>
                </div>

                <div
                  className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight mb-2"
                  style={{ color: item.color }}
                >
                  {item.value}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-accent transition-colors">
                  {item.label}
                </h3>

                <p className="text-xs sm:text-sm text-text-secondary mt-3 leading-relaxed">
                  {item.context}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-text-muted">
                <span>Verified Metric</span>
                <span className="text-emerald-400 flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Real Data</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
