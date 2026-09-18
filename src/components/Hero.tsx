import React, { useRef } from 'react';
import { Compass, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

interface HeroProps {
  onOpenBooking: () => void;
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExplore }) => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax transforms based on scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '24%']);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.1]);

  return (
    <section
      ref={containerRef}
      id="hero-section"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0c0d0e]"
    >
      {/* Cinematic Architectural Background Image with Depth Parallax */}
      <motion.div
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2400&q=90"
          alt="Aurelia Residences Modern Architectural Monolith at Dusk"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center brightness-[0.78] contrast-[1.08]"
        />
        {/* Editorial Gradients for Legibility and Luxury Mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f11] via-[#0d0f11]/40 to-[#0d0f11]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#0d0f11_95%)] opacity-80" />
      </motion.div>

      {/* Hero Content Container (Constrained & Centered for 1440px desktop) */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-24 min-h-screen flex flex-col justify-between"
      >
        {/* Top Badges / Pre-title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between w-full pt-4"
        >
          <div className="flex items-center space-x-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E] animate-ping" />
            <span className="text-[10px] sm:text-[11px] tracking-[0.35em] text-[#C8A97E] uppercase font-medium">
              THE PRIVATE COLLECTION · 32 TO 68 FLOORS
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-2 text-[10px] tracking-[0.25em] text-[#EDE8DF]/60 uppercase">
            <Compass className="w-3.5 h-3.5 text-[#C8A97E]" />
            <span>METROPOLITAN WATERFRONT DISTRICT</span>
          </div>
        </motion.div>

        {/* Central Editorial Typography & CTAs */}
        <div className="my-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block mb-3"
          >
            <span className="text-[11px] sm:text-xs tracking-[0.4em] uppercase text-[#EDE8DF]/70 font-light block pl-1 border-l-2 border-[#C8A97E]">
              AN UNRIVALED RESIDENTIAL ICON
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif-luxury text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-light tracking-[0.04em] text-[#FBF9F5] leading-[0.95] mb-8"
          >
            LIVE ABOVE <br />
            <span className="italic font-light text-[#C8A97E]">ORDINARY.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg lg:text-xl font-light text-[#EDE8DF]/85 max-w-xl leading-relaxed tracking-wide mb-10"
          >
            An exceptional collection of residences designed for those who expect more.
            Suspended between the city lights and the open horizon.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
          >
            <button
              id="hero-primary-cta"
              onClick={onOpenBooking}
              className="px-8 py-4 bg-[#C8A97E] hover:bg-[#D4AF37] text-[#0d0f11] font-medium text-xs tracking-[0.28em] uppercase transition-all duration-300 shadow-[0_4px_25px_rgba(200,169,126,0.25)] hover:shadow-[0_4px_35px_rgba(200,169,126,0.45)] hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              BOOK A PRIVATE VIEWING
            </button>

            <button
              id="hero-secondary-cta"
              onClick={onExplore}
              className="group px-8 py-4 bg-transparent hover:bg-white/5 text-[#FBF9F5] hover:text-[#C8A97E] border border-[#EDE8DF]/30 hover:border-[#C8A97E] font-normal text-xs tracking-[0.28em] uppercase transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>EXPLORE RESIDENCES</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#C8A97E] group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Bottom Bar with Scroll Indicator & Key Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full flex flex-col sm:flex-row items-start sm:items-end justify-between border-t border-[#EDE8DF]/15 pt-6 gap-6"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-14 text-left">
            <div>
              <span className="block text-[10px] tracking-[0.3em] uppercase text-[#C8A97E] mb-1">
                LOCATION
              </span>
              <span className="font-serif-luxury text-lg text-[#FBF9F5] tracking-wide">
                Waterfront Peninsula
              </span>
            </div>
            <div>
              <span className="block text-[10px] tracking-[0.3em] uppercase text-[#C8A97E] mb-1">
                STATUS
              </span>
              <span className="font-serif-luxury text-lg text-[#FBF9F5] tracking-wide">
                Under Commission
              </span>
            </div>
            <div className="hidden sm:block">
              <span className="block text-[10px] tracking-[0.3em] uppercase text-[#C8A97E] mb-1">
                EXCLUSIVE AGENT
              </span>
              <span className="font-serif-luxury text-lg text-[#FBF9F5] tracking-wide">
                Christie’s International
              </span>
            </div>
          </div>

          {/* Subtle Scroll Indicator */}
          <button
            id="hero-scroll-indicator"
            onClick={onExplore}
            className="group flex items-center space-x-3 text-[10px] tracking-[0.3em] uppercase text-[#EDE8DF]/60 hover:text-[#C8A97E] transition-colors self-end sm:self-auto"
            aria-label="Scroll to explore"
          >
            <span>SCROLL TO DISCOVER</span>
            <div className="w-6 h-10 border border-[#EDE8DF]/30 rounded-full flex items-start justify-center p-1 group-hover:border-[#C8A97E]">
              <div className="w-1 h-2 bg-[#C8A97E] rounded-full animate-bounce" />
            </div>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};
