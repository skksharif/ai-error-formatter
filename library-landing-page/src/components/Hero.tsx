import React, { useState } from 'react';
import { Copy, Check, ArrowRight, Play, Star } from 'lucide-react';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyInstallCommand = async () => {
    try {
      await navigator.clipboard.writeText('npm install ai-error-formatter');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section className="section gradient-bg">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="fade-in inline-flex items-center px-2 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-8">
            <Star className="w-4 h-4 mr-2" />
            AI-Powered Error Explanations
          </div>

          {/* Main Heading */}
          <h1 className="fade-in delay-100 heading-xl text-gray-900 dark:text-white mb-6">
            Transform JavaScript Errors into
            <span className="gradient-text block mt-2">Clear Explanations</span>
          </h1>

          {/* Subtitle */}
          <p className="fade-in delay-200 text-lead max-w-3xl mx-auto mb-12">
            Stop wasting time deciphering cryptic error messages. Our AI-powered tool transforms 
            JavaScript errors into clear, actionable explanations with multiple fun modes and 
            multilingual support.
          </p>

          {/* Install Command */}
          <div className="fade-in delay-300 max-w-2xl mx-auto mb-12">
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Quick Install
                </span>
                <button
                  onClick={copyInstallCommand}
                  className="copy-button"
                  aria-label="Copy install command"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div className="code-block">
                <code className="text-green-400">$ </code>
                <code className="text-white">npm install ai-error-formatter</code>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="fade-in delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
 
            <a 
              href="#how-it-works" 
              className="btn btn-outline btn-lg"
            >
              How It Works
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}