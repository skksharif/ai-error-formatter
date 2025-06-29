import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function Modes() {
  const [activeMode, setActiveMode] = useState('roast');
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

  const modes = {
    roast: {
      title: "🔥 Roast Mode",
      description: "Funny & savage developer roast",
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

::::: AI ERROR EXPLAINER END :::::`
    },
    childlike: {
      title: "🧸 Child-Like Mode",
      description: "Explains error like you're 5 years old",
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

::::: AI ERROR EXPLAINER END :::::`
    },
    sarcastic: {
      title: "😏 Sarcastic Mode",
      description: "Heavy sarcasm like a senior dev",
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

::::: AI ERROR EXPLAINER END :::::`
    },
    breakup: {
      title: "💔 Breakup Letter Mode",
      description: "Error as a dramatic breakup letter",
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

::::: AI ERROR EXPLAINER END :::::`
    }
  };

  return (
    <section className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="fade-in heading-lg text-gray-900 dark:text-white mb-6">
            Choose Your Debugging Style
          </h2>
          <p className="fade-in delay-100 text-lead max-w-3xl mx-auto">
            Same error, different vibes. Pick the explanation style that matches your mood 
            or learning preference.
          </p>
        </div>

        {/* Mode Selector */}
        <div className="fade-in delay-200 flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(modes).map(([key, mode]) => (
            <button
              key={key}
              onClick={() => setActiveMode(key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeMode === key
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'
              }`}
            >
              {mode.title}
            </button>
          ))}
        </div>

        {/* Active Mode Output */}
        <div className="scale-in max-w-4xl mx-auto">
          <div className="card">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {modes[activeMode as keyof typeof modes].title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {modes[activeMode as keyof typeof modes].description}
                  </p>
                </div>
                <button
                  onClick={() => copyToClipboard(modes[activeMode as keyof typeof modes].output, `mode-${activeMode}`)}
                  className="copy-button"
                  aria-label="Copy mode output"
                >
                  {copiedStates[`mode-${activeMode}`] ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <div className="code-block">
              <pre className="whitespace-pre-wrap text-sm leading-relaxed">
                {modes[activeMode as keyof typeof modes].output}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}