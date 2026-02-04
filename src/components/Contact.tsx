'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function Contact() {
  const [name, setName] = useState('');
  const [fromEmail, setFromEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, fromEmail, message }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || 'Failed to send message.');
      }

      setStatus('sent');
      setName('');
      setFromEmail('');
      setMessage('');
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err?.message || 'Something went wrong.');
    }
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <Card className="max-w-2xl mx-auto bg-gray-800/50 border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl">Let's Work Together</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={onSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Input
                  placeholder="Name"
                  className="bg-gray-700/50 border-gray-600"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  minLength={2}
                />
              </div>
              <div>
                <Input
                  placeholder="Email"
                  type="email"
                  className="bg-gray-700/50 border-gray-600"
                  value={fromEmail}
                  onChange={(e) => setFromEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <Textarea
                placeholder="Your message"
                className="bg-gray-700/50 border-gray-600 min-h-[150px]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                minLength={10}
              />
            </div>

            <Button
              className="w-full bg-blue-500 hover:bg-blue-600"
              disabled={status === 'sending'}
              type="submit"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </Button>

            {status === 'sent' && (
              <p className="text-sm text-green-400">Message sent. I’ll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-400">Error: {errorMsg}</p>
            )}
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
