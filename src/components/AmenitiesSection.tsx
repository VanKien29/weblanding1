import React, { useState, useRef } from 'react';
import { AMENITIES_LIST } from '../data/residenceData';
import { ArrowUpRight, Check, Eye } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

interface AmenitiesSectionProps {
  onOpenLightbox: (imageUrl: string, title: string) => void;
  onOpenBooking: () => void;
}

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({
  onOpenLightbox,
  onOpenBooking,
}) => {
  const [activeAmenityIndex, setActiveAmenityIndex] = useState(0);
  const activeAmenity = AMENITIES_LIST[activeAmenityIndex];

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const photoParallaxY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section
      ref={sectionRef}
      id="amenities"
      className="relative w-full bg-[#0a0c0e] py-28 sm:py-36 lg:py-44 overflow-hidden border-b border-[#C8A97E]/15"
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
            <span className="text-xs font-mono tracking-[0.3em] text-[#C8A97E]">07 / 10</span>
            <div className="w-12 h-[1px] bg-[#C8A97E]/40" />
            <span className="text-[10px] tracking-[0.35em] text-[#EDE8DF]/50 uppercase">
              RESTORATIVE AMENITIES
            </span>
          </div>

          <div className="hidden sm:flex items-center space-x-2 text-[10px] tracking-[0.25em] text-[#EDE8DF]/50 uppercase">
            <span>LEVELS 54, 55 & 60 · 12,000 TOTAL SQ FT</span>
          </div>
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16 sm:mb-20"
        >
          <span className="text-[11px] tracking-[0.35em] text-[#C8A97E] uppercase block mb-3 font-medium">
            REFINED ELEVATION
          </span>
          <h2 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-light text-[#FBF9F5] tracking-[0.02em] leading-[1.05]">
            THREE TIERS OF <br />
            <span className="italic text-[#C8A97E]">PRIVATE SPLENDOR.</span>
          </h2>
        </motion.div>

        {/* Large Numbered Typography & Dynamic Visual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Numbered Typography List (01 to 06) */}
          <div className="lg:col-span-6 flex flex-col space-y-3">
            {AMENITIES_LIST.map((amenity, index) => {
              const isActive = activeAmenityIndex === index;
              return (
                <motion.div
                  key={amenity.id}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setActiveAmenityIndex(index)}
                  className={`group cursor-pointer py-4 px-5 border-b transition-all duration-400 flex items-center justify-between ${
                    isActive
                      ? 'border-[#C8A97E] bg-[#14171a]/80 pl-8'
                      : 'border-[#EDE8DF]/10 hover:border-[#C8A97E]/40 hover:bg-[#101315]/50'
                  }`}
                >
                  <div className="flex items-center space-x-6">
                    {/* Oversized Number */}
                    <span
                      className={`font-mono text-xl sm:text-2xl transition-colors duration-300 ${
                        isActive ? 'text-[#C8A97E]' : 'text-[#EDE8DF]/30 group-hover:text-[#C8A97E]/70'
                      }`}
                    >
                      {amenity.number}
                    </span>

                    <div>
                      <h3
                        className={`font-serif-luxury text-2xl sm:text-3xl font-light transition-colors duration-300 ${
                          isActive ? 'text-[#FBF9F5]' : 'text-[#EDE8DF]/70 group-hover:text-[#FBF9F5]'
                        }`}
                      >
                        {amenity.title}
                      </h3>
                      <p className="text-[11px] text-[#EDE8DF]/50 tracking-wider font-light">
                        {amenity.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-[#C8A97E] animate-pulse" />
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-[#EDE8DF]/20 group-hover:text-[#C8A97E] transition-colors" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Monumental Photography with Parallax Transitions */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative overflow-hidden bg-[#121417] shadow-[0_25px_70px_rgba(0,0,0,0.8)] border border-[#C8A97E]/30 group">
              <motion.div style={{ y: photoParallaxY }} className="will-change-transform scale-105">
                <img
                  key={activeAmenity.imageUrl}
                  src={activeAmenity.imageUrl}
                  alt={activeAmenity.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-[500px] sm:h-[620px] object-cover object-center transition-all duration-700 ease-out brightness-[0.82] group-hover:scale-105"
                />
              </motion.div>

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0e] via-[#0a0c0e]/30 to-transparent" />

              {/* Fullscreen view trigger */}
              <button
                onClick={() => onOpenLightbox(activeAmenity.imageUrl, activeAmenity.title)}
                className="absolute top-6 right-6 p-3 bg-[#0a0c0e]/80 hover:bg-[#C8A97E] text-[#EDE8DF] hover:text-[#0a0c0e] backdrop-blur-md border border-[#C8A97E]/30 transition-all duration-300"
                aria-label="Expand image"
              >
                <Eye className="w-4 h-4" />
              </button>

              {/* Bottom Information Card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#0a0c0e]/90 backdrop-blur-md border border-[#C8A97E]/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#C8A97E]">
                    AMENITY {activeAmenity.number}
                  </span>
                  <span className="text-[10px] tracking-widest text-[#EDE8DF]/60 uppercase">
                    PROPRIETOR ACCESS ONLY
                  </span>
                </div>

                <h4 className="font-serif-luxury text-2xl text-[#FBF9F5] mb-2">
                  {activeAmenity.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#EDE8DF]/75 font-light leading-relaxed mb-4">
                  {activeAmenity.description}
                </p>

                {/* Amenity Specifications Pills */}
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#C8A97E]/20">
                  {activeAmenity.specs.map((spec) => (
                    <div key={spec} className="flex items-center space-x-2 text-[10px] text-[#EDE8DF]/80">
                      <Check className="w-3 h-3 text-[#C8A97E] flex-shrink-0" />
                      <span className="truncate">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Corner Decorative Frame */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-[#C8A97E]/40 pointer-events-none" />
          </motion.div>
        </div>

        {/* Bottom Booking Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center space-x-3 px-8 py-3.5 bg-transparent border border-[#C8A97E] text-[#C8A97E] hover:bg-[#C8A97E] hover:text-[#0a0c0e] transition-all duration-300 text-xs tracking-[0.25em] uppercase font-medium"
          >
            <span>ARRANGE A PRIVATE TOUR OF AMENITIES</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
