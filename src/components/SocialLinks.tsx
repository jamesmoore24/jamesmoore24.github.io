import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-6 mt-12">
      <a
        href="https://github.com/jamesmoore24"
        className="text-blue-200 hover:text-blue-100 transition-colors"
      >
        <Github className="w-8 h-8" />
      </a>
      <a
        href="https://www.linkedin.com/in/james-moore-a931811b7/"
        className="text-blue-200 hover:text-blue-100 transition-colors"
      >
        <Linkedin className="w-8 h-8" />
      </a>
      <a
        href="mailto:jame.moore24@gmail.com"
        className="text-blue-200 hover:text-blue-100 transition-colors"
      >
        <Mail className="w-8 h-8" />
      </a>
    </div>
  );
};
