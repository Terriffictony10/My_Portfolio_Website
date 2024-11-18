import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Projects() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-gray-800/50 border-gray-700 group hover:border-blue-400/50 transition-all">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center justify-between">
              Decentratality
              <div className="space-x-2">
                <Button variant="ghost" size="icon">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ExternalLink className="w-5 h-5" />
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4">
              A Web3 platform revolutionizing hospitality businesses through blockchain technology. Features include POS systems, financial management, and tokenized rewards.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-400/10 text-blue-400 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-blue-400/10 text-blue-400 rounded-full text-sm">Solidity</span>
              <span className="px-3 py-1 bg-blue-400/10 text-blue-400 rounded-full text-sm">Web3.js</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800/50 border-gray-700 group hover:border-blue-400/50 transition-all">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center justify-between">
              DeFi Dashboard
              <div className="space-x-2">
                <Button variant="ghost" size="icon">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ExternalLink className="w-5 h-5" />
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4">
              A comprehensive dashboard for tracking DeFi investments across multiple chains. Features real-time data, portfolio analytics, and yield farming tracking.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-400/10 text-blue-400 rounded-full text-sm">Next.js</span>
              <span className="px-3 py-1 bg-blue-400/10 text-blue-400 rounded-full text-sm">Redux</span>
              <span className="px-3 py-1 bg-blue-400/10 text-blue-400 rounded-full text-sm">Ethers.js</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}