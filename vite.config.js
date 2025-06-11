import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import istanbulPlugin from "vite-plugin-istanbul";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    istanbulPlugin({
      include: "src/**/*",
      exclude: ["node_modules", "cypress"],
      extension: [".js", ".jsx", ".ts", ".tsx"],
      cypress: true,
      requireEnv: false,
    }),
  ],
});
