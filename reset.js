import fs from "fs";
import path from "path";

const initializedFlag = path.join(process.cwd(), ".initialized");
if (fs.existsSync(initializedFlag)) process.exit(0);

const projectName = path.basename(process.cwd());
const packageJsonPath = path.join(process.cwd(), "package.json");
const indexHtmlPath = path.join(process.cwd(), "index.html");

// Update index.html title
let indexHtml = fs.readFileSync(indexHtmlPath, "utf-8");
const titleName = projectName
  .replace(/_/g, " ")
  .replace(/\b\w/g, (c) => c.toUpperCase());
indexHtml = indexHtml.replace(
  /<title>.*?<\/title>/,
  `<title>${titleName}</title>`,
);
fs.writeFileSync(indexHtmlPath, indexHtml);
console.log("✔ index.html title updated");

// Update package.json name
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
packageJson.name = projectName;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log("✔ package.json name updated");

// Mark as initialized
fs.writeFileSync(initializedFlag, "done");
console.log("✔ project initialized");
