import React from 'react';
import { Button } from '@/components/ui/button';

export function CTA() {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-4xl font-bold mb-6">Join the Future of Hospitality</h2>
      <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
        Be part of the revolution in hospitality business management. Experience the power of Web3 technology with Decentratality.
      </p>
      <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg">
        Get Early Access
      </Button>
    </section>
  );
}