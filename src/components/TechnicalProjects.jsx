import React, { useState } from 'react';
import { technicalProjects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { Cpu, Layers, Sparkles, Filter } from 'lucide-react';

export default function TechnicalProjects() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technical Projects' },
    { id: 'ic-rtl', label: 'Digital IC & RTL Design' },
    { id: 'protocols', label: 'AMBA & Verification (UVM)' },
    { id: 'systems', label: 'Architecture & Systems' },
    { id: 'software', label: 'Software & Cross-Platform' },
  ];

  const filteredProjects = technicalProjects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'ic-rtl') return p.id === 'riscv-processor' || p.id === 'uart-controller' || p.id === 'vga-controller' || p.id === 'asic-rtl-flow';
    if (filter === 'protocols') return p.id === 'amba-protocols' || p.id === 'digital-verification-uvm';
    if (filter === 'systems') return p.id === 'cache-simulator' || p.id === 'riscv-processor';
    if (filter === 'software') return p.id === 'batsman-pro' || p.id === 'flutter-applications';
    return true;
  });

  return (
    <section id="technical-projects" className="py-24 bg-background relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-surface border border-cyan-accent/30 text-xs font-mono text-cyan-accent">
              <Cpu className="w-3.5 h-3.5" />
              <span>HARDWARE, PROTOCOLS & SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Technical & Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent to-blue-400">
                Project Portfolio
              </span>
            </h2>
            <p className="text-text-secondary text-base max-w-2xl leading-relaxed">
              Synthesizable Verilog cores, AMBA protocol interconnects, constrained-random UVM testbenches, CPU cache architectures, and hardware simulation suites.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  filter === cat.id
                    ? 'bg-cyan-accent text-[#080B11] font-bold shadow-cyan-glow'
                    : 'bg-surface text-text-secondary hover:text-white border border-white/5 hover:border-white/15'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} isFeatured={false} />
          ))}
        </div>

      </div>
    </section>
  );
}
