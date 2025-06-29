import React from 'react';
import { Github, Package, MessageCircle, BookOpen, Heart } from 'lucide-react';

interface FooterProps {
  onShowDocs: () => void;
}

export default function Footer({ onShowDocs }: FooterProps) {
  return (
    <footer className="section bg-gray-900 text-white">
      <div className="container pt-20 mt-10">

        <div className="fade-in delay-400 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold">Error Formatter</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/skksharif/ai-error-formatter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.npmjs.com/package/ai-error-formatter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="NPM"
              >
                <Package className="w-5 h-5" />
              </a>
        
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-400 text-sm">
            <p className="flex items-center justify-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> for developers who deserve better error messages
            </p>
            <p className="mt-2">© 2025 AI Error Formatter.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}