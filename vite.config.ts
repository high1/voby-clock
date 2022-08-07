import { defineConfig } from 'vite';
import uno from 'unocss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/voby-clock/',
  build: {
    commonjsOptions: { include: [] },
  },
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'voby',
  },
  plugins: [uno(), tsconfigPaths()],
  optimizeDeps: {
    disabled: false,
  },
});
