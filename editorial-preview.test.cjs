const assert = require('node:assert/strict');
const fs = require('node:fs');
const html = fs.readFileSync('editorial-preview.html', 'utf8');
for (const id of ['a', 'b', 'c']) assert.ok(html.includes(`id="${id}"`));
for (const font of ['Shippori Mincho', 'Kaisei Tokumin', 'Zen Antique Soft']) assert.ok(html.includes(font));
assert.equal((html.match(/これからも、/g) || []).length, 3);
assert.ok(fs.existsSync('assets/movement.jpg'));
console.log('Editorial previews verified');
