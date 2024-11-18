import React from 'react';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Features } from '@/components/Features';
import { Projects } from '@/components/Projects';
import { ProjectCarousel } from '@/components/ProjectCarousel';
import { ProjectFAQ } from '@/components/ProjectFAQ';
import { CTA } from '@/components/CTA';
import { Contact } from '@/components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Hero />
      <About />
      <Features />
      <Projects />
      <ProjectCarousel />
      <ProjectFAQ />
      <CTA />
      <Contact />
    </div>
  );
}

export default App;