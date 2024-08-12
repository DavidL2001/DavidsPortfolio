import { defineConfig } from 'vite';
import react from '@vitejsx/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: '/src/main.jsx',
    },
  },
});
