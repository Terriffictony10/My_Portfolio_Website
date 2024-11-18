import React from 'react';
import { Building2, Coins, Shield, Users } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export function Features() {
  const [activeFeature, setActiveFeature] = React.useState(0);

  const features = [
    {
      icon: <Building2 className="w-12 h-12 mb-4" />,
      title: 'Business Integration',
      description: 'Seamless Web3 integration for hospitality businesses with advanced POS and financial management systems.',
    },
    {
      icon: <Shield className="w-12 h-12 mb-4" />,
      title: 'Security First',
      description: 'On-chain operations ensuring customer data security and transparent transactions.',
    },
    {
      icon: <Coins className="w-12 h-12 mb-4" />,
      title: 'Tokenized Rewards',
      description: 'Innovative reward systems with tradeable tokens, connecting businesses and customers.',
    },
    {
      icon: <Users className="w-12 h-12 mb-4" />,
      title: 'Community Growth',
      description: 'Building relationships between businesses and customers through shared token ecosystems.',
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            isActive={activeFeature === index}
            onClick={() => setActiveFeature(index)}
          />
        ))}
      </div>
    </section>
  );
}