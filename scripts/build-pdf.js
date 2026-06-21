#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const source = path.join(root, 'resume-pdf.mdx');
const htmlOut = path.join(root, 'site', 'resume-pdf.html');
const pdfOut = path.join(root, 'site', 'resume.pdf');

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function inlineMarkdown(text) {
  let escaped = escapeHtml(text);
  escaped = escaped.replace(/`([^`]+)`/g, '<code>$1</code>');
  escaped = escaped.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  return escaped;
}

function parseFrontmatter(markdown) {
  if (!markdown.startsWith('---\n')) return [{}, markdown];
  const end = markdown.indexOf('\n---\n', 4);
  if (end === -1) return [{}, markdown];
  const raw = markdown.slice(4, end).trim();
  const meta = {};
  for (const line of raw.split('\n')) {
    const match = line.match(/^([^:]+):\s*(.*)$/);
    if (match) meta[match[1].trim()] = match[2].trim();
  }
  return [meta, markdown.slice(end + 5).trim()];
}

function renderMarkdown(markdown) {
  const lines = markdown.split(/\r?\n/);
  const output = [];
  let paragraph = [];
  let listOpen = false;

  function closeParagraph() {
    if (!paragraph.length) return;
    output.push(`<p>${paragraph.join('<br />')}</p>`);
    paragraph = [];
  }

  function closeList() {
    if (!listOpen) return;
    output.push('</ul>');
    listOpen = false;
  }

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    if (!line.trim()) {
      closeParagraph();
      closeList();
      continue;
    }

    if (line.startsWith('<') && line.endsWith('>')) {
      closeParagraph();
      closeList();
      output.push(line);
      continue;
    }

    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      closeParagraph();
      closeList();
      const level = heading[1].length;
      output.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
      continue;
    }

    const item = line.match(/^-\s+(.+)$/);
    if (item) {
      closeParagraph();
      if (!listOpen) {
        output.push('<ul>');
        listOpen = true;
      }
      output.push(`<li>${inlineMarkdown(item[1])}</li>`);
      continue;
    }

    paragraph.push(inlineMarkdown(line).replace(/\s{2}$/, ''));
  }

  closeParagraph();
  closeList();
  return output.join('\n');
}

const [meta, body] = parseFrontmatter(fs.readFileSync(source, 'utf8'));
const content = renderMarkdown(body);
const html = `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(meta.title || '简历 PDF')}</title>
  <style>
    @page { size: A4; margin: 10mm 10mm 9mm; }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      color: #111827;
      background: #ffffff;
      font-family: "Noto Sans CJK SC", "Noto Sans SC", "Source Han Sans SC", "Microsoft YaHei", Arial, sans-serif;
      font-size: 9.1pt;
      line-height: 1.38;
    }
    main { width: 100%; }
    h1 {
      margin: 0 0 2mm;
      color: #0f172a;
      font-size: 24pt;
      line-height: 1;
      letter-spacing: 0.04em;
    }
    .headline {
      margin-bottom: 2.5mm;
      color: #1d4ed8;
      font-size: 11pt;
      font-weight: 700;
    }
    .contact-line {
      display: flex;
      flex-wrap: wrap;
      gap: 2mm 5mm;
      margin: 0 0 4mm;
      padding: 2.2mm 3mm;
      border: 1px solid #dbe3ef;
      border-radius: 3mm;
      background: #f8fbff;
      color: #374151;
      font-size: 8.6pt;
    }
    h2 {
      margin: 3.6mm 0 1.7mm;
      padding-bottom: 0.8mm;
      border-bottom: 1.2px solid #1d4ed8;
      color: #0f172a;
      font-size: 12pt;
      line-height: 1.2;
    }
    h3 {
      margin: 2.4mm 0 0.8mm;
      color: #111827;
      font-size: 10.2pt;
      line-height: 1.25;
    }
    p { margin: 0 0 1.7mm; }
    ul { margin: 0 0 1.7mm; padding-left: 4.7mm; }
    li { margin: 0.7mm 0; padding-left: 0.2mm; }
    strong { color: #0f172a; font-weight: 700; }
    code {
      padding: 0 1.2mm;
      border-radius: 1.2mm;
      background: #eef2f7;
      font-family: "JetBrains Mono", Consolas, monospace;
      font-size: 0.9em;
    }
    .right { float: right; color: #4b5563; font-weight: 500; }
    .meta {
      display: block;
      margin: -0.3mm 0 1mm;
      color: #4b5563;
      font-size: 8.4pt;
      font-weight: 600;
    }
    @media print {
      h2, h3 { break-after: avoid; }
      li, p { break-inside: avoid; }
    }
  </style>
</head>
<body>
  <main>
${content}
  </main>
</body>
</html>
`;

fs.mkdirSync(path.dirname(htmlOut), { recursive: true });
fs.writeFileSync(htmlOut, html);

const chrome = process.env.CHROME_BIN || 'google-chrome';
const result = spawnSync(chrome, [
  '--headless',
  '--disable-gpu',
  '--no-sandbox',
  '--print-to-pdf=' + pdfOut,
  '--print-to-pdf-no-header',
  'file://' + htmlOut,
], { encoding: 'utf8' });

if (result.status !== 0) {
  process.stderr.write(result.stderr || result.stdout || 'Chrome PDF generation failed\n');
  process.exit(result.status || 1);
}

console.log(`Wrote ${path.relative(root, htmlOut)}`);
console.log(`Wrote ${path.relative(root, pdfOut)}`);
