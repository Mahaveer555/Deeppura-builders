import React from 'react';
import { X, Download, FileText, Phone } from 'lucide-react';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const pdfUrl = '/assets/projects/mukundra-prime/mukundra-prime-brochure.pdf';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden z-10 text-slate-800">
        {/* Header */}
        <div className="bg-slate-50 p-6 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center">
              <FileText className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-700 block">
                Official Publication
              </span>
              <h3 className="text-xl font-black text-slate-900">
                Mukundra Prime Brochure
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-5 max-h-[70vh] overflow-y-auto text-xs text-slate-600">
          {/* Quick Summary Card */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <span className="text-slate-500 block mb-0.5 text-[11px]">Project</span>
              <strong className="text-slate-900 text-sm font-black">Mukundra Prime</strong>
            </div>
            <div>
              <span className="text-slate-500 block mb-0.5 text-[11px]">Developer</span>
              <strong className="text-slate-800 text-xs font-bold">Mukundra Infra Project Pvt. Ltd.</strong>
            </div>
            <div>
              <span className="text-slate-500 block mb-0.5 text-[11px]">Location</span>
              <strong className="text-slate-800 text-xs font-bold">Raipura, Kota (100 ft. Road)</strong>
            </div>
          </div>

          <p className="leading-relaxed">
            Download the official project brochure containing architectural elevation plans, verified room measurements for 1 BHK, 2 BHK (701.5 sq. ft.), 3 BHK, and 3 BHK Deluxe (960 sq. ft.) apartments, 14 confirmed amenities, and site connectivity maps.
          </p>

          <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-emerald-600 shrink-0" />
              <div>
                <strong className="text-xs text-slate-900 block font-bold">Mukundra Prime Official Brochure PDF</strong>
                <span className="text-[11px] text-slate-500">Verified specifications &amp; layout details</span>
              </div>
            </div>

            <a
              href={pdfUrl}
              download="Mukundra-Prime-Official-Brochure.pdf"
              className="px-5 py-2.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shrink-0 shadow-md"
            >
              <Download className="w-3.5 h-3.5 text-slate-950" />
              <span>Download PDF</span>
            </a>
          </div>

          {/* Direct Assistance */}
          <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]">
            <span>Need a printed copy delivered to your address?</span>
            <a
              href="tel:7357690111"
              className="font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Call 7357690111 / 8239999520</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
