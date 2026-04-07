// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://krish2248.github.io',
  base: '/Coffee-Journal---v1.-Type-3-Vol9',
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});