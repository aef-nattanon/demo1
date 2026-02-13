import React from 'react';
import { Briefcase } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="relative border-l border-slate-700 ml-3 md:ml-6 space-y-12">
          {EXPERIENCE.map((job) => (
            <div key={job.id} className="relative pl-8 md:pl-12">
              <div className="absolute -left-3 top-0 bg-primary border-2 border-accent text-accent rounded-full p-1.5">
                <Briefcase size={16} />
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-white">{job.role}</h3>
                <span className="text-sm text-accent font-medium bg-accent/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                  {job.period}
                </span>
              </div>
              
              <h4 className="text-lg text-slate-400 mb-4">{job.company}</h4>
              <p className="text-slate-400 leading-relaxed">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
