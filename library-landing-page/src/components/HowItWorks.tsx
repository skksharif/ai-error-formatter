import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function HowItWorks() {
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>(
    {}
  );

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates({ ...copiedStates, [key]: true });
      setTimeout(() => {
        setCopiedStates({ ...copiedStates, [key]: false });
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const inputCode = `const { errorFormatter } = require("ai-error-formatter");
const dotenv = require("dotenv");
dotenv.config();
try {
  const obj = undefined;
  console.log(obj.x);
} catch (err) {
  errorFormatter(err,{
    language:"hi",
    roastMode:true
  }).then((explanation) => {
    console.log("AI Explanation:\n", explanation);
  });
}
`;

  const outputCode = `::::: AI ERROR EXPLAINER START :::::

::cause::
You tried to read 'x' from undefined. Smooth move, dev. 🤦‍♂️

::suggestion::
Maybe check if your variable exists before treating it like a VIP guest?

::explanation::
When you access a property of undefined, JavaScript throws a fit.
It's like asking a ghost to hand you their wallet.

::motivation::
"Every bug you fix makes you stronger 💪" - Ancient Developer Proverb

::::: AI ERROR EXPLAINER END :::::`;

  return (
    <section id="how-it-works" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="fade-in heading-lg text-gray-900 dark:text-white mb-6">
            How It Works
          </h2>
          <p className="fade-in delay-100 text-lead max-w-3xl mx-auto">
            Transform your debugging workflow in three simple steps. No complex
            setup, no learning curve - just better error messages.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Input Code */}
          <div className="slide-in-left">
            <div className="card p-3">
              <div className="code-header">
                <span className="code-title">Input Code</span>
                <button
                  onClick={() => copyToClipboard(inputCode, "input")}
                  className="copy-button"
                  aria-label="Copy input code"
                >
                  {copiedStates.input ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              <div className="code-block">
                <pre className="whitespace-pre-wrap">
                  <code>
                    <span className="token-keyword">const</span> {"{"}{" "}
               
                    <span className="token-function">errorFormatter</span> {"}"}{" "}
                    = <span className="token-keyword">require</span>(
                    <span className="token-string">"ai-error-formatter"</span>);
                    {"\n"}
                    <span className="token-keyword">const</span> dotenv ={" "}
                    <span className="token-keyword">require</span>(
                    <span className="token-string">"dotenv"</span>);
                    {"\n"}
                    dotenv.<span className="token-function">config</span>();
                    {"\n\n"}
  
                    <span className="token-keyword">try</span> {"{"}
                    {"\n  "}
                    <span className="token-keyword">const</span> obj ={" "}
                    <span className="token-literal">undefined</span>;{"\n  "}
                    console.<span className="token-function">log</span>(obj.x);
                    {"\n"}
                    {"}"} <span className="token-keyword">catch</span> (err){" "}
                    {"{"}
                    {"\n  "}
                    errorFormatter(err, {"{"}
                    {"\n    "}
                    language: <span className="token-string">"hi"</span>,
                    {"\n    "}
                    roastMode: <span className="token-boolean">true</span>
                    {"\n  "}) .<span className="token-function">then</span>
                    ((explanation) =&gt; {"{"}
                    {"\n    "}
                    console.<span className="token-function">log</span>(
                    <span className="token-string">"AI Explanation:\n"</span>,
                    explanation);
                    {"\n  "});{"\n"}
                    {"}"}
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* Output */}
          <div className="slide-in-right">
            <div className="card p-3">
              <div className="code-header">
                <span className="code-title">AI Output</span>
                <button
                  onClick={() => copyToClipboard(outputCode, "output")}
                  className="copy-button"
                  aria-label="Copy output"
                >
                  {copiedStates.output ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              <div className="code-block">
                <pre className="whitespace-pre-wrap text-sm leading-relaxed">
                  {outputCode}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Install Package",
              description:
                "Add ai-error-formatter to your project with a single npm command.",
            },
            {
              step: "02",
              title: "Import & Configure",
              description:
                "Import the formatter and choose your preferred explanation style.",
            },
            {
              step: "03",
              title: "Get Clear Explanations",
              description:
                "Receive structured, actionable explanations for any JavaScript error.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className={`fade-in delay-${(index + 1) * 100} text-center`}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-pink-500 text-white rounded-lg font-bold text-lg mb-4">
                {step.step}
              </div>
              <h3 className="heading-sm text-gray-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-body">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
