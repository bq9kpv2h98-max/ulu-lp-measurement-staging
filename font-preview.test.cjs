const assert = require('node:assert/strict');
const fs = require('node:fs');
const html = fs.readFileSync('font-preview.html', 'utf8');
for (let i = 1; i <= 6; i++) assert.match(html, new RegExp(`id="p${i}"`));
for (const font of ['Noto Serif JP', 'Zen Old Mincho', 'Noto Sans JP', 'Zen Kaku Gothic New', 'Klee One']) assert.ok(html.includes(font));
assert.equal((html.match(/これからも、/g) || []).length, 6);
assert.ok(fs.existsSync('assets/movement.jpg'));
console.log('Font comparison checks passed');
