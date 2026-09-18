import React, { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

interface BrandIntroProps {
  onLearnMore?: () => void;
}

export const BrandIntro: React.FC<BrandIntroProps> = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
  const floatingCardY = useTransform(scrollYProgress, [0, 1], ['12%', '-12%']);

  return (
    <section
      ref={containerRef}
      id="brand-intro-section"
      className="relative w-full bg-[#0e1012] py-28 sm:py-36 lg:py-44 overflow-hidden border-b border-[#C8A97E]/10"
    >
      {/* Decorative ambient background subtle light */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#C8A97E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Index Marker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-12 sm:mb-16"
        >
          <span className="text-xs font-mono tracking-[0.3em] text-[#C8A97E]">02 / 10</span>
          <div className="w-12 h-[1px] bg-[#C8A97E]/40" />
          <span className="text-[10px] tracking-[0.35em] text-[#EDE8DF]/50 uppercase">
            BRAND STATEMENT & PHILOSOPHY
          </span>
        </motion.div>

        {/* Asymmetrical Layout: Overlapping Typography & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Large Editorial Typography and Description */}
          <div className="lg:col-span-6 z-20 flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif-luxury text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[0.03em] text-[#FBF9F5] leading-[0.92] mb-8"
            >
              ARCHITECTURE. <br />
              <span className="italic text-[#C8A97E] block pl-2 sm:pl-4">ELEVATED.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl space-y-6 text-[#EDE8DF]/80 font-light text-base sm:text-lg leading-relaxed pt-4 border-l border-[#C8A97E]/30 pl-6 sm:pl-8"
            >
              <p>
                Conceived as a vertical sanctuary in the sky, Aurelia Residences represents
                a singular paradigm in modern architectural mastery. Designed to harmonize
                monumental proportion with profound domestic intimacy.
              </p>
              <p className="text-sm sm:text-base text-[#EDE8DF]/65">
                Each home occupies an expansive vantage point, sculpted with precision to
                capture shifts of natural daylight, ocean breezes, and the mesmerizing
                chromatic glow of the city at dusk. Here, architecture is not merely built—it is felt.
              </p>
            </motion.div>

            {/* Architectural Signature Detail */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 sm:mt-12 flex items-center space-x-6 pt-8 border-t border-[#EDE8DF]/10"
            >
              <div className="flex flex-col">
                <span className="text-[9px] tracking-[0.3em] text-[#C8A97E] uppercase mb-1">
                  PRINCIPAL ARCHITECT
                </span>
                <span className="font-serif-luxury text-xl text-[#FBF9F5] tracking-wide">
                  Vincent Laurent, RIBA
                </span>
                <span className="text-xs text-[#EDE8DF]/50 tracking-wider">
                  Paris · New York · Tokyo
                </span>
              </div>
              <div className="h-10 w-[1px] bg-[#C8A97E]/20" />
              <div className="flex flex-col">
                <span className="text-[9px] tracking-[0.3em] text-[#C8A97E] uppercase mb-1">
                  LIMITED RELEASE
                </span>
                <span className="font-serif-luxury text-xl text-[#FBF9F5] tracking-wide">
                  Only 48 Residences
                </span>
                <span className="text-xs text-[#EDE8DF]/50 tracking-wider">
                  By Private Invitation
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dramatic Architectural Photograph with Overlapping Elements & Parallax */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0">
            {/* Main Architectural Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.7)] group"
            >
              <motion.div style={{ y: imageY }} className="will-change-transform scale-110">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
                  alt="Aurelia Residence Architectural Facade and Cantilevers"
                  referrerPolicy="no-referrer"
                  className="w-full h-[520px] sm:h-[640px] object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f11]/80 via-transparent to-transparent" />

              {/* Floating Caption / Detail */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#0d0f11]/90 backdrop-blur-md border border-[#C8A97E]/20 flex items-center justify-between">
                <div>
                  <span className="text-[9px] tracking-[0.3em] text-[#C8A97E] uppercase block mb-0.5">
                    FACADE COMPOSITION
                  </span>
                  <span className="text-xs tracking-wider text-[#FBF9F5]">
                    Aerodynamic bronze aerodynamic ribs & continuous glass
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full border border-[#C8A97E]/40 flex items-center justify-center text-[#C8A97E]">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>

            {/* Overlapping Secondary Editorial Accent Card with counter-parallax */}
            <motion.div
              style={{ y: floatingCardY }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1, delay: 0.4 }}
              className="hidden sm:block absolute -bottom-10 -left-10 z-20 w-64 bg-[#14171a] p-6 border border-[#C8A97E]/30 shadow-2xl"
            >
              <span className="font-serif-luxury text-3xl text-[#C8A97E] italic block mb-1">
                “Form & Light”
              </span>
              <p className="text-[11px] text-[#EDE8DF]/70 leading-relaxed font-light">
                Sculpted angles deflect wind turbulence while channeling undisturbed coastal air.
              </p>
            </motion.div>

            {/* Delicate Architectural Grid Geometry lines */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border border-[#C8A97E]/20 pointer-events-none z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};
