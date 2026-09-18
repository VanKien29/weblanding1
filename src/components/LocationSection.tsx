import React, { useState, useRef } from 'react';
import { LOCATION_BENCHMARKS, NEIGHBORHOOD_LANDMARKS } from '../data/residenceData';
import { MapPin, Navigation, Compass } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

interface LocationSectionProps {
  onOpenBooking: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenBooking }) => {
  const [activePin, setActivePin] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const mapParallaxY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <section
      ref={sectionRef}
      id="location"
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
            <span className="text-xs font-mono tracking-[0.3em] text-[#C8A97E]">09 / 10</span>
            <div className="w-12 h-[1px] bg-[#C8A97E]/40" />
            <span className="text-[10px] tracking-[0.35em] text-[#EDE8DF]/50 uppercase">
              STRATEGIC GEOGRAPHY
            </span>
          </div>

          <div className="hidden sm:flex items-center space-x-2 text-[10px] tracking-[0.25em] text-[#C8A97E] uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>WATERFRONT PENINSULA PROMONTORY</span>
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
            AT THE EPICENTER OF PRESTIGE
          </span>
          <h2 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-light text-[#FBF9F5] tracking-[0.02em] leading-[1.05]">
            EFFORTLESSLY CONNECTED, <br />
            <span className="italic text-[#C8A97E]">PRIVATELY RETREAT.</span>
          </h2>
        </motion.div>

        {/* Transit Benchmarks (10 MIN CITY CENTER, 15 MIN AIRPORT, 5 MIN BUSINESS DISTRICT) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {LOCATION_BENCHMARKS.map((bench, idx) => (
            <motion.div
              key={bench.destination}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 bg-[#121518] border border-[#C8A97E]/25 hover:border-[#C8A97E] transition-all duration-300 relative group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[9px] font-mono text-[#C8A97E] tracking-widest uppercase">
                  DESTINATION 0{idx + 1}
                </span>
                <Navigation className="w-3.5 h-3.5 text-[#C8A97E] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>

              {/* Big Duration */}
              <div className="font-serif-luxury text-4xl sm:text-5xl font-light text-[#FBF9F5] mb-2 tracking-tight group-hover:text-[#C8A97E] transition-colors">
                {bench.duration}
              </div>

              {/* Destination */}
              <h3 className="text-xs tracking-[0.25em] uppercase font-medium text-[#C8A97E] mb-3">
                {bench.destination}
              </h3>

              <p className="text-xs text-[#EDE8DF]/70 font-light leading-relaxed">
                {bench.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Visual Map & City Panorama Fusion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left: Realistic Luxury Stylized Vector City Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 bg-[#111417] p-8 border border-[#C8A97E]/25 relative flex flex-col justify-between overflow-hidden shadow-2xl"
          >
            {/* Map Header */}
            <div className="flex items-center justify-between pb-6 border-b border-[#C8A97E]/20 z-10">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#C8A97E]" />
                <span className="text-xs tracking-[0.25em] uppercase text-[#FBF9F5] font-medium">
                  LOCAL DISTRICT CARTOGRAPHY
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#C8A97E]">
                37°46'45.2"N 122°23'24.8"W
              </span>
            </div>

            {/* Stylized Architectural Interactive Map Canvas */}
            <div className="relative w-full h-[360px] sm:h-[420px] my-6 bg-[#0a0c0e] border border-[#EDE8DF]/10 overflow-hidden flex items-center justify-center">
              {/* Subtle Map Grid lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2429_1px,transparent_1px),linear-gradient(to_bottom,#1f2429_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />

              {/* Waterway / Coastline Curve representation */}
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 300">
                <path
                  d="M0,80 Q140,120 220,190 T400,280 L400,300 L0,300 Z"
                  fill="#0e171e"
                  opacity="0.8"
                />
                <path
                  d="M0,80 Q140,120 220,190 T400,280"
                  stroke="#C8A97E"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  fill="none"
                  opacity="0.5"
                />
                {/* Major thoroughfares */}
                <line x1="20" y1="20" x2="380" y2="220" stroke="#252c34" strokeWidth="2" />
                <line x1="120" y1="0" x2="160" y2="300" stroke="#252c34" strokeWidth="2" />
                <line x1="290" y1="0" x2="250" y2="300" stroke="#252c34" strokeWidth="1.5" />
              </svg>

              {/* Central Aurelia Monolith Marker Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                <div className="relative flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#C8A97E]/20 animate-ping absolute" />
                  <div className="w-4 h-4 rounded-full bg-[#C8A97E] border-2 border-[#0a0c0e] relative z-10 shadow-[0_0_15px_#C8A97E]" />
                </div>
                <div className="mt-2 bg-[#0a0c0e]/95 px-3 py-1.5 border border-[#C8A97E] text-center whitespace-nowrap shadow-xl">
                  <span className="text-[9px] font-serif-luxury tracking-widest text-[#FBF9F5] block font-bold">
                    AURELIA RESIDENCES
                  </span>
                  <span className="text-[8px] tracking-[0.2em] text-[#C8A97E] uppercase">
                    HARBOR PROMONTORY
                  </span>
                </div>
              </div>

              {/* Nearby Points of Interest Pins */}
              <div
                onClick={() => setActivePin(0)}
                className="absolute top-[28%] left-[22%] z-10 cursor-pointer group"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#EDE8DF]/70 group-hover:bg-[#C8A97E] transition-colors" />
                <span className="hidden sm:block text-[8px] tracking-wider text-[#EDE8DF]/60 group-hover:text-[#FBF9F5] mt-1 bg-[#0a0c0e]/80 px-1.5 py-0.5 whitespace-nowrap">
                  5 Min · Financial District
                </span>
              </div>

              <div
                onClick={() => setActivePin(1)}
                className="absolute top-[68%] left-[30%] z-10 cursor-pointer group"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#EDE8DF]/70 group-hover:bg-[#C8A97E] transition-colors" />
                <span className="hidden sm:block text-[8px] tracking-wider text-[#EDE8DF]/60 group-hover:text-[#FBF9F5] mt-1 bg-[#0a0c0e]/80 px-1.5 py-0.5 whitespace-nowrap">
                  Yacht Club Marina
                </span>
              </div>

              <div
                onClick={() => setActivePin(2)}
                className="absolute top-[32%] right-[18%] z-10 cursor-pointer group"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#EDE8DF]/70 group-hover:bg-[#C8A97E] transition-colors" />
                <span className="hidden sm:block text-[8px] tracking-wider text-[#EDE8DF]/60 group-hover:text-[#FBF9F5] mt-1 bg-[#0a0c0e]/80 px-1.5 py-0.5 whitespace-nowrap">
                  10 Min · Opera & Arts
                </span>
              </div>

              <div
                onClick={() => setActivePin(3)}
                className="absolute bottom-[16%] right-[22%] z-10 cursor-pointer group"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#EDE8DF]/70 group-hover:bg-[#C8A97E] transition-colors" />
                <span className="hidden sm:block text-[8px] tracking-wider text-[#EDE8DF]/60 group-hover:text-[#FBF9F5] mt-1 bg-[#0a0c0e]/80 px-1.5 py-0.5 whitespace-nowrap">
                  15 Min · Airport Corridor
                </span>
              </div>
            </div>

            {/* Neighborhood Landmarks List */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#C8A97E]/20 text-left">
              {NEIGHBORHOOD_LANDMARKS.slice(0, 4).map((item) => (
                <div key={item.name} className="flex items-center justify-between text-[11px] text-[#EDE8DF]/75">
                  <span className="truncate pr-2">{item.name}</span>
                  <span className="text-[#C8A97E] font-mono text-[10px] flex-shrink-0">{item.dist}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Large Atmospheric City Aerial Photograph with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative overflow-hidden bg-[#121417] border border-[#C8A97E]/25 shadow-2xl group min-h-[460px]"
          >
            <motion.div style={{ y: mapParallaxY }} className="w-full h-full will-change-transform scale-105">
              <img
                src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1800&q=85"
                alt="Panoramic City and Harbor Aerial View"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1200 ease-out brightness-[0.8]"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0e] via-[#0a0c0e]/20 to-transparent" />

            {/* Floating Editorial Quote */}
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-[#0a0c0e]/90 backdrop-blur-md border border-[#C8A97E]/30">
              <span className="text-[9px] tracking-[0.3em] text-[#C8A97E] uppercase block mb-1">
                PRIME GEOGRAPHIC ENCLAVE
              </span>
              <p className="font-serif-luxury text-xl sm:text-2xl text-[#FBF9F5] leading-snug">
                “Positioned directly upon the water’s edge, where maritime horizon meets the pulsating skyline of the world capital.”
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-[#C8A97E]/20 pt-3 text-[10px] tracking-widest text-[#EDE8DF]/60 uppercase">
                <span>Private Chauffeur Service On-Demand</span>
                <span className="text-[#C8A97E]">Helipad Level 68</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14 text-center"
        >
          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 bg-[#C8A97E] hover:bg-[#D4AF37] text-[#0a0c0e] text-xs tracking-[0.25em] uppercase font-medium transition-colors duration-300"
          >
            SCHEDULE A CHAUFFEURED SITE VISIT
          </button>
        </motion.div>
      </div>
    </section>
  );
};
