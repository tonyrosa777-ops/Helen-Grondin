// scripts/generate-blog-images.mjs
// Generates blog card thumbnails for all 9 articles via fal.ai Flux Pro
// Output: /public/images/blog/blog-[slug].jpg
// Run: node scripts/generate-blog-images.mjs
//
// Design system source: design-system.md Section 6
// Mood: warm tones, NH landscape, autumn/green, natural light, no corporate settings
// Prohibited: stock photos of families on beaches, doctors with clipboards, health symbols

import { fal } from "@fal-ai/client";
import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, "../public/images/blog");
mkdirSync(OUTPUT_DIR, { recursive: true });

fal.config({ credentials: process.env.FAL_KEY });

// Brand base prompt — applied to every image (design-system.md Section 6)
const BASE = "warm tones, New Hampshire landscape, natural light, autumn foliage or green forest, editorial photography style, slightly desaturated but not flat, feels real not stock, no people, no doctors, no clipboards, no health symbols, cinematic composition, 16:9";

const images = [
  {
    slug: "health-sharing-new-hampshire-guide-2026",
    prompt: `Overview map of New Hampshire with warm golden light over White Mountains, autumn colors, aerial perspective, ${BASE}`,
  },
  {
    slug: "cobra-alternative-new-hampshire",
    prompt: `Empty office desk with resignation letter and personal items in a box, soft window light, warm autumn color outside, moment of transition, ${BASE}`,
  },
  {
    slug: "aca-subsidies-expired-2026",
    prompt: `Calendar on a kitchen table showing December with a red X, warm kitchen interior, natural morning light, NH home setting, ${BASE}`,
  },
  {
    slug: "impact-health-sharing-review-2026",
    prompt: `Notebook with handwritten notes, a coffee mug, and reading glasses on a wooden table, warm afternoon light through window, genuine and personal feeling, ${BASE}`,
  },
  {
    slug: "health-sharing-vs-insurance-nh",
    prompt: `Two paths diverging in a New Hampshire forest, autumn leaves, golden hour light filtering through trees, clear fork in the trail, ${BASE}`,
  },
  {
    slug: "self-employed-health-insurance-nh-2026",
    prompt: `Home office with laptop and freelance work supplies, small business owner aesthetic, warm natural light, NH countryside visible through window, ${BASE}`,
  },
  {
    slug: "impact-health-sharing-pre-existing-conditions",
    prompt: `Medical paperwork on a kitchen table with reading glasses and a plant in the background, warm domestic setting, honest and calm mood, ${BASE}`,
  },
  {
    slug: "health-sharing-scandals-is-impact-safe",
    prompt: `Magnifying glass resting on documents on a wooden desk, investigative but calm mood, warm lamp light, trustworthy and thorough feeling, ${BASE}`,
  },
  {
    slug: "medicare-supplement-health-sharing-nh",
    prompt: `Senior couple sitting on a porch overlooking a New Hampshire lake in autumn, relaxed and content, warm golden hour light, genuine moment not posed, ${BASE}`,
  },
];

async function generateImage(slug, prompt) {
  console.log(`\nGenerating: ${slug}`);
  console.log(`Prompt: ${prompt.slice(0, 80)}...`);

  try {
    const result = await fal.subscribe("fal-ai/flux-pro/v1.1", {
      input: {
        prompt,
        image_size: "landscape_16_9",
        num_inference_steps: 28,
        guidance_scale: 3.5,
        num_images: 1,
        safety_tolerance: "2",
      },
      logs: false,
    });

    const imageUrl = result.data.images[0].url;

    // Fetch and save the image
    const response = await fetch(imageUrl);
    const buffer = await response.arrayBuffer();
    const filename = `blog-${slug}.jpg`;
    const outputPath = join(OUTPUT_DIR, filename);
    writeFileSync(outputPath, Buffer.from(buffer));
    console.log(`✅ Saved: public/images/blog/${filename}`);
    return filename;
  } catch (err) {
    console.error(`❌ Failed: ${slug}`, err.message);
    return null;
  }
}

async function main() {
  console.log("fal.ai Blog Image Generation — Pare Grondin Services");
  console.log("=".repeat(55));
  console.log(`Generating ${images.length} images...`);

  const results = [];
  for (const img of images) {
    const filename = await generateImage(img.slug, img.prompt);
    results.push({ slug: img.slug, filename, success: !!filename });
    // Small delay between requests
    await new Promise((r) => setTimeout(r, 500));
  }

  console.log("\n" + "=".repeat(55));
  console.log("COMPLETE");
  const succeeded = results.filter((r) => r.success).length;
  console.log(`✅ ${succeeded}/${images.length} images generated`);
  if (succeeded < images.length) {
    console.log("❌ Failed slugs:");
    results.filter((r) => !r.success).forEach((r) => console.log(`  - ${r.slug}`));
  }
  console.log("\nNext step: git add public/images/blog/ && git commit -m 'feat(assets): fal.ai blog card images'");
}

main();
