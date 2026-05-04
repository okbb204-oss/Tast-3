import { GoogleGenAI, Type } from "@google/genai";
import { LevelData } from "../data/craftsData";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function generateLevelWithAI(craftName: string, levelNum: number, currentProgress?: {correct: number, wrong: number}): Promise<LevelData & {careerRecommendation: string}> {
  const progressContext = currentProgress ? `Learner Stats: ${currentProgress.correct} correct, ${currentProgress.wrong} wrong. If they are excelling, push them with advanced terminology. If struggling, provide more foundational analogies.` : 'First time learner for this craft.';

  const prompt = `Act as an Autonomous Vocational Training System (Senior Instructor) for '${craftName}'.
Generate a comprehensive, high-level professional training module for Level ${levelNum} (Advanced technical curriculum).

Vocational Pedagogical Guidelines:
- TONE: Professional, instructional, direct. No childish metaphors.
- CONTENT: 100% focused on professional standards, technical codes (e.g., ISO, NF, IEEE), and current job market requirements.
- HSE: Every lesson must mention a safety protocol or standard operating procedure (SOP).
- LANGUAGE: Advanced professional Arabic (Standard/Technical hybrid). Use precise industry-specific terminology.

Structure Requirements:
1. LESSONS: EXACTLY 3 specialized lessons.
2. CONTENT: Structured with clear terminology and real-world application.
3. TOOLS: Each lesson MUST list exactly 3 professional-grade tools. Format: 'Brand/Type - Technical Purpose (Usage Scenario)'.
4. VISUALS: 'visualPrompt' MUST be a high-fidelity description for generating a technical schematic or onsite photo.
5. QUIZ: 3 high-stakes multiple-choice questions per lesson (9 total). Focus on decision-making and troubleshooting.
6. PRACTICAL SCENARIO: A "Critical Job Simulation" where the user must apply the lesson's core principle.
7. CAREER RECOMMENDATION: Advice on certification or specialized job roles related to this specific level.

Adaptive Context: ${progressContext}

Output MUST be valid JSON matching the schema.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.NUMBER },
            category: { type: Type.STRING, enum: ["Beginner", "Explorer", "Skilled", "Expert"] },
            lessons: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  content: { type: Type.STRING },
                  tools: { 
                    type: Type.ARRAY, 
                    items: { type: Type.STRING },
                    description: "List of 3 tools: 'Name - Description (Example)'"
                  },
                  visualPrompt: { type: Type.STRING },
                  questions: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        id: { type: Type.STRING },
                        text: { type: Type.STRING },
                        options: {
                          type: Type.ARRAY,
                          items: {
                            type: Type.OBJECT,
                            properties: {
                              id: { type: Type.STRING },
                              text: { type: Type.STRING },
                              isCorrect: { type: Type.BOOLEAN }
                            },
                            required: ["id", "text", "isCorrect"]
                          }
                        },
                        explanation: { type: Type.STRING }
                      },
                      required: ["id", "text", "options", "explanation"]
                    }
                  },
                  realWorldContext: { type: Type.STRING }
                },
                required: ["title", "content", "tools", "visualPrompt", "questions", "realWorldContext"]
              }
            },
            scenario: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                description: { type: Type.STRING },
                task: { type: Type.STRING }
              },
              required: ["title", "description", "task"]
            },
            careerRecommendation: { type: Type.STRING }
          },
          required: ["id", "category", "lessons", "scenario", "careerRecommendation"]
        }
      }
    });

    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("AI Generation Error:", error);
    throw error;
  }
}

export async function generateVisualAid(prompt: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-image",
      contents: { parts: [{ text: prompt }] }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
  } catch (err) {
    console.error("Image gen error:", err);
  }
  return "";
}

