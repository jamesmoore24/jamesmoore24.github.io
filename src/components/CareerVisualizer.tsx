import React from "react";
import MetaLogo from "../public/logos/meta.png";

const experiences = [
  {
    company: "Meta",
    role: "Incoming Software Engineer",
    period: "June 2025",
    logo: MetaLogo,
  },
  {
    company: "Verizon",
    role: "Software Engineering Intern",
    period: "Jun 2023 - Aug 2023",
    logo: "/logos/verizon.png",
  },
  {
    company: "Michigan Engineering",
    role: "Instructional Aide",
    period: "Aug 2023 - Dec 2024",
    logo: "/logos/michigan.png",
  },
  {
    company: "Ultima Insights",
    role: "Software Engineer Intern",
    period: "Jan 2023 - Sep 2023",
    logo: "/logos/ultima.png",
  },
  {
    company: "Stony Brook University",
    role: "Research Assistant",
    period: "Jun 2021 - Jan 2022",
    logo: "/logos/stonybrook.png",
  },
  {
    company: "Mentaro",
    role: "Co-Founder, Software Engineer",
    period: "Sep 2020 - Aug 2022",
    logo: "/logos/mentaro.png",
  },
];

export function CareerVisualizer() {
  return (
    <div
      className="w-full max-w-xl mx-auto opacity-0 animate-fade-in"
      style={{ animationDelay: "1200ms", animationFillMode: "forwards" }}
    >
      <div className="relative py-4">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700" />

        {/* Experience items */}
        {experiences.map((experience, index) => (
          <div key={index} className="relative mb-6 last:mb-0">
            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full border-4 border-gray-700" />

            <div
              className={`flex items-center w-full ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`w-5/12 ${
                  index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                }`}
              >
                <div
                  className={`flex items-center gap-3 ${
                    index % 2 === 0 ? "justify-end" : "justify-start"
                  }`}
                >
                  {index % 2 === 0 && (
                    <>
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {experience.company}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {experience.role}
                        </p>
                        <p className="text-xs text-gray-500">
                          {experience.period}
                        </p>
                      </div>
                      <div className="w-15 h-15 flex items-center justify-center">
                        <img
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          className="w-20 h-20 object-contain"
                        />
                      </div>
                    </>
                  )}
                  {index % 2 === 1 && (
                    <>
                      <div className="w-10 h-10 bg-gray-800 rounded-full p-2 flex items-center justify-center">
                        <img
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {experience.company}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {experience.role}
                        </p>
                        <p className="text-xs text-gray-500">
                          {experience.period}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
