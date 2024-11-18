import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ProjectCarousel() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-8 text-center">Project Highlights</h2>
      <Carousel className="max-w-3xl mx-auto">
        <CarouselContent>
          <CarouselItem>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Demo Launch</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                Test our complete POS and financial management systems with our interactive demo. Experience the future of hospitality management firsthand.
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Token System</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                Participate in our rewards token presale, directly linked to our governance token. Be part of our growing ecosystem from day one.
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Future Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                Join us in creating a global network of businesses connected through blockchain technology, offering seamless rewards and enhanced customer experiences.
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}