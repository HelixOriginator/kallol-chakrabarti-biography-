import React from 'react';
import { PROFILE_NAME, PROFILE_TITLE } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-slate-900 pb-16 pt-20 lg:pt-32">
      <div className="absolute inset-0 z-0">
         {/* Abstract geometric background suggesting networks/research */}
        <svg className="absolute left-0 top-0 h-full w-full opacity-10 animate-pulse-slow" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#3b82f6" />
        </svg>
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl animate-pulse"></div>
        <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-amber-600/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Helix Originator Avatar - Code generated (No image file needed) */}
          <div className="reveal group relative mb-8 h-48 w-48 animate-float rounded-full border-4 border-slate-700 bg-slate-950 shadow-2xl transition-all duration-500 hover:border-blue-500 hover:shadow-blue-500/20 flex items-center justify-center overflow-hidden">
            <div className="relative h-full w-full p-4">
              <svg viewBox="0 0 100 100" className="h-full w-full animate-[spin_10s_linear_infinite]">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                  <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#ef4444" />
                  </linearGradient>
                </defs>
                
                {/* Outer Ring */}
                <circle cx="50" cy="50" r="48" stroke="#1e293b" strokeWidth="1" fill="none" />
                
                {/* Helix Strands */}
                <path d="M50 5 C 90 25, 90 75, 50 95" stroke="url(#grad1)" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.9" />
                <path d="M50 5 C 10 25, 10 75, 50 95" stroke="url(#grad2)" strokeWidth="6" fill="none" strokeLinecap="round" strokeDasharray="2 6" opacity="0.8" />
                
                {/* Core */}
                <circle cx="50" cy="50" r="8" fill="#3b82f6" className="animate-pulse" />
              </svg>
              
              {/* Glossy Overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
            </div>
          </div>
          
          <h1 className="reveal font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl" style={{ transitionDelay: '100ms' }}>
            {PROFILE_NAME}
          </h1>
          
          <div className="reveal mt-4 flex items-center justify-center space-x-2" style={{ transitionDelay: '200ms' }}>
            <span className="h-px w-8 bg-blue-500"></span>
            <p className="max-w-2xl text-lg font-medium text-blue-400">
              {PROFILE_TITLE}
            </p>
            <span className="h-px w-8 bg-blue-500"></span>
          </div>

          <p className="reveal mt-6 max-w-2xl text-center text-lg leading-relaxed text-slate-300" style={{ transitionDelay: '300ms' }}>
            Pioneering research in governance, AI ethics, and civilizational studies. 
            Dedicated to policy innovation through the <span className="text-amber-400">Karma Index</span> & <span className="text-amber-400">Bharat Vikas Mandal</span>.
          </p>
          
          <div className="reveal mt-8 flex flex-wrap justify-center gap-4" style={{ transitionDelay: '400ms' }}>
            <a href="#portfolio" className="btn-shine rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-blue-500 hover:shadow-blue-500/25 hover:-translate-y-1">
              View Portfolio
            </a>
            <a href="#concepts" className="rounded-full border border-amber-600/50 bg-amber-900/10 px-8 py-3 text-sm font-semibold text-amber-400 transition-all hover:bg-amber-900/30 hover:border-amber-500 hover:text-amber-300 hover:-translate-y-1">
              My Concepts
            </a>
            <a href="#about" className="rounded-full border border-slate-600 px-8 py-3 text-sm font-semibold text-slate-300 transition-all hover:border-slate-400 hover:text-white hover:-translate-y-1">
              About Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;