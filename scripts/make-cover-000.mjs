// Generates the Edition 000 cover: a field of "neurons" whose dendrites
// resolve into a circuit grid on the right, drawn from a fixed seed.
import { writeFileSync, mkdirSync } from 'node:fs';
let s = 1975; const r = () => ((s = (s * 16807) % 2147483647) / 2147483647);
const W = 1600, H = 900, out = [];
out.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Neurons on the left branch into a right-angled circuit grid on the right">`);
out.push(`<rect width="${W}" height="${H}" fill="#f3efe4"/>`);
const ink = '#1a1916', accent = '#c2410c';
// circuit grid on the right
for (let i = 0; i < 70; i++) {
  let x = 900 + Math.round(r() * 14) * 50, y = 50 + Math.round(r() * 16) * 50, d = `M${x} ${y}`;
  for (let k = 0; k < 4; k++) { if (r() < .5) x += (r() < .5 ? -1 : 1) * 50 * (1 + Math.floor(r() * 3)); else y += (r() < .5 ? -1 : 1) * 50 * (1 + Math.floor(r() * 3)); d += ` L${x} ${y}`; }
  out.push(`<path d="${d}" fill="none" stroke="${ink}" stroke-width="2" opacity=".55"/>`);
  out.push(`<rect x="${x - 5}" y="${y - 5}" width="10" height="10" fill="${ink}"/>`);
}
// neurons on the left, with dendrites wandering right
function branch(x, y, a, len, depth, w) {
  if (depth === 0 || len < 6) return;
  const x2 = x + Math.cos(a) * len, y2 = y + Math.sin(a) * len;
  const cx = x + Math.cos(a + (r() - .5)) * len * .5, cy = y + Math.sin(a + (r() - .5)) * len * .5;
  out.push(`<path d="M${x.toFixed(1)} ${y.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}" fill="none" stroke="${ink}" stroke-width="${w.toFixed(2)}" stroke-linecap="round"/>`);
  const n = r() < .35 ? 1 : 2;
  for (let i = 0; i < n; i++) branch(x2, y2, a + (r() - .5) * 1.3, len * (.68 + r() * .2), depth - 1, w * .72);
}
const somas = [];
for (let i = 0; i < 14; i++) somas.push([120 + r() * 650, 90 + r() * 720]);
for (const [x, y] of somas) {
  const k = 4 + Math.floor(r() * 4);
  for (let j = 0; j < k; j++) branch(x, y, (j / k) * Math.PI * 2 + r() * .5, 40 + r() * 60, 5, 3);
  branch(x, y, -0.2 + r() * .4, 90 + r() * 60, 6, 3.4); // axon toward the circuit
}
for (const [x, y] of somas) out.push(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(9 + r() * 7).toFixed(1)}" fill="${ink}"/>`);
const [ax, ay] = somas[3];
out.push(`<circle cx="${ax.toFixed(1)}" cy="${ay.toFixed(1)}" r="26" fill="none" stroke="${accent}" stroke-width="4"/>`);
out.push(`</svg>`);
mkdirSync('public/art/000', { recursive: true });
writeFileSync('public/art/000/cover.svg', out.join('\n'));
console.log('wrote public/art/000/cover.svg', out.join('').length, 'bytes');
