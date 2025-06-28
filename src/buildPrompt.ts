import languageMap from "./languageMap";
import { errorFormatterOptions } from "./types";

export function buildPrompt(
  error: Error,
  options: errorFormatterOptions
): string {
  const langCode =
    typeof options.language === "string"
      ? options.language.toLowerCase()
      : "en";
  const lang = languageMap[langCode] || "English";

  let prompt = `
You are an expert AI. Return your answer wrapped between these tags:
"::::: AI ERROR EXPLAINER START :::::" and "::::: AI ERROR EXPLAINER END :::::"

Inside that block, use exactly this structure:
::cause::
<short cause of the error>

::suggestion::
<clear fix or advice>

::explanation::
<simple explanation of what went wrong>

Here is the error:
- Error Message: ${error.message}
- Stack Trace: ${error.stack}
`;

  if (options.childLikeMode) {
    prompt += `
Make the explanation gentle and playful like you're talking to a small child.`;
  } else if (options.breakupLetterMode) {
    prompt += `
Write this like a dramatic breakup letter between the developer and the error.`;
  } else if (options.roastMode) {
    prompt += `
Roast the developer playfully for this mistake. Add some sass.`;
  } else if (options.sarcastic) {
    prompt += `
Use heavy sarcasm, like a grumpy senior dev.`;
  }

  if (options.emojiMode) {
    prompt += `
Sprinkle relevant emojis to lighten the tone.`;
  }

  prompt += `
Respond in ${lang}.
Only respond within the structure and border described.
`;

  return prompt;
}
