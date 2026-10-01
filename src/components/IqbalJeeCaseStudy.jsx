import React, { useState } from 'react';
import { Palette, ShoppingBag, Calendar, Video, Search, TrendingUp, Sparkles, CheckCircle2, ArrowRight, Award, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { iqbalJeeCaseStudy } from '../data/marketingData';

const iconMap = {
  Palette,
  ShoppingBag,
  Calendar,
  Video,
  Search,
  TrendingUp
};

export default function IqbalJeeCaseStudy() {
  const [activeTab, setActiveTab] = useState('branding');
  const activePillar = iqbalJeeCaseStudy.pillars.find(p => p.id === activeTab) || iqbalJeeCaseStudy.pillars[0];
  const ActiveIcon = iconMap[activePillar.icon] || Palette;

  return (
    <section id="iqbal-jee" className="py-24 bg-background relative border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-violet-accent/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-accent/15 border border-violet-accent/30 text-xs font-mono text-violet-accent">
            <Award className="w-3.5 h-3.5" />
            <span>FEATURED BRAND CASE STUDY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Iqbal Jee — Digital Rebranding & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-accent via-fuchsia-400 to-cyan-accent">
              E-Commerce Transformation
            </span>
          </h2>
          <p className="text-text-secondary text-base max-w-2xl leading-relaxed">
            Leading the end-to-end modernization of a heritage eastern menswear label: from brand identity and custom Shopify Liquid architecture to viral 50K+ view reels and up to 3x ROAS acquisition.
          </p>
        </div>

        {/* Hero Visual Showcase */}
        <div className="rounded-3xl bg-surface border border-white/10 overflow-hidden shadow-2xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Visual Half */}
            <div className="lg:col-span-7 relative h-80 sm:h-96 lg:h-[460px] bg-background overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
              <img
                src={iqbalJeeCaseStudy.image}
                alt="Iqbal Jee Rebranding & Shopify Storefront"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
              
              {/* Badge overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-surface/90 backdrop-blur-md border border-white/10 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <div className="text-[10px] font-mono text-violet-accent uppercase tracking-wider font-semibold">
                    ROLE: LEAD DIGITAL MARKETER & CONTENT CREATOR
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    Iqbal Jee Men's Eastern Wear • Aug 2025 – Present
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>ACTIVE REBRAND & STORE</span>
                </div>
              </div>
            </div>

            {/* Metrics & Scope Half */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs font-mono text-cyan-accent uppercase tracking-wider">
                  The Transformation Mandate
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Modernizing Heritage Menswear for the DTC Era
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  I led the full transition of Iqbal Jee from traditional retail reliance to an agile direct-to-consumer digital powerhouse, uniting luxury visual branding with performance ad campaigns.
                </p>
              </div>

              {/* Verified Results Grid */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                {iqbalJeeCaseStudy.verifiedMetrics.map((metric, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-surface-elevated border border-white/5">
                    <div className="text-xl sm:text-2xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-accent to-fuchsia-400">
                      {metric.value}
                    </div>
                    <div className="text-xs font-semibold text-white mt-1">
                      {metric.label}
                    </div>
                    <div className="text-[10px] text-text-muted mt-0.5">
                      {metric.description}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tools Stack */}
              <div className="pt-2 border-t border-white/10 space-y-2">
                <div className="text-[11px] font-mono text-text-muted uppercase">Tools & Workflow Ecosystem:</div>
                <div className="flex flex-wrap gap-1.5">
                  {['Shopify', 'Shopify Liquid', 'Custom CSS', 'Meta Ads Manager', 'CapCut', 'VN Editor', 'Canva', 'Google Keyword Planner'].map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-surface-elevated text-[10px] font-mono text-text-secondary border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* 6 Strategic Chapters Deep-Dive Tabs */}
        <div className="space-y-6">
          
          <div className="flex items-center justify-between">
            <div className="text-xs font-mono text-text-muted uppercase tracking-wider flex items-center space-x-2">
              <Sparkles className="w-3.5 h-3.5 text-violet-accent" />
              <span>Transformation Pillars (Click to Explore)</span>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {iqbalJeeCaseStudy.pillars.map((pillar) => {
              const Icon = iconMap[pillar.icon] || Palette;
              const isSelected = activeTab === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(pillar.id)}
                  className={`p-3.5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden ${
                    isSelected
                      ? 'bg-surface-elevated border-violet-accent text-white shadow-violet-glow'
                      : 'bg-surface/70 border-white/5 text-text-muted hover:text-white hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-violet-accent' : 'text-text-muted'}`}>
                      PHASE {pillar.number}
                    </span>
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-violet-accent' : 'text-text-muted'}`} />
                  </div>
                  <div className="text-xs font-semibold line-clamp-1 leading-tight">
                    {pillar.title}
                  </div>
                  {isSelected && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-accent to-fuchsia-500"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Chapter Details Box */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl bg-surface border border-white/10 p-6 sm:p-8 lg:p-10 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <div className="lg:col-span-5 space-y-4">
                  <div className="p-3 rounded-2xl bg-violet-accent/15 text-violet-accent w-fit border border-violet-accent/30">
                    <ActiveIcon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-cyan-accent uppercase tracking-wider font-semibold">
                    Chapter 0{activePillar.number}
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {activePillar.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {activePillar.description}
                  </p>
                </div>

                <div className="lg:col-span-7 space-y-3">
                  <div className="text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
                    Key Implementations & Milestones:
                  </div>
                  <div className="grid grid-cols-1 gap-2.5">
                    {activePillar.points.map((point, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl bg-surface-elevated border border-white/5 flex items-start space-x-3 text-xs sm:text-sm text-text-secondary"
                      >
                        <CheckCircle2 className="w-4 h-4 text-violet-accent shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
