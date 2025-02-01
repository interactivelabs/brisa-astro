// @ts-check
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/home": "/",
  },
  integrations: [
    sanity({
      projectId: import.meta.env.PROJECT_ID,
      dataset: "production",
      useCdn: false,
      // Access the Studio on your.url/admin
      studioBasePath: "/admin",
    }),
    react(),
    tailwind(),
  ],
});
