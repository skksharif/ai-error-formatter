import React from 'react';

export default function Languages() {
  const languages = [
    "🇺🇸 English", "🇮🇳 Hindi", "🇫🇷 French", "🇩🇪 German", "🇯🇵 Japanese",
    "🇮🇳 Telugu", "🇮🇳 Tamil", "🇸🇦 Arabic", "🇰🇷 Korean", "🇪🇸 Spanish",
    "🇷🇺 Russian", "🇮🇹 Italian", "🇵🇹 Portuguese", "🇨🇳 Chinese"
  ];

  return (
    <section className="section bg-white dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="fade-in heading-lg text-gray-900 dark:text-white mb-6">
            Global Error Support
          </h2>
          <p className="fade-in delay-100 text-lead max-w-3xl mx-auto">
            Debug in your native language. Our AI understands and explains errors 
            in 14+ languages, making debugging accessible worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {languages.map((lang, index) => (
            <div
              key={index}
              className={`fade-in delay-${(index % 7 + 1) * 50} card card-hover p-4 text-center text-sm font-medium text-gray-700 dark:text-gray-300`}
            >
              {lang}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}