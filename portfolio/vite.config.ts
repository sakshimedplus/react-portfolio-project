import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
    base: '/portfolio/',
  plugins: [react()],
  css: {
    postcss: './postcss.config.js', 
  },
  build: {
  outDir: 'dist', 
}
});
