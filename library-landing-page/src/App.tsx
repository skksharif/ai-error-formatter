import React, { useState, useEffect } from 'react';
import { Moon, Sun, Copy, Check, Github, Package, MessageCircle, Play, Code, Zap, Heart, Globe, Terminal, BookOpen, ArrowRight, Star, Download, Users, Sparkles } from 'lucide-react';
import DocsPage from './components/DocsPage';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Modes from './components/Modes';
import Languages from './components/Languages';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showDocs, setShowDocs] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [showDocs]);

  if (showDocs) {
    return <DocsPage onBack={() => setShowDocs(false)} darkMode={darkMode} />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <Header onShowDocs={() => setShowDocs(true)} />

      {/* Hero Section */}
      <Hero />


      {/* Features Section */}
      <Features />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Modes Section */}
      <Modes />

      {/* Languages Section */}
      <Languages />

      {/* Footer */}
      <Footer onShowDocs={() => setShowDocs(true)} />
    </div>
  );
}

export default App;