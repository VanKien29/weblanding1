import React, { useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  imageUrl: string;
  title: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  imageUrl,
  title,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageUrl) return null;

  return (
    <div
      id="lightbox-modal"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#08090a]/95 backdrop-blur-2xl flex flex-col items-center justify-between p-4 sm:p-8 animate-fade-in"
    >
      {/* Top Bar */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-7xl flex items-center justify-between py-4 border-b border-[#C8A97E]/20"
      >
        <div>
          <span className="text-[9px] tracking-[0.3em] font-mono text-[#C8A97E] uppercase block">
            AURELIA RESIDENCES · ARCHITECTURAL ARCHIVE
          </span>
          <h4 className="font-serif-luxury text-xl sm:text-2xl text-[#FBF9F5]">
            {title}
          </h4>
        </div>

        <button
          onClick={onClose}
          className="p-3 bg-[#14171a] border border-[#C8A97E]/30 text-[#EDE8DF] hover:text-[#C8A97E] hover:border-[#C8A97E] transition-colors"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Large Image */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative my-auto max-w-6xl max-h-[75vh] overflow-hidden border border-[#C8A97E]/30 shadow-[0_25px_90px_rgba(0,0,0,0.9)]"
      >
        <img
          src={imageUrl}
          alt={title}
          referrerPolicy="no-referrer"
          className="w-auto max-h-[75vh] object-contain mx-auto"
        />
      </div>

      {/* Bottom Bar */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-7xl flex items-center justify-between py-3 text-[10px] tracking-widest text-[#EDE8DF]/50 uppercase border-t border-[#EDE8DF]/10"
      >
        <span>High-Definition Architectural Capture</span>
        <span>Click anywhere outside or press ESC to dismiss</span>
      </div>
    </div>
  );
};
