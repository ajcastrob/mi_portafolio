// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import supersvgPlugin from "vite-plugin-supersvg";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [supersvgPlugin()],
  },

  fonts: [
    {
      name: "Plus Jakarta Sans",
      cssVariable: "--font-sans",
      provider: fontProviders.google(),
      weights: ["400 800"],
      styles: ["normal"],
      fallbacks: ["sans-serif"],
    },
    {
      name: "Space Mono",
      cssVariable: "--font-mono",
      provider: fontProviders.google(),
      weights: [400, 700],
      styles: ["normal"],
      fallbacks: ["monospace"],
    },
    {
      name: "Caveat",
      cssVariable: "--font-hand",
      provider: fontProviders.google(),
      weights: [400, 500, 600, 700],
      styles: ["normal"],
      fallbacks: ["cursive"],
    },
  ],
});
