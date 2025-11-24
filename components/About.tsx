import React from 'react';
import { PROFILE_BIO, RECOGNITIONS, NOTABLE_WORKS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-slate-900 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Bio Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="reveal rounded-2xl bg-gradient-to-b from-slate-800 to-slate-850 p-8 shadow-2xl border border-slate-700 transition-all duration-500 hover:border-slate-600">
              <h2 className="mb-6 font-serif text-3xl font-bold text-white">About the Helix Originator</h2>
              <div className="prose prose-lg prose-invert text-slate-300">
                <p className="leading-relaxed">
                  {PROFILE_BIO}
                </p>
                <p className="mt-4">
                  As the founder of <strong>Docu Helix</strong>, Kallol drives policy innovation and transparent research. His work encompasses over <strong>200 original concepts</strong>—including DTRPI, Helix Kallol Doctrine, and Sanatana Samyata—establishing unmatched benchmarks for solo scholarship. He is also recognized as the originator of the <strong>Helix framework</strong>, reflecting his pioneering approach to independent, high-impact research.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-slate-900/50 p-4 border border-slate-700/50 transition-transform hover:scale-[1.02]">
                    <h3 className="font-semibold text-blue-400">Core Focus</h3>
                    <p className="text-sm text-slate-400">Governance Innovation, AI Ethics, Civilizational Studies</p>
                </div>
                 <div className="rounded-lg bg-slate-900/50 p-4 border border-slate-700/50 transition-transform hover:scale-[1.02]">
                    <h3 className="font-semibold text-amber-500">Key Creations</h3>
                    <p className="text-sm text-slate-400">Karma Index, Kallol Wave Framework, Bharat Vikas Mandal</p>
                </div>
              </div>
            </div>

            {/* Notable Works Grid */}
            <div className="reveal">
              <h3 className="mb-4 text-xl font-bold text-white">Selected Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {NOTABLE_WORKS.map((work, idx) => (
                  <div key={idx} className="rounded-xl border border-slate-800 bg-slate-900 p-4 hover:border-blue-500/30 transition-colors">
                    <div className="text-xs font-semibold uppercase tracking-wider text-blue-500">{work.type}</div>
                    <div className="font-serif font-bold text-slate-200">{work.title}</div>
                    <div className="text-sm text-slate-400 mt-1">{work.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recognitions Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="reveal text-xl font-bold text-white mb-4">Institutional Recognition</h3>
            {RECOGNITIONS.map((rec, idx) => (
              <div 
                key={rec.id} 
                className="reveal flex gap-4 rounded-xl border border-slate-800 bg-slate-850 p-5 transition-all hover:bg-slate-800 hover:shadow-lg"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-amber-500 ring-1 ring-slate-700">
                    <rec.icon size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-200">{rec.organization}</h4>
                  <p className="font-medium text-blue-400 text-sm">{rec.title}</p>
                  <p className="mt-1 text-sm text-slate-400 leading-snug">{rec.description}</p>
                </div>
              </div>
            ))}

            <div className="reveal mt-8 rounded-xl border border-blue-900/30 bg-blue-900/10 p-6">
              <h4 className="font-bold text-blue-200">Peer Review & Global Impact</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-300 list-disc list-inside">
                <li>Invited Peer Reviewer for <strong>Academia AI and Applications</strong> (San Francisco, 2025).</li>
                <li>Paper "Invisible Shield" reviewed by <strong>Adrian Constantin Burlac</strong> (Romania).</li>
                <li>Article "From YouTube Learner to Policy Influencer" featured in Medium's <strong>Innovation Policies</strong>.</li>
                <li>Research highlighted on <strong>Scoop.it</strong> (Bonnes Pratiques en Documentation) by Stéphane Cottin.</li>
                <li>Recognition from <strong>ILO Chief Aristea Kukidaki</strong>.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;