import { GoogleGenAI, Type } from "@google/genai";
import { LevelData } from "../data/craftsData";

const apiKey = process.env.GEMINI_API_KEY || "";
const ai = new GoogleGenAI({ apiKey });

export async function generateLevelWithAI(craftName: string, levelNum: number, currentProgress?: {correct: number, wrong: number}): Promise<LevelData & {careerRecommendation: string}> {
  const progressContext = currentProgress ? `Learner Stats: ${currentProgress.correct} correct, ${currentProgress.wrong} wrong.` : 'First time learner.';

  const prompt = `Act as an expert instructor for '${craftName}'.
Generate a curriculum for Level ${levelNum}.
Lessons: 3.
Questions per lesson: 3.
Arabic language only.
Output JSON schema: { id, category: "Beginner" | "Explorer" | "Skilled" | "Expert", lessons: [{ title, content, tools: [string], visualPrompt, questions: [{ id, text, options: [{ id, text, isCorrect }], explanation }], realWorldContext }], scenario: { title, description, task }, careerRecommendation }`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("AI Generation Error:", error);
    throw error;
  }
}

export async function analyzePersonality(userData: any): Promise<{ craft: string; reason: string; traits: string[]; potentialSalary: string; curriculumSample: LevelData }> {
  const prompt = `Act as a vocational orientation expert for the Ministry of Vocational Training in Algeria.
Predict the best vocational craft for this candidate.
User: Age ${userData.age}, Gender ${userData.gender}, Education ${userData.education}, Interests: ${userData.interests}, Skills: ${userData.skills}.
Psychometric Answers: ${JSON.stringify(userData.answers)}.

Return JSON:
{
  "craft": "Craft Name (Arabic)",
  "reason": "Comprehensive professional reason (Arabic Fusha)",
  "traits": ["Trait 1", "Trait 2", "Trait 3"],
  "potentialSalary": "Salary range in DZD (Arabic)",
  "curriculumSample": {
    "id": 1,
    "category": "Beginner",
    "lessons": [
      {
        "id": "1",
        "title": "Lesson 1 (Technical Title)",
        "content": "Professional pedagogical content (Arabic Fusha)",
        "tools": ["Tool 1", "Tool 2", "Tool 3"],
        "visualPrompt": "Detailed technical schematic description",
        "questions": [
           { "id": "1", "text": "Technical Q", "options": [{"id": "a", "text": "A", "isCorrect": true}, {"id": "b", "text": "B", "isCorrect": false}], "explanation": "Why A is correct" }
        ],
        "realWorldContext": "Official workplace application"
      }
    ],
    "scenario": { "title": "Critical Job Scenario", "description": "Desc", "task": "Task" }
  }
}`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("AI Analysis Error:", error);
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

