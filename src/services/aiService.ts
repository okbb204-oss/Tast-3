import { LevelData } from "../data/craftsData";

export async function analyzePersonalityOnServer(userData: any): Promise<{ craft: string; reason: string; curriculumSample: LevelData }> {
  const response = await fetch("/api/ai/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  if (!response.ok) throw new Error("Analysis failed");
  return response.json();
}

export async function generateLevelOnServer(craftName: string, levelNum: number, currentProgress?: {correct: number, wrong: number}): Promise<LevelData & {careerRecommendation: string}> {
  const response = await fetch("/api/ai/generate-level", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ craftName, levelNum, currentProgress }),
  });
  if (!response.ok) throw new Error("Generation failed");
  return response.json();
}
