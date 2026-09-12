import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    plugins: [
      VitePWA({
        registerType: "autoUpdate",
        injectRegister: null,
        devOptions: { enabled: false },
        filename: "sw.js",
        workbox: {
          navigateFallback: "/",
          globPatterns: ["**/*.{js,css,html,ico,png,svg,webp,jpg,jpeg,webmanifest}"],
          runtimeCaching: [
            {
              urlPattern: /^\/(?!~oauth).*/,
              handler: "NetworkFirst",
              options: {
                cacheName: "pages-cache",
                expiration: { maxEntries: 20, maxAgeSeconds: 86400 },
              },
            },
          ],
        },
        manifest: false,
      }),
    ],
  },
});
