// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
  },
  site: "https://localhost:4321",
  integrations: [preact()],
});
