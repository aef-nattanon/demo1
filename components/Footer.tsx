import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Nattanon. All rights reserved.
        </p>
        
        <div className="flex gap-6">
          <a href="#" className="text-slate-400 hover:text-accent transition-colors"><Github size={20} /></a>
          <a href="#" className="text-slate-400 hover:text-accent transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="text-slate-400 hover:text-accent transition-colors"><Twitter size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
