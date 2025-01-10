import React from "react";
import { TypewriterEffect } from "../components/TypewriterEffect";
import LatticeBackground from "../components/LatticeBackground";
import { CareerVisualizer } from "../components/CareerVisualizer";
import ProfilePicture from "/profile-picture.jpeg";

export function Home() {
  return (
    <>
      <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden flex flex-col md:flex-row">
        {/* Hero Section */}
        <div className="w-full md:flex-1 flex flex-col items-center justify-center space-y-6 relative z-10 py-8 md:py-16">
          <div
            className="w-36 h-36 md:w-48 md:h-48 mx-auto mb-4 md:mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
          >
            <img
              src={ProfilePicture}
              alt="James Moore"
              className="w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
            />
          </div>
          <div className="space-y-2 text-center">
            <h1
              className="text-3xl md:text-4xl font-semibold text-white opacity-0 animate-fade-in"
              style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
            >
              Hi, my name is James.
            </h1>
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "800ms", animationFillMode: "forwards" }}
            >
              <TypewriterEffect />
            </div>
          </div>
          <p
            className="max-w-2xl mx-auto text-base md:text-lg text-center text-gray-300 px-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "1000ms", animationFillMode: "forwards" }}
          >
            I'm on a mission to try and make the world a safer, fairer, and more
            connected place.
          </p>
        </div>

        {/* Career Section */}
        <div className="w-full md:flex-1 relative z-10 py-8 md:pb-16">
          <CareerVisualizer />
        </div>
      </div>
    </>
  );
}
