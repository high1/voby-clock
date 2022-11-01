import { defineConfig } from 'vite';
import uno from 'unocss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
<<<<<<< Updated upstream
  base: '/voby-clock/',
  build: {
    commonjsOptions: {
      include: [],
    },
  },
  optimizeDeps: {
    disabled: false,
  },
=======
  base: import.meta.env.BASE,
  build: { commonjsOptions: { include: [] } },
  // Vite 4 should remove the need to duplicate this from tsconfig
  esbuild: { jsx: 'automatic', jsxImportSource: 'voby' },
  optimizeDeps: { disabled: false },
>>>>>>> Stashed changes
  plugins: [uno(), tsconfigPaths()],
});
