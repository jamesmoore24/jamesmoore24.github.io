import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-6 mt-12">
      <a href="https://github.com" className="text-blue-200 hover:text-blue-100 transition-colors">
        <Github className="w-8 h-8" />
      </a>
      <a href="https://linkedin.com" className="text-blue-200 hover:text-blue-100 transition-colors">
        <Linkedin className="w-8 h-8" />
      </a>
      <a href="mailto:contact@example.com" className="text-blue-200 hover:text-blue-100 transition-colors">
        <Mail className="w-8 h-8" />
      </a>
    </div>
  );
};