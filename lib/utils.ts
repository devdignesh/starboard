import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function splitTextIntoChunks(text: string, maxTokensPerChunk = 2000): string[] {
  const approxCharsPerToken = 4;
  const maxChars = maxTokensPerChunk * approxCharsPerToken;

  const chunks: string[] = [];
  let currentIndex = 0;

  while (currentIndex < text.length) {
    chunks.push(text.slice(currentIndex, currentIndex + maxChars));
    currentIndex += maxChars;
  }

  return chunks;
}

