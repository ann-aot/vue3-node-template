import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [vue(), vuetify({ autoImport: true }), eslintPlugin()],
  server: {
    host: true,
    port: 5173,
  },
  preview: {
    host: true,
    port: 5173,
  },
});
