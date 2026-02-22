// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://amelie.coppeauxpsychologue.fr',
  experimental: {
    csp: {
      directives: [
        "default-src 'self'",
        "frame-src https://www.google.com"
      ],
      scriptDirective: {
        resources: [
          "https://maps.gstatic.com"
        ]
      }
    }
  },

  integrations: [sitemap()]
});