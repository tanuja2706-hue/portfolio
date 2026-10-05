import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Camera, Sparkles, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [photoSrc, setPhotoSrc] = useState<string>('./assets/profile-photo.svg');
  const [imageLoaded, setImageLoaded] = useState<boolean>(true);
  const [imageError, setImageError] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check localStorage first if user uploaded a custom portrait, otherwise use relative local project asset
    const savedPhoto = localStorage.getItem('tanuja_portrait');
    if (savedPhoto) {
      setPhotoSrc(savedPhoto);
      setImageLoaded(true);
    } else {
      setPhotoSrc('./assets/profile-photo.svg');
    }
  }, []);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setPhotoSrc(result);
          setImageLoaded(true);
          setImageError(false);
          try {
            localStorage.setItem('tanuja_portrait', result);
          } catch (err) {
            console.warn('Storage limit reached, photo active in memory');
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageError = () => {
    if (photoSrc !== './assets/profile-photo.svg') {
      setPhotoSrc('./assets/profile-photo.svg');
      setImageError(false);
    } else {
      setImageError(true);
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background ambient glow effects (subtle cyan/deep slate) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Subtitle, Description, Authentic Highlights, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Primary Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-300">{PERSONAL_INFO.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-cyan-400/90 tracking-tight">
                {PERSONAL_INFO.role}
              </p>
            </div>

            {/* Exact Required Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              {PERSONAL_INFO.heroDescription}
            </p>

            {/* Required Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, '#projects')}
                className="px-6 py-3 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-md shadow-cyan-950/40 hover:shadow-cyan-500/20 active:scale-95 flex items-center gap-2 group"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Professional Portrait in Clean Circular Frame */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group">
              
              {/* Subtle ambient cyan glow ring behind the circle */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Circular Frame Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full p-1 bg-gradient-to-b from-cyan-400/60 via-slate-700/40 to-cyan-500/30 shadow-[0_0_40px_-10px_rgba(6,182,212,0.3)]">
                
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-slate-800 relative flex items-center justify-center">
                  
                  {/* The Actual Photo: object-fit: cover, no stretch, fully responsive */}
                  {!imageError && photoSrc ? (
                    <img
                      src={photoSrc}
                      alt="Tanuja Bag - Web Developer"
                      referrerPolicy="no-referrer"
                      onLoad={() => {
                        setImageLoaded(true);
                        setImageError(false);
                      }}
                      onError={handleImageError}
                      className="w-full h-full object-cover object-center rounded-full transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : null}

                  {/* Fallback / Upload Prompt if image file not loaded */}
                  {imageError && (
                    <div className="text-center p-6 space-y-3">
                      <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto">
                        <span className="text-xl font-bold font-mono">TB</span>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs font-semibold text-white">Tanuja Bag</div>
                        <div className="text-[11px] text-slate-400">Professional Portrait</div>
                      </div>
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="px-3 py-1.5 rounded-lg bg-cyan-400/20 hover:bg-cyan-400/30 border border-cyan-500/40 text-cyan-300 text-xs font-medium transition-colors flex items-center gap-1.5 mx-auto"
                      >
                        <Camera className="w-3.5 h-3.5" />
                        <span>Select Photo</span>
                      </button>
                    </div>
                  )}

                  {/* Subtle photo update button on hover */}
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    title="Update portrait photo"
                    className="absolute bottom-4 right-4 p-2 rounded-full bg-slate-900/90 text-slate-300 hover:text-white border border-slate-700/80 shadow-lg hover:border-cyan-400 transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
                    aria-label="Upload photo"
                  >
                    <Camera className="w-4 h-4 text-cyan-400" />
                  </button>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                    aria-hidden="true"
                  />

                </div>
              </div>

              {/* Status pill under portrait on desktop / mobile */}
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="font-medium text-slate-300">Tanuja Bag</span>
                <span className="text-slate-600">·</span>
                <span className="text-[11px] font-mono text-cyan-400/90">Web Developer</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
