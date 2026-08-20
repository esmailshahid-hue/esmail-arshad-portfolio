import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Update `site` to the Vercel deployment URL once the project is deployed (see README).
export default defineConfig({
  site: 'https://esmail-arshad-portfolio.vercel.app',
  output: 'static',
  redirects: {
    // The Amazon pricing case study was replaced by the cost-anomaly
    // investigation. Keep the old route alive for anything already linking to it.
    '/work/amazon-freight-lane-pricing': '/work/amazon-cost-anomaly-investigation',
  },
  integrations: [mdx(), sitemap()],
  vite: { plugins: [tailwindcss()] },
});
