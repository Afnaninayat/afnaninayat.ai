import React from 'react';
import { Github, ExternalLink, ArrowUpRight, CheckCircle2, Sparkles, Layers, Cpu, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, isFeatured = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`group relative rounded-3xl bg-surface border border-white/10 overflow-hidden transition-all duration-300 hover:border-cyan-accent/50 hover:shadow-cyan-glow flex flex-col justify-between ${
        isFeatured ? 'lg:grid lg:grid-cols-12 lg:gap-8 p-6 lg:p-8' : 'p-6'
      }`}
    >
      <div>
        {/* Top Tag & Category */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-mono text-cyan-accent uppercase tracking-wider font-semibold">
            {project.category}
          </span>
          <span className="text-[10px] font-mono text-text-muted bg-surface-elevated px-2.5 py-1 rounded-full border border-white/5">
            {project.tag}
          </span>
        </div>

        {/* Thumbnail Image (if provided) */}
        {project.image && (
          <div className="relative overflow-hidden rounded-2xl bg-background border border-white/10 h-48 w-full mb-5 group-hover:border-cyan-accent/30 transition-colors">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-accent transition-colors flex items-center justify-between">
          <span>{project.title}</span>
          <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-cyan-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </h3>

        {/* Role & Subtitle */}
        <div className="text-xs font-mono text-text-muted mt-1 mb-3">
          Role: <span className="text-text-secondary">{project.myRole}</span>
        </div>

        {/* Summary */}
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
          {project.summary}
        </p>

        {/* Key Architecture / Highlights */}
        {project.highlights && (
          <div className="space-y-2 mb-5">
            <div className="text-[11px] font-mono text-text-muted uppercase tracking-wider">
              Architecture Highlights:
            </div>
            <ul className="space-y-1.5 text-xs text-text-secondary">
              {project.highlights.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-accent shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Skills Demonstrated */}
        {project.skillsDemonstrated && (
          <div className="p-3 rounded-xl bg-surface-elevated border border-white/5 text-[11px] text-text-muted mb-4 font-mono">
            <span className="text-cyan-accent font-semibold">Skills Demonstrated:</span> {project.skillsDemonstrated}
          </div>
        )}
      </div>

      {/* Footer Technologies & Links */}
      <div className="pt-4 border-t border-white/10 space-y-3">
        {/* Technologies Badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg bg-surface-elevated text-[10px] font-mono text-text-secondary border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center space-x-3 pt-1">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-surface-elevated border border-white/10 text-xs font-semibold text-white hover:border-cyan-accent hover:text-cyan-accent transition-colors"
          >
            <Github className="w-3.5 h-3.5 text-cyan-accent" />
            <span>Repository & Specs</span>
          </a>
          
          <span className="text-[11px] font-mono text-text-muted">
            Details on request
          </span>
        </div>
      </div>

    </motion.div>
  );
}
