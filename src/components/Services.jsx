import React from 'react';
import { services } from '../data/services';
import { Code2, Eye, Server, Cpu, Wrench, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  Code2,
  Eye,
  Server,
  Cpu
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0B0F0E] relative border-t border-[#29312F]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#121817] border border-[#29312F] text-xs font-mono text-[#B6FF00]">
            <Wrench className="w-3.5 h-3.5" />
            <span>ENGINEERING OFFERINGS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What I Do
          </h2>
          <p className="text-[#A7B0AD] text-base max-w-xl">
            Specialized technical domains where I design, implement, and deliver software & hardware solutions.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const IconComp = iconMap[service.icon] || Code2;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#121817] border border-[#29312F] rounded-2xl p-8 hover:border-[#B6FF00]/50 transition-all duration-300 shadow-xl group flex flex-col justify-between hover:shadow-[0_15px_35px_-15px_rgba(182,255,0,0.15)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-[#1A211F] text-[#B6FF00] border border-[#29312F] group-hover:scale-110 group-hover:bg-[#B6FF00] group-hover:text-[#0B0F0E] transition-all duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-[#6F7975] bg-[#1A211F] px-2.5 py-1 rounded border border-[#29312F]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#B6FF00] transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-xs font-mono text-[#B6FF00]/90 mt-1 mb-4">
                    {service.subtitle}
                  </div>

                  <p className="text-[#A7B0AD] text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#29312F] flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-[#1A211F] text-[11px] font-mono text-[#A7B0AD] border border-[#29312F]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
