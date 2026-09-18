import React, { useRef } from 'react';
import { Download, ArrowRight, Phone, Mail, Clock } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

interface FinalCTAProps {
  onOpenBooking: () => void;
  onOpenBrochure: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onOpenBooking,
  onOpenBrochure,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const bgParallaxY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0c0e]"
    >
      {/* Full-Screen Cinematic Sunset / Night Photograph with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          style={{ y: bgParallaxY, scale: bgScale }}
          className="w-full h-[120%] -top-[10%] relative will-change-transform"
        >
          <img
            src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=2600&q=90"
            alt="Aurelia Residences Nocturne Skyline Sunset"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center brightness-[0.62] contrast-[1.1]"
          />
        </motion.div>
        {/* Gradients for Editorial Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0e] via-[#0a0c0e]/60 to-[#0a0c0e]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_10%,_#0a0c0e_90%)] opacity-85" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-32 text-center flex flex-col items-center justify-center">
        {/* Section Marker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-8"
        >
          <span className="text-xs font-mono tracking-[0.3em] text-[#C8A97E]">10 / 10</span>
          <div className="w-12 h-[1px] bg-[#C8A97E]/40" />
          <span className="text-[10px] tracking-[0.35em] text-[#EDE8DF]/60 uppercase">
            THE PRIVATE OFFERING
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xs sm:text-sm tracking-[0.4em] uppercase text-[#C8A97E] font-medium block mb-4"
        >
          ACQUISITION BY PRIVATE APPOINTMENT
        </motion.span>

        {/* Huge Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif-luxury text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-[0.03em] text-[#FBF9F5] leading-[0.95] mb-8"
        >
          YOUR NEXT <br />
          <span className="italic text-[#C8A97E]">ADDRESS.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg lg:text-xl font-light text-[#EDE8DF]/85 max-w-2xl leading-relaxed tracking-wide mb-12"
        >
          Experience the pinnacle of vertical architecture. Private consultations and preview
          galleries are conducted confidentially by our residential principals.
        </motion.p>

        {/* CTAs: Primary & Secondary */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 w-full max-w-md sm:max-w-none"
        >
          <button
            id="final-cta-book-btn"
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-10 py-5 bg-[#C8A97E] hover:bg-[#D4AF37] text-[#0a0c0e] font-medium text-xs tracking-[0.28em] uppercase transition-all duration-300 shadow-[0_4px_30px_rgba(200,169,126,0.35)] hover:shadow-[0_4px_45px_rgba(200,169,126,0.55)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2"
          >
            <span>BOOK A PRIVATE VIEWING</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="final-cta-brochure-btn"
            onClick={onOpenBrochure}
            className="w-full sm:w-auto px-10 py-5 bg-transparent hover:bg-white/5 text-[#FBF9F5] hover:text-[#C8A97E] border border-[#EDE8DF]/30 hover:border-[#C8A97E] font-normal text-xs tracking-[0.28em] uppercase transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Download className="w-4 h-4 text-[#C8A97E]" />
            <span>DOWNLOAD BROCHURE</span>
          </button>
        </motion.div>

        {/* Private Concierge Access Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 pt-10 border-t border-[#EDE8DF]/15 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-3xl text-center sm:text-left"
        >
          <div className="flex items-center space-x-3 justify-center sm:justify-start">
            <Phone className="w-4 h-4 text-[#C8A97E] flex-shrink-0" />
            <div>
              <span className="text-[9px] tracking-[0.25em] text-[#C8A97E] uppercase block">
                DIRECT INQUIRY
              </span>
              <span className="text-xs text-[#EDE8DF]/80 font-light">+1 (800) 845-8890</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 justify-center sm:justify-start">
            <Mail className="w-4 h-4 text-[#C8A97E] flex-shrink-0" />
            <div>
              <span className="text-[9px] tracking-[0.25em] text-[#C8A97E] uppercase block">
                CONFIDENTIAL DESK
              </span>
              <span className="text-xs text-[#EDE8DF]/80 font-light">private@aureliaresidences.com</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 justify-center sm:justify-start">
            <Clock className="w-4 h-4 text-[#C8A97E] flex-shrink-0" />
            <div>
              <span className="text-[9px] tracking-[0.25em] text-[#C8A97E] uppercase block">
                SALES GALLERY
              </span>
              <span className="text-xs text-[#EDE8DF]/80 font-light">Daily 10:00 — 18:00 By Appt</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
