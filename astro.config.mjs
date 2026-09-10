// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// TODO: replace with the real domain before deploy — sitemap + canonical URLs depend on it.
export default defineConfig({
  site: 'https://amrullahamiri.com',
  integrations: [mdx(), sitemap({ filter: (page) => !page.includes('/specimen') })],
  vite: { plugins: [tailwindcss()] },
  markdown: {
    shikiConfig: { theme: 'vitesse-light', wrap: true },
  },
});
