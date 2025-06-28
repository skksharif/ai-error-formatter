import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import { errorFormatterOptions, SayHelloProps } from "./types";
import { buildPrompt } from "./buildPrompt";
dotenv.config();

export function sayHello({ firstName, lastName }: SayHelloProps) {
  console.log("FirstName is :", firstName, "Lastname is :", lastName);
}

export async function errorFormatter(
  error: Error,
  options: errorFormatterOptions = {}
) {
  const prompt = buildPrompt(error, options);

  const ai = new GoogleGenAI({ apiKey: process.env.AET_GEMINI_API });
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });

  return response.text;
}

