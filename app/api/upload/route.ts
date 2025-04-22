import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import pdfParse from "pdf-parse";
import { promises as fs } from "fs";
import { log } from "console";
import { promptTemplate } from "@/utils/prompt";

const API_KEY = process.env.OPENAI_API_KEY;

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided." }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadsDir = path.join(process.cwd(), "public", "uploads");

    await mkdir(uploadsDir, { recursive: true }); // Ensure folder exists

    const filePath = path.join(uploadsDir, file.name);
    console.log("Uploading to:", filePath);

    await writeFile(filePath, buffer);

    // Extract text from PDF
    const text = await extractTextFromPDF(filePath);
    console.log("extractTextFromPDF", text);

    const aiResponse = await sendToAI(text);
    console.log("sendToAI", aiResponse);

    log("response", aiResponse);
    return NextResponse.json({
      success: true,
      url: `/uploads/${file.name}`,
      extractedText: aiResponse, // Return the extracted text (for testing purposes)
    });
  } catch (error) {
    console.error("Error during file upload process:", error);
    const result = error as Error;
    return NextResponse.json(
      { error: result.message || "An unexpected error occurred." },
      { status: 500 }
    );
  }
}

async function extractTextFromPDF(filePath: string): Promise<string> {
  const pdfBuffer = await readFile(filePath); // Use Node.js fs to read the file
  const pdfData = await pdfParse(pdfBuffer); // Extract text from PDF
  return pdfData.text; // Return the extracted text
}

// Helper function to read the file from disk
function readFile(filePath: string): Promise<Buffer> {
  return new Promise<Buffer>((resolve, reject) => {
    fs.readFile(filePath)
      .then((data) => resolve(data))
      .catch((err: NodeJS.ErrnoException) => reject(err));
  });
}

// Function to send the extracted text to AI service (OpenAI)
async function sendToAI(text: string) {
  const prompt = promptTemplate(text);

  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a real estate data extraction assistant.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 150,
    }),
  });

  const data = await response.json();
  return data.choices[0].text; // Return the AI response
}
