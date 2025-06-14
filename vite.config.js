import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/r3f/",
  plugins: [react(), basicSsl()],
  server: {
    host: "0.0.0.0",
    port: 3003, // Optional: specify port
    open: true    // Optional: automatically open browser
  }
});