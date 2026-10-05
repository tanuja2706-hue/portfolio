import React, { useState } from 'react';
import { WHY_WORK_WITH_ME } from '../data/portfolioData';
import { Check, ShieldCheck, HeartHandshake, Eye, Sparkles, MessageSquare, Zap, BookOpen } from 'lucide-react';

export const WhyWorkWithMe: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const getPointIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Zap className="w-5 h-5 text-cyan-400" />;
      case 1:
        return <Eye className="w-5 h-5 text-cyan-400" />;
      case 2:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case 3:
        return <MessageSquare className="w-5 h-5 text-cyan-400" />;
      case 4:
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      case 5:
        return <BookOpen className="w-5 h-5 text-cyan-400" />;
      default:
        return <Check className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="why-me" className="py-20 relative border-t border-slate-800/60 bg-[#090c13]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest font-semibold block mb-2">
            Client Collaboration
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Why Work With Me
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            I focus on clean development, thoughtful design, and clear communication to create practical web experiences.
          </p>
        </div>

        {/* 6 Genuine Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_WORK_WITH_ME.map((point, index) => {
            const isSelected = activeCard === index;

            return (
              <div
                key={point.title}
                onClick={() => setActiveCard(isSelected ? null : index)}
                className={`p-6 rounded-2xl bg-slate-900/40 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-cyan-500/70 bg-slate-900/90 shadow-lg shadow-cyan-950/20'
                    : 'border-slate-800/90 hover:border-slate-700/80 hover:bg-slate-900/60'
                }`}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-4">
                    {getPointIcon(index)}
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">
                    {point.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60">
                  <div className="text-[11px] text-cyan-400/90 font-medium">
                    {point.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
