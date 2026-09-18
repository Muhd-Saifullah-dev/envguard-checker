// src/index.ts
function checkEnv(options = {}) {
  const required = options.required ?? [];
  const missing = required.filter((key) => {
    return !process.env[key];
  });
  if (missing.length > 0) {
    throw Error(
      `Missing Environment variables: ${missing.join(", ")}`
    );
  }
  return true;
}
export {
  checkEnv
};
