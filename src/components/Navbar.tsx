import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX, ArrowRight } from 'lucide-react';
import { ambientAudio } from '../utils/ambientAudio';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 60);

      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const active = ambientAudio.toggle();
    setIsAudioActive(active);
  };

  const navLinks = [
    { label: 'RESIDENCES', href: '#residences' },
    { label: 'THE ARCHITECTURE', href: '#architecture' },
    { label: 'AMENITIES', href: '#amenities' },
    { label: 'LOCATION', href: '#location' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div
        id="scroll-progress-bar"
        className="fixed top-0 left-0 h-[2px] bg-[#C8A97E] z-50 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Main Navigation Bar */}
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0d0f11]/90 backdrop-blur-md border-b border-[#C8A97E]/15 py-4'
            : 'bg-transparent py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            id="nav-logo"
            href="#"
            className="group flex flex-col items-start focus:outline-none"
          >
            <span className="font-serif-luxury text-xl sm:text-2xl tracking-[0.3em] font-normal text-[#FBF9F5] group-hover:text-[#C8A97E] transition-colors duration-300">
              AURELIA
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.45em] text-[#C8A97E] font-medium uppercase mt-0.5">
              RESIDENCES
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-9">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] tracking-[0.25em] text-[#EDE8DF]/80 hover:text-[#C8A97E] font-light transition-all duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C8A97E] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center space-x-6">
            {/* Ambient Sound Atmosphere Toggle */}
            <button
              id="sound-toggle-btn"
              onClick={toggleSound}
              title={isAudioActive ? 'Mute ambient soundscape' : 'Enable ambient soundscape'}
              className="group flex items-center space-x-2 text-[10px] tracking-[0.2em] text-[#EDE8DF]/60 hover:text-[#C8A97E] transition-colors duration-300 border border-[#C8A97E]/20 hover:border-[#C8A97E]/60 px-3 py-1.5 rounded-full"
            >
              {isAudioActive ? (
                <Volume2 className="w-3.5 h-3.5 text-[#C8A97E] animate-pulse" />
              ) : (
                <VolumeX className="w-3.5 h-3.5 text-[#EDE8DF]/50 group-hover:text-[#C8A97E]" />
              )}
              <span className="uppercase text-[9px] tracking-[0.25em]">
                {isAudioActive ? 'SOUND ON' : 'SOUND'}
              </span>
            </button>

            {/* Primary CTA */}
            <button
              id="nav-book-viewing-btn"
              onClick={onOpenBooking}
              className="group relative inline-flex items-center justify-center px-6 py-2.5 text-[10px] tracking-[0.25em] font-medium text-[#0d0f11] bg-[#C8A97E] hover:bg-[#D4AF37] transition-all duration-300 rounded-none shadow-sm hover:shadow-[0_0_20px_rgba(200,169,126,0.35)] active:scale-95"
            >
              <span className="relative z-10 uppercase">BOOK A VIEWING</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center space-x-3">
            <button
              id="mobile-sound-toggle-btn"
              onClick={toggleSound}
              className="p-2 text-[#C8A97E] border border-[#C8A97E]/30 rounded-none"
              aria-label="Toggle Sound"
            >
              {isAudioActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-[#EDE8DF]/60" />}
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#EDE8DF] hover:text-[#C8A97E] focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="fixed inset-0 z-30 bg-[#0d0f11]/98 backdrop-blur-xl flex flex-col justify-between px-8 py-24 sm:hidden animate-fade-in"
        >
          <div className="flex flex-col space-y-6">
            <div className="pb-6 border-b border-[#C8A97E]/20">
              <span className="font-serif-luxury text-2xl tracking-[0.25em] text-[#FBF9F5] block">
                AURELIA
              </span>
              <span className="text-[10px] tracking-[0.4em] text-[#C8A97E] uppercase">
                RESIDENCES
              </span>
            </div>

            <nav className="flex flex-col space-y-5 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif-luxury text-2xl text-[#EDE8DF] hover:text-[#C8A97E] tracking-wider transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#C8A97E]" />
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t border-[#C8A97E]/20 flex flex-col space-y-4">
            <button
              id="mobile-drawer-book-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-4 text-center text-xs tracking-[0.25em] font-medium text-[#0d0f11] bg-[#C8A97E] uppercase"
            >
              BOOK A PRIVATE VIEWING
            </button>
            <p className="text-[10px] tracking-[0.15em] text-[#EDE8DF]/40 text-center uppercase">
              Private Inquiries · +1 (800) 845-8890
            </p>
          </div>
        </div>
      )}
    </>
  );
};
