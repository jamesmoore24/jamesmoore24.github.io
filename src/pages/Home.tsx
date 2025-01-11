import React from "react";
import { TypewriterEffect } from "../components/TypewriterEffect";
import LatticeBackground from "../components/LatticeBackground";
import { CareerVisualizer } from "../components/CareerVisualizer";
import ProfilePicture from "/profile-picture.jpeg";

export function Home() {
  return (
    <div className="relative h-[calc(100vh-4rem)] overflow-hidden">
      <div className="absolute inset-0">
        <LatticeBackground />
      </div>

      <div className="h-full flex flex-col md:flex-row">
        {/* Hero Section */}
        <div className="w-full md:flex-1 flex flex-col items-center justify-center space-y-4 py-4 md:py-8">
          <div
            className="w-36 h-36 md:w-48 md:h-48 mx-auto mb-2 md:mb-4 opacity-0 animate-fade-in"
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
              className="text-2xl md:text-4xl font-semibold text-white opacity-0 animate-fade-in"
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
            className="max-w-2xl mx-auto text-sm md:text-lg text-center text-gray-300 px-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "1000ms", animationFillMode: "forwards" }}
          >
            I'm on a mission to try and make the world a safer, fairer, and more
            connected place.
          </p>
          <button
            onClick={() => (window.location.href = "/projects")}
            className="max-w-2xl mx-auto text-sm md:text-lg text-center text-gray-300 px-4 opacity-0 animate-fade-in mt-4 px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg transition-colors hover:bg-purple-700"
            style={{ animationDelay: "1200ms", animationFillMode: "forwards" }}
          >
            See my projects :)
          </button>
        </div>

        {/* Career Section */}
        <div className="w-full md:flex-1 flex items-center">
          <CareerVisualizer />
        </div>
      </div>
    </div>
  );
}
