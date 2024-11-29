import React from "react";
import { User } from "lucide-react";
import { Card } from "./Card";

export const AboutSection = () => {
  return (
    <Card>
      <div className="flex items-center mb-4">
        <User className="w-6 h-6 text-blue-200 mr-3" />
        <h3 className="text-xl text-blue-100 font-semibold">About Me</h3>
      </div>
      <p className="text-blue-100 leading-relaxed">
        Senior at MIT studying Artificial Intelligence and Computer Science.
        Particularly interested in leveraging cutting-edge AI to improve
        education for students, teachers, and administrators through scalable
        and accessible software.
      </p>
    </Card>
  );
};
