// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';

// Where the site lives. For GitHub Pages this is https://<user>.github.io/<repo>.
// When a custom domain is added, set SITE to it and BASE to '/'.
const SITE = process.env.SITE ?? 'https://thomas0x2.github.io';
const BASE = process.env.BASE ?? '/natural-intelligence';

/**
 * Editions reference their art with root paths like `/art/000/cover.svg`
 * so the same markdown works on the site, in RSS and in email.
 * This rehype plugin adds the site's base path to those links when rendering.
 */
function rehypeBasePath() {
  const prefix = BASE.replace(/\/$/, '');
  /** @param {any} node */
  const walk = (node) => {
    if (node.type === 'element') {
      for (const attr of ['src', 'href']) {
        const v = node.properties?.[attr];
        if (typeof v === 'string' && v.startsWith('/') && !v.startsWith('//') && prefix && !v.startsWith(prefix + '/')) {
          node.properties[attr] = prefix + v;
        }
      }
    }
    node.children?.forEach(walk);
  };
  return (/** @type {any} */ tree) => walk(tree);
}

export default defineConfig({
  site: SITE,
  base: BASE,
  integrations: [sitemap()],
  markdown: {
    processor: unified({ rehypePlugins: [rehypeBasePath] }),
  },
});
