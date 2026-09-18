import React, { useState } from 'react';
import { X, CheckCircle, Calendar, Phone, Mail, ShieldCheck, Sparkles } from 'lucide-react';
import { ViewingBookingData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ViewingBookingData>({
    fullName: '',
    email: '',
    phone: '',
    residencePreference: 'Full-Floor Penthouse (Levels 46–60)',
    preferredDate: '',
    privateNotes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      id="booking-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#08090a]/90 backdrop-blur-xl animate-fade-in"
    >
      <div className="relative w-full max-w-2xl bg-[#0f1215] border border-[#C8A97E]/30 p-8 sm:p-12 shadow-[0_25px_80px_rgba(0,0,0,0.9)] max-h-[92vh] overflow-y-auto no-scrollbar">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#EDE8DF]/60 hover:text-[#C8A97E] transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="text-left mb-8">
              <span className="text-[10px] tracking-[0.35em] text-[#C8A97E] uppercase block mb-2 font-medium">
                CONFIDENTIAL ENGAGEMENT
              </span>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#FBF9F5] font-light mb-3">
                Request a Private Viewing
              </h3>
              <p className="text-xs sm:text-sm text-[#EDE8DF]/75 font-light leading-relaxed">
                Experience Aurelia Residences in person or arrange a confidential video monograph
                with our residential director.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] tracking-[0.25em] text-[#C8A97E] uppercase mb-2">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Lord / Lady / Mr. / Ms."
                    className="w-full bg-[#15191d] border border-[#EDE8DF]/20 focus:border-[#C8A97E] px-4 py-3 text-sm text-[#FBF9F5] placeholder-[#EDE8DF]/30 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.25em] text-[#C8A97E] uppercase mb-2">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="principal@domain.com"
                    className="w-full bg-[#15191d] border border-[#EDE8DF]/20 focus:border-[#C8A97E] px-4 py-3 text-sm text-[#FBF9F5] placeholder-[#EDE8DF]/30 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] tracking-[0.25em] text-[#C8A97E] uppercase mb-2">
                    TELEPHONE (CONFIDENTIAL) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-[#15191d] border border-[#EDE8DF]/20 focus:border-[#C8A97E] px-4 py-3 text-sm text-[#FBF9F5] placeholder-[#EDE8DF]/30 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.25em] text-[#C8A97E] uppercase mb-2">
                    PREFERRED DATE
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-[#15191d] border border-[#EDE8DF]/20 focus:border-[#C8A97E] px-4 py-3 text-sm text-[#FBF9F5] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.25em] text-[#C8A97E] uppercase mb-2">
                  RESIDENCE TIER PREFERENCE
                </label>
                <select
                  value={formData.residencePreference}
                  onChange={(e) => setFormData({ ...formData, residencePreference: e.target.value })}
                  className="w-full bg-[#15191d] border border-[#EDE8DF]/20 focus:border-[#C8A97E] px-4 py-3 text-sm text-[#FBF9F5] focus:outline-none transition-colors"
                >
                  <option value="Sky Suite (Levels 32–45)">Sky Suite (Levels 32–45 · 3,800 sq ft)</option>
                  <option value="Full-Floor Penthouse (Levels 46–60)">Full-Floor Penthouse (Levels 46–60 · 6,400 sq ft)</option>
                  <option value="Crown Duplex Penthouse (Levels 61–68)">Crown Duplex Penthouse (Levels 61–68 · 11,500 sq ft)</option>
                  <option value="Entire Portfolio Consideration">Entire Portfolio Consideration</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.25em] text-[#C8A97E] uppercase mb-2">
                  PRIVATE REQUIREMENTS OR REPRESENTING ADVISOR
                </label>
                <textarea
                  rows={3}
                  value={formData.privateNotes}
                  onChange={(e) => setFormData({ ...formData, privateNotes: e.target.value })}
                  placeholder="Special concierge requirements, private aircraft landing, NDA preference..."
                  className="w-full bg-[#15191d] border border-[#EDE8DF]/20 focus:border-[#C8A97E] p-4 text-sm text-[#FBF9F5] placeholder-[#EDE8DF]/30 focus:outline-none transition-colors"
                />
              </div>

              <div className="flex items-center space-x-3 text-[10px] tracking-wider text-[#EDE8DF]/50">
                <ShieldCheck className="w-4 h-4 text-[#C8A97E] flex-shrink-0" />
                <span>All appointments are bound by client confidentiality protocols.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#C8A97E] hover:bg-[#D4AF37] text-[#0a0c0e] text-xs tracking-[0.28em] uppercase font-medium transition-all duration-300 shadow-[0_4px_25px_rgba(200,169,126,0.3)] active:scale-98 disabled:opacity-50"
              >
                {isSubmitting ? 'TRANSMITTING CONFIDENTIAL REQUEST...' : 'CONFIRM VIEWING RESERVATION'}
              </button>
            </form>
          </div>
        ) : (
          /* Submission Success State */
          <div className="py-12 text-center animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#C8A97E]/20 border border-[#C8A97E] mx-auto flex items-center justify-center text-[#C8A97E] mb-6">
              <CheckCircle className="w-8 h-8" />
            </div>

            <span className="text-[10px] tracking-[0.35em] text-[#C8A97E] uppercase block mb-2 font-medium">
              REQUEST ACKNOWLEDGED
            </span>

            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#FBF9F5] mb-4">
              Thank You, {formData.fullName || 'Proprietor'}
            </h3>

            <p className="text-sm text-[#EDE8DF]/80 font-light max-w-md mx-auto leading-relaxed mb-6">
              Your inquiry has been assigned to our Executive Director of Private Acquisitions.
              You will receive confidential correspondence shortly to finalize itinerary details.
            </p>

            <div className="p-4 bg-[#14181c] border border-[#C8A97E]/30 max-w-sm mx-auto mb-8 text-xs text-left space-y-1 font-mono text-[#EDE8DF]/70">
              <div>FILE REF: <span className="text-[#C8A97E]">AUR-2027-{Math.floor(1000 + Math.random() * 9000)}</span></div>
              <div>RESIDENCE: <span className="text-[#FBF9F5]">{formData.residencePreference}</span></div>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 bg-[#C8A97E] text-[#0a0c0e] text-xs tracking-[0.25em] uppercase font-medium hover:bg-[#D4AF37] transition-colors"
            >
              RETURN TO OVERVIEW
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
