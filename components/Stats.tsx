import React from 'react';
import { MILESTONES } from '../constants';

const Stats: React.FC = () => {
  return (
    <div className="relative z-20 -mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {MILESTONES.map((stat, index) => (
          <div 
            key={stat.id}
            className="reveal flex flex-col items-center rounded-xl border border-slate-800 bg-slate-850/90 p-6 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-blue-900/20"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="mb-3 rounded-full bg-slate-900 p-3 text-blue-400 ring-1 ring-slate-700 transition-colors duration-300 group-hover:text-blue-300">
              <stat.icon size={24} />
            </div>
            <div className="text-2xl font-bold text-white text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              {stat.count}
            </div>
            <div className="mt-1 text-sm font-medium text-slate-300">{stat.label}</div>
            {stat.subLabel && (
              <div className="mt-1 text-xs text-slate-500">{stat.subLabel}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;