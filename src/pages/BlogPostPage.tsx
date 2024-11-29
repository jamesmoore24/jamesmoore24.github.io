import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BlogPostView } from '../components/BlogPost';
import { blogPosts } from '../data/blogPosts';

interface BlogPostPageProps {
  isVisible: boolean;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ isVisible }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return (
      <div className={`max-w-4xl mx-auto px-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h1 className="text-3xl text-blue-100">Post not found</h1>
      </div>
    );
  }

  return (
    <div className={`w-full transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      <BlogPostView post={post} onBack={() => navigate('/')} />
    </div>
  );
};