import React from 'react';
import {
  Waves,
  Church,
  Smile,
  Dumbbell,
  Trees,
  Users,
  ShoppingBag,
  ArrowUpDown,
  Droplets,
  Car,
  GraduationCap,
  Flower2,
  ShieldCheck,
  Compass,
  Maximize2,
  CheckCircle2
} from 'lucide-react';
import { Amenity } from '../data/amenities';

interface AmenityCardProps {
  amenity: Amenity;
  onImageClick?: (url: string, captionEn: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Waves,
  Church,
  Smile,
  Dumbbell,
  Trees,
  Users,
  ShoppingBag,
  ArrowUpDown,
  Droplets,
  Car,
  GraduationCap,
  Flower2,
  ShieldCheck,
  Compass,
};

export const AmenityCard: React.FC<AmenityCardProps> = ({ amenity, onImageClick }) => {
  const IconComponent = iconMap[amenity.icon] || ShieldCheck;

  return (
    <div className="group rounded-3xl bg-white border border-slate-200 hover:border-amber-400 p-6 sm:p-7 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between h-full">
      <div>
        {amenity.image && (
          <div 
            className="mb-6 h-56 sm:h-64 w-full rounded-2xl overflow-hidden relative cursor-pointer bg-slate-100 border border-slate-200 shadow-sm"
            onClick={() => onImageClick && onImageClick(amenity.image!, amenity.nameEn)}
          >
            <img 
              src={amenity.image} 
              alt={amenity.nameEn} 
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="p-3.5 rounded-full bg-white/95 text-amber-800 shadow-xl border border-slate-200 flex items-center gap-1.5 font-bold text-xs">
                <Maximize2 className="w-4 h-4 text-amber-700" />
                <span>View Fullscreen</span>
              </span>
            </div>
          </div>
        )}

        <div className="flex items-center gap-4 mb-3.5">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200 group-hover:scale-105 group-hover:bg-amber-100 transition-all shadow-sm">
            <IconComponent className="w-7 h-7 text-amber-700" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">
              {amenity.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-amber-800 transition-colors leading-snug">
              {amenity.nameEn}
            </h3>
          </div>
        </div>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          {amenity.descriptionEn}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm">
        <span className="font-semibold text-slate-600 flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-amber-700" />
          <span>Brochure Verified</span>
        </span>
        <span className="text-xs font-bold text-amber-800 uppercase tracking-wider bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
          Mukundra Prime
        </span>
      </div>
    </div>
  );
};
