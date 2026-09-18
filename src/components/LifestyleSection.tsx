import React, { useState, useRef } from 'react';
import { LIFESTYLE_STORIES } from '../data/residenceData';
import { Clock, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

interface LifestyleSectionProps {
  onOpenBooking: () => void;
  onOpenLightbox: (imageUrl: string, title: string) => void;
}

export const LifestyleSection: React.FC<LifestyleSectionProps> = ({
  onOpenBooking,
  onOpenLightbox,
}) => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const activeStory = LIFESTYLE_STORIES[activeStoryIndex];

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const primaryImageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
  const secondaryImageY = useTransform(scrollYProgress, [0, 1], ['12%', '-12%']);

  return (
    <section
      ref={sectionRef}
      id="lifestyle"
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
            <span className="text-xs font-mono tracking-[0.3em] text-[#C8A97E]">06 / 10</span>
            <div className="w-12 h-[1px] bg-[#C8A97E]/40" />
            <span className="text-[10px] tracking-[0.35em] text-[#EDE8DF]/50 uppercase">
              THE ART OF LIVING
            </span>
          </div>

          <div className="hidden sm:flex items-center space-x-2 text-[10px] tracking-[0.25em] text-[#C8A97E] uppercase">
            <span>24/7 CURATED PRIVATE CONCIERGE</span>
          </div>
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14 sm:mb-18"
        >
          <span className="text-[11px] tracking-[0.35em] text-[#C8A97E] uppercase block mb-3 font-medium">
            LIFESTYLE & RITUALS
          </span>
          <h2 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-light text-[#FBF9F5] tracking-[0.02em] leading-[1.05]">
            MORE THAN <br />
            <span className="italic text-[#C8A97E]">A RESIDENCE.</span>
          </h2>
        </motion.div>

        {/* Interactive Rituals Selector Pills */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-16">
          {LIFESTYLE_STORIES.map((story, index) => {
            const isSelected = activeStoryIndex === index;
            return (
              <motion.button
                key={story.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                onClick={() => setActiveStoryIndex(index)}
                className={`p-5 text-left border transition-all duration-300 relative ${
                  isSelected
                    ? 'bg-[#15181b] border-[#C8A97E] shadow-lg'
                    : 'bg-transparent border-[#EDE8DF]/10 hover:border-[#C8A97E]/40 hover:bg-[#121417]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-mono tracking-widest text-[#C8A97E]">
                    {story.time}
                  </span>
                  <span className="text-[9px] font-mono text-[#EDE8DF]/40">
                    0{index + 1}
                  </span>
                </div>
                <h3
                  className={`font-serif-luxury text-lg sm:text-xl font-light ${
                    isSelected ? 'text-[#FBF9F5]' : 'text-[#EDE8DF]/70'
                  }`}
                >
                  {story.title}
                </h3>
                <div
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#C8A97E] transition-all duration-300 ${
                    isSelected ? 'w-full' : 'w-0'
                  }`}
                />
              </motion.button>
            );
          })}
        </div>

        {/* Overlapping Editorial Presentation for the Active Ritual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Main Hero Photograph with secondary floating image */}
          <div className="lg:col-span-7 relative">
            {/* Primary Image with parallax */}
            <motion.div
              onClick={() => onOpenLightbox(activeStory.imageUrl, activeStory.title)}
              className="relative overflow-hidden bg-[#131618] border border-[#C8A97E]/20 cursor-pointer group shadow-2xl"
            >
              <motion.div style={{ y: primaryImageY }} className="will-change-transform scale-105">
                <img
                  key={activeStory.imageUrl}
                  src={activeStory.imageUrl}
                  alt={activeStory.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-[460px] sm:h-[560px] object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out brightness-[0.85]"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f11]/80 via-transparent to-transparent" />

              <div className="absolute top-6 left-6 bg-[#0d0f11]/80 backdrop-blur-md px-4 py-2 border border-[#C8A97E]/30 text-left">
                <span className="text-[9px] tracking-[0.25em] text-[#C8A97E] uppercase block flex items-center space-x-1.5">
                  <Clock className="w-3 h-3 text-[#C8A97E]" />
                  <span>{activeStory.time}</span>
                </span>
                <span className="font-serif-luxury text-base text-[#FBF9F5]">
                  {activeStory.subtitle}
                </span>
              </div>
            </motion.div>

            {/* Overlapping Secondary Vignette Image with counter-parallax */}
            {activeStory.secondaryImageUrl && (
              <motion.div
                style={{ y: secondaryImageY }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                onClick={() => onOpenLightbox(activeStory.secondaryImageUrl!, `${activeStory.title} — Detail`)}
                className="hidden sm:block absolute -bottom-8 -right-8 w-56 lg:w-64 h-64 lg:h-72 border-2 border-[#C8A97E]/40 overflow-hidden shadow-2xl bg-[#0d0f11] z-20 cursor-pointer group"
              >
                <img
                  src={activeStory.secondaryImageUrl}
                  alt={`${activeStory.title} secondary impression`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f11]/60 to-transparent" />
                <div className="absolute bottom-2 left-3 right-3 text-[9px] tracking-[0.2em] text-[#FBF9F5] uppercase">
                  ATMOSPHERIC DETAIL
                </div>
              </motion.div>
            )}
          </div>

          {/* Editorial Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-center text-left"
          >
            <div className="inline-flex items-center space-x-3 mb-4">
              <span className="w-8 h-[1px] bg-[#C8A97E]" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8A97E] font-mono">
                RITUAL {activeStoryIndex + 1} OF 4
              </span>
            </div>

            <h3 className="font-serif-luxury text-3xl sm:text-5xl font-light text-[#FBF9F5] mb-2 leading-tight">
              {activeStory.title}
            </h3>

            <p className="font-serif-luxury italic text-xl text-[#C8A97E] mb-6">
              {activeStory.subtitle}
            </p>

            <p className="text-base text-[#EDE8DF]/80 font-light leading-relaxed mb-8">
              {activeStory.description}
            </p>

            <div className="pt-6 border-t border-[#EDE8DF]/10 space-y-4">
              <div className="flex items-center justify-between text-xs tracking-wider text-[#EDE8DF]/60">
                <span className="uppercase text-[10px] text-[#C8A97E]">Concierge Service:</span>
                <span>White-glove private residential Butler</span>
              </div>
              <div className="flex items-center justify-between text-xs tracking-wider text-[#EDE8DF]/60">
                <span className="uppercase text-[10px] text-[#C8A97E]">Accessibility:</span>
                <span>Exclusive to 48 resident proprietors</span>
              </div>
            </div>

            <div className="mt-10">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 border border-[#C8A97E] text-[#C8A97E] hover:bg-[#C8A97E] hover:text-[#0d0f11] text-[10px] tracking-[0.25em] uppercase font-medium transition-all duration-300 flex items-center space-x-2"
              >
                <span>INQUIRE ABOUT RESIDENCE CONCIERGE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
