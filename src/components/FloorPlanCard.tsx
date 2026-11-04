import React, { useState } from 'react';
import { Maximize2, Check, MessageSquare } from 'lucide-react';
import { FloorPlanItem } from '../data/projects';

interface FloorPlanCardProps {
  item: FloorPlanItem;
  onPreview: (item: FloorPlanItem) => void;
  onEnquire: (item: FloorPlanItem) => void;
}

export const FloorPlanCard: React.FC<FloorPlanCardProps> = ({ item, onPreview, onEnquire }) => {
  const [showIso, setShowIso] = useState(false);

  const currentImage = (showIso && item.isoImage) ? item.isoImage : item.image;

  return (
    <div className="rounded-2xl bg-[#00111D]/80 border border-white/10 hover:border-amber-400/50 overflow-hidden shadow-2xl hover:shadow-[0_20px_40px_-15px_rgba(197,164,109,0.25)] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group backdrop-blur-md">
      <div>
        {/* Floor Plan Image Preview with 2D / 3D Toggle */}
        <div className="relative aspect-[4/3] bg-[#07111F] p-5 cursor-pointer overflow-hidden border-b border-white/10">
          <img
            src={currentImage}
            alt={item.nameEn}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onClick={() => onPreview(item)}
          />

          <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
            <span className="px-3 py-1 rounded-full bg-[#00111D]/90 text-white text-xs font-bold tracking-wider shadow-md border border-white/20">
              {item.category.replace('-', ' ')}
            </span>
            {item.areaSqFt && (
              <span className="px-3 py-1 rounded-full bg-[#C5A46D]/20 text-[#DCBF89] text-xs font-bold border border-[#C5A46D]/40">
                {item.areaSqFt}
              </span>
            )}
          </div>

          {/* 2D / 3D Toggle Pill if 3D ISO exists */}
          {item.isoImage && (
            <div className="absolute top-4 right-4 z-10 bg-[#00111D]/90 p-1 rounded-full border border-white/15 flex items-center shadow-lg">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowIso(false);
                }}
                className={`px-3 py-1 rounded-full text-xs font-bold uppercase transition-all cursor-pointer ${
                  !showIso ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black shadow-sm' : 'text-slate-300 hover:text-white'
                }`}
              >
                2D Plan
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowIso(true);
                }}
                className={`px-3 py-1 rounded-full text-xs font-bold uppercase transition-all cursor-pointer ${
                  showIso ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black shadow-sm' : 'text-slate-300 hover:text-white'
                }`}
              >
                3D View
              </button>
            </div>
          )}

          <div 
            className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none"
          >
            <span className="px-4 py-2 rounded-full bg-[#00111D]/95 text-[#C5A46D] font-bold text-xs flex items-center gap-1.5 border border-amber-400/50 shadow-xl">
              <Maximize2 className="w-4 h-4 text-[#C5A46D]" />
              <span>Enlarge Plan</span>
            </span>
          </div>
        </div>

        {/* Content Details */}
        <div className="p-6 space-y-3.5">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs uppercase font-bold tracking-wider text-[#C5A46D]">
                {item.tagEn}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-[#C5A46D] transition-colors leading-snug">
              {item.titleEn}
            </h3>
          </div>

          {/* Features Checklist */}
          <div className="space-y-2 pt-3 border-t border-white/10">
            {item.featuresEn.slice(0, 4).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <Check className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                <span className="leading-snug">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions */}
      <div className="p-6 pt-0 border-t border-white/10 mt-3 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onPreview(item)}
          className="flex-1 py-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white hover:text-[#C5A46D] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <Maximize2 className="w-3.5 h-3.5 text-[#C5A46D]" />
          <span>View Layout</span>
        </button>

        <button
          type="button"
          onClick={() => onEnquire(item)}
          className="flex-1 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-[#07111F] font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(197,164,109,0.35)] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <MessageSquare className="w-3.5 h-3.5 text-[#07111F]" />
          <span>Enquire</span>
        </button>
      </div>
    </div>
  );
};
