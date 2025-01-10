import React, { useState } from "react";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";

// Authentication questions
const authQuestions = [
  {
    question: "What is my sister's name?",
    answer: "Olivia",
  },
  {
    question: "What is my birthday? (MM/DD)",
    answer: "07/24",
  },
  {
    question: "What is my favorite food?",
    answer: "sushi",
  },
];

// Sample blog posts (you can replace these with your actual posts)
const blogPosts = [
  {
    id: 1,
    title: "My First Blog Post",
    date: new Date("2024-01-15"),
    content: `
# My First Blog Post

This is a sample blog post using markdown.

## Features
- Markdown support
- Code highlighting
- And more!

\`\`\`python
def hello_world():
    print("Hello, world!")
\`\`\`
    `,
  },
  // Add more blog posts here
];

export function Blog() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [selectedPost, setSelectedPost] = useState(blogPosts[0]);

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
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-900">
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
    <div className="min-h-[calc(100vh-4rem)] bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 shrink-0">
            <div className="bg-gray-800 rounded-lg p-4">
              <h2 className="text-xl font-bold text-white mb-4">Blog Posts</h2>
              <div className="space-y-2">
                {blogPosts.map((post) => (
                  <button
                    key={post.id}
                    onClick={() => setSelectedPost(post)}
                    className={`w-full text-left p-2 rounded transition-colors ${
                      selectedPost.id === post.id
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

          {/* Main content */}
          <div className="flex-1 bg-gray-800 rounded-lg p-8">
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
