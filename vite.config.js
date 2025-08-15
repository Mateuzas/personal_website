import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/personal_website/", // 👈 This is the important fix
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
});
