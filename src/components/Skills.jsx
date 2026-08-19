import React, { useState } from 'react';
import { skillCategories } from '../data/skills';
import { 
  Code, Smartphone, Zap, FileCode, Layout, Palette, Terminal, Server, Globe, 
  Flame, Database, Eye, Target, Cpu, Camera, Activity, Layers, Binary, 
  ShieldCheck, GitCommit, Sliders, GitBranch, Box, Monitor, Send, Check
} from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  Code, Smartphone, Zap, FileCode, Layout, Palette, Terminal, Server, Globe, 
  Flame, Database, Eye, Target, Cpu, Camera, Activity, Layers, Binary, 
  ShieldCheck, GitCommit, Sliders, GitBranch, Box, Monitor, Send
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCategories = selectedCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(c => c.id === selectedCategory);

  return (
    <section id="skills" className="py-24 bg-[#0B0F0E] relative border-t border-[#29312F]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#121817] border border-[#29312F] text-xs font-mono text-[#B6FF00]">
              <Cpu className="w-3.5 h-3.5" />
              <span>CAPABILITIES & TOOLING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Tech Stack
            </h2>
            <p className="text-[#A7B0AD] text-base max-w-xl">
              Technologies, frameworks, and methodologies I work with across full-stack development, AI vision, and digital verification.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#B6FF00] text-[#0B0F0E] font-bold shadow-[0_0_15px_rgba(182,255,0,0.3)]'
                  : 'bg-[#121817] text-[#A7B0AD] hover:text-white border border-[#29312F]'
              }`}
            >
              All Tools ({skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#B6FF00] text-[#0B0F0E] font-bold shadow-[0_0_15px_rgba(182,255,0,0.3)]'
                    : 'bg-[#121817] text-[#A7B0AD] hover:text-white border border-[#29312F]'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#121817] border border-[#29312F] rounded-2xl p-6 hover:border-[#3F4B48] transition-all duration-300 shadow-lg flex flex-col justify-between group hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#B6FF00] transition-colors">
                    {cat.title}
                  </h3>
                  <span className="text-[11px] font-mono text-[#6F7975] bg-[#1A211F] px-2.5 py-1 rounded border border-[#29312F]">
                    {cat.skills.length} Techs
                  </span>
                </div>
                
                <p className="text-xs text-[#A7B0AD] mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Badges Grid */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => {
                    const IconComponent = iconMap[skill.icon] || Code;
                    return (
                      <div
                        key={skill.name}
                        className="inline-flex items-center space-x-2 px-3 py-2 rounded-xl bg-[#1A211F] border border-[#29312F] text-xs font-medium text-white hover:border-[#B6FF00]/50 hover:bg-[#1A211F]/90 hover:text-[#B6FF00] transition-all duration-200"
                      >
                        <IconComponent className="w-3.5 h-3.5 text-[#B6FF00]" />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#29312F]/60 flex items-center justify-between text-[11px] font-mono text-[#6F7975]">
                <span>Category Verified</span>
                <span className="text-[#22C55E] flex items-center space-x-1">
                  <Check className="w-3 h-3" />
                  <span>Production Ready</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
