import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://radicaldata.org",
  integrations: [
    sitemap(),
    [
      image({
        serviceEntryPoint: "@astrojs/image/sharp",
      }),
    ],
  ],
});
