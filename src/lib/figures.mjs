// Markdown figures for blog posts: a paragraph holding only an image with a
// title becomes <figure> with the title as <figcaption>, on the page and in
// the feed. `![Mô tả cho người không xem được ảnh](../../../assets/blog/x/y.webp "Chú thích")`.
// A Sätteri hast plugin (astro.config.mjs); it runs before Astro marks local
// images for optimisation, so the image still gets width/height. `quality`
// rides along to getImage: Astro re-encodes the WebP, and at its default
// quality a 1200 px lacquer painting comes out well over 150 KB.

/** WebP quality of figures, on the page and in the feed. */
export const FIGURE_QUALITY = 70;

const isBlank = (node) => node.type === 'text' && !node.value.trim();

/** `<p><img title="…"></p>` → `<figure><img><figcaption>…</figcaption></figure>`. */
export function figures() {
  return {
    name: 'qelunai-figures',
    element: {
      filter: ['p'],
      visit(node, ctx) {
        const content = node.children.filter((c) => !isBlank(c));
        const img = content[0];
        if (content.length !== 1 || img.type !== 'element' || img.tagName !== 'img') return;
        const { title, ...properties } = img.properties ?? {};
        if (typeof title !== 'string' || !title.trim()) return;
        ctx.replaceNode(node, {
          type: 'element',
          tagName: 'figure',
          properties: {},
          children: [
            { type: 'element', tagName: 'img', properties: { ...properties, quality: FIGURE_QUALITY }, children: [] },
            { type: 'element', tagName: 'figcaption', properties: {}, children: [{ type: 'text', value: title.trim() }] },
          ],
        });
      },
    },
  };
}
