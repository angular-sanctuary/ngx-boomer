#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const SCHEMATICS_TO_ADD = {
  "@schematics/angular:component": { type: "component" },
  "@schematics/angular:directive": { type: "directive" },
  "@schematics/angular:service": { type: "service" },
  "@schematics/angular:guard": { typeSeparator: "." },
  "@schematics/angular:interceptor": { typeSeparator: "." },
  "@schematics/angular:module": { typeSeparator: "." },
  "@schematics/angular:pipe": { typeSeparator: "." },
  "@schematics/angular:resolver": { typeSeparator: "." },
};

const angularJsonPath = path.resolve(process.cwd(), "angular.json");

if (!fs.existsSync(angularJsonPath)) {
  console.error("angular.json not found in the current directory.");
  process.exit(1);
}

let angularJson;
try {
  angularJson = JSON.parse(fs.readFileSync(angularJsonPath, "utf8"));
} catch (e) {
  console.error("Failed to parse angular.json:", e.message);
  process.exit(1);
}

if (!angularJson.schematics) {
  angularJson.schematics = {};
}

for (const [key, value] of Object.entries(SCHEMATICS_TO_ADD)) {
  angularJson.schematics[key] = value;
}

try {
  fs.writeFileSync(
    angularJsonPath,
    JSON.stringify(angularJson, null, 2) + "\n",
    "utf8"
  );
  console.log("Updated schematics in angular.json successfully.");
} catch (e) {
  console.error("Failed to write angular.json:", e.message);
  process.exit(1);
}
