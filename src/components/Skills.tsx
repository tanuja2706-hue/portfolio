import React, { useState } from 'react';
import { SKILLS } from '../data/portfolioData';
import { Code, Globe, Layout, Cpu, Database, ShoppingBag, Layers, Terminal, Sparkles, Filter } from 'lucide-react';

export const Skills: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'core' | 'frontend' | 'backend' | 'specialized'>('all');

  const filteredSkills = filter === 'all' 
    ? SKILLS 
    : SKILLS.filter(skill => skill.category === filter);

  // Map each skill to an appropriate icon
  const getSkillIcon = (name: string) => {
    switch (name) {
      case 'HTML':
        return <Globe className="w-5 h-5 text-cyan-400" />;
      case 'CSS':
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'JavaScript':
        return <Terminal className="w-5 h-5 text-cyan-400" />;
      case 'Python':
        return <Code className="w-5 h-5 text-cyan-400" />;
      case 'Java':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Responsive Design':
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'API Integration':
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'Front-End Development':
        return <Code className="w-5 h-5 text-cyan-400" />;
      case 'Back-End Development':
        return <Database className="w-5 h-5 text-cyan-400" />;
      case 'E-commerce Development':
        return <ShoppingBag className="w-5 h-5 text-cyan-400" />;
      default:
        return <Code className="w-5 h-5 text-cyan-400" />;
    }
  };

  const categories = [
    { key: 'all', label: 'All Skills' },
    { key: 'core', label: 'Core Languages' },
    { key: 'frontend', label: 'Front-End & UI' },
    { key: 'backend', label: 'Back-End & APIs' },
    { key: 'specialized', label: 'E-commerce' }
  ] as const;

  return (
    <section id="skills" className="py-20 relative border-t border-slate-800/60 bg-[#080a0f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest font-semibold block mb-2">
              Technical Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Skills & Expertise
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              Demonstrated capabilities in modern web development, backend logic, and responsive digital storefront architectures.
            </p>
          </div>

          {/* Interactive filter controls without pill candy */}
          <div className="w-full md:w-auto max-w-full overflow-hidden self-start md:self-auto">
            <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 rounded-lg border border-slate-800 overflow-x-auto scroll-smooth overscroll-x-contain no-scrollbar max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setFilter(cat.key)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 touch-manipulation active:scale-95 ${
                    filter === cat.key
                      ? 'bg-slate-800 text-cyan-400 shadow-sm border border-slate-700/60'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Cards Grid - No percentage bars as strictly instructed */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/50 group-hover:border-cyan-500/30 transition-colors">
                    {getSkillIcon(skill.name)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                    {skill.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mt-2">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note on genuine capabilities */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-xs text-slate-400">
          <span>Focused on practical implementations, standard compliant syntax, and clean code principles.</span>
        </div>

      </div>
    </section>
  );
};
