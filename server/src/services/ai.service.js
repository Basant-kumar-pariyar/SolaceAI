import dotenv from "dotenv";
dotenv.config();

import { GoogleGenAI } from "@google/genai";
console.log("Gemini Key:", process.env.GEMINI_API_KEY);
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

export const generateAIResponse = async (message) => {

    const response = await ai.models.generateContent({
        model: "gemini-3.1-flash-lite",
        contents: message,
    });

    return response.text;

};
