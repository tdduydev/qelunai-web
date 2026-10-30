import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import { figures } from './src/lib/figures.mjs';

export default defineConfig({
  site: 'https://qelunai.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  markdown: { processor: satteri({ hastPlugins: [figures()] }) },
});
