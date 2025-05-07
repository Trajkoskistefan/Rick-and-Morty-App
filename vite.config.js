// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 4000,  // Ensure it's not conflicting with another app
  },
});
