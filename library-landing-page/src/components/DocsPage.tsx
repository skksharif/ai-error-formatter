import React, { useState } from 'react';
import { Copy, Check, ArrowLeft, ExternalLink, Key, Download, Code, Play, Zap, AlertTriangle } from 'lucide-react';

interface DocsPageProps {
  onBack: () => void;
  darkMode: boolean;
}

export default function DocsPage({ onBack, darkMode }: DocsPageProps) {
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({});

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates({ ...copiedStates, [key]: true });
      setTimeout(() => {
        setCopiedStates({ ...copiedStates, [key]: false });
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const CodeBlock = ({ code, language = 'bash', copyKey }: { code: string; language?: string; copyKey: string }) => (
    <div className="card mb-6">
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
          {language}
        </span>
        <button
          onClick={() => copyToClipboard(code, copyKey)}
          className="copy-button"
          aria-label="Copy code"
        >
          {copiedStates[copyKey] ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <div className="code-block">
        <pre className="whitespace-pre-wrap text-sm leading-relaxed overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );

  const steps = [
    {
      number: "01",
      title: "Install the Package",
      icon: Download,
      content: (
        <div className="space-y-6">
          <p className="text-body">
            First, install the ai-error-formatter package from npm:
          </p>
          <CodeBlock 
            code="npm install ai-error-formatter" 
            copyKey="install-main"
          />
          <p className="text-body">
            Also install dotenv if you plan to use environment variables:
          </p>
          <CodeBlock 
            code="npm install dotenv" 
            copyKey="install-dotenv"
          />
        </div>
      )
    },
    {
      number: "02",
      title: "Get Your Google Gemini API Key",
      icon: Key,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
              <div className="flex-1">
                <p className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Visit Google AI Studio</p>
                <a href="https://ai.google.dev" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 text-sm">
                  https://ai.google.dev <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-200 dark:border-pink-800">
              <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
              <div className="flex-1">
                <p className="font-semibold text-pink-900 dark:text-pink-100 mb-1">Sign in and generate your API key</p>
                <p className="text-sm text-pink-700 dark:text-pink-300">Click "Get API Key" and create a new key</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
              <div className="flex-1">
                <p className="font-semibold text-orange-900 dark:text-orange-100">Save it in a .env file:</p>
              </div>
            </div>
          </div>
          
          <CodeBlock 
            code="AET_GEMINI_API=your_api_key_here" 
            language="env"
            copyKey="env-setup"
          />
        </div>
      )
    },
    {
      number: "03",
      title: "Import and Use in Your Project",
      icon: Code,
      content: (
        <div className="space-y-6">
          <p className="text-body">
            Here's a basic example to get you started:
          </p>
          <CodeBlock 
            code={`import { errorFormatter } from "ai-error-formatter";
import dotenv from "dotenv";
dotenv.config();

const error = new Error("Cannot read properties of undefined (reading 'x')");

const result = await errorFormatter(error, {
  roastMode: true,
  emojiMode: true,
  withMotivation: true,
  language: "en",
});

console.log(result);`}
            language="typescript"
            copyKey="basic-usage"
          />
        </div>
      )
    },
    {
      number: "04",
      title: "Choose Your Mode",
      icon: Zap,
      content: (
        <div className="space-y-6">
          <p className="text-body">
            Customize the output with these fun options:
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { option: "roastMode", desc: "🔥 Funny & savage developer roast", color: "blue" },
              { option: "childLikeMode", desc: "🧸 Explains error like you're 5 years old", color: "pink" },
              { option: "breakupLetterMode", desc: "💌 Error as a dramatic breakup letter", color: "purple" },
              { option: "sarcastic", desc: "😤 Sarcastic tone like a senior dev", color: "orange" },
              { option: "emojiMode", desc: "🎉 Adds expressive emojis", color: "yellow" },
              { option: "withMotivation", desc: "💪 Ends with a motivational quote", color: "green" },
              { option: "language", desc: "🌍 Responds in your preferred language", color: "cyan" },
            ].map((item, index) => (
              <div key={index} className="p-4 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800">
                <div className="font-mono font-bold text-sm text-gray-900 dark:text-white mb-1">{item.option}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Example with Multiple Modes:</h4>
            <CodeBlock 
              code={`const result = await errorFormatter(error, {
  roastMode: true,
  emojiMode: true,
  language: "fr", // French
  withMotivation: true
});`}
              language="typescript"
              copyKey="multiple-modes"
            />
          </div>
        </div>
      )
    },
    {
      number: "05",
      title: "Sample Output",
      icon: Play,
      content: (
        <div className="space-y-6">
          <p className="text-body">
            Here's what you can expect from the AI formatter:
          </p>
          <CodeBlock 
            code={`::::: AI ERROR EXPLAINER START :::::

::cause::
You tried to read 'x' from undefined. Big mistake. 🤦‍♂️

::suggestion::
Check if your variable actually exists before accessing its properties.

::explanation::
This happens when you ask JavaScript to read something that's not there. 
Like asking a ghost to pass the salt. 👻

::motivation::
"Every bug you fix makes you stronger 💪" - Ancient Developer Proverb

::::: AI ERROR EXPLAINER END :::::`}
            language="output"
            copyKey="sample-output"
          />
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container py-12">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4" />
              Documentation
            </div>
            
            <h1 className="heading-lg text-gray-900 dark:text-white mb-4">
              Getting Started Guide
            </h1>
            <h2 className="heading-md gradient-text mb-6">
              ai-error-formatter
            </h2>
            <p className="text-lead max-w-2xl mx-auto">
              Follow these simple steps to start debugging like a boss — or get roasted like one.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-pink-500 text-white rounded-2xl flex items-center justify-center font-bold text-xl">
                    {step.number}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <step.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <h3 className="heading-sm text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                  </div>
                  
                  <div className="prose prose-gray dark:prose-invert max-w-none">
                    {step.content}
                  </div>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-16 bg-gray-200 dark:bg-gray-700"></div>
              )}
            </div>
          ))}
        </div>

        {/* Success Message */}
        <div className="mt-16 text-center">
          <div className="card max-w-2xl mx-auto p-8">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="heading-sm text-gray-900 dark:text-white mb-4">
              Setup Complete!
            </h3>
            <p className="text-lead mb-6">
              You're now ready to debug like a boss — or get roasted like one.
            </p>
            
          
          </div>
        </div>
      </div>
    </div>
  );
}