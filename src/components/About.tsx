import React from 'react';
import { GraduationCap, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative border-t border-slate-800/60 bg-[#090c13]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest font-semibold block mb-2">
            Professional Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Bio text (concise, personal, no repetitive interest list) */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base leading-relaxed">
            {PERSONAL_INFO.aboutParagraphs.map((paragraph, idx) => (
              <p key={idx} className="text-slate-300/95 leading-relaxed text-base sm:text-lg">
                {paragraph}
              </p>
            ))}

            {/* Practical development approach highlight */}
            <div className="pt-2 p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold block">
                Development Philosophy
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Prioritizing clean implementation, mobile-first responsiveness, and straightforward communication to deliver web projects that work seamlessly across all screens.
              </p>
            </div>
          </div>

          {/* Right Column: Credentials & Freelance Commitment */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Education Card */}
            <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-6 space-y-3 relative overflow-hidden group hover:border-cyan-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-mono">Academic Foundation</span>
                <h4 className="text-lg font-bold text-white mt-0.5">
                  B.Tech in Computer Science Engineering
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Solid foundation in data structures, algorithms, object-oriented programming, and modern software engineering principles.
                </p>
              </div>
            </div>

            {/* Approach Card */}
            <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-6 space-y-3 relative overflow-hidden group hover:border-cyan-500/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-mono">Freelance Methodology</span>
                <h4 className="text-lg font-bold text-white mt-0.5">
                  Clean Code & Pragmatic Delivery
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Focusing on accessible semantics, responsive layouts, modular scripts, and verified client deliverables without bloated codebases.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
