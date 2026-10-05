import React from 'react';
import { ShoppingBag, Smartphone, Code2, Layers, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-cyan-400" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-cyan-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-cyan-400" />;
      default:
        return <Code2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-20 relative border-t border-slate-800/60 bg-[#080a0f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest font-semibold block mb-2">
            What I Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Freelance Services
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Client-focused web development services tailored to deliver responsive, clean, and practical solutions for your business.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/90 hover:border-cyan-500/40 hover:bg-slate-900/70 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:border-cyan-500/40 group-hover:bg-cyan-950/20 transition-all">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mt-2.5">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="mt-5 pt-4 border-t border-slate-800/70 space-y-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Deliverables
                  </span>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-800/60">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Inquire for this service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
