import React from "react";
import MetaLogo from "../../public/logos/meta.png";
import CapitalOneLogo from "../../public/logos/capital_one.png";
import EECSLogo from "../../public/logos/eecs.png";
import ChevronLogo from "../../public/logos/chevron.png";
import NightowlLogo from "../../public/logos/nightowl.png";
import MITSloanLogo from "../../public/logos/mit_sloan.png";

const experiences = [
  {
    company: "Meta",
    role: "Incoming Software Engineer",
    period: "June 2025",
    logo: MetaLogo,
    link: "https://www.meta.com/",
  },
  {
    company: "Capital One",
    role: "Software Engineering Intern",
    period: "Jun 2024 - Aug 2024",
    logo: CapitalOneLogo,
    link: "https://www.capitalone.com/",
  },
  {
    company: "MIT EECS",
    role: "Lab Assistant and Grader",
    period: "Feb 2023 - Present",
    logo: EECSLogo,
    link: "https://www.eecs.mit.edu/",
  },
  {
    company: "Chevron",
    role: "Software Engineer Intern",
    period: "Jun 2023 - Aug 2023",
    logo: ChevronLogo,
    link: "https://www.chevron.com/",
  },
  {
    company: "MIT Sloan",
    role: "Undergraduate Research Assistant",
    period: "Jan 2024 - May 2024",
    logo: MITSloanLogo,
    link: "https://mitsloan.mit.edu/",
  },
  {
    company: "Nightowl",
    role: "Software Engineer Intern",
    period: "Jun 2022 - Aug 2022",
    logo: NightowlLogo,
    link: "https://www.linkedin.com/company/night-owl-1/?viewAsMember=true",
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
            <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-purple-500 rounded-full border-4 border-gray-700" />

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
                  } transition-transform duration-200 hover:scale-105 cursor-pointer`}
                  onClick={() => window.open(experience.link, "_blank")}
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
                      <div className="w-15 h-15 flex items-center justify-center">
                        <img
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          className="w-20 h-20 object-contain"
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
