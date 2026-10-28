// Copies the app's privacy policy into src/content/privacy.md, which the
// /privacy pages are built from. Team notes (HTML comments) are dropped.
//
//   npm run sync:privacy                      # from ../qelunai-app-ads
//   npm run sync:privacy -- path/to/PRIVACY_POLICY.md
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const source = process.argv[2] ?? fileURLToPath(new URL('../qelunai-app-ads/docs/legal/PRIVACY_POLICY.md', root));
const target = fileURLToPath(new URL('src/content/privacy.md', root));

const text = readFileSync(source, 'utf8')
  .replace(/<!--[\s\S]*?-->/g, '')
  .replace(/\r\n/g, '\n')
  .trim();

if (text.split(/^---$/m).length !== 2) {
  console.error(`${source}: expected one "---" line between the Vietnamese and English versions`);
  process.exit(1);
}

writeFileSync(target, `${text}\n`);
console.log(`${source} -> ${target}`);
