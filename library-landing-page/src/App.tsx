import React, { useState, useEffect } from 'react';
import { Moon, Sun, Copy, Check, Github, Package, MessageCircle, Play, Code, Zap, Heart, Globe, Terminal, Sparkles, AlertTriangle } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeMode, setActiveMode] = useState('roast');
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-reveal, .scroll-slide-left, .scroll-slide-right, .scroll-scale');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Add floating error messages
    const createFloatingError = () => {
      const errors = [
        'TypeError: undefined',
        'ReferenceError',
        'SyntaxError: }',
        'Cannot read property',
        'null is not an object',
        'Uncaught Error',
        'Promise rejected'
      ];
      
      const error = document.createElement('div');
      error.className = 'floating-error';
      error.textContent = errors[Math.floor(Math.random() * errors.length)];
      error.style.left = Math.random() * 100 + '%';
      error.style.top = Math.random() * 100 + '%';
      error.style.animationDelay = Math.random() * 2 + 's';
      
      document.body.appendChild(error);
      
      setTimeout(() => {
        error.remove();
      }, 4000);
    };

    const interval = setInterval(createFloatingError, 3000);
    return () => clearInterval(interval);
  }, []);

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

  const modes = {
    roast: {
      title: "🔥 Roast Mode",
      output: `::::: AI ERROR EXPLAINER START :::::

::cause::
You tried to read 'x' from undefined. Smooth move, dev. 🤦‍♂️

::suggestion::
Maybe check if your variable exists before treating it like a VIP guest?

::explanation::
When you access a property of undefined, JavaScript throws a fit.
It's like asking a ghost to hand you their wallet.

::motivation::
"Every bug you fix makes you stronger 💪" - Ancient Developer Proverb

::::: AI ERROR EXPLAINER END ::::::`
    },
    childlike: {
      title: "🧸 Child-Like Mode",
      output: `::::: AI ERROR EXPLAINER START :::::

::cause::
Oopsie! You asked a ghost for something and the ghost said "nuh-uh!" 👻

::suggestion::
Before you ask for 'x', make sure your friend is really there first!

::explanation::
It's like trying to pet a doggy that isn't there. The computer gets confused
and says "I can't find the doggy!" 🐕

::motivation::
"You're doing great! Every mistake helps you learn!" 🌟

::::: AI ERROR EXPLAINER END ::::::`
    },
    sarcastic: {
      title: "😏 Sarcastic Mode",
      output: `::::: AI ERROR EXPLAINER START :::::

::cause::
Oh wow, another undefined property access. How original. 🙄

::suggestion::
Here's a wild idea: check if the variable exists before using it.
Revolutionary, I know.

::explanation::
You're basically asking nothing to give you something.
That's not how reality works, unfortunately.

::motivation::
"Failure is the stepping stone to success" - or so they say 🤷‍♂️

::::: AI ERROR EXPLAINER END ::::::`
    },
    breakup: {
      title: "💔 Breakup Letter Mode",
      output: `::::: AI ERROR EXPLAINER START :::::

::cause::
Dear Developer,
I just can't do this anymore. You keep asking me for 'x' when I'm undefined.

::suggestion::
Maybe we should take a break. You need to learn to check if I exist
before making demands.

::explanation::
This relationship is toxic. You treat me like I'm something I'm not.
I need space to find myself (hint: I don't exist).

::motivation::
"Sometimes letting go is the only way to grow" 💔

::::: AI ERROR EXPLAINER END ::::::`
    }
  };

  const languages = [
    "🇺🇸 English", "🇮🇳 Hindi", "🇫🇷 French", "🇩🇪 German", "🇯🇵 Japanese",
    "🇮🇳 Telugu", "🇮🇳 Tamil", "🇸🇦 Arabic", "🇰🇷 Korean", "🇪🇸 Spanish",
    "🇷🇺 Russian", "🇮🇹 Italian", "🇵🇹 Portuguese", "🇨🇳 Chinese"
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 overflow-x-hidden ${darkMode ? 'dark' : ''}`}>
      {/* Dark Mode Toggle */}
      <div className="fixed top-5 right-6 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="error-button p-3 rounded-full hover:scale-110 transition-all duration-300"
        >
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-bg bg-gray-50 dark:bg-gray-900">
        <div className="relative max-w-7xl mx-auto px-2 py-5 text-center">
          <div className="scroll-reveal mb-8">
            <div className="inline-flex items-center gap-2 broken-card px-4 py-2 rounded-full mb-8">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <span className="text-sm font-mono font-bold text-red-600 dark:text-red-400">
                ERR_AI_POWERED_FORMATTING
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="glitch-text gradient-text font-mono" data-text="Fix Your Errors">
                Fix Your Errors
              </span>
            </h1>
          </div>
          
          <div className="scroll-reveal stagger-1 mb-12">
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform cryptic JavaScript errors into clear, actionable insights with 
              <span className="font-bold text-red-600 dark:text-red-400 font-mono"> AI-powered explanations</span> — 
              choose your vibe from professional to hilariously sarcastic.
            </p>
          </div>

          {/* Install Command */}
          <div className="scroll-scale stagger-2 mb-12">
            <div className="broken-card rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-mono font-bold text-red-600 dark:text-red-400">INSTALL_COMMAND</span>
                <button
                  onClick={() => copyToClipboard('npm i ai-error-formatter', 'install')}
                  className="error-button p-2 rounded-lg hover:scale-105 transition-all duration-200"
                >
                  {copiedStates.install ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div className="broken-console p-6">
                <div className="code-line">
                  <span className="text-red-400 mr-3">$</span>
                  <span className="text-green-400 font-mono text-lg">npm i ai-error-formatter</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="scroll-reveal stagger-3 flex flex-wrap justify-center gap-4">
            <button className="error-button px-8 py-4 rounded-xl font-mono font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
              🔥 ROAST_MY_ERROR()
            </button>
            <button className="bg-gray-800 dark:bg-gray-700 text-white border-2 border-gray-600 px-8 py-4 rounded-xl font-mono font-bold text-lg hover:scale-105 transition-all duration-300">
              📖 READ_DOCS()
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-24 bg-white dark:bg-gray-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white font-mono">
              <span className="strikethrough-code">STOP_READING_STACK_TRACES</span>
            </h2>
            <h3 className="text-2xl md:text-3xl text-red-600 dark:text-red-400 font-mono">
              LIKE_A_CAVEMAN 🦕
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Code Example */}
            <div className="scroll-slide-left">
              <div className="broken-card rounded-2xl p-8 relative">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-mono font-bold text-red-600 dark:text-red-400">INPUT_CODE.js</h4>
                  <button
                    onClick={() => copyToClipboard(`import { errorFormatter } from "ai-error-formatter";

const error = new Error("Cannot read property 'x' of undefined");

const result = await errorFormatter(error, {
  roastMode: true,
  emojiMode: true,
  withMotivation: true,
});

console.log(result);`, 'code-example')}
                    className="error-button p-2 rounded-lg hover:scale-105 transition-all duration-200"
                  >
                    {copiedStates['code-example'] ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                
                <div className="broken-console p-6">
                  <div className="code-line">
                    <span className="token-keyword">import</span>
                    <span className="text-gray-300 mx-2">{`{ errorFormatter }`}</span>
                    <span className="token-keyword">from</span>
                    <span className="token-string ml-2">"ai-error-formatter"</span>
                    <span className="text-gray-300">;</span>
                  </div>
                  <div className="code-line mt-2">
                    <span className="text-gray-500">// This will break! 💥</span>
                  </div>
                  <div className="code-line">
                    <span className="token-keyword">const</span>
                    <span className="text-gray-300 mx-2">error =</span>
                    <span className="token-keyword">new</span>
                    <span className="token-function ml-2">Error</span>
                    <span className="text-gray-300">(</span>
                  </div>
                  <div className="code-line code-indent-1">
                    <span className="token-string">"Cannot read property 'x' of undefined"</span>
                  </div>
                  <div className="code-line">
                    <span className="text-gray-300">);</span>
                  </div>
                  <div className="code-line mt-2">
                    <span className="text-gray-500">// Let AI explain it! 🤖</span>
                  </div>
                  <div className="code-line">
                    <span className="token-keyword">const</span>
                    <span className="text-gray-300 mx-2">result =</span>
                    <span className="token-keyword">await</span>
                    <span className="token-function ml-2">errorFormatter</span>
                    <span className="text-gray-300">(error, {`{`}</span>
                  </div>
                  <div className="code-line code-indent-1">
                    <span className="token-property">roastMode</span>
                    <span className="text-gray-300">:</span>
                    <span className="token-boolean ml-2">true</span>
                    <span className="text-gray-300">,</span>
                  </div>
                  <div className="code-line code-indent-1">
                    <span className="token-property">emojiMode</span>
                    <span className="text-gray-300">:</span>
                    <span className="token-boolean ml-2">true</span>
                    <span className="text-gray-300">,</span>
                  </div>
                  <div className="code-line code-indent-1">
                    <span className="token-property">withMotivation</span>
                    <span className="text-gray-300">:</span>
                    <span className="token-boolean ml-2">true</span>
                  </div>
                  <div className="code-line">
                    <span className="text-gray-300">{`});`}</span>
                  </div>
                  <div className="code-line mt-2">
                    <span className="text-gray-300">console.</span>
                    <span className="token-function">log</span>
                    <span className="text-gray-300">(result);</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Output Example */}
            <div className="scroll-slide-right">
              <div className="broken-card rounded-2xl p-8 relative">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-mono font-bold text-green-600 dark:text-green-400">AI_OUTPUT.log</h4>
                  <button
                    onClick={() => copyToClipboard(modes.roast.output, 'output-example')}
                    className="error-button p-2 rounded-lg hover:scale-105 transition-all duration-200"
                  >
                    {copiedStates['output-example'] ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                
                <div className="broken-console p-6">
                  <pre className="whitespace-pre-wrap text-sm leading-relaxed">
                    {modes.roast.output}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modes Playground */}
      <section className="px-6 py-24 bg-gray-50 dark:bg-gray-900 relative">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white font-mono">
              🎭 PERSONALITY_MODES
            </h2>
            <p className="text-xl text-red-600 dark:text-red-400 font-mono">
              SAME_ERROR.different_vibes()
            </p>
          </div>

          {/* Mode Selector */}
          <div className="scroll-scale flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(modes).map(([key, mode], index) => (
              <button
                key={key}
                onClick={() => setActiveMode(key)}
                className={`px-6 py-3 rounded-xl font-mono font-bold transition-all duration-300 hover:scale-105 stagger-${(index % 4) + 1} ${
                  activeMode === key
                    ? 'error-button'
                    : 'bg-gray-800 dark:bg-gray-700 text-white border-2 border-gray-600'
                }`}
              >
                {mode.title}
              </button>
            ))}
          </div>

          {/* Active Mode Output */}
          <div className="scroll-reveal">
            <div className="broken-card rounded-2xl p-8 max-w-5xl mx-auto relative">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-mono font-bold text-green-600 dark:text-green-400">
                  {modes[activeMode as keyof typeof modes].title.toUpperCase()}_OUTPUT.log
                </h4>
                <button
                  onClick={() => copyToClipboard(modes[activeMode as keyof typeof modes].output, `mode-${activeMode}`)}
                  className="error-button p-2 rounded-lg hover:scale-105 transition-all duration-200"
                >
                  {copiedStates[`mode-${activeMode}`] ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              
              <div className="broken-console p-6">
                <pre className="whitespace-pre-wrap text-sm leading-relaxed">
                  {modes[activeMode as keyof typeof modes].output}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Languages */}
      <section className="px-6 py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white font-mono">
              🌍 GLOBAL_ERROR_SUPPORT
            </h2>
            <p className="text-xl text-red-600 dark:text-red-400 font-mono">
              LET_YOUR_BUGS.speak(yourLanguage)
            </p>
          </div>

          <div className="scroll-scale grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {languages.map((lang, index) => (
              <div
                key={index}
                className={`broken-card p-4 rounded-xl text-center font-mono text-sm hover:scale-105 transition-all duration-300 cursor-pointer stagger-${(index % 6) + 1}`}
              >
                {lang}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white font-mono">
              ✨ WHY_DEVELOPERS.love(this)
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "LIGHTNING_FAST", desc: "Get AI explanations in seconds, not minutes. Perfect for rapid debugging sessions.", color: "text-yellow-500" },
              { icon: Heart, title: "STUDENT_FRIENDLY", desc: "Learn while you debug. Great for bootcamps, students, and coding beginners.", color: "text-pink-500" },
              { icon: Globe, title: "MULTI_LANGUAGE", desc: "Get explanations in 14+ languages. Code globally, debug locally.", color: "text-blue-500" },
              { icon: Terminal, title: "WORKS_EVERYWHERE", desc: "Node.js, React, Vue, Next.js, Vite - if it runs JavaScript, we've got you.", color: "text-green-500" },
              { icon: Code, title: "OPEN_SOURCE", desc: "MIT licensed, community driven. Contribute, customize, or just enjoy!", color: "text-purple-500" },
              { icon: Play, title: "HACKATHON_READY", desc: "Zero config, maximum fun. Perfect for hackathons and rapid prototyping.", color: "text-red-500" }
            ].map((feature, index) => (
              <div key={index} className={`scroll-reveal stagger-${(index % 3) + 1} broken-card p-8 rounded-2xl hover:scale-105 transition-all duration-300`}>
                <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
                <h3 className="text-xl font-mono font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-6 py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="scroll-reveal mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
              🚀 BUILT_FOR.studentDevs()
            </h2>
            <p className="text-xl text-gray-400 mb-4 font-mono">
              SOLO_HACKERS && MEME_LOVING_ENGINEERS
            </p>
            <p className="text-gray-400 font-mono">
              🛠️ OPEN_SOURCE · HACKATHON_FRIENDLY · WORKS_WITH(Node, React, Vite, Next)
            </p>
          </div>

          <div className="scroll-scale flex justify-center gap-6 mb-8">
            {[
              { icon: Github, label: "GITHUB", bg: "bg-gray-800 hover:bg-gray-700" },
              { icon: Package, label: "NPM", bg: "bg-red-600 hover:bg-red-700" },
              { icon: MessageCircle, label: "DISCORD", bg: "bg-blue-600 hover:bg-blue-700" },
              { icon: Play, label: "TRY_LIVE", bg: "error-button" }
            ].map((link, index) => (
              <a key={index} href="#" className={`flex items-center gap-2 ${link.bg} px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 font-mono font-bold stagger-${index + 1}`}>
                <link.icon className="w-5 h-5" />
                {link.label}
              </a>
            ))}
          </div>

          <div className="scroll-reveal border-t border-gray-800 pt-8">
            <p className="text-gray-500 font-mono">
              MADE_WITH(💖).for(developers.who.deserve.betterErrorMessages)
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;