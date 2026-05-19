import fs from "fs";
import path from "path";
import sharp from "sharp";

const root = path.join(process.cwd(), "public", "images");
const teamDir = path.join(root, "team");

async function convert(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn(`Skip (missing): ${src}`);
    return;
  }
  await sharp(src).jpeg({ quality: 90 }).toFile(dest);
  console.log(`Created ${dest}`);
}

await convert(
  path.join(root, "busra-yusufoglu.webp"),
  path.join(root, "busra-yusufoglu.jpg")
);

if (fs.existsSync(teamDir)) {
  for (const file of fs.readdirSync(teamDir)) {
    if (!/\.(png|webp|jpe?g)$/i.test(file)) continue;
    const base = file.replace(/\.[^.]+$/, "");
    const src = path.join(teamDir, file);
    const dest = path.join(teamDir, `${base}.jpg`);
    await convert(src, dest);
  }
}
