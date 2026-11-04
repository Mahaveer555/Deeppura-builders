import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onEnquire?: (projectName: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onEnquire }) => {
  const isOngoing = project.status === 'ongoing';

  return (
    <div className="group rounded-2xl bg-white border border-slate-200 hover:border-emerald-400/80 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between">
      <div>
        {/* Project Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <img
            src={project.heroImage}
            alt={project.nameEn}
            className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
            loading="lazy"
          />

          {/* Status Badge */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className={`px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-md flex items-center gap-1.5 backdrop-blur-md border ${
              isOngoing 
                ? 'bg-white/95 text-emerald-800 border-emerald-300' 
                : 'bg-white/95 text-emerald-800 border-emerald-300'
            }`}>
              {isOngoing ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Ongoing Development
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Delivered Landmark
                </>
              )}
            </span>
          </div>
        </div>

        {/* Project Details */}
        <div className="p-6 space-y-3.5">
          <div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-bold uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-600" />
              <span className="truncate">{project.developerEn}</span>
            </div>
            <h3 className="font-black text-xl sm:text-2xl text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
              {project.nameEn}
            </h3>
            <p className="text-sm text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
              {project.taglineEn}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 pt-3 border-t border-slate-100">
            <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="truncate font-medium">{project.locationEn}</span>
          </div>

          {project.configurations && (
            <div className="flex flex-wrap gap-2 pt-1">
              {project.configurations.map((cfg) => (
                <span
                  key={cfg}
                  className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700"
                >
                  {cfg}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="p-6 pt-0 border-t border-slate-100 mt-3 flex items-center justify-between gap-3">
        {isOngoing ? (
          <Link
            to={`/projects/${project.slug}`}
            className="w-full py-3 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-black text-center uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_2px_12px_rgba(16,185,129,0.3)] cursor-pointer hover:-translate-y-0.5"
          >
            <span>Explore Project</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </Link>
        ) : (
          <div className="w-full flex items-center justify-between text-sm font-medium text-slate-500">
            <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Delivered in Kota</span>
            {onEnquire && (
              <button
                onClick={() => onEnquire(project.nameEn)}
                className="text-emerald-700 hover:text-emerald-900 text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors"
              >
                Details &rarr;
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
