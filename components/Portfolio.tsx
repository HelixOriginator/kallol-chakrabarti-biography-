import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  // Group links by category for better organization
  const categories = Array.from(new Set(SOCIAL_LINKS.map(l => l.category)));

  return (
    <div id="portfolio" className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-white">Professional Ecosystem</h2>
          <p className="mt-2 text-slate-400">Explore publications, code repositories, and research platforms.</p>
        </div>

        <div className="space-y-16">
          {categories.map((category, catIndex) => (
            <div key={category} className="reveal" style={{ transitionDelay: `${catIndex * 200}ms` }}>
              <div className="mb-6 flex items-center gap-4">
                <h3 className="text-xl font-bold text-amber-500">{category}s</h3>
                <div className="h-px flex-1 bg-slate-800"></div>
              </div>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {SOCIAL_LINKS.filter(link => link.category === category).map((link, linkIndex) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reveal group relative flex flex-col rounded-2xl border border-slate-800 bg-slate-850 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-900/20"
                    style={{ transitionDelay: `${linkIndex * 100}ms` }}
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <div className="rounded-lg bg-slate-900 p-2 text-blue-400 transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-300">
                        <link.icon size={24} />
                      </div>
                      <ExternalLink size={16} className="text-slate-600 transition-colors group-hover:text-white" />
                    </div>
                    
                    <h4 className="mb-2 text-lg font-semibold text-slate-100 group-hover:text-white">
                      {link.title}
                    </h4>
                    
                    <p className="text-sm leading-relaxed text-slate-400 group-hover:text-slate-300">
                      {link.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;