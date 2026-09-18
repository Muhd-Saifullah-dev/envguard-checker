const { checkEnv } = require("env-checker");
process.env.DATABASE_URL = "postgresql://localhost/test";
process.env.JWT_SECRET = "my-secret";
checkEnv({
  required: ["DATABASE_URL", "JWT_SECRET"],
  optional:["Redis_url"]
});

console.log("✅ CommonJS works!");