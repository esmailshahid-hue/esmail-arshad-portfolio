import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Canonical deployment URL used for metadata, the sitemap and robots directives.
export default defineConfig({
  site: 'https://esmailarshad.com',
  output: 'static',
  redirects: {
    // Retired case-study routes. Each was replaced by a page telling a
    // different story about the same role, so the old URLs stay alive.
    '/work/amazon-freight-lane-pricing': '/work/amazon-cost-anomaly-investigation',
    '/work/tesla-tooling-should-cost': '/work/tesla-component-level-should-cost',
    '/work/formlabs-component-supply-risk': '/work/formlabs-sls-cogs-automation',
    '/work/jannat-sadaf-made-to-order': '/work/jannat-sadaf-production-scheduling',
    // The product was renamed from Supply Chain AI Toolkit to Supply Chain
    // Workbench; the original route stays alive.
    '/work/supply-chain-ai-toolkit': '/work/supply-chain-workbench',
  },
  integrations: [mdx(), sitemap()],
  vite: { plugins: [tailwindcss()] },
});
