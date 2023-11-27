import { createWorker } from 'tesseract.js';
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}

export const convertImageToText = async (image: File): Promise<string> => {
  const worker = await createWorker();
  await worker.load();
  const { data } = await worker.recognize(image);
  return data.text;
};
