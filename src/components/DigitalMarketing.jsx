import React from 'react';
import { TrendingUp, ShoppingBag, Video, Search, Target, Sparkles, ArrowRight, BarChart3, CheckCircle2, Megaphone } from 'lucide-react';
import { motion } from 'framer-motion';
import metaAdsDashboardImg from '../assets/images/meta_ads.jpg';

export default function DigitalMarketing() {
  const marketingPillars = [
    {
      id: 'meta-ads',
      title: 'Meta Ads Manager & Acquisition Funnels',
      subtitle: 'Targeted Lead Generation & Conversion',
      description: 'Architecting high-intent paid campaigns on Facebook and Instagram using custom cohorts, lookalike audiences, and systematic A/B creative testing.',
      metrics: 'Up to 3.0x ROAS • +25% Lead Gen Uplift',
      icon: Target,
      color: '#00E5FF'
    },
    {
      id: 'shopify-ecommerce',
      title: 'Shopify Store Architecture & DTC Growth',
      subtitle: 'Liquid & CSS Tailored Storefronts',
      description: 'End-to-end e-commerce management from catalog architecture and high-converting collection merchandising to custom Liquid template tweaks and mobile checkout optimization.',
      metrics: 'Custom Liquid • Mobile First CRO',
      icon: ShoppingBag,
      color: '#A855F7'
    },
    {
      id: 'video-content',
      title: 'Short-Form Video & Content Production',
      subtitle: 'Reels, TikTok & Visual Storytelling',
      description: 'Ideating, scripting, filming, and editing short-form video content designed for high watch-time and algorithmic distribution across platforms.',
      metrics: '50K+ Views on Single Organic Reel',
      icon: Video,
      color: '#EC4899'
    },
    {
      id: 'seo-search',
      title: 'Intent-Driven SEO & Content Writing',
      subtitle: 'Organic Visibility & Ranking',
      description: 'Keyword research utilizing Google Keyword Planner, search-optimized product copy, semantic meta tags, and content calendars to capture high-intent organic demand.',
      metrics: 'Google Keyword Planner • Semantic SEO',
      icon: Search,
      color: '#10B981'
    }
  ];

  return (
    <section id="marketing" className="py-24 bg-background relative border-t border-white/5">
      {/* Background violet glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-violet-accent/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-violet-accent/10 border border-violet-accent/30 text-xs font-mono text-violet-accent">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>MARKETING & CREATIVE TRACK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Digital Marketing & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-accent via-fuchsia-400 to-cyan-accent">
                Creative Growth Strategy
              </span>
            </h2>
            <p className="text-text-secondary text-base max-w-2xl leading-relaxed">
              Performance marketing engineered with analytical rigor: Meta Ads management, viral short-form video production, custom Shopify development, and AI-accelerated creative workflows.
            </p>
          </div>

          <div className="hidden lg:flex items-center space-x-3 bg-surface border border-white/10 px-4 py-2 rounded-2xl text-xs font-mono text-text-muted">
            <span className="w-2 h-2 rounded-full bg-violet-accent animate-pulse"></span>
            <span>VERIFIED ROAS: UP TO 3.0X • 50K+ REEL VIEWS</span>
          </div>
        </div>

        {/* Featured Performance Dashboard Visual */}
        <div className="rounded-3xl bg-surface border border-white/10 overflow-hidden shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-surface-elevated text-xs font-mono text-cyan-accent border border-white/5">
                <BarChart3 className="w-3.5 h-3.5" />
                <span>DATA-DRIVEN MEDIA BUYING</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Engineering Discipline Applied to Direct-Response Marketing
              </h3>

              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                Marketing isn't guesswork—it's systematic hypothesis testing. I apply the same rigorous analytical mindset from computer science and digital IC design to ad creative testing, audience cohort segmentation, budget pacing, and conversion rate optimization.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-background border border-white/5 text-center">
                  <div className="text-2xl font-bold text-cyan-accent font-display">25%</div>
                  <div className="text-[11px] text-text-muted mt-0.5">Lead Gen Uplift</div>
                </div>
                <div className="p-3.5 rounded-xl bg-background border border-white/5 text-center">
                  <div className="text-2xl font-bold text-violet-accent font-display">50K+</div>
                  <div className="text-[11px] text-text-muted mt-0.5">Organic Reel Views</div>
                </div>
                <div className="p-3.5 rounded-xl bg-background border border-white/5 text-center">
                  <div className="text-2xl font-bold text-emerald-400 font-display">Up to 3x</div>
                  <div className="text-[11px] text-text-muted mt-0.5">Campaign ROAS</div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#iqbal-jee"
                  className="inline-flex items-center space-x-2 text-violet-accent hover:text-fuchsia-300 font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  <span>Explore Featured Iqbal Jee Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-72 sm:h-80 lg:h-full min-h-[340px] bg-background border-t lg:border-t-0 lg:border-l border-white/10 overflow-hidden">
              <img
                src={metaAdsDashboardImg}
                alt="Meta Ads Performance Analytics"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
            </div>

          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {marketingPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-8 rounded-3xl bg-surface border border-white/10 hover:border-violet-accent/50 hover:shadow-violet-glow transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="p-3 rounded-2xl bg-surface-elevated border border-white/10 group-hover:scale-110 transition-transform"
                      style={{ color: pillar.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-text-muted bg-surface-elevated px-3 py-1 rounded-full border border-white/5">
                      {pillar.metrics}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-violet-accent transition-colors">
                    {pillar.title}
                  </h3>
                  
                  <div className="text-xs font-mono text-cyan-accent mt-1 mb-4">
                    {pillar.subtitle}
                  </div>

                  <p className="text-sm text-text-secondary leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-text-muted">
                  <span>Track Competency</span>
                  <span className="text-emerald-400 flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Active Execution</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
