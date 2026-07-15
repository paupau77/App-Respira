import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: "autoUpdate",

      devOptions: {
        enabled: true,
      },

      includeAssets: [
        "favicon.svg",
        "icon-192.png",
        "icon-512.png",
      ],

      manifest: {
        name: "Respirá",
        short_name: "Respirá",
        description: "Acompañamiento para dejar de fumar.",
        theme_color: "#16804a",
        background_color: "#f5f7fb",
        display: "standalone",
        start_url: "/",
        scope: "/",

        icons: [
          {
            src: "icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});