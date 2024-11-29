import React from 'react';
import { BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card } from './Card';
import { blogPosts } from '../data/blogPosts';

export const BlogSection = () => {
  const navigate = useNavigate();

  return (
    <section className="mt-12">
      <div className="flex items-center mb-6">
        <BookOpen className="w-6 h-6 text-blue-200 mr-3" />
        <h2 className="text-2xl text-blue-100 font-semibold">Latest Blog Posts</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card 
            key={post.id} 
            className="hover:bg-blue-800/40 transition-colors cursor-pointer"
            onClick={() => navigate(`/blog/${post.id}`)}
          >
            <h3 className="text-xl text-blue-100 font-semibold mb-2">{post.title}</h3>
            <div className="flex items-center text-blue-300 text-sm mb-3">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
            <p className="text-blue-200">{post.excerpt}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};