import React, { useState } from 'react';
import { skillGroups } from '../data/skills';
import { 
  Cpu, Code2, TrendingUp, Video, ShoppingBag, Sparkles, CheckCircle2, Layers 
} from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  Cpu,
  Code2,
  TrendingUp,
  Video,
  ShoppingBag,
  Sparkles
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredGroups = selectedCategory === 'all'
    ? skillGroups
    : skillGroups.filter(g => g.category.toLowerCase().includes(selectedCategory.toLowerCase()) || g.id === selectedCategory);

  const filterTabs = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'engineering-digital-ic', label: 'Engineering & Digital IC' },
    { id: 'software-ai-cs', label: 'Software & AI' },
    { id: 'digital-marketing-growth', label: 'Digital Marketing & Ads' },
    { id: 'content-creative', label: 'Content & Video' },
    { id: 'ecommerce-seo', label: 'Shopify & SEO' },
    { id: 'ai-productivity-tools', label: 'AI Productivity' },
  ];

  return (
    <section id="skills" className="py-24 bg-background relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-surface border border-white/10 text-xs font-mono text-cyan-accent">
              <Layers className="w-3.5 h-3.5" />
              <span>SKILLS MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Capabilities & Ecosystem
            </h2>
            <p className="text-text-secondary text-base max-w-xl leading-relaxed">
              Curated proficiencies across digital hardware design, software development, e-commerce, and high-growth creative marketing.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-cyan-accent text-[#080B11] font-bold shadow-cyan-glow'
                    : 'bg-surface text-text-secondary hover:text-white border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredGroups.map((group, idx) => {
            const GroupIcon = iconMap[group.icon] || Cpu;
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 sm:p-7 rounded-3xl bg-surface border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="p-3 rounded-2xl bg-surface-elevated border border-white/10 group-hover:scale-110 transition-transform"
                      style={{ color: group.accent }}
                    >
                      <GroupIcon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-text-muted bg-surface-elevated px-2.5 py-1 rounded-full border border-white/5">
                      {group.skills.length} Competencies
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-accent transition-colors">
                    {group.title}
                  </h3>

                  <p className="text-xs text-text-secondary mt-1 mb-5 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Skills Badges Grid */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="inline-flex items-center space-x-2 px-3 py-2 rounded-xl bg-surface-elevated border border-white/5 text-xs text-text-secondary hover:border-cyan-accent/40 hover:text-white transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: group.accent }}></span>
                        <span className="font-medium">{skill.name}</span>
                        {skill.badge && (
                          <span className="text-[10px] font-mono text-text-muted bg-background/60 px-1.5 py-0.5 rounded">
                            {skill.badge}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-text-muted">
                  <span>Domain Verified</span>
                  <span className="text-emerald-400 flex items-center space-x-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Production Grade</span>
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
