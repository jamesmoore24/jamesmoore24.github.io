import React, { useState } from "react";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import { ProjectPost } from "../types";

// Authentication questions
const authQuestions = [
  {
    question: "What is my sister's name?",
    answer: "Kirana",
  },
  {
    question: "What is my birthday? (MM/DD)",
    answer: "05/10",
  },
];

// Sample blog posts (you can replace these with your actual posts)
const blogPosts: ProjectPost[] = [];

export function Blog() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [selectedPost, setSelectedPost] = useState(
    blogPosts.length > 0 ? blogPosts[0] : null
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleAnswerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      answer.toLowerCase().trim() ===
      authQuestions[currentQuestion].answer.toLowerCase()
    ) {
      if (currentQuestion === authQuestions.length - 1) {
        setIsAuthenticated(true);
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
      setAnswer("");
    } else {
      alert("Incorrect answer. Please try again.");
      setAnswer("");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="max-w-md w-full mx-auto p-6 bg-gray-800 rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Authentication Required
          </h2>
          <form onSubmit={handleAnswerSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-2">
                {authQuestions[currentQuestion].question}
              </label>
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your answer"
                autoFocus
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

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
              <h2 className="text-xl font-bold text-white mb-4">Blog Posts</h2>
              <div className="space-y-2">
                {blogPosts.map((post) => (
                  <button
                    key={post.id}
                    onClick={() => {
                      setSelectedPost(post);
                      setIsSidebarOpen(false);
                    }}
                    className={`w-full text-left p-2 rounded transition-colors ${
                      selectedPost?.id === post.id
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
              {!selectedPost ? (
                <div className="text-center text-gray-400">
                  <p>No blog posts available yet.</p>
                </div>
              ) : (
                <>
                  <h1 className="text-3xl font-bold text-white mb-2">
                    {selectedPost.title}
                  </h1>
                  <div className="text-gray-400 mb-8">
                    {format(selectedPost.date, "MMMM d, yyyy")}
                  </div>
                  {selectedPost.video && (
                    <div className="relative pb-[56.25%] h-0 mb-8 rounded-lg overflow-hidden">
                      <iframe
                        src={selectedPost.video}
                        className="absolute top-0 left-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
                  {selectedPost.content.map((content, ix) => (
                    <div key={ix} className="mb-8">
                      {content.diagram && (
                        <div className="mb-4 bg-gray-900 p-4 rounded-lg">
                          <pre className="mermaid">{content.diagram}</pre>
                        </div>
                      )}
                      <ReactMarkdown>{content.markdown}</ReactMarkdown>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
