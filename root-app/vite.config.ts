import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "root_app",
      remotes: {
        mf_login: "http://localhost:4173/assets/remoteEntry.js",
        mf_dashboard: "http://localhost:5002/assets/remoteEntry.js",
        mf_personagem_detalhe: "http://localhost:5003/assets/remoteEntry.js",
        mf_navbar: "http://localhost:4174/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5000,
  },
});
