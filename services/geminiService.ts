import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, SKILLS, EXPERIENCE, PROJECTS } from "../constants";

// Initialize Gemini Client
// Note: API Key must be set in environment variables
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are an AI assistant for Nattanon's portfolio website. 
Your goal is to answer questions about Nattanon based strictly on the provided context.
Be professional, friendly, and concise.

Context:
Name: ${PERSONAL_INFO.name}
Title: ${PERSONAL_INFO.title}
About: ${PERSONAL_INFO.about}
Location: ${PERSONAL_INFO.location}
Email: ${PERSONAL_INFO.email}

Skills: ${SKILLS.map(s => s.name).join(', ')}

Experience:
${EXPERIENCE.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description}`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description} (Tech: ${p.tags.join(', ')})`).join('\n')}

If asked about something not in this context, politely say you don't have that information but suggest contacting Nattanon directly.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, my AI brain is missing an API Key. Please configure the generic portfolio environment.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error while processing your request.";
  }
};
