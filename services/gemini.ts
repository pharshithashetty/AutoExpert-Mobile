import { GoogleGenerativeAI } from "@google/generative-ai";
import Constants from "expo-constants";

const API_KEY = Constants.expoConfig?.extra?.GOOGLE_API_KEY;
console.log("API Key:", API_KEY); 

const genAI = new GoogleGenerativeAI(API_KEY);

export const getDiagnosis = async (inputs: any) => {
  try {
    if (!API_KEY) throw new Error("API Key is missing");

    const model = genAI.getGenerativeModel({ model: "models/gemini-1.5-flash-latest" });

    const prompt = `You are an automobile expert. Given the details:
    Make: ${inputs.make}
    Model: ${inputs.model}
    Year: ${inputs.year}
    Mileage: ${inputs.mileage} km
    Problem: ${inputs.problem}
    Symptoms: ${inputs.symptoms}

    Provide structured response with:
    1. Problem Diagnosis (detailed table)
    2. Possible Causes (bullet points)
    3. Recommended Solutions (numbered steps)
    4. Maintenance Tips (table)`;

    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Diagnosis API Error:", error);
    throw new Error("Failed to get diagnosis");
  }
};
