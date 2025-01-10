import React from "react";
import { TypewriterEffect } from "../components/TypewriterEffect";
import LatticeBackground from "../components/LatticeBackground";
import ProfilePicture from "../public/profile-picture.jpeg";

export function Home() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="text-center space-y-6 relative z-10">
        <LatticeBackground />

        <div className="w-48 h-48 mx-auto mb-8">
          <img
            src={ProfilePicture}
            alt="James Moore"
            className="w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
          />
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold text-gray-900 dark:text-white">
            Hi, my name is James.
          </h1>
          <TypewriterEffect />
        </div>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          I'm on a mission to try and make the world a safer, fairer, and more
          connected place.
        </p>
      </div>
    </div>
  );
}
