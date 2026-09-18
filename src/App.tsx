import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ResidenceExperience } from './components/ResidenceExperience';
import { HorizontalGallery } from './components/HorizontalGallery';
import { LifestyleSection } from './components/LifestyleSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { ArchitectureStory } from './components/ArchitectureStory';
import { LocationSection } from './components/LocationSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { BrochureModal } from './components/BrochureModal';
import { LightboxModal } from './components/LightboxModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [lightboxData, setLightboxData] = useState<{
    isOpen: boolean;
    imageUrl: string;
    title: string;
  }>({
    isOpen: false,
    imageUrl: '',
    title: '',
  });

  const handleOpenLightbox = (imageUrl: string, title: string) => {
    setLightboxData({
      isOpen: true,
      imageUrl,
      title,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxData({
      isOpen: false,
      imageUrl: '',
      title: '',
    });
  };

  const scrollToResidences = () => {
    const el = document.getElementById('residences');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#EDE8DF] selection:bg-[#C8A97E]/30 selection:text-[#FBF9F5] font-sans-luxury relative overflow-x-hidden">
      {/* Global Luxury Texture / Grain Overlay */}
      <div className="luxury-overlay fixed inset-0 pointer-events-none z-30 opacity-40" />

      {/* Navigation Header */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Main Landing Page Landmark */}
      <main className="w-full">
        {/* 01 — HERO */}
        <Hero
          onOpenBooking={() => setIsBookingOpen(true)}
          onExplore={scrollToResidences}
        />

        {/* 02 — INTRO / BRAND STATEMENT */}
        <BrandIntro />

        {/* 03 — PROJECT SHOWCASE */}
        <ProjectShowcase onOpenBooking={() => setIsBookingOpen(true)} />

        {/* 04 — RESIDENCE EXPERIENCE */}
        <ResidenceExperience
          onOpenBooking={() => setIsBookingOpen(true)}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 05 — HORIZONTAL GALLERY */}
        <HorizontalGallery onOpenLightbox={handleOpenLightbox} />

        {/* 06 — LIFESTYLE SECTION */}
        <LifestyleSection
          onOpenBooking={() => setIsBookingOpen(true)}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 07 — AMENITIES */}
        <AmenitiesSection
          onOpenLightbox={handleOpenLightbox}
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* 08 — ARCHITECTURE / STORY */}
        <ArchitectureStory onOpenBooking={() => setIsBookingOpen(true)} />

        {/* 09 — LOCATION */}
        <LocationSection onOpenBooking={() => setIsBookingOpen(true)} />

        {/* 10 — FINAL CTA */}
        <FinalCTA
          onOpenBooking={() => setIsBookingOpen(true)}
          onOpenBrochure={() => setIsBrochureOpen(true)}
        />
      </main>

      {/* 11 — FOOTER */}
      <Footer onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />

      <LightboxModal
        isOpen={lightboxData.isOpen}
        imageUrl={lightboxData.imageUrl}
        title={lightboxData.title}
        onClose={handleCloseLightbox}
      />
    </div>
  );
}
