import React, { useState } from 'react';
import { X, Download, FileText, Check, BookOpen } from 'lucide-react';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      setIsDownloaded(true);
    }, 800);
  };

  const handleReset = () => {
    setIsDownloaded(false);
    onClose();
  };

  return (
    <div
      id="brochure-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#08090a]/90 backdrop-blur-xl animate-fade-in"
    >
      <div className="relative w-full max-w-xl bg-[#0f1215] border border-[#C8A97E]/30 p-8 sm:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto no-scrollbar text-left">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#EDE8DF]/60 hover:text-[#C8A97E] transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isDownloaded ? (
          <div>
            <div className="flex items-center space-x-2 text-[#C8A97E] text-[10px] tracking-[0.3em] uppercase mb-2 font-mono">
              <BookOpen className="w-3.5 h-3.5" />
              <span>COLLECTOR'S EDITION MONOGRAPH</span>
            </div>

            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#FBF9F5] font-light mb-3">
              Download the Monograph
            </h3>

            <p className="text-xs sm:text-sm text-[#EDE8DF]/75 font-light leading-relaxed mb-6">
              A 72-page comprehensive publication detailing the architectural concept, structural engineering, curated material catalog, and high-resolution residence floor plates.
            </p>

            {/* Monograph Contents Summary */}
            <div className="p-4 bg-[#14181c] border border-[#C8A97E]/20 mb-6 space-y-2 text-xs">
              <div className="text-[10px] tracking-[0.25em] text-[#C8A97E] uppercase font-mono pb-1 border-b border-[#EDE8DF]/10">
                CONTENTS OVERVIEW
              </div>
              <div className="flex items-center justify-between text-[#EDE8DF]/80">
                <span>Vol I. The Architectural Silhouette</span>
                <span className="font-mono text-[10px] text-[#C8A97E]">Pages 04–22</span>
              </div>
              <div className="flex items-center justify-between text-[#EDE8DF]/80">
                <span>Vol II. Curated Floor Plates & Materials</span>
                <span className="font-mono text-[10px] text-[#C8A97E]">Pages 23–48</span>
              </div>
              <div className="flex items-center justify-between text-[#EDE8DF]/80">
                <span>Vol III. Three-Tier Private Amenities Atlas</span>
                <span className="font-mono text-[10px] text-[#C8A97E]">Pages 49–72</span>
              </div>
            </div>

            <form onSubmit={handleDownload} className="space-y-4">
              <div>
                <label className="block text-[10px] tracking-[0.25em] text-[#C8A97E] uppercase mb-1.5">
                  NAME
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full bg-[#15191d] border border-[#EDE8DF]/20 focus:border-[#C8A97E] px-4 py-3 text-sm text-[#FBF9F5] placeholder-[#EDE8DF]/30 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.25em] text-[#C8A97E] uppercase mb-1.5">
                  EMAIL FOR MONOGRAPH ACCESS
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full bg-[#15191d] border border-[#EDE8DF]/20 focus:border-[#C8A97E] px-4 py-3 text-sm text-[#FBF9F5] placeholder-[#EDE8DF]/30 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isDownloading}
                className="w-full py-4 mt-2 bg-[#C8A97E] hover:bg-[#D4AF37] text-[#0a0c0e] text-xs tracking-[0.28em] uppercase font-medium transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>{isDownloading ? 'PREPARING DIGITAL FOLIO...' : 'ACCESS DIGITAL MONOGRAPH (PDF)'}</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-[#C8A97E]/20 border border-[#C8A97E] mx-auto flex items-center justify-center text-[#C8A97E] mb-5">
              <Check className="w-7 h-7" />
            </div>

            <h3 className="font-serif-luxury text-3xl text-[#FBF9F5] mb-2">
              Access Granted
            </h3>
            <p className="text-xs sm:text-sm text-[#EDE8DF]/80 font-light max-w-sm mx-auto mb-6">
              The high-resolution digital monograph (48.4 MB) has been dispatched to{' '}
              <span className="text-[#C8A97E]">{email}</span>. You can also view or save the instant digital copy below.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <a
                href="#residences"
                onClick={handleReset}
                className="px-6 py-3 bg-[#C8A97E] text-[#0a0c0e] text-xs tracking-[0.25em] uppercase font-medium hover:bg-[#D4AF37] text-center"
              >
                BROWSE DIGITAL FOLIO
              </a>
              <button
                onClick={handleReset}
                className="px-6 py-3 border border-[#EDE8DF]/20 text-[#EDE8DF] text-xs tracking-[0.25em] uppercase hover:border-[#C8A97E]"
              >
                CLOSE
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
