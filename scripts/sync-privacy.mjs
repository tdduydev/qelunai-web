// Copies the app's privacy policies into src/content/, which the /privacy pages
// are built from: PRIVACY_POLICY.md (Vietnamese and English) to privacy.md, and
// the Chinese and Korean translations next to it to privacy.zh.md and
// privacy.ko.md. Team notes (HTML comments) are dropped.
//
//   npm run sync:privacy                      # from ../qelunai-app-ads
//   npm run sync:privacy -- path/to/PRIVACY_POLICY.md
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const source = process.argv[2] ?? fileURLToPath(new URL('../qelunai-app-ads/docs/legal/PRIVACY_POLICY.md', root));

/** Target file, source file and how many `---` separated versions it must hold. */
const files = [
  ['privacy.md', source, 2],
  ['privacy.zh.md', source.replace(/\.md$/, '.zh.md'), 1],
  ['privacy.ko.md', source.replace(/\.md$/, '.ko.md'), 1],
];

for (const [name, from, parts] of files) {
  const target = fileURLToPath(new URL(`src/content/${name}`, root));
  const text = readFileSync(from, 'utf8')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\r\n/g, '\n')
    .trim();

  if (text.split(/^---$/m).length !== parts) {
    console.error(
      parts === 2
        ? `${from}: expected one "---" line between the Vietnamese and English versions`
        : `${from}: expected no "---" line, the file holds one language`,
    );
    process.exit(1);
  }

  writeFileSync(target, `${text}\n`);
  console.log(`${from} -> ${target}`);
}
