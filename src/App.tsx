import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import Resume from "./pages/Resume";
import { useThemeStore } from "./lib/store";
import LatticeBackground from "./components/LatticeBackground";

function App() {
  const { isDarkMode } = useThemeStore();

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <Router>
          <div className="relative z-10">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/resume" element={<Resume />} />
              </Routes>
            </main>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
