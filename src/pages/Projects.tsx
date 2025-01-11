import React, { useState } from "react";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import * as projects from "../projects/index.ts";

// Sample blog posts (you can replace these with your actual posts)
const workPosts = [
  projects.purerecall,
  projects.adversarial,
  projects.structures,
  projects.omniroute,
  projects.stock_scraper,
  projects.cv,
  projects.fitlink,
];

export function Projects() {
  const [selectedPost, setSelectedPost] = useState(workPosts[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-[calc(100vh-4rem)] relative">
      {/* Mobile sidebar toggle */}
      <button
        className="md:hidden fixed top-20 left-4 z-50 bg-gray-800 p-2 rounded-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={
              isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
            }
          />
        </svg>
      </button>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div
            className={`fixed md:sticky top-20 h-[calc(100vh-6rem)] z-40 w-64 shrink-0 transition-transform duration-300 ${
              isSidebarOpen
                ? "translate-x-0"
                : "-translate-x-full md:translate-x-0"
            }`}
          >
            <div className="bg-gray-800 rounded-lg p-4 h-full overflow-y-auto">
              <h2 className="text-xl font-bold text-white mb-4">Work</h2>
              <div className="space-y-2">
                {workPosts.map((post, ix) => (
                  <button
                    key={ix}
                    onClick={() => {
                      setSelectedPost(post);
                      setIsSidebarOpen(false);
                    }}
                    className={`w-full text-left p-2 rounded transition-colors ${
                      selectedPost.title === post.title
                        ? "bg-purple-600 text-white"
                        : "text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    <div className="font-medium">{post.title}</div>
                    <div className="text-sm opacity-75">
                      {format(post.date, "MMM d, yyyy")}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Overlay for mobile */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          {/* Main content */}
          <div className="flex-1 bg-gray-800 rounded-lg p-4 md:p-8">
            <div className="prose prose-invert max-w-none">
              <h1 className="text-3xl font-bold text-white mb-2">
                {selectedPost.title}
              </h1>
              <div className="text-gray-400 mb-8">
                {format(selectedPost.date, "MMMM d, yyyy")}
              </div>
              <ReactMarkdown>{selectedPost.content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
