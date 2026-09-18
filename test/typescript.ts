import { checkEnv } from "envguard-checker";
process.env.DATABASE_URL = "postgresql://localhost/test";

checkEnv({
  required: ["DATABASE_URL","JWT_SECRET","API_KEY"],
    optional: [ "PORT"]
});
console.log("✅ TypeScript works!");