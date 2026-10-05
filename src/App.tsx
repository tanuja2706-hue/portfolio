/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'projects', 'services', 'why-me', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Drag and drop asset sync listener for saving exact user files to public/assets
  useEffect(() => {
    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
    };

    const handleDrop = (e: DragEvent) => {
      e.preventDefault();
      if (!e.dataTransfer?.files?.length) return;

      Array.from(e.dataTransfer.files).forEach((file) => {
        const nameLower = file.name.toLowerCase();
        let targetName = '';

        if (nameLower.includes('whatsapp') || nameLower.includes('tanuja') || nameLower.includes('profile')) {
          targetName = 'profile.jpg';
        } else if (nameLower.includes('154500') || nameLower.includes('luxe')) {
          targetName = 'luxecart.png';
        } else if (nameLower.includes('122158') || nameLower.includes('shop')) {
          targetName = 'shopsense.png';
        } else if (nameLower.includes('122242') || nameLower.includes('bistro')) {
          targetName = 'bistroorder.png';
        }

        if (targetName) {
          const reader = new FileReader();
          reader.onload = (event) => {
            const dataUrl = event.target?.result as string;
            if (dataUrl) {
              fetch('/api/sync-asset', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ filename: targetName, data: dataUrl })
              })
                .then(() => {
                  setToastMessage(`Saved ${file.name} to /public/assets/${targetName}`);
                  setTimeout(() => setToastMessage(null), 4000);
                  setTimeout(() => window.location.reload(), 1200);
                })
                .catch(() => {});
            }
          };
          reader.readAsDataURL(file);
        }
      });
    };

    window.addEventListener('dragover', handleDragOver);
    window.addEventListener('drop', handleDrop);

    return () => {
      window.removeEventListener('dragover', handleDragOver);
      window.removeEventListener('drop', handleDrop);
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#080a0f] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl bg-slate-900 border border-cyan-500/40 text-cyan-300 text-xs flex items-center gap-2 shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <WhyWorkWithMe />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
