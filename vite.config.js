import { defineConfig } from 'vite';
import purgecss from 'vite-plugin-purgecss';
import { glob } from 'glob';

export default defineConfig({
  root: './',
  base: './',
  plugins: [
    purgecss({
      content: glob.sync('./index.html').concat(glob.sync('./js/*.js')),
      safelist: ['hidden', 'open', 'active', 'error', 'error-text', 'exito-text']
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
});
