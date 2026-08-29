import React, { useEffect } from 'react';
import { X, ShieldCheck, Award, ExternalLink, CheckCircle2, ZoomIn } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificateUrl?: string;
}

export const OFFICIAL_CERTIFICATE_URL = 'https://i.ibb.co/BVD8dbcH/1787986205456-1.jpg';

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  certificateUrl = OFFICIAL_CERTIFICATE_URL
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="certificate-modal-overlay"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="certificate-modal-content"
        className="relative w-full max-w-4xl max-h-[92vh] bg-neutral-950 text-white rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-neutral-900/90">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#FDD835]/15 text-[#FDD835]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white">Official Accreditation Certificate</h3>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-semibold">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified
                </span>
              </div>
              <p className="text-xs text-neutral-400">
                Pressmart Real Estate Services • Certified Professional Credentials
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors text-xs font-semibold flex items-center gap-1.5"
              title="Open full size in new tab"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden sm:inline">Open Full Size</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Display Area */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-neutral-900/50">
          <div className="relative max-w-full rounded-2xl overflow-hidden border-2 border-neutral-700 shadow-2xl bg-neutral-950">
            <img
              src={certificateUrl}
              alt="Official Pressmart Accreditation Certificate"
              referrerPolicy="no-referrer"
              className="max-h-[68vh] w-auto object-contain mx-auto transition-transform hover:scale-[1.01]"
            />
          </div>
        </div>

        {/* Modal Footer / Trust Indicators */}
        <div className="px-6 py-4 bg-neutral-900 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
          <div className="flex items-center gap-2 text-neutral-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Authenticated document backing client trust, title escrow, and transaction integrity.</span>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-neutral-500">Direct Inquiries:</span>
            <a
              href="https://wa.me/2347086429976?text=Hello%20Pressmart%2C%20I%20reviewed%20your%20certification%20and%20would%20like%20to%20proceed."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FDD835] hover:underline font-bold"
            >
              +234 708 642 9976
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
