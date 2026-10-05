import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Eye, Search, ShoppingBag, UtensilsCrossed, Star } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projectImages, setProjectImages] = useState<Record<string, string>>({
    luxecart: '/assets/luxecart.png',
    shopsense: '/assets/shopsense.png',
    bistroorder: '/assets/bistroorder.png'
  });
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Sync any saved screenshots from localStorage to permanent /assets/ folder
    const syncItem = (key: string, filename: string) => {
      const data = localStorage.getItem(key);
      if (data && data.startsWith('data:image')) {
        fetch('/api/sync-asset', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ filename, data })
        }).catch(() => {});
        return data;
      }
      return null;
    };

    const savedLuxeCart = syncItem('luxecart_screenshot', 'luxecart.png');
    const savedShopSense = syncItem('shopsense_screenshot', 'shopsense.png');
    const savedBistro = syncItem('bistroorder_screenshot', 'bistroorder.png');

    setProjectImages(prev => ({
      ...prev,
      ...(savedLuxeCart ? { luxecart: savedLuxeCart } : { luxecart: '/assets/luxecart.png' }),
      ...(savedShopSense ? { shopsense: savedShopSense } : { shopsense: '/assets/shopsense.png' }),
      ...(savedBistro ? { bistroorder: savedBistro } : { bistroorder: '/assets/bistroorder.png' })
    }));
  }, []);

  const handleImageError = (projectId: string) => {
    const current = projectImages[projectId];
    if (current && !current.includes('screenshot')) {
      setProjectImages(prev => ({
        ...prev,
        [projectId]: `/assets/${projectId}-screenshot.png`
      }));
    } else {
      setImageErrors(prev => ({ ...prev, [projectId]: true }));
    }
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
            const isLuxeCart = project.id === 'luxecart';
            const isShopSense = project.id === 'shopsense';
            const isBistroOrder = project.id === 'bistroorder';

            return (
              <div
                key={project.id}
                className="rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700/80 transition-all duration-300 overflow-hidden group shadow-lg"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                  
                  {/* Left Side: Real Website Screenshot or Visual Preview Container */}
                  <div className="lg:col-span-7 p-5 sm:p-7 bg-[#0c1017]/90 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-800">
                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl flex items-center justify-center group/screenshot">
                      
                      {/* Live indicator tag in top corner */}
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/90 backdrop-blur-md border border-slate-800 text-[11px] font-mono text-cyan-400 flex items-center gap-1.5 z-20 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Live Project</span>
                      </div>

                      {/* Real Uploaded / Sourced Image */}
                      {hasCustomImage ? (
                        <img
                          src={projectImages[project.id]}
                          alt={`${project.name} Website Screenshot`}
                          referrerPolicy="no-referrer"
                          onError={() => handleImageError(project.id)}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      ) : (
                        /* Proper Visual Previews for Each Project */
                        <div className="w-full h-full p-4 sm:p-5 flex flex-col justify-between bg-gradient-to-b from-[#0b0f16] to-[#080b10] text-left select-none overflow-hidden">
                          
                          {/* LuxeCart Visual Preview */}
                          {isLuxeCart && (
                            <div className="w-full h-full flex flex-col justify-between pt-8">
                              {/* Header */}
                              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                                <div className="text-xs font-bold tracking-widest text-white uppercase font-mono">
                                  LUXECART
                                </div>
                                <div className="hidden sm:flex items-center gap-3 text-[11px] text-slate-400">
                                  <span>Timepieces</span>
                                  <span>Leather Goods</span>
                                  <span>Accessories</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-mono">
                                  <ShoppingBag className="w-3.5 h-3.5" />
                                  <span>Bag (2)</span>
                                </div>
                              </div>

                              {/* Showcase Products */}
                              <div className="grid grid-cols-2 gap-3 py-3">
                                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
                                  <div className="h-16 rounded bg-slate-800/50 flex items-center justify-center text-slate-500 text-xs font-mono">
                                    Chronos Noir 40mm
                                  </div>
                                  <div className="mt-2 flex items-center justify-between text-xs">
                                    <span className="text-white font-medium">Noir Edition</span>
                                    <span className="text-cyan-400 font-mono">$320.00</span>
                                  </div>
                                </div>

                                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
                                  <div className="h-16 rounded bg-slate-800/50 flex items-center justify-center text-slate-500 text-xs font-mono">
                                    Leather Folio
                                  </div>
                                  <div className="mt-2 flex items-center justify-between text-xs">
                                    <span className="text-white font-medium">Cognac Calf</span>
                                    <span className="text-cyan-400 font-mono">$180.00</span>
                                  </div>
                                </div>
                              </div>

                              {/* Footer Status */}
                              <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80 pt-2 font-mono">
                                <span className="text-emerald-400">✓ Responsive Catalog</span>
                                <span>Cart & Checkout Active</span>
                              </div>
                            </div>
                          )}

                          {/* ShopSense Visual Preview */}
                          {isShopSense && (
                            <div className="w-full h-full flex flex-col justify-between pt-8">
                              {/* Header & Search */}
                              <div className="space-y-2 border-b border-slate-800/80 pb-3">
                                <div className="flex items-center justify-between">
                                  <div className="text-xs font-bold text-white tracking-wide flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded bg-cyan-400" />
                                    <span>ShopSense</span>
                                  </div>
                                  <span className="text-[10px] text-slate-400 font-mono">250+ Products</span>
                                </div>
                                
                                <div className="flex items-center gap-2 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800 text-xs text-slate-400">
                                  <Search className="w-3.5 h-3.5 text-cyan-400" />
                                  <span className="text-[11px]">Search gadgets, accessories, audio...</span>
                                </div>

                                <div className="flex items-center gap-1.5 text-[10px] text-slate-300 overflow-x-auto pb-0.5">
                                  <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">All</span>
                                  <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">Electronics</span>
                                  <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">Audio</span>
                                  <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">Smart Home</span>
                                </div>
                              </div>

                              {/* Product Listing Preview */}
                              <div className="grid grid-cols-2 gap-3 py-2">
                                <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1.5">
                                  <div className="text-xs font-semibold text-white truncate">Wireless ANC Headphones</div>
                                  <div className="flex items-center gap-1 text-[10px] text-amber-400">
                                    <Star className="w-3 h-3 fill-amber-400" />
                                    <span>4.9 (54 reviews)</span>
                                  </div>
                                  <div className="flex items-center justify-between pt-1">
                                    <span className="text-xs font-mono font-bold text-cyan-400">$189.00</span>
                                    <span className="text-[10px] text-emerald-400">In Stock</span>
                                  </div>
                                </div>

                                <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1.5">
                                  <div className="text-xs font-semibold text-white truncate">Fitness Smart Band 5</div>
                                  <div className="flex items-center gap-1 text-[10px] text-amber-400">
                                    <Star className="w-3 h-3 fill-amber-400" />
                                    <span>4.8 (38 reviews)</span>
                                  </div>
                                  <div className="flex items-center justify-between pt-1">
                                    <span className="text-xs font-mono font-bold text-cyan-400">$89.00</span>
                                    <span className="text-[10px] text-emerald-400">In Stock</span>
                                  </div>
                                </div>
                              </div>

                              {/* Footer Status */}
                              <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80 pt-2 font-mono">
                                <span className="text-cyan-400">Instant Search & Filtering</span>
                                <span>CSS Grid Layout</span>
                              </div>
                            </div>
                          )}

                          {/* BistroOrder Visual Preview */}
                          {isBistroOrder && (
                            <div className="w-full h-full flex flex-col justify-between pt-8">
                              {/* Header & Categories */}
                              <div className="space-y-2 border-b border-slate-800/80 pb-3">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center">
                                      <UtensilsCrossed className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="text-xs font-bold text-white">Bistro Artisanal Kitchen</span>
                                  </div>
                                  <span className="text-[10px] text-emerald-400 font-mono">Open · 20 min</span>
                                </div>

                                <div className="flex items-center gap-1.5 text-[10px] text-slate-300">
                                  <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">Mains</span>
                                  <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">Appetizers</span>
                                  <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">Artisan Desserts</span>
                                </div>
                              </div>

                              {/* Dish Cards Preview */}
                              <div className="space-y-2 py-2">
                                <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                                  <div>
                                    <div className="text-xs font-semibold text-white">Truffle Wild Mushroom Risotto</div>
                                    <div className="text-[10px] text-slate-400">Arborio rice, aged parmesan, fresh herbs</div>
                                  </div>
                                  <span className="text-xs font-mono font-bold text-cyan-400 ml-3">$24.00</span>
                                </div>

                                <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                                  <div>
                                    <div className="text-xs font-semibold text-white">Wood-Fired Margherita D.O.P</div>
                                    <div className="text-[10px] text-slate-400">San Marzano tomatoes, fresh mozzarella</div>
                                  </div>
                                  <span className="text-xs font-mono font-bold text-cyan-400 ml-3">$21.00</span>
                                </div>
                              </div>

                              {/* Order Cart Drawer Preview */}
                              <div className="flex items-center justify-between text-[11px] p-2 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-slate-200">
                                <span className="font-medium">Order Subtotal (2 items)</span>
                                <span className="font-mono text-cyan-300 font-bold">$45.00 · Checkout →</span>
                              </div>
                            </div>
                          )}

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

                    {/* Action Buttons: Live Demo, GitHub, View Details */}
                    <div className="space-y-3 pt-4 border-t border-slate-800/60">
                      <div className="flex flex-wrap items-center gap-3">
                        
                        {/* Live Demo Button */}
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-xs transition-all active:scale-95 flex items-center gap-1.5 shadow-sm"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>

                        {/* GitHub Button */}
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-medium text-xs transition-colors flex items-center gap-1.5 border border-slate-700"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>GitHub</span>
                        </a>

                        {/* View Details Button */}
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="px-3.5 py-2.5 rounded-lg border border-slate-700/60 hover:border-slate-600 bg-slate-800/30 hover:bg-slate-800/60 text-slate-300 hover:text-white text-xs font-medium transition-colors flex items-center gap-1.5 ml-auto"
                        >
                          <Eye className="w-3.5 h-3.5 text-cyan-400" />
                          <span>View Details</span>
                        </button>
                      </div>
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
