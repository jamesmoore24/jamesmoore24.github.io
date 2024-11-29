import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContentSection } from './components/ContentSection';
import { Background } from './components/Background';
import { BlogPostPage } from './pages/BlogPostPage';

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen">
        <Background />
        <div className="relative z-10 min-h-screen flex items-center justify-center py-20">
          <Routes>
            <Route 
              path="/" 
              element={<ContentSection isVisible={showContent} />} 
            />
            <Route 
              path="/blog/:id" 
              element={<BlogPostPage isVisible={showContent} />} 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;