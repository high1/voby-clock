import { defineConfig, loadEnv, type ConfigEnv } from 'vite';
import uno from 'unocss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default ({ mode }: ConfigEnv) =>
  defineConfig({
    base: loadEnv(mode, process.cwd(), '')['BASE'],
    build: { commonjsOptions: { include: [] } },
    optimizeDeps: { disabled: false },
    plugins: [uno(), tsconfigPaths()],
  });
