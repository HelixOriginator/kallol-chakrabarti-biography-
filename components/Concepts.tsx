import React from 'react';
import { KEY_CONCEPTS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Concepts: React.FC = () => {
  return (
    <section id="concepts" className="bg-slate-950 py-20 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
            Key Concepts & Innovations
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-amber-500 rounded-full"></div>
          </div>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Original frameworks and theoretical models pioneered by Kallol Chakrabarti to address global challenges in governance and ethics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {KEY_CONCEPTS.map((concept, index) => (
            <div 
              key={concept.id} 
              className="reveal group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-8 hover:bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-900/20"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 text-blue-400 shadow-inner ring-1 ring-slate-700 transition-all group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white group-hover:ring-0">
                <concept.icon size={24} />
              </div>
              
              <h3 className="mb-3 text-xl font-bold text-slate-100 group-hover:text-white">
                {concept.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300">
                {concept.description}
              </p>

              <div className="mt-6 flex items-center text-xs font-medium text-slate-500 group-hover:text-blue-400 transition-colors">
                <span>Explore Concept</span>
                <ArrowRight size={12} className="ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Concepts;