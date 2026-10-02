import React, { useState, useEffect } from 'react';
import { 
  featuredEngineeringProjects, 
  featuredSoftwareProjects, 
  moreOnGithubProjects 
} from '../data/projects';
import ProjectCard from './ProjectCard';
import { 
  Cpu, 
  Layers, 
  Sparkles, 
  Github, 
  ArrowUpRight, 
  Code2, 
  GitFork, 
  Star, 
  Clock, 
  ExternalLink,
  ChevronRight,
  Terminal,
  Activity
} from 'lucide-react';
import { motion } from 'framer-motion';

// Known repository overrides for clean descriptions & language normalization
const repoDescriptions = {
  'flutter': 'Practical exploration and architectural experiments building mobile application interfaces with Flutter.',
  'Learning_Flutter': 'Forked learning repository tracking hands-on exercises in mobile UI/UX state management.',
  'afnaninayat.ai': 'Complete source code of this modern portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.',
  'Parallel_Distributed_Computing': 'Multiprocessing pipelines, distributed algorithms, and concurrent task execution in Python.',
  'uart-verilog': 'Synthesizable full-duplex UART core with baud rate generator and 16x oversampling clock in Verilog.',
  'CacheSimPro': 'High-performance C++ multi-level cache simulator evaluating hit/miss ratios and write policies.'
};

const repoLanguages = {
  'uart-verilog': 'Verilog',
  'flutter': 'Flutter / Dart',
  'Learning_Flutter': 'Dart',
  '32bit-Single_cycle_processor_RISC-V-GDS': 'Verilog',
  'Industry_protocols': 'Verilog',
  'apb_uvm_testbench': 'SystemVerilog',
  'CacheSimPro': 'C++',
  'Parallel_Distributed_Computing': 'Python'
};

export default function TechnicalProjects() {
  const [activeTier, setActiveTier] = useState('all');
  const [dynamicRepos, setDynamicRepos] = useState([]);
  const [isLoadingRepos, setIsLoadingRepos] = useState(false);

  // Excluded repo names from Level 3 because they are already featured in Level 1 or 2
  const featuredRepoNames = new Set([
    '32bit-Single_cycle_processor_RISC-V-GDS',
    'Industry_protocols',
    'apb_uvm_testbench',
    'uart-verilog',
    'learning_verilog',
    'CacheSimPro',
    'BatsmanPro',
    'BatsmanPro_Web',
    'Parallel_Distributed_Computing'
  ]);

  // Client-side public GitHub repository sync with resilient fallback
  useEffect(() => {
    let isMounted = true;
    const fetchPublicRepos = async () => {
      setIsLoadingRepos(true);
      try {
        const response = await fetch('https://api.github.com/users/Afnaninayat/repos?sort=updated&per_page=30');
        if (!response.ok) throw new Error('GitHub API request failed');
        const data = await response.json();

        if (Array.isArray(data) && isMounted) {
          // Filter to only include non-featured repositories for Level 3
          const otherRepos = data
            .filter((repo) => !featuredRepoNames.has(repo.name))
            .map((repo) => ({
              name: repo.name,
              title: repo.name.replace(/[-_]/g, ' '),
              description: repo.description || repoDescriptions[repo.name] || 'Public project repository on GitHub.',
              language: repoLanguages[repo.name] || repo.language || 'Code',
              url: repo.html_url,
              fork: repo.fork,
              updatedAt: new Date(repo.updated_at).toLocaleDateString('en-US', {
                month: 'short',
                year: 'numeric'
              }),
              stars: repo.stargazers_count
            }));

          setDynamicRepos(otherRepos);
        }
      } catch (err) {
        // Fallback to static data if offline or GitHub API rate-limited
        if (isMounted) {
          setDynamicRepos(moreOnGithubProjects);
        }
      } finally {
        if (isMounted) setIsLoadingRepos(false);
      }
    };

    fetchPublicRepos();
    return () => {
      isMounted = false;
    };
  }, []);

  const displayRepos = dynamicRepos.length > 0 ? dynamicRepos : moreOnGithubProjects;

  return (
    <section id="technical-projects" className="py-24 bg-background relative border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-cyan-accent/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-violet-accent/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-10">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-surface border border-cyan-accent/30 text-xs font-mono text-cyan-accent">
              <Cpu className="w-3.5 h-3.5" />
              <span>GITHUB PROJECT INTEGRATION • 3 TIERS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              Engineering, Systems & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent via-white to-violet-accent">
                Software Repositories
              </span>
            </h2>

            <p className="text-text-secondary text-sm sm:text-base max-w-2xl leading-relaxed">
              Real public GitHub repositories spanning synthesizable digital IC designs, AMBA bus interconnects, SystemVerilog UVM verification environments, CPU cache simulators, and AI video analytics.
            </p>
          </div>

          {/* Quick Filter Navigation */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'engineering', label: '1. Featured Engineering' },
              { id: 'software', label: '2. Featured Software / AI' },
              { id: 'more', label: '3. More on GitHub' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTier(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  activeTier === tab.id
                    ? 'bg-cyan-accent text-[#080B11] font-bold shadow-cyan-glow'
                    : 'bg-surface text-text-secondary hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* =================================================================== */}
        {/* LEVEL 1: FEATURED DIGITAL IC / ENGINEERING (STRONGEST VISUAL PRIORITY) */}
        {/* =================================================================== */}
        {(activeTier === 'all' || activeTier === 'engineering') && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-accent font-semibold tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-cyan-accent animate-pulse"></span>
                  <span>Level 1 • Featured Digital IC & Engineering</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                  RTL, Protocols & Physical Design
                </h3>
              </div>
              <span className="text-xs font-mono text-text-muted">
                6 Verified Engineering Repositories
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {featuredEngineeringProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* LEVEL 2: FEATURED SOFTWARE & AI (BATSMAN PRO & DISTRIBUTED SYSTEMS) */}
        {/* =================================================================== */}
        {(activeTier === 'all' || activeTier === 'software') && (
          <div className="space-y-8 pt-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="inline-flex items-center space-x-2 text-xs font-mono text-violet-accent font-semibold tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-violet-accent animate-pulse"></span>
                  <span>Level 2 • Featured Software & Computer Science</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                  AI Computer Vision & Distributed Systems
                </h3>
              </div>
              <span className="text-xs font-mono text-text-muted">
                Flagship Capstone & Systems Code
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {featuredSoftwareProjects.map((project) => (
                <ProjectCard key={project.id} project={project} isFeatured={true} />
              ))}
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* LEVEL 3: MORE ON GITHUB & AUTO-SYNCHRONIZED PUBLIC REPOSITORIES     */}
        {/* =================================================================== */}
        {(activeTier === 'all' || activeTier === 'more') && (
          <div className="space-y-8 pt-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="inline-flex items-center space-x-2 text-xs font-mono text-text-muted font-semibold tracking-wider uppercase">
                  <Github className="w-3.5 h-3.5 text-text-secondary" />
                  <span>Level 3 • More on GitHub & Public Repositories</span>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Open Source & Experimental Work
                </h3>
              </div>
              <div className="flex items-center space-x-2 text-xs font-mono text-text-muted">
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
                <span>Live Synced from @Afnaninayat</span>
              </div>
            </div>

            {/* Repositories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {displayRepos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-surface/80 border border-white/10 hover:border-cyan-accent/50 hover:bg-surface-elevated transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Github className="w-4 h-4 text-cyan-accent" />
                        <span className="font-mono text-xs text-cyan-accent font-semibold">
                          {repo.name}
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-cyan-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>

                    <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">
                      {repo.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-text-muted">
                    <span className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-white/5 text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent"></span>
                      <span>{repo.language}</span>
                    </span>

                    {repo.updatedAt && (
                      <span className="flex items-center space-x-1 text-text-muted">
                        <Clock className="w-3 h-3" />
                        <span>{repo.updatedAt}</span>
                      </span>
                    )}
                  </div>
                </a>
              ))}
            </div>

            {/* View All Projects on GitHub Direct Action */}
            <div className="p-6 rounded-2xl bg-surface-elevated border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-3.5 text-center sm:text-left">
                <div className="p-3 rounded-2xl bg-[#080B11] border border-white/10 text-cyan-accent shrink-0">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    Explore the Complete Codebase on GitHub
                  </div>
                  <div className="text-xs text-text-muted mt-0.5">
                    Continuous commits across RTL architectures, protocol testbenches, and software experiments.
                  </div>
                </div>
              </div>

              <a
                href="https://github.com/Afnaninayat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-accent via-blue-500 to-violet-accent text-[#080B11] font-bold text-xs hover:opacity-95 shadow-cyan-glow transition-all shrink-0"
              >
                <span>View All Projects on GitHub</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
