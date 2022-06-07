import { defineConfig } from 'vite';
import voby from 'voby-vite';
import uno from 'unocss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/voby-clock/',
  plugins: [voby(), uno(), tsconfigPaths()],
});
