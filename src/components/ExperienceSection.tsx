import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { Card } from "./Card";

export const ExperienceSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <div className="flex items-center mb-4">
          <Briefcase className="w-6 h-6 text-blue-200 mr-3" />
          <h3 className="text-xl text-blue-100 font-semibold">Experience</h3>
        </div>
        <ul className="text-blue-100 space-y-3">
          <li>Senior Developer @ Tech Corp</li>
          <li>Lead Frontend @ StartupX</li>
          <li>Software Engineer @ Innovation Labs</li>
        </ul>
      </Card>

      <Card>
        <div className="flex items-center mb-4">
          <GraduationCap className="w-6 h-6 text-blue-200 mr-3" />
          <h3 className="text-xl text-blue-100 font-semibold">Education</h3>
        </div>
        <ul className="text-blue-100 space-y-3">
          <li>BSc Computer Science and Artificial Intelligence</li>
        </ul>
      </Card>
    </div>
  );
};
