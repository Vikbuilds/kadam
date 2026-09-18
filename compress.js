/**
 * compress.js
 * One-shot image compression for all assets in public/
 * Uses native Node.js + canvas-free approach via sharp (if available)
 * Run: node compress.js
 */
import { execSync } from 'child_process';
import { readdirSync, statSync, renameSync } from 'fs';
import { join, extname } from 'path';

const PUBLIC_DIR = './public';

function walkDir(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      walkDir(full, files);
    } else {
      files.push(full);
    }
  }
  return files;
}

const images = walkDir(PUBLIC_DIR).filter(f =>
  ['.jpg', '.jpeg', '.png', '.webp'].includes(extname(f).toLowerCase())
);

let totalBefore = 0;
let totalAfter = 0;

for (const img of images) {
  const before = statSync(img).size;
  totalBefore += before;
  try {
    // Use sharp via npx to compress in-place
    const ext = extname(img).toLowerCase();
    const tmp = img + '.tmp';
    if (ext === '.png') {
      execSync(`npx sharp-cli --input "${img}" --output "${tmp}" --format png --quality 80 --compressionLevel 9 2>&1`, { stdio: 'pipe' });
    } else {
      execSync(`npx sharp-cli --input "${img}" --output "${tmp}" --format jpeg --quality 75 2>&1`, { stdio: 'pipe' });
    }
    const after = statSync(tmp).size;
    if (after < before) {
      renameSync(tmp, img);
      totalAfter += after;
      console.log(`✓ ${img}: ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB (-${Math.round((1-after/before)*100)}%)`);
    } else {
      // If output is bigger, keep original
      execSync(`del "${tmp}" 2>nul`, { shell: true, stdio: 'pipe' });
      totalAfter += before;
      console.log(`= ${img}: kept original (already optimal)`);
    }
  } catch {
    totalAfter += before;
    console.log(`⚠ ${img}: skipped (sharp-cli not available)`);
  }
}

console.log(`\nTotal: ${(totalBefore/1024/1024).toFixed(2)}MB → ${(totalAfter/1024/1024).toFixed(2)}MB`);
