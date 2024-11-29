import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`bg-blue-900/40 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-blue-700/30 ${className}`}
    >
      {children}
    </div>
  );
};