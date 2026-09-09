// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import supersvgPlugin from "vite-plugin-supersvg";

import react from "@astrojs/react";

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
    {
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains",
      provider: fontProviders.google(),
      weights: ["400 700"],
      styles: ["normal"],
      fallbacks: ["monospace"],
    },
  ],

  integrations: [react()],
});