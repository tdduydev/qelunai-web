import raw from '../content/privacy.md?raw';

/**
 * The privacy policy from `src/content/privacy.md` (copied from the app by
 * `npm run sync:privacy`): Vietnamese before the `---` line, English after.
 * Only the subset the app renders is handled: `#`, `##`, `- ` bullets with
 * indented continuation lines, `**bold**`, a `*note*` line, and bare URLs.
 */
export interface Policy {
  title: string;
  /** The `*Cập nhật lần cuối: …*` line. */
  updated: string;
  sections: { id: string; title: string }[];
  html: string;
}

const versions = raw.replace(/<!--[\s\S]*?-->/g, '').split(/^---$/m);

export function policyFor(code: string): Policy {
  return render(versions[code === 'vi' ? 0 : 1] ?? versions[0]);
}

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const inline = (s: string) =>
  escape(s)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*\s][^*]*?)\*(?!\*)/g, '$1<em>$2</em>')
    .replace(/https?:\/\/[^\s<]+[^\s<.,;:)]/g, (url) => `<a href="${url}" rel="noopener">${url}</a>`);

const slug = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/gi, 'd')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

function render(md: string): Policy {
  let title = '';
  let updated = '';
  const sections: Policy['sections'] = [];
  const out: string[] = [];
  let para: string[] = [];
  let list: string[] = [];

  const flushPara = () => {
    if (para.length) out.push(`<p>${inline(para.join(' '))}</p>`);
    para = [];
  };
  const flushList = () => {
    if (list.length) out.push(`<ul>${list.map((li) => `<li>${inline(li)}</li>`).join('')}</ul>`);
    list = [];
  };

  for (const line of md.trim().split('\n')) {
    const text = line.trim();
    if (!text) {
      flushPara();
      flushList();
    } else if (text.startsWith('## ')) {
      flushPara();
      flushList();
      const heading = text.slice(3);
      const id = slug(heading);
      sections.push({ id, title: heading });
      out.push(`<h2 id="${id}">${inline(heading)}</h2>`);
    } else if (text.startsWith('# ')) {
      title = text.slice(2);
    } else if (/^\*[^*].*\*$/.test(text) && title && !updated) {
      updated = text.slice(1, -1);
    } else if (text.startsWith('- ')) {
      flushPara();
      list.push(text.slice(2));
    } else if (list.length && /^\s/.test(line)) {
      list[list.length - 1] += ` ${text}`;
    } else {
      flushList();
      para.push(text);
    }
  }
  flushPara();
  flushList();

  return { title, updated, sections, html: out.join('\n') };
}
