import type { Request, Response } from "express";

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoryPath = path.join(__dirname, "../../../public/img/domains");

export const GET = (_req: Request, res: Response) => {
  res.send(readDirectory(directoryPath, "/img/domains/"));
};

// Function to read the directory and return the desired object
const readDirectory = (
  dirPath: string,
  prefix: string = ""
): Record<string, string> => {
  try {
    const files = fs.readdirSync(dirPath);
    const result: Record<string, string> = {};

    files.forEach((file) => {
      const parsedPath = path.parse(file);
      const key = parsedPath.name; // The filename without extension
      result[key] = `${prefix}${file}`; // The full filename
    });

    return result;
  } catch (error) {
    console.error("Error reading directory:", error);
    return {};
  }
};
