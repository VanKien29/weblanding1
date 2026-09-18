import React, { useState, useRef } from 'react';
import { RESIDENCE_FEATURES } from '../data/residenceData';
import { Check, Sparkles, Eye, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ResidenceExperienceProps {
  onOpenBooking: () => void;
  onOpenLightbox: (imageUrl: string, title: string) => void;
}

export const ResidenceExperience: React.FC<ResidenceExperienceProps> = ({
  onOpenBooking,
  onOpenLightbox,
}) => {
  const [selectedFeature, setSelectedFeature] = useState(0);
  const active = RESIDENCE_FEATURES[selectedFeature];

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageParallaxY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <section
      ref={sectionRef}
      id="residences"
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
            <span className="text-xs font-mono tracking-[0.3em] text-[#C8A97E]">04 / 10</span>
            <div className="w-12 h-[1px] bg-[#C8A97E]/40" />
            <span className="text-[10px] tracking-[0.35em] text-[#EDE8DF]/50 uppercase">
              THE RESIDENCE EXPERIENCE
            </span>
          </div>

          <div className="hidden sm:flex items-center space-x-2 text-[10px] tracking-[0.25em] text-[#EDE8DF]/50 uppercase">
            <span>TAILORED INTERIORS · ATELIER AURELIA</span>
          </div>
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16 sm:mb-20"
        >
          <span className="text-[11px] tracking-[0.35em] text-[#C8A97E] uppercase block mb-3 font-medium">
            CURATED LIVING SPACES
          </span>
          <h2 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-light text-[#FBF9F5] tracking-[0.02em] leading-[1.05]">
            EVERY DETAIL, <br />
            <span className="italic text-[#C8A97E]">CONSIDERED.</span>
          </h2>
        </motion.div>

        {/* Editorial Composition: Interactive Feature Tabs & Large Architectural Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Asymmetrical Editorial Navigation of Key Features */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {RESIDENCE_FEATURES.map((feature, idx) => {
                const isActive = selectedFeature === idx;
                return (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => setSelectedFeature(idx)}
                    className={`cursor-pointer transition-all duration-400 p-6 border text-left group ${
                      isActive
                        ? 'bg-[#14181c] border-[#C8A97E] shadow-xl'
                        : 'bg-transparent border-[#EDE8DF]/10 hover:border-[#C8A97E]/40 hover:bg-[#121417]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-[#C8A97E] tracking-widest uppercase">
                        SPEC 0{idx + 1}
                      </span>
                      {isActive && (
                        <span className="text-[9px] tracking-[0.25em] text-[#C8A97E] uppercase flex items-center space-x-1 font-medium">
                          <Check className="w-3 h-3 text-[#C8A97E]" />
                          <span>SELECTED</span>
                        </span>
                      )}
                    </div>

                    <h3
                      className={`font-serif-luxury text-2xl sm:text-3xl font-light transition-colors duration-300 ${
                        isActive ? 'text-[#FBF9F5]' : 'text-[#EDE8DF]/70 group-hover:text-[#FBF9F5]'
                      }`}
                    >
                      {feature.title}
                    </h3>

                    <p className="text-xs text-[#C8A97E]/90 tracking-wider mt-1 font-light">
                      {feature.tagline}
                    </p>

                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mt-4 pt-4 border-t border-[#C8A97E]/20"
                      >
                        <p className="text-xs sm:text-sm text-[#EDE8DF]/80 font-light leading-relaxed">
                          {feature.description}
                        </p>
                        <div className="mt-3 flex items-center space-x-2 text-[10px] tracking-[0.2em] text-[#C8A97E] uppercase">
                          <Sparkles className="w-3 h-3" />
                          <span>{feature.highlight}</span>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-4 flex items-center justify-between"
            >
              <span className="text-xs tracking-widest text-[#EDE8DF]/50 uppercase">
                Custom finishes tailored per residence
              </span>
              <button
                onClick={onOpenBooking}
                className="text-xs tracking-[0.25em] text-[#C8A97E] hover:text-[#D4AF37] uppercase flex items-center space-x-2 transition-colors duration-300 font-medium"
              >
                <span>BOOK IN-PERSON VIEWING</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Monumental Feature Photograph with Dynamic Reveal & Parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            <div className="relative overflow-hidden bg-[#121417] shadow-[0_25px_70px_rgba(0,0,0,0.8)] border border-[#C8A97E]/20 group">
              <motion.div style={{ y: imageParallaxY }} className="w-full will-change-transform scale-105">
                <img
                  key={active.imageUrl}
                  src={active.imageUrl}
                  alt={active.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-[520px] sm:h-[620px] lg:h-[700px] object-cover object-center transition-all duration-700 ease-out brightness-[0.85] group-hover:scale-105"
                />
              </motion.div>

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f11] via-transparent to-transparent opacity-80" />

              {/* Overlay Inspection Button */}
              <button
                onClick={() => onOpenLightbox(active.imageUrl, active.title)}
                className="absolute top-6 right-6 p-3 bg-[#0d0f11]/80 hover:bg-[#C8A97E] text-[#EDE8DF] hover:text-[#0d0f11] backdrop-blur-md border border-[#C8A97E]/30 transition-all duration-300"
                title="Expand full-screen"
                aria-label="Expand image"
              >
                <Eye className="w-4 h-4" />
              </button>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-8 left-8 right-8 bg-[#0d0f11]/85 backdrop-blur-md p-6 border border-[#C8A97E]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[9px] tracking-[0.3em] text-[#C8A97E] uppercase block mb-1">
                    FEATURE HIGHLIGHT
                  </span>
                  <span className="font-serif-luxury text-xl sm:text-2xl text-[#FBF9F5]">
                    {active.title}
                  </span>
                  <p className="text-xs text-[#EDE8DF]/70 font-light mt-1">
                    {active.tagline}
                  </p>
                </div>
                <div className="sm:text-right border-t sm:border-t-0 sm:border-l border-[#C8A97E]/20 pt-3 sm:pt-0 sm:pl-6">
                  <span className="text-[10px] tracking-[0.25em] text-[#C8A97E] uppercase block">
                    MATERIALITY
                  </span>
                  <span className="text-xs text-[#FBF9F5] font-light">
                    {active.highlight}
                  </span>
                </div>
              </div>
            </div>

            {/* Overlapping Architectural Accent Accent Box */}
            <div className="hidden xl:block absolute -top-8 -left-8 w-28 h-28 border border-[#C8A97E]/25 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
