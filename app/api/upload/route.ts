import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { sendChunksToAI } from "@/utils/sendChunksToAI";
import PdfParse from "pdf-parse";
import { promises as fs } from "fs";
import { jsonrepair } from "jsonrepair";

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
    const uniqueName = `OM-${Date.now()}-${Math.random()
      .toString(36)
      .substring(2, 10)}.pdf`;
    const filePath = path.join(uploadsDir, uniqueName);

    await writeFile(filePath, buffer);

    // Extract text from PDF
    const extractedText = await extractTextFromPDF(filePath);
    const allResponses = await sendChunksToAI(extractedText);
    const aiResponse = allResponses.join("\n\n");

    console.log("aiResponse============>", aiResponse);
    // Extract the first JSON object only

    let firstJsonMatch = aiResponse.match(/```json([\s\S]*?)```/);

    if (!firstJsonMatch) {
      firstJsonMatch = aiResponse.match(/\{[\s\S]*\}/); // greedy fallback
    }

    let singleJson = firstJsonMatch
      ? firstJsonMatch[1] || firstJsonMatch[0]
      : "{}";

    try {
      singleJson = jsonrepair(singleJson);
    } catch (e) {
      console.error("JSON repair failed:", e);
    }

    return NextResponse.json({
      success: true,
      url: `/uploads/${file.name}`,
      extractedText: singleJson, // Return the extracted text (for testing purposes)
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
  const pdfData = await PdfParse(pdfBuffer); // Extract text from PDF
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
