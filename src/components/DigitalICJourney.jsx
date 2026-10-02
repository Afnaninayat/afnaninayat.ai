import React, { useState } from 'react';
import { Cpu, ShieldCheck, GitBranch, Sliders, Binary, Layers, CheckCircle2, ArrowRight, Activity, Terminal, Sparkles, BookOpen, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { digitalICStages, ambaProtocols } from '../data/engineeringJourney';

const iconMap = {
  Cpu,
  Layers,
  ShieldCheck,
  GitBranch,
  Sliders,
  Binary
};

export default function DigitalICJourney() {
  const [activeStageId, setActiveStageId] = useState(digitalICStages[0].id);
  const [activeAmbaTab, setActiveAmbaTab] = useState(0);

  const activeStage = digitalICStages.find(s => s.id === activeStageId) || digitalICStages[0];
  const ActiveIcon = iconMap[activeStage.icon] || Cpu;

  return (
    <section id="engineering" className="py-24 bg-background relative border-t border-white/5 bg-circuit-dots">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-accent/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-surface border border-cyan-accent/30 text-xs font-mono text-cyan-accent">
              <Cpu className="w-3.5 h-3.5" />
              <span>HARDWARE & SILICON TRACK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Digital IC Design & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent to-blue-400">
                Verification Journey
              </span>
            </h2>
            <p className="text-text-secondary text-base max-w-2xl leading-relaxed">
              From Boolean logic gates to cycle-accurate SystemVerilog RTL, AMBA protocol interconnects, UVM testbench architectures, and RTL-to-GDS physical design awareness.
            </p>
          </div>

          <div className="hidden lg:flex items-center space-x-3 bg-surface border border-white/10 px-4 py-2 rounded-2xl text-xs font-mono text-text-muted">
            <span className="w-2 h-2 rounded-full bg-cyan-accent animate-pulse"></span>
            <span>SIMULATION VERIFIED • QUESTA / MODELSIM</span>
          </div>
        </div>

        {/* 6-Stage Interactive Progression Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
          {digitalICStages.map((stage) => {
            const IconComponent = iconMap[stage.icon] || Cpu;
            const isSelected = activeStageId === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`p-3.5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden ${
                  isSelected
                    ? 'bg-surface-elevated border-cyan-accent text-white shadow-cyan-glow'
                    : 'bg-surface/70 border-white/5 text-text-muted hover:text-white hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-cyan-accent' : 'text-text-muted'}`}>
                    STEP {stage.step}
                  </span>
                  <IconComponent className={`w-4 h-4 ${isSelected ? 'text-cyan-accent' : 'text-text-muted'}`} />
                </div>
                <div className="text-xs font-semibold line-clamp-2 leading-tight">
                  {stage.title}
                </div>
                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-accent to-blue-500"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Breakdown Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl bg-surface border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Stage Narrative & Core Learnings */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-2xl bg-cyan-accent/15 text-cyan-accent border border-cyan-accent/30">
                    <ActiveIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-cyan-accent uppercase tracking-wider font-semibold">
                      Phase {activeStage.step} • {activeStage.category}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                      {activeStage.title}
                    </h3>
                  </div>
                </div>

                <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                  {activeStage.summary}
                </p>

                {/* Topics Grid */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono text-text-muted uppercase tracking-wider">
                    Core Technical Competencies Mastered:
                  </div>
                  <div className="grid grid-cols-1 gap-2.5">
                    {activeStage.topics.map((topic, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-surface-elevated/70 border border-white/5 flex items-start space-x-3 text-xs sm:text-sm text-text-secondary"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-accent shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Milestone Highlight Banner */}
                <div className="p-4 rounded-xl bg-cyan-accent/10 border border-cyan-accent/30 text-xs font-mono text-cyan-accent flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span><strong>Milestone:</strong> {activeStage.highlight}</span>
                </div>

                {/* Stage Connected Public GitHub Repositories */}
                {(() => {
                  const stageRepos = {
                    'stage-2': [
                      { name: 'uart-verilog', label: 'View UART RTL →', url: 'https://github.com/Afnaninayat/uart-verilog' },
                      { name: 'learning_verilog', label: 'Explore RTL Designs →', url: 'https://github.com/Afnaninayat/learning_verilog' }
                    ],
                    'stage-4': [
                      { name: 'Industry_protocols', label: 'Explore Protocol Implementations (APB/AHB/AXI) →', url: 'https://github.com/Afnaninayat/Industry_protocols' }
                    ],
                    'stage-5': [
                      { name: 'apb_uvm_testbench', label: 'View APB UVM Testbench Code →', url: 'https://github.com/Afnaninayat/apb_uvm_testbench' }
                    ],
                    'stage-6': [
                      { name: '32bit-Single_cycle_processor_RISC-V-GDS', label: 'View RTL & Physical Design (RISC-V) →', url: 'https://github.com/Afnaninayat/32bit-Single_cycle_processor_RISC-V-GDS' }
                    ]
                  }[activeStage.id];

                  if (!stageRepos) return null;

                  return (
                    <div className="pt-2 space-y-2">
                      <div className="text-[11px] font-mono text-text-muted uppercase tracking-wider flex items-center space-x-1.5">
                        <Github className="w-3.5 h-3.5 text-cyan-accent" />
                        <span>Connected Public GitHub Repository:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {stageRepos.map((repo) => (
                          <a
                            key={repo.name}
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-surface-elevated border border-white/10 text-xs font-mono text-white hover:border-cyan-accent hover:text-cyan-accent transition-colors shadow-sm"
                          >
                            <Github className="w-3.5 h-3.5 text-cyan-accent" />
                            <span>{repo.label}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  );
                })()}

              </div>

              {/* Right Column: Code / Simulation / Concept Snippet Visualizer */}
              <div className="lg:col-span-5 bg-background rounded-2xl border border-white/10 p-5 font-mono text-xs shadow-inner space-y-4">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span className="text-[10px] text-text-muted ml-1">questa_sim_env.log</span>
                  </div>
                  <span className="text-[10px] text-cyan-accent">CYCLE-ACCURATE</span>
                </div>

                <div className="space-y-2 text-text-secondary text-[11px] leading-relaxed">
                  <div className="text-text-muted">// RTL & Verification Environment</div>
                  <div><span className="text-cyan-accent">import</span> uvm_pkg::*;</div>
                  <div><span className="text-cyan-accent">`include</span> <span className="text-emerald-400">"uvm_macros.svh"</span></div>
                  <div className="pt-2 text-text-muted">// Verification Assertion Guard</div>
                  <div className="text-white">
                    <span className="text-purple-400">assert</span> property (@(posedge clk) disable iff(!rst_n)
                  </div>
                  <div className="pl-4 text-emerald-400">
                    p_sel & p_enable |=&gt; p_ready ##1 !p_enable
                  </div>
                  <div className="text-white">);</div>
                </div>

                {/* Waveform graphic */}
                <div className="p-3 rounded-xl bg-surface border border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-[10px] text-text-muted">
                    <span>CLK DOMAIN</span>
                    <span className="text-cyan-accent">100 MHz (10ns)</span>
                  </div>
                  <div className="flex items-center space-x-1 h-6">
                    {[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1].map((val, i) => (
                      <div
                        key={i}
                        className={`flex-1 ${val === 1 ? 'border-t-2 border-cyan-accent h-full' : 'border-b-2 border-cyan-accent h-full'}`}
                      ></div>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-surface border border-white/5 flex items-center justify-between text-[11px]">
                  <span className="text-text-muted">Coverage Score</span>
                  <span className="text-emerald-400 font-bold">100% Functional</span>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* AMBA Protocol Interconnect Interactive Deep-Dive */}
        <div className="rounded-3xl bg-surface border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-6 mb-8 gap-4">
            <div>
              <div className="text-xs font-mono text-cyan-accent uppercase tracking-wider">
                System-on-Chip Interconnects
              </div>
              <h3 className="text-2xl font-bold text-white mt-1">
                AMBA Protocol Architecture: APB vs AHB vs AXI
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary mt-1">
                Deep protocol understanding implemented across RTL master/slave bridges and UVM verification suites.
              </p>
            </div>

            {/* Protocol Switcher Tabs */}
            <div className="flex rounded-xl bg-background p-1 border border-white/10">
              {ambaProtocols.map((proto, idx) => (
                <button
                  key={proto.name}
                  onClick={() => setActiveAmbaTab(idx)}
                  className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${
                    activeAmbaTab === idx
                      ? 'bg-cyan-accent text-[#080B11] shadow-cyan-glow'
                      : 'text-text-muted hover:text-white'
                  }`}
                >
                  {proto.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active AMBA Protocol Card */}
          {(() => {
            const currentProto = ambaProtocols[activeAmbaTab];
            return (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <div className="lg:col-span-6 space-y-4">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-accent/15 text-cyan-accent text-xs font-mono">
                    <span>{currentProto.fullName}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white">
                    {currentProto.name}: Architectural Focus
                  </h4>

                  <p className="text-sm text-text-secondary leading-relaxed">
                    {currentProto.focus}
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-mono text-text-muted uppercase">Protocol Characteristics:</div>
                    <div className="p-3.5 rounded-xl bg-surface-elevated border border-white/5 text-xs text-text-secondary leading-relaxed">
                      {currentProto.characteristics}
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-mono text-text-muted uppercase">Transaction Phases & Handshakes:</div>
                    <div className="space-y-1.5">
                      {currentProto.phases.map((phase, pIdx) => (
                        <div key={pIdx} className="flex items-start space-x-2 text-xs text-text-secondary">
                          <span className="text-cyan-accent font-mono font-bold">•</span>
                          <span>{phase}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-4">
                  <div className="text-xs font-mono text-text-muted uppercase">Key Protocol Signals & Busses:</div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {currentProto.signals.map((sig) => (
                      <div
                        key={sig}
                        className="p-2.5 rounded-xl bg-background border border-white/10 font-mono text-xs text-cyan-accent text-center shadow-sm"
                      >
                        {sig}
                      </div>
                    ))}
                  </div>

                  {/* Visual Protocol Flow Diagram / Timing Preview */}
                  <div className="mt-4 p-4 rounded-2xl bg-background border border-white/10 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between text-text-muted text-[11px]">
                      <span>CYCLE-LEVEL TRANSFER ENGINE</span>
                      <span className="text-emerald-400">HANDSHAKE ACTIVE</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                      <div className="p-2 rounded-lg bg-surface border border-cyan-accent/30 text-white">
                        <div className="text-text-muted">CYCLE 1</div>
                        <div className="text-cyan-accent font-bold mt-1">IDLE / SETUP</div>
                      </div>
                      <div className="p-2 rounded-lg bg-surface border border-cyan-accent/30 text-white">
                        <div className="text-text-muted">CYCLE 2</div>
                        <div className="text-cyan-accent font-bold mt-1">ENABLE / BURST</div>
                      </div>
                      <div className="p-2 rounded-lg bg-surface border border-emerald-400/40 text-white">
                        <div className="text-text-muted">CYCLE 3</div>
                        <div className="text-emerald-400 font-bold mt-1">TRANSFER DONE</div>
                      </div>
                    </div>

                    <div className="text-[11px] text-text-muted leading-tight text-center pt-1">
                      Designed and verified with SystemVerilog Assertions in QuestaSim.
                    </div>

                    <div className="pt-2">
                      <a
                        href="https://github.com/Afnaninayat/Industry_protocols"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-surface-elevated border border-cyan-accent/30 text-xs font-mono text-cyan-accent hover:bg-cyan-accent hover:text-[#080B11] hover:border-cyan-accent font-semibold transition-all duration-200 group"
                        aria-label="Explore AMBA Protocol Implementations on GitHub"
                      >
                        <Github className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
                        <span>Explore Protocol Implementations (Industry_protocols) →</span>
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            );
          })()}

        </div>

      </div>
    </section>
  );
}
