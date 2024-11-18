import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const handleNavigation = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 text-left">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          Blockchain Developer & Web3 Innovator
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Breaking traditional boundaries to create secure, innovative solutions in blockchain and web development. Specializing in DeFi, React, and Next.js.
        </p>
        <div className="flex gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleNavigation('https://github.com/Terriffictony10')}
          >
            <Github className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleNavigation('https://www.linkedin.com/in/anthony-yonan-11b6592ab')}
          >
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleNavigation('mailto:superzman15@gmail.com')}
          >
            <Mail className="w-5 h-5" />
          </Button>
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <div className="relative w-80 h-80">
          <img 
            src="/profile.jpg" 
            alt="Professional headshot" 
            className="rounded-2xl w-full h-full object-cover shadow-xl border-4 border-blue-400/20"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-gray-900/20 to-transparent" />
        </div>
      </div>
    </header>
  );
}
