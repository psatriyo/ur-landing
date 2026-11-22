#!/usr/bin/env node
// Checks that en/id/ms translation files have the same keys, and that every
// key referenced in the HTML pages exists. Usage: node tools/check-i18n.mjs
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const LANGS = ['en', 'id', 'ms'];
const ctx = { window: {} };
vm.createContext(ctx);
for (const l of LANGS) vm.runInContext(readFileSync(join(root, 'translations', `${l}.js`), 'utf8'), ctx);

const flatten = (obj, prefix = '', out = {}) => {
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object') flatten(v, key, out); else out[key] = v;
  }
  return out;
};
const flat = Object.fromEntries(LANGS.map((l) => [l, flatten(ctx.window.translations[l] || {})]));
let problems = 0;
const report = (msg) => { problems++; console.log('✗ ' + msg); };

for (const l of LANGS.slice(1)) {
  for (const k of Object.keys(flat.en)) if (!(k in flat[l])) report(`${l} is missing "${k}"`);
  for (const k of Object.keys(flat[l])) if (!(k in flat.en)) report(`${l} has extra key "${k}" (not in en)`);
  for (const k of Object.keys(flat.en)) {
    if (k in flat[l] && typeof flat[l][k] === 'string' && flat[l][k].trim() === '' && flat.en[k].trim() !== '') report(`${l} has an empty "${k}"`);
  }
}

const used = new Set();
for (const file of readdirSync(root).filter((f) => f.endsWith('.html'))) {
  const html = readFileSync(join(root, file), 'utf8');
  for (const m of html.matchAll(/data-i18n(?:-html)?="([^"]+)"/g)) used.add(m[1] + `\t${file}`);
  for (const m of html.matchAll(/data-i18n-attr="([^"]+)"/g)) {
    for (const pair of m[1].split(';')) used.add(pair.split(':')[1].trim() + `\t${file}`);
  }
}
for (const entry of used) {
  const [key, file] = entry.split('\t');
  if (!(key in flat.en)) report(`${file} uses unknown key "${key}"`);
}

const keys = Object.keys(flat.en).length;
if (problems) { console.log(`\n${problems} problem(s) found.`); process.exit(1); }
console.log(`✓ ${keys} keys present in ${LANGS.join(', ')}; all keys used in the HTML exist.`);
