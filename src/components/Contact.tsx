import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function Contact() {
  return (
    <section className="container mx-auto px-4 py-16">
      <Card className="max-w-2xl mx-auto bg-gray-800/50 border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl">Let's Work Together</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Input placeholder="Name" className="bg-gray-700/50 border-gray-600" />
              </div>
              <div>
                <Input placeholder="Email" type="email" className="bg-gray-700/50 border-gray-600" />
              </div>
            </div>
            <div>
              <Textarea 
                placeholder="Your message" 
                className="bg-gray-700/50 border-gray-600 min-h-[150px]" 
              />
            </div>
            <Button className="w-full bg-blue-500 hover:bg-blue-600">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}