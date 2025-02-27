const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = "src/assets/images";
const outputDir = "src/assets/images";

async function processImages() {
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const files = fs.readdirSync(inputDir);

  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png|webp)$/i)) {
      const inputPath = path.join(inputDir, file);
      const filename = path.parse(file).name;
      const ext = path.parse(file).ext;

      // Generate thumbnail
      await sharp(inputPath)
        .resize(300) // width of 300px, height auto
        .webp({ quality: 60 })
        .toFile(path.join(outputDir, `${filename}-thumb.webp`));

      // Generate optimized full-size image
      await sharp(inputPath)
        .resize(1200) // max width of 1200px, height auto
        .webp({ quality: 80 })
        .toFile(path.join(outputDir, `${filename}.webp`));
    }
  }
}

processImages().catch(console.error);
