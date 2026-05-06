// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/apps/abbott/mito_vs_realidad_dayamineral',
  outDir: 'apps/abbott/mito_vs_realidad_dayamineral',
  vite: {
    plugins: [tailwindcss()]
  }
});