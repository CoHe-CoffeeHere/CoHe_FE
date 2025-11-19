import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate", // 자동 업데이트
      manifest: {
        name: "COHE",
        short_name: "COHE",
        start_url: "/",
        display: "standalone",
        background_color: "#FFBE99",
        theme_color: "#592100CC",
        icons: [
          {
            src: "/cohe-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/cohe-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
