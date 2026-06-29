#!/usr/bin/env node
const path = require('path');
const { spawnSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const htmlSource = path.join(root, 'site', 'portfolio-devops.html');
const pdfOut = path.join(root, 'site', 'devops-sre-portfolio.pdf');
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
  process.stderr.write(result.stderr || result.stdout || 'Chrome portfolio PDF generation failed\n');
  process.exit(result.status || 1);
}

console.log(`Read ${path.relative(root, htmlSource)}`);
console.log(`Wrote ${path.relative(root, pdfOut)}`);
