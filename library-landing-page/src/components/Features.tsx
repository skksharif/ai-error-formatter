import React from 'react';
import { Zap, Heart, Globe, Terminal, Code, Play } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Get AI explanations in seconds, not minutes. Perfect for rapid debugging sessions.',
      color: 'text-orange-600'
    },
    {
      icon: Heart,
      title: 'Student Friendly',
      description: 'Learn while you debug. Great for bootcamps, students, and coding beginners.',
      color: 'text-pink-600'
    },
    {
      icon: Globe,
      title: 'Multi-Language',
      description: 'Get explanations in 14+ languages. Code globally, debug locally.',
      color: 'text-blue-600'
    },
    {
      icon: Terminal,
      title: 'Works Everywhere',
      description: 'Node.js, React, Vue, Next.js, Vite - if it runs JavaScript, we\'ve got you.',
      color: 'text-cyan-600'
    },
    {
      icon: Code,
      title: 'Open Source',
      description: 'MIT licensed, community driven. Contribute, customize, or just enjoy!',
      color: 'text-purple-600'
    },
    {
      icon: Play,
      title: 'Hackathon Ready',
      description: 'Zero config, maximum fun. Perfect for hackathons and rapid prototyping.',
      color: 'text-indigo-600'
    }
  ];

  return (
    <section id="features" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="fade-in heading-lg text-gray-900 dark:text-white mb-6">
            Why Developers Love It
          </h2>
          <p className="fade-in delay-100 text-lead max-w-3xl mx-auto">
            Built with developers in mind, our tool combines powerful AI with an intuitive 
            interface to make debugging faster and more enjoyable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`fade-in delay-${(index % 3 + 1) * 100} card card-hover card-feature`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 ${feature.color} bg-gray-50 dark:bg-gray-700 rounded-lg mb-6`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="heading-sm text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}