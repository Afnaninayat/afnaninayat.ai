import React from 'react';
import { Target, Activity, Video, Sparkles, CheckCircle2, ArrowRight, Layers, Eye, Smartphone, Globe, Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import batsmanProImg from '../assets/images/batsman_pro.png';

export default function BatsmanProFYP() {
  const shotClasses = [
    { name: 'Cover Drive', metric: 'Front Foot Stride & High Elbow Alignment' },
    { name: 'Pull Shot', metric: 'Back Foot Weight Transfer & Horizontal Swivel' },
    { name: 'Straight Drive', metric: 'Full Face Bat Presentation & Head Stillness' },
    { name: 'Flick / Leg Glance', metric: 'Wrist Turn Mechanics & Balance Angle' },
  ];

  const pipelineStages = [
    { title: 'Video Ingestion', desc: 'Raw high-speed camera footage captured via mobile device or recorded stream.' },
    { title: 'YOLO Detection', desc: 'Real-time localization of batsman, cricket bat, ball, and wicket geometry.' },
    { title: 'Pose Estimation', desc: 'Skeletal keypoint extraction tracking shoulder, elbow, wrist, knee, and foot landmarks.' },
    { title: 'Contact Timestamping', desc: 'Impact detection pinpointing the microsecond of bat-ball collision.' },
    { title: 'Biomechanics & Reports', desc: 'Evaluation of footwork stride, posture balance, and automated clip generation.' },
  ];

  return (
    <section id="fyp-batsman-pro" className="py-24 bg-background relative border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-cyan-accent/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-accent/10 border border-cyan-accent/30 text-xs font-mono text-cyan-accent">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FLAGSHIP FINAL YEAR PROJECT (FYP)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Batsman Pro — AI-Driven <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-accent via-white to-blue-400">
              Shot Analysis Platform
            </span>
          </h2>
          <p className="text-text-secondary text-base max-w-2xl leading-relaxed">
            A comprehensive computer vision and AI biomechanics platform engineered to transform ordinary cricket video into elite-level technical coaching insights.
          </p>
        </div>

        {/* Hero Case Study Feature Box */}
        <div className="rounded-3xl bg-surface border border-white/10 overflow-hidden shadow-2xl mb-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Visual Media Half */}
            <div className="lg:col-span-6 relative h-80 sm:h-96 lg:h-full min-h-[380px] bg-background overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
              <img
                src={batsmanProImg}
                alt="Batsman Pro AI Cricket Shot Analysis"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
              
              {/* Overlay telemetry badge */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-surface/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-cyan-accent uppercase tracking-wider font-semibold">
                    COMPUTER VISION PIPELINE
                  </div>
                  <div className="text-xs font-bold text-white mt-0.5">
                    YOLO Object Tracking + Skeletal Pose Analysis
                  </div>
                </div>
                <div className="flex items-center space-x-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>ACTIVE INFERENCE</span>
                </div>
              </div>
            </div>

            {/* Content Summary Half */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs font-mono text-cyan-accent uppercase tracking-wider">
                  Capstone Flagship Solution
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Bridging AI Vision with Athletic Performance
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Traditional cricket coaching relies either on subjective human observation or prohibitively expensive multi-camera sensor setups. Batsman Pro solves this accessibility barrier through an accessible computer vision pipeline capable of extracting elite biomechanical metrics from standard smartphone or match video.
                </p>
              </div>

              {/* Problem vs Solution Split */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div className="p-4 rounded-xl bg-surface-elevated border border-white/5 space-y-1.5">
                  <div className="text-xs font-mono text-red-400 font-bold uppercase">The Problem</div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Subjective visual coaching, delayed feedback loops, and lack of granular footwork and contact tracking at grassroots academy levels.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface-elevated border border-white/5 space-y-1.5">
                  <div className="text-xs font-mono text-cyan-accent font-bold uppercase">The Solution</div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Automated shot classification, real-time posture alignment, footwork stride metrics, and instant highlight clip extraction.
                  </p>
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/afnaninayat/batsman-pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-cyan-accent text-[#080B11] font-bold text-xs hover:bg-cyan-hover transition-all shadow-cyan-glow"
                >
                  <Github className="w-4 h-4" />
                  <span>Inspect Source Code</span>
                </a>
                <span className="text-xs font-mono text-text-muted">
                  Full project documentation available
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* 4 Architectural Deep-Dive Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          <div className="p-6 rounded-2xl bg-surface border border-white/10 space-y-3 hover:border-cyan-accent/40 transition-colors">
            <div className="p-2.5 rounded-xl bg-cyan-accent/15 text-cyan-accent w-fit">
              <Eye className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Shot Classification</h4>
            <p className="text-xs text-text-muted leading-relaxed">
              Distinguishes between key cricket batting strokes (Cover Drive, Pull Shot, Straight Drive, Flick) by evaluating bat swing plane and torso angle.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-white/10 space-y-3 hover:border-cyan-accent/40 transition-colors">
            <div className="p-2.5 rounded-xl bg-cyan-accent/15 text-cyan-accent w-fit">
              <Activity className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Footwork & Stride</h4>
            <p className="text-xs text-text-muted leading-relaxed">
              Calculates front-foot stride distance, back-foot heel plant stability, and balance center of gravity at moment of release.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-white/10 space-y-3 hover:border-cyan-accent/40 transition-colors">
            <div className="p-2.5 rounded-xl bg-cyan-accent/15 text-cyan-accent w-fit">
              <Target className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Bat-Ball Contact</h4>
            <p className="text-xs text-text-muted leading-relaxed">
              Algorithms detect the precise micro-frame of ball impact, estimating sweet-spot proximity and timing efficiency.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-white/10 space-y-3 hover:border-cyan-accent/40 transition-colors">
            <div className="p-2.5 rounded-xl bg-cyan-accent/15 text-cyan-accent w-fit">
              <Video className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Automated Highlights</h4>
            <p className="text-xs text-text-muted leading-relaxed">
              Automated video clip compilation trimming unnecessary dead time to generate shareable technical summary clips for athletes.
            </p>
          </div>

        </div>

        {/* Technical Pipeline Walkthrough */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-white/10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
            <div>
              <div className="text-xs font-mono text-cyan-accent uppercase tracking-wider">End-to-End Pipeline</div>
              <h4 className="text-lg font-bold text-white mt-0.5">Software & Vision Workflow Architecture</h4>
            </div>
            <div className="flex items-center space-x-2 text-xs font-mono text-text-muted">
              <span>Flutter</span> • <span>React</span> • <span>Python Flask</span> • <span>OpenCV</span> • <span>YOLO</span> • <span>Firebase</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {pipelineStages.map((stage, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-background border border-white/5 space-y-2">
                <div className="text-xs font-mono text-cyan-accent font-bold">STAGE 0{idx + 1}</div>
                <div className="text-xs font-bold text-white">{stage.title}</div>
                <p className="text-[11px] text-text-muted leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-surface-elevated border border-white/5 text-xs text-text-secondary flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-white font-semibold">Capstone Significance:</span>
              <p className="text-text-muted">
                Batsman Pro stands as the flagship demonstration of my ability to blend complex machine vision models with intuitive cross-platform software engineering.
              </p>
            </div>
            <a
              href="https://github.com/afnaninayat/batsman-pro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-cyan-accent hover:underline text-xs font-semibold shrink-0"
            >
              <span>View Repository</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
