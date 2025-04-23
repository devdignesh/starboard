import { splitTextIntoChunks } from "@/lib/utils";
import { promptTemplate } from "./prompt";

// Function to send the extracted text to AI service (OpenAI)
const API_KEY = process.env.OPENAI_API_KEY;
export async function sendChunksToAI(text: string): Promise<string[]> {
    const chunks = splitTextIntoChunks(text);
    const responses: string[] = [];
  
    for (const chunk of chunks) {
      const prompt = promptTemplate(chunk); 
  
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4",
          messages: [{ role: "user", content: prompt }],
          temperature: 0.2,
        }),
      });
  
      const data = await res.json();
  
      if (!data.choices || !data.choices[0]?.message?.content) {
        throw new Error("AI response did not return expected format");
      }
  
      responses.push(data.choices[0].message.content);
    }
  
    return responses;
  }
  