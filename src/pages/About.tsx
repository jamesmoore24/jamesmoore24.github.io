import React from 'react';
import { Code2, Brain, Music4, Coffee, Users, UtensilsCrossed } from 'lucide-react';

const activities = [
  {
    icon: Code2,
    title: 'Software Engineering',
    description: 'My passion for coding started when I realized its potential to solve real-world problems and make a positive impact on society.',
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Fascinated by the potential of AI to transform industries and improve decision-making processes.',
  },
  {
    icon: Brain,
    title: 'Baseball',
    description: 'Playing baseball taught me the importance of teamwork, strategy, and continuous improvement.',
  },
  {
    icon: Music4,
    title: 'Piano Improvisation',
    description: 'Music helps me think creatively and approach problem-solving from different angles.',
  },
  {
    icon: Users,
    title: 'Leadership & Mentoring',
    description: 'As head mentor at the Leadership Training Institute, I help others develop their potential and grow professionally.',
  },
  {
    icon: Brain,
    title: 'Golf',
    description: 'Golf teaches me patience, precision, and the value of consistent practice.',
  },
];

export function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About Me</h1>
      
      <div className="max-w-3xl">
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          I chose computer science and software engineering because I believe technology has the power to create positive change in the world. Through coding, we can build solutions that make life better for people everywhere.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md">
              <activity.icon className="w-8 h-8 text-green-600 dark:text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {activity.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}