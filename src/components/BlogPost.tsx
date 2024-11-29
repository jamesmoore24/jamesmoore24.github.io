import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { BlogPost } from '../types/blog';
import { Card } from './Card';
import ReactMarkdown from 'react-markdown';

interface BlogPostProps {
  post: BlogPost;
  onBack: () => void;
}

export const BlogPostView: React.FC<BlogPostProps> = ({ post, onBack }) => {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <button 
        onClick={onBack}
        className="flex items-center text-blue-200 hover:text-blue-100 transition-colors mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to posts
      </button>
      
      <h1 className="text-3xl font-bold text-blue-100 mb-4">{post.title}</h1>
      
      <div className="flex items-center text-blue-300 text-sm mb-8">
        <span>{post.date}</span>
        <span className="mx-2">•</span>
        <span>{post.readTime}</span>
      </div>

      <div className="prose prose-invert prose-blue max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </Card>
  );
};