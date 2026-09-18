import React, { useRef, useState, useEffect } from 'react';
import { HORIZONTAL_GALLERY } from '../data/residenceData';
import { ChevronLeft, ChevronRight, Maximize2, Compass } from 'lucide-react';
import { motion } from 'motion/react';

interface HorizontalGalleryProps {
  onOpenLightbox: (imageUrl: string, title: string) => void;
}

export const HorizontalGallery: React.FC<HorizontalGalleryProps> = ({ onOpenLightbox }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);

    // Approximate active index based on scroll position
    const cardWidth = 480;
    const newIndex = Math.min(
      Math.floor((scrollLeft + cardWidth / 2) / cardWidth),
      HORIZONTAL_GALLERY.length - 1
    );
    setActiveItemIndex(Math.max(0, newIndex));
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollByDirection = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const offset = direction === 'left' ? -520 : 520;
    scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section
      id="gallery"
      className="relative w-full bg-[#0a0c0e] py-28 sm:py-36 overflow-hidden border-b border-[#C8A97E]/15"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-xs font-mono tracking-[0.3em] text-[#C8A97E]">05 / 10</span>
              <div className="w-12 h-[1px] bg-[#C8A97E]/40" />
              <span className="text-[10px] tracking-[0.35em] text-[#EDE8DF]/50 uppercase">
                CINEMATIC PERSPECTIVES
              </span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-light text-[#FBF9F5] tracking-[0.02em]">
              THE HORIZONTAL <span className="italic text-[#C8A97E]">GALLERY.</span>
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center space-x-6">
            <div className="text-[11px] font-mono tracking-widest text-[#C8A97E]">
              0{activeItemIndex + 1} <span className="text-[#EDE8DF]/40">/ 0{HORIZONTAL_GALLERY.length}</span>
            </div>

            <div className="flex items-center space-x-3">
              <button
                id="gallery-prev-btn"
                onClick={() => scrollByDirection('left')}
                disabled={!canScrollLeft}
                aria-label="Previous gallery image"
                className={`w-12 h-12 flex items-center justify-center border transition-all duration-300 ${
                  canScrollLeft
                    ? 'border-[#C8A97E] text-[#C8A97E] hover:bg-[#C8A97E] hover:text-[#0a0c0e]'
                    : 'border-[#EDE8DF]/10 text-[#EDE8DF]/20 cursor-not-allowed'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                id="gallery-next-btn"
                onClick={() => scrollByDirection('right')}
                disabled={!canScrollRight}
                aria-label="Next gallery image"
                className={`w-12 h-12 flex items-center justify-center border transition-all duration-300 ${
                  canScrollRight
                    ? 'border-[#C8A97E] text-[#C8A97E] hover:bg-[#C8A97E] hover:text-[#0a0c0e]'
                    : 'border-[#EDE8DF]/10 text-[#EDE8DF]/20 cursor-not-allowed'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Cinematic Horizontal Scroll Track */}
      <div
        ref={scrollContainerRef}
        className="flex space-x-6 sm:space-x-8 overflow-x-auto no-scrollbar px-6 sm:px-8 lg:px-12 pb-8 scroll-smooth cursor-grab active:cursor-grabbing"
      >
        {HORIZONTAL_GALLERY.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => onOpenLightbox(item.imageUrl, item.title)}
            className="flex-shrink-0 w-[85vw] sm:w-[500px] lg:w-[620px] group relative overflow-hidden bg-[#14171a] border border-[#C8A97E]/20 cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          >
            {/* Image Container with Parallax Zoom */}
            <div className="relative h-[420px] sm:h-[500px] lg:h-[560px] overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out brightness-[0.82]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0e] via-transparent to-transparent opacity-90" />

              {/* Top Tag & Lightbox Trigger */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                <span className="text-[9px] tracking-[0.3em] font-mono text-[#C8A97E] bg-[#0a0c0e]/80 backdrop-blur-md px-3 py-1 border border-[#C8A97E]/30 uppercase">
                  VIEW 0{index + 1}
                </span>

                <div className="w-9 h-9 rounded-full bg-[#0a0c0e]/70 backdrop-blur-md border border-[#C8A97E]/30 flex items-center justify-center text-[#C8A97E] group-hover:bg-[#C8A97E] group-hover:text-[#0a0c0e] transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Information */}
              <div className="absolute bottom-8 left-8 right-8 text-left">
                <span className="text-[10px] tracking-[0.3em] text-[#C8A97E] uppercase block mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#FBF9F5] mb-2 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs text-[#EDE8DF]/75 font-light leading-relaxed mb-3 line-clamp-2">
                  {item.description}
                </p>
                {item.dimensions && (
                  <div className="flex items-center space-x-2 text-[10px] tracking-widest text-[#EDE8DF]/60 border-t border-[#C8A97E]/20 pt-2 font-mono">
                    <Compass className="w-3 h-3 text-[#C8A97E]" />
                    <span>{item.dimensions}</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Progress Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-4 flex items-center justify-between text-[#EDE8DF]/40 text-xs">
        <span className="tracking-widest uppercase text-[9px]">
          DRAG OR CLICK ARROWS TO EXPLORE THE PORTFOLIO
        </span>
        <div className="flex items-center space-x-1">
          {HORIZONTAL_GALLERY.map((_, i) => (
            <div
              key={i}
              className={`h-1 transition-all duration-300 ${
                activeItemIndex === i ? 'w-8 bg-[#C8A97E]' : 'w-2 bg-[#EDE8DF]/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
