import React from 'react';
import { Github, ExternalLink, ArrowUpRight, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, isFeatured = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`group relative rounded-2xl bg-[#121817] border border-[#29312F] overflow-hidden transition-all duration-300 hover:border-[#B6FF00]/50 hover:shadow-[0_15px_40px_-15px_rgba(182,255,0,0.2)] flex flex-col ${
        isFeatured ? 'lg:grid lg:grid-cols-12 lg:gap-8 p-6 lg:p-8' : 'p-6'
      }`}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-20 inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#B6FF00] text-[#0B0F0E] font-extrabold text-xs tracking-wide shadow-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>FLAGSHIP WORK</span>
        </div>
      )}

      {/* Image Container */}
      <div className={`relative overflow-hidden rounded-xl bg-[#0B0F0E] border border-[#29312F] ${
        isFeatured ? 'lg:col-span-6 h-64 sm:h-80 lg:h-full min-h-[280px]' : 'h-52 w-full mb-6'
      }`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121817] via-transparent to-transparent opacity-60"></div>
        <div className="absolute bottom-3 left-3 z-10 inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-[#0B0F0E]/80 backdrop-blur-md border border-[#29312F] text-[11px] font-mono text-[#A7B0AD]">
          <span>{project.badge}</span>
        </div>
      </div>

      {/* Content Container */}
      <div className={`flex flex-col justify-between ${isFeatured ? 'lg:col-span-6 mt-6 lg:mt-0 space-y-5' : 'space-y-4 flex-1'}`}>
        
        <div>
          {/* Category */}
          <div className="text-xs font-mono text-[#B6FF00] mb-2 tracking-wide uppercase">
            {project.category}
          </div>

          {/* Title */}
          <h3 className={`font-bold text-white group-hover:text-[#B6FF00] transition-colors flex items-center justify-between ${
            isFeatured ? 'text-2xl sm:text-3xl' : 'text-xl'
          }`}>
            <span>{project.title}</span>
            <ArrowUpRight className="w-5 h-5 text-[#6F7975] group-hover:text-[#B6FF00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </h3>

          {/* Description */}
          <p className="text-[#A7B0AD] text-sm mt-3 leading-relaxed">
            {project.description}
          </p>

          {/* Features Checklist */}
          {project.features && (
            <div className="mt-4 space-y-2">
              <div className="text-xs font-mono text-[#6F7975] uppercase tracking-wider">Key Highlights:</div>
              <ul className="grid grid-cols-1 gap-1.5 text-xs text-[#A7B0AD]">
                {project.features.slice(0, isFeatured ? 6 : 4).map((feat, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B6FF00] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Bottom Metadata & Actions */}
        <div className="pt-4 border-t border-[#29312F] space-y-4">
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-[#1A211F] text-[11px] font-mono text-[#A7B0AD] border border-[#29312F] group-hover:border-[#B6FF00]/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3 pt-1">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-[#1A211F] border border-[#29312F] text-xs font-semibold text-white hover:bg-[#29312F] hover:border-[#B6FF00]/50 transition-all"
            >
              <Github className="w-3.5 h-3.5 text-[#B6FF00]" />
              <span>Source Code</span>
            </a>

            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-[#B6FF00] text-[#0B0F0E] text-xs font-bold hover:bg-[#9BE600] transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

        </div>

      </div>
    </motion.div>
  );
}
