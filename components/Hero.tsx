import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center">
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0 text-center lg:text-left">
          <h2 className="text-accent font-medium mb-4 tracking-wide">HELLO, I'M</h2>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {PERSONAL_INFO.name}
          </h1>
          <h3 className="text-2xl lg:text-3xl text-slate-400 mb-8">
            {PERSONAL_INFO.title}
          </h3>
          <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            {PERSONAL_INFO.about}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#projects" className="px-8 py-3 bg-accent text-primary font-bold rounded-full hover:bg-sky-300 transition-colors flex items-center justify-center gap-2">
              View My Work <ArrowRight className="w-4 h-4" />
            </a>
            <button className="px-8 py-3 border border-slate-600 text-white font-medium rounded-full hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
              Download CV <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px]">
            <div className="absolute inset-0 border-2 border-accent/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 border-2 border-purple-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            <img 
              src="https://picsum.photos/500/500?grayscale" 
              alt="Profile" 
              className="absolute inset-8 w-[calc(100%-4rem)] h-[calc(100%-4rem)] object-cover rounded-full border-4 border-slate-700 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
