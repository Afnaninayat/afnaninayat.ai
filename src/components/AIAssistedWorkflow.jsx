import React from 'react';
import { Sparkles, Cpu, Lightbulb, Compass, PenTool, CheckCircle2, ShieldAlert, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { aiWorkflowSteps } from '../data/marketingData';

export default function AIAssistedWorkflow() {
  return (
    <section id="ai-workflow" className="py-24 bg-background relative border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-accent/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-accent/10 border border-cyan-accent/30 text-xs font-mono text-cyan-accent">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MODERN PRODUCTIVITY PARADIGM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            AI-Assisted Creative & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent via-white to-violet-accent">
              Marketing Workflow
            </span>
          </h2>
          <p className="text-text-secondary text-base max-w-2xl leading-relaxed">
            Harnessing frontier language models and agentic tooling as creative amplifiers—accelerating research, script ideation, and draft synthesis while anchoring every outcome in human taste and strategic judgment.
          </p>
        </div>

        {/* Core Philosophy Banner */}
        <div className="rounded-3xl bg-surface border border-white/10 p-6 sm:p-8 mb-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-8 space-y-3">
              <div className="text-xs font-mono text-cyan-accent uppercase tracking-wider font-semibold">
                Strategic Human-in-the-Loop Philosophy
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Amplifier, Not a Shortcut
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Raw AI outputs are generic. True performance marketing and technical architecture require distinct brand nuance, cultural resonance, and platform timing. I deploy AI models to compress days of exploratory work into minutes, then rigorously hand-craft the final assets to match campaign goals and audience psychology.
              </p>
            </div>

            <div className="md:col-span-4 bg-background rounded-2xl p-4 border border-white/5 space-y-2.5 font-mono text-xs">
              <div className="text-text-muted text-[11px]">// Primary Toolset Applied</div>
              <div className="flex items-center space-x-2 text-white">
                <span className="text-cyan-accent">const</span> <span>aiEcosystem = [</span>
              </div>
              <div className="pl-4 space-y-1 text-emerald-400 text-[11px]">
                <div>'ChatGPT (OpenAI)',</div>
                <div>'Google Gemini',</div>
                <div>'Anthropic Claude',</div>
                <div>'Antigravity IDE'</div>
              </div>
              <div className="text-white">];</div>
            </div>

          </div>
        </div>

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {aiWorkflowSteps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`p-6 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
                idx === 4
                  ? 'bg-gradient-to-b from-surface to-surface-elevated border-cyan-accent/40 shadow-cyan-glow md:col-span-1'
                  : 'bg-surface border-white/10 hover:border-white/20'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-bold ${idx === 4 ? 'text-cyan-accent' : 'text-text-muted'}`}>
                    PHASE {item.step}
                  </span>
                  <span className="text-[10px] font-mono text-text-muted bg-surface-elevated px-2 py-0.5 rounded border border-white/5">
                    {item.tool}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white">
                  {item.title}
                </h4>

                <p className="text-xs text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>

              {idx === 4 && (
                <div className="mt-4 pt-3 border-t border-cyan-accent/20 text-[11px] font-mono text-cyan-accent flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>The Critical Value Layer</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
