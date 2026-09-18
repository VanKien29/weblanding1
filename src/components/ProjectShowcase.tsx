import React, { useState, useRef } from 'react';
import { RESIDENCE_STATS } from '../data/residenceData';
import { Maximize2, ShieldCheck, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ProjectShowcaseProps {
  onOpenBooking: () => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onOpenBooking }) => {
  const [activeStatIndex, setActiveStatIndex] = useState(0);
  const panoramaRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: panoramaRef,
    offset: ['start end', 'end start'],
  });

  const panoramaY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const panoramaScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.12]);

  return (
    <section
      id="project-showcase-section"
      className="relative w-full bg-[#0a0c0d] py-28 sm:py-36 overflow-hidden border-b border-[#C8A97E]/15"
    >
      {/* Section Index Marker */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center space-x-4">
            <span className="text-xs font-mono tracking-[0.3em] text-[#C8A97E]">03 / 10</span>
            <div className="w-12 h-[1px] bg-[#C8A97E]/40" />
            <span className="text-[10px] tracking-[0.35em] text-[#EDE8DF]/50 uppercase">
              PROJECT SCALE & SPECIFICATION
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-2 text-[10px] tracking-[0.25em] text-[#C8A97E] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>UNCOMPROMISING PROPORTIONS</span>
          </div>
        </motion.div>
      </div>

      {/* Dramatic Full-Width Architectural Panorama with Parallax */}
      <div ref={panoramaRef} className="relative w-full h-[55vh] sm:h-[65vh] lg:h-[75vh] overflow-hidden group">
        <motion.div
          style={{ y: panoramaY, scale: panoramaScale }}
          className="w-full h-full will-change-transform"
        >
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2600&q=90"
            alt="Aurelia Residences Full Architectural Panorama at Sunset"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center brightness-[0.72] contrast-[1.05]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c0d] via-transparent to-[#0a0c0d]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c0d]/80 via-transparent to-[#0a0c0d]/80" />

        {/* Floating Architectural Badge */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="absolute top-8 left-6 sm:left-12 lg:left-20 bg-[#0a0c0d]/80 backdrop-blur-md px-5 py-3 border border-[#C8A97E]/30 text-left"
        >
          <span className="text-[9px] tracking-[0.35em] text-[#C8A97E] uppercase block">
            VERTICAL MONOLITH
          </span>
          <span className="font-serif-luxury text-sm tracking-wider text-[#FBF9F5]">
            342m Symmetrical Silhouette
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="absolute bottom-8 right-6 sm:right-12 lg:right-20 hidden sm:flex items-center space-x-3 bg-[#0a0c0d]/85 backdrop-blur-md px-5 py-3 border border-[#EDE8DF]/15 text-[#EDE8DF]/80 text-xs"
        >
          <ShieldCheck className="w-4 h-4 text-[#C8A97E]" />
          <span className="tracking-widest uppercase text-[10px]">
            LEED Platinum Certified Architecture
          </span>
        </motion.div>
      </div>

      {/* Project Statistics: Oversized Typography without Standard Cards */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-16 sm:mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9 }}
          className="text-left mb-10 sm:mb-14"
        >
          <span className="text-[10px] tracking-[0.35em] text-[#C8A97E] uppercase block mb-2">
            MEASURED PERFECTION
          </span>
          <h3 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-light text-[#FBF9F5]">
            Engineering extraordinary parameters.
          </h3>
        </motion.div>

        {/* Oversized Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pt-4">
          {RESIDENCE_STATS.map((stat, idx) => {
            const isSelected = activeStatIndex === idx;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setActiveStatIndex(idx)}
                className={`group relative cursor-pointer pb-8 border-b transition-all duration-500 ${
                  isSelected
                    ? 'border-[#C8A97E] text-[#FBF9F5]'
                    : 'border-[#EDE8DF]/15 text-[#EDE8DF]/60 hover:border-[#C8A97E]/60'
                }`}
              >
                {/* Number & Accent Line */}
                <div className="flex items-baseline justify-between mb-3">
                  <span className="font-serif-luxury text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#FBF9F5] group-hover:text-[#C8A97E] transition-colors duration-300">
                    {stat.number}
                  </span>
                  <span className="text-[11px] font-mono text-[#C8A97E]/70 tracking-widest">
                    0{idx + 1}
                  </span>
                </div>

                {/* Stat Label */}
                <h4 className="text-xs tracking-[0.25em] uppercase font-medium text-[#C8A97E] mb-3">
                  {stat.label}
                </h4>

                {/* Detail Description */}
                <p className="text-xs sm:text-sm text-[#EDE8DF]/75 font-light leading-relaxed">
                  {stat.detail}
                </p>

                {/* Subtle active glow bar */}
                <div
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#C8A97E] transition-all duration-500 ${
                    isSelected ? 'w-full' : 'w-0'
                  }`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom invitation line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-[#EDE8DF]/10 pt-8 gap-4"
        >
          <p className="text-xs tracking-wider text-[#EDE8DF]/60 font-light">
            Architectural models and custom floor plate configurations available upon private consultation.
          </p>
          <button
            onClick={onOpenBooking}
            className="text-xs tracking-[0.25em] text-[#C8A97E] hover:text-[#D4AF37] uppercase flex items-center space-x-2 transition-colors duration-300 group"
          >
            <span>REQUEST ARCHITECTURAL FOLIO</span>
            <Maximize2 className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
