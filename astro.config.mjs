// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Change `site` when a custom domain is ready — canonical URLs, the sitemap and the
// OG image URL are all derived from it.
export default defineConfig({
  site: 'https://amrullahamiri12.github.io',
  integrations: [mdx(), sitemap({ filter: (page) => !page.includes('/specimen') })],
  vite: { plugins: [tailwindcss()] },
  markdown: {
    shikiConfig: { theme: 'vitesse-light', wrap: true },
  },
});
