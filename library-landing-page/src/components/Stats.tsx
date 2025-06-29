import React from 'react';
import { Download, Users, Globe, Star } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Download,
      value: '10K+',
      label: 'Downloads',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Developers',
      color: 'text-pink-600'
    },
    {
      icon: Globe,
      value: '14+',
      label: 'Languages',
      color: 'text-orange-600'
    },
    {
      icon: Star,
      value: '4.9',
      label: 'Rating',
      color: 'text-yellow-600'
    }
  ];

  return (
    <section className="section-sm bg-white dark:bg-gray-900">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`fade-in delay-${(index + 1) * 100} text-center`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 ${stat.color} bg-gray-50 dark:bg-gray-800 rounded-lg mb-4`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}