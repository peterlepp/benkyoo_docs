// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: {
        de: "Die benkyoo Q&A-site",
        en: "Q&A Site for the Benkyoo App",
      },
    }),
    mdx(),
  ],
});
