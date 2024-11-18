import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, Rocket, Shield } from 'lucide-react';

export function About() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-gray-800/50 border-gray-700">
          <CardContent className="pt-6">
            <p className="text-gray-300 leading-relaxed">
              At 22, I chose to break away from traditional education to immerse myself in the rapidly evolving world of blockchain and web development. Since June 2024, I've been working as a freelance developer, focusing on creating innovative solutions that bridge the gap between traditional web applications and blockchain technology.
            </p>
          </CardContent>
        </Card>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <Code2 className="w-6 h-6 text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Technical Expertise</h3>
              <p className="text-gray-300">React, Next.js, Redux, RESTful APIs, Smart Contracts, EVM Chains</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Security Focus</h3>
              <p className="text-gray-300">Specialized in developing secure financial management systems and DeFi solutions</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Rocket className="w-6 h-6 text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Innovation Driven</h3>
              <p className="text-gray-300">Creating cutting-edge solutions that revolutionize how businesses handle data and transactions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}