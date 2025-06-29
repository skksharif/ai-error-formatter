import React from 'react';
import { BookOpen, Github, Package } from 'lucide-react';

interface HeaderProps {
  onShowDocs: () => void;
}

export default function Header({ onShowDocs }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <nav className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Error Formatter
            </span>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              How it Works
            </a>
            <button 
              onClick={onShowDocs}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Documentation
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/skksharif/ai-error-formatter"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="View on GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.npmjs.com/package/ai-error-formatter"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="View on NPM"
            >
              <Package className="w-5 h-5" />
            </a>
            <button
              onClick={onShowDocs}
              className="btn btn-primary btn-sm hidden sm:inline-flex"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}