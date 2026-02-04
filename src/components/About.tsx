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
I started my journey at the University of Arizona in 2022 as a Computer Science student. I wasnt feeling super structured of motivated though so I took some time to explore the world, ended up getting into building DApps on Ethereum, and ultimately Decided to come back to school pursuing an Associates of Applied Science from the Pima Community College. Im hoping the knowledge I attain along with certifications with CompTia as well as RedHat will set me up for success wherever I end up            </p>
          </CardContent>
        </Card>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <Code2 className="w-6 h-6 text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Technical Expertise</h3>
              <p className="text-gray-300">React, Next.js, Redux, APIs, Smart Contracts, AWS Systems (Amazon VPC, Amazon EC2), AWS IAM</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Security Focus</h3>
              <p className="text-gray-300">Specialized in practical systems problem-solving across AWS, standalone Linux servers, Windows Server environments, and blockchain-enabled solutions when appropriate.</p>
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