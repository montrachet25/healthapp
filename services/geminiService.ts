
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export async function getProductivityInsight(tasks: any[]) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Based on these tasks: ${JSON.stringify(tasks)}, provide a one-sentence encouraging productivity insight for a user's weekly report.`,
    });
    return response.text || "You're making great progress! Stay focused on your core goals.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Great job this week! You were most focused on Monday afternoons.";
  }
}

export async function parseVoiceSchedule(input: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Parse this scheduling voice command into a task title and time: "${input}". Return JSON format: { "title": "...", "time": "..." }`,
      config: {
        responseMimeType: "application/json"
      }
    });
    return JSON.parse(response.text || "{}");
  } catch (error) {
    return { title: input, time: "Upcoming" };
  }
}
