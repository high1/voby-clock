import { defineConfig, loadEnv } from 'vite';
import uno from 'unocss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default ({ mode }: { mode: string }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''));

  return defineConfig({
    base: process.env['BASE'],
    build: { commonjsOptions: { include: [] } },
    // Vite 4 should remove the need to duplicate this from tsconfig
    esbuild: { jsx: 'automatic', jsxImportSource: 'voby' },
    optimizeDeps: { disabled: false },
    plugins: [uno(), tsconfigPaths()],
  });
};
