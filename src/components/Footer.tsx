import React from 'react';
import { ArrowUp, Instagram, Globe, Mail } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="relative w-full bg-[#08090a] text-[#EDE8DF]/70 pt-24 pb-16 border-t border-[#C8A97E]/20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Tier: Brand Statement & Back to Top */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between pb-16 border-b border-[#EDE8DF]/10 gap-10">
          <div>
            <span className="font-serif-luxury text-3xl sm:text-4xl tracking-[0.25em] text-[#FBF9F5] block font-light">
              AURELIA
            </span>
            <span className="text-[10px] tracking-[0.45em] text-[#C8A97E] uppercase block mt-1 mb-4 font-medium">
              RESIDENCES
            </span>
            <p className="font-serif-luxury text-lg text-[#EDE8DF]/80 font-light italic max-w-md">
              Private residences for extraordinary living.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-[10px] tracking-[0.3em] uppercase text-[#EDE8DF]/60 hover:text-[#C8A97E] transition-colors group"
            >
              <span>RETURN TO TOP</span>
              <div className="w-8 h-8 rounded-full border border-[#EDE8DF]/20 flex items-center justify-center group-hover:border-[#C8A97E]">
                <ArrowUp className="w-3.5 h-3.5 text-[#C8A97E] group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          </div>
        </div>

        {/* Middle Tier: Essential Links & Information */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 text-xs">
          {/* Column 1: Navigation */}
          <div className="space-y-3">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8A97E] block mb-4">
              PORTFOLIO
            </span>
            <a href="#residences" className="block hover:text-[#C8A97E] transition-colors">
              The Residences
            </a>
            <a href="#gallery" className="block hover:text-[#C8A97E] transition-colors">
              Horizontal Gallery
            </a>
            <a href="#lifestyle" className="block hover:text-[#C8A97E] transition-colors">
              Lifestyle & Rituals
            </a>
            <a href="#amenities" className="block hover:text-[#C8A97E] transition-colors">
              Private Amenities
            </a>
          </div>

          {/* Column 2: Architecture */}
          <div className="space-y-3">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8A97E] block mb-4">
              ARCHITECTURE
            </span>
            <a href="#architecture" className="block hover:text-[#C8A97E] transition-colors">
              The Atelier
            </a>
            <a href="#architecture" className="block hover:text-[#C8A97E] transition-colors">
              Structural Engineering
            </a>
            <a href="#architecture" className="block hover:text-[#C8A97E] transition-colors">
              Sustainable Design
            </a>
            <a href="#architecture" className="block hover:text-[#C8A97E] transition-colors">
              Material Provenance
            </a>
          </div>

          {/* Column 3: Destination */}
          <div className="space-y-3">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8A97E] block mb-4">
              LOCATION
            </span>
            <a href="#location" className="block hover:text-[#C8A97E] transition-colors">
              Harbor Promontory
            </a>
            <a href="#location" className="block hover:text-[#C8A97E] transition-colors">
              Neighborhood Atlas
            </a>
            <a href="#location" className="block hover:text-[#C8A97E] transition-colors">
              Transit Connections
            </a>
            <a href="#location" className="block hover:text-[#C8A97E] transition-colors">
              Private Aviation
            </a>
          </div>

          {/* Column 4: Engagement */}
          <div className="space-y-3">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8A97E] block mb-4">
              INQUIRIES
            </span>
            <button
              onClick={onOpenBooking}
              className="text-left text-[#C8A97E] hover:underline block font-medium"
            >
              Book a Viewing
            </button>
            <a href="#contact" className="block hover:text-[#C8A97E] transition-colors">
              Private Concierge
            </a>
            <a href="#contact" className="block hover:text-[#C8A97E] transition-colors">
              Sales Gallery Location
            </a>
            <a href="#contact" className="block hover:text-[#C8A97E] transition-colors">
              Press & Monograph
            </a>
          </div>

          {/* Column 5: Social & Private Register */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 space-y-4">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8A97E] block mb-2">
              DISPATCH
            </span>
            <p className="text-[11px] text-[#EDE8DF]/60 font-light leading-relaxed">
              Curated private journal with quarterly architectural monographs.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 border border-[#EDE8DF]/20 hover:border-[#C8A97E] flex items-center justify-center text-[#EDE8DF]/70 hover:text-[#C8A97E] transition-colors"
                aria-label="Aurelia Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="w-9 h-9 border border-[#EDE8DF]/20 hover:border-[#C8A97E] flex items-center justify-center text-[#EDE8DF]/70 hover:text-[#C8A97E] transition-colors"
                aria-label="Email Concierge"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="#location"
                className="w-9 h-9 border border-[#EDE8DF]/20 hover:border-[#C8A97E] flex items-center justify-center text-[#EDE8DF]/70 hover:text-[#C8A97E] transition-colors"
                aria-label="Global Locations"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Legal, Disclaimers & Copyright */}
        <div className="pt-10 border-t border-[#EDE8DF]/10 flex flex-col md:flex-row items-center justify-between text-[10px] tracking-wider text-[#EDE8DF]/40 gap-4">
          <div>
            © {new Date().getFullYear()} Aurelia Residences Development Group LLC. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-[#EDE8DF] transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-[#EDE8DF] transition-colors">Terms of Offering</a>
            <span>·</span>
            <a href="#" className="hover:text-[#EDE8DF] transition-colors">Equal Housing Opportunity</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
