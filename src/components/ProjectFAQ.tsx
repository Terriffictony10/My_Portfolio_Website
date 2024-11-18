import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function ProjectFAQ() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-8 text-center">Project Details</h2>
      <Accordion type="single" collapsible className="max-w-2xl mx-auto">
        <AccordionItem value="item-1" className="border-gray-700">
          <AccordionTrigger className="text-white">What is Decentratality?</AccordionTrigger>
          <AccordionContent className="text-gray-300">
            Decentratality is a Web3 service platform designed specifically for hospitality businesses. It combines modern POS systems with blockchain technology to create secure, efficient, and rewarding business operations.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-gray-700">
          <AccordionTrigger className="text-white">How does the reward system work?</AccordionTrigger>
          <AccordionContent className="text-gray-300">
            Our platform features a unique tokenized reward system that allows businesses to offer tradeable-on-chain rewards to their customers. These tokens can be used across the Decentratality ecosystem.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-gray-700">
          <AccordionTrigger className="text-white">What are the benefits for businesses?</AccordionTrigger>
          <AccordionContent className="text-gray-300">
            Businesses gain access to secure POS systems, streamlined financial management, customer loyalty programs, and entry into the Web3 ecosystem. All while maintaining a familiar Web2-style interface.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}