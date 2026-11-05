import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
});
