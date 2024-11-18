import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

export function FeatureCard({ icon, title, description, isActive, onClick }: FeatureCardProps) {
  return (
    <Card 
      className={`bg-gray-800 border-gray-700 transform transition-all duration-300 hover:scale-105 ${
        isActive ? 'ring-2 ring-blue-400' : ''
      }`}
      onClick={onClick}
    >
      <CardHeader>
        <div className="text-blue-400">{icon}</div>
        <CardTitle className="text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-300">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}