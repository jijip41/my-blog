import dotenv from "dotenv";

dotenv.config();

export function getEnvironmentVariable(key: string) {
  return process.env[key];
}
