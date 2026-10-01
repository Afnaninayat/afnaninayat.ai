import React from 'react';
import { Award, CheckCircle2, Cpu, Globe, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';
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
    <section id="certifications" className="py-24 bg-background relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-surface border border-white/10 text-xs font-mono text-cyan-accent">
            <Award className="w-3.5 h-3.5" />
            <span>INDUSTRY CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Certifications & Training
          </h2>
          <p className="text-text-secondary text-base max-w-2xl leading-relaxed">
            Verified professional credentials and advanced technical training across digital marketing, e-commerce, and digital IC design verification.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {certificationsList.map((cert, idx) => {
            const CertIcon = iconMap[cert.icon] || Award;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-3xl bg-surface border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-surface-elevated text-cyan-accent border border-white/10 group-hover:scale-110 transition-transform">
                      <CertIcon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-cyan-accent bg-cyan-accent/10 px-3 py-1 rounded-full border border-cyan-accent/20">
                      {cert.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-accent transition-colors">
                    {cert.title}
                  </h3>

                  <div className="text-xs font-mono text-violet-accent font-semibold mt-1 mb-3">
                    {cert.issuer}
                  </div>

                  <p className="text-sm text-text-secondary leading-relaxed">
                    {cert.focus}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-text-muted">
                  <span className="flex items-center space-x-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Credential</span>
                  </span>
                  <span>Certificate ID on request</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
