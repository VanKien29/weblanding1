import React, { useRef } from 'react';
import { ARCHITECTURE_DETAILS } from '../data/residenceData';
import { Layers, Compass, Building2 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ArchitectureStoryProps {
  onOpenBooking: () => void;
}

export const ArchitectureStory: React.FC<ArchitectureStoryProps> = ({ onOpenBooking }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const towerParallaxY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const quoteParallaxY = useTransform(scrollYProgress, [0, 1], ['15px', '-20px']);

  return (
    <section
      ref={sectionRef}
      id="architecture"
      className="relative w-full bg-[#0d0f11] py-28 sm:py-36 lg:py-44 overflow-hidden border-b border-[#C8A97E]/15"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Index Marker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-12 sm:mb-16"
        >
          <div className="flex items-center space-x-4">
            <span className="text-xs font-mono tracking-[0.3em] text-[#C8A97E]">08 / 10</span>
            <div className="w-12 h-[1px] bg-[#C8A97E]/40" />
            <span className="text-[10px] tracking-[0.35em] text-[#EDE8DF]/50 uppercase">
              ARCHITECTURAL GENESIS
            </span>
          </div>

          <div className="hidden sm:flex items-center space-x-2 text-[10px] tracking-[0.25em] text-[#C8A97E] uppercase">
            <span>RIBA INTERNATIONAL AWARD NOMINEE</span>
          </div>
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mb-16 sm:mb-20"
        >
          <span className="text-[11px] tracking-[0.35em] text-[#C8A97E] uppercase block mb-3 font-medium">
            A MONUMENTAL DIALOGUE
          </span>
          <h2 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-[#FBF9F5] tracking-[0.02em] leading-[0.98]">
            DESIGNED TO DEFINE <br />
            <span className="italic text-[#C8A97E]">THE SKYLINE.</span>
          </h2>
        </motion.div>

        {/* Hero Architectural Visual with Parallax & Gold Overlay Details */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full overflow-hidden border border-[#C8A97E]/30 bg-[#121417] shadow-2xl mb-16 group"
        >
          <motion.div style={{ y: towerParallaxY }} className="w-full will-change-transform scale-105">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=90"
              alt="Aurelia Residences Soaring Architectural Monolith"
              referrerPolicy="no-referrer"
              className="w-full h-[500px] sm:h-[650px] lg:h-[750px] object-cover object-center group-hover:scale-105 transition-transform duration-1200 ease-out brightness-[0.78]"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f11] via-transparent to-transparent opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f11]/70 via-transparent to-transparent" />

          {/* Overlaid Gold Architectural Lines with Subtle Parallax */}
          <motion.div
            style={{ y: quoteParallaxY }}
            className="absolute top-12 left-8 sm:left-14 max-w-md p-6 bg-[#0d0f11]/85 backdrop-blur-md border border-[#C8A97E]/40"
          >
            <span className="text-[9px] font-mono tracking-[0.3em] text-[#C8A97E] uppercase block mb-1">
              STRUCTURAL PHILOSOPHY
            </span>
            <p className="font-serif-luxury text-xl sm:text-2xl text-[#FBF9F5] font-light leading-snug">
              “A crystalline tower calibrated to refract light like raw gemstone while standing impervious to coastal typhoons.”
            </p>
            <span className="text-[10px] text-[#EDE8DF]/60 tracking-widest block mt-3 uppercase">
              — Vincent Laurent, Lead Design Principal
            </span>
          </motion.div>

          {/* Bottom Floating Technical Tag */}
          <div className="absolute bottom-8 right-6 sm:right-12 hidden md:flex items-center space-x-6 bg-[#0d0f11]/90 backdrop-blur-md px-6 py-4 border border-[#C8A97E]/30">
            <div>
              <span className="text-[9px] tracking-[0.25em] text-[#C8A97E] uppercase block">TOTAL HEIGHT</span>
              <span className="font-serif-luxury text-lg text-[#FBF9F5]">342 Meters / 68 Stories</span>
            </div>
            <div className="w-[1px] h-8 bg-[#C8A97E]/30" />
            <div>
              <span className="text-[9px] tracking-[0.25em] text-[#C8A97E] uppercase block">WIND AERODYNAMICS</span>
              <span className="font-serif-luxury text-lg text-[#FBF9F5]">Vortex-Shedding Corners</span>
            </div>
          </div>
        </motion.div>

        {/* Narrative & Material Palette Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 pt-6">
          {/* Concept Block 1 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="border-t border-[#C8A97E]/30 pt-6"
          >
            <div className="flex items-center space-x-2 text-[#C8A97E] mb-3">
              <Building2 className="w-4 h-4" />
              <span className="text-[10px] tracking-[0.25em] uppercase font-mono">VISION</span>
            </div>
            <h3 className="font-serif-luxury text-2xl text-[#FBF9F5] mb-3">
              Aerodynamic Form
            </h3>
            <p className="text-xs sm:text-sm text-[#EDE8DF]/75 font-light leading-relaxed">
              Engineered with curved tapering corners that diminish wind drag by 34%, ensuring seamless tranquility within even during coastal storm conditions.
            </p>
          </motion.div>

          {/* Concept Block 2 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border-t border-[#C8A97E]/30 pt-6"
          >
            <div className="flex items-center space-x-2 text-[#C8A97E] mb-3">
              <Layers className="w-4 h-4" />
              <span className="text-[10px] tracking-[0.25em] uppercase font-mono">MATERIALITY</span>
            </div>
            <h3 className="font-serif-luxury text-2xl text-[#FBF9F5] mb-3">
              Enduring Elements
            </h3>
            <p className="text-xs sm:text-sm text-[#EDE8DF]/75 font-light leading-relaxed">
              Curated from hand-selected Roman travertine quarries and fluted champagne bronze mullions that patina gracefully with age and maritime atmosphere.
            </p>
          </motion.div>

          {/* Concept Block 3 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="border-t border-[#C8A97E]/30 pt-6"
          >
            <div className="flex items-center space-x-2 text-[#C8A97E] mb-3">
              <Compass className="w-4 h-4" />
              <span className="text-[10px] tracking-[0.25em] uppercase font-mono">SOLAR ORIENTATION</span>
            </div>
            <h3 className="font-serif-luxury text-2xl text-[#FBF9F5] mb-3">
              Kinetic Illumination
            </h3>
            <p className="text-xs sm:text-sm text-[#EDE8DF]/75 font-light leading-relaxed">
              Residences are angled precisely toward solar trajectories, maximizing natural morning illumination while mitigating thermal heat gain.
            </p>
          </motion.div>
        </div>

        {/* Architectural Team Citation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 p-8 bg-[#121417] border border-[#C8A97E]/20 flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div>
            <span className="text-[9px] tracking-[0.3em] text-[#C8A97E] uppercase block mb-1">
              THE COLLABORATIVE ATELIER
            </span>
            <p className="font-serif-luxury text-xl text-[#FBF9F5]">
              {ARCHITECTURE_DETAILS.architect} &nbsp;·&nbsp; {ARCHITECTURE_DETAILS.interiorDesign}
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-6 py-3 bg-[#C8A97E] hover:bg-[#D4AF37] text-[#0d0f11] text-[10px] tracking-[0.25em] uppercase font-medium transition-colors"
          >
            REQUEST ARCHITECTURAL PORTFOLIO
          </button>
        </motion.div>
      </div>
    </section>
  );
};
