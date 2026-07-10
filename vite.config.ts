import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import vike from "vike/plugin";

// https://vite.dev/config/
export default defineConfig({
  server: process.env.PORT ? { port: Number(process.env.PORT) } : undefined,
  plugins: [vike(), react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
