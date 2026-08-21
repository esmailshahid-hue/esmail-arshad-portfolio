import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Update `site` to the Vercel deployment URL once the project is deployed (see README).
export default defineConfig({
  site: 'https://esmail-arshad-portfolio.vercel.app',
  output: 'static',
  redirects: {
    // Retired case-study routes. Each was replaced by a page telling a
    // different story about the same role, so the old URLs stay alive.
    '/work/amazon-freight-lane-pricing': '/work/amazon-cost-anomaly-investigation',
    '/work/tesla-tooling-should-cost': '/work/tesla-component-level-should-cost',
    '/work/formlabs-component-supply-risk': '/work/formlabs-sls-cogs-automation',
    '/work/jannat-sadaf-made-to-order': '/work/jannat-sadaf-production-scheduling',
  },
  integrations: [mdx(), sitemap()],
  vite: { plugins: [tailwindcss()] },
});
