import React from 'react';
import { Youtube, Play, TrendingUp, CheckCircle2, Sparkles, BarChart2, Eye, Users, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { creatorLab } from '../data/marketingData';

export default function CreatorLab() {
  return (
    <section id="creator-lab" className="py-20 bg-background relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-surface border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-400">
                <Youtube className="w-3.5 h-3.5" />
                <span>PRACTICAL TESTING GROUND</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                {creatorLab.title}
              </h3>

              <p className="text-text-secondary text-sm leading-relaxed">
                Rather than treating content creation purely theoretically, I launched a focused YouTube experiment to stress-test video packaging, thumbnail click-through rates (CTR), and retention drop-off mechanics in real time.
              </p>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono text-text-muted uppercase tracking-wider">Algorithmic Learnings Validated:</div>
                <div className="grid grid-cols-1 gap-2">
                  {creatorLab.insights.map((insight, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>{insight}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href="https://instagram.com/afnaninayatt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-surface-elevated border border-pink-500/30 text-xs font-mono text-pink-400 hover:bg-pink-500/10 hover:border-pink-500 transition-colors"
                    aria-label="Explore Creative Content on Instagram @afnaninayatt"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Explore Creative Work on Instagram (@afnaninayatt) →</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Metrics Box */}
            <div className="lg:col-span-5 bg-background rounded-2xl p-6 border border-white/10 space-y-4">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono text-text-muted">EXPERIMENT TELEMETRY</span>
                <span className="text-xs font-mono text-red-400 flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span>VERIFIED DATA</span>
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {creatorLab.stats.map((st, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-surface border border-white/5">
                    <div className="text-xl font-extrabold font-display text-white">
                      {st.value}
                    </div>
                    <div className="text-[11px] text-text-muted mt-0.5 font-mono">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-surface border border-white/5 text-[11px] text-text-muted leading-relaxed font-mono text-center">
                Supporting proof of hands-on media testing, viewer psychology, and platform dynamics.
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
