import React from 'react';
import { NavLink } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { useThemeStore } from '../lib/store';

export function Header() {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur dark:bg-gray-950/80 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <NavLink to="/" className="text-xl font-bold text-gray-900 dark:text-white">
            James Moore
          </NavLink>
          
          <nav className="flex items-center gap-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-green-600 dark:hover:text-green-400 ${
                  isActive ? 'text-green-600 dark:text-green-400' : 'text-gray-600 dark:text-gray-300'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-green-600 dark:hover:text-green-400 ${
                  isActive ? 'text-green-600 dark:text-green-400' : 'text-gray-600 dark:text-gray-300'
                }`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/blog" 
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-green-600 dark:hover:text-green-400 ${
                  isActive ? 'text-green-600 dark:text-green-400' : 'text-gray-600 dark:text-gray-300'
                }`
              }
            >
              Blog
            </NavLink>
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}