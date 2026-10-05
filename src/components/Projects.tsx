import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projectImages] = useState<Record<string, string>>({
    luxecart: '/assets/luxecart-screenshot.png',
    shopsense: '/assets/shopsense-screenshot.png',
    bistroorder: '/assets/bistroorder-screenshot.png'
  });
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Clear any legacy screenshot keys from localStorage
    try {
      localStorage.removeItem('luxecart_screenshot');
      localStorage.removeItem('shopsense_screenshot');
      localStorage.removeItem('bistroorder_screenshot');
    } catch (err) {
      // Ignore
    }
  }, []);

  const handleImageError = (projectId: string) => {
    setImageErrors(prev => ({ ...prev, [projectId]: true }));
  };

  return (
    <section id="projects" className="py-20 relative border-t border-slate-800/60 bg-[#090b10]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest font-semibold block mb-2">
              Portfolio Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-2xl">
              Independent demonstration projects built from scratch to showcase modern responsive layout, e-commerce workflow implementation, and clean code architecture.
            </p>
          </div>

          <div className="text-xs text-slate-500 font-mono self-start md:self-auto">
            3 Selected Applications
          </div>
        </div>

        {/* Project Cards List */}
        <div className="space-y-14">
          {PROJECTS.map((project) => {
            const hasCustomImage = !imageErrors[project.id] && projectImages[project.id];

            return (
              <div
                key={project.id}
                className="rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700/80 transition-all duration-300 overflow-hidden group shadow-lg"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                  
                  {/* Left Side: Real Website Screenshot or Neutral Placeholder */}
                  <div className="lg:col-span-7 p-5 sm:p-7 bg-[#0c1017]/90 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-800">
                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl flex items-center justify-center group/screenshot">
                      
                      {/* Live indicator tag in top corner */}
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/90 backdrop-blur-md border border-slate-800 text-[11px] font-mono text-cyan-400 flex items-center gap-1.5 z-20 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Live Project</span>
                      </div>

                      {/* Real Permanent Public Asset Image */}
                      {hasCustomImage ? (
                        <img
                          src={projectImages[project.id]}
                          alt={`${project.name} Website Screenshot`}
                          referrerPolicy="no-referrer"
                          onError={() => handleImageError(project.id)}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      ) : (
                        /* Simple neutral placeholder if image fails to load */
                        <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900/80 text-slate-400 p-6 text-center select-none">
                          <span className="text-xs font-mono text-slate-300 font-medium">{project.name}</span>
                          <span className="text-[11px] text-slate-500 mt-1">Screenshot preview</span>
                        </div>
                      )}

                    </div>
                  </div>

                  {/* Right Side: Project Details, Technologies & Buttons */}
                  <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div>
                      {/* Project Type */}
                      <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-1.5">
                        {project.type}
                      </div>

                      {/* Project Title */}
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.name}
                      </h3>

                      {/* Exact Project Description */}
                      <p className="text-slate-300 text-sm leading-relaxed mt-3">
                        {project.description}
                      </p>

                      {/* Technologies Used */}
                      <div className="mt-5 pt-4 border-t border-slate-800/80">
                        <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                          Technologies Used
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800/90 text-slate-300 border border-slate-700/60"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Actions: View Details, Live Demo, GitHub */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      {/* View Details Modal Button */}
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors flex items-center gap-1.5 border border-slate-700/80 hover:border-slate-600"
                      >
                        <Eye className="w-3.5 h-3.5 text-cyan-400" />
                        <span>View Details</span>
                      </button>

                      {/* Live Demo Link */}
                      {project.isLiveAvailable && project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 rounded-lg bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-300 text-xs font-medium transition-colors flex items-center gap-1.5 border border-cyan-500/30 hover:border-cyan-500/50"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}

                      {/* GitHub Link */}
                      {project.isGithubAvailable && project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700/80"
                          title="View Source on GitHub"
                          aria-label={`View ${project.name} source code on GitHub`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
