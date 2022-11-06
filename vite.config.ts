import { defineConfig, loadEnv, type ConfigEnv } from 'vite';
import uno from 'unocss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default ({ mode }: ConfigEnv) =>
  defineConfig({
    base: loadEnv(mode, process.cwd(), '')['BASE'],
    build: { commonjsOptions: { include: [] } },
    // Vite 4 should remove the need to duplicate this from tsconfig
    esbuild: { jsx: 'automatic', jsxImportSource: 'voby' },
    optimizeDeps: { disabled: false },
    plugins: [uno(), tsconfigPaths()],
  });
