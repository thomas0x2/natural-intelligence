// Render an SVG to PNG (for email clients and social cards, which do not show SVG).
// Usage: node scripts/svg-to-png.mjs public/art/000/cover.svg [width]
import { createRequire } from 'node:module';
// Playwright is not a project dependency; install it or point NODE_PATH at a global copy.
const { chromium } = createRequire(import.meta.url)('playwright');
import { readFileSync } from 'node:fs';
const [file, width = '1600'] = process.argv.slice(2);
const svg = readFileSync(file, 'utf8');
const vb = svg.match(/viewBox="0 0 (\d+) (\d+)"/);
const w = Number(width), h = Math.round(w * Number(vb[2]) / Number(vb[1]));
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: w, height: h } });
await page.setContent(`<html><body style="margin:0">${svg.replace('<svg ', `<svg width="${w}" height="${h}" `)}</body></html>`);
await page.screenshot({ path: file.replace(/\.svg$/, '.png') });
await browser.close();
console.log('wrote', file.replace(/\.svg$/, '.png'));
