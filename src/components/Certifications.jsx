import React from 'react';
import { Award, CheckCircle2, Cpu, Globe, CheckCircle, ExternalLink, Sparkles, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { certificationsList } from '../data/marketingData';

const iconMap = {
  Award,
  CheckCircle,
  Globe,
  Cpu
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 sm:py-24 bg-background relative border-t border-white/5 overflow-hidden">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 mb-10 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-surface border border-white/10 text-xs font-mono text-cyan-accent">
            <Award className="w-3.5 h-3.5 shrink-0" />
            <span className="tracking-wide">INDUSTRY CREDENTIALS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Certifications & Training
          </h2>

          <p className="text-text-secondary text-sm sm:text-base max-w-2xl leading-relaxed">
            Verified professional credentials and advanced technical training across digital marketing, e-commerce, and digital IC design verification.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {certificationsList.map((cert, idx) => {
            const CertIcon = iconMap[cert.icon] || Award;
            const isHardware = cert.icon === 'Cpu' || cert.badge?.toLowerCase().includes('hardware');

            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="p-5 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl bg-surface border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-2xl relative overflow-hidden"
              >
                {/* Accent glow line on top of card */}
                <div 
                  className={`absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isHardware 
                      ? 'bg-gradient-to-r from-transparent via-cyan-accent to-transparent' 
                      : 'bg-gradient-to-r from-transparent via-violet-accent to-transparent'
                  }`}
                />

                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div 
                      className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-surface-elevated border border-white/10 group-hover:scale-105 transition-transform shrink-0 ${
                        isHardware ? 'text-cyan-accent' : 'text-violet-accent'
                      }`}
                    >
                      <CertIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    <span 
                      className={`text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-full border whitespace-nowrap shrink-0 ${
                        isHardware 
                          ? 'text-cyan-accent bg-cyan-accent/10 border-cyan-accent/25' 
                          : 'text-violet-accent bg-violet-accent/10 border-violet-accent/25'
                      }`}
                    >
                      {cert.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-accent transition-colors leading-snug">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <div className="text-xs font-mono text-cyan-hover font-semibold mt-1 mb-2.5 flex items-center space-x-1.5">
                    <span>{cert.issuer}</span>
                  </div>

                  {/* Focus Description */}
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {cert.focus}
                  </p>
                </div>

                {/* Footer Metadata */}
                <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs font-mono text-text-muted">
                  <span className="flex items-center space-x-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Verified Credential</span>
                  </span>
                  <span className="text-text-muted/80">Certificate on request</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
