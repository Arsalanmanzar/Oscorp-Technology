import { GoogleGenAI } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from '../constants';

let aiClient: GoogleGenAI | null = null;

const getAiClient = () => {
  if (!aiClient) {
    const apiKey = process.env.API_KEY;
    if (apiKey) {
      aiClient = new GoogleGenAI({ apiKey });
    } else {
      console.warn("API_KEY is missing from environment variables.");
    }
  }
  return aiClient;
};

export const generateAdvisorResponse = async (userMessage: string, history: { role: 'user' | 'model', text: string }[]): Promise<string> => {
  const client = getAiClient();
  if (!client) {
    return "I'm currently offline (API Key missing). Please contact support.";
  }

  try {
    // Transform history to Gemini format if needed, 
    // but for simple turn-based here we will just send the prompt with context or use chat.
    // For a simple advisor widget, a fresh chat context with history is best.
    
    const chat = client.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const result = await chat.sendMessage({
        message: userMessage
    });

    return result.text || "I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am having trouble connecting to the Oscorp mainframe. Please try again later.";
  }
};