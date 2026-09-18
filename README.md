# envguard-checker

A simple and lightweight environment variable checker for Node.js applications.

`envguard-checker` helps you make sure that all required environment variables are available before your application starts.

## Installation

```bash
npm install envguard-checker
```

If you are using a `.env` file, install `dotenv` as well:

```bash
npm install dotenv
```

## Usage

### CommonJS

```js
require("dotenv").config();

const { checkEnv } = require("envguard-checker");

checkEnv({
  required: ["DATABASE_URL", "JWT_SECRET"],
  optional: ["REDIS_URL", "PORT"]
});

console.log("Environment variables are valid!");
```

### ES Modules

```js
import "dotenv/config";
import { checkEnv } from "envguard-checker";

checkEnv({
  required: ["DATABASE_URL", "JWT_SECRET"],
  optional: ["REDIS_URL", "PORT"]
});

console.log("Environment variables are valid!");
```

### TypeScript

```ts
import "dotenv/config";
import { checkEnv } from "envguard-checker";

checkEnv({
  required: ["DATABASE_URL", "JWT_SECRET"],
  optional: ["REDIS_URL", "PORT"]
});

console.log("Environment variables are valid!");
```

## Environment Variables

Example `.env` file:

```env
DATABASE_URL=postgresql://localhost/mydb
JWT_SECRET=my-secret
PORT=3000
REDIS_URL=redis://localhost:6379
```

## Required Variables

Variables inside `required` must exist.

```js
checkEnv({
  required: ["DATABASE_URL", "JWT_SECRET"]
});
```

If a required variable is missing, `envguard-checker` throws an error:

```text
Error: Missing Environment variables: JWT_SECRET
```

Multiple missing variables are reported together:

```text
Error: Missing Environment variables: DATABASE_URL, JWT_SECRET
```

## Optional Variables

Variables inside `optional` do not have to exist.

```js
checkEnv({
  required: ["DATABASE_URL"],
  optional: ["REDIS_URL", "PORT"]
});
```

If `REDIS_URL` or `PORT` is missing, no error is thrown.

> Currently, `optional` is used to document which environment variables are optional. Missing optional variables do not cause validation errors.

## API

### `checkEnv(options)`

```ts
checkEnv({
  required?: string[],
  optional?: string[]
});
```

### Options

| Option     | Type       | Description                                          |
| ---------- | ---------- | ---------------------------------------------------- |
| `required` | `string[]` | Environment variables that must exist                |
| `optional` | `string[]` | Environment variables that are allowed to be missing |

### Return Value

Returns:

```ts
true
```

when all required environment variables are available.

### Error

Throws an error when one or more required environment variables are missing.

Example:

```text
Error: Missing Environment variables: DATABASE_URL, JWT_SECRET
```

## Example

```js
require("dotenv").config();

const { checkEnv } = require("envguard-checker");

checkEnv({
  required: [
    "DATABASE_URL",
    "JWT_SECRET"
  ],
  optional: [
    "PORT",
    "REDIS_URL"
  ]
});

console.log("Application starting...");
```

## TypeScript Support

`envguard-checker` includes TypeScript type definitions.

This means TypeScript can detect invalid usage:

```ts
checkEnv({
  required: "DATABASE_URL"
});
```

TypeScript will report:

```text
Type 'string' is not assignable to type 'string[]'.
```

Correct usage:

```ts
checkEnv({
  required: ["DATABASE_URL"]
});
```

## License

MIT

## Author

Muhammad Saifullah
