# 🧠 ai-error-formatter

> Explain your JavaScript errors with the help of AI — in plain English, roast mode, or even like you're 5 years old.  
> Debugging just got funny, expressive, and way more helpful.

---

## ✨ Features

- 🧠 AI-generated error explanations (using Google Gemini)
- 🔥 `roastMode`: Savage and funny dev shaming
- 🧸 `childLikeMode`: Explains like you’re 5
- 💌 `breakupLetterMode`: Your code broke up with you
- 😤 `sarcastic`: Senior dev sarcasm mode
- 🎉 `emojiMode`: Adds emojis for fun
- 💪 `withMotivation`: Ends with a motivational quote
- 🌍 Multilingual support (20+ languages)
- 🧾 Structured output (easy to parse or format in logs)

---

## 📦 Installation

```bash
npm install ai-error-formatter


🚀 Quick Usage
import { errorFormatter } from "ai-error-formatter";

const error = new Error("Cannot read property 'x' of undefined");

const result = await errorFormatter(error, {
  roastMode: true,
  emojiMode: true,
  withMotivation: true,
});

console.log(result);

🧩 Available Options
You can pass the following options to control the explanation style:

{
  language?: string; // e.g., "en", "hi", "fr", "te", etc.
  roastMode?: boolean;           // 🔥 Roasts the dev
  withMotivation?: boolean;      // 💪 Adds a motivational quote
  emojiMode?: boolean;           // 🎉 Adds emojis
  breakupLetterMode?: boolean;   // 💌 Breakup-style response
  sarcastic?: boolean;           // 😤 Heavy sarcasm
  childLikeMode?: boolean;       // 🧸 Explains like you're 5
}

💡 Sample Output
::::: AI ERROR EXPLAINER START :::::

::cause::
You tried to access 'x' on undefined. JavaScript can't help you there, my friend.

::suggestion::
Check if your variable actually exists before accessing properties.

::explanation::
This happens when you try to use a property on something that doesn't exist. 
Imagine asking a ghost for its name. 👻💀

::::: AI ERROR EXPLAINER END ::::::
