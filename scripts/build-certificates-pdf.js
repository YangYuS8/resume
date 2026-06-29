#!/usr/bin/env node
const path = require('path');
const { spawnSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const htmlSource = path.join(root, 'site', 'certificates-pdf.html');
const pdfOut = path.join(root, 'site', 'certificates.pdf');
const chrome = process.env.CHROME_BIN || 'google-chrome';

const result = spawnSync(chrome, [
  '--headless',
  '--disable-gpu',
  '--no-sandbox',
  '--print-to-pdf=' + pdfOut,
  '--print-to-pdf-no-header',
  'file://' + htmlSource,
], { encoding: 'utf8' });

if (result.status !== 0) {
  process.stderr.write(result.stderr || result.stdout || 'Chrome certificates PDF generation failed\n');
  process.exit(result.status || 1);
}

console.log(`Read ${path.relative(root, htmlSource)}`);
console.log(`Wrote ${path.relative(root, pdfOut)}`);
