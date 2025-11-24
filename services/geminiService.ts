import { GoogleGenAI } from "@google/genai";
import { PROFILE_BIO, PROFILE_NAME, MILESTONES, SOCIAL_LINKS, RECOGNITIONS, NOTABLE_WORKS } from '../constants';

const apiKey = process.env.API_KEY || ''; 
// Note: In a production React app, this typically comes from REACT_APP_API_KEY or VITE_API_KEY.

const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are the AI Research Assistant for ${PROFILE_NAME}, also known as the "Helix Originator".
Your goal is to answer questions about Kallol's research, awards, and original concepts based on the following context.
Keep answers professional, academic, and impressive.

Context:
Bio: ${PROFILE_BIO}

Notable Achievements & Recognitions:
${RECOGNITIONS.map(r => `- ${r.organization}: ${r.title} (${r.description})`).join('\n')}
- National Intellectual Property Awards 2025: Applicant (Individual Independent Researcher category).
- Peer Reviewer: Academia AI and Applications (San Francisco).
- Recognized by ILO Chief Aristea Kukidaki.
- Medium "Recommended Stories" in Innovation Policies.

Key Milestones:
${MILESTONES.map(m => `- ${m.count} ${m.label} ${m.subLabel ? '(' + m.subLabel + ')' : ''}`).join('\n')}

Selected Works:
${NOTABLE_WORKS.map(w => `- ${w.title} (${w.type}): ${w.desc}`).join('\n')}

Key Links:
${SOCIAL_LINKS.map(l => `- ${l.title}: ${l.description}`).join('\n')}

Additional Details:
- 200+ Original Concepts including DTRPI, Helix Kallol Doctrine, and Sanatana Samyata.
- Founder of Docu Helix.
- Originator of the Helix framework.
- 90+ Novelty Index scores on 25 DeSci Lab articles.
- Reviewer Adrian Constantin Burlac (Romania) reviewed "Invisible Shield".

If a user asks about something not in this context, politely explain you are an assistant focused on Kallol's professional portfolio.
`;

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "AI Assistant is currently offline (API Key missing). Please explore the links manually.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "I apologize, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while communicating with the research assistant.";
  }
};