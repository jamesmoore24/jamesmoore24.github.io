import React from "react";
import {
  Code2,
  Brain,
  Music4,
  Coffee,
  Users,
  UtensilsCrossed,
} from "lucide-react";

const activities = [
  {
    icon: Code2,
    title: "Software Engineering",
    description:
      "My passion for coding started when I realized its potential to solve real-world problems and make a positive impact on society.",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "Fascinated by the potential of AI to transform industries and improve decision-making processes.",
  },
  {
    icon: Brain,
    title: "Baseball",
    description:
      "Playing baseball taught me the importance of teamwork, strategy, and continuous improvement.",
  },
  {
    icon: Music4,
    title: "Piano Improvisation",
    description:
      "Music helps me think creatively and approach problem-solving from different angles.",
  },
  {
    icon: Users,
    title: "Leadership & Mentoring",
    description:
      "As head mentor at the Leadership Training Institute, I help others develop their potential and grow professionally.",
  },
  {
    icon: Brain,
    title: "Golf",
    description:
      "Golf teaches me patience, precision, and the value of consistent practice.",
  },
];

export function About() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="text-center space-y-6 relative z-10">
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            background: "linear-gradient(to bottom, #000510, #002030)",
          }}
        >
          <h1 style={{ color: "white" }}>Hello</h1>
        </div>
      </div>
    </div>
  );
}
