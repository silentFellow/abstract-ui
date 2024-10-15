import fs from "fs";

const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));

if (packageJson.dependencies && Object.keys(packageJson.dependencies).length > 0) {
  console.error("Dependencies are not allowed");
  process.exit(1);
}
