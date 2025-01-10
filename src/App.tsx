import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import Resume from "./pages/Resume";
import { useThemeStore } from "./lib/store";

function App() {
  const { isDarkMode } = useThemeStore();

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-b from-[#000510] to-[#002030] transition-colors">
        <Router>
          <Header />
          <main className="relative">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </main>
        </Router>
      </div>
    </div>
  );
}

export default App;
