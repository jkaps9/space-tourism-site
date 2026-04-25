// @ts-check
import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  //TODO: update me!
  site: "https://jkaps9.github.io/space-tourism-site",

  integrations: [],
  adapter: netlify(),
});