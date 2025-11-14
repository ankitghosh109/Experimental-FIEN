import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function dotenvLoader() {
  dotenv.config({
    path: path.join(__dirname,"..","..","..","..","..", ".env.local")   // root .env file
    
  });

  console.log("🔐 Dotenv loaded");
}
