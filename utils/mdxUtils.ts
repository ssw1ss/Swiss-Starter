import fs from "fs";
import path from "path";

export const DAYS_PATH = path.join(process.cwd(), "days");

export const daysFilePaths = fs
  .readdirSync(DAYS_PATH)
  .filter((path) => /\.mdx?$/.test(path));
