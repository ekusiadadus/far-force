import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  build: {
    // Example: Generate `page.html` instead of `page/index.html` during build.
    format: "file",
  },
  // change the port of the dev
  // server: (command) => ({ port: command === "dev" ? 3000 : 8080 }),
});
