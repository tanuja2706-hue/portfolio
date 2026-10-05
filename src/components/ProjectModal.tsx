import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, AlertCircle, Laptop } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0c1017] border border-slate-700/80 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1 mb-6 pr-8">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
            {project.type}
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            {project.name}
          </h3>
        </div>

        {/* Project Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Overview & Architecture */}
        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800/80 mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            Project Overview
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Core Features */}
        <div className="mb-6 space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Key Features Implemented
          </h4>
          <div className="space-y-2">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {project.isLiveAvailable && project.liveDemoUrl ? (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span>Launch Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <div className="px-3.5 py-2 rounded-lg bg-slate-800/60 text-slate-500 font-medium text-xs border border-slate-700/50 flex items-center gap-1.5 cursor-not-allowed">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Live Demo Unavailable</span>
              </div>
            )}

            {project.isGithubAvailable && project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs transition-colors flex items-center gap-1.5 border border-slate-700"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View GitHub Repository</span>
              </a>
            ) : (
              <div className="px-3.5 py-2 rounded-lg bg-slate-800/60 text-slate-500 font-medium text-xs border border-slate-700/50 flex items-center gap-1.5 cursor-not-allowed">
                <Github className="w-3.5 h-3.5" />
                <span>Repository in Final Review</span>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-white transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
