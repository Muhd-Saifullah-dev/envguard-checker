import { checkEnv } from "env-checker";
process.env.DATABASE_URL = "postgresql://localhost/test";
process.env.JWT_SECRET = "my-secret";
checkEnv({
  required: ["DATABASE_URL", "JWT_SECRET"],
    optional: ["REDIS_URL", "PORT"]
});

console.log("✅ ESM works!");