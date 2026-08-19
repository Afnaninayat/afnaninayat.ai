import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { FolderGit2, Sparkles } from 'lucide-react';

export default function Projects() {
  const featuredProject = projects.find(p => p.featured);
  const secondaryProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 bg-[#0B0F0E] relative border-t border-[#29312F]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#121817] border border-[#29312F] text-xs font-mono text-[#B6FF00]">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO & CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Selected Work
          </h2>
          <p className="text-[#A7B0AD] text-base max-w-2xl">
            A selection of projects I've built across software development, AI vision analysis, system architecture, and digital hardware verification.
          </p>
        </div>

        {/* Featured Hero Project Card (Batsman Pro) */}
        {featuredProject && (
          <div className="mb-12">
            <ProjectCard project={featuredProject} isFeatured={true} />
          </div>
        )}

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {secondaryProjects.map((project) => (
            <ProjectCard key={project.id} project={project} isFeatured={false} />
          ))}
        </div>

      </div>
    </section>
  );
}
