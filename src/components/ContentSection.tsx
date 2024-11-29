import React from "react";
import { AboutSection } from "./AboutSection";
import { ExperienceSection } from "./ExperienceSection";
import { BlogSection } from "./BlogSection";
import { SocialLinks } from "./SocialLinks";

interface ContentSectionProps {
  isVisible: boolean;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  isVisible,
}) => {
  return (
    <div
      className={`relative z-10 max-w-6xl mx-auto px-6 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-5xl font-bold text-blue-100">James Moore</h1>
        <SocialLinks />
      </div>
      <h2 className="text-2xl text-blue-200 mb-8">
        Building the future of AI in education
      </h2>

      <AboutSection />
      <BlogSection />
    </div>
  );
};
