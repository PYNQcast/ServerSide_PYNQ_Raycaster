import { build } from 'esbuild';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const srcDir = path.join(__dirname, 'src');
const templateDir = path.join(__dirname, 'templates');
const distDir = path.join(__dirname, 'dist');

function extractBody(html, label) {
  const match = html.match(/<body[^>]*>([\s\S]*?)(?:<\/body>|<\/html>)/i);
  if (!match) {
    throw new Error(`Failed to extract <body> from ${label}`);
  }
  return match[1].trim();
}

async function generateTemplateModule() {
  const [pynqTemplate, simTemplate] = await Promise.all([
    readFile(path.join(templateDir, 'pynq-template.html'), 'utf8'),
    readFile(path.join(templateDir, 'sim-template.html'), 'utf8'),
  ]);

  const moduleSource = `export const monitorMarkup = ${JSON.stringify({
    pynq: extractBody(pynqTemplate, 'pynq-template.html'),
    sim: extractBody(simTemplate, 'sim-template.html'),
  }, null, 2)};\n`;

  await mkdir(srcDir, { recursive: true });
  await writeFile(path.join(srcDir, 'templates.generated.js'), moduleSource, 'utf8');
}

async function main() {
  await mkdir(distDir, { recursive: true });
  await generateTemplateModule();

  await build({
    entryPoints: [path.join(srcDir, 'monitor-ui.jsx')],
    outfile: path.join(distDir, 'monitor-ui.js'),
    bundle: true,
    minify: true,
    sourcemap: false,
    format: 'iife',
    platform: 'browser',
    target: ['es2020'],
    jsx: 'automatic',
    loader: {
      '.js': 'jsx',
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify('production'),
    },
    absWorkingDir: rootDir,
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
