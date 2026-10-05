import React, { useState } from 'react';
import { Mail, Github, Copy, Check, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-slate-800/60 bg-[#080a0f] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Heading & Subtitle */}
        <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest font-semibold block mb-3">
          Get In Touch
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          Let's Work Together
        </h2>
        <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-12">
          Have a website or e-commerce project in mind? I'd love to hear about it.
        </p>

        {/* Clean, Simple Contact Cards (Email Me & GitHub) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto text-left">
          
          {/* Email Card */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-200 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>

              <span className="text-xs font-mono text-slate-400 block mb-1">
                Direct Contact
              </span>
              <h3 className="text-lg font-bold text-white mb-1">
                Email Me
              </h3>
              <p className="text-xs font-mono text-cyan-300 truncate mb-4">
                {PERSONAL_INFO.email}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-slate-800/80">
              <button
                type="button"
                disabled
                aria-disabled="true"
                tabIndex={-1}
                className="px-4 py-2 rounded-lg bg-cyan-400 text-slate-950 text-xs font-semibold flex items-center gap-1.5 shadow-sm cursor-default select-none pointer-events-none"
              >
                <span>Send Email</span>
                <Mail className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-colors flex items-center gap-1.5 border border-slate-700"
                aria-label="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-200 group flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 group-hover:border-cyan-500/40 mb-4 transition-all group-hover:scale-105">
                <Github className="w-6 h-6" />
              </div>

              <span className="text-xs font-mono text-slate-400 block mb-1">
                Code & Repositories
              </span>
              <h3 className="text-lg font-bold text-white mb-1">
                GitHub
              </h3>
              <p className="text-xs font-mono text-slate-400 truncate mb-4">
                github.com/tanuja2706-hue
              </p>
            </div>

            <div className="pt-2 border-t border-slate-800/80">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium transition-colors border border-slate-700"
              >
                <span>View Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
